import React from "react";

export enum ContentType {
  Video = 0,
  Img = 1,
  Text = 2,
  Custom = 3,
}

export type ImageShow = {
  source: string | string[],
  durationSec: number
}

export type VideoShow = {
  source: string | string[],
}

export type CustomShow = {
  source: React.JSX.Element
}

export type ShowContent = ImageShow | VideoShow | CustomShow

export interface TVShow {
  type: ContentType,
  content: ShowContent
}

export interface TVSchedule {
  startTime: string
  endTime: string
  show: TVShow
}

export interface TVChannel {
  num: number,
  schedules: TVSchedule[]
}

export interface TVStation {
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
