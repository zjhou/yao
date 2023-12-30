import {useTvScreen} from "@/app/hooks/tv/view/useTvScreen";
import {useLocalCtrl} from "@/app/hooks/tv/ctrl/useLocalCtrl";
import {useSignal} from "@/app/hooks/tv/ctrl/useSignal";
import {useTvStation} from "@/app/hooks/tv/station";
import {TvDisplay} from "@/app/ui/display";

export const Tv = () => {
  const screen = useTvScreen();
  const ctrl = useLocalCtrl();
  const tvStation = useTvStation(ctrl.channel);

  useSignal();

  if (screen.width === 0 || screen.height === 0 || ctrl.isOff) {
    console.log("tv is not ready")
    return;
  }

  if (!ctrl.isChannelSelected) {
    console.log("tv is waiting")
    return;
  }

  return (
    <TvDisplay
      station={tvStation}
    />
  );
}
