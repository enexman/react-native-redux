
export const test = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return {...state, content: "Hi From TEST"};
    default:
      return state;
  }
};
