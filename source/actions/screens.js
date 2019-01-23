import { Type } from '../data/type';

export const changeScreen = (screen) => ({
  type: Type.SCREEN_ACTIVE,
  payload: screen,
});
