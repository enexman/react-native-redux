import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';
import { SPEAKERS } from '../data/speakers';
import { deepCopy } from '../util';

const initialState = INITIAL_STATE.SPEAKERS;

export const speakers = (state = initialState, action) => {
  switch (action.type) {
    case Type.SPEAKERS_CREATE:
      const active = SPEAKERS.filter((it) => action.payload === it.name)[0];
      return  deepCopy(active.speakers);

    // case Type.SPEAKER_DEACTIVATE:
    //   return  state.filter((it) => it.key !== action.payload.key);

    default:
      return state;
  }
};
