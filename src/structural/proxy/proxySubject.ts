import { ISubject, RealSubject } from './subject.js';

export default class ProxySubject implements ISubject {
  realSubject: RealSubject;
  constructor() {
    this.realSubject = new RealSubject();
  }
  doAction(): void {
    console.log("ProxySubject doAction start") // 扩展额外的功能
    this.realSubject.doAction();
    console.log("ProxySubject doAction end")
  }
}
