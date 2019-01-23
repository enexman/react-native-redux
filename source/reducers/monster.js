import { Type } from '../data/type';
import { Target, KoAttack } from '../data/constants';
import { INITIAL_STATE } from './initial-state';
const initialState = INITIAL_STATE.MONSTER;

export const monster = (state = initialState, action) => {
  switch (action.type) {

    case Type.MONSTER_HERO_ATTACK:
      const { heroAttack, hero } = action.payload;
      return sumAttack(state, heroAttack, hero);

    case Type.MONSTER_CREATE:
      // return {...action.payload, health: {...action.payload.health}};
      return {...action.payload};

    case Type.MONSTER_DISTANCE:
      return {...setDistance(action.payload)};
      // return {...state, distance: 0};

    default:
      return state;
  }
};

const sumAttack = (stateMonster, actionAttack, actionHero) => {
  const monster = {...stateMonster};

  monster.wound = 0; // сбрасываем ранение

  // shot || longShoot
  if(monster.distance > 0) {
    if (actionAttack.shoot) {
      isAttack(Target.body, actionHero.accuracy, actionHero.weapons.first.sum, monster, 1)
    }
    if (actionAttack.longShoot) {
      isAttack(actionAttack.target, actionHero.accuracy, actionHero.weapons.first.sum, monster, 1.5)
    }
  } else {
    if (actionAttack.hitByHand) {
      isAttack(Target.body, actionHero.strength, actionHero.weapons.second.sum, monster, 1)
    }
  }

  getDistance(monster, actionAttack);
  // isMonsterDead(monster);
  isEndDistance(monster);

  return monster;
};

const getRandomNum = () => {
  const min = 1;
  const max = 100;
  return Math.round(min + Math.random() * (max - min));
};

const isAttack = (target, accuracy, sum, monster, effect) => {
  // вычисляем коэффицент
  // const ko = setHealthResult(accuracy) * effect;
  const ko = accuracy * effect;
  // раненный в голову
  const attackSum = monster.health.head ? sum * 2 : sum;
  // рандомное число
  const random = getRandomNum();

  // проверяем поплали по цели, ранили и делаем изменения в монстре
  let attacked = false;
  switch (target) {
    case Target.head :
      attacked = (ko * KoAttack.head.simple > random);
      if(attacked) {
        monster.hitPoint -= attackSum;
        monster.health.head = (ko * KoAttack.head.health) > random;
        monster.wound = attackSum;
      }
      break;
    case Target.body :
      attacked = (ko * KoAttack.body.simple > random);
      if(attacked) {
        monster.hitPoint -= attackSum;
        monster.wound = attackSum;
      }
      break;
    case Target.hands :
      attacked = (ko * KoAttack.hands.simple > random);
      if(attacked) {
        monster.hitPoint -= attackSum;
        monster.health.hands = (ko * KoAttack.hands.health) > random;
        monster.wound = attackSum;
      }
      break;
    case Target.feet :
      attacked = (ko * KoAttack.feet.simple > random);
      if(attacked) {
        monster.hitPoint -= attackSum;
        monster.health.feet = (ko * KoAttack.feet.health) > random;
        monster.wound = attackSum;
      }
      break;
  }

  if(monster.hitPoint <= 0) {
    monster.wound = attackSum + monster.hitPoint;
    monster.hitPoint = 0;
    monster.dead = true;
  }

  return monster;
};

// const isMonsterDead = (monster) => {
//   if(monster.hitPoint <= 0) {
//     monster.hitPoint = 0;
//     monster.dead = true;
//   }
//   return monster;
// };

const isEndDistance = (monster) => {
  if(monster.distance <= 0) {
    monster.distance = 0;
  }
  return monster;
};

const getDistance = (monster, actionAttack) => {
  if(monster.distance > 0) {
    if(actionAttack.longShoot) {
      if(monster.health.feet) {
        monster.distance -= Math.round((monster.speed / 2) * 1.5);
      } else {
        monster.distance -= Math.round(monster.speed * 1.5);
      }
    } else {
      if(monster.health.feet) {
        monster.distance -= monster.speed / 2;
      } else {
        monster.distance -= monster.speed;
      }
    }

  }
  return monster;
};

const setDistance = (monster) => {
  // if(monster.distance > 0) {
    if(monster.health.feet) {
      monster.distance -= monster.speed / 2;
    } else {
      monster.distance -= monster.speed;
    }
  // }
  if (monster.distance < 0) monster.distance = 0;
  return monster;
};
