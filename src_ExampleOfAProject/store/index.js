import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import skillsReducer from "../reducers/skills.js";
import saga from "../sagas/index.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(sagaMiddleware),
  devTools: import.meta.env.DEV,
});

sagaMiddleware.run(saga);

export default store;
