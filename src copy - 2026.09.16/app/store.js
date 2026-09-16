import { configureStore } from '@reduxjs/toolkit';
import listOfServicesReducer from '../features/listOfServicesReducer';
// ????? -  панель DevTools, не доделал
// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({
  reducer: {
    services: listOfServicesReducer,
  },
});

export default store;

// import { createStore, combineReducers } from 'redux';
// import listOfServicesReducer from '../features/listOfServicesReducer';

// // const initialState = {
// //   services: [],
// // };

// const reducer = combineReducers({
//   services: listOfServicesReducer,
// })

// const store = createStore(reducer);

// export default store;


// // import { configureStore } from '@reduxjs/toolkit';
// // import listOfServices from '../features/listOfServices';

// // const store = configureStore({
// //   reducer: {
// //     servicesObj: listOfServices,
// //   },
// // });

// // export default store;
