import Chair from './chair.js';

export default class SmallChair extends Chair {
  constructor() {
    super();
    this.height = 40;
    this.width = 40;
    this.depth = 40;
    this.name = 'SmallChair';
  }
}
