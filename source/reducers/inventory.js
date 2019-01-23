import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';

const initialState = INITIAL_STATE.INVENTORY;

export const inventory = (state = initialState, action) => {
  switch (action.type) {
    case Type.INVENTORY_REMOVE:
      return state.map((it) => {
        if(it.key === action.payload.key && it.use === action.payload.use) {
          it.active = true;
        }
        if (it.key !== action.payload.key && it.use === action.payload.use) {
          it.active = false;
        }
        return it;
      });
    case Type.INVENTORY_ADD:
      return state.map((it) => {
        if(it.key === action.payload.key) {
          it.active = false;
        }
        return it;
      });

    case Type.INVENTORY_ADD_NEW_WEAPON: {
      return [...state, action.payload];
    }

    case Type.INVENTORY_CREATE: {
      return [];
    }

    default:
      return state;
  }
};
