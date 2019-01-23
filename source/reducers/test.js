
const initialState = {
  heroMove: 'Не работает'
};

export const test = (state = initialState, action) => {
  switch (action.type) {
    // case 'TEST':
    //   return state;

    default:
      return {...state, heroMove: action.heroMove};
  }
};
