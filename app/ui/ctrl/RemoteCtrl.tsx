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
          ctrl.gotoChannel(1);
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
      <Text
        y={100}
        interactive
        onpointerdown={() => {
          ctrl.gotoChannel(1)
        }}
        text="CHANNEL 1"
      />
      <Text
        y={150}
        interactive
        onpointerdown={() => {
          ctrl.gotoChannel(2)
        }}
        text="CHANNEL 2"
      />
      <Text
        y={200}
        interactive
        onpointerdown={() => {
          ctrl.gotoChannel(3)
        }}
        text="CHANNEL 3"
      />
    </Container>
  )
}
