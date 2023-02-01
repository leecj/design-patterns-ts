import ChairFactory from './chairFactory.js';

export function show():void {
  const chair = ChairFactory.createChair('MediumChair');
  console.log(chair.getDimensions());
}
