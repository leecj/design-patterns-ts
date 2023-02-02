import CastleDirect from './castleDirector.js';
import HouseBoatDirector from './houseBoatDirector.js';
import IglooDirector from './iglooDirector.js';

export function show(): void {
  console.log(HouseBoatDirector.construct());
  console.log(CastleDirect.construct());
  console.log(IglooDirector.construct());
}
