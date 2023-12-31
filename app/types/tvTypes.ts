import React, {FC} from "react";
import exp from "node:constants";

export enum ContentType {
  Video = 0,
  Img = 1,
  Text = 2,
  Custom = 3,
}

export type ImageShow = {
  source: string,
}

export type VideoShow = {
  source: string,
}

export type CustomShow = {
  source: string
}

export type TextShow = {
  source: string
}

export type ShowContent = ImageShow | VideoShow | CustomShow | TextShow

export interface TVShow {
  id: number
  type: ContentType
  content: ShowContent
}

export interface TVSchedule {
  startTime: string
  endTime: string
  show: TVShow
  isActive: () => boolean
}

export interface TVChannel {
  num: number,
  schedules: TVSchedule[],
  getCurrentShow: () => TVShow | undefined
}

export interface TVStation {
  subscribe: (onShowChange: (show: TVShow | undefined) => void) => void;
  unsubscribe: () => void;
  channel: TVChannel
  logo?: string
}

export type TvContainerInfo = {
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number,
}

export enum TvState {
  Off = 0,
  On = 1,
  Loading = 2,
  Playing = 3,
}

export type Size = {
  width: number,
  height: number,
}
export type TvCtrl = {
  tvState: TvState,
  channel: number,

  isOff: boolean,
  isLoading: boolean,
  isChannelSelected: boolean,

  turnOn: () => void,
  turnOff: () => void,
  gotoChannel: (channelNum: number) => void,
  loading: (isLoading: boolean) => void,
}

export type StationObj = {
  num: number;
  schedules: ScheduleObj[];
}

export type ScheduleObj = {
  start: string;
  end: string;
  show: {
    type: number;
    id: number;
    source: string;
  };
}

export type StationResponse = {
  payload: StationObj[];
}
