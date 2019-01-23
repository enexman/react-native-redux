import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';
import { ROOMS } from '../data/rooms';
import { deepCopy } from '../util';

const initialState = INITIAL_STATE.ROOMS;

export const room = (state = initialState, action) => {
  switch (action.type) {

    case Type.ROOMS_CREATE: {
      const active = ROOMS.filter((it) => action.payload === it.name)[0];
      return deepCopy(active.rooms);
    }

    // case Type.ROOMS_ROOM_VISIBLE: {
    //   return state.map((it) => {
    //     if (action.payload === it.name) it.visible = true;
    //     return it;
    //   });
    // }

    default:
      return state;
  }
};
