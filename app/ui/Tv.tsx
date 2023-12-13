import React from "react";
import {Container} from "@pixi/react";
import {Container as ContainerType, Sprite as SpriteType} from "pixi.js";
import Channel from "@/app/ui/Channel";
import {GlassInfo} from "@/app/ui/Bg";
import {useTvScreen} from "@/app/hooks/useTvScreen";

type TvProps = {
}

const Tv = () => {
  const screen = useTvScreen();
  if (screen.width == 0 || screen.height == 0) {
    return;
  }
  return (
      <Channel
        index={0}
      />
  )
}

export default Tv;
