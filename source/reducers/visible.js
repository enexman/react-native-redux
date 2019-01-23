import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';

const initialState = INITIAL_STATE.VISIBLE;

export const visible = (state = initialState, action) => {
  switch (action.type) {
    case Type.VISIBLE_ACTIVATED:
      return {...state, activated: true};

    case Type.VISIBLE_DEACTIVATED:
      return {...state, activated: false};

    default:
      return state;
  }
};
