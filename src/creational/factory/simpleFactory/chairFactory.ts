import {IChair} from './chair.js';
import BigChair from './bigChair.js';
import SmallChair from './smallChair.js';
import MediumChair from './mediumChair.js';

export default class ChairFactory {
  static createChair(chair: string): IChair {
    if (chair === 'BigChair') {
      return new BigChair();
    } else if (chair === 'MediumChair') {
      return new MediumChair();
    } else {
      return new SmallChair();
    }
  }
}
