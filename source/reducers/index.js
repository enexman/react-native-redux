import { combineReducers } from 'redux';
import { room } from './room';
import { hero } from './hero';
import { move } from './move';
import { weapons } from './weapons';
import { inventory } from './inventory';
import { description } from './description';

export const reducers = combineReducers({
  room,
  hero,
  move,
  weapons,
  inventory,
  description,
});
