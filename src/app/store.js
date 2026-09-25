import { configureStore } from '@reduxjs/toolkit';
import listOfServicesReducer from '../features/listOfServicesReducer';

import createSagaMiddleware from "redux-saga";
// import helloSaga from "../sagas/saga.js";
import helloSaga from '../sagas/saga';
// import { helloSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    storage: listOfServicesReducer,
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

sagaMiddleware.run(helloSaga);

export default store;


// // перед переделкой(2026.09.25)
// import { configureStore } from '@reduxjs/toolkit';
// import listOfServicesReducer from '../features/listOfServicesReducer';

// const store = configureStore({
//   reducer: {
//     storage: listOfServicesReducer,
//   },
// });

// export default store;