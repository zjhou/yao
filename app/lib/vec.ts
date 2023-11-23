export class Vec{
  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
  }

  copy() {
    return new Vec(this.x, this.y);
  }

  add(pos: Vec) {
    return new Vec(this.x + pos.x, this.y + pos.y);
  }

  sub(pos: Vec) {
    return new Vec(this.x - pos.x, this.y - pos.y);
  }

  multi(n: number) {
    return new Vec(this.x * n, this.y * n);
  }

  isAtEdge() {
    return this.x === 0 || this.y === 0;
  }
}
