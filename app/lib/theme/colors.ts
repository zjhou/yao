import {Color, TextStyle} from "pixi.js";
import {Theme} from "@/app/lib/theme/theme";

const ColorNums = {
  HEART_LINE_COLOR: 0xfb5d63,
  HEART_COLOR: 0xfb5d63,
  STAGE_BG_COLOR: 0xfbc05e,
}

export class Classic implements Theme {
  HEART_LINE_COLOR = ColorNums.HEART_LINE_COLOR;
  HEART_COLOR = ColorNums.HEART_COLOR;
  STAGE_BG_COLOR = ColorNums.STAGE_BG_COLOR;
  COUNTER_STYLE = new TextStyle({
    fontFamily: "monospace",
    fontSize: 16,
    fill: [ColorNums.HEART_COLOR],
    align: "center",
  });
}

export class Cream implements Theme {
  HEART_LINE_COLOR = 0xBAD7DF;
  HEART_COLOR = 0x99DDCC;
  STAGE_BG_COLOR = 0xFFE2E2;
  COUNTER_STYLE = new TextStyle({
    fontFamily: "monospace",
    fontSize: 16,
    fill: [0x99DDCC],
    align: "center",
  });
}

export class Sun implements Theme {
  HEART_LINE_COLOR = 0xFBC05E;
  HEART_COLOR = 0xE74646;
  STAGE_BG_COLOR = 0xFA9884;
  COUNTER_STYLE = new TextStyle({
    fontFamily: "monospace",
    fontSize: 16,
    fill: [0xE74646],
    align: "center",
  });
}
