import { CsvDataMiner, PdfDataMiner } from './concreteClass.js';

export function show(): void {
  new PdfDataMiner().templateMethods('test.pdf');
  new CsvDataMiner().templateMethods('test.csv');
}
