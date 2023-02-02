export interface ISubject {
  doAction(): void;
}

export class RealSubject implements ISubject {
  doAction(): void {
    console.log('RealSubject doAction');
  }
}
