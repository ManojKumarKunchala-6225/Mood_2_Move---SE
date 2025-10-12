import React, { useState } from "react";
// import MoodSelector from "../components/MoodSelector";
import MoodCategories from "../components/MoodCategories";
import Testimonials from "../components/Testimonials";
import StatsCounter from "../components/StatsCounter";
import Footer from "../components/Footer";

const Home = () => {
  const [selectedMood, setSelectedMood] = useState("Happy");

  const handleMoodChange = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="pt-20">
      {/* 🌈 Mood Selector Section */}
      <div id="moods" className="max-w-6xl mx-auto px-4 mt-16">
        <MoodSelector onSelectMood={handleMoodChange} />
      </div>

      {/* 🎨 Categories Section */}
      <div id="categories" className="max-w-6xl mx-auto px-4 mt-16">
        <MoodCategories />
      </div>

      {/* 🏝️ Destinations Section */}
      <div id="destinations" className="max-w-6xl mx-auto px-4 mt-16">
        <TrendingCarousel selectedMood={selectedMood} />
      </div>

      {/* 📊 Stats Section */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <StatsCounter />
      </div>

      {/* 💬 Testimonials Section */}
      <div id="testimonials" className="max-w-6xl mx-auto px-4 mt-16 mb-16">
        <Testimonials />
      </div>

      {/* 📞 Contact Section */}
      <div id="contact" className="max-w-6xl mx-auto px-4 mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Home;