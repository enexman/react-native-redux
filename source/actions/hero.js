import { Type } from '../data/type';

export const heroRelax = () => ({
  type: Type.HERO_RELAX,
});

export const heroInvisible = () => ({
  type: Type.HERO_INVISIBLE,
});

export const heroVisible = () => ({
  type: Type.HERO_VISIBLE,
});

export const moveToRoom = (roomName) => ({
  type: Type.HERO_MOVE_TO_ROOM,
  payload: roomName,
});

export const runFromBattle = (roomName) => ({
  type: Type.HERO_RUN,
  payload: roomName,
});

export const addWeapon = (weapon) => ({
  type: Type.HERO_ADD_WEAPON,
  payload: weapon,
});

export const removeWeapon = (weapon) => ({
  type: Type.HERO_REMOVE_WEAPON,
  payload: weapon,
});

export const setHitByHand = () => ({
  type: Type.HIT_BY_HAND,
});

export const setLongShoot = () => ({
  type: Type.LONG_SHOOT,
});

export const setShoot = () => ({
  type: Type.SHOOT,
});

export const setHeroAttack = (heroAttack, hero) => ({
  type: Type.MONSTER_HERO_ATTACK,
  payload: {heroAttack, hero},
});

export const setTargetAttack = (target) => ({
  type: Type.TARGET,
  payload: target,
});

export const setInitialAttack = () => ({
  type: Type.INITIAL_ATTACK,
});

export const createHero = () => ({
  type: Type.HERO_CREATE,
});

export const addBonus = (accuracy, strength, agility, rating) => ({
  type: Type.HERO_ADD_BONUS,
  payload: {
    accuracy,
    strength,
    agility,
    rating,
  }
});

export const healHero = () => ({
  type: Type.HERO_HEAL,
});

export const clearWoundHero = () => ({
  type: Type.HERO_CLEAR_WOUND,
});
