import Vcr from "@/app/ui/channels/Vcr";
import { HeartsContainer as Hearts } from "@/app/ui/channels/Hearts";

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
