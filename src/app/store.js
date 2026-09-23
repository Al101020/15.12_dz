import { configureStore } from '@reduxjs/toolkit';
import listOfServicesReducer from '../features/listOfServicesReducer';

const store = configureStore({
  reducer: {
    storage: listOfServicesReducer,
  },
});

export default store;
