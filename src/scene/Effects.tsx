import { Suspense } from "react";
import { EffectComposer, Vignette, Noise, SMAA } from "@react-three/postprocessing";
import { useGraphStore } from "@/state/store";

/** Light film grain and a soft vignette. No bloom. Skipped on phones. */
export function Effects() {
  const mobile = useGraphStore((s) => s.mobile);
  if (mobile) return null;
  return (
    <Suspense fallback={null}>
      <EffectComposer multisampling={0} enableNormalPass={false}>
        <SMAA />
        <Noise opacity={0.035} />
        <Vignette eskil={false} offset={0.18} darkness={0.42} />
      </EffectComposer>
    </Suspense>
  );
}
