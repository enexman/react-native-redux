import { sortRandom, getRandomNumber } from '../util';

export default function createEmptyRoom() {

  const events = [
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem eos, ex laborum minus nisi omnis veritatis. Amet, consectetur cumque dignissimos distinctio doloremque dolores`
  ];
  const paths = [`forward`, `right`, `left`];

  const getNavigation = function (list) {
    let copy = list.slice();
    const random = Math.floor(1 + Math.random() * copy.length);
    return copy.sort(sortRandom).slice(0, random).sort();
  };

  const eventElem = events[getRandomNumber(events.length)];
  return {
    type: `empty`,
    message: eventElem,
    navigation: getNavigation(paths)
  }
};
