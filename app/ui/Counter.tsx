import {Text} from "@pixi/react";
import {useCounterPos} from "@/app/hooks/useCounterPos";
import {useDays} from "@/app/hooks/useDays";
import {CounterConf} from "@/app/lib/counter/CounterConf";
import {useRef} from "react";

const Counter = () => {
  const pos = useCounterPos();
  const days = useDays();

  if (pos.isAtEdge()) {
    return null;
  }

  return (
    <Text
      text={days}
      style={CounterConf.textStyle}
      x={pos.x}
      y={pos.y}
    />
  );
}

export default Counter;
