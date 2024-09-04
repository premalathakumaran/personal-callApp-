// // src/redux/authSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk for login
// export const login = createAsyncThunk('auth/login', async ({ emailId, password }) => {
//   const response = await axios.post('https://abfd59f4-44df-459b-9e77-a08d41749caf.mock.pstmn.io/user/login', { emailId, password });
//   return response.data;
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload; 
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default authSlice.reducer;

// src/redux/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post('https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/user/login', credentials);
  return response.data;
});
// https://8f2bdc70-dd7c-4be6-96a8-9a8a1ab4df82.mock.pstmn.io/user/login

// old end point ----https://abfd59f4-44df-459b-9e77-a08d41749caf.mock.pstmn.io/user/login
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;



