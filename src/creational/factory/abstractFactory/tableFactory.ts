import BigTable from './bigTable.js';
import SmallTable from './smallTable.js';
import MediumTable from './mediumTable.js';
import { ITable } from './table.js';

export default class TableFactory {
  static createTable(table: string): ITable {
    if (table === 'SmallTable') {
      return new SmallTable();
    } else if (table === 'MediumTable') {
      return new MediumTable();
    } else {
      return new BigTable();
    }
  }
}
