import { combineReducers } from '@reduxjs/toolkit';
import exampleSlice from './example';
import createFair from './createfair';
import productCollection from './products';
import productCart from './cart';

const rootReducer = combineReducers({
  createFair,
  exampleSlice,
  productCart,
  productCollection
});

export default rootReducer;
