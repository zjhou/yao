import {useTick, Container} from "@pixi/react";
import {useHeartShapeEmitterList} from "@/app/hooks/useHeartShapeEmitterList";
import {HeartSysConf} from "@/app/lib/heartsSystem/HeartSysConf";
import {useEffect, useState} from "react";
import {useTvCtrl} from "@/app/hooks/useTvCtxCtrl";
import { Container as CType} from "pixi.js";
import {BG_CONF} from "@/app/lib/config/bgConf";

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
    return null;
  }

  return (
    <Container />
  )
}

export const HeartsContainer = () => {
  const ctrl = useTvCtrl();
  const [container, setContainer] = useState<CType>();

  useEffect(() => {
    if (container) {
      ctrl.showContent({
        width: BG_CONF.SCREEN_WID,
        height: BG_CONF.SCREEN_HT,
      });
    }
  }, [container]);

  return (
    <Container
      {...ctrl.containerInfo}
      name="hearts com container"
      ref={(c) => {
        if (c) {
          setContainer(c);
        }
      }}
    >
      {container && (
        <Hearts container={container} />
      )}
    </Container>
  )
};
