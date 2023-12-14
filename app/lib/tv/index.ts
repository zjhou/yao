export enum TvState {
  Off,
  On,
  Loading,
  Playing,
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
  containerInfo: TvContainerInfo,

  isOff: boolean,
  isLoading: boolean,
  isChannelSelected: boolean,

  showContent: (size: Size) => void,
  turnOn: () => void,
  turnOff: () => void,
  gotoChannel: (channelNum: number) => void,
  loading: (isLoading: boolean) => void,
}
