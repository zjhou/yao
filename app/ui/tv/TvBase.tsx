'use client'

import {useFullscreenSize} from "@/app/hooks/utils/useFullscreenSize";
import {useWindow} from "@/app/hooks/utils/useWindow";
import {BG_CONF} from "@/app/lib/config/bgConf";
import Bg from "@/app/ui/tv/Bg";
import {BundleLoader} from "@/app/ui/utils/BundleLoader";
import React from "react";

type BaseProps = {
  children: React.JSX.Element | React.JSX.Element[]
}

export const TvBase = ({ children }: BaseProps) => {
  const win = useWindow();
  const size = useFullscreenSize();

  if (win === undefined) {
    return null;
  }

  return (
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
  );
}
