import { Table } from './table.js';

export default class MediumTable extends Table {
  constructor() {
    super();
    this.name = 'MediumTable';
    this.height = 60;
    this.width = 60;
    this.depth = 60;
  }
}
