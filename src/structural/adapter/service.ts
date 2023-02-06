// 圆孔
export class RoundHole {
  radius: number;
  constructor(radius) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  fit(pg: RoundPeg): boolean {
    return this.getRadius() >= pg.getRadius();
  }
}

// 圆钉
export class RoundPeg {
  radius: number;
  constructor(radius) {
    this.radius = radius;
  }
  getRadius(): number {
    return this.radius;
  }
}

// 方钉
export class SquarePeg {
  width: number;
  constructor(width) {
    this.width = width;
  }
  getWidth(): number {
    return this.width;
  }
}
