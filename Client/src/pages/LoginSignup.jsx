import React, { useRef, useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext.jsx";
import axios from "axios";
import "../App.css";

export default function LoginSignup() {
  const shadeRef = useRef(null);
  const signTextRef = useRef(null);
  const loginTextRef = useRef(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [showSignup, setShowSignup] = useState(true);

  const [signupData, setSignupData] = useState({
    name: "", // State key for Full Name
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
    gender: "Male", // Default gender
  });

  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  // --- Detect screen size ---
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    setIsMobile(window.innerWidth <= 900);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Animation Handlers (PC view) ---
  const handleSignUp = () => {
    setShowForgotPassword(false);
    if (shadeRef.current && signTextRef.current && loginTextRef.current) {
      shadeRef.current.style.left = "45%";
      signTextRef.current.style.display = "none";
      shadeRef.current.style.transition = "1s ease-in-out";
      shadeRef.current.classList.remove("shade-left");
      shadeRef.current.classList.add("shade-right");
      setTimeout(() => {
        loginTextRef.current.style.display = "flex";
      }, 1000);
    }
  };

  const handleLogin = () => {
    setShowForgotPassword(false);
    if (shadeRef.current && signTextRef.current && loginTextRef.current) {
      shadeRef.current.style.left = "-58%";
      loginTextRef.current.style.display = "none";
      shadeRef.current.style.transition = "1s ease-in-out";
      shadeRef.current.classList.remove("shade-right");
      shadeRef.current.classList.add("shade-left");
      setTimeout(() => {
        signTextRef.current.style.display = "flex";
      }, 1000);
    }
  };

  // --- Utility functions for dynamic input handling (FIXED AND SIMPLIFIED) ---
  const getSignupKey = (label) => {
    if (label === "Full Name") return "name";
    return label.toLowerCase().replace(" ", "_");
  };

  const handleSignupChange = (e, label) => {
    const key = getSignupKey(label);
    setSignupData((prevData) => ({
      ...prevData,
      [key]: e.target.value,
    }));
  };

  // --- Signup Submit ---
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setMessage("Creating your account...");

    if (signupData.password !== signupData.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/register/", {
        username: signupData.username,
        email: signupData.email,
        phone_number: signupData.phone_number,
        password: signupData.password,
        full_name: signupData.name,
      });

      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: signupData.username,
        password: signupData.password,
      });

      if (response.data.access) {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        localStorage.setItem("username", signupData.username);
        localStorage.setItem("full_name", signupData.name);

        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;
        login({ username: signupData.username, full_name: signupData.name });

        setMessage("✅ Signed up and logged in successfully!");
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setMessage("❌ Registration or login failed. Check console for details.");
    }
  };

  // --- Login Submit ---
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: loginData.identifier,
        password: loginData.password,
      });

      if (response.data.access) {
        const fullNameFromBackend = loginData.identifier;

        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        localStorage.setItem("username", loginData.identifier);
        localStorage.setItem("full_name", fullNameFromBackend);

        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;
        login({ username: loginData.identifier, full_name: fullNameFromBackend });

        setMessage("✅ Logged in successfully!");
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setMessage("❌ Incorrect details. Try again.");
    }
  };

  // --- Forgot Password ---
  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("✅ If your email exists, a reset link has been sent.");
    try {
      await axios.post("http://127.0.0.1:8000/api/password-reset/", {
        email: resetEmail,
      });
    } catch (err) {
      console.error(err);
    }
    setTimeout(() => window.location.reload(), 1500);
  };

  // --- Gender Radio Buttons JSX (CONSISTENT STYLE FIX) ---
  const GenderRadioButtons = () => (
    // FIX: Use w-full and a standard border-b to match input field lines
    // FIX: Use justify-start and items-baseline to align content like a text input
    <div className="flex flex-col w-full input-field border-b border-black py-2"> 
        <div className="flex items-baseline justify-start w-full">
            <label className="text-gray-400 text-m mr-4 whitespace-nowrap">Gender:</label>
            <div className="flex gap-4">
                {["Male", "Female", "Other"].map((genderOption) => (
                    <div key={genderOption} className="flex items-center">
                        <input
                            type="radio"
                            id={genderOption}
                            name="gender"
                            value={genderOption}
                            checked={signupData.gender === genderOption}
                            onChange={(e) =>
                                setSignupData({ ...signupData, gender: e.target.value })
                            }
                            required
                            className="mr-1 accent-blue-500"
                        />
                        <label htmlFor={genderOption} className="cursor-pointer text-m text-gray-400">
                            {genderOption}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start font-sans bg-white relative overflow-hidden">
      <Navbar />

      <div className="mt-20 relative w-11/12 md:w-[900px] h-auto md:h-[600px] rounded-2xl flex flex-col md:flex-row items-center justify-center backdrop-blur-md border border-black/20 overflow-hidden shadow-xl bg-white/20 login-container">

        {/* --- Conditional Rendering for Mobile --- */}
        {isMobile ? (
          <div className="w-full h-[600px] relative flex items-center justify-center p-4">
            
            {/* Login Form Mobile Instance */}
            <div
              className={`absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-center items-center gap-4 form-section bg-white rounded-2xl transition-transform duration-700 ease-in-out ${
                showSignup ? "transform -translate-x-full -translate-y-full opacity-0 pointer-events-none" : "transform translate-x-0 translate-y-0"
              }`}
            >
              {/* Login form content */}
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">Login</h1>
              <form
                onSubmit={handleLoginSubmit}
                className="flex flex-col justify-center gap-4 items-center w-full"
              >
                <input
                  type="text"
                  placeholder="Username / E-Mail"
                  value={loginData.identifier}
                  onChange={(e) =>
                    setLoginData({ ...loginData, identifier: e.target.value })
                  }
                  required
                  className="input-field w-full"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                  className="input-field w-full"
                />
                <input
                  type="submit"
                  value="Login"
                  className="primary-btn bg-blue-500 hover:bg-blue-600"
                />
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-center mt-2 hover:underline text-black"
                >
                  Forgot Password?
                </button>
              </form>
            </div>

            {/* Signup Form Mobile Instance */}
            <div
              className={`absolute top-0 left-0 w-full h-full p-0 flex flex-col justify-center items-center gap-4 form-section bg-white rounded-2xl transition-transform duration-700 ease-in-out ${
                showSignup ? "transform translate-x-0 translate-y-0" : "transform translate-x-full translate-y-full opacity-0 pointer-events-none"
              }`}
            >
              {/* Sign Up form content */}
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">Sign Up</h1>
              <form
                onSubmit={handleSignupSubmit}
                className="w-full flex flex-col justify-center items-center gap-4"
              >
                {/* Inputs with CORRECTED onChange handler and keying */}
                {["Full Name", "Username", "Email", "Phone Number"].map((label) => {
                  const key = getSignupKey(label);
                  return (
                    <input
                      key={key}
                      type={label === "Email" ? "email" : label === "Phone Number" ? "tel" : "text"}
                      placeholder={label}
                      value={signupData[key] || ""}
                      onChange={(e) => handleSignupChange(e, label)}
                      required
                      className="input-field w-full"
                    />
                  );
                })}

                {/* Gender (Visually Corrected) */}
                <GenderRadioButtons />

                <input
                  type="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  required
                  className="input-field w-full"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                  required
                  className="input-field w-full"
                />
                <input
                  type="submit"
                  value="Sign Up"
                  className="primary-btn bg-blue-500 hover:bg-blue-600"
                />
              </form>
            </div>
            
            {/* Mobile Floating Buttons (Visibility logic ensures only one is visible) */}
            <div
              className={`absolute top-0 left-0 w-40 h-32 rounded-br-full bg-purple-500 text-white flex items-start justify-start p-4 text-xl font-bold shadow-1x1 transition-opacity duration-300 cursor-pointer ${
                showSignup ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              onClick={() => setShowSignup(true)}
            >
              Sign Up
            </div>

            <div
              className={`absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-purple-500 text-white flex items-end justify-end p-4 text-xl font-bold shadow-2xl transition-opacity duration-300 cursor-pointer ${
                showSignup ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
              onClick={() => setShowSignup(false)}
            >
              Login
            </div>
          </div>
        ) : (
          // --- Desktop Form ---
          <div className="flex flex-col md:flex-row relative w-full h-full">
            {/* Sign Up Form */}
            <form
              onSubmit={handleSignupSubmit}
              className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center items-center md:items-start gap-4 form-section"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">Sign Up</h1>
              {/* Inputs with CORRECTED onChange handler and keying */}
              {["Full Name", "Username", "Email", "Phone Number"].map((label) => {
                const key = getSignupKey(label);
                return (
                  <input
                    key={key}
                    type={label === "Email" ? "email" : label === "Phone Number" ? "tel" : "text"}
                    placeholder={label}
                    value={signupData[key] || ""}
                    onChange={(e) => handleSignupChange(e, label)}
                    required
                    className="input-field"
                  />
                );
              })}

              {/* Gender (Visually Corrected) */}
              <GenderRadioButtons />

              <input
                type="password"
                placeholder="Password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                required
                className="input-field"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={(e) =>
                  setSignupData({ ...signupData, confirmPassword: e.target.value })
                }
                required
                className="input-field"
              />
              <input
                type="submit"
                value="Sign Up"
                className="primary-btn bg-blue-500 hover:bg-blue-600"
              />
              {/* Desktop Login Link */}
              <p className="text-sm mt-2 text-center text-black">
                <span
                  onClick={handleLogin}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                </span>
              </p>
            </form>

            {/* Login Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center items-center md:items-start gap-4 form-section">
              {showForgotPassword ? (
                <>
                  <h1 className="form-title text-purple-700">Reset Password</h1>
                  <form
                    onSubmit={handleForgotPasswordSubmit}
                    className="flex flex-col gap-4 items-center md:items-start"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      required
                      className="input-field"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="primary-btn bg-purple-500 hover:bg-purple-600 disabled:opacity-50"
                    >
                      {isLoading ? "Sending..." : "Send Link"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(false)}
                      className="text-sm text-center mt-2 hover:underline text-black"
                    >
                      Back to Login
                    </button>
                  </form>
                </>
              ) : (
                <form
                  onSubmit={handleLoginSubmit}
                  className="flex flex-col justify-center gap-4 items-center md:items-start"
                >
                  <h1 className="form-title text-blue-700">Login</h1>
                  <input
                    type="text"
                    placeholder="Username / E-Mail"
                    value={loginData.identifier}
                    onChange={(e) =>
                      setLoginData({ ...loginData, identifier: e.target.value })
                    }
                    required
                    className="input-field"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                    className="input-field"
                  />
                  <input
                    type="submit"
                    value="Login"
                    className="primary-btn bg-blue-500 hover:bg-blue-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-center mt-2 hover:underline text-black"
                  >
                    Forgot Password?
                  </button>
                  {/* Desktop Sign Up Link */}
                  <p className="text-sm mt-2 text-center text-black">
                    <span
                      onClick={handleSignUp}
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                    </span>
                  </p>
                </form>
              )}
            </div>

            {/* Shade Panel (PC only) */}
            <div
              ref={shadeRef}
              className="absolute w-full h-full md:rounded-[100px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300 flex flex-col items-center justify-center text-center left-[-58%] transition-all duration-700 p-4 shade-left"
            >
              <div
                ref={loginTextRef}
                className="hidden flex-col items-start justify-center text-white gap-3 text-left w-full px-6 md:px-12"
              >
                <p className="text-[6vw] md:text-[2.8vw] font-bold">Welcome Back!</p>
                <p className="font-medium">Already have an account?</p>
                <button type="button" className="shade-btn" onClick={handleLogin}>
                  Login
                </button>
              </div>

              <div
                ref={signTextRef}
                className="flex flex-col items-end justify-center text-white gap-3 text-right w-full px-6 md:px-12"
              >
                <p className="text-[6vw] md:text-[2.8vw] font-bold">Hi, Welcome!</p>
                <p className="font-medium">Don't have an account?</p>
                <button type="button" className="shade-btn" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {message && (
        <p className="absolute bottom-4 text-center text-sm sm:text-lg font-medium text-white bg-black bg-opacity-60 px-4 py-2 rounded-lg">
          {message}
        </p>
      )}
    </div>
  );
}