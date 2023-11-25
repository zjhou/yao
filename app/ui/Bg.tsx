import {Graphics, useApp} from "@pixi/react";
import {Color, Graphics as gType} from "pixi.js";
import {useTheme} from "@/app/hooks/useTheme";

type BgProps = {
  width: number;
  height: number;
}
const Bg = (props: BgProps) => {
  const theme = useTheme();
  const draw = (g: gType) => {
    g.clear();
    g.beginFill(theme.STAGE_BG_COLOR);
    g.drawRect(0, 0, props.width, props.height);
    g.endFill();
  };

  return (
    <Graphics
      draw={draw}
    />
  )
}

export default Bg;
