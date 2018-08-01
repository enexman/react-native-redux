import { Type } from '../data/type';

const INITIAL_STATE = {
  level: 1,
  race: `Human`,
  class: `no class`,
  name: `Hero`,
  strength: 1,
  agility: 10,
  luck: 10,
  inventory: [],
  impacts: [],
};

export const hero = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.CREATE_HERO:
      return {...state};
    default:
      return state;
  }
};
