'use client'

import {Stage} from "@pixi/react";
import {useWindow} from "@/app/hooks/utils/useWindow";
import Bg from "@/app/ui/tv/Bg";
import {Tv} from "@/app/ui/tv/Tv";
import {useFullscreenSize} from "@/app/hooks/utils/useFullscreenSize";
import {BundleLoader} from "@/app/ui/utils/BundleLoader";
import {BG_CONF} from "@/app/lib/config/bgConf";
import {TvState} from "@/app/ui/tv/State";
// import {RemoteCtrl} from "@/app/ui/tv/RemoteCtrl";

export default function PixiApp() {
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
              <TvState>
                <Tv />
                {/*<RemoteCtrl />*/}
              </TvState>
            </Bg>
          )
        }}
      </BundleLoader>
    </Stage>
  );
}
