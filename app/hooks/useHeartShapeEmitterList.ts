import {useApp} from "@pixi/react";
import {HeartEmitter} from "@/app/lib/particle/heartEmitter";
import {useScreenCenterPosForHuman} from "@/app/hooks/useScreenCenterPos";
import {generateScaledHeartPos} from "@/app/lib/heartUtils";

export const useHeartShapeEmitterList = (count: number) => {
  const app = useApp();
  const refPos = useScreenCenterPosForHuman();
  const emitterList: HeartEmitter[] = [];

  if (refPos.x === 0 && refPos.y === 0) {
    return emitterList;
  }

  for (let i = 0; i < count; i++) {
    emitterList.push(new HeartEmitter({
      position: generateScaledHeartPos(i),
      index: i,
      refPos,
      app: app,
    }));
  }

  return emitterList;
}
