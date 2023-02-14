export interface IStrategy {
  execute(a: number, b: number): number;
}

export class StrategyAdd implements IStrategy {
  execute(a: number, b: number): number {
    console.log("StrategyAdd");
    return a + b;
  }
}

export class StrategySubtract implements IStrategy {
  execute(a: number, b: number): number {
    console.log("StrategySubtract");
    return a - b;
  }
}

export class StrategyMultiply implements IStrategy {
  execute(a: number, b: number): number {
    console.log("StrategyMultiply");
    return a * b;
  }
}
