import { Type } from '../data/type';

export const createRooms = (name) => ({
  type: Type.ROOMS_CREATE,
  payload: name,
});

// export const setVisibleRoom = (name) => ({
//   type: Type.ROOMS_ROOM_VISIBLE,
//   payload: name,
// });

