import React, { useState, useEffect } from "react";
// Assuming UserProfile.jsx and Navbar.jsx are in the same folder (e.g., src/pages/)
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserCircle, FaEnvelope, FaMobileAlt, FaTint, FaEdit, FaSave, FaSignOutAlt, FaTimesCircle, FaLock, FaList, FaHistory, FaIdBadge, FaCheckCircle } from 'react-icons/fa';

// --- Reusable Detail Row Component (Unchanged) ---
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
                    className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-200 text-gray-800`}
                    placeholder={`Enter ${label}`}
                />
            ) : (
                <p className="text-md text-gray-800 ml-1">{value || "N/A"}</p>
            )}
        </div>
    </div>
);

// --- Reusable Action Button Component (Unchanged) ---
const ActionButton = ({ onClick, Icon, label, className, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center justify-center px-5 py-2 rounded-full font-semibold transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm ${className}`}
    >
        <Icon className="mr-2" /> {label}
    </button>
);

// --- New Change Password Modal Component (UPDATED TOKEN ERROR CHECK) ---
const ChangePasswordModal = ({ isVisible, onClose, onSuccess }) => {
    const [passwords, setPasswords] = useState({
        old_password: "",
        new_password1: "",
        new_password2: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    if (!isVisible) return null;

    const handleChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
        setError(null);
        setSuccessMessage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (passwords.new_password1 !== passwords.new_password2) {
            setError("New passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem("access_token");
            await axios.post("http://127.0.0.1:8000/api/profile/change_password/", passwords, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            // If successful: Clear fields and show success message
            setSuccessMessage("Password changed successfully! You will be logged out now.");
            setPasswords({ old_password: "", new_password1: "", new_password2: "" });
            onSuccess(); // Triggers delayed logout
        } catch (error) {
            console.error("Password change failed:", error.response?.data || error.message);
            
            let errorMessage = "An unexpected server error occurred. Please check your network.";
            
            if (error.response && error.response.data) {
                const data = error.response.data;
                
                // 🔴 CRITICAL FIX: Specific check for JWT token failure
                if (data.code === 'token_not_valid') {
                    errorMessage = "Your session has expired. Please log out and log back in to change your password.";
                    // We don't call onSuccess() here because the password wasn't changed,
                    // but we guide the user to log out.
                } else {
                    // Fallback to robust error extraction for password validation failures
                    const extractError = (value) => {
                        if (Array.isArray(value) && value.length > 0) return value[0];
                        if (typeof value === 'string') return value;
                        return null;
                    };

                    if (data.old_password) {
                        errorMessage = extractError(data.old_password) || 'Incorrect old password.';
                    } else if (data.new_password1) {
                        errorMessage = extractError(data.new_password1) || 'New password is too weak.';
                    } else if (data.new_password2) {
                        errorMessage = extractError(data.new_password2) || 'Passwords do not match.';
                    } else if (data.detail) {
                        errorMessage = data.detail;
                    } else if (data.non_field_errors) {
                        errorMessage = extractError(data.non_field_errors) || 'Non-field error.';
                    } 
                    else if (typeof data === 'object' && Object.keys(data).length > 0) {
                        const firstKey = Object.keys(data)[0];
                        const firstError = extractError(data[firstKey]);
                        if (firstError) {
                            errorMessage = firstError;
                        } else {
                            errorMessage = "Invalid credentials or password rules violated (check password requirements).";
                        }
                    }
                }
            } else {
                // Network or CORS error (no response received)
                errorMessage = "Could not connect to the server. Check if the backend is running.";
            }

            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8 transform transition-all duration-300 scale-100">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center"><FaLock className="mr-2 text-cyan-600" /> Change Password</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition"><FaTimesCircle size={24} /></button>
                </div>

                {/* Messages */}
                {error && <p className="text-center bg-red-100 text-red-700 border border-red-300 p-3 rounded-lg mb-4 text-sm font-medium">{error}</p>}
                {successMessage && (
                    <div className="text-center bg-green-100 text-green-700 border border-green-300 p-4 rounded-lg mb-4 text-sm font-medium flex items-center justify-center">
                        <FaCheckCircle className="mr-2" /> {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Old Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
                        <input
                            type="password"
                            name="old_password"
                            value={passwords.old_password}
                            onChange={handleChange}
                            placeholder="Enter current password"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                        />
                    </div>
                    {/* New Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input
                            type="password"
                            name="new_password1"
                            value={passwords.new_password1}
                            onChange={handleChange}
                            placeholder="Enter new password"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                        />
                    </div>
                    {/* Confirm New Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input
                            type="password"
                            name="new_password2"
                            value={passwords.new_password2}
                            onChange={handleChange}
                            placeholder="Confirm new password"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                        />
                    </div>

                    <ActionButton
                        type="submit"
                        Icon={FaSave}
                        label={loading ? "Updating..." : "Submit"}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold w-full mt-6"
                        disabled={loading || !!successMessage}
                    />
                </form>
            </div>
        </div>
    );
};

// --- Main UserProfile Component ---
const UserProfile = () => {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState(null);
    const [editedProfile, setEditedProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false); 
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // useEffect and data fetching logic remains the same
    useEffect(() => {
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
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    // handleChange, handleEditToggle, handleSave logic remains the same
    const handleChange = (e) => {
        setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
        setError(null);
        setSuccess(null);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            setEditedProfile(userProfile);
        }
        setError(null);
        setSuccess(null);
    };

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

    // Updated feature click to navigate instead of alert
    const handleFeatureClick = (path) => {
        if (path === "/change-password") {
            setShowPasswordModal(true);
        } else {
            navigate(path);
        }
    };
    
    // Function to run after successful password change (Ensures logout)
    const handlePasswordChangeSuccess = () => {
        setTimeout(() => {
            setShowPasswordModal(false);
            handleLogout(); // Force user to re-login after password change
        }, 2000); // Give user time to read the success message
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
            {/* Main Profile Card */}
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

                {/* User Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-10 text-gray-700">
                    <DetailRow
                        label="Full Name" Icon={FaIdBadge} value={userProfile?.name} isEditing={isEditing}
                        name="name" editedValue={editedProfile.name} handleChange={handleChange}
                    />
                    <DetailRow
                        label="Username" Icon={FaUserCircle} value={userProfile?.username} isEditing={isEditing}
                        name="username" editedValue={editedProfile.username} handleChange={handleChange}
                    />
                    <DetailRow
                        label="Email" Icon={FaEnvelope} value={userProfile?.email} isEditing={isEditing}
                        name="email" editedValue={editedProfile.email} handleChange={handleChange}
                    />
                    <DetailRow
                        label="Phone" Icon={FaMobileAlt} value={userProfile?.phone_number} isEditing={isEditing}
                        name="phone_number" editedValue={editedProfile.phone_number} handleChange={handleChange}
                    />
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

                    {/* Logout Button */}
                    <ActionButton
                        onClick={handleLogout}
                        Icon={FaSignOutAlt}
                        label="Logout"
                        className="bg-red-500 hover:bg-red-600 text-white font-bold w-full md:w-auto ml-0 md:ml-4"
                    />
                </div>
            </div>
            
            {/* The Modal itself */}
            <ChangePasswordModal 
                isVisible={showPasswordModal} 
                onClose={() => setShowPasswordModal(false)}
                onSuccess={handlePasswordChangeSuccess}
            />

        </div>
    );
};

export default UserProfile;