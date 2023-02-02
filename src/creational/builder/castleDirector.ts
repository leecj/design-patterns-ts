import House from './house.js';
import HouseBuilder from './houseBuilder.js';

export default class CastleDirect {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('Castle')
      .setWallMaterial('Sandstone')
      .setNumberDoors(100)
      .setNumberWindows(200)
      .getResult();
  }
}
