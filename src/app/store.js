import { configureStore } from '@reduxjs/toolkit';
import listOfServicesReducer from '../features/listOfServicesReducer';

const store = configureStore({
  reducer: {
    servises: listOfServicesReducer,
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
