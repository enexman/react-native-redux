import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducers } from '../reducers/index'

function configureStore () {
 const composeEnhancers = compose;
 return composeEnhancers(applyMiddleware(thunkMiddleware))(createStore)(reducers);
}

export const store = configureStore();
