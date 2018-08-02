import { getRandomNumber } from '../util';

export default function createRoomOfMonster() {

  const monsters = [`monster`];

  const paths = [`fight`, `run`];

  const monster = monsters[getRandomNumber(monsters.length)];
  return {
    type: `monster`,
    message: `You meet the ${monster}`,
    navigation: paths,
    monster: monster
  }
};
