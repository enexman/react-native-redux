import { Type } from '../data/type';

export const deadMonster = (monsterKey) => ({
  type: Type.MONSTERS_MONSTER_DEAD,
  payload: monsterKey,
});

export const createMonsters = (name) => ({
  type: Type.MONSTERS_CREATE,
  payload: name,
});

export const moveMonsters = (rooms) => ({
  type: Type.MONSTERS_MOVE,
  payload: rooms,
});
