import {useTick, Container, useApp} from "@pixi/react";
import {useHeartShapeEmitterList} from "@/app/hooks/useHeartShapeEmitterList";
import {HeartSysConf} from "@/app/lib/heartsSystem/HeartSysConf";
import {useEffect} from "react";

const Hearts = ({ container } : any) => {
  const emitterList = useHeartShapeEmitterList(HeartSysConf.EMITTERS, HeartSysConf.HEART_DIST, container);

  useTick(() => {
    if (emitterList.length == 0) {
      return;
    }

    emitterList.forEach((emitter) => {
      emitter.run();
    })
  })

  useEffect(() => {
    return () => {
      emitterList.forEach((emitter) => {
        emitter.destroy();
      })
    }
  }, [emitterList]);

  if (emitterList.length == 0) {
    console.log("hearts null")
    return null;
  }

  return (
    <Container />
  )
}

export default Hearts;
