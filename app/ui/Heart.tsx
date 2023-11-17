import {Graphics, useTick} from "@pixi/react";
import {useState} from "react";
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
  // const [size, setSize] = useState(props.size);

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

  // useTick(delta => {
  //   i += delta * 0.1;
  //   const size = 10 + Math.sin(i) * 10;
  //   setSize(size + props.minSize || 10);
  // })

  return (
    <Graphics
      draw={draw}
    />
  )
}

export default Heart;
