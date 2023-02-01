import { dimension } from './dimension.js';

// A Chair Interface
export interface IChair {
  height: number;
  width: number;
  depth: number;
  name: string;
  getDimensions(): dimension;
}

// The Chair Base Class
export default class Chair implements IChair {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimensions(): dimension {
    return {
      width: this.width,
      depth: this.depth,
      height: this.height,
      name: this.name,
    };
  }
}
