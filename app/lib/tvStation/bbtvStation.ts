import {
  ContentType,
  CustomShow,
  ImageShow,
  ShowContent,
  TVChannel,
  TVSchedule,
  TVShow,
  TVStation,
  VideoShow
} from "@/app/types/tvTypes";

class Show implements TVShow {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get content(): ShowContent {
    return this._content;
  }
  get type(): ContentType {
    return this._type;
  }

  set type(value: ContentType) {
    this._type = value;
  }
  set content(value: ImageShow | VideoShow | CustomShow) {
    this._content = value;
  }

  private _content: ShowContent;
  private _type: ContentType;

  constructor(type: ContentType, content: ShowContent, id: number) {
    this._type = type;
    this._content = content;
    this._id = id;
  }

  private _id: number;
}


class Schedule implements TVSchedule {
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


class MovieChannel implements TVChannel {
  public static num = 6;
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

  constructor(schedules: Schedule[]) {
    this._num = MovieChannel.num;
    this._schedules = schedules;
  }

  getCurrentShow() {
    return this._schedules.find(s => s.isActive())?.show;
  }

}

export class BBTV implements TVStation {
  set channel(value: TVChannel) {
    this._channel = value;
  }
  get channel(): TVChannel {
    return this._channel;
  }
  private _channel: TVChannel

  private _currentShow: number | undefined;

  private isShowChanged(): boolean {
    return this.channel.getCurrentShow()?.id !== this._currentShow;
  }

  constructor() {
    this._channel = new MovieChannel([
      new Schedule(
        "00:00",
        "12:00",
        new Show(
          ContentType.Video,
          {source: "videos/yy.mp4"},
          0
        )
      ),
      new Schedule(
        "12:00",
        "23:59",
        new Show(
          ContentType.Img,
          {source: "images/rocks.JPG"},
          1
        )
      )
    ]);

    this._currentShow = this.channel.getCurrentShow()?.id;

    setInterval(() => {
      console.log("check update")
      if (this._onShowChange === undefined) {
        console.log("no subscription")
        return;
      }

      if (!this.isShowChanged()) {
        console.log("no update")
        return;
      }

      const currShow = this.channel.getCurrentShow();

      this._onShowChange(currShow);
      this._currentShow = currShow?.id;
    }, 1000 * 60)
  }

  logo?: string | undefined;

  static Inst = new BBTV();

  private _onShowChange: ((show: TVShow | undefined) => void) | undefined;

  subscribe(onShowChange: (show: TVShow | undefined) => void): void {
    this._onShowChange = onShowChange;
    this._onShowChange(this.channel.getCurrentShow());
  }
}
