import {Container, Sprite} from "pixi.js";
import {channel} from "diagnostics_channel";
import Hearts from "@/app/ui/Hearts";
import Counter from "@/app/ui/Counter";
import Vcr from "@/app/ui/Vcr";

type ChannelProps = {
  container: Container;
  screen: Sprite,
  index: number;
}
const Channel = (props: ChannelProps) => {
  const { container: screenContainer } = props;

  if (props.index === 0) {
    console.log("enter channel 0");
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

  if (props.index === 1) {
    console.log("enter channel 1");
    return <Vcr screen={props.screen} />
  }

  console.log("enter channel unknown");
  return null;
}

export default Channel;
