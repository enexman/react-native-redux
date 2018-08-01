import { Type } from '../data/type';

const INITIAL_STATE = {
  move: 1,
};

export const move = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.NEXT_MOVE:
      return {...state, move: state.move + 1};
    default:
      return state;
  }
};
