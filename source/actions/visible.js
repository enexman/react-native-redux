import { Type } from '../data/type';

export const visibleActivate = () => ({
  type: Type.VISIBLE_ACTIVATED,
});

export const visibleDeactivate = () => ({
  type: Type.VISIBLE_DEACTIVATED,
});
