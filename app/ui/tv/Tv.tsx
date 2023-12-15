import React, {useEffect} from "react";
import Channel from "@/app/ui/channels/Channel";
import {useTvScreen} from "@/app/hooks/tv/useTvScreen";
import {useTvRemoteCtrl} from "@/app/hooks/tv/useTvRemoteCtrl";
import {Text} from "@pixi/react";
import {TvContext} from "@/app/context";
import {useTvCtrl} from "@/app/hooks/tv/useTvCtxCtrl";

const TvCore = () => {
  const screen = useTvScreen();
  const ctrl = useTvCtrl();

  useEffect(() => {
    ctrl.turnOn();

    ctrl.gotoChannel(0);
  }, [ctrl.tvState]);

  if (screen.width == 0 || screen.height == 0 || ctrl.isOff) {
    return;
  }

  console.log("is loading " + ctrl.isLoading)
  return (
    <>
      {
        ctrl.isChannelSelected && (
          <Channel
            index={ctrl.channel}
          />
        )
      }
      {
        ctrl.isLoading && (
          <Text
            text="Loading..."
          />
        )
      }
    </>
  );
}

export const Tv = () => {
  const ctrl = useTvRemoteCtrl();

  return (
    <TvContext.Provider value={ctrl}>
      <TvCore />
    </TvContext.Provider>
  )
}

export default Tv;
