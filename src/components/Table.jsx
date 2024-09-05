
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

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchTableData,
//   updateTableItem,
//   deleteTableItem,
//   selectPerson,
//   clearSelectedPerson,
// } from '../redux/tableSlice';
// import UserModal from './UserModal';

// const Table = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.table.data);
//   const status = useSelector((state) => state.table.status);
//   const error = useSelector((state) => state.table.error);
//   const selectedPerson = useSelector((state) => state.table.selectedPerson);

//   const [isEditing, setIsEditing] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);
//   const [formData, setFormData] = useState({ name: '', phones: [], status: '' });

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchTableData());
//     }
//   }, [status, dispatch]);

//   useEffect(() => {
//     if (selectedPerson) {
//       setFormData({
//         name: selectedPerson.name || '',
//         phones: selectedPerson.phones || [],
//         status: selectedPerson.status || 'Active',
//       });
//       setIsEditing(false); // Ensure editing is false when opening the modal
//     }
//   }, [selectedPerson]);

//   const handleEdit = (index) => {
//     setCurrentIndex(index);
//     setFormData({
//       name: data[index].name || '',
//       phones: data[index].phones || [],
//       status: data[index].status || 'Active',
//     });
//     setIsEditing(true);
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteTableItem(id));
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
//       phones: formData.phones, // Ensure phones are handled as an array
//       status: formData.status === 'Active',
//     };
//     if (isEditing) {
//       dispatch(updateTableItem({ id: data[currentIndex].id, item: updatedItem }));
//     } else {
//       // Handle adding new items if needed
//     }
//     setIsEditing(false);
//     handleCloseModal();
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
//           {data.length > 0 ? (
//             data.map((item, index) => (
//               <tr key={item.id}>
//                 <td className="p-3 cursor-pointer" onClick={() => handlePersonClick(item)}>
//                   {item.name || 'N/A'}
//                 </td>
//                 <td className="p-3">
//                   <select className="border border-gray-300 rounded-lg p-3 w-full">
//                     {item.phones.length > 0 ? (
//                       item.phones.map((phone, idx) => (
//                         <option key={idx} value={phone}>
//                           {phone}
//                         </option>
//                       ))
//                     ) : (
//                       <option>N/A</option>
//                     )}
//                   </select>
//                 </td>
//                 <td className={`p-3 ${item.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
//                   {item.status}
//                 </td>
//                 <td className="p-3">
//                   <button onClick={() => handleEdit(index)} className="mr-6 text-blue-500">Edit</button>
//                   <button onClick={() => handleDelete(item.id)} className="text-red-500">Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="p-3 text-center">No data available</td>
//             </tr>
//           )}
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





// this code is for creating search input ----------------this update made only in table components ----------


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
  const [searchQuery, setSearchQuery] = useState('');

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
      setIsEditing(false); 
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery) ||
    item.phones.some((phone) => typeof phone === 'string' && phone.toLowerCase().includes(searchQuery)) ||
    item.status.toLowerCase().includes(searchQuery)
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="flex-1 p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

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
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
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






