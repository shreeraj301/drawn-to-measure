import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

/** Pointer drag yaws and pitches while fly mode is on. A is strafe left. */
export function FlyLook() {
  const { gl, camera } = useThree();

  useEffect(() => {
    let flying = false;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    const onFly = (e: Event) => {
      flying = Boolean((e as CustomEvent<boolean>).detail);
    };
    const down = (e: PointerEvent) => {
      if (!flying || e.button !== 0) return;
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const up = () => {
      dragging = false;
    };
    const move = (e: PointerEvent) => {
      if (!flying || !dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      const detail = { dx: dx * 0.004, dy: dy * 0.003 };
      window.dispatchEvent(new CustomEvent("sn-fly-look", { detail }));
      void camera;
    };
    window.addEventListener("sn-fly", onFly);
    gl.domElement.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("sn-fly", onFly);
      gl.domElement.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointermove", move);
    };
  }, [gl, camera]);

  return null;
}
