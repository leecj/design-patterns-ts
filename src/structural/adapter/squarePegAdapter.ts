import { RoundPeg, SquarePeg } from './service.js';

// 适配器,使得方钉能打入圆孔中
export class SquarePegAdapter extends RoundPeg {
  // 在实际情况中，适配器中会包含一个 SquarePeg 类的实例
  private peg: SquarePeg;
  constructor(peg: SquarePeg) {
    super(SquarePeg);
    this.peg = peg;
  }
  getRadius(): number {
    // 适配器会假扮为一个圆钉，其半径刚好能与适配器实际封装的方钉搭配起来
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}
