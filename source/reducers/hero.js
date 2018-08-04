import { Type } from '../data/type';

const INITIAL_STATE = {
  level: 1,
  race: `Human`,
  class: `no class`,
  name: `Hero`,
  strength: 1,
  agility: 10,
  luck: 10,
  impacts: [],
};

export const hero = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case Type.ADD_WEAPON_HEAD:
    //   return {...state, weapons: {head: action.payload}};
    default:
      return state;
  }
};
