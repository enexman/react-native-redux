import { Type } from '../data/type';

export const createSpeakers = (name) => ({
  type: Type.SPEAKERS_CREATE,
  payload: name,
});

// export const deactivateMedical = (speaker) => ({
//   type: Type.SPEAKER_DEACTIVATE,
//   payload: speaker,
// });

