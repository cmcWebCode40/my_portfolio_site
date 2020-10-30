import { combineReducers } from '@reduxjs/toolkit';
import exampleSlice from './example';
import createFair from './createfair';

const rootReducer = combineReducers({
  exampleSlice,
  createFair
});

export default rootReducer;
