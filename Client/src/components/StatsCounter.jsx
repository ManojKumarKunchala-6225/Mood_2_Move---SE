// src/components/StatsCounter.jsx
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const StatsCounter = () => {
  const [stats, setStats] = useState({
    destinations: 0,
    moods: 0,
    travelers: 0,
  });

  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // ✅ Fetch dynamic data from backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/stats/") // <-- change this to your API if needed
      .then((response) => {
        setStats({
          destinations: response.data.destinations || 0,
          moods: response.data.moods || 0,
          travelers: response.data.travelers || 0,
        });
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section ref={ref} className="py-16 bg-blue-50 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12 text-blue-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Explore Incredible India with Mood2Move
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {/* ✅ Destinations */}
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl font-bold text-blue-600 mb-2">
            {inView && !loading ? (
              <CountUp end={stats.destinations} duration={2} />
            ) : (
              0
            )}
            +
          </h3>
          <p className="text-gray-600">Destinations in India</p>
        </motion.div>

        {/* ✅ Moods */}
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-4xl font-bold text-blue-600 mb-2">
            {inView && !loading ? (
              <CountUp end={stats.moods} duration={2} />
            ) : (
              0
            )}
            +
          </h3>
          <p className="text-gray-600">Moods Explored</p>
        </motion.div>

        {/* ✅ Travelers */}
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-4xl font-bold text-blue-600 mb-2">
            {inView && !loading ? (
              <CountUp end={stats.travelers} duration={2} />
            ) : (
              0
            )}
            +
          </h3>
          <p className="text-gray-600">Travelers Experienced</p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
