import { configureStore } from '@reduxjs/toolkit';
import listOfServices from '../features/listOfServices';

const store = configureStore({
  reducer: {
    servicesObj: listOfServices,
  },
});

export default store;
