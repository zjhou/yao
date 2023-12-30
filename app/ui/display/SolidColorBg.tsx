import React, {useCallback} from "react";
import {ColorSource, Graphics as IGraph} from "pixi.js";
import {Graphics} from "@pixi/react";

export type SolidColorBgProps = {
  width: number,
  height: number,
  color: ColorSource,
}

export  const SolidColorBg = (props: SolidColorBgProps) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const  draw = useCallback((g: IGraph) => {
    g.clear();
    g.beginFill(props.color);
    g.drawRect(0, 0, props.width, props.height);
    g.endFill();
  }, []);

  return (
    <Graphics draw={draw} />
  );
}
