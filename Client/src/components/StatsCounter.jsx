import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Destinations in India", value: 120 },
  { label: "Moods Explored", value: 4 },
  { label: "Travelers Experienced", value: 5000 },
];

const StatsCounter = () => {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Explore Incredible India with Mood2Move
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg p-6 shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp end={stat.value} duration={2} />
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
