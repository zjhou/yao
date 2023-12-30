import React, {FC} from "react";

export enum ContentType {
  Video = 0,
  Img = 1,
  Text = 2,
  Custom = 3,
}

export type ImageShow = {
  source: string,
  durationSec: number
}

export type VideoShow = {
  source: string,
}

export type CustomShow = {
  source: FC
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
