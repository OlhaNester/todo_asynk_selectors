//import { createStore, combineReducers } from "redux";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
//import { composeWithDevTools } from "redux-devtools-extension"; - этот пакет можно вынести, т.к. в '@reduxjs/toolkit' уже он есть
import counterReducer from "./counter/counter_reducer";
import todosReducer from "./todos/todos_reducer";
import {
  persistStore,
    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


//const store = createStore(rootReducer, composeWithDevTools());

const myMiddleware = store => next => action => {
  console.log('моя прослойка', action);
  next(action);
};


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
  logger,
];

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    todos:  todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development", // это стоит по умолчанию в пакете '@reduxjs/toolkit' и мы хотим включить их только в разработке
});

// const persistor = persistStore(store);

export default  store ;
