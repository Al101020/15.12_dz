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
    // newServices(state) {
      console.log('reduser-newServices');
      // state.storage.services = action.payload;
      state.services = action.payload;
    },
  },
    extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchServices.pending, (state) => {
        // console.log('начало загрузки');
        state.isLoading = true;
        state.isError = false; // Сбрасываем флаг ошибки при новом запросе
        state.error = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(fetchServices.fulfilled, (state, action) => {
        // console.log('fulfilled');
        // console.log(action.payload);

        state.isLoading = false;
        state.isError = false;
        if (action.payload === undefined) {
          return;
        }
        // console.log(state);
        state.services = action.payload;
        // state.storage.services = action.payload.services;
        // state.services = action.payload.newServices;
        // state.services = state.services.push(action.payload.services);
        // console.log(state);
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
export const { newServices } = servicesSlice.actions;
export default servicesSlice.reducer;

// // Простейший редуктор
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }


// // listOfServices - перевод - список услуг
// // import { createSlice, current } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import fetchServices from '../api/fetchServices';

// const initialState = {
//   services: [],
// };

// // console.log(initialState); // []

// const listOfServicesReducer = createSlice({
//   name: 'services',
//   initialState,
//   reducers: {
//     // clearError: (state, action) => {
//     //   state.isError = false;
//     //   state.error = '';
//     // },
//     services: (state, action) => {
//       state.services = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Обработка начала загрузки (pending)
//       .addCase(fetchServices.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false; // Сбрасываем флаг ошибки при новом запросе
//         state.error = '';
//       })
//       // Обработка успешной загрузки (fulfilled)
//       .addCase(fetchServices.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         if (action.payload === undefined) {
//           return;
//         }
//         state.services = action.payload;
//         // state.services = action.payload.Search;
//       })
//       // Обработка ошибки (rejected)
//       .addCase(fetchServices.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.error = action.payload || 'Something went wrong';
//       });
//   },
// });

// export default listOfServicesReducer;