import {StationObj, StationResponse, TVStation} from "@/app/types/tvTypes";
import {Station} from "@/app/lib/tvStation/station";
import stationJson from "./stations.json";
import {Schedule} from "@/app/lib/tvStation/schedule";
import {Show} from "@/app/lib/tvStation/show";

export class StationFactory {
  static Inst = new StationFactory();
  private constructor() {
    StationFactory._stationMap = {};
    this.createFromJson(stationJson)
  }

  private static _stationMap: {[key: number]: TVStation };
  create(station: StationObj): TVStation {
    const { num, schedules } = station;
    if (StationFactory._stationMap[num] !== undefined) {
      return StationFactory._stationMap[num];
    }

    const scheduleList = schedules.map(s => new Schedule(
      s.start,
      s.end,
      new Show(
        s.show.type,
        { source: s.show.source },
        s.show.id
      )
    ))

    const s = new Station(num, scheduleList)
    StationFactory._stationMap[num] = s;
    return s;
  }

  createFromJson(stations: StationResponse) {
    stations.payload.map(this.create)
  }

  get(num: number) {
    return StationFactory._stationMap[num];
  }

  getAll(): TVStation[] {
    return Object.values(StationFactory._stationMap);
  }
}
