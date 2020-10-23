/* eslint-disable global-require */
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../slicers/example';

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../slicers', () => {
    const newRootReducer = require('../slicers').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
