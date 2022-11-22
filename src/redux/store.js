import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from "./Logged"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, loggedReducer)

export const store = configureStore({
  reducer: {
      logged : persistedReducer,
      middleware: [thunk]
  },
})

export const persistor = persistStore(store)