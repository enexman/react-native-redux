import { Type } from '../data/type';

const INITIAL_STATE = {
  id: '',
  description: '',
};

export const description = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case Type.ACTIVE_DESCRIPTION:
      // const { description, id, } = action.payload;
      return {...state, description: action.payload};
    default:
      return state;
  }
};
