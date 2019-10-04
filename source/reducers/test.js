import { Type } from '../type';

const initialState = {
  test: 'Не работает'
};

export const test = (state = initialState, action) => {
  switch (action.type) {
    case Type.TEST:
      return {...state, test: 'работает'};

    default:
      return state;
  }
};
