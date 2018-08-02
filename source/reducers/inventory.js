// import { Type } from '../data/type';

const INITIAL_STATE = [
  {
    id: `1w`,
    type: `weapon`,
    use: `head`,
    name: `Шлем`,
    update: ``,
    sum: 0,
    description: ``,
  },
  {
    id: `2w`,
    type: `weapon`,
    use: `body`,
    name: `Доспехи`,
    update: ``,
    sum: 0,
    description: ``,
  },
  {
    id: `3w`,
    type: `weapon`,
    use: `handRight`,
    name: `Меч`,
    update: ``,
    sum: 0,
    description: ``,
  },
];

export const inventory = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case Type.CREATE_HERO:
    //   return {...state};
    default:
      return state;
  }
};
