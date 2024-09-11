



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








// sample code try it and delete it --------isf not works ----------mainlly for dropdown --------------------------------

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Initial state
// const initialState = {
//   data: [],
//   selectedPerson: null, // State for the selected person
//   status: 'idle', // idle | loading | succeeded | failed
//   error: null,
// };

// // Async thunk for fetching data
// export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
//   try {
//     const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/getAllData');
    
//     // Access the data array within the response
//     const dataArray = response.data.data || [];

//     // Map the data to match the expected structure
//     return dataArray.map((item, index) => ({
//       id: index, // Using index as id if there's no unique id in the data
//       name: item.groupName || 'N/A',
//       phones: item.mobileNumber || [],
//       status: item.status ? 'Active' : 'Inactive',
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




// main line of code ------------------- main code i am using now for good source -----UPDATED CODE 1-------------------------------------------
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Initial state
// const initialState = {
//   data: [],
//   selectedPerson: null,
//   status: 'idle', // idle | loading | succeeded | failed
//   error: null,
// };

// // Async thunk for fetching data
// export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
//   try {
//     const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/getAllData');
    
//     const dataArray = response.data.data || [];

//     return dataArray.map((item, index) => ({
//       id: index, // Using index as id if there's no unique id in the data
//       name: item.groupName || 'N/A',
//       phones: item.mobileNumber || [],
//       status: item.status ? 'Active' : 'Inactive',
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







// main code file for trying ---------------UPDATED CODE 2----------------------

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Initial state
// const initialState = {
//   data: [],
//   selectedPerson: null,
//   status: 'idle', 
//   error: null,
// };


// export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
//   try {
//     const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/getAllData');
    
//     const dataArray = response.data.data || [];

//     return dataArray.map((item, index) => ({
//       id: index, // Using index as id if there's no unique id in the data
//       name: item.groupName || 'N/A',
//       phones: item.mobileNumber || [],
//       status: item.status ? 'Active' : 'Inactive',
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
//     updatePhoneNumber: (state, action) => {
//       const { id, phone } = action.payload;
//       const person = state.data.find(item => item.id === id);
//       if (person) {
//         const phoneIndex = person.phones.indexOf(phone);
//         if (phoneIndex !== -1) {
//           person.phones[phoneIndex] = phone; // Update the phone number
//         }
//       }
//     },
//     deletePhoneNumber: (state, action) => {
//       const { id, phone } = action.payload;
//       const person = state.data.find(item => item.id === id);
//       if (person) {
//         person.phones = person.phones.filter(p => p !== phone); // Remove the phone number
//       }
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

// export const { updateTableItem, deleteTableItem, selectPerson, clearSelectedPerson, updatePhoneNumber, deletePhoneNumber } = tableSlice.actions;

// export default tableSlice.reducer;









// UPDATED CODE 3 -------------------------------Final

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch table data
export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
  try {
    const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/getAllData');
    
    const dataArray = response.data.data || [];

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

// Initial state
const initialState = {
  data: [],
  selectedPerson: null,
  status: 'idle',
  error: null,
};

// Slice
const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    updateTableItem: (state, action) => {    // table edit items
      const { id, item } = action.payload;
      const index = state.data.findIndex(i => i.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...item };
      }
    },
    deleteTableItem: (state, action) => {       // table delete items 
      const id = action.payload;
      state.data = state.data.filter(item => item.id !== id);
    },
    selectPerson: (state, action) => {
      state.selectedPerson = action.payload;
    },
    clearSelectedPerson: (state) => {
      state.selectedPerson = null;
    },
    updatePhoneNumber: (state, action) => {
      const { id, oldPhone, newPhone } = action.payload;
      const person = state.data.find(item => item.id === id);
      if (person) {
        const phoneIndex = person.phones.findIndex(phone => phone === oldPhone);
        if (phoneIndex !== -1) {
          person.phones[phoneIndex] = newPhone; // Update the phone number in person details
        }
      }
    },
    deletePhoneNumber: (state, action) => {
      const { id, phone } = action.payload;
      const person = state.data.find(item => item.id === id);
      if (person) {
        person.phones = person.phones.filter(p => p !== phone); // Remove the phone number in person details
      }
    },
    addPhoneNumber: (state, action) => {
      const { id, phone } = action.payload;
      const person = state.data.find(item => item.id === id);
      if (person) {
        if (!person.phones.includes(phone)) {
          person.phones.push(phone); // Add the phone number in person details
        }
      }
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


export const {
  updateTableItem,
  deleteTableItem,
  selectPerson,
  clearSelectedPerson,
  updatePhoneNumber,
  deletePhoneNumber,
  addPhoneNumber,
} = tableSlice.actions;


export default tableSlice.reducer;






// UPDATED CODE 3 (1)--------PROBLEM SOLVING MAIN CODE-----------------------Final

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk to fetch table data
// export const fetchTableData = createAsyncThunk('table/fetchTableData', async () => {
//   try {
//     const response = await axios.get('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/getAllData');
    
//     const dataArray = response.data.data || [];

//     return dataArray.map((item, index) => ({
//       id: index, // Using index as id if there's no unique id in the data
//       name: item.groupName || 'N/A',
//       phones: item.mobileNumber || [],
//       status: item.status ? 'Active' : 'Inactive',
//     }));
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//     throw error;
//   }
// });

// // Initial state
// const initialState = {
//   data: [],
//   selectedPerson: null,
//   status: 'idle',
//   error: null,
// };

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
//     updatePhoneNumber: (state, action) => {
//       const { id, oldPhone, newPhone } = action.payload;
//       const person = state.data.find(item => item.id === id);
//       if (person) {
//         const phoneIndex = person.phones.findIndex(phone => phone === oldPhone);
//         if (phoneIndex !== -1) {
//           person.phones[phoneIndex] = newPhone; // Update the phone number
//         }
//       }
//     },
//     deletePhoneNumber: (state, action) => {
//       const { id, phone } = action.payload;
//       const person = state.data.find(item => item.id === id);
//       if (person) {
//         person.phones = person.phones.filter(p => p !== phone); // Remove the phone number
//       }
//     },
//     addPhoneNumber: (state, action) => {
//       const { id, phone } = action.payload;
//       const person = state.data.find(item => item.id === id);
//       if (person) {
//         if (!person.phones.includes(phone)) {
//           person.phones.push(phone); // Add the phone number
//         }
//       }
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

// export const { updateTableItem, deleteTableItem, selectPerson, clearSelectedPerson, updatePhoneNumber, deletePhoneNumber, addPhoneNumber } = tableSlice.actions;

// export default tableSlice.reducer;







