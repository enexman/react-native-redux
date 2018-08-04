import { Type } from '../data/type';

const INITIAL_STATE = [
  {
    id: `1w`,
    type: `weapon`,
    use: `head`,
    name: `Шлем`,
    update: ``,
    sum: 0,
    description: `Это крутой шлем`,
  },
  {
    id: `2w`,
    type: `weapon`,
    use: `body`,
    name: `Доспехи`,
    update: ``,
    sum: 0,
    description: `Это крутые доспехи`,
  },
  {
    id: `3w`,
    type: `weapon`,
    use: `handRight`,
    name: `Меч`,
    update: ``,
    sum: 0,
    description: `Это крутой меч`,
  },
];

export const inventory = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.DROP_WEAPON_INVENTORY:
      return state.filter((it) => it.id !== action.payload);
    default:
      return state;
  }
};
