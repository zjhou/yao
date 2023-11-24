import {Color, Graphics} from "pixi.js";
import { Vec } from "@/app/lib/vec";
import {Particle} from "@/app/lib/particle/particle";
import {random, RandomVec, scale, sec} from "./heartUtils";

export type HeartConfig = {
  lifespan: number;
  size?: number;
  position: Vec;
  velocity?: Vec;
  color: Color | number;
  lineColor: Color | number;
  gh: Graphics;
  immortal: boolean;
}
export class Heart implements Particle {
  constructor(config: HeartConfig) {
    this.lifespan = random(2, config.lifespan)
    this.gh = config.gh;
    this.size = config.size || 10;
    this.position = config.position;
    this.velocity = config.velocity || RandomVec();
    this.acceleration = new Vec(0, 0.04);
    this.color = config.color;
    this.lineColor = config.lineColor;
    this.lifespanBackup = this.lifespan;
    this.sizeBackup = this.size;
    this.birthSec= sec();
    this.immortal = config.immortal;
    this.id = this.birthSec;
  }

  immortal: boolean;
  id: number;
  color: Color | number;
  lineColor: Color | number;
  size: number;
  sizeBackup: number;
  birthSec: number;
  velocity: Vec;
  acceleration: Vec;
  gh: Graphics;

  isDead(): boolean {
    return this.lifespan < 0;
  }

  lifespan: number;
  lifespanBackup: number;
  public position: Vec;

  run(): void {
    this.update()
    this.display()
  }

  update(): void {
    if (this.immortal) {
      return;
    }

    this.velocity.add(this.acceleration);
    this.position = this.position.sub(this.velocity);
    this.lifespan -= 2;
  }

  getRealAge() {
    return sec() - this.birthSec;
  }

  display(): void {
    const gh = this.gh;
    gh.clear();

    const pos = this.position;

    const maxOpacity = this.immortal ? 0.9 : 0.8;

    const alpha = scale(this.lifespan, this.lifespanBackup, maxOpacity);

    this.size = scale(this.lifespan, this.lifespanBackup, this.sizeBackup);

    gh.beginFill(this.color, alpha);

    gh.moveTo(pos.x, pos.y);

    if (this.immortal) {
      gh.lineStyle(1, this.lineColor, 0.3)
    }

    gh.bezierCurveTo(
      pos.x - this.size / 2,
      pos.y - this.size / 2,
      pos.x - this.size,
      pos.y + this.size / 3,
      pos.x,
      pos.y + this.size
    );

    gh.bezierCurveTo(
      pos.x + this.size,
      pos.y + this.size / 3,
      pos.x + this.size / 2,
      pos.y - this.size / 2,
      pos.x,
      pos.y
    );

    gh.endFill();
  }
}
