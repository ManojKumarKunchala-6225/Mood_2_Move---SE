// import React from "react";
// import { motion } from "framer-motion";

// const testimonials = [
//   { name: "Rohan", text: "Exploring Mumbai and Goa with Mood2Move was unforgettable!", avatar: "https://i.pravatar.cc/100?img=10" },
//   { name: "Priya", text: "Jaipur’s palaces and culture came alive through this platform.", avatar: "https://i.pravatar.cc/100?img=20" },
//   { name: "Amit", text: "Mood2Move made my Kerala backwaters trip so relaxing and fun.", avatar: "https://i.pravatar.cc/100?img=30" },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="py-16 bg-gray-50 text-center">
//       <motion.h2
//         className="text-3xl font-bold mb-8"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }} 
//         transition={{ duration: 1 }}
//       >
//         What Our Travelers Say
//       </motion.h2>
//       <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
//         {testimonials.map((testi, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-white shadow-lg p-6 rounded-lg flex-1 cursor-pointer"
//             whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: idx * 0.3 }}
//           >
//             <img src={testi.avatar} alt={testi.name} className="w-16 h-16 rounded-full mx-auto mb-4"/>
//             <p className="mb-2">{testi.text}</p>
//             <h4 className="font-semibold">{testi.name}</h4>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/testimonials/")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error("Error fetching testimonials:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-blue-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        What Our Travelers Say 💬
      </motion.h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading testimonials...</p>
      ) : testimonials.length === 0 ? (
        <p className="text-center text-gray-500">No testimonials available yet.</p>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 flex-wrap">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 border border-blue-100 shadow-lg rounded-2xl p-8 w-full md:w-1/3 text-center hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(59,130,246,0.25)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testi.avatar || "https://i.pravatar.cc/100"}
                  alt={testi.name}
                  className="w-20 h-20 rounded-full border-4 border-blue-300 shadow-md"
                />
              </div>
              <p className="text-gray-600 italic mb-4">“{testi.text}”</p>
              <h4 className="font-semibold text-blue-700">{testi.name}</h4>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
