import {
  DogHandler,
  IHandler,
  MonkeyHandler,
  SquirrelHandler,
} from './handler.js';

export function show(): void {
  const monkeyHandler = new MonkeyHandler();
  const dogHandler = new DogHandler();
  const squireelHandler = new SquirrelHandler();

  monkeyHandler.setNext(dogHandler).setNext(squireelHandler);

  console.log('Chain: Monkey > Squirrel > Dog\n');
  clientCode(monkeyHandler);
  console.log('');

  console.log('Subchain: Squirrel > Dog\n');
  clientCode(squireelHandler);
}

function clientCode(handler: IHandler): void {
  const foots = ['Nut', 'Banana', 'Coffee'];

  for (const foot of foots) {
    console.log(`Client: who want eat a ${foot}`);
    const result = handler.handler(foot);
    if (result) {
      console.log(` ${result}`);
    } else {
      console.log(` ${foot} was left untouched`);
    }
  }
}
