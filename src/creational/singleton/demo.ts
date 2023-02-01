import * as SingletonPattern from './singleton.js';
export function show(): void {
  const singleton1 = SingletonPattern.Singleton.getInstance();
  const singleton2 = SingletonPattern.Singleton.getInstance();

  if (singleton1 === singleton2) {
    console.log('two singletons are equivalent');
  } else {
    console.log('two singletons are not equivalent');
  }
}
