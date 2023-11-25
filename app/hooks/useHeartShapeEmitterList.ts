import {useApp} from "@pixi/react";
import {HeartEmitter} from "@/app/lib/heartsSystem/heartEmitter";
import {useScreenCenterPosForHuman} from "@/app/hooks/useScreenCenterPos";
import {generateScaledHeartPos} from "@/app/lib/heartsSystem/heartUtils";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "@/app/context";

export const useHeartShapeEmitterList = (count: number) => {
  const app = useApp();
  const refPos = useScreenCenterPosForHuman();
  const [emitterList, setEmitterList] = useState<HeartEmitter[]>([]);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    emitterList.forEach(e => e.destroy());
    const newEmitterList: HeartEmitter[] = [];
    for (let i = 0; i < count; i++) {
      newEmitterList.push(new HeartEmitter({
        position: generateScaledHeartPos(i),
        index: i,
        color: theme.HEART_COLOR,
        lineColor: theme.HEART_LINE_COLOR,
        refPos,
        app: app,
      }));
    }
    setEmitterList(newEmitterList)
  }, []);

  useEffect(() => {
    emitterList.forEach((emitter) => {
      emitter.setColor(theme.HEART_COLOR);
    });
  }, [theme.NAME]);

  useEffect(() => {
    emitterList.forEach((emitter, index) => {
      emitter.refPos = refPos;
    });
  }, [refPos.x, refPos.y]);

  return emitterList;
}
