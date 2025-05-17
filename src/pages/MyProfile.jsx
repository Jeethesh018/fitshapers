import { useState } from "react";
import { useSelector } from "react-redux";
import useUserlist from "../API/UserAPI/useUserlist";
import useUpdateUser from "../API/UserAPI/useUpdateUser";

const MyProfile = () => {
  const [userlist] = useUserlist(); 
  const [editTrainer] = useUpdateUser(); 
  const userDetails = useSelector((store) => store?.login?.userDetails); 
  const [isEditing, setIsEditing] = useState(false); 
  const [formData, setFormData] = useState({}); 
  const user = userlist.find((user) => user.displayName === userDetails.displayName);


  
  const handleEditClick = () => {
    setFormData(user || {});
    setIsEditing(true);
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData, user.id)
  const handleSave =  () => {
    
    try {
       editTrainer(formData, user.id); 
      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };


  const handleCancel = () => {
    setIsEditing(false);
    setFormData({});
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">My Profile</h1>
      {user ? (
        <div className="flex flex-col gap-4">
        
          <div className="flex justify-center">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt={user.displayName}
              className="w-32 h-32 rounded-full shadow-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="displayName"
                value={formData.displayName || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-600">{user.displayName || "Not Provided"}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-600">{user.email || "Not Provided"}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            {isEditing ? (
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-600">{user.phoneNumber || "Not Provided"}</p>
            )}
          </div>

         
          {isEditing ? (
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              onClick={handleEditClick}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
          )}
        </div>
      ) : (
        <p className="text-gray-600">User details not found.</p>
      )}
    </div>
  );
};

export default MyProfile;
