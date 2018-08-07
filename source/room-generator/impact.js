import { sortRandom, getRandomNumber, generatorId } from '../util';
import { impacts } from '../data/impacts';

export default function createRoomOfImpact() {

  const paths = [`forward`, `right`, `left`];

  const getNavigation = function (list) {
    let copy = list.slice();
    const random = Math.floor(1 + Math.random() * 2);
    return copy.sort(sortRandom).slice(0, random).sort();
  };

  const impact = impacts[getRandomNumber(impacts.length)];
  return {
    type: `impact`,
    message: `You find impact: ${impact.name}`,
    navigation: getNavigation(paths),
    dialog: `You ${impact.name} -`,
    impact: { ...impact, id: generatorId()},
    sum: impact.sum
  }
};
