import { BigChairFactory, SmallChairFactory } from './chairFactory.js';

export function show(): void {
  const chair = new BigChairFactory().createChair();
  console.log(chair.getDimensions());
  const smallChair = new SmallChairFactory().createChair();
  console.log(smallChair.getDimensions());
}
