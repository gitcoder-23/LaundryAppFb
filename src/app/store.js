import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import productSlice from './slices/productSlice';

const combinedReducer = combineReducers({
  cart: cartSlice,
  product: productSlice,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware({serializableCheck: false}).concat(
        createDebugger(),
      );
    }
    return getDefaultMiddleware();
  },
});

export default store;
