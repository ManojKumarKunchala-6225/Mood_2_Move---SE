import React, { useRef, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext.jsx";
import axios from "axios";

export default function LoginSignup() {
  const shadeRef = useRef(null);
  const signTextRef = useRef(null);
  const loginTextRef = useRef(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // AuthContext login function

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [signupData, setSignupData] = useState({
    name: "",
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    identifier: "", // Username / Email
    password: "",
  });

  // --- Animation handlers ---
  const handleSignUp = () => {
    setShowForgotPassword(false);
    if (shadeRef.current && signTextRef.current && loginTextRef.current) {
      shadeRef.current.style.left = "45%";
      signTextRef.current.style.display = "none";
      shadeRef.current.style.transition = "1s ease-in-out";

      setTimeout(() => {
        loginTextRef.current.style.display = "block";
        loginTextRef.current.style.marginLeft = "59.5%";
      }, 1000);

      setTimeout(() => {
        loginTextRef.current.style.marginLeft = "0";
      }, 1100);

      loginTextRef.current.style.transition = "1s";
    }
  };

  const handleLogin = () => {
    setShowForgotPassword(false);
    if (shadeRef.current && signTextRef.current && loginTextRef.current) {
      shadeRef.current.style.left = "-58%";
      loginTextRef.current.style.display = "none";
      shadeRef.current.style.transition = "1s ease-in-out";

      setTimeout(() => {
        signTextRef.current.style.display = "block";
        signTextRef.current.style.marginLeft = "0";
      }, 1000);

      setTimeout(() => {
        signTextRef.current.style.marginLeft = "59.5%";
      }, 1100);

      signTextRef.current.style.transition = "1s";
    }
  };

  // --- Signup ---
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setMessage("Creating your account...");

    if (signupData.password !== signupData.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      // 1️⃣ Register the user
      await axios.post("http://127.0.0.1:8000/api/register/", {
        username: signupData.username,
        email: signupData.email,
        phone_number: signupData.phone_number,
        password: signupData.password,
        full_name: signupData.name, // ✅ send full name to backend
      });

      // 2️⃣ Login to get tokens
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: signupData.username,
        password: signupData.password,
      });

      if (response.data.access) {
        // Save tokens & full name in localStorage
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        localStorage.setItem("username", signupData.username);
        localStorage.setItem("full_name", signupData.name);

        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;

        // Update AuthContext with full_name
        login({ username: signupData.username, full_name: signupData.name });
        localStorage.setItem("full_name", signupData.name);

        setMessage("✅ Signed up and logged in successfully!");
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setMessage("❌ Registration or login failed. Check console for details.");
    }
  };

  // --- Login ---
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: loginData.identifier,
        password: loginData.password,
      });

      if (response.data.access) {
        // Here you can fetch full_name from backend if your API returns user info
        const fullNameFromBackend = loginData.identifier; // fallback to identifier

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

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start font-sans bg-white">
      <Navbar />

      <div className="mt-20 relative w-11/12 md:w-[900px] h-[600px] rounded-2xl flex items-center justify-center backdrop-blur-md border-2 border-black/20 overflow-hidden shadow-xl bg-white/20">
        <div className="flex flex-col md:flex-row relative w-full h-full">

          {/* --- Sign Up Form --- */}
          <form
            onSubmit={handleSignupSubmit}
            className="w-full md:w-1/2 p-8 flex flex-col justify-center gap-4"
          >
            <h1 className="text-3xl font-bold text-blue-700">Sign Up</h1>
            <input
              type="text"
              placeholder="Full Name"
              value={signupData.name}
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
              required
              className="w-full max-w-xs border-b-2 border-black outline-none bg-transparent placeholder:text-black focus:border-b-[3px] transition p-2"
            />
            <input
              type="text"
              placeholder="Username"
              value={signupData.username}
              onChange={(e) =>
                setSignupData({ ...signupData, username: e.target.value })
              }
              required
              className="w-full max-w-xs border-b-2 border-black outline-none bg-transparent placeholder:text-black focus:border-b-[3px] transition p-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              required
              className="w-full max-w-xs border-b-2 border-black outline-none bg-transparent placeholder:text-black focus:border-b-[3px] transition p-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={signupData.phone_number}
              onChange={(e) =>
                setSignupData({ ...signupData, phone_number: e.target.value })
              }
              required
              className="w-full max-w-xs border-b-2 border-black outline-none bg-transparent placeholder:text-black focus:border-b-[3px] transition p-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              required
              className="w-full max-w-xs border-b-2 border-black outline-none bg-transparent placeholder:text-black focus:border-b-[3px] transition p-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={(e) =>
                setSignupData({ ...signupData, confirmPassword: e.target.value })
              }
              required
              className="w-full max-w-xs border-b-2 border-black outline-none bg-transparent placeholder:text-black focus:border-b-[3px] transition p-2"
            />
            <input
              type="submit"
              value="Sign Up"
              className="border border-black w-full max-w-[120px] py-2 font-bold rounded-lg mt-4 hover:cursor-pointer active:scale-90 transition bg-blue-500 text-white hover:bg-blue-600"
            />
          </form>

          {/* --- Login / Forgot Password --- */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center gap-4">
            {showForgotPassword ? (
              <>
                <h1 className="text-3xl font-bold mb-4 text-purple-700">
                  Reset Password
                </h1>
                <form
                  onSubmit={handleForgotPasswordSubmit}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                    className="w-full max-w-xs border-b-2 border-black outline-none bg-transparent placeholder:text-black focus:border-b-[3px] transition p-2"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="border border-black w-full max-w-[150px] py-2 font-bold rounded-lg mt-4 hover:cursor-pointer active:scale-90 transition disabled:opacity-50 bg-purple-500 text-white hover:bg-purple-600"
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
                className="flex flex-col justify-center gap-4"
              >
                <h1 className="text-3xl font-bold text-blue-700">Login</h1>
                <input
                  type="text"
                  placeholder="Username / E-Mail"
                  value={loginData.identifier}
                  onChange={(e) =>
                    setLoginData({ ...loginData, identifier: e.target.value })
                  }
                  required
                  className="w-full max-w-xs border-b-2 border-black outline-none bg-transparent placeholder:text-black focus:border-b-[3px] transition p-2"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                  className="w-full max-w-xs border-b-2 border-black outline-none bg-transparent placeholder:text-black focus:border-b-[3px] transition p-2"
                />
                <input
                  type="submit"
                  value="Login"
                  className="border border-black w-full max-w-[120px] py-2 font-bold rounded-lg mt-4 hover:cursor-pointer active:scale-90 transition bg-blue-500 text-white hover:bg-blue-600"
                />
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-center mt-2 hover:underline text-black"
                >
                  Forgot Password?
                </button>
              </form>
            )}
          </div>

          {/* --- Shade Panel --- */}
          <div
            ref={shadeRef}
            className="absolute w-full h-full rounded-[100px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300 flex flex-row gap-[25%] pl-[10%] pt-[10%] text-center left-[-58%]"
          >
            <div ref={loginTextRef} className="hidden text-white mt-[5em]">
              <p className="text-[2.8vw] font-bold">Welcome Back!</p>
              <p className="font-medium">Already have an account?</p>
              <button
                type="button"
                className="mt-[1vw] h-[2.7vw] w-[7vw] rounded-lg border border-white text-white active:scale-90 transition hover:bg-white/10"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div ref={signTextRef} className="ml-[59.5%] text-white mt-[5em]">
              <p className="text-[2.8vw] font-bold">Hi, Welcome!</p>
              <p className="font-medium">Don't have an account?</p>
              <button
                type="button"
                className="mt-[1vw] h-[2.7vw] w-[7vw] rounded-lg border border-white text-white active:scale-90 transition hover:bg-white/10"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {message && (
        <p className="absolute bottom-4 text-center text-lg font-medium text-white bg-black bg-opacity-60 px-4 py-2 rounded-lg">
          {message}
        </p>
      )}
    </div>
  );
}
