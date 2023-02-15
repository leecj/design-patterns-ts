import * as SingletonPatternDemo from './creational/singleton/demo.js';
import * as SimpleFactoryDemo from './creational/factory/simpleFactory/demo.js';
import * as FactoryMethodDemo from './creational/factory/factoryMethod/demo.js';
import * as AbstractFactoryDemo from './creational/factory/abstractFactory/demo.js';
import * as BuilderDemo from './creational/builder/demo.js';
import * as PrototypeDemo from './creational/prototype/demo.js';
import * as ProxyDemo from './structural/proxy/demo.js';
import * as BridgeDemo from './structural/bridge/demo.js';
import * as DecoratorDemo from './structural/decorator/demo.js';
import * as AdapterDemo from './structural/adapter/demo.js';
import * as ObserverDemo from './behavioral/observer/demo.js';
import * as TemplateDemo from './behavioral/template/demo.js';
import * as StrategyDemo from './behavioral/strategy/demo.js';
import * as ChainOfResponsibilityDemo from './behavioral/chainOfResponsibility/demo.js';

ChainOfResponsibilityDemo

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
    '  7: Proxy \n' +
    '  8: Bridge \n' +
    '  9: Decorator \n' +
    '  10: Adapter \n' +
    ' 11: Facade \n' +
    ' 12: Composite \n' +
    ' 13: Flyweight \n' +
    '= Behavioral Patterns == \n' +
    ' 14: Observer \n' +
    ' 15: Template method \n' +
    ' 16: Strategy \n' +
    ' 17: Chain of responsibility \n' +
    ' 14: Command \n' +
    ' 15: Interpreter \n' +
    ' 16: Iterator \n' +
    ' 17: Mediator \n' +
    ' 18: Memento \n' +
    ' 20: State \n' +
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
      case 7:
        show(ProxyDemo);
        break;
      case 8:
        show(BridgeDemo);
        break;
      case 9:
        show(DecoratorDemo);
        break;
      case 10:
        show(AdapterDemo);
        break;
      case 14:
        show(ObserverDemo);
        break;
      case 15:
        show(TemplateDemo);
        break;
      case 16:
        show(StrategyDemo);
        break;
      case 17:
        show(ChainOfResponsibilityDemo);
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
