'use client'

import {Stage} from "@pixi/react";
import {useWindow} from "@/app/hooks/useWindow";
import {Classic, Cream, Sun} from "@/app/lib/theme/colors";
import {ThemeContext} from "@/app/context";
import Bg from "@/app/ui/Bg";
import {Theme} from "@/app/lib/theme/theme";
import {useEffect, useState} from "react";
import Tv from "@/app/ui/Tv";
import {useFullscreenSize} from "@/app/hooks/useFullscreenSize";

export default function Home() {
  const win = useWindow();
  const size = useFullscreenSize();
  const [theme, setTheme] = useState<Theme>(new Classic());

  useEffect(() => {
    const theme = new Sun();
    setTheme(theme);
  }, []);

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
        }}
      >
        <ThemeContext.Provider value={theme}>
          <Bg
            width={size.width}
            height={size.height}
          >
            {(glass, glassInfo) => {
                return (
                  <Tv glass={glass} glassInfo={glassInfo} />
                )
            }}
          </Bg>
        </ThemeContext.Provider>
      </Stage>
  );
}
