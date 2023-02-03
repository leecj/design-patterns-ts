// 1.抽象部件接口
export interface IComponent {
  operation(): string;
}

// 2.具体部件. 声明了基础行为,但装饰类可以改变行为
export class ConcreteComponent implements IComponent {
  operation(): string {
    return 'Component';
  }
}
