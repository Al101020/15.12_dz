// 2026.09.17 console.log(' - fetchServices.js - ');

import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchServices = createAsyncThunk(
  'servicesSearch/fetchServices',
  async (_, thunkAPI) => {
    // console.log('fetchServices');
    // console.log(ob);
    try {
      // if (ob === undefined) {
      //   return;
      // }
      const response = 
      await fetch(`http://localhost:7070/api/services`);
      if (!response.ok) {
        // console.log('!response.ok');
        throw new Error('Failed to fetch Services');
      } else {
        // console.log('response.ok');
        const data = await response.json();
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchServices;

// //  вконсоль выводит 4 услуги
// const fetchServices = createAsyncThunk(
//   'services/fetch',
//   fetch('http://localhost:7070/api/services')
//     .then(response => {
//       if (!response.ok) throw new Error('Fetch failed');
//       if (response.ok) {
//         // console.log(response.json());        // const resp = response.json();
//         // console.log(resp);        // console.log(resp.Prototype );
//         // console.log(response);        // console.log(response.ok);
//         return response.json();
//       };
//     })
//     .then(data => {
//       console.log(data);
//       return data;
//     })
// );

// export default fetchServices;
