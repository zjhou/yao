import {Container, Text} from "@pixi/react";
import {useRemoteCtrl} from "@/app/hooks/tv/ctrl/useRemoteCtrl";
import {BBTV} from "@/app/lib/tvStation/bbtvStation";

export const RemoteCtrl = () => {
  const ctrl = useRemoteCtrl();
  return (
    <Container>
      <Text
        interactive
        onpointerdown={() => {
          ctrl.gotoChannel(BBTV.Inst.channel.num);
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
