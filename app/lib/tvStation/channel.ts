import {TVChannel, TVSchedule} from "@/app/types/tvTypes";
import {Schedule} from "@/app/lib/tvStation/schedule";

export class Channel implements TVChannel {
  get num(): number {
    return this._num;
  }

  set num(value: number) {
    this._num = value;
  }

  get schedules(): TVSchedule[] {
    return this._schedules;
  }

  set schedules(value: TVSchedule[]) {
    this._schedules = value;
  }

  private _num: number;
  private _schedules: TVSchedule[];

  constructor(num: number, schedules: Schedule[]) {
    this._num = num;
    this._schedules = schedules;
  }

  getCurrentShow() {
    return this._schedules.find(s => s.isActive())?.show;
  }

}
