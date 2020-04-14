import { changeState, storeState, stateChanger, feed, blueFood } from '../src/plant.js';

describe('changeState', () => {

  test('should feed plant 5 soil points', () => {
    const plant = {}
    const newPlant = blueFood(plant);
    expect(newPlant.soil).toEqual(5);
  });
});