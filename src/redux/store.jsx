// import { configureStore } from "@reduxjs/toolkit";
// import CartSliceReducer from './Slices/CartSlice';

// export const store = configureStore({
//     reducer :{
//         cart : CartSliceReducer,
//     }
// })

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Using localStorage
import { combineReducers } from 'redux';
import CartSliceReducer from './Slices/CartSlice'; // Import your reducer
// import counterReducer from './counterSlice';

// Configuration for persisting state
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers (if multiple reducers exist)
const rootReducer = combineReducers({
  cart: CartSliceReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Prevent warnings for non-serializable values
    }),
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
