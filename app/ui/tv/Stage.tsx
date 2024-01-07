import {_ReactPixi, Stage as PixiStage} from '@pixi/react';
import React, {ReactNode, useContext} from "react";
import {ConnectionContext, TvContext} from "@/app/context";
import IStage = _ReactPixi.IStage;


interface IStageProps extends IStage {
  children: React.JSX.Element | React.JSX.Element[] | ReactNode,
}

export const Stage = (props: IStageProps) => {
  const { children, ...rest } = props;
  const tvCtx = useContext(TvContext);
  const connectionCtx = useContext(ConnectionContext);
  return (
    <PixiStage
      {...rest}
    >
      <TvContext.Provider value={tvCtx}>
        <ConnectionContext.Provider value={connectionCtx}>
          {children}
        </ConnectionContext.Provider>
      </TvContext.Provider>
    </PixiStage>
  )
}
