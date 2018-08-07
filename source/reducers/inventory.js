import { Type } from '../data/type';

const INITIAL_STATE = [
  {
    id: `1w`,
    type: `weapon`,
    use: `head`,
    name: `Шлем`,
    update: `luck`,
    sum: 3,
    description: `Это крутой шлем`,
  },
  {
    id: `2w`,
    type: `weapon`,
    use: `body`,
    name: `Доспехи`,
    update: `agility`,
    sum: 2,
    description: `Это крутые доспехи`,
  },
  {
    id: `3w`,
    type: `weapon`,
    use: `handRight`,
    name: `Меч`,
    update: `strength`,
    sum: 4,
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
