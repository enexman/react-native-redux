import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';

const initialState = INITIAL_STATE.HERO_ATTACK;

export const heroAttack = (state = initialState, action) => {

  switch (action.type) {

    case Type.HIT_BY_HAND:
      return {...state, hitByHand: true, shoot: false, longShoot: false};

    case Type.SHOOT:
      return {...state, shoot: true, hitByHand: false,  longShoot: false};

    case Type.LONG_SHOOT:
      return {...state, longShoot: true, hitByHand: false, shoot: false };

    case Type.TARGET:
      return {...state, target: action.payload };

    case Type.INITIAL_ATTACK:
      return {...state, target: false, shoot: false, longShoot: false, hitByHand: false};

    default:
      return state;
  }
};
