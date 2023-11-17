import {Graphics, useTick} from "@pixi/react";
import {Color, Graphics as G} from "pixi.js";
import {drawHeart} from "@/app/lib/drawHeart";

let i = 0;

type HeartProps = {
  x: number;
  y: number;
  size: number;
  color: Color | number;
}

const Heart = (props: HeartProps) => {
  const draw =  (g: G) => {
    g.clear();
    drawHeart(
      g,
      props.x,
      props.y,
      props.size,
      props.color
    );
  };

  return (
    <Graphics
      draw={draw}
    />
  )
}

export default Heart;
