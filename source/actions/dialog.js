import { Type } from '../data/type';

export const isOpen = (param) => ({
  type: Type.DIALOG_IS_OPEN,
  payload: param,
});

export const isTouch = (param) => ({
  type: Type.DIALOG_IS_TOUCH,
  payload: param,
});
