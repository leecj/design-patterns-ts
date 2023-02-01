import { Table } from './table.js';

export default class BigTable extends Table {
  constructor() {
    super();
    this.name = 'BigTable';
    this.height = 80;
    this.width = 80;
    this.depth = 80;
  }
}
