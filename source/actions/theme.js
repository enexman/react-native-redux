import { Type } from '../data/type';

export const changeTheme = (theme) => ({
  type: Type.CHANGE_THEME,
  payload: theme,
});


