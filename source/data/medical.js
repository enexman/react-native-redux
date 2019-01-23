import { generatorId } from '../util';

export const MEDICAL = [
  {
    name: 1,
    medicals: [
      {
        key: generatorId(),
        room: 'sr',
      },
      {
        key: generatorId(),
        room: 'b1',
      },
      {
        key: generatorId(),
        room: 'd1',
      },
      {
        key: generatorId(),
        room: 'd6',
      },
    ]
  },
  {
    name: 2,
    medicals: [
      {
        key: generatorId(),
        room: 'sr',
      },
    ]
  },

];
