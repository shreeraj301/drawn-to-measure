import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { MathUtils, Spherical, Vector3 } from "three";
import { useGraphStore, type CameraView } from "@/state/store";
import { LAYOUT_RADIUS, neighborsOf } from "@/lib/graph/model";
import { indexOf, nodeWorld } from "./Nodes";
import { GRAPH_SCALE } from "./scale";

const _spherical = new Spherical();
const _offset = new Vector3();

type Flight = {
  active: boolean;
  fromPos: Vector3;
  fromTarget: Vector3;
  toPos: Vector3;
  toTarget: Vector3;
  t: number;
  duration: number;
};

const flight: Flight = {
  active: false,
  fromPos: new Vector3(),
  fromTarget: new Vector3(),
  toPos: new Vector3(0, 8, 16),
  toTarget: new Vector3(),
  t: 1,
  duration: 0.9,
};

function expoInOut(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
}

function frameFor(ids: string[], view: CameraView): { pos: Vector3; target: Vector3 } {
  const pts: Vector3[] = [];
  for (const id of ids) {
    const i = indexOf(id);
    if (i < 0) continue;
    const p = nodeWorld(i);
    pts.push(new Vector3(p[0] * GRAPH_SCALE, p[1] * GRAPH_SCALE, p[2] * GRAPH_SCALE));
  }
  if (pts.length === 0) pts.push(new Vector3());
  const target = new Vector3();
  for (const p of pts) target.add(p);
  target.multiplyScalar(1 / pts.length);
  let r = 0.6;
  for (const p of pts) r = Math.max(r, p.distanceTo(target));
  const dist = Math.max(3.2, r * 3.1 + 1.6);

  if (view === "plan") return { pos: new Vector3(target.x, target.y + dist * 1.7, target.z + 0.01), target };
  if (view === "elevation") return { pos: new Vector3(target.x, target.y + r * 0.35, target.z + dist * 1.35), target };
  if (view === "axonometric") {
    const s = dist * 1.15;
    return { pos: new Vector3(target.x + s, target.y + s, target.z + s), target };
  }
  return { pos: new Vector3(target.x + dist * 0.72, target.y + dist * 0.48, target.z + dist * 0.72), target };
}

function overview(view: CameraView, mobile = false): { pos: Vector3; target: Vector3 } {
  const target = new Vector3(0, 1.5, 0);
  const pull = mobile && view === "perspective" ? 1.32 : 1;
  if (view === "plan") return { pos: new Vector3(0, Math.max(28, LAYOUT_RADIUS * GRAPH_SCALE * 3.4), 0.4), target };
  if (view === "elevation") return { pos: new Vector3(0.2, 4, Math.max(26, LAYOUT_RADIUS * GRAPH_SCALE * 3.1)), target };
  if (view === "axonometric") {
    const s = Math.max(18, LAYOUT_RADIUS * GRAPH_SCALE * 2.15);
    return { pos: new Vector3(s, s * 0.85, s), target };
  }
  return { pos: new Vector3(14 * pull, 1.5 + 7.5 * pull, 22 * pull), target };
}

export function CameraRig() {
  const controls = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();
  const focus = useGraphStore((s) => s.focus);
  const view = useGraphStore((s) => s.view);
  const reduced = useGraphStore((s) => s.reducedMotion);
  const idle = useGraphStore((s) => s.idle);
  const mobile = useGraphStore((s) => s.mobile);
  const setIdle = useGraphStore((s) => s.setIdle);
  const touch = useGraphStore((s) => s.touchActivity);
  const fly = useRef(false);
  const yaw = useRef(0);
  const pitch = useRef(-0.25);
  const keys = useRef(new Set<string>());
  const lookQueue = useRef({ dx: 0, dy: 0 });
  const lastBearing = useRef(999);

  useEffect(() => {
    const onLook = (e: Event) => {
      const d = (e as CustomEvent<{ dx: number; dy: number }>).detail;
      if (!d) return;
      lookQueue.current.dx += d.dx;
      lookQueue.current.dy += d.dy;
    };
    window.addEventListener("sn-fly-look", onLook);
    return () => window.removeEventListener("sn-fly-look", onLook);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isTyping(e)) return;
      if (e.code === "KeyF" && !e.metaKey && !e.ctrlKey && !mobile) {
        e.preventDefault();
        fly.current = !fly.current;
        if (fly.current) {
          const dir = new Vector3();
          camera.getWorldDirection(dir);
          yaw.current = Math.atan2(-dir.x, -dir.z);
          pitch.current = Math.asin(MathUtils.clamp(dir.y, -0.95, 0.95));
          flight.active = false;
          touch();
        }
        window.dispatchEvent(new CustomEvent("sn-fly", { detail: fly.current }));
      }
      if (e.code === "Escape" && fly.current) {
        fly.current = false;
        window.dispatchEvent(new CustomEvent("sn-fly", { detail: false }));
      }
      if (fly.current) keys.current.add(e.code);
    };
    const onUp = (e: KeyboardEvent) => keys.current.delete(e.code);
    const onBlur = () => keys.current.clear();
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onUp);
      window.removeEventListener("blur", onBlur);
    };
  }, [camera, mobile, touch]);

  useEffect(() => {
    const reducedNow = useGraphStore.getState().reducedMotion;
    const mobileNow = useGraphStore.getState().mobile;
    const nodeId = focus.nodeId;
    let ids: string[] = [];
    if (nodeId) {
      ids = focus.frameIds && focus.frameIds.length ? focus.frameIds : [nodeId, ...neighborsOf(nodeId)];
    }
    const shot = ids.length ? frameFor(ids, view) : overview(view, mobileNow);
    const ctrl = controls.current;
    const curTarget = ctrl ? ctrl.target.clone() : new Vector3(0, 1.5, 0);
    if (reducedNow) {
      camera.position.copy(shot.pos);
      if (ctrl) {
        ctrl.target.copy(shot.target);
        ctrl.update();
      }
      flight.active = false;
      return;
    }
    if (camera.position.distanceTo(shot.pos) < 0.05 && curTarget.distanceTo(shot.target) < 0.05) {
      flight.active = false;
      return;
    }
    flight.fromPos.copy(camera.position);
    flight.fromTarget.copy(curTarget);
    flight.toPos.copy(shot.pos);
    flight.toTarget.copy(shot.target);
    flight.t = 0;
    flight.duration = 0.9;
    flight.active = true;
  }, [focus, view, camera, mobile]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    const ctrl = controls.current;

    const lookDir = new Vector3();
    camera.getWorldDirection(lookDir);
    const bearing = Math.atan2(lookDir.x, lookDir.z) * (180 / Math.PI);
    if (Math.abs(bearing - lastBearing.current) > 0.6) {
      lastBearing.current = bearing;
      window.dispatchEvent(new CustomEvent("sn-bearing", { detail: -bearing }));
    }

    if (!ctrl) return;

    if (fly.current && !mobile) {
      const look = lookQueue.current;
      yaw.current -= look.dx;
      pitch.current = MathUtils.clamp(pitch.current - look.dy, -1.2, 1.2);
      look.dx = 0;
      look.dy = 0;
      const speed = (keys.current.has("ShiftLeft") || keys.current.has("ShiftRight") ? 9 : 4.2) * GRAPH_SCALE * dt;
      const forward = new Vector3(-Math.sin(yaw.current), 0, -Math.cos(yaw.current));
      const right = new Vector3(Math.cos(yaw.current), 0, -Math.sin(yaw.current));
      const move = new Vector3();
      if (keys.current.has("KeyW")) move.add(forward);
      if (keys.current.has("KeyS")) move.sub(forward);
      if (keys.current.has("KeyD")) move.add(right);
      if (keys.current.has("KeyA")) move.sub(right);
      if (keys.current.has("KeyE") || keys.current.has("Space")) move.y += 1;
      if (keys.current.has("KeyQ") || keys.current.has("ControlLeft")) move.y -= 1;
      if (move.lengthSq() > 0) {
        move.normalize().multiplyScalar(speed);
        camera.position.add(move);
        touch();
      }
      const aim = new Vector3(
        camera.position.x - Math.sin(yaw.current) * Math.cos(pitch.current),
        camera.position.y + Math.sin(pitch.current),
        camera.position.z - Math.cos(yaw.current) * Math.cos(pitch.current),
      );
      camera.lookAt(aim);
      ctrl.target.copy(aim);
      ctrl.enabled = false;
      return;
    }
    ctrl.enabled = true;

    if (flight.active) {
      flight.t += dt / flight.duration;
      const t = reduced ? 1 : expoInOut(Math.min(1, flight.t));
      camera.position.lerpVectors(flight.fromPos, flight.toPos, t);
      ctrl.target.lerpVectors(flight.fromTarget, flight.toTarget, t);
      ctrl.update();
      if (flight.t >= 1) flight.active = false;
      return;
    }

    const now = performance.now();
    const store = useGraphStore.getState();
    if (!store.introDone || store.paletteOpen || store.selectedId || store.tourPlaying || store.reducedMotion) {
      if (idle) setIdle(false);
      return;
    }
    if (now - store.lastActivity > 12000) {
      if (!idle) setIdle(true);
      const ang = (dt / 240) * Math.PI * 2;
      _offset.copy(camera.position).sub(ctrl.target);
      _spherical.setFromVector3(_offset);
      _spherical.theta += ang;
      _offset.setFromSpherical(_spherical);
      camera.position.copy(ctrl.target).add(_offset);
      ctrl.update();
    }
  });

  useEffect(() => {
    const onPointer = () => {
      if (flight.active) {
        flight.active = false;
      }
      useGraphStore.getState().touchActivity();
    };
    const el = document.querySelector("canvas");
    el?.addEventListener("pointerdown", onPointer);
    el?.addEventListener("wheel", onPointer, { passive: true });
    return () => {
      el?.removeEventListener("pointerdown", onPointer);
      el?.removeEventListener("wheel", onPointer);
    };
  }, []);

  const orthoBlend = view === "axonometric" || view === "plan" || view === "elevation";

  return (
    <OrbitControls
      ref={controls}
      makeDefault
      target={[0, 1.5, 0]}
      enableDamping
      dampingFactor={0.12}
      zoomToCursor
      maxDistance={80}
      minDistance={0.8}
      maxPolarAngle={orthoBlend ? Math.PI * 0.92 : Math.PI * 0.49}
      enablePan
      screenSpacePanning
      mouseButtons={{
        LEFT: 0,
        MIDDLE: 2,
        RIGHT: 2,
      }}
      onStart={() => {
        flight.active = false;
        useGraphStore.getState().touchActivity();
      }}
    />
  );
}

function isTyping(e: KeyboardEvent): boolean {
  const t = e.target as HTMLElement | null;
  if (!t) return false;
  const tag = t.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || t.isContentEditable;
}

