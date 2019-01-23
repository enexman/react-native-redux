import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';
import { getRandomNumber } from '../util';
const initialState = INITIAL_STATE.DIALOG;

export const dialog = (state = initialState, action) => {
  switch (action.type) {

    case Type.IS_OPEN_DIALOG_RUN:
      const run = (getRandomNumber(100) > action.payload.secrecy);
      return {...state, isOpen: true, run};

    case Type.IS_CLOSE_DIALOG_RUN:
      return {...state, isOpen: false,};


    case Type.IS_OPEN_DIALOG_ATTACK:
      return {...state, isOpenAttack: true, message: action.payload};

    case Type.IS_CLOSE_DIALOG_ATTACK:
      return {...state, isOpenAttack: false, message: ''};


    case Type.IS_OPEN_DIALOG_MONSTER:
      return {...state, isOpenMonster: true,};

    case Type.IS_CLOSE_DIALOG_MONSTER:
      return {...state, isOpenMonster: false,};

    default:
      return state;
  }
};
