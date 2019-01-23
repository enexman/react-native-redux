import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';
import { MEDICAL } from '../data/medical';
import { deepCopy } from '../util';

const initialState = INITIAL_STATE.MEDICAL;

export const medicals = (state = initialState, action) => {
  switch (action.type) {
    case Type.MEDICAL_CREATE:
      const active = MEDICAL.filter((it) => action.payload === it.name)[0];
      return  {...state, medicals: deepCopy(active.medicals)};

    case Type.MEDICAL_DEACTIVATE:
      return  {...state, medicals: state.medicals.filter((it) => it.key !== action.payload.key), kit: state.kit +1};

    case Type.MEDICAL_USE:
      return  {...state, kit: state.kit -1};

    case Type.MEDICAL_RESET:
      return  {...state, kit: 0};

    default:
      return state;
  }
};
