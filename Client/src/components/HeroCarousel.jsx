// src/components/HeroCarousel.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // For navigation

const slides = [
  {
    id: 1,
    image: "/images/dal_lake.jpg",
    title: "Dal Lake, Ladakh",
    text: "Dal Lake, nestled in Srinagar, Jammu & Kashmir, is a picturesque freshwater lake famous for its shimmering waters, floating gardens, and iconic houseboats."
  },
  {
    id: 2,
    image: "/images/hampi.jpg",
    title: "Hampi, Karnataka",
    text: "Hampi, in Karnataka, is a historic village known for its ancient ruins, majestic temples, and striking rocky landscape."
  },
  {
    id: 3,
    image: "/images/goldentemple.jpg",
    title: "Golden Temple, Amritsar",
    text: "The Golden Temple, a spiritual center of Sikhism, dazzles with its gold-plated architecture and serene waters."
  },
  {
    id: 4,
    image: "/images/munnar.jpg",
    title: "Munnar, Kerala",
    text: "Munnar is a hill station in Kerala famous for its lush tea gardens, misty mountains, and cool climate."
  },
  {
    id: 5,
    image: "/images/tirumala.jpg",
    title: "Tirumala, Tirupati",
    text: "Tirupati, in Andhra Pradesh, is a famous pilgrimage city renowned for the sacred Tirumala Venkateswara Temple atop the Tirumala hills."
  },
  {
    id: 6,
    image: "/images/mysore_palace.jpg",
    title: "Mysore Palace, Karnataka",
    text: "Mysore Palace is a magnificent and historic landmark in Karnataka, India, that served as the official residence of the Wodeyar dynasty and is a stunning example of Indo-Saracenic architecture."
  },
  {
    id: 7,
    image: "/images/taj_mahal.jpg",
    title: "Taj Mahal, Agra",
    text: "The Taj Mahal is an ivory-white marble mausoleum in Agra, India, commissioned by Mughal emperor Shah Jahan in memory of his wife, Mumtaz Mahal, and is considered a symbol of love."
  }
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000); // Auto slide every 4s
    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    navigate("/explore"); // Navigate to Explore.jsx
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden rounded-b-3xl shadow-xl">
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
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {slides[index].title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
              {slides[index].text}
            </p>
            <button
              onClick={handleExplore}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition"
            >
              Explore Now
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Previous & Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full text-2xl"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full text-2xl"
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
    </div>
  );
}