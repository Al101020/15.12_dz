

// Доделать
function fetchServices() {
  fetch('http://localhost:7070/api/services')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};

export default fetchServices;


// // переделать
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const fetchServices = createAsyncThunk(
//   'services/fetchServices',
//   async (ob, thunkAPI) => {
    
//     try {
//       if (ob === undefined) {
//         console.log('ob = undefined');
//         return;
//       }
//       const response = 
//       // await fetch(`https://www.omdbapi.com?apikey=${ob.apiKey}&s=${ob.textInput}`);
//       await fetch(`http://localhost:7070/api/services`);
//       // GET http://localhost:7070/api/services
//       if (!response.ok) {
//         throw new Error('Failed to fetch Services');
//       } else {
//         const data = await response.json();
//         console.log(data); //
//         return data;
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export default fetchServices;
