


// // -----------main code ----------------sample code we added edit and delete functionallty  most importan code ------------


// // components/Table.jsx
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTableData, updateTableItem, deleteTableItem } from '../redux/tableSlice';
// import Modal from './Modal';

// const Table = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.table.data);
//   const status = useSelector((state) => state.table.status);
//   const error = useSelector((state) => state.table.error);

//   const [isEditing, setIsEditing] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);
//   const [formData, setFormData] = useState({ name: '', phone: '', status: '' });

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchTableData());
//     }
//   }, [status, dispatch]);

//   const handleEdit = (index) => {
//     setCurrentIndex(index);
//     setFormData({
//       name: data[index].name || '',
//       phone: data[index].phone || '',
//       status: data[index].status ? 'Active' : 'Inactive'
//     });
//     setIsEditing(true);
//   };

//   const handleDelete = (index) => {
//     dispatch(deleteTableItem(index));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedItem = {
//       name: formData.name,
//       phone: formData.phone,
//       status: formData.status === 'Active',
//     };
//     dispatch(updateTableItem({ index: currentIndex, item: updatedItem }));
//     setIsEditing(false);
//   };

//   if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'failed') return <p>Error: {error}</p>;

//   return (
//     <div className="flex-1 p-4">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead>
//           <tr>
//             <th className="p-3 text-left">GroupName</th>
//             <th className="p-3 text-left">Mobli Number</th>
//             <th className="p-3 text-left">Status</th>
//             <th className="p-3 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td className="p-3">{item.name || 'N/A'}</td>
//               <td className="p-3">{item.phone || 'N/A'}</td>
//               <td className={`p-3 ${item.status ? 'text-green-500' : 'text-red-500'}`}>
//   {item.status ? 'Active' : 'Inactive'}
// </td>
//               <td className="p-3">
//                 <button onClick={() => handleEdit(index)} className="mr-6 text-blue-500">Edit</button>
//                 <button onClick={() => handleDelete(index)} className="text-red-500">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Edit Modal */}
//       <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
//   <div className="relative bg-white p-16 rounded-lg shadow-lg max-w-4xl mx-auto w-full">
//     <h2 className="text-2xl font-bold mb-6">Edit Item</h2>
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label className="block text-lg font-medium mb-2">GroupName:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border border-gray-300 rounded-lg p-3 w-full"
//         />
//       </div>
//       <div>
//         <label className="block text-lg font-medium mb-2">Mobile Number:</label>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="border border-gray-300 rounded-lg p-3 w-full"
//         />
//       </div>
//       <div>
//         <label className="block text-lg font-medium mb-2">Status:</label>
//         <select
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//           className="border border-gray-300 rounded-lg p-3 w-full"
//         >
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//         </select>
//       </div>
//       <div className="flex justify-end gap-4">
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Save</button>
//         <button
//           type="button"
//           onClick={() => setIsEditing(false)}
//           className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//     <button onClick={() => setIsEditing(false)} className="absolute top-4 right-4 text-gray-500 text-2xl">
//       &times;
//     </button>
//   </div>
// </Modal>

//     </div>
//   );
// };

// export default Table;




// the main code is currentlly running ------------------------------------------------------------- 
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTableData, updateTableItem, deleteTableItem, selectPerson, clearSelectedPerson } from '../redux/tableSlice';
// import UserModal from './UserModal';

// const Table = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.table.data);
//   const status = useSelector((state) => state.table.status);
//   const error = useSelector((state) => state.table.error);
//   const selectedPerson = useSelector((state) => state.table.selectedPerson);

//   const [isEditing, setIsEditing] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);
//   const [formData, setFormData] = useState({ name: '', phone: '', status: '' });

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchTableData());
//     }
//   }, [status, dispatch]);

//   const handleEdit = (index) => {
//     setCurrentIndex(index);
//     setFormData({
//       name: data[index].name || '',
//       phone: data[index].phone || '',
//       status: data[index].status ? 'Active' : 'Inactive'
//     });
//     setIsEditing(true);
//   };

//   const handleDelete = (index) => {
//     dispatch(deleteTableItem(index));
//   };

//   const handlePersonClick = (person) => {
//     dispatch(selectPerson(person));
//   };

//   const handleCloseModal = () => {
//     dispatch(clearSelectedPerson());
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedItem = {
//       name: formData.name,
//       phone: formData.phone,
//       status: formData.status === 'Active',
//     };
//     dispatch(updateTableItem({ index: currentIndex, item: updatedItem }));
//     setIsEditing(false);
//   };

//   if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'failed') return <p>Error: {error}</p>;

//   return (
//     <div className="flex-1 p-4">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead>
//           <tr>
//             <th className="p-3 text-left">GroupName</th>
//             <th className="p-3 text-left">Mobile Number</th>
//             <th className="p-3 text-left">Status</th>
//             <th className="p-3 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td className="p-3 cursor-pointer" onClick={() => handlePersonClick(item)}>
//                 {item.name || 'N/A'}
//               </td>
//               <td className="p-3">{item.phone || 'N/A'}</td>
//               <td className={`p-3 ${item.status ? 'text-green-500' : 'text-red-500'}`}>
//                 {item.status ? 'Active' : 'Inactive'}
//               </td>
//               <td className="p-3">
//                 <button onClick={() => handleEdit(index)} className="mr-6 text-blue-500">Edit</button>
//                 <button onClick={() => handleDelete(index)} className="text-red-500">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* User Modal */}
//       <UserModal
//         isOpen={Boolean(selectedPerson) || isEditing}
//         onClose={() => {
//           if (isEditing) {
//             setIsEditing(false);
//           } else {
//             handleCloseModal();
//           }
//         }}
//         person={selectedPerson}
//         onSave={handleSubmit}
//         formData={formData}
//         onChange={handleChange}
//         isEditing={isEditing}
//         onEdit={() => setIsEditing(true)}
//         onCancel={() => setIsEditing(false)}
//       />
//     </div>
//   );
// };

// export default Table;








// main code 2 ----------------------   for gtting data(mobile number) in personal detail------------------------------------------

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTableData,
  updateTableItem,
  deleteTableItem,
  selectPerson,
  clearSelectedPerson,
} from '../redux/tableSlice';
import UserModal from './UserModal';

const Table = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);
  const status = useSelector((state) => state.table.status);
  const error = useSelector((state) => state.table.error);
  const selectedPerson = useSelector((state) => state.table.selectedPerson);

  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', phones: [], status: '' });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTableData());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (selectedPerson) {
      setFormData({
        name: selectedPerson.name || '',
        phones: selectedPerson.phones || [],
        status: selectedPerson.status || 'Active',
      });
      setIsEditing(false); // Ensure editing is false when opening the modal
    }
  }, [selectedPerson]);

  const handleEdit = (index) => {
    setCurrentIndex(index);
    setFormData({
      name: data[index].name || '',
      phones: data[index].phones || [],
      status: data[index].status || 'Active',
    });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteTableItem(id));
  };

  const handlePersonClick = (person) => {
    dispatch(selectPerson(person));
  };

  const handleCloseModal = () => {
    dispatch(clearSelectedPerson());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      name: formData.name,
      phones: formData.phones, // Ensure phones are handled as an array
      status: formData.status === 'Active',
    };
    if (isEditing) {
      dispatch(updateTableItem({ id: data[currentIndex].id, item: updatedItem }));
    } else {
      // Handle adding new items if needed
    }
    setIsEditing(false);
    handleCloseModal();
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="flex-1 p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="p-3 text-left">GroupName</th>
            <th className="p-3 text-left">Mobile Number</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td className="p-3 cursor-pointer" onClick={() => handlePersonClick(item)}>
                  {item.name || 'N/A'}
                </td>
                <td className="p-3">
                  <select className="border border-gray-300 rounded-lg p-3 w-full">
                    {item.phones.length > 0 ? (
                      item.phones.map((phone, idx) => (
                        <option key={idx} value={phone}>
                          {phone}
                        </option>
                      ))
                    ) : (
                      <option>N/A</option>
                    )}
                  </select>
                </td>
                <td className={`p-3 ${item.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                  {item.status}
                </td>
                <td className="p-3">
                  <button onClick={() => handleEdit(index)} className="mr-6 text-blue-500">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* User Modal */}
      <UserModal
        isOpen={Boolean(selectedPerson) || isEditing}
        onClose={() => {
          if (isEditing) {
            setIsEditing(false);
          } else {
            handleCloseModal();
          }
        }}
        person={selectedPerson}
        onSave={handleSubmit}
        formData={formData}
        onChange={handleChange}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onCancel={() => setIsEditing(false)}
      />
    </div>
  );
};

export default Table;




