import { configureStore } from '@reduxjs/toolkit';
// import { listOfServices } from '../features/listOfServicesReducer';
import listOfServices from '../features/listOfServicesReducer';

const store = configureStore({
  reducer: {
    servicesObj: listOfServices,
  },
});

export default store;
