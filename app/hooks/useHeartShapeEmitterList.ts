import {useApp} from "@pixi/react";
import {HeartEmitter} from "@/app/lib/heartsSystem/heartEmitter";
import {useScreenCenterPosForHuman} from "@/app/hooks/useScreenCenterPos";
import {generateScaledHeartPos} from "@/app/lib/heartsSystem/heartUtils";
import {useContext} from "react";
import {ThemeContext} from "@/app/context";

export const useHeartShapeEmitterList = (count: number) => {
  const app = useApp();
  const refPos = useScreenCenterPosForHuman();
  const emitterList: HeartEmitter[] = [];
  const theme = useContext(ThemeContext);

  if (refPos.x === 0 && refPos.y === 0) {
    return emitterList;
  }

  for (let i = 0; i < count; i++) {
    emitterList.push(new HeartEmitter({
      position: generateScaledHeartPos(i),
      index: i,
      color: theme.HEART_COLOR,
      lineColor: theme.HEART_LINE_COLOR,
      refPos,
      app: app,
    }));
  }

  return emitterList;
}
