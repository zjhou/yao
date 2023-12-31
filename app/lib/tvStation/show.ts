import {ContentType, CustomShow, ImageShow, ShowContent, TVShow, VideoShow} from "@/app/types/tvTypes";

export class Show implements TVShow {
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
