import { Type } from '../data/type';

export const startLevel = (name) => ({
  type: Type.LEVEL_START,
  payload: name,
});

export const changeLevel = (name) => ({
  type: Type.LEVEL_CHANGE,
  payload: name,
});

