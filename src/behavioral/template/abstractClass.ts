export class DataMiner {
  public templateMethods(path: string): void {
    this.openFile(path);
    this.extractData();
    this.parseData();
    this.sendReport();
    this.closeFile();
  }

  protected openFile(path: string): void {
    console.log('AbstractClass: openFile path: ' + path);
  }

  protected extractData(): void {
    console.log('AbstractClass: extractData');
  }

  protected parseData(): void {
    console.log('AbstractClass: parseData');
  }

  protected sendReport(): void {
    console.log('AbstractClass: sendReport');
  }

  protected closeFile(): void {
    console.log('AbstractClass: closeFile');
  }
}
