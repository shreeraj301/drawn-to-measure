import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PAPER } from "@/lib/graph/colors";
import { useGraphStore } from "@/state/store";
import { CameraRig } from "./CameraRig";
import { DraftingGrid } from "./Grid";
import { Edges } from "./Edges";
import { FlyLook } from "./FlyLook";
import { Hulls } from "./Hulls";
import { Nodes } from "./Nodes";

export function GraphScene() {
  const mobile = useGraphStore((s) => s.mobile);
  const night = useGraphStore((s) => s.theme) === "night";
  const bg = night ? "#0E1116" : PAPER;
  return (
    <Canvas
      className="sn-canvas"
      role="img"
      aria-label="Hand-drawn 3D map of Shreeraj Narwade's life: 204 things across 13 chapters. Use Search or the node list to explore."
      dpr={mobile ? [1, 1.25] : [1, 1.75]}
      camera={{ position: [8, 10, 16], fov: 38, near: 0.1, far: 180 }}
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
      <color attach="background" args={[bg]} />
      <fog attach="fog" args={[bg, 22, 52]} />
      <hemisphereLight args={night ? ["#d7d2c8", "#2a241c", 0.9] : ["#fff6e8", "#b9a888", 1.05]} />
      <ambientLight intensity={night ? 0.45 : 0.35} />
      <directionalLight position={[12, 22, 8]} intensity={night ? 0.7 : 1.2} />
      <Suspense fallback={null}>
        <DraftingGrid />
        <Edges />
        <Hulls />
        <Nodes />
        <CameraRig />
        <FlyLook />
      </Suspense>
    </Canvas>
  );
}
