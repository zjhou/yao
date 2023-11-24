import {Text} from "@pixi/react";
import {useCounterPos} from "@/app/hooks/useCounterPos";
import {useDays} from "@/app/hooks/useDays";
import {useContext, useRef} from "react";
import {ThemeContext} from "@/app/context";

const Counter = () => {
  const pos = useCounterPos();
  const days = useDays();
  const theme = useContext(ThemeContext);

  if (pos.isAtEdge()) {
    return null;
  }

  return (
    <Text
      text={days}
      style={theme.COUNTER_STYLE}
      x={pos.x}
      y={pos.y}
    />
  );
}

export default Counter;
