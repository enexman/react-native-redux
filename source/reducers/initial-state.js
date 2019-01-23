import { Color } from '../css'
import { screenNavigation } from '../data/screen-navigation';

export const INITIAL_STATE = {
  DIALOG: {
    isOpen: false,
    isOpenAttack: false,
    message: '',
  },
  HERO_ATTACK: {
    target: false,
    shoot: false,
    longShoot: false,
    hitByHand: false,
  },
  VISIBLE: {
    activated: false,
  },
  NOTES: [],
  ROOMS: [
    // {
    //   name: 'sr',
    //   active: true,
    //   description: 'Вы очнулись, огляделись, увидели выход из комнаты',
    //   direction: [
    //     {
    //       name: 'b1',
    //       arrow: 'right'
    //     },
    //   ],
    //   action: false,
    //   complete: false,
    //   position: {left: -290, top: -60, width: 39, height: 39, },
    // },
  ],
  SCREENS: {
    activeScreen: screenNavigation.start,
  },
  FIND: {
    activated: false
  },
  HERO: {
    // status: `Охотник`,
    // rating: 0,
    // name: `Герой - 1`,
    // accuracy: 50, // точность выстрела по цели
    // strength: 50, // точность удара
    // agility: 50, // шанс уклонения
    // secrecy: 50, // шанс спрятаться
    // fullPoint: 100,
    // hitPoint: 50,
    // wound: 0,
    // invisible: false,
    // dead: false,
    // log: false,
    // room: 'sr',
    // weapons: {
    //   body: {
    //     key: ``,
    //     type: `weapon`,
    //     use: `body`,
    //     name: `Без брони`,
    //     sum: 0,
    //     description: ``,
    //   },
    //   first: {
    //     key: ``,
    //     type: `weapon`,
    //     use: `first`,
    //     name: `Пистолет`,
    //     sum: 10,
    //     description: ``,
    //   },
    //   second: {
    //     key: ``,
    //     type: `weapon`,
    //     use: `second`,
    //     name: `Кулак`,
    //     sum: 5,
    //     description: ``,
    //   },
    // }
  },
  INVENTORY: [],
  MONSTER: {
    // key: 'yutyutyu',
    // room: 'a2',
    // rating: 100,
    // name: 'Монстр 5-ур',
    // level: 1,
    // speed: 10,
    // distance: 100,
    // hitPoint: 20,
    // fullPoint: 20,
    // attack: 5,
    // wound: 0,
    // health: {
    //   head: false,
    //   hands: false,
    //   feet: false,
    // },
    // dead: false,
  },
  MONSTERS: [],
  MEDICAL: {
    kit: 0,
    medicals: []
  },
  WEAPONS: [],
  SPEAKERS: [],
  THEME: {
    activeTheme: Color.blue,
    color: {color: Color.blue},
    backgroundColor: {backgroundColor: Color.blue},
    borderColor: {borderColor: Color.blue},
  }
};
