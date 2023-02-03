import { ConcreteComponent } from './component.js';
import { ConcreteDecoratorA, ConcreteDecoratorB } from './decorator.js';

export function show(): void {
  const simple = new ConcreteComponent();
  console.log('原始对象:');
  console.log(simple.operation());

  const decoratorA = new ConcreteDecoratorA(simple);
  const decoratorB = new ConcreteDecoratorB(decoratorA);
  console.log('装饰对象:');
  console.log(decoratorB.operation());
}
