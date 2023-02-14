import { Context } from './context.js';
import { StrategyAdd, StrategyMultiply, StrategySubtract } from './strategy.js';

export function show(): void {
  const context = new Context();
  context.setStrategy(new StrategyAdd());
  console.log(context.executeStrategy(1, 2));

  context.setStrategy(new StrategySubtract());
  console.log(context.executeStrategy(1, 2));

  context.setStrategy(new StrategyMultiply());
  console.log(context.executeStrategy(1, 2));
}
