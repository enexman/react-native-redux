import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { reducers } from '../reducers';
// import heroMonsterMove from '../middlewares/hero-monster-move';

function configureStore () {
 const composeEnhancers = compose;
 return composeEnhancers(applyMiddleware(thunkMiddleware))(createStore)(reducers);
}

export const store = configureStore();
