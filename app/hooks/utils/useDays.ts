import {useState} from "react";
import {useTick} from "@pixi/react";
import {timer} from "@/app/lib/counter/timer";

export const useDays = () => {
  const [days, setDays] = useState("");
  useTick(() => {
    const days = timer();
    setDays(days.timeStr)
  })

  return days;
}
