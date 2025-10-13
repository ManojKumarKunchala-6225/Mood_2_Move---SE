// src/components/MoodSearch.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const moods = ["Happy", "Relax", "Adventure", "Romantic"];

const MoodSearch = ({ destinations, onFilter }) => {
  const [selectedMood, setSelectedMood] = useState("Happy");
  const [searchTerm, setSearchTerm] = useState("");

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    onFilter(mood, searchTerm);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilter(selectedMood, term);
  };

  return (
    <div className="py-8 px-4 text-center">
      {/* Mood Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {moods.map((mood) => (
          <motion.button
            key={mood}
            onClick={() => handleMoodClick(mood)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              selectedMood === mood ? "bg-blue-600 text-white" : "bg-white text-gray-800 shadow-md"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mood}
          </motion.button>
        ))}
      </div>

      {/* Destination Search */}
      <motion.div
        className="max-w-md mx-auto flex shadow-md rounded-full overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Search destination..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-1 px-4 py-2 outline-none rounded-l-full"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700 transition-colors">
          Search
        </button>
      </motion.div>
    </div>
  );
};

export default MoodSearch;
