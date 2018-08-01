import { Type } from '../data/type';
import { generateRoom } from '../room-generator';

const INITIAL_STATE = {
  message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem eos, ex laborum minus nisi omnis veritatis. Amet, consectetur cumque dignissimos distinctio doloremque dolores facere facilis in inventore ipsam ipsum iste maxime minima modi mollitia`,
  navigation: [`forward`],
  type: `empty`,
};

export const room = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.CREATE_ROOM:
      const generatedRoom = generateRoom();
      return {...state, ...generatedRoom};
    default:
      return state;
  }
};
