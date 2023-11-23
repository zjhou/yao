import {Vec} from "@/app/lib/vec";

export const scale = (origin:number, a:number, b:number):number => {
  return origin * b / a;
}

export const generateHeartPos = (i: number): Vec => {
  const x = 2 * Math.pow(Math.sin(i), 3);
  const y = - 2 * ((13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i)) / 16)
  return new Vec(x, y);
}

export const generateScaledHeartPos = (i: number): Vec => {
  const pos = generateHeartPos(i);
  const scaledX = pos.x * 50 + 50 + (pos?.x || 0);
  const scaledY = pos.y * 50 + 50 + (pos?.y || 0);
  return new Vec(scaledX, scaledY);
}

export const generateValBySec = (sec: number, min: number, max: number): number => {
  const a = 1/Math.E;
  const b = Math.E - a;
  return (Math.exp(Math.sin(sec * 3 * Math.PI)) - a) * (max-min) / b + min;
}

export const generateHeartSize = (sec: number, min: number, max: number): number => {
  return generateValBySec(sec, min, max);
}


export const sec = () => {
  return new Date().getTime() / 1000;
}

export const random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

export const RandomVec = () => {
  return new Vec(random(-1, 1), random(-1, 0));
}
