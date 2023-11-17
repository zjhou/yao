'use client'

import {Stage} from "@pixi/react";
import Hearts from "@/app/ui/Hearts";
import {useWindow} from "@/app/hooks/useWindow";

export default function Home() {
  const win = useWindow();
  const width = win == undefined ? 0 : win.innerWidth;
  const height = win == undefined ? 0 : win.innerHeight;
  const devicePixelRatio = win == undefined ? 0 : win.devicePixelRatio;
  return (
      <Stage
        width={width}
        height={height}
        options={{
          resizeTo: win,
          background: "#fbc05e",
          antialias: true,
          resolution: devicePixelRatio || 1,
        }}
      >
        <Hearts />
      </Stage>
  );
}
