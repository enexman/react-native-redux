import { Type } from '../data/type';

export const addWeapon = (weapon) => ({
  type: Type.ADD_WEAPON_HERO,
  payload: weapon,
});
