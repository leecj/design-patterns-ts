import { IChair } from './chair.js';
import BigChair from './bigChair.js';
import SmallChair from './smallChair.js';
import MediumChair from './mediumChair.js';

interface IChairFactory {
  createChair(): IChair;
}

export class SmallChairFactory implements IChairFactory {
  createChair(): IChair {
    return new SmallChair();
  }
}

export class MediumChairFactory implements IChairFactory {
  createChair(): IChair {
    return new MediumChair();
  }
}

export class BigChairFactory implements IChairFactory {
  createChair(): IChair {
    return new BigChair();
  }
}
