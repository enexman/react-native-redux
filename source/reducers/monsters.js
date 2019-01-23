import { Type } from '../data/type';
import { getRandomNumber, deepCopy, getRandomDistance } from '../util';
import { MONSTERS } from '../data/monsters';
import { INITIAL_STATE } from './initial-state';

const initialState = INITIAL_STATE.MONSTERS;

export const monsters = (state = initialState, action) => {
  switch (action.type) {
    case Type.MONSTERS_CREATE:
      const active = MONSTERS.filter((it) => action.payload === it.name)[0];
      return deepCopy(active.monsters);

    case Type.MONSTERS_MOVE:
      return moveMonsters(state, action.payload);

    case Type.MONSTERS_MONSTER_DEAD:
      return state.map((it) => { if(it.key === action.payload) {it.dead = true} return it });

    default:
      return state;
  }
};

const moveMonsters = (monsters, rooms) => {
  const chanceOfMove = 0.3;

  return monsters.map((monster) => {
    const room = rooms.filter((room) => {
      return monster.room === room.name;
    })[0];

    const isMove = (Math.random() < chanceOfMove);

    if (isMove && !monster.dead) {
      monster.distance = getRandomDistance();
      monster.room = room.direction[getRandomNumber(room.direction.length)].name;
    }

    return monster;
  })
};
