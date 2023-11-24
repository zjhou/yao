'use client'

import {Stage} from "@pixi/react";
import {useWindow} from "@/app/hooks/useWindow";
import Hearts from "@/app/ui/Hearts";
import {Classic, Cream, Sun} from "@/app/lib/theme/colors";
import Counter from "@/app/ui/Counter";
import {ThemeContext} from "@/app/context";

export default function Home() {
  const win = useWindow();
  if (win == undefined) {
    return null;
  }

  const width = win.innerWidth;
  const height =  win.innerHeight;
  const devicePixelRatio = win.devicePixelRatio;
  const theme = new Classic();
  return (
    <ThemeContext.Provider value={theme}>
      <Stage
        width={width}
        height={height}
        options={{
          resizeTo: win,
          antialias: true,
          resolution: devicePixelRatio || 1,
          backgroundColor: theme.STAGE_BG_COLOR
        }}
      >
        <Hearts />
        <Counter />
      </Stage>
    </ThemeContext.Provider>
  );
}
