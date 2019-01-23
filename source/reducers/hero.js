import { Type } from '../data/type';
import { maxHeroParameter, heroHitPoint } from '../data/constants';
import { INITIAL_STATE } from './initial-state';
import { HEROES, createRandomHero } from '../data/heroes';

const initialState = INITIAL_STATE.HERO;
let initialWeapons = null;

export const hero = (state = initialState, action) => {

  switch (action.type) {

    case Type.HERO_RELAX:
      const valueRelax = 5;
      const hitPoint = (state.fullPoint >= state.hitPoint + valueRelax)
        ? state.hitPoint + valueRelax
        : state.fullPoint;
      return {...state, hitPoint};

    case Type.HERO_INVISIBLE:
      return setVisibility(state);

    case Type.HERO_VISIBLE:
      return {...state, invisible: false};

    case Type.HERO_MOVE_TO_ROOM:
      return {...state, prevRoom: state.room ,room: action.payload};

    case Type.HERO_RUN:
      return {...state, prevRoom: null ,room: action.payload};

    case Type.HERO_ADD_WEAPON:
      return addWeapon(state, action);

    case Type.HERO_REMOVE_WEAPON:
      return removeWeapon(state, action);

    case Type.HERO_MONSTER_ATTACK:
      return monsterAttack(state, action);

    case Type.HERO_HEAL:
      return {...state, hitPoint: heroHitPoint, wound: 0};

    case Type.HERO_CLEAR_WOUND:
      return {...state, wound: 0};

    case Type.HERO_CREATE:
      const hero = createRandomHero(HEROES);
      initialWeapons = hero.weapons;
      return hero;

    case Type.HERO_ADD_BONUS:
      let { accuracy, strength, agility, rating } = action.payload;
      let setAccuracy = {...state}.accuracy;
      let setStrength = {...state}.strength;
      let setAgility = {...state}.agility;
      setAccuracy = ((setAccuracy + accuracy) >= maxHeroParameter) ? maxHeroParameter : (setAccuracy + accuracy);
      setStrength = ((setStrength + strength) >= maxHeroParameter) ? maxHeroParameter : (setStrength + strength);
      setAgility = ((setAgility + agility) >= maxHeroParameter) ? maxHeroParameter : (setAgility + agility);
      return {
        ...state,
        accuracy: setAccuracy,
        strength: setStrength,
        agility: setAgility,
        rating: state.rating + rating,
        log: false,
      };

    default:
      return state;
  }
};

const addWeapon = (state, action) => {

  switch (action.payload.use) {

    case 'body' :
      return {...state, weapons: { ...state.weapons, body: action.payload}};

    case 'first' :
      return {...state, weapons: { ...state.weapons, first: action.payload}};

    case 'second' :
      return {...state, weapons: { ...state.weapons, second: action.payload}};

  }
};

const removeWeapon = (state, action) => {

  switch (action.payload.use) {

    case 'body' :
      return {...state, weapons: {...state.weapons, body: initialWeapons.body}};

    case 'first' :
      return {...state, weapons: {...state.weapons, first: initialWeapons.first}};

    case 'second' :
      return {...state, weapons: {...state.weapons, second: initialWeapons.second}};
  }
};

const monsterAttack = (state, action) => {
  const newState = {...state};
  const random = Math.floor(Math.random() * 100);

  newState.wound = 0; // сбрасываем ранение
  newState.log = true; // включаем лог

  if(random < newState.agility) return newState; // сработала защита

  let { attack, health, distance } = action.payload;
  if(health.hands) {
    attack = attack/2;
  }
  if(distance <= 0) {

    attack = (newState.weapons.body.sum - attack < 0) ? newState.weapons.body.sum - attack : 0;
    attack = (attack < 0) ? -attack : attack;

    newState.hitPoint -= attack;
    newState.wound = attack;

    if(newState.hitPoint <= 0) {
      newState.wound = attack + newState.hitPoint;
      newState.hitPoint = 0;
      newState.dead = true;
    }
  }
  return newState;
};

const setVisibility = (state) => {
  const random = Math.floor(Math.random() * 100);
  if(random > state.secrecy) return state;
  return {...state, invisible: true};
};
