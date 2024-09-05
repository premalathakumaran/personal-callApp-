

//this code this ok code ----------------main code 1-------------------------

// import React from 'react';

// const UserModal = ({ isOpen, onClose, person, onSave, formData, onChange, isEditing, onEdit, onCancel }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//       <div className="relative bg-white p-16 rounded-lg shadow-lg max-w-4xl mx-auto w-full">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 text-2xl">&times;</button>
//         {isEditing ? (
//           <>
//             <h2 className="text-2xl font-bold mb-6">Edit Item</h2>
//             <form onSubmit={onSave} className="space-y-6">
//               <div>
//                 <label className="block text-lg font-medium mb-2">GroupName:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={onChange}
//                   className="border border-gray-300 rounded-lg p-3 w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium mb-2">Mobile Number:</label>
//                 <select
//                   name="phone"
//                   value={formData.phone}
//                   onChange={onChange}
//                   className="border border-gray-300 rounded-lg p-3 w-full"
//                 >
//                   {formData.phones.length > 0 ? (
//                     formData.phones.map((phone, idx) => (
//                       <option key={idx} value={phone}>
//                         {phone}
//                       </option>
//                     ))
//                   ) : (
//                     <option value="">N/A</option>
//                   )}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-lg font-medium mb-2">Status:</label>
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={onChange}
//                   className="border border-gray-300 rounded-lg p-3 w-full"
//                 >
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                 </select>
//               </div>
//               <div className="flex justify-end gap-4">
//                 <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Save</button>
//                 <button
//                   type="button"
//                   onClick={onCancel}
//                   className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </>
//         ) : (
//           <>
//             <h2 className="text-2xl font-bold mb-6">Person Details</h2>
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-lg font-medium mb-2">GroupName:</label>
//                 <p className="border border-gray-300 rounded-lg p-3">{person?.name || 'N/A'}</p>
//               </div>
//               {/* <div>
//                 <label className="block text-lg font-medium mb-2">Mobile Number:</label>
//                 <p className="border border-gray-300 rounded-lg p-3">{person?.phone || 'N/A'}</p>
//               </div> */}
//               <div>
//                <label className="block text-lg font-medium mb-2">Mobile Number:</label>
//                  <p className="border border-gray-300 rounded-lg p-3">{person?.phone || 'N/A'}</p>
//                </div>
//               <div>
//                 <label className="block text-lg font-medium mb-2">Status:</label>
//                 <p className={`border border-gray-300 rounded-lg p-3 ${person?.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
//                   {person?.status || 'N/A'}
//                 </p>
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   onClick={onClose}
//                   className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserModal;








// okay coode for all......but need updates-------------------------------------------------
// import React from 'react';

// const UserModal = ({
//   isOpen,
//   onClose,
//   person,
//   onSave,
//   formData,
//   onChange,
//   isEditing,
//   onCancel
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//       <div className="relative bg-white p-16 rounded-lg shadow-lg max-w-4xl mx-auto w-full">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 text-2xl">&times;</button>
//         {isEditing ? (
//           <>
//             <h2 className="text-2xl font-bold mb-6">Edit User</h2>
//             <form onSubmit={onSave} className="space-y-6">
//               <div>
//                 <label className="block text-lg font-medium mb-2">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={onChange}
//                   className="border border-gray-300 rounded-lg p-3 w-full"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium mb-2">Phone Number:</label>
//                 <select
//                   name="phone"
//                   value={formData.phone}
//                   onChange={onChange}
//                   className="border border-gray-300 rounded-lg p-3 w-full"
//                 >
//                   {formData.phones.length > 0 ? (
//                     formData.phones.map((phone, idx) => (
//                       <option key={idx} value={phone}>
//                         {phone}
//                       </option>
//                     ))
//                   ) : (
//                     <option value="">N/A</option>
//                   )}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-lg font-medium mb-2">Status:</label>
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={onChange}
//                   className="border border-gray-300 rounded-lg p-3 w-full"
//                 >
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                 </select>
//               </div>
//               <div className="flex justify-end gap-4">
//                 <button
//                   type="button"
//                   onClick={onCancel}
//                   className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </>
//         ) : (
//           <>
//             <h2 className="text-2xl font-bold mb-6">User Details</h2>
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-lg font-medium mb-2">Name:</label>
//                 <p className="border border-gray-300 rounded-lg p-3">{person?.name || 'N/A'}</p>
//               </div>
//               <div>
//                 <label className="block text-lg font-medium mb-2">Phone Number:</label>
//                 <p className="border border-gray-300 rounded-lg p-3">{person?.phones.join(', ') || 'N/A'}</p>
//               </div>
//               <div>
//                 <label className="block text-lg font-medium mb-2">Status:</label>
//                 <p className={`border border-gray-300 rounded-lg p-3 ${person?.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
//                   {person?.status || 'N/A'}
//                 </p>
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   onClick={onClose}
//                   className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserModal;






// if second code work delete this code ------------------------------------
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; 

const UserModal = ({
  isOpen,
  onClose,
  person,
  onSave,
  formData,
  onChange,
  isEditing,
  onCancel,
  onEditPhone,
  onDeletePhone
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="relative bg-white p-16 rounded-lg shadow-lg max-w-4xl mx-auto w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 text-2xl">&times;</button>
        {isEditing ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Edit User</h2>
            <form onSubmit={onSave} className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  className="border border-gray-300 rounded-lg p-3 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Phone Number:</label>
                <select
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  className="border border-gray-300 rounded-lg p-3 w-full"
                >
                  {formData.phones.length > 0 ? (
                    formData.phones.map((phone, idx) => (
                      <option key={idx} value={phone}>
                        {phone}
                      </option>
                    ))
                  ) : (
                    <option value="">N/A</option>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Status:</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={onChange}
                  className="border border-gray-300 rounded-lg p-3 w-full"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onCancel}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">Person Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2">Name:</label>
                <p className="border border-gray-300 rounded-lg p-3">{person?.name || 'N/A'}</p>
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Mobile Numbers:</label>
                {person?.phones && person.phones.length > 0 ? (
                  <table className="w-full border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-left">Mobile Number</th>
                        <th className="p-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {person.phones.map((phone, idx) => (
                        <tr key={idx} className="border-t">
                          <td className="p-3">{phone}</td>
                          <td className="p-3 flex space-x-2">
                            <button
                              onClick={() => onEditPhone(phone)}
                              className="text-blue-500 hover:text-blue-600"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => onDeletePhone(phone)}
                              className="text-red-500 hover:text-red-600"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="border border-gray-300 rounded-lg p-3">N/A</p>
                )}
              </div>
{/* <div className="max-h-60 overflow-y-auto">
  <label className="block text-lg font-medium mb-2">Mobile Numbers:</label>
  {person?.phones && person.phones.length > 0 ? (
    <table className="w-full border border-gray-300 rounded-lg">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 text-left">Phone Number</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {person.phones.map((phone, idx) => (
          <tr key={idx} className="border-t">
            <td className="p-3">{phone}</td>
            <td className="p-3 flex space-x-2">
              <button
                onClick={() => onEditPhone(phone)}
                className="text-blue-500 hover:text-blue-600"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDeletePhone(phone)}
                className="text-red-500 hover:text-red-600"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className="border border-gray-300 rounded-lg p-3">N/A</p>
  )}
</div> */}
              <div> 
                <label className="block text-lg font-medium mb-2">Status:</label>
                <p className={`border border-gray-300 rounded-lg p-3 ${person?.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                  {person?.status || 'N/A'}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserModal;


