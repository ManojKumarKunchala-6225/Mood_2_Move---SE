// src/components/DestinationsGrid.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import NearbyPlaces from "./NearbyPlaces";

const allDestinations = [
  { name: "Agra", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWdyYXxlbnwwfHwwfHx8MA&auto=format&fit=crop&q=60&w=600" },
  { name: "Ahmedabad", image: "https://plus.unsplash.com/premium_photo-1697730464803-fcede713753e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWhtZWRhYmFkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" },
  { name: "Ajanta & Ellora Caves", image: "https://media.istockphoto.com/id/1287050420/photo/stupa-at-ajanta-caves-near-aurangabad.webp?a=1&b=1&s=612x612&w=0&k=20&c=eAz6SqErJXdKYzLwcIZoOJw6h2AXBgmfKMcJwkHOU1g=" },
  { name: "AndamanNicobar", image: "https://imgs.search.brave.com/HSduXZmU0iXlWMZXN44RnZ_jwgnpoab-7ybxnlHlve0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEzLzNk/LzgzLzEzM2Q4MzFi/MWUyOGJjNDhmNGFi/ZDk3ODAzM2M0ODgx/LmpwZw" },
  { name: "ArakuValley", image: "https://imgs.search.brave.com/dAe4teD_F8eLkuBIa6lFup00Ko3WWF_Hz8t1eDusajg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kMzY4/dWZ1N3hnY3M4Ni5j/bG91ZGZyb250Lm5l/dC8yMDYyOC0xNTcz/MzE3NDc1LmpwZw"},
  { name: "Auli", image: "https://media.istockphoto.com/id/2227491163/photo/spectacular-view-of-aulis-artificial-lake-with-the-nanda-devi-mountain-range-backdrop-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=fF2YGY0SYN_gj6t5QTXcWOXx-yG4zmPg30BUhk25O9c=" },
  { name: "Bikaner", image: "https://media.istockphoto.com/id/106392539/photo/courtyard-junagarh-fort-in-bikaner-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=sYFDnuR2xF4m_lrqy7GmF-k26GrGuO_kCqO2FxGBnkU=" },
  { name: "Goa", image:"https://imgs.search.brave.com/xdpD8zapXwseg4rhV4hOMVZIpmQZB3ru-nIGvTVOfVs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjc0/ODc0MTc4L3Bob3Rv/L2Fnb25kYS1zY2Vu/ZXJ5LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz02VXJrYjdQ/WFVwdlNlbGtrWnVR/SUREdW5YLU5DUjVC/UzhjQVpySDdLWW5z/PQ"},
  { name: "Jaipur", image: "https://media.istockphoto.com/id/157770344/photo/amber-fort-rajasthan-state-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=YlOZlAyHlkKqfG2DJEq-EyasGw7_cDERKuTrAMEwRu0=" },
  { name: "Jodhpur", image: "https://plus.unsplash.com/premium_photo-1661904165347-369200d4bf72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9kaHB1cnxlbnwwfHwwfHx8MA&auto=format&fit=crop&q=60&w=600" },
  { name: "Kanchipuram", image: "https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&auto=format&fit=crop&q=80&w=1170" },
  { name: "Kanyakumari", image: "https://images.unsplash.com/photo-1593185541987-92f858cf43f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8S2FueWFrdW1hcml8ZW58MHx8MHx8fDA&auto=format&fit=crop&q=60&w=600" },
  { name: "Kasauli", image: "https://images.unsplash.com/photo-1694712282542-1c9929653496?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FzdWFsaXxlbnwwfHwwfHx8MA&auto=format&fit=crop&q=60&w=600" },
  { name: "Kasol", image: "https://images.unsplash.com/photo-1612638039814-1a67ea727114?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fzb2x8ZW58MHx8MHx8fDA&auto=format&fit=crop&q=60&w=600" },
  { name: "Kedarnath", image: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VkYXJuYXRofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
  { name: "Khajjiar", image: "https://media.istockphoto.com/id/2226125490/photo/lake-in-khajjiar-meadow.webp?a=1&b=1&s=612x612&w=0&k=20&c=BtsNe4bJ08qHObz18jPDcgp9kUgoWzI3D_zcwVvr6ik=" },
  { name: "Khajuraho", image: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2hhanVyYWhvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
  { name: "Kochi", image: "https://images.unsplash.com/photo-1605955794720-651b9ae7f5e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29jaGl8ZW58MHx8MHx8fDA&auto=format&fit=crop&q=60&w=600" },
  { name: "Kodaikanal", image: "https://images.unsplash.com/photo-1527334134460-f21a05ef62f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a29kYWlrYW5hbHxlbnwwfHwwfHx8MA&auto=format&fit=crop&q=60&w=600" },
  { name: "Kolkata", image: "https://plus.unsplash.com/premium_photo-1697730414399-3d4d9ada98bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29sa2F0YXxlbnwwfHwwfHx8MA&auto=format&fit=crop&q=60&w=600" },
  { name: "Konark", image: "https://images.unsplash.com/photo-1690313186501-445a6367d7e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29uYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
  { name: "Lansdowne", image: "https://images.unsplash.com/photo-1651501442055-71fc47000778?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuc2Rvd25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
  { name: "Leh", image: "https://plus.unsplash.com/premium_photo-1697729578645-a9decad10b8c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"},
  { name: "Lovedale", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Lovedale_railway_station-Ooty-Tamil_Nadu.jpg" },
  { name: "Lucknow", image: "https://plus.unsplash.com/premium_photo-1697730430283-7e4456c78375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHVja25vd3xlbnwwfHwwfHx8MA&auto=format&fit=crop&q=60&w=600" },
  { name: "Mahabaleshwar", image: "https://media.istockphoto.com/id/1423569123/photo/mahakal.webp?a=1&b=1&s=612x612&w=0&k=20&c=t0bQ_4QQQ_OzmBxhNnoRB-AckYmBUbuc2W6wnv48YqA=" },
  { name: "Mahabalipuram", image: "https://images.unsplash.com/photo-1717490592973-81255ab4398b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFoYWJoYWxpcHVyYW18ZW58MHx8MHx8fDA&auto=format&fit=crop&q=60&w=600" },
  { name: "Manali", image: "https://plus.unsplash.com/premium_photo-1661935282164-5ee95f5bf490?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
  { name: "Mathura", image: "https://media.istockphoto.com/id/1146883950/photo/sculpture-of-radha-krishna-and-peacock-feather-during-dahi-handi-festival-pune.webp?a=1&b=1&s=612x612&w=0&k=20&c=yvl9ov5fKEjwjjhLd_lMDqZeANd6LZBz6roSx_pwJfs=" },
  { name: "Meppadi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFHJWGeFaNI-Ig79S5QrcGzjgrhU62cDf7w&s" },
  { name: "Mount Abu", image: "https://plus.unsplash.com/premium_photo-1697730481640-114d8546ef3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnQlMjBhYnV8ZW58MHx8MHx8fDA&auto=format&fit=crop&q=60&w=600" },
  { name: "Mumbai", image: "https://media.istockphoto.com/id/1334792855/photo/chhatrapati-shivaji-terminus-in-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=L3gK7lyKS5HjFDa_Vl0-iY1Z_cGUjZb_ipOECiGdb1E=" },
  { name: "Munnar", image: "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=9wRsQjDAkzmYH8oIdioriw4UUo_0GFTS2gtidzM5-mE=" },
  { name: "Mussoorie", image: "https://media.istockphoto.com/id/1140128164/photo/mussoorie-landscape-in-cloudy-rainy-monsoon-season-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=00hlU2mzXd3BEv-IlOdY85muIVZKRvA5c7Gc9IbIXYM=" },
  { name: "Mysore", image: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXlzb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
  { name: "Naggar", image: "https://images.unsplash.com/photo-1643596290839-f7dd48ecba33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFnZ2FyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
  { name: "Nagpur", image: "https://plus.unsplash.com/premium_photo-1694475572292-5f19c8a188c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFncHVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
  { name: "Ooty", image: "https://media.istockphoto.com/id/537064629/photo/tea-plantations-around-the-emerald-lake-in-ooty.webp?a=1&b=1&s=612x612&w=0&k=20&c=E5yKr6mXwi14CtvU0iMmESgJLbZagJbfwz-dqABsE24=" },
  { name: "Pahalgam", image: "https://media.istockphoto.com/id/479527588/photo/students-enjoy-on-vacation-at-view-point-of-pahalgam-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=O0IRs86mn032uvJyAbkHLzg9mKMP6CFbgg5lnWKFgr8=" },
  { name: "Pangot", image: "https://media.istockphoto.com/id/1159023486/photo/trekking-tour-through-the-himalayan-region-of-uttarakhand-in-northern-india-hay-harvest-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=qwBx43u-zZ1DHPPi8NHdnsAa2S77p8BHf4CTASZ1Ox4=" },
  { name: "Patna", image: "https://images.unsplash.com/photo-1673102166075-7fe2c11c6773?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0bmF8ZW58MHx8MHx8fDA&auto=format&fit=crop&q=60&w=600" },
  { name: "Pondicherry", image: "https://media.istockphoto.com/id/532978754/photo/pondicherry-globe.webp?a=1&b=1&s=612x612&w=0&k=20&c=QtjTjkP3006bLpw17pg8kY2rmEMoRM2Te1DfxSTRvOI=" },
  { name: "Pune", image: "https://media.istockphoto.com/id/816898128/photo/pattadakal-temples-a-6th-century-unesco-site-in-karnataka-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=OuIsb8RQPzJ3EC6LLe1EbccVa_X8ZQSR1eyLTAdk8kk=" },
  { name: "Puri", image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVyaXxlbnwwfHwwfHx8MA&auto=format&fit=crop&q=60&w=600" },
  { name: "Pushkar", image: "https://images.unsplash.com/flagged/photo-1586176182329-f901b80d3bd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVzaGthcnxlbnwwfHwwfHx8MA&auto=format&fit=crop&q=60&w=600" },
  { name: "Rameswaram", image: "https://media.istockphoto.com/id/2200798405/photo/scenic-aerial-image-of-the-pamban-bridge-at-sunrise-as-the-golden-hues-reflect-over-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=4FyuOKif19F3EHhVtiO_fJKac8Ab0qKxPBt2SlzA3lY=" },
  { name: "Ranikhet", image: "https://media.istockphoto.com/id/2233335939/photo/himalayan-landscapes-of-kumaon-uttarakhand-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=bVNqCv4Y-OHL_PMuSXcDQ4t-4isaVuFuU_NIj3n1wJY=" },
  { name: "Ranthambore", image: "https://media.istockphoto.com/id/520373860/photo/three-bengal-tigers-in-front-of-tourist-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=4RyU-ndeSofeKSlb87eIjdVTb6VYhVj_3fzd6RkYjUM=" },
  { name: "Rishikesh", image: "https://media.istockphoto.com/id/514794342/photo/rishikesh.webp?a=1&b=1&s=612x612&w=0&k=20&c=OhKHd77wNAOeaidMvrVYl0-4extzn571iufcl_fR2Fg=" },
  { name: "Sabarimala", image: "https://images.unsplash.com/photo-1710439672382-87cab6b75e15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FiYXJpbWFsYXxlbnwwfHwwfHx8MA&auto=format&fit=crop&q=60&w=600" },
  { name: "Saputara", image: "https://media.istockphoto.com/id/2169545999/photo/beautiful-mountains-photography-while-traveling-saputara-hill-station.webp?a=1&b=1&s=612x612&w=0&k=20&c=l6MDvPeoz2U6-XX7IauSAhgFvNLNhKp6QhaFW1a-VOE=" },
  { name: "Shakti Peeths", image: "https://thumbs.dreamstime.com/b/kiriteswari-shaktipeeth-temple-kiritkona-village-west-bengal-india-situated-under-nabagram-murshidabad-district-state-328046790.jpg" },
  { name: "Shillong", image: "https://media.istockphoto.com/id/896378082/photo/shillong-meghalaya-north-east-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=baqutsyjAY2mZR_lik-QvfSOr3zLVqMLeV7PJxnTxCA=" },
  { name: "Shimla", image: "https://media.istockphoto.com/id/1224392597/photo/after-snowfall-kalka-shimla-railway-is-a-beautiful-place-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=R3gzBS049rh4Jz0-ZHsl_CX6Y6AV3WJZ5L1yi494i9w=" },
  { name: "Shirdi", image: "https://media.istockphoto.com/id/682197548/photo/idol-of-shirdi-sitting-on-the-arch-of-temple.webp?a=1&b=1&s=612x612&w=0&k=20&c=M4qKcUTNqGm92I-zZk2inQB5EZFBhDHclKorrAoMED0=" },
  { name: "Tirupati", image: "https://media.istockphoto.com/id/1268716417/photo/misty-tirupathi.webp?a=1&b=1&s=612x612&w=0&k=20&c=qhFSLO8rOqn42KOAJeanwaON8623hh0DjE18YhbajBM=" },
];

const DestinationsGrid = ({ selectedMood }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const filteredDestinations = allDestinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedDestination) {
    return (
      <NearbyPlaces
        destinationName={selectedDestination}
        onBack={() => setSelectedDestination(null)}
      />
    );
  }

  return (
    <section id="destinations" className="py-16 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Find Destinations by Name
      </motion.h2>

      {/* Search Input */}
      <div className="flex justify-center mb-8 px-4">
        <input
          type="text"
          placeholder="Search destination..."
          className="p-3 w-full max-w-md rounded-full shadow-md outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Destinations Grid (only show when typing) */}
      {searchTerm && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                onClick={() => setSelectedDestination(dest.name)}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{dest.name}</h3>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full mt-4">
              No destinations match your search.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default DestinationsGrid;
