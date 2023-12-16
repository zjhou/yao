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

export type TvContainerInfo = {
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number,
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
