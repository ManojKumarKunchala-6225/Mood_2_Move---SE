// src/components/DestinationsGrid.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import NearbyPlaces from "./NearbyPlaces";

const allDestinations = [
  { name: "Mumbai", mood: "Happy", image: "/images/mumbai.jpeg", className:"w-full h-full object-cover" },
  { name: "Jaipur", mood: "Romantic", image: "/images/jaipur_romantic.jpeg" ,className:"w-full h-64 overflow-hidden", className:"w-full h-full object-cover-top"},
  { name: "Goa", mood: "Relaxed", image: "/images/goa_relaxed.jpeg", className:"w-full h-full object-cover" },
  { name: "Kerala Backwaters", mood: "Relaxed", image: "/images/kerala_relaxed2.jpeg", className:"w-full h-full object-cover" },
  { name: "Manali Trek", mood: "Adventurous", image: "/images/manali_trek.jpeg", className:"w-full h-full object-cover" },
  { name: "Rishikesh Adventure", mood: "Adventurous", image: "/images/rishikesh_adventure.jpeg", className:"w-full h-full object-cover" },
  { name: "Udaipur Lakes", mood: "Romantic", image: "/images/udaipurlake_romantic.jpeg", className:"w-full h-full object-cover"},
  { name: "Andaman & Nicobar", mood: "Happy", image: "/images/andaman_nicobar.jpeg", className:"w-full h-full object-cover"},
  { name: "Darjeeling Hills", mood: "Relaxed", image: "/images/darjeeling_relaxed.jpeg", className:"w-full h-full object-cover"},
  { name: "Agra Taj Mahal", mood: "Romantic", image: "/images/taj_mahal.jpg", className:"w-full h-full object-cover"},
];

const DestinationsGrid = ({ selectedMood }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const filteredDestinations = allDestinations.filter(
    (dest) =>
      
      dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedDestination) {
    return (
      <NearbyPlaces
        destinationName={selectedDestination}
        onBack={() => setSelectedDestination(null)}
      />
    );
  }

  return (
    <section id="destinations" className="py-16 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Find Destinations by Name
      </motion.h2>

      {/* Search Input */}
      <div className="flex justify-center mb-8 px-4">
        <input
          type="text"
          placeholder="Search destination..."
          className="p-3 w-full max-w-md rounded-full shadow-md outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              onClick={() => setSelectedDestination(dest.name)}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">{dest.name}</h3>
                <p className="text-sm text-gray-500">{dest.mood}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full mt-4">
            No destinations match your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default DestinationsGrid;
