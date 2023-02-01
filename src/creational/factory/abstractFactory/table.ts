import { dimension } from './dimension.js';

export interface ITable {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimensions(): dimension;
}

export class Table implements ITable {
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
