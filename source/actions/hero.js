import { Type } from '../data/type';

export const addWeapon = (weapon) => ({
  type: Type.ADD_WEAPON_HERO,
  payload: weapon,
});

export const updateParameter = (param) => ({
  type: Type.UPDATE_PARAMETER,
  payload: param,
});
