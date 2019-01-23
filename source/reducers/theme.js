import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';

const initialState = INITIAL_STATE.THEME;

export const theme = (state = initialState, action) => {
  switch (action.type) {
    case Type.CHANGE_THEME:
      return {
        ...state,
        activeTheme: action.payload,
        color: {color: action.payload},
        backgroundColor: {backgroundColor: action.payload},
        borderColor: {borderColor: action.payload},
      };

    default:
      return state;
  }
};
