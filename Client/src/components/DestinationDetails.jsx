import React, { useState } from "react";
import { motion } from "framer-motion";


const destinationData = {
  "Mumbai": {
    overview: "Mumbai is the financial capital of India, famous for Bollywood, Gateway of India, and vibrant street life.",
    nearby: [
      { name: "Gateway of India", type: "Attraction", image: "https://www.leisurekart.com/blog/wp-content/uploads/2024/04/Places-to-visit-in-Mumbai-Gateway-Of-India-Mumbai-Colaba.jpg" },
      { name: "Marine Drive", type: "Attraction",image: "/marine.jpeg"},
      { name: "Leopold Cafe", type: "Food", image: "https://source.unsplash.com/400x300/?cafe,india" },
    ],
    tips: [
      "Best time to visit is November to February.",
      "Try local street food like vada pav and pav bhaji.",
      "Use local trains carefully during rush hours.",
    ],
    reviews: [
      { name: "Anita Sharma", rating: 5, comment: "Mumbai is vibrant! Loved Marine Drive and street food." },
      { name: "Rajesh Kumar", rating: 4, comment: "Gateway of India was amazing, very crowded but worth it." },
    ],
  },
  "Jaipur": {
    overview: "Jaipur, the Pink City, is famous for forts, palaces, and rich Rajasthani culture.",
    nearby: [
      { name: "Hawa Mahal", type: "Attraction", image: "https://source.unsplash.com/400x300/?hawa,mahal" },
      { name: "City Palace", type: "Attraction", image: "https://source.unsplash.com/400x300/?city,palace" },
      { name: "LMB Restaurant", type: "Food", image: "https://source.unsplash.com/400x300/?indian,food" },
    ],
    tips: [
      "Visit early morning to avoid crowds at popular forts.",
      "Wear comfortable shoes for palace visits.",
      "Try traditional Rajasthani thali for lunch.",
    ],
    reviews: [
      { name: "Priya Singh", rating: 5, comment: "Hawa Mahal and City Palace are breathtaking!" },
      { name: "Amit Verma", rating: 4, comment: "Loved the Rajasthani cuisine, very flavorful." },
    ],
  },
  "Goa": {
    overview: "Goa is famous for beaches, nightlife, and Portuguese heritage.",
    nearby: [
      { name: "Baga Beach", type: "Attraction", image: "https://source.unsplash.com/400x300/?baga,beach" },
      { name: "Fort Aguada", type: "Attraction", image: "https://source.unsplash.com/400x300/?fort,goa" },
      { name: "Tito’s Bar", type: "Food", image: "https://source.unsplash.com/400x300/?bar,goa" },
    ],
    tips: [
      "Best time to visit is November to March.",
      "Water sports are a must-try on beaches.",
      "Book accommodations near the beach early.",
    ],
    reviews: [
      { name: "Neha Reddy", rating: 5, comment: "Baga Beach is gorgeous and the nightlife is awesome!" },
      { name: "Vikram Das", rating: 4, comment: "Fort Aguada and beach walks were amazing." },
    ],
  },
};

const DestinationDetails = ({ destinationName, onBack }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const destination = destinationData[destinationName];

  if (!destination) return <p className="text-gray-500 text-center mt-8">No data found.</p>;

  return (
    <section className="py-16 px-4">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
      >
        ← Back to Destinations
      </button>

      <h2 className="text-3xl font-bold mb-4 text-center">{destinationName}</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {["Overview", "Nearby Places", "Travel Tips", "Reviews"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full font-semibold transition-colors
              ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}
            `}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Overview" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-700 max-w-3xl mx-auto"
        >
          <p>{destination.overview}</p>
        </motion.div>
      )}

      {activeTab === "Nearby Places" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destination.nearby.map((place, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <img src={place.image} alt={place.name} className="w-full h-48 object-cover"/>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">{place.name}</h3>
                <p className="text-sm text-gray-500">{place.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === "Travel Tips" && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-left list-disc list-inside text-gray-700"
        >
          {destination.tips.map((tip, idx) => (
            <li key={idx} className="mb-2">{tip}</li>
          ))}
        </motion.ul>
      )}

      {activeTab === "Reviews" && (
        <section className="py-8 bg-gray-100 text-center">
          <h3 className="text-2xl font-bold mb-6">User Reviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {destination.reviews.map((review, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-lg text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="text-yellow-500 font-bold">{'★'.repeat(review.rating)}</div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default DestinationDetails;
