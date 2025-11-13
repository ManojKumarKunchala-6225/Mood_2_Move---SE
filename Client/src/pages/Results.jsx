// src/pages/Results.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 pt-24 p-6 flex flex-col items-center">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Recommended Places
          </h2>

          {results.length === 0 ? (
            <p className="text-center text-gray-600">
              No results found. Please go back and search again.
            </p>
          ) : (
            <div className="space-y-6">
              {results.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/places/${item.place.toLowerCase()}`)}
                  className="border border-gray-200 rounded-lg p-5 bg-gray-50 hover:shadow-lg hover:bg-blue-50 transition cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
                    {item.place}
                  </h3>
                  <p><strong>Famous Foods:</strong> {item.food}</p>
                  <p><strong>Popular Hotels:</strong> {item.hotels}</p>
                  <p><strong>Shopping/Clothing:</strong> {item.shopping}</p>
                  <p><strong>Nearby Places:</strong> {item.nearby_places}</p>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/explore")}
              className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              🔙 Back to Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
