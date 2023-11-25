import {Color, Container, Graphics} from "pixi.js";
import {Heart} from "./heart";
import { Application } from "pixi.js";
import {Vec} from "@/app/lib/vec";
import {generateHeartPos, generateValBySec, sec} from "./heartUtils";
import {HeartSysConf} from "./HeartSysConf";

type EmitterConfig = {
  position: Vec;
  refPos: Vec;
  index: number;
  app: Application;
  color: number | Color;
  lineColor: number | Color;
  size?: number;
}

export class HeartEmitter {
  constructor(config: EmitterConfig) {
    this.origin = config.position.copy();
    this.index = config.index;
    this.size = config.size || 10;
    this.color = config.color;
    this.lineColor = config.lineColor;

    // 参照点
    this.refPos = config.refPos;
    this.sec = sec();
    this.app = config.app;
    this.hearts = []

    this.normalParticlesContainer = new Container();
    this.rootParticleContainer = new Container();

    this.app.stage.addChild(this.normalParticlesContainer);
    this.app.stage.addChild(this.rootParticleContainer);

    this.rootParticle = this.addHeart(true);
  }

  rootParticle: Heart;
  rootParticleContainer: Container;
  normalParticlesContainer: Container;
  app: Application;
  size: number;
  public color: number | Color;
  public lineColor: number | Color;
  hearts: Heart[] = [];
  index: number;
  public origin: Vec;
  public refPos: Vec;
  sec: number;

  public setColor(color: number | Color) {
    this.color = color;
    this.rootParticle.color = color;
  }

  getSecPassed() {
    return sec() - this.sec;
  }

  addHeart(immortal = false) {
    const gh = new Graphics();
    const container = immortal ? this.rootParticleContainer : this.normalParticlesContainer;

    container.addChild(gh);

    const ht = new Heart({
      gh,
      immortal,
      lifespan: HeartSysConf.PARTICLE_LIFESPAN,
      position: this.origin,
      color: this.color,
      lineColor: this.lineColor,
      size: this.getSize(),
    });


    this.hearts.push(ht);

    return ht;
  }

  getSize() {
    return generateValBySec(
      this.getSecPassed(), 10, 15
    );
  }

  removeHeart(index: number) {
    const gh = this.hearts[index].gh;
    this.normalParticlesContainer.removeChild(gh);
    // this.app.stage.removeChild(this.hearts[index].gh);
    this.hearts.splice(index, 1);
  }

  public updatePos(position: Vec) {
    this.origin = position;
    this.rootParticle.position = position;
  }

  getHeartPos(scale: number) {
    const i = this.index || 0;
    const pos = this.refPos;
    const { x, y } = generateHeartPos(i);
    const scaledX = x * scale + 50 + (pos?.x || 0);
    const scaledY = y * scale + 50 + (pos?.y || 0);

    return new Vec(scaledX, scaledY)
  };

  update() {
    // 星形缩放
    this.updatePos(this.getHeartPos(
      generateValBySec(this.getSecPassed(), 50, 60)
    ));
  }

  public destroy() {
    for (let i = 0; i < this.hearts.length; i++) {
      const gh = this.hearts[i].gh;
      gh.clear();
      this.normalParticlesContainer.removeChild(gh);
    }

    this.rootParticle.gh.clear();
    this.rootParticleContainer.removeChild(this.rootParticle.gh);
  }

  run() {
    this.update();

    if (this.hearts.length < HeartSysConf.PARTICLES) {
      this.addHeart();
    }

    for (let i = 0; i < this.hearts.length; i++) {
      let p = this.hearts[i];
      p.run();

      if (p.isDead()) {
        p.gh.clear();
        this.removeHeart(i)
      }
    }
  }
}
