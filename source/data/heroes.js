export const HEROES = [
  {
    status: `Охотник`,
    rating: 0,
    name: `Герой - 1`,
    accuracy: 20, // точность выстрела по цели
    strength: 20, // точность удара
    agility: 20, // шанс уклонения
    secrecy: 50, // шанс спрятаться и сбежать
    fullPoint: 100,
    hitPoint: 90,
    wound: 0,
    invisible: false,
    dead: false,
    log: false,
    room: 'sr',
    weapons: {
      body: {
        key: ``,
        type: `weapon`,
        use: `body`,
        name: `Без брони`,
        sum: 0,
        description: ``,
      },
      first: {
        key: ``,
        type: `weapon`,
        use: `first`,
        name: `Пистолет`,
        sum: 10,
        description: ``,
      },
      second: {
        key: ``,
        type: `weapon`,
        use: `second`,
        name: `Кулак`,
        sum: 5,
        description: ``,
      },
    }
  },
];

export const createRandomHero = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

