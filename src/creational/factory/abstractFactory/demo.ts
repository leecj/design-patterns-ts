import FurnitureFactory from './furnitureFactory.js';

export function show():void {
  const chair = FurnitureFactory.createFurniture('MediumChair');
  console.log(chair.getDimensions());
  const table = FurnitureFactory.createFurniture('MediumTable');
  console.log(table.getDimensions());
}
