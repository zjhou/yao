import Vcr from "@/app/ui/channels/Vcr";
import { HeartsContainer as Hearts } from "@/app/ui/channels/Hearts";
import {useState} from "react";
import {Size} from "@/app/lib/tv";
import {BG_CONF} from "@/app/lib/config/bgConf";
import {useTvContainerInfo} from "@/app/hooks/tv/view/useTvContainerInfo";
import {useLocalCtrl} from "@/app/hooks/tv/ctrl/useLocalCtrl";

type ChannelProps = {
  index: number;
}

const Channel = (props: ChannelProps) => {
  if (props.index === 0) {
    return <Vcr />
  }

  if (props.index === 1) {
    return <Hearts />
  }

  return null;
}

export default Channel;
