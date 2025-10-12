// src/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Create context with default structure
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user session on mount
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const storedFullName = localStorage.getItem("full_name"); // ✅ Get full name
    const storedUsername = localStorage.getItem("username");

    if (token && (storedFullName || storedUsername)) {
      // ✅ Prefer full name if available
      setUser({ 
        full_name: storedFullName || null, 
        username: storedUsername || null 
      });
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("full_name");
      localStorage.removeItem("username");
      setUser(null);
    }
  }, []);

  // Function to handle login
  const login = (userData) => {
    // Expected userData: { full_name: "...", username: "..." }
    if (userData.full_name) localStorage.setItem("full_name", userData.full_name);
    if (userData.username) localStorage.setItem("username", userData.username);

    setUser(userData);
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("full_name");
    localStorage.removeItem("username");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
