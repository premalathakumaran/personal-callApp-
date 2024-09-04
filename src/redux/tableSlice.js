

// // sample code 111 -----------------------

// // src/redux/tableSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   data: [],
//   status: 'idle',
//   error: null,
// };

// // Fetching data from the API
// export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
//   const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/user/addGroup');
//   return response.data.data;
// });

// const tableSlice = createSlice({
//   name: 'table',
//   initialState,
//   reducers: {
//     // Reducer for deleting a table row (previously group)
//     deleteRow(state, action) {
//       state.data = state.data.filter(item => item.groupName !== action.payload);
//     },
//     // Reducer for editing a table row (previously group)
//     editRow(state, action) {
//       const { groupName, updatedRow } = action.payload;
//       const rowIndex = state.data.findIndex(item => item.groupName === groupName);
//       if (rowIndex >= 0) {
//         state.data[rowIndex] = updatedRow;
//       }
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTableData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTableData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchTableData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { deleteRow, editRow } = tableSlice.actions;
// export default tableSlice.reducer;


// sample code 222--------main checking code ----------------------

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   data: [],
//   status: 'idle',
//   error: null,
// };

// // Fetching data from the API
// export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
//   try {
//     const response = await axios.post('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/user/addGroup');
//     console.log('API Response Status:', response.status); // Check HTTP status
//     console.log('API Response Headers:', response.headers); // Check response headers
//     console.log('API Response Data:', response.data); // Check response data
    
//     // Ensure that data is an array
//     if (Array.isArray(response.data.data)) {
//       return response.data.data;
//     } else {
//       // Handle the case where data is not an array
//       console.error('Data is not an array:', response.data.data);
//       return []; // Return an empty array as fallback
//     }
//   } catch (error) {
//     console.error('API Request Failed:', error.message); // Log error message
//     throw error;
//   }
// });

// const tableSlice = createSlice({
//   name: 'table',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTableData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTableData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchTableData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default tableSlice.reducer;





// -----------main code ----------------sample code we added edit and delete functionallty -most imporant code -----------

// // redux/tableSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Initial state
// const initialState = {
//   data: [],
//   status: 'idle', // idle | loading | succeeded | failed
//   error: null,
// };

// // Async thunk for fetching data
// export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
// //   const response = await axios.post('https://jsonplaceholder.typicode.com/users');
// //   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
// //    const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/user/addGroup');
//    const response = await axios.get(' https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/getAllData');
   
//    console.log(response.data);
//   return response.data.map(user => ({
//     name: user.name,
//     phone: user.phone,
//     status: 'Active', // You can customize this based on your needs
//   }));
// });

// // Slice
// const tableSlice = createSlice({
//   name: 'table',
//   initialState,
//   reducers: {
//     updateTableItem: (state, action) => {
//       const { index, item } = action.payload;
//       state.data[index] = item;
//     },
//     deleteTableItem: (state, action) => {
//       const index = action.payload;
//       state.data.splice(index, 1);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTableData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTableData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchTableData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { updateTableItem, deleteTableItem } = tableSlice.actions;

// export default tableSlice.reducer;



//trying code---------------------main code ----------------sample code we added edit and delete functionallty -most imporant code -----

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Initial state
// const initialState = {
//   data: [],
//   status: 'idle', // idle | loading | succeeded | failed
//   error: null,
// };

// // Async thunk for fetching data
// export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
//   try {
//     const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/getAllData');
    
//     console.log(response.data); // Log the whole response for debugging

//     // Access the `data` array within the response
//     const dataArray = Array.isArray(response.data.data) ? response.data.data : [];

//     return dataArray.map(item => ({
//       name: item.groupName, // Adjust according to the actual fields in your response
//       phone: item.mobileNumber.join(', '), // Join mobile numbers into a string if needed
//       status: item.status ? 'Active' : 'Inactive', // Convert boolean status to string
//     }));
//   } catch (error) {
//     // Handle any errors that occur during the API request
//     console.error('Failed to fetch data:', error);
//     throw error;
//   }
// });

// // Slice
// const tableSlice = createSlice({
//   name: 'table',
//   initialState,
//   reducers: {
//     updateTableItem: (state, action) => {
//       const { index, item } = action.payload;
//       state.data[index] = item;
//     },
//     deleteTableItem: (state, action) => {
//       const index = action.payload;
//       state.data.splice(index, 1);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTableData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTableData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchTableData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { updateTableItem, deleteTableItem } = tableSlice.actions;

// export default tableSlice.reducer;




// sample code for routing inside the table ----------------------------------------------------------------

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Initial state
// const initialState = {
//   data: [],
//   selectedPerson: null, // Added state for selected person
//   status: 'idle', // idle | loading | succeeded | failed
//   error: null,
// };

// // Async thunk for fetching data
// export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
//   try {
//     const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/getAllData');

//     // console.log(response.data); // Log the whole response for debugging

//     // Access the `data` array within the response
//     const dataArray = Array.isArray(response.data.data) ? response.data.data : [];

//     return dataArray.map(item => ({
//       id: item.id, // Ensure each item has a unique ID
//       name: item.groupName, // Adjust according to the actual fields in your response
//       phone: item.mobileNumber.join(', '), // Join mobile numbers into a string if needed
//       status: item.status ? 'Active' : 'Inactive', // Convert boolean status to string
//     }));
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//     throw error;
//   }
// });

// // Slice
// const tableSlice = createSlice({
//   name: 'table',
//   initialState,
//   reducers: {
//     updateTableItem: (state, action) => {
//       const { id, item } = action.payload;
//       const index = state.data.findIndex(i => i.id === id);
//       if (index !== -1) {
//         state.data[index] = { ...state.data[index], ...item };
//       }
//     },
//     deleteTableItem: (state, action) => {
//       const id = action.payload;
//       state.data = state.data.filter(item => item.id !== id);
//     },
//     selectPerson: (state, action) => {
//       state.selectedPerson = action.payload;
//     },
//     clearSelectedPerson: (state) => {
//       state.selectedPerson = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTableData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTableData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchTableData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { updateTableItem, deleteTableItem, selectPerson, clearSelectedPerson } = tableSlice.actions;

// export default tableSlice.reducer;









// sample code try it and delete it --------isf not works ----------mainlly for dropdown --------------------------------

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  data: [],
  selectedPerson: null, // State for the selected person
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

// Async thunk for fetching data
export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
  try {
    const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/getAllData');
    
    // Access the data array within the response
    const dataArray = response.data.data || [];

    // Map the data to match the expected structure
    return dataArray.map((item, index) => ({
      id: index, // Using index as id if there's no unique id in the data
      name: item.groupName || 'N/A',
      phones: item.mobileNumber || [],
      status: item.status ? 'Active' : 'Inactive',
    }));
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
});

// Slice
const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    updateTableItem: (state, action) => {
      const { id, item } = action.payload;
      const index = state.data.findIndex(i => i.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...item };
      }
    },
    deleteTableItem: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter(item => item.id !== id);
    },
    selectPerson: (state, action) => {
      state.selectedPerson = action.payload;
    },
    clearSelectedPerson: (state) => {
      state.selectedPerson = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTableData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTableData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateTableItem, deleteTableItem, selectPerson, clearSelectedPerson } = tableSlice.actions;

export default tableSlice.reducer;






