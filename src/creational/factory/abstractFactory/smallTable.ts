import { Table } from './table.js';

export default class SmallTable extends Table {
  constructor() {
    super();
    this.name = 'SmallTable';
    this.height = 40;
    this.width = 40;
    this.depth = 40;
  }
}
