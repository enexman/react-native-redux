import { Type } from '../data/type';

export const deactivateMedical = (medical) => ({
  type: Type.MEDICAL_DEACTIVATE,
  payload: medical,
});

export const createMedical = (name) => ({
  type: Type.MEDICAL_CREATE,
  payload: name,
});

export const useMedical = () => ({
  type: Type.MEDICAL_USE,
});

export const resetMedical = () => ({
  type: Type.MEDICAL_RESET,
});
