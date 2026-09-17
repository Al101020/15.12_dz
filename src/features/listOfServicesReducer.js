import { createSlice } from '@reduxjs/toolkit';
import fetchServices from '../api/fetchServices';

const servicesSlice = createSlice({
  name: 'storage',
  initialState: { 
    services: [],
    isLoading: false,
    isError: false,
    error: '',
  },
  reducers: {
    services(state, action) {
      console.log('reduser-newServices'); // ищё не видел
      state.services = action.payload;
    },
  },
    extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchServices.pending, (state) => {// console.log('начало загрузки'); // работает
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

        state.services = action.payload;
      })
      // Обработка ошибки (rejected)
      .addCase(fetchServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

// Экспорт действий и редуктора
// export const { newServices } = servicesSlice.actions;
export const { services } = servicesSlice.actions;
export default servicesSlice.reducer;
