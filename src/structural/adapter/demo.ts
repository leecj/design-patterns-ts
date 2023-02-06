import { RoundHole, RoundPeg, SquarePeg } from './service.js';
import { SquarePegAdapter } from './squarePegAdapter.js';

export function show(): void {
  const roundHole = new RoundHole(2);
  const roundPeg = new RoundPeg(2);
  console.log('roundPeg 2 fit to roundHole 2', roundHole.fit(roundPeg));

  const squarePeg = new SquarePeg(1);
  // roundHole.fit(squarePeg)
  // 编译错误 参数类型不匹配

  const squarePegAdapter = new SquarePegAdapter(squarePeg);
  console.log('squarePagAdapter 1 fit to roundHole 2', roundHole.fit(squarePegAdapter));
}
