import { Type } from '../data/type';

export const openDialogRun = (hero) => ({
  type: Type.IS_OPEN_DIALOG_RUN,
  payload: hero,
});

export const closeDialogRun = () => ({
  type: Type.IS_CLOSE_DIALOG_RUN,
});

export const openDialogAttack = (message) => ({
  type: Type.IS_OPEN_DIALOG_ATTACK,
  payload: message
});

export const closeDialogAttack = () => ({
  type: Type.IS_CLOSE_DIALOG_ATTACK,
});

export const openDialogMonster = () => ({
  type: Type.IS_OPEN_DIALOG_MONSTER,
});

export const closeDialogMonster = () => ({
  type: Type.IS_CLOSE_DIALOG_MONSTER,
});
