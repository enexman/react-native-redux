import { Type } from '../data/type';

const INITIAL_STATE = {
  head: {
    id: ``,
    type: `weapon`,
    use: `head`,
    name: `-`,
    update: ``,
    sum: 0,
    description: ``,
  },
  body: {
    id: ``,
    type: `weapon`,
    use: `body`,
    name: `-`,
    update: ``,
    sum: 0,
    description: ``,
  },
  handRight: {
    id: ``,
    type: `weapon`,
    use: `handRight`,
    name: `-`,
    update: ``,
    sum: 0,
    description: ``,
  },
  handLeft: {
    id: ``,
    type: `weapon`,
    use: `handLeft`,
    name: `-`,
    update: ``,
    sum: 0,
    description: ``,
  },
  feet: {
    id: ``,
    type: `weapon`,
    use: `feet`,
    name: `-`,
    update: ``,
    sum: 0,
    description: ``,
  }
};

export const weapons = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.CREATE_WEAPONS:
      return {...state};
    default:
      return state;
  }
};
