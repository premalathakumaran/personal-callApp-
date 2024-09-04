// first main code the userModel.jsx-----------------------------------------
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isOpen: false,
//   isEditing: false,
//   person: null,
//   formData: {
//     name: '',
//     phone: '',
//     status: 'Active',
//   },
// };

// const modalSlice = createSlice({
//   name: 'userModal',
//   initialState,
//   reducers: {
//     openModal: (state, action) => {
//       state.isOpen = true;
//       state.person = action.payload;
//       state.isEditing = false;
//       state.formData = {
//         name: action.payload?.name || '',
//         phone: action.payload?.phone || '',
//         status: action.payload?.status || 'Active',
//       };
//     },
//     closeModal: (state) => {
//       state.isOpen = false;
//       state.person = null;
//       state.isEditing = false;
//     },
//     setEditing: (state, action) => {
//       state.isEditing = action.payload;
//     },
//     updateFormData: (state, action) => {
//       state.formData = { ...state.formData, ...action.payload };
//     },
//     savePerson: (state) => {
//       if (state.isEditing && state.person) {
//         // Here you would dispatch an action to update the person in your data store
//         // For example: dispatch(updatePerson({ id: state.person.id, ...state.formData }));
//       }
//     },
//   },
// });

// export const {
//   openModal,
//   closeModal,
//   setEditing,
//   updateFormData,
//   savePerson,
// } = modalSlice.actions;

// export default modalSlice.reducer;
// code ends------------------------------------------------------------------------------------













// modalSlice.js --------------any error occurse use this code ------------------main code for that ----------------------------------------

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isOpen: false,
//   isEditing: false,
//   person: null,
//   formData: {
//     name: '',
//     phone: '',
//     status: 'Active',
//   },
// };

// const modalSlice = createSlice({
//   name: 'modal',
//   initialState,
//   reducers: {
//     openModal: (state, action) => {
//       state.isOpen = true;
//       state.person = action.payload;
//       state.formData = {
//         name: action.payload?.name || '',
//         phone: action.payload?.phone || '',
//         status: action.payload?.status || 'Active',
//       };
//     },
//     closeModal: (state) => {
//       state.isOpen = false;
//       state.person = null;
//       state.formData = {
//         name: '',
//         phone: '',
//         status: 'Active',
//       };
//     },
//     updateFormData: (state, action) => {
//       state.formData = { ...state.formData, ...action.payload };
//     },
//     savePerson: (state) => {
//       // Save person logic here
//     },
//     setEditing: (state, action) => {
//       state.isEditing = action.payload;
//     },
//   },
// });

// export const { openModal, closeModal, updateFormData, savePerson, setEditing } = modalSlice.actions;

// export default modalSlice.reducer;








// main line of code --------------------------------------------------------------------

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isEditing: false,
  person: null,
  formData: {
    name: '',
    phone: '',
    status: 'Active',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.person = action.payload;
      state.formData = {
        name: action.payload?.name || '',
        phone: action.payload?.phone || '',
        status: action.payload?.status || 'Active',
      };
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.person = null;
      state.formData = {
        name: '',
        phone: '',
        status: 'Active',
      };
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    savePerson: (state) => {
      // Save person logic here
    },
    setEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    editPhone: (state, action) => {
      if (state.person) {
        const updatedPhones = state.person.phones.map(phone =>
          phone === action.payload.oldPhone ? action.payload.newPhone : phone
        );
        state.person.phones = updatedPhones;
      }
    },
    deletePhone: (state, action) => {
      if (state.person) {
        state.person.phones = state.person.phones.filter(phone => phone !== action.payload);
      }
    },
  },
});

export const { openModal, closeModal, updateFormData, savePerson, setEditing, editPhone, deletePhone } = modalSlice.actions;

export default modalSlice.reducer;








