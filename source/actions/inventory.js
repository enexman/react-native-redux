import { Type } from '../data/type';

export const activeDescription = (description) => ({
  type: Type.ACTIVE_DESCRIPTION,
  payload: description
});

export const dropWeapon = (id) => ({
  type: Type.DROP_WEAPON_INVENTORY,
  payload: id,
});
