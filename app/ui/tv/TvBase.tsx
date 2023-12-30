'use client'

import {useFullscreenSize} from "@/app/hooks/utils/useFullscreenSize";
import {useWindow} from "@/app/hooks/utils/useWindow";
import {BG_CONF} from "@/app/lib/config/bgConf";
import Bg from "@/app/ui/tv/Bg";
import {BundleLoader} from "@/app/ui/utils/BundleLoader";
import {Stage} from "@pixi/react";
import React from "react";

export const TvBase = ({ children }: { children: React.JSX.Element | React.JSX.Element[] }) => {
  const win = useWindow();
  const size = useFullscreenSize();

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
      <BundleLoader bundleId={BG_CONF.BUNDLE_ID} assets={BG_CONF.BUNDLE_ASSETS}>
        {(bundle) => {
          return (
            <Bg
              bundle={bundle}
              width={size.width}
              height={size.height}
              showMask
            >
              {children}
            </Bg>
          )
        }}
      </BundleLoader>
    </Stage>
  );
}
