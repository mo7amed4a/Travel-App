import React, { useState } from 'react';

const users = [
  {
    id: 1,
    name: "Kathy Brown",
    phone: "+01 3214 6522",
    email: "chadengle@dummy.com",
    country: "Australia",
    listings: "02",
    avatar: "https://dummyimage.com/50x50"
  },
  {
    id: 2,
    name: "John Doe",
    phone: "+01 1234 5678",
    email: "johndoe@dummy.com",
    country: "USA",
    listings: "03",
    avatar: "https://dummyimage.com/50x50"
  }
];

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to open modal and set user data
  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 w-full">
      <div className="container mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">USER DETAILS</h2>
          <p className="text-gray-500">Airport Hotels The Right Way To Start A Short Break Holiday</p>
        </div>

        {/* Responsive table container */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white table-auto">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Phone</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Country</th>
                <th className="text-center py-3 px-4 font-medium text-gray-600">Listings</th>
                <th className="text-center py-3 px-4 font-medium text-gray-600">View</th>
                <th className="text-center py-3 px-4 font-medium text-gray-600">Edit</th>
                <th className="text-center py-3 px-4 font-medium text-gray-600">Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img className="w-10 h-10 rounded-full" src={user.avatar} alt="Avatar" />
                    </div>
                  </td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.phone}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.country}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full">{user.listings}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
                      👁️
                    </button>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button 
                      className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full"
                      onClick={() => handleEditClick(user)}
                    >
                      ✏️
                    </button>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Edit User</h3>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Country:</strong> {selectedUser.country}</p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;

// handleEditClick: هذه الدالة تُستدعى عند النقر على زر "Edit"، حيث تقوم بتعيين المستخدم المختار وتفتح المودال.
// setSelectedUser: يتم تخزين بيانات المستخدم المختار في هذه الحالة لعرضها في المودال.
// closeModal: هذه الدالة تُغلق المودال وتعيد تعيين حالة المستخدم المختار إلى null.
// isModalOpen: تُستخدم للتحكم في ظهور المودال.
// التعديل يظهر نافذة مودال تحتوي على بيانات المستخدم المختار مع زر لإغلاق النافذة





