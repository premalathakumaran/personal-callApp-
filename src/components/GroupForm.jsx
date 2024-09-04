
// currentlly working code do not touch it --------------------------------------------------------

// src/components/GroupForm.jsx
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setGroupName,
//   setMobileNumber,
//   setCountryCode,
//   addMobileNumber,
//   setStatus,
//   toggleFormVisibility,
//   resetForm,
// } from '../redux/groupSlice';
// import axios from 'axios';

// const GroupForm = () => {
//   const dispatch = useDispatch();
//   const { groupName, mobileNumbers, status, isFormVisible } = useSelector((state) => state.group);
//   const [currentMobileNumber, setCurrentMobileNumber] = useState('');
//   const [selectedCountryCode, setSelectedCountryCode] = useState('+1'); // Default country code
//   const [countries, setCountries] = useState([]);

//   // Fetch country data from REST Countries API
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');
//         const countryData = response.data.map((country) => ({
//           code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
//         }));
//         setCountries(countryData);
//       } catch (error) {
//         console.error('Error fetching country data:', error);
//       }
//     };
//     fetchCountries();
//   }, []);

//   const handleGroupNameChange = (e) => dispatch(setGroupName(e.target.value));
//   const handleMobileNumberChange = (e) => setCurrentMobileNumber(e.target.value);
//   const handleCountryCodeChange = (e) => {
//     const code = e.target.value;
//     setSelectedCountryCode(code);
//     dispatch(setCountryCode({ index: mobileNumbers.length - 1, countryCode: code }));
//   };
//   const handleStatusChange = (e) => dispatch(setStatus(e.target.value));

//   const handleAddMobileNumber = () => {
//     if (currentMobileNumber.trim() !== '') {
//       const numbersArray = currentMobileNumber.split(/[ ,]+/); // Split by comma or space
//       numbersArray.forEach(number => {
//         dispatch(addMobileNumber());
//         const index = mobileNumbers.length; // Use the length to get the new index
//         dispatch(setCountryCode({ index: index - 1, countryCode: selectedCountryCode }));
//         dispatch(setMobileNumber({ index: index - 1, number }));
//       });
//       setCurrentMobileNumber(''); // Clear the input after adding
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     dispatch(resetForm());
//     dispatch(toggleFormVisibility()); // Hide form after submission
//   };

//   if (!isFormVisible) return null;

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
//       <h2 className="text-2xl font-bold mb-6">New Group</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block text-lg font-medium mb-2">Group Name:</label>
//           <input
//             type="text"
//             value={groupName}
//             onChange={handleGroupNameChange}
//             className="border border-gray-300 rounded-lg p-3 w-full"
//           />
//         </div>
//         <div>
//           <label className="block text-lg font-medium mb-2">Mobile Numbers:</label>
//           <div className="flex">
//             <select
//               value={selectedCountryCode}
//               onChange={handleCountryCodeChange}
//               className="border border-gray-300 rounded-lg p-3 w-24"
//             >
//               {countries.map((country) => (
//                 <option key={country.code} value={country.code}>
//                   {country.code}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               value={currentMobileNumber}
//               onChange={handleMobileNumberChange}
//               placeholder="Enter mobile numbers"
//               className="border border-gray-300 rounded-lg p-3 flex-1"
//             />
//             <button
//               type="button"
//               onClick={handleAddMobileNumber}
//               className="bg-blue-500 text-white p-2 rounded ml-2"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//         <div>
//           <label className="block text-lg font-medium mb-2">Status:</label>
//           <select
//             value={status}
//             onChange={handleStatusChange}
//             className="border border-gray-300 rounded-lg p-3 w-full"
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>
//         <div className="flex justify-end gap-4">
//           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save</button>
//           <button
//             type="button"
//             onClick={() => dispatch(toggleFormVisibility())}
//             className="bg-gray-500 text-white py-2 px-4 rounded-lg"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default GroupForm;





// okay code for the updates  ----------------------------------------------------
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setGroupName,
//   setMobileNumber,
//   setCountryCode,
//   addMobileNumber,
//   setStatus,
//   toggleFormVisibility,
//   resetForm,
//   selectMobileNumbers,
//   selectGroupName,
//   selectStatus,
//   selectIsFormVisible,
// } from '../redux/groupSlice';
// import axios from 'axios';

// const GroupForm = () => {
//   const dispatch = useDispatch();
//   const groupName = useSelector(selectGroupName);
//   const mobileNumbers = useSelector(selectMobileNumbers);
//   const status = useSelector(selectStatus);
//   const isFormVisible = useSelector(selectIsFormVisible);
//   const [currentMobileNumber, setCurrentMobileNumber] = useState('');
//   const [selectedCountryCode, setSelectedCountryCode] = useState('+1'); // Default country code
//   const [countries, setCountries] = useState([]);

//   // Fetch country data from REST Countries API
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');
//         const countryData = response.data.map((country) => ({
//           code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
//         }));
//         setCountries(countryData);
//       } catch (error) {
//         console.error('Error fetching country data:', error);
//       }
//     };
//     fetchCountries();
//   }, []);

//   const handleGroupNameChange = (e) => dispatch(setGroupName(e.target.value));
//   const handleMobileNumberChange = (e) => setCurrentMobileNumber(e.target.value);
//   const handleCountryCodeChange = (e) => {
//     const code = e.target.value;
//     setSelectedCountryCode(code);
//   };
//   const handleStatusChange = (e) => dispatch(setStatus(e.target.value));

//   const handleAddMobileNumber = () => {
//     if (currentMobileNumber.trim() !== '') {
//       const numbersArray = currentMobileNumber.split(/[ ,]+/); // Split by comma or space
//       numbersArray.forEach(number => {
//         dispatch(addMobileNumber());
//         const index = mobileNumbers.length; // Use the length to get the new index
//         dispatch(setCountryCode({ index: index - 1, countryCode: selectedCountryCode }));
//         dispatch(setMobileNumber({ index: index - 1, number }));
//       });
//       setCurrentMobileNumber(''); // Clear the input after adding
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     dispatch(resetForm());
//     dispatch(toggleFormVisibility()); // Hide form after submission
//   };

//   if (!isFormVisible) return null;

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
//       <h2 className="text-2xl font-bold mb-6">New Group</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block text-lg font-medium mb-2">Group Name:</label>
//           <input
//             type="text"
//             value={groupName}
//             onChange={handleGroupNameChange}
//             className="border border-gray-300 rounded-lg p-3 w-full"
//           />
//         </div>
//         <div>
//           <label className="block text-lg font-medium mb-2">Mobile Numbers:</label>
//           <div className="flex">
//             <select
//               value={selectedCountryCode}
//               onChange={handleCountryCodeChange}
//               className="border border-gray-300 rounded-lg p-3 w-24"
//             >
//               {countries.map((country, index) => (
//                 <option key={index} value={country.code}>
//                   {country.code}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               value={currentMobileNumber}
//               onChange={handleMobileNumberChange}
//               placeholder="Enter mobile numbers"
//               className="border border-gray-300 rounded-lg p-3 flex-1"
//             />
//             <button
//               type="button"
//               onClick={handleAddMobileNumber}
//               className="bg-blue-500 text-white p-2 rounded ml-2"
//             >
//               Add
//             </button>
//           </div>
//           {/* <div className="mt-4">
//             <h3 className="text-lg font-medium mb-2">Added Mobile Numbers:</h3>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country Code</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {mobileNumbers.map((mobile, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mobile.countryCode}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mobile.number}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div> */}
//           <div className="mt-4">
//   <h3 className="text-lg font-medium mb-2">Added Mobile Numbers:</h3>
//   <div className="overflow-auto" style={{ maxHeight: '100px' }}> {/* Adjust maxHeight as needed */}
//     <table className="min-w-full divide-y divide-gray-200">
//       <thead className="bg-gray-100">
//         <tr>
//           <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Country Code</th>
//           <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Number</th>
//         </tr>
//       </thead>
//       <tbody className="bg-white divide-y divide-gray-200">
//         {mobileNumbers.map((mobile, index) => (
//           <tr key={index}>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{mobile.countryCode}</td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{mobile.number}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
//         </div>
//         <div>
//           <label className="block text-lg font-medium mb-2">Status:</label>
//           <select
//             value={status}
//             onChange={handleStatusChange}
//             className="border border-gray-300 rounded-lg p-3 w-full"
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>
//         <div className="flex justify-end gap-4">
//           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save</button>
//           <button
//             type="button"
//             onClick={() => dispatch(toggleFormVisibility())}
//             className="bg-gray-500 text-white py-2 px-4 rounded-lg"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default GroupForm;


// // in this code we added one extra feature is like adding delete icon------------below code is not work use this------------------------


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setGroupName,
//   setMobileNumber,
//   setCountryCode,
//   addMobileNumber,
//   setStatus,
//   toggleFormVisibility,
//   resetForm,
//   selectMobileNumbers,
//   selectGroupName,
//   selectStatus,
//   selectIsFormVisible,
//   removeMobileNumber, // Import the remove action
// } from '../redux/groupSlice';
// import axios from 'axios';
// import { FaTrash } from 'react-icons/fa'; // Importing the delete icon

// const GroupForm = () => {
//   const dispatch = useDispatch();
//   const groupName = useSelector(selectGroupName);
//   const mobileNumbers = useSelector(selectMobileNumbers);
//   const status = useSelector(selectStatus);
//   const isFormVisible = useSelector(selectIsFormVisible);
//   const [currentMobileNumber, setCurrentMobileNumber] = useState('');
//   const [selectedCountryCode, setSelectedCountryCode] = useState('+1'); // Default country code
//   const [countries, setCountries] = useState([]);
//   const [error, setError] = useState(''); // Error state

//   // Fetch country data from REST Countries API
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');
//         const countryData = response.data.map((country) => ({
//           code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
//           name: country.name.common
//         }));
//         setCountries(countryData);
//       } catch (error) {
//         setError('Error fetching country data'); // Set error message
//         console.error('Error fetching country data:', error);
//       }
//     };
//     fetchCountries();
//   }, []);

//   const handleGroupNameChange = (e) => dispatch(setGroupName(e.target.value));
//   const handleMobileNumberChange = (e) => setCurrentMobileNumber(e.target.value);
//   const handleCountryCodeChange = (e) => setSelectedCountryCode(e.target.value);
//   const handleStatusChange = (e) => dispatch(setStatus(e.target.value));

//   const handleAddMobileNumber = () => {
//     if (currentMobileNumber.trim() !== '') {
//       const numbersArray = currentMobileNumber.split(/[ ,]+/); // Split by comma or space
//       numbersArray.forEach(number => {
//         dispatch(addMobileNumber());
//         const index = mobileNumbers.length; // Use the length to get the new index
//         dispatch(setCountryCode({ index: index - 1, countryCode: selectedCountryCode }));
//         dispatch(setMobileNumber({ index: index - 1, number }));
//       });
//       setCurrentMobileNumber(''); // Clear the input after adding
//     }
//   };


  
//   const handleDeleteMobileNumber = (index) => {
//     dispatch(removeMobileNumber(index)); // Dispatch action to remove number
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     dispatch(resetForm());
//     dispatch(toggleFormVisibility()); // Hide form after submission
//   };

//   if (!isFormVisible) return null;

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
//       <h2 className="text-2xl font-bold mb-6">New Group</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {error && <p className="text-red-500">{error}</p>} {/* Display error if any */}
//         <div>
//           <label className="block text-lg font-medium mb-2">Group Name:</label>
//           <input
//             type="text"
//             value={groupName}
//             onChange={handleGroupNameChange}
//             className="border border-gray-300 rounded-lg p-3 w-full"
//           />
//         </div>
//         <div>
//           <label className="block text-lg font-medium mb-2">Mobile Numbers:</label>
//           <div className="flex">
//             <select
//               value={selectedCountryCode}
//               onChange={handleCountryCodeChange}
//               className="border border-gray-300 rounded-lg p-3 w-24"
//             >
//               {countries.map((country, index) => (
//                 <option key={index} value={country.code}>
//                   {country.code} 
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               value={currentMobileNumber}
//               onChange={handleMobileNumberChange}
//               placeholder="Enter mobile numbers"
//               className="border border-gray-300 rounded-lg p-3 flex-1"
//             />
//             <button
//               type="button"
//               onClick={handleAddMobileNumber}
//               className="bg-blue-500 text-white p-2 rounded ml-2"
//             >
//               Add
//             </button>
//           </div>
//           <div className="mt-4">
//             <h3 className="text-lg font-medium mb-2">Added Mobile Numbers:</h3>
//             <div className="overflow-auto" style={{ maxHeight: '100px' }}> {/* Adjust maxHeight as needed */}
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Country Code</th>
//                     <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Number</th>
//                     <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Actions</th> {/* Added Actions header */}
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {mobileNumbers.map((mobile, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{mobile.countryCode}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{mobile.number}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                         <button
//                           onClick={() => handleDeleteMobileNumber(index)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           <FaTrash /> {/* Delete icon */}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         <div>
//           <label className="block text-lg font-medium mb-2">Status:</label>
//           <select
//             value={status}
//             onChange={handleStatusChange}
//             className="border border-gray-300 rounded-lg p-3 w-full"
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>
//         <div className="flex justify-end gap-4">
//           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save</button>
//           <button
//             type="button"
//             onClick={() => dispatch(toggleFormVisibility())}
//             className="bg-gray-500 text-white py-2 px-4 rounded-lg"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default GroupForm;




// wantt to make more update in this code but it is working as on my----------------
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGroupName,
  setMobileNumber,
  setCountryCode,
  addMobileNumber,
  setStatus,
  toggleFormVisibility,
  resetForm,
  selectMobileNumbers,
  selectGroupName,
  selectStatus,
  selectIsFormVisible,
  removeMobileNumber,
} from '../redux/groupSlice';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const GroupForm = () => {
  const dispatch = useDispatch();
  const groupName = useSelector(selectGroupName);
  const mobileNumbers = useSelector(selectMobileNumbers);
  const status = useSelector(selectStatus);
  const isFormVisible = useSelector(selectIsFormVisible);
  const [currentMobileNumber, setCurrentMobileNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryData = response.data.map((country) => ({
          code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
          name: country.name.common
        }));
        setCountries(countryData);
      } catch (error) {
        setError('Error fetching country data');
        console.error('Error fetching country data:', error);
      }
    };
    fetchCountries();
  }, []);

  const handleGroupNameChange = (e) => dispatch(setGroupName(e.target.value));
  const handleMobileNumberChange = (e) => setCurrentMobileNumber(e.target.value);
  const handleCountryCodeChange = (e) => setSelectedCountryCode(e.target.value);
  const handleStatusChange = (e) => dispatch(setStatus(e.target.value));

  const handleAddMobileNumber = () => {
    if (currentMobileNumber.trim() !== '') {
      const numbersArray = currentMobileNumber.split(/[ ,]+/);
      numbersArray.forEach(number => {
        dispatch(addMobileNumber());
        const index = mobileNumbers.length;
        dispatch(setCountryCode({ index: index - 1, countryCode: selectedCountryCode }));
        dispatch(setMobileNumber({ index: index - 1, number }));
      });
      setCurrentMobileNumber('');
    }
  };

  const handleDeleteMobileNumber = (index) => {
    dispatch(removeMobileNumber(index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetForm());
    dispatch(toggleFormVisibility());
  };

  if (!isFormVisible) return null;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">New Group</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label className="block text-lg font-medium mb-2">Group Name:</label>
          <input
            type="text"
            value={groupName}
            onChange={handleGroupNameChange}
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Mobile Numbers:</label>
          <div className="flex">
            <select
              value={selectedCountryCode}
              onChange={handleCountryCodeChange}
              className="border border-gray-300 rounded-lg p-3 w-24"
            >
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={currentMobileNumber}
              onChange={handleMobileNumberChange}
              placeholder="Enter mobile numbers"
              className="border border-gray-300 rounded-lg p-3 flex-1"
            />
            <button
              type="button"
              onClick={handleAddMobileNumber}
              className="bg-blue-500 text-white p-2 rounded ml-2"
            >
              Add
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Added Mobile Numbers:</h3>
            <div className="overflow-auto" style={{ maxHeight: '100px' }}>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Country Code</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Number</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mobileNumbers.map((mobile, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{mobile.countryCode}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{mobile.number}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <button
                          onClick={() => handleDeleteMobileNumber(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Status:</label>
          <select
            value={status}
            onChange={handleStatusChange}
            className="border border-gray-300 rounded-lg p-3 w-full"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex justify-end gap-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save</button>
          <button
            type="button"
            onClick={() => dispatch(toggleFormVisibility())}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default GroupForm;
