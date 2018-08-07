import { Type } from '../data/type';

const INITIAL_STATE = {
  isOpen: false,
  isTouch: false,
};

export const dialog = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.DIALOG_IS_OPEN:
      return {...state, isOpen: action.payload};
    case Type.DIALOG_IS_TOUCH:
      return {...state, isTouch: action.payload};
    default:
      return state;
  }
};
