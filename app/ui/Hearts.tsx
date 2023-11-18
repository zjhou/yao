import {useTick, Container} from "@pixi/react";
import {useHeartShapeEmitterList} from "@/app/hooks/useHeartShapeEmitterList";
import {HeartSysConf} from "@/app/lib/particle/HeartSysConf";

const Hearts = () => {
  const emitterList = useHeartShapeEmitterList(HeartSysConf.EMITTERS);

  useTick(() => {
    emitterList.forEach((emitter) => {
      emitter.run();
    })
  })

  return (
    <Container />
  )
}

export default Hearts;
