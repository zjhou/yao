import {Sprite} from "pixi.js";
import Vcr from "@/app/ui/Vcr";
import {GlassInfo} from "@/app/ui/Bg";

type ChannelProps = {
  screen: Sprite,
  screenInfo: GlassInfo,
  index: number;
}
const Channel = (props: ChannelProps) => {
  if (props.index === 0) {
    return <Vcr screen={props.screen} />
  }

  return null;
}

export default Channel;
