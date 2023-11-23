import {TextStyle} from "pixi.js";
import {ColorNums} from "@/app/lib/colors";

export const CounterConf = {
  textStyle: new TextStyle({
    fontFamily: "monospace",
    fontSize: 16,
    fill: [ColorNums.HEART_COLOR],
    align: "center",
  }),
  start: '2022-08-17T00:00:00',
}
