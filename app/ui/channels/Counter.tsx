import {Text} from "@pixi/react";
import {useCounterPos} from "@/app/hooks/useCounterPos";
import {useDays} from "@/app/hooks/utils/useDays";
import {useContext, useRef} from "react";
import {ThemeContext} from "@/app/context";

type CounterProps = {
  x: number
  y: number
}
const Counter = (props: CounterProps) => {
  const days = useDays();
  const theme = useContext(ThemeContext);

  return (
    <Text
      alpha={0.9}
      text={days}
      style={theme.COUNTER_STYLE}
      x={props.x}
      y={props.y}
    />
  );
}

export default Counter;
