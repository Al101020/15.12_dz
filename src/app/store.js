import { configureStore } from '@reduxjs/toolkit';
import listOfServices from '../features/listOfServices';

const store = configureStore({
  reducer: {
    moviesObj: listOfServices,
  },
});

export default store;
