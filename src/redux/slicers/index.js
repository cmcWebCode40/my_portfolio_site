import { combineReducers } from '@reduxjs/toolkit';
import exampleSlice from './example';

const rootReducer = combineReducers({
  exampleSlice,
});

export default rootReducer;
