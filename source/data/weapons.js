import { generatorId } from '../util';

export const WEAPONS = [
  {
    name: 1,
    weapons: [
      {
        key: generatorId(),
        room: 'b1',
        type: `weapon`,
        use: `body`,
        name: `Военная экипировка`,
        sum: 20,
        description: `Военная экипировка +20 к защите`,
        active: false,
        requirement: {
          rating: 0,
          accuracy: 0,
          strength: 0,
          agility: 0,
        }
      },
      {
        key: generatorId(),
        room: 'd1',
        type: `weapon`,
        use: `first`,
        name: `АКМ 47`,
        sum: 35,
        description: `Автомат Калашникова +35 к стрельбе`,
        active: false,
        requirement: {
          rating: 100,
          accuracy: 10,
          strength: 10,
          agility: 0,
        }
      },
      {
        key: generatorId(),
        room: 'd4',
        type: `weapon`,
        use: `first`,
        name: `M16`,
        sum: 30,
        description: `Американская винтовка +30 к стрельбе`,
        active: false,
        requirement: {
          rating: 200,
          accuracy: 10,
          strength: 10,
          agility: 10,
        }
      },
      {
        key: generatorId(),
        room: 'c6',
        type: `weapon`,
        use: `body`,
        name: `Эгзоскелет`,
        sum: 80,
        description: `Эгзоскелет +80 к броне`,
        active: false,
        requirement: {
          rating: 300,
          accuracy: 23,
          strength: 23,
          agility: 23,
        }
      },
      {
        key: generatorId(),
        room: 'c5',
        type: `weapon`,
        use: `second`,
        name: `Мачето`,
        sum: 80,
        description: `Мачето +80 ближний бой`,
        active: false,
        requirement: {
          rating: 400,
          accuracy: 0,
          strength: 0,
          agility: 0,

        }
      },
      {
        key: generatorId(),
        room: 'a1',
        type: `weapon`,
        use: `second`,
        name: `Нож`,
        sum: 10,
        description: `Столовый нож +10 ближний бой`,
        active: false,
        requirement: {
          rating: 0,
          accuracy: 0,
          strength: 0,
          agility: 0,
        }
      },
    ]
  },
  {
    name: 2,
    weapons: [
      {
        key: generatorId(),
        room: 'b1',
        type: `weapon`,
        use: `body`,
        name: `Военная экипировка 2`,
        sum: 20,
        description: `Военная экипировка +20 к защите`,
        active: false,
        requirement: {
          rating: 0,
          accuracy: 0,
          strength: 0,
          agility: 0,
        }
      },
    ]
  },
];
