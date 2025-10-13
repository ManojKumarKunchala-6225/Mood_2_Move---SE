import React, { useState } from 'react';

const MysoreTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mysore Images for Carousel
  // Fixed Mysore Images for Carousel
const mysoreImages = [
  {
    url: "https://images.unsplash.com/photo-1659126574791-13313aa424bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXlzb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    title: "Mysore Palace",
    description: "The magnificent Amba Vilas Palace illuminated at night"
  },
 {
  url: "https://images.unsplash.com/photo-1606141836803-d011ab38b61e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhbXVuZCUyMGhpbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  title: "Chamundi Hill", 
  description: "Sacred hill with panoramic views of Mysore city"
},
  {
    url: "https://images.unsplash.com/photo-1652010570939-6f8b53410331?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpbmRhdmFuJTIwZ2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600p",
    title: "Brindavan Gardens",
    description: "Beautiful gardens with musical fountain show"
  }
];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '20px',
      backgroundColor: '#2c5530',
      color: 'white',
      borderRadius: '10px'
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '10px',
      color: '#ffd700'
    },
    subtitle: {
      fontSize: '1.2rem',
      opacity: 0.9
    },
    // Carousel Styles
    carousel: {
      position: 'relative',
      width: '100%',
      height: '400px',
      borderRadius: '15px',
      overflow: 'hidden',
      marginBottom: '30px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    carouselText: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    },
    carouselTitle: {
      fontSize: '1.8rem',
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    carouselDescription: {
      fontSize: '1rem',
      opacity: 0.9
    },
    carouselControls: {
      position: 'absolute',
      top: '50%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      transform: 'translateY(-50%)',
      padding: '0 20px'
    },
    carouselButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      fontSize: '20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    },
    carouselDots: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px'
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    activeDot: {
      backgroundColor: '#ffd700',
      transform: 'scale(1.2)'
    },
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '30px',
      flexWrap: 'wrap',
      gap: '10px'
    },
    tab: {
      padding: '12px 24px',
      border: 'none',
      borderRadius: '25px',
      backgroundColor: '#e9ecef',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease'
    },
    activeTab: {
      backgroundColor: '#2c5530',
      color: 'white',
      transform: 'scale(1.05)'
    },
    content: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      minHeight: '400px'
    },
    section: {
      marginBottom: '25px'
    },
    sectionTitle: {
      color: '#2c5530',
      borderBottom: '2px solid #ffd700',
      paddingBottom: '10px',
      marginBottom: '15px',
      fontSize: '1.5rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginTop: '20px'
    },
    card: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #dee2e6',
      transition: 'transform 0.2s ease'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    },
    item: {
      padding: '12px',
      margin: '8px 0',
      backgroundColor: 'white',
      borderRadius: '6px',
      borderLeft: '4px solid #2c5530'
    },
    warning: {
      backgroundColor: '#fff3cd',
      border: '1px solid #ffeaa7',
      padding: '15px',
      borderRadius: '6px',
      margin: '10px 0'
    },
    highlight: {
      color: '#2c5530',
      fontWeight: 'bold'
    },
    rating: {
      color: '#ffa500',
      fontWeight: 'bold'
    },
    price: {
      color: '#28a745',
      fontWeight: 'bold'
    }
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === mysoreImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? mysoreImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Mysore Travel Data
  const mysoreData = {
    overview: {
      title: "Mysore - The City of Palaces",
      content: `Mysore, officially known as Mysuru, is the third most populous city in Karnataka. Known as the 'City of Palaces', it retains a quaint charm with its royal heritage, magnificent buildings, and beautifully laid-out gardens. The city is famous for its Dussehra celebrations and the magnificent Mysore Palace.`
    },
    famousFoods: [
      {
        name: "Mysore Masala Dosa",
        description: "Crispy rice crepe with spicy red chutney and potato filling",
        place: "Vinayaka Mylari, Hotel Mylari",
        price: "₹80-120",
        rating: "4.5/5"
      },
      {
        name: "Mysore Pak",
        description: "Traditional sweet made from gram flour, ghee and sugar",
        place: "Guru Sweets, Original Mysore Pak Store",
        price: "₹300-500/kg",
        rating: "4.7/5"
      },
      {
        name: "Bisi Bele Bath",
        description: "Spicy rice dish with lentils and vegetables",
        place: "Hotel RRR, Raghavendra Stores",
        price: "₹60-100",
        rating: "4.3/5"
      },
      {
        name: "Chiroti",
        description: "Flaky pastry served with almond milk",
        place: "Mahadeshwara Bhavan, Anand Sweets",
        price: "₹200-300/kg",
        rating: "4.4/5"
      },
      {
        name: "Thatte Idli",
        description: "Flat, plate-shaped idli served with chutney",
        place: "Mylari Cafe, By2Coffee",
        price: "₹40-60",
        rating: "4.2/5"
      }
    ],
    shopping: [
      {
        category: "Silk Sarees",
        description: "Famous Mysore Silk Sarees known for their purity and quality",
        places: ["KSIC Silk Showroom", "Mysore Silk Udyog", "Government Silk Weaving Factory"],
        priceRange: "₹2000 - ₹50000",
        bestTime: "October-March"
      },
      {
        category: "Sandalwood Products",
        description: "Authentic sandalwood carvings, incense, and oils",
        places: ["Cauvery Emporium", "Government Sandalwood Oil Factory", "Mysore Arts"],
        priceRange: "₹100 - ₹10000",
        bestTime: "Year-round"
      },
      {
        category: "Rosewood Inlay Work",
        description: "Intricate wooden artifacts with ivory inlay",
        places: ["Devaraja Market", "Shrungar Shopping Complex", "Local artisans near Palace"],
        priceRange: "₹500 - ₹20000",
        bestTime: "Festival season"
      },
      {
        category: "Incense Sticks",
        description: "Traditional agarbathis with natural fragrances",
        places: ["Mysore Mallige", "Cycle Brand", "Local markets"],
        priceRange: "₹50 - ₹500",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Grand Mercure Mysore",
        type: "Luxury",
        price: "₹8000-15000/night",
        rating: "4.5/5",
        facilities: ["Swimming Pool", "Spa", "Multiple Restaurants", "Fitness Center"],
        location: "Near Mysore Palace",
        distance: "1.5 km from city center"
      },
      {
        name: "Radisson Blu Plaza",
        type: "Business/Luxury",
        price: "₹6000-12000/night",
        rating: "4.4/5",
        facilities: ["Pool", "Conference Hall", "Bar", "Free WiFi"],
        location: "MG Road",
        distance: "2 km from Palace"
      },
      {
        name: "Hotel Sandesh The Prince",
        type: "Mid-range",
        price: "₹3000-6000/night",
        rating: "4.2/5",
        facilities: ["Restaurant", "Travel Desk", "Parking", "Room Service"],
        location: "Nazarbad",
        distance: "3 km from city center"
      },
      {
        name: "The Quorum",
        type: "Boutique Hotel",
        price: "₹4000-8000/night",
        rating: "4.3/5",
        facilities: ["Restaurant", "Bar", "Garden", "Event Space"],
        location: "Vijaynagar",
        distance: "4 km from Palace"
      },
      {
        name: "Hotel Roopa",
        type: "Budget",
        price: "₹1500-3000/night",
        rating: "3.8/5",
        facilities: ["Basic Amenities", "Restaurant", "Travel Assistance"],
        location: "Bangalore Nilgiri Road",
        distance: "1 km from Railway Station"
      }
    ],
    places: [
      {
        name: "Mysore Palace",
        description: "Historical palace and royal residence of Wadiyar dynasty",
        timing: "10:00 AM - 5:30 PM",
        entryFee: "₹70 for Indians, ₹200 for foreigners",
        bestTime: "Evening for lighting (7:00-7:45 PM)",
        highlights: ["Sunday lighting", "Dussehra celebrations", "Architecture"]
      },
      {
        name: "Chamundi Hill",
        description: "Sacred hill with Chamundeshwari Temple and panoramic city view",
        timing: "7:30 AM - 2:00 PM, 3:30 PM - 6:00 PM, 7:30 PM - 9:00 PM",
        entryFee: "Free (vehicles charged)",
        bestTime: "Early morning or evening",
        highlights: ["Nandi Statue", "City viewpoint", "Temple architecture"]
      },
      {
        name: "Brindavan Gardens",
        description: "Beautiful gardens with musical fountain show",
        timing: "Gardens: 6:00 AM - 9:00 PM, Fountain: 7:00 PM - 8:00 PM",
        entryFee: "₹15 for adults",
        bestTime: "Evening for fountain show",
        highlights: ["Musical fountain", "Boat ride", "Light arrangements"]
      },
      {
        name: "St. Philomena's Church",
        description: "One of the tallest churches in Asia with neo-gothic architecture",
        timing: "5:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning mass or evening",
        highlights: ["Gothic architecture", "Stained glass", "Peaceful atmosphere"]
      },
      {
        name: "Mysore Zoo",
        description: "One of the oldest and most popular zoos in India",
        timing: "8:30 AM - 5:30 PM (Tuesday holiday)",
        entryFee: "₹50 for adults",
        bestTime: "Morning hours",
        highlights: ["White tigers", "Giraffes", "Conservation programs"]
      }
    ],
    precautions: [
      {
        category: "General Safety",
        tips: [
          "Keep valuables secure in crowded areas",
          "Use authorized guides at tourist spots",
          "Beware of overcharging auto-rickshaws",
          "Carry water and stay hydrated"
        ]
      },
      {
        category: "Health",
        tips: [
          "Drink bottled or filtered water",
          "Carry basic medicines for stomach issues",
          "Use sunscreen and hats during daytime",
          "Be cautious with street food if you have sensitive stomach"
        ]
      },
      {
        category: "Transport",
        tips: [
          "Pre-book taxis for long distances",
          "Use Ola/Uber for better pricing",
          "Negotiate auto fares before riding",
          "Check bus timings for inter-city travel"
        ]
      },
      {
        category: "Shopping",
        tips: [
          "Buy silk sarees from authorized KSIC showrooms only",
          "Check for authenticity certificates for sandalwood",
          "Bargain at local markets but be reasonable",
          "Keep purchase bills for expensive items"
        ]
      },
      {
        category: "Cultural",
        tips: [
          "Dress modestly when visiting temples",
          "Remove footwear at religious places",
          "Respect photography restrictions in palaces",
          "Follow queue systems at popular attractions"
        ]
      }
    ]
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div style={styles.section}>
            {/* Image Carousel */}
            <div style={styles.carousel}>
              <img 
                src={mysoreImages[currentImageIndex].url} 
                alt={mysoreImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{mysoreImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{mysoreImages[currentImageIndex].description}</p>
              </div>
              
              <div style={styles.carouselControls}>
                <button 
                  style={styles.carouselButton}
                  onClick={prevImage}
                >
                  ‹
                </button>
                <button 
                  style={styles.carouselButton}
                  onClick={nextImage}
                >
                  ›
                </button>
              </div>
              
              <div style={styles.carouselDots}>
                {mysoreImages.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.dot,
                      ...(index === currentImageIndex ? styles.activeDot : {})
                    }}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </div>
            </div>

            <h2 style={styles.sectionTitle}>About Mysore</h2>
            <p style={{fontSize: '18px', lineHeight: '1.6'}}>{mysoreData.overview.content}</p>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3>🌆 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, perfect for sightseeing</p>
                <p><span style={styles.highlight}>Dussehra Season:</span> Magnificent celebrations (September-October)</p>
                <p><span style={styles.highlight}>Summer (Apr-Jun):</span> Hot but good for indoor attractions</p>
                <p><span style={styles.highlight}>Monsoon (Jul-Sep):</span> Moderate rains, lush greenery</p>
              </div>
              <div style={styles.card}>
                <h3>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Mysore Airport (30 min from city)</p>
                <p><span style={styles.highlight}>By Train:</span> Mysore Junction (well connected)</p>
                <p><span style={styles.highlight}>By Road:</span> Excellent road connectivity from Bangalore</p>
                <p><span style={styles.highlight}>Local Transport:</span> Buses, Auto-rickshaws, Taxis</p>
              </div>
            </div>
          </div>
        );

      case 'food':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Famous Foods of Mysore</h2>
            <div style={styles.grid}>
              {mysoreData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c5530', marginBottom: '10px'}}>{food.name}</h3>
                  <p><strong>Description:</strong> {food.description}</p>
                  <p><strong>Best Place:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
                  <p><strong>Rating:</strong> <span style={styles.rating}>{food.rating}</span></p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'shopping':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Shopping in Mysore</h2>
            <div style={styles.grid}>
              {mysoreData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c5530', marginBottom: '10px'}}>{item.category}</h3>
                  <p>{item.description}</p>
                  <p><strong>Best Places:</strong> {item.places.join(', ')}</p>
                  <p><strong>Price Range:</strong> <span style={styles.price}>{item.priceRange}</span></p>
                  <p><strong>Best Time to Buy:</strong> {item.bestTime}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'hotels':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Hotels in Mysore</h2>
            <div style={styles.grid}>
              {mysoreData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c5530', marginBottom: '10px'}}>{hotel.name}</h3>
                  <p><strong>Type:</strong> {hotel.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{hotel.price}</span></p>
                  <p><strong>Rating:</strong> <span style={styles.rating}>{hotel.rating}</span></p>
                  <p><strong>Location:</strong> {hotel.location}</p>
                  <p><strong>Distance:</strong> {hotel.distance}</p>
                  <p><strong>Facilities:</strong> {hotel.facilities.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'places':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Famous Places to Visit</h2>
            <div style={styles.grid}>
              {mysoreData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c5530', marginBottom: '10px'}}>{place.name}</h3>
                  <p>{place.description}</p>
                  <p><strong>Timing:</strong> {place.timing}</p>
                  <p><strong>Entry Fee:</strong> {place.entryFee}</p>
                  <p><strong>Best Time to Visit:</strong> {place.bestTime}</p>
                  <p><strong>Highlights:</strong> {place.highlights.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'precautions':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Travel Precautions & Tips</h2>
            <div style={styles.grid}>
              {mysoreData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c5530', marginBottom: '15px'}}>{category.category}</h3>
                  <ul style={{paddingLeft: '20px'}}>
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} style={{marginBottom: '8px', lineHeight: '1.4'}}>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={styles.warning}>
              <h4>⚠️ Emergency Contacts:</h4>
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Women Helpline:</strong> 1091</p>
              <p><strong>Local Police:</strong> 0821-241 8400 | <strong>Hospital:</strong> 0821-242 5500</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🏰 Mysore Travel Guide</h1>
        <p style={styles.subtitle}>Complete travel information for the City of Palaces</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'shopping', 'hotels', 'places', 'precautions'].map(tab => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = '#adb5bd';
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = '#e9ecef';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' && '📖 Overview'}
            {tab === 'food' && '🍽️ Famous Foods'}
            {tab === 'shopping' && '🛍️ Shopping'}
            {tab === 'hotels' && '🏨 Hotels'}
            {tab === 'places' && '🏛️ Places to Visit'}
            {tab === 'precautions' && '⚠️ Precautions'}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default MysoreTravelGuide;