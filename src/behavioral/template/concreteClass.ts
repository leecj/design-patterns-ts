import { DataMiner } from "./abstractClass.js";

export class PdfDataMiner extends DataMiner{
  // 重写模版方法
  protected openFile(path: string): void {
    console.log("PdfDataMiner: openFile path: " + path);
  }
  protected extractData(): void {
    console.log("PDFDataMiner: extractData");

  }
}

export class CsvDataMiner extends DataMiner{
  // 重写模版方法
  protected openFile(path: string): void {
    console.log("CsvDataMiner: openFile path: " + path);
  }
  protected closeFile(): void {
    console.log("closeFile: extractData");

  }
}
