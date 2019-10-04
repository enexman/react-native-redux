import { Type } from '../type';
import { INITIAL_STATE } from './initial-state';

const initialState = INITIAL_STATE.SCREENS;


export const screens = (state = initialState, action) => {
  switch (action.type) {
    case Type.SCREEN_ACTIVE:
      return {...state, activeScreen: action.payload};
    default:
      return state;
  }
};
