import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';

const initialState = INITIAL_STATE.FIND;

export const find = (state = initialState, action) => {
  switch (action.type) {
    case Type.FIND_IS_ACTIVATED:
      return {...state, activated: !state.activated};

    case Type.FIND_DEACTIVATE:
      return {...state, activated: false};
    
    default:
      return state;
  }
};
