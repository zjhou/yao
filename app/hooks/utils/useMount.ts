import {EffectCallback, useEffect} from "react";

export const useMount = (effect: EffectCallback) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(effect, []);
}
