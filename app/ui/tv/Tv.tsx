import {useLocalCtrl} from "@/app/hooks/tv/ctrl/useLocalCtrl";
import {useSignal} from "@/app/hooks/tv/ctrl/useSignal";
import {useTvScreen} from "@/app/hooks/tv/view/useTvScreen";
import Channel from "@/app/ui/channels/Channel";

export const Tv = () => {
  const screen = useTvScreen();
  const ctrl = useLocalCtrl();

  useSignal();

  console.log("render Tv")

  if (screen.width === 0 || screen.height === 0 || ctrl.isOff) {
    return;
  }

  return (
    <>
      {
        ctrl.isChannelSelected && (
          <Channel
            index={ctrl.channel}
          />
        )
      }
    </>
  );
}
