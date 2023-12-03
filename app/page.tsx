'use client'

import {Stage} from "@pixi/react";
import {useWindow} from "@/app/hooks/useWindow";
import Hearts from "@/app/ui/Hearts";
import {Classic, Cream, Sun} from "@/app/lib/theme/colors";
import Counter from "@/app/ui/Counter";
import {ThemeContext} from "@/app/context";
import Bg from "@/app/ui/Bg";
import {Theme} from "@/app/lib/theme/theme";
import {useEffect, useState} from "react";
import Tv from "@/app/ui/Tv";
import {Container} from "pixi.js";
import Channel from "@/app/ui/Channel";

export default function Home() {
  const win = useWindow();
  const [theme, setTheme] = useState<Theme>(new Classic());

  useEffect(() => {
    const theme = new Sun();
    setTheme(theme);
  }, []);

  if (win == undefined) {
    console.log("window obj null")
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
            width={width}
            height={height}
          />
          <Tv>
            {(screenContainer: Container) => {
              if (screenContainer == null) {
                console.log("screenContainer null")
                return null;
              }

              return <Channel container={screenContainer} index={0} />
            }}
          </Tv>
        </ThemeContext.Provider>
      </Stage>
  );
}
