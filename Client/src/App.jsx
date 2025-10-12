// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ===================== CONTEXT =====================
import { AuthProvider } from "./AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

// ===================== GLOBAL COMPONENTS =====================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ===================== HOME PAGE COMPONENTS =====================
import HeroCarousel from "./components/HeroCarousel";
import MoodCategories from "./components/MoodCategories";
// import MoodSelector from "./components/MoodSelector";
import DestinationsGrid from "./components/DestinationsGrid";
import NearbyPlaces from "./components/NearbyPlaces";
import StatsCounter from "./components/StatsCounter";
import Testimonials from "./components/Testimonials";

// ===================== PAGES =====================
import Home from "./pages/Home"; // optional wrapper if you have one
import LoginSignup from "./pages/LoginSignup";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Explore from "./pages/Explore";
import UserProfile from "./pages/UserProfile";
import ResetPassword from "./pages/ResetPassword";
import Wishlist from "./components/Wishlist";
import History from "./components/History";
import Blog from "./components/Blog";

function App() {
  const [selectedMood, setSelectedMood] = useState("Happy");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectMood = (mood) => {
    setSelectedMood(mood);
  };

  const handleSelectDestination = (destinationName) => {
    setSelectedDestination(destinationName);
  };

  const handleBackToList = () => {
    setSelectedDestination(null);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            {/* ====================================================== */}
            {/* HOME PAGE (Includes all sections)                     */}
            {/* ====================================================== */}
            <Route
              path="/"
              element={
                <>
                  <HeroCarousel />
                  <MoodCategories />
                  {/* <MoodSelector onSelectMood={handleSelectMood} /> */}

                  {/* Destinations Grid */}
                  {!selectedDestination && (
                    <DestinationsGrid
                      selectedMood={selectedMood}
                      onSelectDestination={handleSelectDestination}
                    />
                  )}

                  {/* Nearby Places */}
                  {selectedDestination && (
                    <NearbyPlaces
                      destinationName={selectedDestination}
                      onBack={handleBackToList}
                    />
                  )}

                  <StatsCounter />
                  <Testimonials />
                  <Footer />
                </>
              }
            />

            {/* ====================================================== */}
            {/* PUBLIC ROUTES                                         */}
            {/* ====================================================== */}
            <Route path="/home" element={<Home />} />
            <Route path="/loginsignup" element={<LoginSignup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/reset-password/:uidb64/:token"
              element={<ResetPassword />}
            />

            {/* ====================================================== */}
            {/* PROTECTED ROUTES                                      */}
            {/* ====================================================== */}
            <Route element={<ProtectedRoute />}>
              <Route path="/explore" element={<Explore />} />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/history" element={<History />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;