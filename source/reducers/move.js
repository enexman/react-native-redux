import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';

const initialState = {
  increment: 0
};

export const move = (state = initialState, action) => {
  switch (action.type) {
    case Type.MOVE_RESET:
      return {...state, increment: 0};

    case Type.MOVE_INCREMENT:
      return {...state, increment: state.increment + 1};

    default:
      return state;
  }
};
