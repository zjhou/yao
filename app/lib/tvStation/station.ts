import {ContentType, TVChannel, TVShow, TVStation} from "@/app/types/tvTypes";
import {Schedule} from "@/app/lib/tvStation/schedule";
import {Channel} from "@/app/lib/tvStation/channel";
import {Show} from "@/app/lib/tvStation/show";

export class Station implements TVStation {
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

  private _interval: NodeJS.Timeout | undefined;

  constructor(num: number, schedules: Schedule[]) {
    this._channel = new Channel(num, schedules);
    // this._channel = new Channel(num, [
    //   new Schedule(
    //     "00:00",
    //     "12:00",
    //     new Show(
    //       ContentType.Video,
    //       {source: "videos/yy.mp4"},
    //       0
    //     )
    //   ),
    //   new Schedule(
    //     "12:00",
    //     "23:59",
    //     new Show(
    //       ContentType.Img,
    //       {source: "images/rocks.JPG"},
    //       1
    //     )
    //   )
    // ]);
    this._currentShow = this.channel.getCurrentShow()?.id;
  }

  private initTimer() {
    this._interval = setInterval(() => {
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

  private _onShowChange: ((show: TVShow | undefined) => void) | undefined;

  subscribe(onShowChange: (show: TVShow | undefined) => void): void {
    this.initTimer();
    this._onShowChange = onShowChange;
    this._onShowChange(this.channel.getCurrentShow());
  }

  unsubscribe() {
    this._onShowChange = undefined;
    clearInterval(this._interval);
  }
}
