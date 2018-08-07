import { sortRandom, getRandomNumber, getRandomSumParameter } from '../util';

export default function createRoomOfBook() {
  const books = [`strength`, `agility`, `luck`];
  const paths = [`forward`, `right`, `left`];
  const maxSumParameter = 1;

  const getNavigation = function (list) {
    let copy = list.slice();
    const random = Math.floor(1 + Math.random() * 2);
    return copy.sort(sortRandom).slice(0, random).sort();
  };

  const book = books[getRandomNumber(books.length)];
  return {
    type: `book`,
    message: `You find a book of ${book}`,
    navigation: getNavigation(paths),
    dialog: `You got ${book} +`,
    update: [book],
    sum: getRandomSumParameter(maxSumParameter),
  }
};
