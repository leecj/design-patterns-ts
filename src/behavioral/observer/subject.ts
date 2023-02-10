import { Observer } from './observer.js';

// 被观察者(发布者)
export interface Subject {
  // 订阅
  attach(observer: Observer): void;

  // 取消订阅
  detach(observer: Observer): void;

  // 向订阅者发布事件通知
  notify(): void;
}

export class ConcreteSubject implements Subject {
  public state: number;
  private observers: Observer[] = [];
  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already');
    }
    console.log('Subject: Attached observer');
    this.observers.push(observer);
  }
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex == -1) {
      return console.log('Subject: observer none exists');
    }
    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached observer');
  }
  notify(): void {
    console.log('Subject: Notifying observers');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
  doSomething(): void {
    console.log('Subject: do something');
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log('Subject: change state to ' + this.state);
    this.notify();
  }
}
