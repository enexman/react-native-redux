import { Type } from '../data/type';

export const createNotes = () => ({
  type: Type.NOTES_CREATE,
});

export const addNote = (item) => ({
  type: Type.NOTE_ADD,
  payload: item,
});
