import { ConcreteObserverA, ConcreteObserverB } from './observer.js';
import { ConcreteSubject } from './subject.js';

export function show(): void {
  const subject = new ConcreteSubject();

  const observer1 = new ConcreteObserverA();
  subject.attach(observer1);

  const observer2 = new ConcreteObserverB();
  subject.attach(observer2);

  subject.doSomething();
  subject.doSomething();

  subject.detach(observer2);

  subject.doSomething();
}
