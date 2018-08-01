

export const sortRandom = () => Math.random() - 0.5;

export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const generatorId = () => `id${Math.random().toString(16).slice(2)}`;
