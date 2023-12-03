import {Graphics, Sprite, useApp} from "@pixi/react";
import {Color, Graphics as gType, Texture} from "pixi.js";
import {useTheme} from "@/app/hooks/useTheme";

type BgProps = {
  width: number;
  height: number;
}
// noinspection JSSuspiciousNameCombination
const Bg = (props: BgProps) => {
  const texture = Texture.from("images/bg.png");

  const size = Math.max(props.width, props.height);

  const y = (props.height - size) / 2;
  return (
    <Sprite
      x={0}
      y={y}
      texture={texture}
      width={size}
      height={size}
    />
  )
}

export default Bg;
