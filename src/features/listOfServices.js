// listOfServices - перевод - список услуг
import { createSlice, current } from '@reduxjs/toolkit';
import fetchServices from '../api/fetchServices';

const initialState = {
  services: [],
};

const listOfServices = createSlice({
  name: 'servicesSearch',
  initialState,
  reducers: {
    clearError: (state, action) => {
      state.isError = false;
      state.error = '';
    },
    services: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchServices.pending, (state) => {
        state.isLoading = true;
        state.isError = false; // Сбрасываем флаг ошибки при новом запросе
        state.error = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        if (action.payload === undefined) {
          return;
        }
        state.movies = action.payload.Search;
      })
      // Обработка ошибки (rejected)
      .addCase(fetchServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default listOfServices;