import {Vec} from "@/app/lib/particle/vec";

export interface Particle {
  size: number;
  lifespan: number;
  position: Vec;
  velocity: Vec;
  acceleration?: Vec;
  update: () => void;
  isDead: () => boolean;
  run: () => void;
  display: () => void;
}
