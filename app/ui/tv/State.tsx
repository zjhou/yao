import {ConnectionContext, TvContext} from "@/app/context";
import {useSocket} from "@/app/hooks/tv/ctrl/useSocket";
import {useTvState} from "@/app/hooks/tv/ctrl/useTvState";
import React from "react";

export const TvState = ({ children }: { children: React.JSX.Element | React.JSX.Element[] }) => {
  const state = useTvState();
  const socket = useSocket();

  return (
    <TvContext.Provider value={state}>
      <ConnectionContext.Provider value={socket}>
        {children}
      </ConnectionContext.Provider>
    </TvContext.Provider>
  )
}
