import { Type } from '../data/type';

export const createMonster = (monster) => ({
  type: Type.MONSTER_CREATE,
  payload: monster,
});

export const setMonsterAttack = (monster) => ({
  type: Type.HERO_MONSTER_ATTACK,
  payload: monster,
});

export const setMonsterDistance = (monster) => ({
  type: Type.MONSTER_DISTANCE,
  payload: monster,
});
