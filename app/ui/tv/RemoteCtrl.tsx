import {Text} from "@pixi/react";
import {useRemoteCtrl} from "@/app/hooks/tv/ctrl/useRemoteCtrl";

export const RemoteCtrl = () => {
  const ctrl = useRemoteCtrl();
  return (
    <Text
      interactive
      onpointerdown={() => {
        ctrl.gotoChannel(0);
      }}
      text="REMOTE CTRL"
    />
  )
}
