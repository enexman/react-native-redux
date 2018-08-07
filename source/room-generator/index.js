import createRoomOfBook from './book';
import createEmptyRoom from './empty';
import createRoomOfImpact from './impact';
import createRoomOfTreasure from './treasure';
import createRoomOfMonster from './monster';
import { getRandomNumber } from '../util';

export const generateRoom = () => {

  const rooms = [
    `empty`,
    `treasure`,
    `monster`,
    `book`,
    // `impact`
  ];

  const room = rooms[getRandomNumber(rooms.length)];

  switch (room) {
    case `book` : return createRoomOfBook();
    case `empty` : return createEmptyRoom();
    case `impact` : return createRoomOfImpact();
    case `treasure` : return createRoomOfTreasure();
    case `monster` : return createRoomOfMonster();
  }
};
