import {TVStation} from "@/app/types/tvTypes";
import {StationMap} from "@/app/lib/tv/stationData";

export const useTvStation = (num: number): TVStation => {
  return StationMap[num];
}
