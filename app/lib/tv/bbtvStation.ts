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

  constructor(type: ContentType, content: ShowContent) {
    this._type = type;
    this._content = content;
  }
}


class Schedule implements TVSchedule {
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

}

export class BBTV implements TVStation {
  set channel(value: TVChannel) {
    this._channel = value;
  }
  get channel(): TVChannel {
    return this._channel;
  }
  private _channel: TVChannel

  constructor() {
    this._channel = new MovieChannel([
      new Schedule(
        "7:30",
        "22:30",
        new Show(
          ContentType.Video, {source: "videos/yy.mp4"}
        )
      )
    ]);
  }

  static Inst = new BBTV();
}
