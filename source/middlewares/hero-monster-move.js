export default store => next => action => {

  // const { ...rest } = action;
  // const state = store.getState();
    next({
    ...action,
    heroMove: 'Hi'
  });
};
// next(action);

// export default store => next => action => {
//   const { generateId, ...rest } = action
//   if (!generateId) return next(action)
//
//   next({
//     ...rest,
//     generatedId: Date.now() + Math.random()
//   })
// }
