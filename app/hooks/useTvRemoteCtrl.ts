import {useCallback, useState} from "react";
import {Size, TvCtrl, TvState} from "@/app/lib/tv";
import {BG_CONF} from "@/app/lib/config/bgConf";
import {useTvContainerInfo} from "@/app/hooks/useTvContainerInfo";

export const useTvRemoteCtrl = () : TvCtrl => {
  const [tvState, setTvState] = useState<TvState>(TvState.Off)
  const [channel, setChannel] = useState<number>(-1)

  const [contentSize, setContentSize] = useState<Size>({
    width: BG_CONF.SCREEN_WID,
    height: BG_CONF.SCREEN_HT,
  })

  const containerInfo = useTvContainerInfo(contentSize);

  const turnOn = () => setTvState(TvState.On);
  const turnOff = () => setTvState(TvState.Off);

  const gotoChannel = (channelNum: number) => {
    if (tvState === TvState.Off){
      return;
    }

    if (channel === channelNum) {
      return;
    }

    loading(true)
    setChannel(channelNum)
  };

  const loading = useCallback((isLoading: boolean) => {
    if (!isLoading) {
      setTvState(TvState.Playing)
    } else {
      setTvState(TvState.Loading)
    }
  }, []);

  const showContent = useCallback((size: Size) => {
    setContentSize(size)
    loading(false);
  }, []);

  const isOff = tvState === TvState.Off

  const isLoading = tvState === TvState.Loading

  const isChannelSelected = channel !== -1;


  return {
    tvState,
    channel,
    containerInfo,

    isOff,
    isLoading,
    isChannelSelected,

    showContent,
    turnOn,
    turnOff,
    gotoChannel,
    loading,
  }
}
