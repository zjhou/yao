import {Container} from "pixi.js";
import {channel} from "diagnostics_channel";
import Hearts from "@/app/ui/Hearts";
import Counter from "@/app/ui/Counter";

type ChannelProps = {
  container: Container;
  index: number;
}
const Channel = (props: ChannelProps) => {
  const { container: screenContainer } = props;

  if (props.index === 0) {
    return (
      <>
        <Hearts
          container={screenContainer}
        />
        <Counter
          x={screenContainer.x - 70}
          y={screenContainer.y + 100}
        />
      </>
    )
  }

  return null;
}

export default Channel;
