import House from './house.js';
import HouseBuilder from './houseBuilder.js';

export default class HouseBoatDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('House Boat')
      .setWallMaterial('Wood')
      .setNumberDoors(6)
      .setNumberWindows(8)
      .getResult();
  }
}
