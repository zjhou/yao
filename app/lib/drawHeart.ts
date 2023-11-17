import {Color, Graphics} from "pixi.js";

export const drawHeart = (gh: Graphics, x: number, y:number, size: number, color: Color | number) => {
  gh.beginFill(color);
  gh.moveTo(x, y);
  gh.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  gh.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y)
  gh.endFill();
}
