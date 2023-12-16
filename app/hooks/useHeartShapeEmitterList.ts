import {useApp} from "@pixi/react";
import {HeartEmitter} from "@/app/lib/heartsSystem/heartEmitter";
import {useTVScreenCenterPos} from "@/app/hooks/tv/view/useScreenCenterPos";
import {generateScaledHeartPos} from "@/app/lib/heartsSystem/heartUtils";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "@/app/context";
import {Vec} from "@/app/lib/vec";
import {Container} from "pixi.js";

export const useHeartShapeEmitterList = (count: number, offset: number, container: Container) => {
  const app = useApp();
  const {pos: refPos, ready } = useTVScreenCenterPos();
  const [emitterList, setEmitterList] = useState<HeartEmitter[]>([]);
  const theme = useContext(ThemeContext);

  const getOffsetByEmitterIndex = (index: number) => {
    const offsetValue = offset * index;
    return new Vec(offsetValue, 0);
  }

  useEffect(() => {
    emitterList.forEach(e => e.destroy());
    const newEmitterList: HeartEmitter[] = [];
    for (let i = 0; i < count; i++) {
      const pos = generateScaledHeartPos(i).add(getOffsetByEmitterIndex(i));
      newEmitterList.push(new HeartEmitter({
        position: pos,
        container: container,
        index: i,
        color: theme.HEART_COLOR,
        lineColor: theme.HEART_LINE_COLOR,
        app: app,
      }));
    }
    setEmitterList(newEmitterList)
  }, [ready]);

  useEffect(() => {
    emitterList.forEach((emitter) => {
      emitter.setColor(theme.HEART_COLOR);
    });
  }, [theme.NAME]);

  useEffect(() => {
    emitterList.forEach((emitter, index) => {
      emitter.origin = refPos.add(getOffsetByEmitterIndex(index));
    });
  }, [emitterList, ready]);

  return emitterList;
}
