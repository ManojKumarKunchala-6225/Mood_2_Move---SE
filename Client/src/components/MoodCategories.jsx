import React from "react";
import { motion } from "framer-motion";//
const categories = [
  { name: "Happy", image: "/images/jaipur_happy.jpeg" }, // Diwali, Holi, etc.
  { name: "Relaxed", image: "/images/kerala_relaxed.jpeg" }, // Kerala backwaters
  { name: "Adventurous", image: "/images/Birbilling_adventure.jpeg" }, // Himalayan adventure
  { name: "Romantic", image: "/images/goa_romantic.jpeg" }, // Romantic lakes of Udaipur
];

const MoodCategories = () => {
  return (
    <section id="categories" className="py-16 bg-gradient-to-r from-blue-50 to-pink-50 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Explore by Mood
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover"/>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">{cat.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MoodCategories;
