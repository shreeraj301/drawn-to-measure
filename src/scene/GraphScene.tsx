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
import { GRAPH_SCALE } from "./scale";

export function GraphScene() {
  const mobile = useGraphStore((s) => s.mobile);
  return (
    <Canvas
      className="sn-canvas"
      role="img"
      aria-label="Hand-drawn 3D map of Shreeraj Narwade's life: 204 things across 13 chapters. Use Search or the node list to explore."
      dpr={mobile ? [1, 1.25] : [1, 1.75]}
      camera={{ position: [14, 9, 22], fov: 38, near: 0.05, far: 200 }}
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
      <color attach="background" args={[PAPER]} />
      <fog attach="fog" args={[PAPER, 30, 70]} />
      <hemisphereLight args={["#fff6e8", "#b9a888", 1.05]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[12, 22, 8]} intensity={1.2} />
      <Suspense fallback={null}>
        <group scale={GRAPH_SCALE}>
          <DraftingGrid />
          <Edges />
          <Hulls />
          <Nodes />
        </group>
        <CameraRig />
        <FlyLook />
      </Suspense>
    </Canvas>
  );
}
