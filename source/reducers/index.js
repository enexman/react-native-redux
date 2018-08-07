import { combineReducers } from 'redux';
import { room } from './room';
import { hero } from './hero';
import { move } from './move';
import { inventory } from './inventory';
import { description } from './description';
import { dialog } from './dialog';

export const reducers = combineReducers({
  room,
  hero,
  move,
  inventory,
  description,
  dialog,
});
