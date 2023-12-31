import {TVSchedule, TVShow} from "@/app/types/tvTypes";


export class Schedule implements TVSchedule {
  get show(): TVShow {
    return this._show;
  }
  set show(value: TVShow) {
    this._show = value;
  }
  set startTime(value: string) {
    this._startTime = value;
  }
  set endTime(value: string) {
    this._endTime = value;
  }
  private _endTime: string;
  private _show: TVShow;
  private _startTime: string;

  constructor(start: string, end: string, show: TVShow) {
    this._show = show;
    this._startTime = start;
    this._endTime = end;
  }

  private getTime(timeStr: string) {
    const date = new Date();
    const y =  date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    const fullTimeStr = `${y}-${m}-${d} ${timeStr}`;
    return new Date(fullTimeStr).getTime();
  }

  isActive(): boolean {
    const start = this.getTime(this._startTime);
    const end = this.getTime(this._endTime);
    const now = Date.now();
    return now >= start && now < end;
  }

}


