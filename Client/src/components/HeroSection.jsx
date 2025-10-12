import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583241804445-8e57df0eb6f0",
    title: "Taj Mahal, Agra",
    text: "Experience the symbol of eternal love in the heart of India.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18d0c",
    title: "Jaipur, Rajasthan",
    text: "Dive into royal heritage and colorful culture.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1592753262231-9ec3c1c6b0e2",
    title: "Kerala Backwaters",
    text: "Relax amidst the tranquil waters and lush green scenery.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1505739772935-2901a05c5b87",
    title: "Ladakh, Himalayas",
    text: "Adventure through breathtaking landscapes and cold deserts.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {slides[index].title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
              {slides[index].text}
            </p>

            {/* Search Bar */}
            <motion.div
              className="bg-white rounded-lg shadow-md flex flex-col md:flex-row w-full max-w-3xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <input
                type="text"
                placeholder="Search Indian city (e.g., Mumbai, Jaipur, Goa)"
                className="flex-1 p-4 outline-none"
              />
              <input type="date" className="p-4 outline-none" />
              <button className="bg-blue-600 text-white px-6 py-4 hover:bg-blue-700 font-semibold">
                Search
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
