import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./Logged";
import userReducer from "./UserDetail";
import postReducer from "./posts";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  logged: loggedReducer,
  user: userReducer,
  posts: postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
