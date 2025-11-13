// // src/pages/Explore.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

// export default function Explore() {
//   const [selectedOptions, setSelectedOptions] = useState({
//     mood: "",
//     people: "",
//     location: "",
//   });

//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate(); // ✅ Initialize navigate

//   const handleRadioChange = (category, value) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [category]: value,
//     }));
//   };

//   const handleSearch = () => {
//     if (!selectedOptions.mood || !selectedOptions.people || !selectedOptions.location) {
//       setError("Please select one option from each category.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setResults([]);

//     const searchData = {
//       mood: selectedOptions.mood,
//       people: selectedOptions.people,
//       location: selectedOptions.location,
//     };

//     axios
//       .post("http://127.0.0.1:8000/api/recommend/", searchData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//         },
//       })
//       .then((response) => {
//         setResults(response.data);
//       })
//       .catch((err) => {
//         if (err.response && err.response.status === 404) {
//           setError("No matching places found for your preferences. Please try a different combination.");
//         } else {
//           setError("An error occurred while fetching results. Please make sure the backend server is running.");
//         }
//         console.error("API call error:", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const RadioButton = ({ category, value, color, children }) => (
//     <label
//       className={`flex items-center space-x-2 bg-${color}-50 p-3 rounded-lg hover:bg-${color}-100 cursor-pointer transform hover:scale-105 transition`}
//     >
//       <input
//         type="radio"
//         name={category}
//         value={value}
//         checked={selectedOptions[category] === value}
//         onChange={() => handleRadioChange(category, value)}
//         className={`w-5 h-5 text-${color}-600 focus:ring-${color}-500`}
//       />
//       <span>{children}</span>
//     </label>
//   );

//   const ResultsDisplay = ({ results }) => (
//     <div>
//       {results.length > 0 && (
//         <div className="bg-white shadow-2xl rounded-2xl p-8">
//           <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
//             Recommended Places
//           </h2>
//           <div className="space-y-6">
//             {results.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => navigate(`/places/${item.place.toLowerCase()}`)} // ✅ Navigate to the place page
//                 className="border border-gray-200 rounded-lg p-5 bg-gray-50 hover:shadow-lg hover:bg-blue-50 transition cursor-pointer"
//               >
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
//                   {item.place}
//                 </h3>
//                 <p><strong>Famous Foods:</strong> {item.food}</p>
//                 <p><strong>Popular Hotels:</strong> {item.hotels}</p>
//                 <p><strong>Shopping/Clothing:</strong> {item.shopping}</p>
//                 <p><strong>Nearby Places:</strong> {item.nearby_places}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex flex-col items-center justify-center p-6 pt-24 bg-gradient-to-b from-blue-100 via-white to-green-50">
//         <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
//           <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
//             Choose Your Travel Preferences
//           </h1>

//           {/* Mood Based */}
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-gray-700 mb-3">Mood Based</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <RadioButton category="mood" value="Peace">
//                 Relax
//               </RadioButton>
//               <RadioButton category="mood" value="Adventure">
//                 Adventure
//               </RadioButton>
//               <RadioButton category="mood" value="Spiritual">
//                 Happy
//               </RadioButton>
//               <RadioButton category="mood" value="Romantic">
//                 Romantic
//               </RadioButton>
//             </div>
//           </section>

//           {/* People Based */}
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-gray-700 mb-3">People Based</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <RadioButton category="people" value="Solo" color="green">
//                 Solo
//               </RadioButton>
//               <RadioButton category="people" value="Family" color="green">
//                 Family
//               </RadioButton>
//               <RadioButton category="people" value="Couple" color="green">
//                 Couple
//               </RadioButton>
//               <RadioButton category="people" value="Friends" color="green">
//                 Friends
//               </RadioButton>
//             </div>
//           </section>

//           {/* Location */}
//           <section className="mb-6">
//             <h2 className="text-xl font-semibold text-gray-700 mb-3">Location</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <RadioButton category="location" value="North" color="yellow">
//                 North
//               </RadioButton>
//               <RadioButton category="location" value="South" color="yellow">
//                 South
//               </RadioButton>
//             </div>
//           </section>

//           {/* Search Button */}
//           <div className="text-center mt-6">
//             <button
//               onClick={handleSearch}
//               className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
//               disabled={loading}
//             >
//               {loading ? "Searching..." : "Search Places"}
//             </button>
//           </div>
//         </div>

//         {/* Results */}
//         <div className="w-full max-w-2xl mt-8">
//           {error && (
//             <p className="text-center text-red-500 bg-white p-3 rounded-lg">{error}</p>
//           )}
//           <ResultsDisplay results={results} />
//         </div>
//       </div>
//     </>
//   );
// }

// src/pages/Explore.jsx
import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Explore() {
  const [selectedOptions, setSelectedOptions] = useState({
    mood: "",
    people: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRadioChange = (category, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSearch = () => {
    if (!selectedOptions.mood || !selectedOptions.people || !selectedOptions.location) {
      setError("Please select one option from each category.");
      return;
    }

    setLoading(true);
    setError("");

    const searchData = {
      mood: selectedOptions.mood,
      people: selectedOptions.people,
      location: selectedOptions.location,
    };

    axios
      .post("http://127.0.0.1:8000/api/recommend/", searchData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        navigate("/results", { state: { results: response.data } });
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError("No matching places found for your preferences. Please try a different combination.");
        } else {
          setError("An error occurred while fetching results. Please make sure the backend server is running.");
        }
        console.error("API call error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const RadioButton = ({ category, value, color = "white", children }) => (
    <label
      className={`flex items-center justify-center space-x-2 bg-${color}-50 px-6 py-3 rounded-lg hover:bg-${color}-100 cursor-pointer transform hover:scale-105 transition`}
    >
      <input
        type="radio"
        name={category}
        value={value}
        checked={selectedOptions[category] === value}
        onChange={() => handleRadioChange(category, value)}
        className={`w-5 h-5 text-${color}-600 focus:ring-${color}-500`}
      />
      <span className="font-medium">{children}</span>
    </label>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center p-6 pt-24 bg-gradient-to-b from-blue-100 via-white to-green-50">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
            Choose Your Travel Preferences
          </h1>

          {/* Mood Based */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-left">Mood Based</h2>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <RadioButton category="mood" value="Peace">Relax</RadioButton>
              <RadioButton category="mood" value="Adventure">Adventure</RadioButton>
              <RadioButton category="mood" value="Happy">Happy</RadioButton>
              <RadioButton category="mood" value="Romantic">Romantic</RadioButton>
              <div className="col-span-2 flex justify-center">
                <RadioButton category="mood" value="Spiritual">Spiritual</RadioButton>
              </div>
            </div>
          </section>

          {/* People Based */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-left">People Based</h2>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <RadioButton category="people" value="Solo" color="green">Solo</RadioButton>
              <RadioButton category="people" value="Family" color="green">Family</RadioButton>
              <RadioButton category="people" value="Couple" color="green">Couple</RadioButton>
              <RadioButton category="people" value="Friends" color="green">Friends</RadioButton>
            </div>
          </section>

          {/* Location */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-left">Location</h2>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <RadioButton category="location" value="North" color="yellow">North</RadioButton>
              <RadioButton category="location" value="South" color="yellow">South</RadioButton>
            </div>
          </section>

          {/* Search Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search Places"}
            </button>
          </div>

          {error && (
            <p className="text-center text-red-500 bg-white p-3 rounded-lg mt-4">{error}</p>
          )}
        </div>
      </div>
    </>
  );
}
