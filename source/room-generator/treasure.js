import { sortRandom, getRandomNumber, generatorId } from '../util';
import { treasures } from '../data/treasures';

export default function createRoomOfTreasure() {

  const paths = [`forward`, `right`, `left`];

  const getNavigation = function (list) {
    let copy = list.slice();
    const random = Math.floor(1 + Math.random() * 2);
    return copy.sort(sortRandom).slice(0, random).sort();
  };

  const treasure = treasures[getRandomNumber(treasures.length)];
  return {
    type: `treasure`,
    message: `You find the ${treasure.name} ${treasure.update} +${treasure.sum}. See into inventory`,
    navigation: getNavigation(paths),
    dialog: `You got ${treasure.name}`,
    treasure: { ...treasure, id: generatorId()},
  }
};
