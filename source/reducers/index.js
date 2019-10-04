import { combineReducers } from 'redux';
import { test } from './test';
import { screens } from './screens';

export const reducers = combineReducers({
  test,
  screens,
});
