import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Ensure all necessary icons are imported
import { FaUserCircle, FaEnvelope, FaMobileAlt, FaTint, FaEdit, FaSave, FaSignOutAlt, FaTimesCircle, FaLock, FaList, FaHistory, FaIdBadge } from 'react-icons/fa'; 

// --- Reusable Detail Row Component (Moved Outside Main Component for Stability) ---
const DetailRow = ({ label, Icon, value, isEditing, name, editedValue, handleChange }) => (
    <div className="flex flex-col border-b border-gray-100 pb-2">
        {/* Label (Top) */}
        <div className="flex items-center text-sm font-semibold text-gray-600 mb-1">
            <Icon className="mr-2 text-gray-400" /> {label}
        </div>
        {/* Value/Input (Bottom) */}
        <div className="w-full">
            {isEditing ? (
                <input
                    type={name === 'email' ? 'email' : name === 'phone_number' ? 'tel' : 'text'}
                    name={name}
                    value={editedValue || ''}
                    onChange={handleChange}
                    // Tailwind class hardcoded for stability
                    className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-200 text-gray-800`}
                    placeholder={`Enter ${label}`}
                />
            ) : (
                <p className="text-md text-gray-800 ml-1">{value || "N/A"}</p>
            )}
        </div>
    </div>
);

// --- Reusable Action Button Component (Moved Outside Main Component for Stability) ---
const ActionButton = ({ onClick, Icon, label, className, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center justify-center px-5 py-2 rounded-full font-semibold transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm ${className}`}
    >
        <Icon className="mr-2" /> {label}
    </button>
);


// --- Main UserProfile Component ---
const UserProfile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [editedProfile, setEditedProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Data Fetching on load
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          navigate("/loginsignup");
          return;
        }

        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;
        setUserProfile(data);
        setEditedProfile(data); 
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        navigate("/loginsignup");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  // Handle input changes for the form fields
  const handleChange = (e) => {
    setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
    setError(null);
    setSuccess(null);
  };

  // Toggle between view and edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setEditedProfile(userProfile); // Discard changes if cancelling
    }
    setError(null);
    setSuccess(null);
  };

  // 🛠️ Core functionality: Handle saving the updated profile data (In-Page Update)
  const handleSave = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const dataToUpdate = {
      name: editedProfile.name,
      username: editedProfile.username,
      email: editedProfile.email,
      phone_number: editedProfile.phone_number,
      blood_group: editedProfile.blood_group,
    };
    
    try {
      const token = localStorage.getItem("access_token");
      await axios.patch("http://127.0.0.1:8000/api/profile/update/", dataToUpdate, { 
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setUserProfile(editedProfile); 
      setIsEditing(false); 
      setSuccess("Profile updated successfully! 🎉");

    } catch (error) {
      console.error("Failed to save user profile:", error.response?.data || error.message);
      setError("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/");
    window.location.reload();
  };

  const handleFeatureClick = (path) => {
      alert(`Navigating to ${path.replace('/', '')}...`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-700 animate-pulse">Loading profile...</p>
      </div>
    );
  }
  
  const backgroundImageUrl = '/background.jpg'; 
  const currentUsername = userProfile?.username || "Guest";

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center pt-24 pb-8 px-4"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <Navbar />
      {/* Main Profile Card: Responsive and Elevated */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 sm:p-10 transform transition-all duration-500">
        
        {/* Header */}
        <div className="text-center mb-10">
          <FaUserCircle className={`h-32 w-32 text-cyan-600 mx-auto mb-4 drop-shadow-lg`} /> 
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">{currentUsername}</h1>
          <p className="text-md text-gray-500 mt-1">{userProfile?.email || "No Email"}</p>
        </div>
        
        {/* Messages */}
        {error && <p className="text-center bg-red-100 text-red-700 border border-red-300 p-3 rounded-lg mb-6 text-sm font-medium">{error}</p>}
        {success && <p className="text-center bg-green-100 text-green-700 border border-green-300 p-3 rounded-lg mb-6 text-sm font-medium">{success}</p>}

        {/* User Details Grid (Responsive 1 or 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-10 text-gray-700">
          
          {/* 1. Name (Icon prop is passed correctly as 'Icon') */}
          <DetailRow 
            label="Full Name" Icon={FaIdBadge} value={userProfile?.name} isEditing={isEditing} 
            name="name" editedValue={editedProfile.name} handleChange={handleChange} 
          />

          {/* 2. Username */}
          <DetailRow 
            label="Username" Icon={FaUserCircle} value={userProfile?.username} isEditing={isEditing} 
            name="username" editedValue={editedProfile.username} handleChange={handleChange} 
          />
          
          {/* 3. Email */}
          <DetailRow 
            label="Email" Icon={FaEnvelope} value={userProfile?.email} isEditing={isEditing} 
            name="email" editedValue={editedProfile.email} handleChange={handleChange} 
          />

          {/* 4. Phone Number */}
          <DetailRow 
            label="Phone" Icon={FaMobileAlt} value={userProfile?.phone_number} isEditing={isEditing} 
            name="phone_number" editedValue={editedProfile.phone_number} handleChange={handleChange} 
          />

          {/* 5. Blood Group */}
          <DetailRow 
            label="Blood Group" Icon={FaTint} value={userProfile?.blood_group} isEditing={isEditing} 
            name="blood_group" editedValue={editedProfile.blood_group} handleChange={handleChange} 
          />
        </div>
        
        {/* --- Action Buttons --- */}
        
        {/* 1. Primary Profile Management Row (Edit, Save, Cancel, Change Password) */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {isEditing ? (
            <>
              {/* Save Button (Visible ONLY during editing) */}
              <ActionButton
                onClick={handleSave}
                disabled={loading}
                Icon={FaSave}
                label={loading ? "Saving..." : "Save Changes"}
                className={`bg-cyan-600 hover:bg-cyan-700 text-white font-bold w-full sm:w-auto`}
              />
              {/* Cancel Button (Visible ONLY during editing) */}
              <ActionButton
                onClick={handleEditToggle}
                Icon={FaTimesCircle}
                label="Cancel"
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold w-full sm:w-auto"
              />
            </>
          ) : (
            <>
              {/* Edit Profile Button (Visible ONLY in view mode) */}
              <ActionButton
                onClick={handleEditToggle}
                Icon={FaEdit}
                label="Edit Profile"
                className={`bg-cyan-600 hover:bg-cyan-700 text-white font-bold w-full sm:w-auto`}
              />
              {/* Change Password Button */}
              <ActionButton
                onClick={() => handleFeatureClick("/change-password")}
                Icon={FaLock}
                label="Change Password"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-full sm:w-auto"
              />
            </>
          )}
        </div>
        
        {/* 2. Secondary Features & Logout Row (Always visible, responsive) */}
        <div className="flex flex-wrap justify-center md:justify-end gap-3 border-t border-gray-100 pt-6 mt-6">
            
            <ActionButton
                onClick={() => handleFeatureClick("/wishlist")}
                Icon={FaList}
                label="Wishlist"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-full md:w-auto"
            />
            <ActionButton
                onClick={() => handleFeatureClick("/history")}
                Icon={FaHistory}
                label="History"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-full md:w-auto"
            />

            {/* Logout Button (Clear and separated to the end of the row) */}
            <ActionButton
                onClick={handleLogout}
                Icon={FaSignOutAlt}
                label="Logout"
                className="bg-red-500 hover:bg-red-600 text-white font-bold w-full md:w-auto ml-0 md:ml-4" 
            />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;