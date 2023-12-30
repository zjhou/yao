import {useTvScreen} from "@/app/hooks/tv/view/useTvScreen";
import {useLocalCtrl} from "@/app/hooks/tv/ctrl/useLocalCtrl";
import {useSignal} from "@/app/hooks/tv/ctrl/useSignal";
import {TvDisplay} from "@/app/ui/display";
import {useEffect, useState} from "react";
import {TVShow} from "@/app/types/tvTypes";
import {StationMap} from "@/app/lib/tvStation/stationData";

export const Tv = () => {
  const screen = useTvScreen();
  const ctrl = useLocalCtrl();
  const [show, setShow] = useState<TVShow>();

  useSignal();

  useEffect(() => {
    console.log("try station subscribe")
    const tvStation = StationMap[ctrl.channel];
    tvStation?.subscribe(setShow);
  }, [ctrl.channel])

  if (screen.width === 0 || screen.height === 0 || ctrl.isOff) {
    console.log("tvStation is not ready")
    return;
  }

  if (!ctrl.isChannelSelected) {
    console.log("tvStation is waiting")
    return;
  }

  if (show === undefined) {
    console.log("no current show")
    return;
  }

  return (
    <TvDisplay
      tvShow={show}
    />
  );
}
