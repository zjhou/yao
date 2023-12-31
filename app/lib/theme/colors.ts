import {Color, TextStyle} from "pixi.js";
import {Theme} from "@/app/lib/theme/theme";

export const ColorNums = {
  HEART_LINE_COLOR: 0xfb5d63,
  HEART_COLOR: 0xff3333,
  STAGE_BG_COLOR: 0xfbc05e,
}

export class Classic implements Theme {
  NAME = "Classic";
  // HEART_LINE_COLOR = ColorNums.HEART_LINE_COLOR;
  HEART_LINE_COLOR = ColorNums.HEART_COLOR;
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
  NAME = "Cream";
  HEART_LINE_COLOR = 0xBAD7DF;
  HEART_COLOR = 0xFFE2E2;
  STAGE_BG_COLOR = 0x99DDCC;
  COUNTER_STYLE = new TextStyle({
    fontFamily: "monospace",
    fontSize: 16,
    fill: [0xF6F6F6],
    align: "center",
  });
}

export class Sun implements Theme {
  NAME = "Sun";
  // HEART_LINE_COLOR = 0xFBC05E;
  HEART_LINE_COLOR = 0xee0000;
  HEART_COLOR = 0xee0000;
  STAGE_BG_COLOR = 0xFFCF96;
  COUNTER_STYLE = new TextStyle({
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: "bolder",
    fill: [0xFF0000],
    align: "center",
  });
}
