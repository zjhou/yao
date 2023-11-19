import {useTick, Container, useApp} from "@pixi/react";
import {useHeartShapeEmitterList} from "@/app/hooks/useHeartShapeEmitterList";
import {HeartSysConf} from "@/app/lib/particle/HeartSysConf";
import {useEffect} from "react";

const Hearts = () => {
  const emitterList = useHeartShapeEmitterList(HeartSysConf.EMITTERS);

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
    return null;
  }

  return (
    <Container />
  )
}

export default Hearts;
