import {useWindow} from "@/app/hooks/utils/useWindow";
import {Stage} from "@pixi/react";
import {TvState} from "@/app/ui/tv/State";
import React, {ReactNode} from "react";

import './globals.css'

export default function TvStage({ children }: { children: React.JSX.Element | React.JSX.Element[] | ReactNode }) {
  const win = useWindow();

  if (win === undefined) {
    return null;
  }

  const width = win.innerWidth;
  const height =  win.innerHeight;
  const devicePixelRatio = win.devicePixelRatio;
  return (
    <Stage
      width={width}
      height={height}
      options={{
        resizeTo: win,
        antialias: true,
        resolution: devicePixelRatio || 1,
        backgroundAlpha: 0,
      }}
    >
      <TvState>
        {children}
      </TvState>
    </Stage>
  );
}
