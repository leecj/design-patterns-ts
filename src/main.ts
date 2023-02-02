import * as SingletonPatternDemo from './creational/singleton/demo.js';
import * as SimpleFactoryDemo from './creational/factory/simpleFactory/demo.js';
import * as FactoryMethodDemo from './creational/factory/factoryMethod/demo.js';
import * as AbstractFactoryDemo from './creational/factory/abstractFactory/demo.js';
import * as BuilderDemo from './creational/builder/demo.js';
import * as PrototypeDemo from './creational/prototype/demo.js';
// declare var require : (moduleId : string) => any;
// declare var process: any;

import readline from 'readline';

function printMenu(): void {
  const menu =
    '= Creational Patterns == \n' +
    '  1: Singleton \n' +
    '  2: Simple factory \n' +
    '  3: Factory method \n' +
    '  4: Abstract factory \n' +
    '  5: Builder \n' +
    '  6: Prototype \n\n' +
    '= Structural Patterns == \n' +
    '  6: Adapter \n' +
    '  7: Bridge \n' +
    '  8: Composite \n' +
    '  9: Decorator \n' +
    ' 10: Facade \n' +
    ' 11: Flyweight \n' +
    ' 12: Proxy \n\n' +
    '= Behavioral Patterns == \n' +
    ' 13: Chain of responsibility \n' +
    ' 14: Command \n' +
    ' 15: Interpreter \n' +
    ' 16: Iterator \n' +
    ' 17: Mediator \n' +
    ' 18: Memento \n' +
    ' 19: Observer \n' +
    ' 20: State \n' +
    ' 21: Strategy \n' +
    ' 22: Template method \n' +
    ' 23: Visitor \n';

  console.log('\n\n');
  console.log('==== Choose one pattern to demonstrate ====');
  console.log('\n');
  console.log(menu);
}

export function menu(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  printMenu();
  rl.question('Which pattern would you like to check?   ', function (answer) {
    switch (+answer) {
      case 1:
        show(SingletonPatternDemo);
        break;
      case 2:
        show(SimpleFactoryDemo);
        break;
      case 3:
        show(FactoryMethodDemo);
        break;
      case 4:
        show(AbstractFactoryDemo);
        break;
      case 5:
        show(BuilderDemo);
        break;
      case 6:
        show(PrototypeDemo);
        break;
      default:
        break;
    }
    rl.close();
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function show(Pattern: any): void {
  Pattern.show();
}

menu();
