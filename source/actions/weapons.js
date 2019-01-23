import { Type } from '../data/type';

export const deactivateWeapon = (weapon) => ({
  type: Type.WEAPONS_WEAPON_DEACTIVATE,
  payload: weapon,
});

export const createWeapons = (name) => ({
  type: Type.WEAPONS_CREATE,
  payload: name,
});

