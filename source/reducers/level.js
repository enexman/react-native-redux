import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';

const initialState = {
  active: 1,
  opened: 1,
};

export const level = (state = initialState, action) => {
  switch (action.type) {

    case Type.LEVEL_START:
      return {...state, active: action.payload};

    case Type.LEVEL_CHANGE:
      return {...state, opened: (action.payload + 1 > state.opened) ? action.payload + 1 : state.opened};

    default:
      return state;
  }
};
