import { IComponent } from './component.js';

// 3.基础装饰类.拥有一个指向被封装对象的引用成员变量.装饰基类会将所有的操作委派给被封装的对象
export class Decorator implements IComponent {
  // 这一段是典型的代理模式
  component: IComponent;
  constructor(component: IComponent) {
    this.component = component;
  }
  operation(): string {
    return this.component.operation();
  }
}

// 4.具体装饰类,定义了可动态装饰到部件的额外行为.具体装饰类会重写方法,在调用父类方法之前活着之后进行额外的行为.
export class ConcreteDecoratorA extends Decorator {
  operation(): string {
    console.log('ConcreteDecoratorA operation begin');
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

export class ConcreteDecoratorB extends Decorator {
  operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}
