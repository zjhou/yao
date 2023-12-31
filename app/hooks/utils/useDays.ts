import {useState} from "react";
import {useTick} from "@pixi/react";
import {timer} from "@/app/lib/counter/timer";

export const useDays = (digits = 10) => {
  const [days, setDays] = useState("");
  useTick(() => {
    const days = timer(digits);
    setDays(days.timeStr)
  })

  return days;
}
