import {Container, Text} from "@pixi/react";
import {useRemoteCtrl} from "@/app/hooks/tv/ctrl/useRemoteCtrl";

import {Station} from "@/app/lib/tvStation/station";

export const RemoteCtrl = () => {
  const ctrl = useRemoteCtrl();
  return (
    <Container>
      <Text
        interactive
        onpointerdown={() => {
          ctrl.gotoChannel(0);
        }}
        text="TURN ON"
      />
      <Text
        y={50}
        interactive
        onpointerdown={() => {
          ctrl.turnOff();
        }}
        text="TURN OFF"
      />
    </Container>
  )
}
