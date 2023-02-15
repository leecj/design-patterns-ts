export interface IHandler {
  setNext(handler: IHandler): IHandler;
  handler(request: string): string;
}

abstract class AbstractHandler implements IHandler {
  nextHandler: IHandler;
  setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }
  handler(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handler(request);
    }
    return null;
  }
}

export class MonkeyHandler extends AbstractHandler {
  handler(request: string): string {
    if (request == 'Banana') {
      return `Monkey: I like eat the ` + request;
    }
    return super.handler(request);
  }
}

export class DogHandler extends AbstractHandler {
  handler(request: string): string {
    if (request == 'Meat') {
      return `Dog: I like eat the ` + request;
    }
    return super.handler(request);
  }
}

export class SquirrelHandler extends AbstractHandler {
  handler(request: string): string {
    if (request == 'Nut') {
      return `Squirrel: I like eat the ` + request;
    }
    return super.handler(request);
  }
}
