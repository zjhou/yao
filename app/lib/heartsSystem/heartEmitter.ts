import {Application, Color, Container, Graphics} from "pixi.js";
import {Heart} from "./heart";
import {Vec} from "@/app/lib/vec";
import {generateHeartPos, generateScaledHeartPos, generateValBySec, sec} from "./heartUtils";
import {HeartSysConf} from "./HeartSysConf";

type EmitterConfig = {
  position: Vec;
  index: number;
  app: Application;
  color: number | Color;
  lineColor: number | Color;
  container?: Container;
  size?: number;
}

export class HeartEmitter {
  constructor(config: EmitterConfig) {
    this.origin = config.position.copy();
    this.index = config.index;
    this.size = config.size || 20;
    this.color = config.color;
    this.lineColor = config.lineColor;
    // 参照点
    this.sec = sec();
    this.app = config.app;
    this.hearts = []
    this.parentContainer = config.container || this.app.stage;
    this.normalParticlesContainer = new Container();
    this.rootParticleContainer = new Container();

    this.parentContainer.addChild(this.normalParticlesContainer);
    this.parentContainer.addChild(this.rootParticleContainer);

    this.generateRootHearts();
  }

  rootHearts: Heart[] = [];
  parentContainer: Container;
  rootParticleContainer: Container;
  normalParticlesContainer: Container;
  app: Application;
  size: number;
  public color: number | Color;
  public lineColor: number | Color;
  hearts: Heart[] = [];
  index: number;
  public origin: Vec;
  sec: number;

  generateRootHearts() {
    for (let i = 0; i < HeartSysConf.ROOT_HEART_COUNT; i++) {
      const pos = generateScaledHeartPos(i);
      const result = this.addHeart(true, pos.add(this.origin))
      this.rootHearts.push(result);
    }
  }

  public setColor(color: number | Color) {
    this.color = color;
  }

  getSecPassed() {
    return sec() - this.sec;
  }

  getContainer(immortal: boolean) {
    return  immortal ? this.rootParticleContainer : this.normalParticlesContainer;
  }

  getRootHeartPos(i: number) {
    return this.rootHearts[i].position;
  }

  getRandRootHeartPos() {
    const i = Math.floor(Math.random() * this.rootHearts.length);
    return this.getRootHeartPos(i);
  }

  addHeart(immortal = false, position = this.origin) {
    const gh = new Graphics();
    const container = this.getContainer(immortal);

    container.addChild(gh);

    const ht = new Heart({
      gh,
      immortal,
      lifespan: HeartSysConf.PARTICLE_LIFESPAN,
      position: immortal ? position : this.getRandRootHeartPos(),
      color: this.color,
      lineColor: this.lineColor,
      size: this.getSize(),
    });


    this.hearts.push(ht);

    return ht;
  }

  getSize() {
    return generateValBySec(
      this.getSecPassed(), 8, 10
    );
  }

  removeHeart(index: number) {
    const heart = this.hearts[index];
    const container = this.getContainer(heart.immortal);
    const gh = heart.gh;
    gh.clear();
    container.removeChild(gh);
    this.hearts.splice(index, 1);
  }

  getHeartPos(scale: number, i = this.index) {
    const pos = this.origin;
    const { x, y } = generateHeartPos(i);
    const scaledX = x * scale + this.size + (pos?.x || 0);
    const scaledY = y * scale + this.size + (pos?.y || 0);

    return new Vec(scaledX, scaledY)
  };

  update() {
    for(let i = 0; i < this.rootHearts.length; i++) {
      const heart = this.rootHearts[i];
      heart.position = this.getHeartPos(
        generateValBySec(this.getSecPassed(), this.size, this.size + 10),
        i
      );
    }
  }

  public destroy() {
    for (let i = 0; i < this.hearts.length; i++) {
      this.removeHeart(i)
    }
    this.hearts = [];
    this.rootHearts = [];
  }

  addHearts(count: number) {
    for(let i = 0; i < count; i++) {
      this.addHeart();
    }
  }

  run() {
    this.update();

    if (this.hearts.length < HeartSysConf.PARTICLES) {
      this.addHearts(HeartSysConf.ROOT_HEART_COUNT)
    }

    for (let i = 0; i < this.hearts.length; i++) {
      let p = this.hearts[i];
      p.run();

      if (p.isDead()) {
        this.removeHeart(i)
      }
    }
  }
}
