import { combineReducers } from 'redux';
import { hero } from './hero';
import { inventory } from './inventory';
import { heroAttack } from './hero-attack';
import { monster } from './monster';
import { screens } from './screens';
import { dialog } from './dialog';
import { room } from './room';
import { notes } from './notes';
import { theme } from './theme';
import { find } from './find';
import { monsters } from './monsters';
import { weapons } from './weapons';
import { medicals } from './medicals';
import { move } from './move';
import { visible } from './visible';
import { speakers } from './speakers';
import { level } from './level';
import { test } from './test';

export const reducers = combineReducers({
  test,
  hero,
  inventory,
  heroAttack,
  monster,
  monsters,
  screens,
  dialog,
  room,
  notes,
  theme,
  find,
  weapons,
  medicals,
  move,
  visible,
  speakers,
  level,
});
