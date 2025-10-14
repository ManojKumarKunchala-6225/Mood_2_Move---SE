import React, { useState, useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext.jsx";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user} = useContext(AuthContext);

  const handleAuthClick = () => {
    if (user) {
      navigate("/userprofile");
    } else {
      navigate("/loginsignup");
    }
    setOpen(false);
  };

  // Commented out logout handler since logout button is disabled
  // const handleLogout = () => {
  //   logout();
  //   navigate("/");
  //   setOpen(false);
  // };

  const handleLinkClick = () => setOpen(false);

  const displayName = user ? user.username || "Profile" : "Login / Signup";

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-9xl mx-auto sm:px-6 lg:px-8 flex items-center h-16">
        
        {/* Logo Left */}
        <div
  onClick={() => { navigate("/"); handleLinkClick(); }}
  className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition flex items-center"
>
  {/* Updated: 
    1. Used standard JSX style object.
    2. Set a more appropriate fixed size (e.g., 40px) for a logo in a navigation bar.
    3. Added 'flex items-center' to the div to vertically align the logo and text.
    4. Added 'mr-2' for spacing between the logo and text.
  */}
  <img 
    src="./logo.jpg" 
    alt="Mood2Move Logo" 
    style={{ height: '30px', width: '35px' }} 
    className="mr-2"
  />
  Mood2Move
</div>

        {/* Centered Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <ScrollLink to="categories" smooth duration={500} className="hover:text-blue-600 cursor-pointer transition">Categories</ScrollLink>
          <ScrollLink to="destinations" smooth duration={500} className="hover:text-blue-600 cursor-pointer transition">Destinations</ScrollLink>
          <Link to="/blog" className="hover:text-blue-600 cursor-pointer transition">Blog</Link>
          <ScrollLink to="testimonials" smooth duration={500} className="hover:text-blue-600 cursor-pointer transition">Reviews</ScrollLink>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer transition">Contact</Link>
          <Link to="/about" className="hover:text-blue-600 cursor-pointer transition">About</Link>
        </div>

        {/* Right Auth Buttons */}
        <div className="hidden md:flex ml-auto space-x-3">
          {user ? (
            <>
              <button
                onClick={handleAuthClick}
                className="flex items-center gap-1 px-3 py-1.5 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition font-medium text-sm"
              >
                <FaUserCircle className="text-lg" />
                <span>{displayName}</span>
              </button>

              {/* Logout button commented out */}
              {/*
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-3 py-1.5 border border-red-300 rounded-full text-red-600 hover:bg-red-50 transition font-medium text-sm"
              >
                <FaSignOutAlt className="text-lg" />
                <span>Logout</span>
              </button>
              */}
            </>
          ) : (
            <button
              onClick={handleAuthClick}
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md font-medium"
            >
              <FaUserCircle className="text-lg" />
              <span>{displayName}</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg flex flex-col space-y-2 p-4 border-t border-gray-100">
          <ScrollLink to="categories" smooth duration={500} className="hover:text-blue-600 cursor-pointer py-1" onClick={handleLinkClick}>Categories</ScrollLink>
          <ScrollLink to="destinations" smooth duration={500} className="hover:text-blue-600 cursor-pointer py-1" onClick={handleLinkClick}>Destinations</ScrollLink>
          <Link to="/blog" className="hover:text-blue-600 cursor-pointer py-1" onClick={handleLinkClick}>Blog</Link>
          <ScrollLink to="testimonials" smooth duration={500} className="hover:text-blue-600 cursor-pointer py-1" onClick={handleLinkClick}>Reviews</ScrollLink>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer py-1" onClick={handleLinkClick}>Contact</Link>
          <Link to="/about" className="hover:text-blue-600 cursor-pointer py-1" onClick={handleLinkClick}>About</Link>

          {user ? (
            <>
              <button
                onClick={handleAuthClick}
                className="flex items-center gap-2 py-2 hover:text-blue-600 border-t pt-3 mt-2 border-gray-100"
              >
                <FaUserCircle className="text-lg" />
                {displayName}
              </button>

              {/* Logout commented out in mobile too */}
              {/*
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 py-2 text-red-600 hover:text-red-700"
              >
                <FaSignOutAlt className="text-lg" /> Logout
              </button>
              */}
            </>
          ) : (
            <button
              onClick={handleAuthClick}
              className="flex items-center gap-2 py-2 hover:text-blue-600 border-t pt-3 mt-2 border-gray-100"
            >
              <FaUserCircle className="text-lg" /> {displayName}
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;