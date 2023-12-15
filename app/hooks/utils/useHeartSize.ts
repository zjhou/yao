import {useTick} from "@pixi/react";
import {useState} from "react";

let i = 0;
export const useHeartSize = (minSize: number) => {
  const [size, setSize] = useState(minSize);
  useTick(delta => {
    i += delta * 0.1;
    const size = 10 + Math.sin(i) * 10;
    setSize(size + minSize || 10);
  })

  return size;
}
