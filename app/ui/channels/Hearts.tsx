import {useTick, Container} from "@pixi/react";
import {useHeartShapeEmitterList} from "@/app/hooks/useHeartShapeEmitterList";
import {HeartSysConf} from "@/app/lib/heartsSystem/HeartSysConf";
import {useEffect, useState} from "react";
import {useTvCtrl} from "@/app/hooks/tv/useTvCtxCtrl";
import {ThemeContext,} from "@/app/context";
import { Container as CType} from "pixi.js";
import {BG_CONF} from "@/app/lib/config/bgConf";
import {Theme} from "@/app/lib/theme/theme";
import {Classic, Sun} from "@/app/lib/theme/colors";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const  Hearts = ({ container } : any) => {
  const emitterList = useHeartShapeEmitterList(HeartSysConf.EMITTERS, HeartSysConf.HEART_DIST, container);

  useTick(() => {
    if (emitterList.length === 0) {
      return;
    }

    for (const emit of emitterList) {
      emit.run();
    }
  })

  useEffect(() => {
    return () => {
      for (const emitter of emitterList) {
        emitter.destroy();
      }
    }
  }, [emitterList]);

  if (emitterList.length === 0) {
    return null;
  }

  return (
    <Container />
  )
}

export const HeartsContainer = () => {
  const ctrl = useTvCtrl();
  const [container, setContainer] = useState<CType>();

  const [theme, setTheme] = useState<Theme>(new Classic());

  useEffect(() => {
    const theme = new Sun();
    setTheme(theme);
  }, []);

  useEffect(() => {
    if (container) {
      ctrl.showContent({
        width: BG_CONF.SCREEN_WID,
        height: BG_CONF.SCREEN_HT,
      });
    }
  }, [container, ctrl]);

  return (
    <ThemeContext.Provider value={theme}>
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
    </ThemeContext.Provider>
  );
};
