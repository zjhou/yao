'use client'

import {Stage} from "@pixi/react";
import {useWindow} from "@/app/hooks/useWindow";
import {Classic, Cream, Sun} from "@/app/lib/theme/colors";
import {ThemeContext, TvContext} from "@/app/context";
import Bg from "@/app/ui/Bg";
import {Theme} from "@/app/lib/theme/theme";
import {useEffect, useState} from "react";
import Tv, {RemoteControlledTv} from "@/app/ui/Tv";
import {useFullscreenSize} from "@/app/hooks/useFullscreenSize";
import {BundleLoader} from "@/app/ui/BundleLoader";
import {BG_CONF} from "@/app/lib/config/bgConf";

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
          backgroundAlpha: 0,
        }}
      >
        <ThemeContext.Provider value={theme}>
          <BundleLoader bundleId={BG_CONF.BUNDLE_ID} assets={BG_CONF.BUNDLE_ASSETS}>
            {(bundle) => {
              return (
                <Bg
                  bundle={bundle}
                  width={size.width}
                  height={size.height}
                >
                  <RemoteControlledTv />
                </Bg>
              )
            }}
          </BundleLoader>
        </ThemeContext.Provider>
      </Stage>
  );
}
