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
  weapons: {
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
  }
};

export const hero = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.ADD_WEAPON_HERO:
      return addWeapon(state, action);
    case Type.UPDATE_PARAMETER:
      let newState = {...state};
      newState[action.payload.update] += action.payload.sum;
      return newState;
    default:
      return state;
  }
};

const addWeapon = (state, action) => {
  switch (action.payload.use) {
    case 'head' :
      return {...state, weapons: { ...state.weapons, head: action.payload}};
    case 'body' :
      return {...state, weapons: { ...state.weapons, body: action.payload}};
    case 'handRight' :
      return {...state, weapons: { ...state.weapons, handRight: action.payload}};
    case 'handLeft' :
      return {...state, weapons: { ...state.weapons, handLeft: action.payload}};
    case 'feet' :
      return {...state, weapons: { ...state.weapons, feet: action.payload}};
  }
};




// const getSum = (payload, state) => {
//   let newState = {...state};
//   newState[payload.update] += payload.sum
//   return newState;
// };
// book = {
//   type: `book`,
//   message: `You find a book of ${book}`,
//   navigation: getNavigation(paths),
//   dialog: `You got ${book} +1`,
//   update: [book],
//   sum: 1,
// }
