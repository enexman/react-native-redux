import { Type } from '../data/type';
import { INITIAL_STATE } from './initial-state';
import { NOTES } from '../data/notes';
import { deepCopy, } from '../util';


const initialState = INITIAL_STATE.NOTES;

export const notes = (state = initialState, action) => {
  switch (action.type) {

    case Type.NOTE_ADD:
      return state.map((it) => {
        if(it.key === action.payload.key) {
          it.saved = true;
        }
        return it
      });

    case Type.NOTES_CREATE:
      return deepCopy(NOTES);

    default:
      return state;
  }
};
