import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rohan", text: "Exploring Mumbai and Goa with Mood2Move was unforgettable!", avatar: "https://i.pravatar.cc/100?img=10" },
  { name: "Priya", text: "Jaipur’s palaces and culture came alive through this platform.", avatar: "https://i.pravatar.cc/100?img=20" },
  { name: "Amit", text: "Mood2Move made my Kerala backwaters trip so relaxing and fun.", avatar: "https://i.pravatar.cc/100?img=30" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        What Our Travelers Say
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
        {testimonials.map((testi, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-lg p-6 rounded-lg flex-1 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
          >
            <img src={testi.avatar} alt={testi.name} className="w-16 h-16 rounded-full mx-auto mb-4"/>
            <p className="mb-2">{testi.text}</p>
            <h4 className="font-semibold">{testi.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
