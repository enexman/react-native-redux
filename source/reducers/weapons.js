import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';
import { WEAPONS } from '../data/weapons';
import { deepCopy } from '../util';

const initialState = INITIAL_STATE.WEAPONS;

export const weapons = (state = initialState, action) => {
  switch (action.type) {
    case Type.WEAPONS_CREATE:
      const active = WEAPONS.filter((it) => action.payload === it.name)[0];
      return  deepCopy(active.weapons);

    case Type.WEAPONS_WEAPON_DEACTIVATE:
      return  state.filter((it) => it.key !== action.payload.key);

    default:
      return state;
  }
};
