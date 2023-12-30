import {useState} from "react";
import {BG_CONF} from "@/app/lib/config/bgConf";
import {useLocalCtrl} from "@/app/hooks/tv/ctrl/useLocalCtrl";
import {useTvContainerInfo} from "@/app/hooks/tv/view/useTvContainerInfo";
import {Size} from "@/app/types/tvTypes";

export const useContentSizeCtrl = () => {
  const [contentSize, setContentSize] = useState<Size>({
    width: BG_CONF.SCREEN_WID,
    height: BG_CONF.SCREEN_HT,
  })

  const ctrl = useLocalCtrl();

  const containerInfo = useTvContainerInfo(contentSize);

  const showContent =(size: Size) => {
    setContentSize(size)
    ctrl.loading(false);
  };

  const defaultReady = () => {
    setContentSize({
      width: BG_CONF.SCREEN_WID,
      height: BG_CONF.SCREEN_HT,
    })
  }

  return {
    defaultReady,
    showContent,
    containerInfo,
  }

}
