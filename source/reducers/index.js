import { combineReducers } from 'redux';
import { test } from './test';
import { room } from './room';
import { hero } from './hero';
import { move } from './move';
import { weapons } from './weapons';
import { inventory } from './inventory';

export const reducers = combineReducers({
  test,
  room,
  hero,
  move,
  weapons,
  inventory,
});
