import { ConcreteSubject, Subject } from './subject.js';

// 观察者
export interface Observer {
  // Receive update from subject.
  update(subject: Subject): void;
}

export class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

export class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (
      subject instanceof ConcreteSubject &&
      (subject.state == 0 || subject.state >= 2)
    ) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}
