// src/components/History.jsx

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FaHistory, FaMusic, FaRunning, FaSearch, FaRegClock, FaMinusCircle } from 'react-icons/fa';
// import axios from 'axios'; // You can uncomment this when implementing API calls

const History = () => {
    // 💡 Using state for a dynamic list
    const [historyEntries, setHistoryEntries] = useState([
        { id: 1, action: "Played: 'Focus Mode' Classical Mix", type: "Music Session", timestamp: "2025-10-07 10:30 AM", icon: FaMusic, duration: "45 min" },
        { id: 2, action: "Completed: 20 Min HIIT Routine", type: "Movement", timestamp: "2025-10-06 06:45 PM", icon: FaRunning, duration: "20 min" },
        { id: 3, action: "Searched for 'Stress Relief Music'", type: "Search", timestamp: "2025-10-06 09:00 AM", icon: FaSearch, duration: "N/A" },
    ]);

    // 🛠️ Function to simulate deleting an entry
    const handleDeleteEntry = (entryId) => {
        // In a real app, you'd use axios.delete here
        console.log(`Attempting to delete history entry ID: ${entryId}...`);
        
        // Update state locally (simulated)
        setHistoryEntries(prevEntries => prevEntries.filter(entry => entry.id !== entryId));
        alert(`History entry ID ${entryId} deleted.`);
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-24 pb-8 px-4">
            <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center border-b pb-4">
                    <FaHistory className="mr-3 text-cyan-600" /> My Activity History
                </h1>

                {historyEntries.length === 0 ? (
                    <p className="text-center text-lg text-gray-500 py-10">
                        No recent activity found. Start using **Mood2move**!
                    </p>
                ) : (
                    <ul className="space-y-4">
                        {historyEntries.map(entry => (
                            <li 
                                key={entry.id} 
                                className="flex items-start justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-cyan-500"
                            >
                                <div className="flex items-start flex-grow">
                                    <entry.icon className="text-xl mt-1 mr-4 text-gray-500 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-800">{entry.action}</p>
                                        <p className="text-sm text-cyan-700 font-semibold mt-0.5">{entry.type}</p>
                                        <div className="flex items-center text-xs text-gray-400 mt-1">
                                            <FaRegClock className="mr-1" />
                                            <span>{entry.timestamp}</span>
                                            {entry.duration !== "N/A" && (
                                                <span className="ml-3 font-medium text-gray-500">Duration: {entry.duration}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* 🗑️ ADDED: Minus Icon for Deleting History */}
                                <button 
                                    onClick={() => handleDeleteEntry(entry.id)}
                                    className="text-gray-400 hover:text-red-500 p-2 transition"
                                    title="Delete History Entry"
                                >
                                    <FaMinusCircle size={18} />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default History;