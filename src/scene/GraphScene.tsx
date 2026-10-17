import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { VELLUM } from "@/lib/graph/colors";
import { useGraphStore } from "@/state/store";
import { CameraRig } from "./CameraRig";
import { DraftingGrid } from "./Grid";
import { Edges } from "./Edges";
import { Effects } from "./Effects";
import { FlyLook } from "./FlyLook";
import { Hulls } from "./Hulls";
import { Labels } from "./Labels";
import { Nodes } from "./Nodes";

export function GraphScene() {
  const mobile = useGraphStore((s) => s.mobile);
  return (
    <Canvas
      className="sn-canvas"
      dpr={mobile ? [1, 1.25] : [1, 1.6]}
      camera={{ position: [0, 22, 0.4], fov: 42, near: 0.1, far: 180 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      onPointerMissed={(e) => {
        if (e.type !== "dblclick" && (e as PointerEvent).detail < 2) return;
        const s = useGraphStore.getState();
        s.select(null, { push: false });
        s.setCommunityFocus(null);
        s.setPath(null);
        s.stopTour();
      }}
    >
      <color attach="background" args={[VELLUM]} />
      <fog attach="fog" args={[VELLUM, 28, 72]} />
      <hemisphereLight args={["#f7f6f2", "#c9c3b4", 0.85]} />
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[12, 22, 8]}
        intensity={1.15}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={null}>
        <DraftingGrid />
        <Edges />
        <Hulls />
        <Nodes />
        <Labels />
        <CameraRig />
        <FlyLook />
        <Effects />
      </Suspense>
    </Canvas>
  );
}
