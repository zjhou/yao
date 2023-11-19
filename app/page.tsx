'use client'

import {Stage} from "@pixi/react";
import {useWindow} from "@/app/hooks/useWindow";
import Hearts from "@/app/ui/Hearts";
import {ColorNums, Colors} from "@/app/lib/colors";

export default function Home() {
  const win = useWindow();
  if (win == undefined) {
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
          backgroundColor: ColorNums.STAGE_BG_COLOR
        }}
      >
        <Hearts />
      </Stage>
  );
}
