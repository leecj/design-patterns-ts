import House from './house.js';
import HouseBuilder from './houseBuilder.js';

export default class IglooDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('Igloo')
      .setWallMaterial('Ice')
      .setNumberDoors(1)
      .getResult();
  }
}
