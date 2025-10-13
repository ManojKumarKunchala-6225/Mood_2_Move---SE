// src/components/DestinationsGrid.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import NearbyPlaces from "./NearbyPlaces";

const allDestinations = [
  { name: "Agra", image: "/images/agra.jpeg" },
  { name: "Ahmedabad", image: "/images/ahmedabad.jpeg" },
  { name: "Ajanta & Ellora Caves", image: "/images/ajanta_ellora_caves.jpeg" },
  { name: "Andaman & Nicobar", image: "/images/andaman_nicobar.jpeg" },
  { name: "Auli", image: "/images/auli.jpeg" },
  { name: "Backwater_Stays", image: "/images/backwater_stays.jpeg" },
  { name: "Bikaner", image: "/images/bikaner.jpeg" },
  { name: "Bir Billing", image: "/images/bir_billing.jpeg" },
  { name: "Jaipur", image: "/images/jaipur.jpeg" },
  { name: "Jaisalmer", image: "/images/jaisalmer.jpeg" },
  { name: "Jodhpur", image: "/images/jodhpur.jpeg" },
  { name: "Kanchipuram", image: "/images/kanchipuram.jpeg" },
  { name: "Kanyakumari", image: "/images/kanyakumari.jpeg" },
  { name: "Kasauli", image: "/images/kasauli.jpeg" },
  { name: "Kasol", image: "/images/kasol.jpeg" },
  { name: "Kedarnath", image: "/images/kedarnath.jpeg" },
  { name: "Khajjiar", image: "/images/khajjiar.jpeg" },
  { name: "Khajuraho", image: "/images/khajuraho.jpeg" },
  { name: "Kochi", image: "/images/kochi.jpeg" },
  { name: "Kodaikanal", image: "/images/kodaikanal.jpeg" },
  { name: "Kolkata", image: "/images/kolkata.jpeg" },
  { name: "Kollur Mookambika", image: "/images/kollur_mookambika.jpeg" },
  { name: "Konark", image: "/images/konark.jpeg" },
  { name: "Lansdowne", image: "/images/lansdowne.jpeg" },
  { name: "Leh", image: "/images/leh.jpeg" },
  { name: "Lovedale", image: "/images/lovedale.jpeg" },
  { name: "Lucknow", image: "/images/lucknow.jpeg" },
  { name: "Mahabalipuram", image: "/images/mahabalipuram.jpeg" },
  { name: "Manali", image: "/images/manali.jpeg" },
  { name: "Mathura", image: "/images/mathura.jpeg" },
  { name: "Meppadi", image: "/images/meppadi.jpeg" },
  { name: "Mount Abu", image: "/images/mount_abu.jpeg" },
  { name: "Mumbai", image: "/images/mumbai.jpeg" },
  { name: "Munnar", image: "/images/munnar.jpg" },
  { name: "Mussoorie", image: "/images/mussoorie.jpeg" },
  { name: "Mysore", image: "/images/mysore.jpeg" },
  { name: "Naggar", image: "/images/naggar.jpeg" },
  { name: "Nagpur", image: "/images/nagpur.jpeg" },
  { name: "Ooty", image: "/images/ooty.jpeg" },
  { name: "Pahalgam", image: "/images/pahalgam.jpeg" },
  { name: "Pangot", image: "/images/pangot.jpeg" },
  { name: "Patna", image: "/images/patna.jpeg" },
  { name: "Pondicherry", image: "/images/pondicherry.jpeg" },
  { name: "Pune", image: "/images/pune.jpeg" },
  { name: "Puri", image: "/images/puri.jpeg" },
  { name: "Pushkar", image: "/images/pushkar.jpeg" },
  { name: "Rameswaram", image: "/images/rameswaram.jpeg" },
  { name: "Ranikhet", image: "/images/ranikhet.jpeg" },
  { name: "Ranthambore", image: "/images/ranthambore.jpeg" },
  { name: "Rishikesh", image: "/images/rishikesh.jpeg" },
  { name: "Sabarimala", image: "/images/sabarimala.jpeg" },
  { name: "Saputara", image: "/images/saputara.jpeg" },
  { name: "Shakti Peeths", image: "/images/shakti_peeths.jpeg" },
  { name: "Shillong", image: "/images/shillong.jpeg" },
  { name: "Shimla", image: "/images/shimla.jpeg" },
  { name: "Shirdi", image: "/images/shirdi.jpeg" },
  { name: "Tirupati", image: "/images/tirupati.jpeg" },
];

const DestinationsGrid = ({ selectedMood }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const filteredDestinations = allDestinations.filter((dest) =>
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

      {/* Destinations Grid (only show when typing) */}
      {searchTerm && (
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
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full mt-4">
              No destinations match your search.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default DestinationsGrid;
