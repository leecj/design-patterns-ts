import { IChair } from './chair.js';
import ChairFactory from './chairFactory.js';
import { ITable } from './table.js';
import TableFactory from './tableFactory.js';

interface IFurniture extends IChair, ITable {}

export default class FurnitureFactory {
  // 抽象的家具工厂方法
  static createFurniture(furniture: string): IFurniture | undefined {
    if (['SmallTable', 'BigTable', 'MediumTable'].indexOf(furniture) > -1) {
      return TableFactory.createTable(furniture);
    }
    if (['SmallChair', 'BigChair', 'MediumChair'].indexOf(furniture) > -1) {
      return ChairFactory.createChair(furniture);
    }
    return undefined;
  }
}
