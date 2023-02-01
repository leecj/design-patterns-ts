export class Singleton {
  private static singleton: Singleton;

  // 实用化构造函数, 不能创建实例
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.singleton) {
      Singleton.singleton = new Singleton();
    }
    return this.singleton;
  }
}
