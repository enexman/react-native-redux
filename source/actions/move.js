import { Type } from '../data/type';

export const isMove = () => ({
  type: Type.MOVE_INCREMENT,
});

export const resetMove = () => ({
  type: Type.MOVE_RESET,
});
