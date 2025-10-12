import React from "react";
import { motion } from "framer-motion";

const nearbyPlacesData = {
  "Mumbai": [
    { name: "Gateway of India", type: "Attraction", image: "/images/gateway.jpeg" },
    { name: "Marine Drive", type: "Attraction", image: "/images/marine.jpeg" },
    { name: "Leopold Cafe", type: "Food", image: "/images/leopold.jpg" },
  ],
  "Jaipur": [
    { name: "Hawa Mahal", type: "Attraction", image: "/images/hawamahal.jpg",className:"w-full h-32 object-cover rounded-t-lg"},
    { name: "City Palace", type: "Attraction", image: "/images/citypalace.jpg" },
    { name: "LMB Restaurant", type: "Food", image: "/images/LMB_restaurant.jpg" },
  ],
  "Goa": [
    { name: "Baga Beach", type: "Attraction", image: "/images/bagabeach.jpeg" },
    { name: "Fort Aguada", type: "Attraction", image: "/images/fortaguada.jpg" },
    { name: "Tito’s Bar", type: "Food", image: "/images/titobar.jpg"},
  ],
  "Delhi": [
    { name: "Red Fort", type: "Attraction", image: "https://source.unsplash.com/400x300/?red,fort,delhi" },
    { name: "India Gate", type: "Attraction", image: "https://source.unsplash.com/400x300/?india,gate" },
    { name: "Karim's Restaurant", type: "Food", image: "https://source.unsplash.com/400x300/?mughlai,food" },
  ],
  "Kerala": [
    { name: "Alleppey Backwaters", type: "Attraction", image: "https://source.unsplash.com/400x300/?alleppey,backwaters" },
    { name: "Munnar Tea Gardens", type: "Attraction", image: "https://source.unsplash.com/400x300/?munnar,tea" },
    { name: "Local Kerala Cuisine", type: "Food", image: "https://source.unsplash.com/400x300/?kerala,food" },
  ],
  "Maldives": [
    { name: "Sunset Beach", type: "Attraction", image: "https://source.unsplash.com/400x300/?maldives,beach" },
    { name: "Coral Island", type: "Attraction", image: "https://source.unsplash.com/400x300/?maldives,island" },
    { name: "Seafood Shack", type: "Food", image: "https://source.unsplash.com/400x300/?maldives,food" },
  ],
  "Sunny Beach": [
    { name: "Golden Sands", type: "Attraction", image: "https://source.unsplash.com/400x300/?sunny,beach" },
    { name: "Beachfront Cafe", type: "Food", image: "https://source.unsplash.com/400x300/?beach,cafe" },
    { name: "Sunset Point", type: "Attraction", image: "https://source.unsplash.com/400x300/?sunset,beach" },
  ],
    "Kerala Backwaters": [
    { name: "Alleppey Houseboats", type: "Attraction", image: "/images/alleppey_houseboats.jpg" },
    { name: "Kumarakom Bird Sanctuary", type: "Attraction", image: "/images/kumarakom_bird.jpg" },
    { name: "Taj Green Cove Resort", type: "Hotel", image: "/images/taj_green_cove.jpg" },
  ],
  "Darjeeling Hills": [
    { name: "Tiger Hill", type: "Attraction", image: "/images/tigerhill.jpg" },
    { name: "Batasia Loop", type: "Attraction", image: "/images/batasia_loop.jpg" },
    { name: "Mayfair Darjeeling Hotel", type: "Hotel", image: "/images/mayfair_darjeeling_hotel.jpg" },
  ],
  "Andaman & Nicobar": [
    { name: "Radhanagar Beach", type: "Attraction", image: "/images/radhanagarbeach.jpg" },
    { name: "Ross Island", type: "Attraction", image: "/images/rossisland.jpg" },
    { name: "Taj Exotica Resort", type: "Hotel", image: "/images/taj_exotica_resort.jpg" },
  ],
  "Rishikesh Adventure": [
    { name: "Laxman Jhula", type: "Attraction", image: "/images/laxman_jhula.jpg" },
    { name: "Ram Jhula", type: "Attraction", image: "/images/ram_jhula.jpg" },
    { name: "Aloha on the Ganges", type: "Hotel", image: "/images/aloha_ganges.jpg" },
  ],
    "Manali Trek": [
      { name: "Jogini Waterfalls", type: "Attraction", image: "/images/jogini_waterfalls.jpg" },
      { name: "Hidimba Devi Temple", type: "Attraction", image: "/images/hidimba_temple.jpg" },
      { name: "The Himalayan", type: "Hotel", image: "/images/the_himalayan.jpg" },
    ],
  "Udaipur Lakes": [
    { name: "Lake Pichola", type: "Attraction", image: "/images/lake_pichola.jpg" },
    { name: "Fateh Sagar Lake", type: "Attraction", image: "/images/fateh_sagar_lake.jpg" },
    { name: "The Leela Palace Udaipur", type: "Hotel", image: "/images/leela_palace_udaipur.jpg" },
  ],
  "Agra Taj Mahal": [
    { name: "Taj Mahal", type: "Attraction", image: "/images/tajmahal_romantic.jpeg" , className:"w-full h-full object-cover"},
    { name: "Agra Fort", type: "Attraction", image: "/images/agra_fort.jpg", className:"w-full h-full object-cover" },
    { name: "ITC Mughal", type: "Hotel", image: "/images/itc_mughal.jpg", className:"w-full h-full object-cover" },
  ],
  
};

const NearbyPlaces = ({ destinationName, onBack }) => {
  const nearbyPlaces = nearbyPlacesData[destinationName] || [];

  return (
    <section className="py-16 bg-gray-50 text-center">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
      >
        ← Back to Destinations
      </button>

      <h2 className="text-3xl font-bold mb-8">Nearby Places & Food in {destinationName}</h2>

      {nearbyPlaces.length === 0 ? (
        <p className="text-gray-500">No nearby places found for this destination.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {nearbyPlaces.map((place, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
    </section>
  );
};

export default NearbyPlaces;
