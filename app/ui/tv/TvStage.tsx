import {useWindow} from "@/app/hooks/utils/useWindow";
import {Stage} from "@/app/ui/tv/Stage";
import {TvState} from "@/app/ui/tv/State";
import React, {ReactNode} from "react";

type stageProps = {
  children: React.JSX.Element | React.JSX.Element[] | ReactNode,
  nav?: React.JSX.Element | React.JSX.Element[] | ReactNode,
}

export default function TvStage({ children, nav }: stageProps) {
  const win = useWindow();

  if (win === undefined) {
    return null;
  }

  const width = win.innerWidth;
  const height =  win.innerHeight;
  const devicePixelRatio = win.devicePixelRatio;
  return (
    <TvState>
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
          {children}
      </Stage>
      <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-container fixed w-full h-full z-50 overflow-y-auto">
          {nav}
        </div>
      </div>
    </TvState>
  );
}
