// src/components/Wishlist.jsx

import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import { FaHeart, FaMusic, FaRunning, FaListUl, FaMinusCircle } from 'react-icons/fa';
// import axios from 'axios'; 

const Wishlist = () => {
    // 💡 Using state for a dynamic list
    const [wishlistItems, setWishlistItems] = useState([
        { id: 1, name: "Sunset Meditation Track", type: "Music", dateAdded: "2025-10-01", icon: FaMusic },
        { id: 2, name: "Morning Vinyasa Flow", type: "Movement", dateAdded: "2025-09-15", icon: FaRunning },
        { id: 3, name: "Rainy Day Chill Playlist", type: "Playlist", dateAdded: "2025-08-28", icon: FaListUl },
    ]);
    
    // 🛠️ Function to simulate API removal/deletion
    const handleRemove = (itemId) => {
        // In a real app, you'd use axios.delete here
        console.log(`Attempting to remove item ID: ${itemId}...`);
        
        // Update state locally (simulated)
        setWishlistItems(prevItems => prevItems.filter(item => item.id !== itemId));
        alert(`Item ID ${itemId} removed from wishlist.`);
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-24 pb-8 px-4">
            <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center border-b pb-4">
                    <FaHeart className="mr-3 text-red-500" /> My Mood2move Wishlist
                </h1>

                {wishlistItems.length === 0 ? (
                    <p className="text-center text-lg text-gray-500 py-10">
                        Your wishlist is empty! Find some great content to save.
                    </p>
                ) : (
                    <div className="space-y-4">
                        {wishlistItems.map(item => (
                            <div 
                                key={item.id} 
                                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 border-l-4 border-cyan-500"
                            >
                                <div className="flex items-center">
                                    <item.icon className="text-2xl mr-4 text-cyan-600 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.type} | Added: {item.dateAdded}</p>
                                    </div>
                                </div>
                                {/* 🗑️ ADDED: Minus Icon for Deleting/Removing */}
                                <button 
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition"
                                    title="Remove from Wishlist"
                                >
                                    <FaMinusCircle size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;