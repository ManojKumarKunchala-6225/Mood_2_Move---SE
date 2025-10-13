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
import DestinationsGrid from "./components/DestinationsGrid";
import NearbyPlaces from "./components/NearbyPlaces";
import StatsCounter from "./components/StatsCounter";
import Testimonials from "./components/Testimonials";

// ===================== PAGES =====================
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Explore from "./pages/Explore";
import UserProfile from "./pages/UserProfile";
import ResetPassword from "./pages/ResetPassword";
import Wishlist from "./components/Wishlist";
import History from "./components/History";
import Blog from "./components/Blog";

// ================== PLACES (All 58) ==================
import Agra from "./pages/Places/Agra.jsx";
import Ahmedabad from "./pages/Places/Ahmedabad.jsx";
import AjantaElloraCaves from "./pages/Places/AjantaElloraCaves.jsx";
import AndamanNicobar from "./pages/Places/AndamanNicobar.jsx";
import Auli from "./pages/Places/Auli.jsx";
import Backwater_Stays from "./pages/Places/Backwater_Stays.jsx";
import Bikaner from "./pages/Places/Bikaner.jsx";
import BirBilling from "./pages/Places/BirBilling.jsx";
import Jaipur from "./pages/Places/Jaipur.jsx";
import Jodhpur from "./pages/Places/Jodhpur.jsx";
import Kanchipuram from "./pages/Places/Kanchipuram.jsx";
import Kanyakumari from "./pages/Places/Kanyakumari.jsx";
import Kasauli from "./pages/Places/Kasauli.jsx";
import Kasol from "./pages/Places/Kasol.jsx";
import Kedarnath from "./pages/Places/Kedarnath.jsx";
import Khajjiar from "./pages/Places/Khajjiar.jsx";
import Khajuraho from "./pages/Places/Khajuraho.jsx";
import Kochi from "./pages/Places/Kochi.jsx";
import Kodaikanal from "./pages/Places/Kodaikanal.jsx";
import Kolkata from "./pages/Places/Kolkata.jsx";
import Konark from "./pages/Places/Konark.jsx";
import Lansdowne from "./pages/Places/Lansdowne.jsx";
import Leh from "./pages/Places/Leh.jsx";
import Lovedale from "./pages/Places/Lovedale.jsx";
import Lucknow from "./pages/Places/Lucknow.jsx";
import Mahabaleshwar from "./pages/Places/Mahabaleshwar.jsx";
import Mahabalipuram from "./pages/Places/Mahabalipuram.jsx";
import Manali from "./pages/Places/Manali.jsx";
import Mathura from "./pages/Places/Mathura.jsx";
import Meppadi from "./pages/Places/Meppadi.jsx";
import MountAbu from "./pages/Places/MountAbu.jsx";
import Mumbai from "./pages/Places/Mumbai.jsx";
import Munnar from "./pages/Places/Munnar.jsx";
import Mussoorie from "./pages/Places/Mussoorie.jsx";
import Mysore from "./pages/Places/Mysore.jsx";
import Naggar from "./pages/Places/Naggar.jsx";
import Nagpur from "./pages/Places/Nagpur.jsx";
import Ooty from "./pages/Places/Ooty.jsx";
import Pahalgam from "./pages/Places/Pahalgam.jsx";
import Pangot from "./pages/Places/Pangot.jsx";
import Patna from "./pages/Places/Patna.jsx";
import Pondicherry from "./pages/Places/Pondicherry.jsx";
import Pune from "./pages/Places/Pune.jsx";
import Puri from "./pages/Places/Puri.jsx";
import Pushkar from "./pages/Places/Pushkar.jsx";
import Rameswaram from "./pages/Places/Rameswaram.jsx";
import Ranikhet from "./pages/Places/Ranikhet.jsx";
import Ranthambore from "./pages/Places/Ranthambore.jsx";
import Rishikesh from "./pages/Places/Rishikesh.jsx";
import Sabarimala from "./pages/Places/Sabarimala.jsx";
import Saputara from "./pages/Places/Saputara.jsx";
import ShaktiPeeths from "./pages/Places/ShaktiPeeths.jsx";
import Shillong from "./pages/Places/Shillong.jsx";
import Shimla from "./pages/Places/Shimla.jsx";
import Shirdi from "./pages/Places/Shirdi.jsx";
import Tirupathi from "./pages/Places/Tirupathi.jsx";

function App() {
  const [selectedMood, setSelectedMood] = useState("Happy");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectMood = (mood) => setSelectedMood(mood);
  const handleSelectDestination = (destinationName) =>
    setSelectedDestination(destinationName);
  const handleBackToList = () => setSelectedDestination(null);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <HeroCarousel />
                  <MoodCategories />
                  {!selectedDestination ? (
                    <DestinationsGrid
                      selectedMood={selectedMood}
                      onSelectDestination={handleSelectDestination}
                    />
                  ) : (
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

            {/* PUBLIC ROUTES */}
            <Route path="/home" element={<Home />} />
            <Route path="/loginsignup" element={<LoginSignup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />

            {/* ============ PLACES ROUTES ============ */}
            <Route path="/places/agra" element={<Agra />} />
            <Route path="/places/ahmedabad" element={<Ahmedabad />} />
            <Route path="/places/ajantaelloracaves" element={<AjantaElloraCaves />} />
            <Route path="/places/andamannicobar" element={<AndamanNicobar />} />
            <Route path="/places/auli" element={<Auli />} />
            <Route path="/places/backwater_stays" element={<Backwater_Stays />} />
            <Route path="/places/bikaner" element={<Bikaner />} />
            <Route path="/places/birbilling" element={<BirBilling />} />
            <Route path="/places/jaipur" element={<Jaipur />} />
            <Route path="/places/jodhpur" element={<Jodhpur />} />
            <Route path="/places/kanchipuram" element={<Kanchipuram />} />
            <Route path="/places/kanyakumari" element={<Kanyakumari />} />
            <Route path="/places/kasauli" element={<Kasauli />} />
            <Route path="/places/kasol" element={<Kasol />} />
            <Route path="/places/kedarnath" element={<Kedarnath />} />
            <Route path="/places/khajjiar" element={<Khajjiar />} />
            <Route path="/places/khajuraho" element={<Khajuraho />} />
            <Route path="/places/kochi" element={<Kochi />} />
            <Route path="/places/kodaikanal" element={<Kodaikanal />} />
            <Route path="/places/kolkata" element={<Kolkata />} />
            <Route path="/places/konark" element={<Konark />} />
            <Route path="/places/lansdowne" element={<Lansdowne />} />
            <Route path="/places/leh" element={<Leh />} />
            <Route path="/places/lovedale" element={<Lovedale />} />
            <Route path="/places/lucknow" element={<Lucknow />} />
            <Route path="/places/mahabaleshwar" element={<Mahabaleshwar />} />
            <Route path="/places/mahabalipuram" element={<Mahabalipuram />} />
            <Route path="/places/manali" element={<Manali />} />
            <Route path="/places/mathura" element={<Mathura />} />
            <Route path="/places/meppadi" element={<Meppadi />} />
            <Route path="/places/mountabu" element={<MountAbu />} />
            <Route path="/places/mumbai" element={<Mumbai />} />
            <Route path="/places/munnar" element={<Munnar />} />
            <Route path="/places/mussoorie" element={<Mussoorie />} />
            <Route path="/places/mysore" element={<Mysore />} />
            <Route path="/places/naggar" element={<Naggar />} />
            <Route path="/places/nagpur" element={<Nagpur />} />
            <Route path="/places/ooty" element={<Ooty />} />
            <Route path="/places/pahalgam" element={<Pahalgam />} />
            <Route path="/places/pangot" element={<Pangot />} />
            <Route path="/places/patna" element={<Patna />} />
            <Route path="/places/pondicherry" element={<Pondicherry />} />
            <Route path="/places/pune" element={<Pune />} />
            <Route path="/places/puri" element={<Puri />} />
            <Route path="/places/pushkar" element={<Pushkar />} />
            <Route path="/places/rameswaram" element={<Rameswaram />} />
            <Route path="/places/ranikhet" element={<Ranikhet />} />
            <Route path="/places/ranthambore" element={<Ranthambore />} />
            <Route path="/places/rishikesh" element={<Rishikesh />} />
            <Route path="/places/sabarimala" element={<Sabarimala />} />
            <Route path="/places/saputara" element={<Saputara />} />
            <Route path="/places/shaktipeeths" element={<ShaktiPeeths />} />
            <Route path="/places/shillong" element={<Shillong />} />
            <Route path="/places/shimla" element={<Shimla />} />
            <Route path="/places/shirdi" element={<Shirdi />} /> 
            <Route path="/places/tirupathi" element={<Tirupathi />} />

            {/* RESET PASSWORD */}
            <Route
              path="/reset-password/:uidb64/:token"
              element={<ResetPassword />}
            />

            {/* PROTECTED ROUTES */}
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