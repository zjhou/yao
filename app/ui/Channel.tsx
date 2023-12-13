import {Sprite} from "pixi.js";
import Vcr from "@/app/ui/Vcr";
import {GlassInfo} from "@/app/ui/Bg";

type ChannelProps = {
  index: number;
}
const Channel = (props: ChannelProps) => {
  if (props.index === 0) {
    return <Vcr />
  }

  return null;
}

export default Channel;
