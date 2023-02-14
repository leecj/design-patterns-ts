import { IStrategy } from './strategy.js';

export class Context {
  private strategy: IStrategy;
  public setStrategy(strategy: IStrategy): void {
    console.log('Context: setStrategy');
    this.strategy = strategy;
  }
  public executeStrategy(a, b): number {
    console.log('Context: executeStrategy-' + a + ',' + b);
    return this.strategy.execute(a, b);
  }
}
