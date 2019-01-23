import { Type } from '../data/type';

export const createInventory = () => ({
  type: Type.INVENTORY_CREATE,
});

export const removeInventory = (item) => ({
  type: Type.INVENTORY_REMOVE,
  payload: item,
});

export const addInventory = (item) => ({
  type: Type.INVENTORY_ADD,
  payload: item,
});

export const addNewWeaponInventory = (item) => ({
  type: Type.INVENTORY_ADD_NEW_WEAPON,
  payload: item,
});
