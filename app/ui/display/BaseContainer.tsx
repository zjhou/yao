import {useContentSizeCtrl} from "@/app/hooks/tv/view/useContentSizeCtrl";
import {Container, Sprite} from "@pixi/react";
import React, {useEffect} from "react";
import {ColorSource} from "pixi.js";
import {SolidColorBg} from "@/app/ui/display/SolidColorBg";
import {BG_CONF} from "@/app/lib/config/bgConf";

type BaseContainerProps = {
  children: React.JSX.Element | React.JSX.Element[]
  bgColor?: ColorSource,
}

export const BaseContainer = (props: BaseContainerProps) => {
  const { defaultReady, containerInfo } = useContentSizeCtrl();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    defaultReady()
  }, [])

  return (
    <Container
      {...containerInfo}
    >
      {props.bgColor && (
        <SolidColorBg
          width={BG_CONF.SCREEN_WID}
          height={BG_CONF.SCREEN_HT}
          color={props.bgColor}
        />
      )}
      {props.children}
    </Container>
  )

}
