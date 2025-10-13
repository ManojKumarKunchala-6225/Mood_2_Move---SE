// KanyakumariTravelGuide.jsx
import React, { useState } from 'react';

const KanyakumariTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');

  // Kanyakumari Images for Carousel
  const kanyakumariImages = [
    // {
    //   url: "https://unsplash.com/photos/brown-rock-formation-on-sea-during-daytime-9jjF5qs2XNk",
    //   title: "Vivekananda Rock Memorial",
    //   description: "Sacred rock where Swami Vivekananda meditated"
    // },
    // {
    //   url: "https://unsplash.com/photos/a-body-of-water-surrounded-by-a-lush-green-hillside-CMtI0OOF_Xg",
    //   title: "Sunrise at Kanyakumari",
    //   description: "Spectacular sunrise where three seas meet"
    // },
    {
      url: "https://images.unsplash.com/photo-1646722391520-98919b71ea72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGthbnlha3VtYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Thiruvalluvar Statue",
      description: "133 feet tall statue of the great Tamil poet"
    },
    {
      url: "https://images.unsplash.com/photo-1645689326349-61af008aad82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGthbnlha3VtYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Kanyakumari Temple",
      description: "Ancient temple dedicated to Goddess Kanya Kumari"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(30, 60, 114, 0.3)'
    },
    title: {
      fontSize: '3rem',
      marginBottom: '15px',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    subtitle: {
      fontSize: '1.3rem',
      opacity: 0.9,
      fontWeight: '500'
    },
    // Carousel Styles
    carousel: {
      position: 'relative',
      width: '100%',
      height: '400px',
      borderRadius: '15px',
      overflow: 'hidden',
      marginBottom: '30px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
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
      backgroundColor: '#2a5298',
      transform: 'scale(1.2)'
    },
    // Rating Styles
    ratingSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    ratingTitle: {
      color: '#1e3c72',
      marginBottom: '15px',
      fontSize: '1.5rem'
    },
    ratingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '15px',
      marginTop: '15px'
    },
    ratingCard: {
      backgroundColor: '#f0f8ff',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #d1e7ff',
      transition: 'all 0.3s ease'
    },
    ratingStars: {
      display: 'flex',
      gap: '5px',
      margin: '10px 0'
    },
    star: {
      fontSize: '24px',
      cursor: 'pointer',
      color: '#ddd',
      transition: 'color 0.2s ease'
    },
    activeStar: {
      color: '#ffa500'
    },
    rateButton: {
      backgroundColor: '#2a5298',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '14px',
      marginTop: '10px'
    },
    userRating: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#f0fff0',
      borderRadius: '5px',
      borderLeft: '3px solid #4caf50'
    },
    // Modal Styles
    modal: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '15px',
      width: '90%',
      maxWidth: '500px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
    },
    modalTitle: {
      color: '#1e3c72',
      marginBottom: '20px',
      textAlign: 'center'
    },
    textarea: {
      width: '100%',
      padding: '15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '14px',
      marginBottom: '20px',
      minHeight: '100px',
      resize: 'vertical'
    },
    modalButtons: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center'
    },
    submitButton: {
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    cancelButton: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    // Existing styles
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '30px',
      flexWrap: 'wrap',
      gap: '15px'
    },
    tab: {
      padding: '15px 30px',
      border: 'none',
      borderRadius: '50px',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    activeTab: {
      backgroundColor: '#1e3c72',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(30, 60, 114, 0.4)'
    },
    content: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      minHeight: '500px'
    },
    section: {
      marginBottom: '30px'
    },
    sectionTitle: {
      color: '#1e3c72',
      borderBottom: '3px solid #2a5298',
      paddingBottom: '15px',
      marginBottom: '25px',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '25px'
    },
    card: {
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #d1e7ff',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(30, 60, 114, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#1e3c72',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#27ae60',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#c0392b',
      fontWeight: 'bold'
    },
    rating: {
      color: '#ffa500',
      fontWeight: 'bold'
    }
  };

  // Kanyakumari Travel Data
  const kanyakumariData = {
    overview: {
      title: "Kanyakumari - Where Three Seas Meet",
      content: `Kanyakumari, formerly known as Cape Comorin, is the southernmost tip of mainland India where the Arabian Sea, Bay of Bengal, and Indian Ocean converge. This coastal town is famous for its spectacular sunrise and sunset views, pristine beaches, and significant spiritual landmarks including the Vivekananda Rock Memorial and Thiruvalluvar Statue.`
    },
    famousFoods: [
      {
        name: "Kanyakumari Fish Curry",
        description: "Spicy coastal fish curry with traditional Tamil flavors",
        place: "Sea View Restaurant, Hotel Sangam",
        price: "₹250-450",
        rating: "4.5/5"
      },
      {
        name: "Appam with Stew",
        description: "Soft rice hoppers with vegetable or meat stew",
        place: "Hotel Tamilnadu, Local eateries",
        price: "₹80-150",
        rating: "4.3/5"
      },
      {
        name: "Kothu Parotta",
        description: "Shredded flatbread mixed with vegetables and spices",
        place: "Local street stalls, Beach Road restaurants",
        price: "₹60-120",
        rating: "4.4/5"
      },
      {
        name: "Seafood Platter",
        description: "Fresh catch of the day with multiple seafood items",
        place: "Ocean Heritage, Fisherman's Wharf",
        price: "₹400-800",
        rating: "4.6/5"
      },
      {
        name: "Banana Chips",
        description: "Crispy banana chips seasoned with spices",
        place: "Local vendors, Gandhi Mandapam area",
        price: "₹50-100",
        rating: "4.2/5"
      }
    ],
    shopping: [
      {
        category: "Sea Shell Products",
        description: "Beautiful handicrafts and jewelry made from sea shells",
        places: ["Beach Road stalls", "Gandhi Mandapam market", "Local artisans"],
        priceRange: "₹50 - ₹2000",
        bestTime: "Year-round"
      },
      {
        category: "Pearl Jewelry",
        description: "Authentic pearl necklaces, earrings, and bracelets",
        places: ["Pearl Market", "Beach Road shops", "Government emporiums"],
        priceRange: "₹500 - ₹20000",
        bestTime: "October-March"
      },
      {
        category: "Spices",
        description: "Fresh Tamil Nadu spices and condiments",
        places: ["Local spice shops", "Main Bazar", "Tourist shops"],
        priceRange: "₹100 - ₹2000",
        bestTime: "Year-round"
      },
      {
        category: "Palm Leaf Products",
        description: "Eco-friendly products made from palm leaves",
        places: ["Cottage industries", "Beach stalls", "Local markets"],
        priceRange: "₹100 - ₹1500",
        bestTime: "Winter season"
      }
    ],
    hotels: [
      {
        name: "Seashore Hotel",
        type: "Luxury Beachfront",
        price: "₹8000-20000/night",
        rating: "4.6/5",
        facilities: ["Sea View Rooms", "Pool", "Spa", "Multiple Restaurants"],
        location: "Beach Road",
        distance: "Walking distance to sunrise point"
      },
      {
        name: "Hotel Tamilnadu",
        type: "Government Heritage",
        price: "₹3000-8000/night",
        rating: "4.2/5",
        facilities: ["Sea Facing Rooms", "Restaurant", "Garden", "Parking"],
        location: "Kovalam Road",
        distance: "1 km from Vivekananda Rock"
      },
      {
        name: "Sangam Hotel",
        type: "Mid-range",
        price: "₹4000-10000/night",
        rating: "4.3/5",
        facilities: ["Restaurant", "Travel Desk", "AC Rooms", "Beach Access"],
        location: "East Car Street",
        distance: "500m from beach"
      },
      {
        name: "TTDC Yatri Nivas",
        type: "Budget",
        price: "₹1500-4000/night",
        rating: "4.0/5",
        facilities: ["Basic Amenities", "Canteen", "Parking", "Tour Assistance"],
        location: "Kovalam Road",
        distance: "2 km from main attractions"
      },
      {
        name: "Sea Shell Guest House",
        type: "Budget Beachside",
        price: "₹1000-2500/night",
        rating: "3.8/5",
        facilities: ["Beach View", "Basic Rooms", "Home-cooked Food"],
        location: "Beach Road",
        distance: "Direct beach access"
      }
    ],
    places: [
      {
        name: "Vivekananda Rock Memorial",
        description: "Sacred monument built on rock where Swami Vivekananda meditated",
        timing: "8:00 AM - 4:00 PM",
        entryFee: "₹20 for adults, Ferry: ₹40",
        bestTime: "Morning for peaceful visit",
        highlights: ["Meditation hall", "Viewing gallery", "Ferry ride", "Spiritual atmosphere"]
      },
      {
        name: "Thiruvalluvar Statue",
        description: "133 feet tall stone statue of ancient Tamil poet Thiruvalluvar",
        timing: "8:00 AM - 4:00 PM",
        entryFee: "Included with Rock Memorial ticket",
        bestTime: "Morning for photography",
        highlights: ["Architectural marvel", "Panoramic sea views", "Cultural significance"]
      },
      {
        name: "Sunrise & Sunset View Points",
        description: "Famous for spectacular sunrise and sunset over ocean confluence",
        timing: "Sunrise: 6:00 AM, Sunset: 6:00 PM (varies)",
        entryFee: "Free",
        bestTime: "Sunrise and sunset hours",
        highlights: ["Three sea confluence", "Colorful skies", "Photography", "Peaceful atmosphere"]
      },
      {
        name: "Kanyakumari Temple",
        description: "Ancient temple dedicated to Goddess Kanya Kumari (Virgin Goddess)",
        timing: "4:30 AM - 12:00 PM, 4:00 PM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Early morning for darshan",
        highlights: ["Diamond nose ring", "Spiritual significance", "Ancient architecture"]
      },
      {
        name: "Gandhi Memorial",
        description: "Memorial where Mahatma Gandhi's ashes were kept before immersion",
        timing: "7:00 AM - 7:00 PM",
        entryFee: "Free",
        bestTime: "Daytime",
        highlights: ["Architectural design", "Sun rays on Gandhi's birthday", "Historical significance"]
      },
      {
        name: "Padmanabhapuram Palace",
        description: "Ancient wooden palace of Travancore kings, masterpiece of Kerala architecture",
        timing: "9:00 AM - 5:00 PM (Closed Monday)",
        entryFee: "₹35 for Indians, ₹300 for foreigners",
        bestTime: "Morning hours",
        highlights: ["Wooden architecture", "Mural paintings", "Royal artifacts", "Historical significance"]
      }
    ],
    precautions: [
      {
        category: "Beach Safety",
        tips: [
          "Be cautious of strong currents while swimming",
          "Follow lifeguard instructions and warning signs",
          "Avoid swimming during high tide or rough weather",
          "Keep children supervised near water"
        ]
      },
      {
        category: "Health",
        tips: [
          "Use sunscreen and hats for sun protection",
          "Stay hydrated in the humid climate",
          "Be cautious with street food hygiene",
          "Carry basic medicines for motion sickness"
        ]
      },
      {
        category: "Transport",
        tips: [
          "Book ferry tickets in advance for Rock Memorial",
          "Use authorized boat operators only",
          "Negotiate auto-rickshaw fares before riding",
          "Check bus timings for inter-city travel"
        ]
      },
      {
        category: "Weather",
        tips: [
          "Carry raincoat/umbrella during monsoon (June-September)",
          "Wear light cotton clothes in summer",
          "Check weather forecast for ferry operations",
          "Carry warm clothes for early morning sunrise viewing"
        ]
      },
      {
        category: "Cultural",
        tips: [
          "Dress modestly when visiting temples",
          "Remove footwear at religious places",
          "Maintain silence at meditation spots",
          "Respect local customs and traditions"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === kanyakumariImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? kanyakumariImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Rating Functions
  const handleRateClick = (item) => {
    setCurrentRatingItem(item);
    setShowRatingModal(true);
    setUserReview('');
  };

  const submitRating = (rating) => {
    if (currentRatingItem) {
      const newRating = {
        rating: rating,
        review: userReview,
        timestamp: new Date().toLocaleDateString()
      };
      
      setUserRatings(prev => ({
        ...prev,
        [currentRatingItem.name]: newRating
      }));
      
      setShowRatingModal(false);
      setCurrentRatingItem(null);
      setUserReview('');
    }
  };

  const renderStars = (rating, onStarClick = null) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        style={{
          ...styles.star,
          ...(star <= rating ? styles.activeStar : {})
        }}
        onClick={() => onStarClick && onStarClick(star)}
      >
        ★
      </span>
    ));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div style={styles.section}>
            {/* Image Carousel */}
            <div style={styles.carousel}>
              <img 
                src={kanyakumariImages[currentImageIndex].url} 
                alt={kanyakumariImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{kanyakumariImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{kanyakumariImages[currentImageIndex].description}</p>
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
                {kanyakumariImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🌊 About Kanyakumari - Land's End</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {kanyakumariData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🌤️ Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather for sightseeing</p>
                <p><span style={styles.highlight}>Chitra Pournami:</span> Festival (April-May)</p>
                <p><span style={styles.highlight}>Monsoon:</span> Lush greenery but ferry may be affected</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Train:</span> Kanyakumari Railway Station</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected via NH44</p>
                <p><span style={styles.highlight}>Nearest Airport:</span> Trivandrum (90 km)</p>
              </div>

              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🎯 Must Experience</h3>
                <p>• Sunrise and sunset viewing</p>
                <p>• Ferry ride to Vivekananda Rock</p>
                <p>• Visit to Thiruvalluvar Statue</p>
                <p>• Fresh seafood dining</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Kanyakumari Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Experience</h4>
                  <p>How was your visit to Land's End?</p>
                  {userRatings.overall ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.overall.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.overall.rating)}
                      </div>
                      {userRatings.overall.review && (
                        <p><strong>Review:</strong> {userRatings.overall.review}</p>
                      )}
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'overall', type: 'Overall Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Sunrise/Sunset Experience</h4>
                  <p>How spectacular were the views?</p>
                  {userRatings.sunrise ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.sunrise.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.sunrise.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'sunrise', type: 'Sunrise/Sunset Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Ferry & Rock Memorial</h4>
                  <p>How was the boat ride and memorial visit?</p>
                  {userRatings.ferry ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.ferry.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.ferry.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'ferry', type: 'Ferry & Rock Memorial' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'food':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods of Kanyakumari</h2>
            <div style={styles.grid}>
              {kanyakumariData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Best Place:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
                  <p><strong>Rating:</strong> <span style={styles.rating}>{food.rating}</span></p>
                  
                  {/* Rating for individual food items */}
                  <div style={{marginTop: '15px'}}>
                    {userRatings[food.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[food.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[food.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: food.name, type: food.name })}
                      >
                        Rate this Food
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'shopping':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Kanyakumari</h2>
            <div style={styles.grid}>
              {kanyakumariData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{item.category}</h3>
                  <p>{item.description}</p>
                  <p><strong>Best Places:</strong> {item.places.join(', ')}</p>
                  <p><strong>Price Range:</strong> <span style={styles.price}>{item.priceRange}</span></p>
                  <p><strong>Best Time to Buy:</strong> {item.bestTime}</p>
                  
                  {/* Rating for shopping categories */}
                  <div style={{marginTop: '15px'}}>
                    {userRatings[item.category] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[item.category].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[item.category].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: item.category, type: item.category })}
                      >
                        Rate Shopping Experience
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'hotels':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏨 Hotels & Stays in Kanyakumari</h2>
            <div style={styles.grid}>
              {kanyakumariData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{hotel.name}</h3>
                  <p><strong>Type:</strong> {hotel.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{hotel.price}</span></p>
                  <p><strong>Rating:</strong> <span style={styles.rating}>{hotel.rating}</span></p>
                  <p><strong>Location:</strong> {hotel.location}</p>
                  <p><strong>Distance:</strong> {hotel.distance}</p>
                  <p><strong>Facilities:</strong> {hotel.facilities.join(', ')}</p>
                  
                  {/* Rating for hotels */}
                  <div style={{marginTop: '15px'}}>
                    {userRatings[hotel.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[hotel.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[hotel.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: hotel.name, type: hotel.name })}
                      >
                        Rate this Hotel
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'places':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏛️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {kanyakumariData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{place.name}</h3>
                  <p>{place.description}</p>
                  <p><strong>Timing:</strong> <span style={styles.timing}>{place.timing}</span></p>
                  <p><strong>Entry Fee:</strong> {place.entryFee}</p>
                  <p><strong>Best Time to Visit:</strong> {place.bestTime}</p>
                  <p><strong>Highlights:</strong> {place.highlights.join(', ')}</p>
                  
                  {/* Rating for places */}
                  <div style={{marginTop: '15px'}}>
                    {userRatings[place.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[place.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[place.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: place.name, type: place.name })}
                      >
                        Rate this Place
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'precautions':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>⚠️ Travel Precautions & Tips</h2>
            <div style={styles.grid}>
              {kanyakumariData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Coastal Security:</strong> 1093 | <strong>Kanyakumari Tourism Office:</strong> +91-4652-246276</p>
            </div>
          </div>
        );

      default:
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Coming Soon</h2>
            <p>This section is under development.</p>
          </div>
        );
    }
  };

  // Rating Modal
  const RatingModal = () => {
    const [currentRating, setCurrentRating] = useState(0);

    if (!showRatingModal) return null;

    return (
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <h3 style={styles.modalTitle}>
            Rate {currentRatingItem?.type}
          </h3>
          
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <div style={styles.ratingStars}>
              {renderStars(currentRating, setCurrentRating)}
            </div>
            <p style={{marginTop: '10px'}}>
              {currentRating > 0 ? `You rated: ${currentRating} stars` : 'Select your rating'}
            </p>
          </div>

          <textarea
            style={styles.textarea}
            placeholder="Share your experience (optional)..."
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
          />

          <div style={styles.modalButtons}>
            <button 
              style={styles.submitButton}
              onClick={() => submitRating(currentRating)}
              disabled={currentRating === 0}
            >
              Submit Rating
            </button>
            <button 
              style={styles.cancelButton}
              onClick={() => setShowRatingModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🌊 Kanyakumari - Land's End</h1>
        <p style={styles.subtitle}>Complete Travel Guide to India's Southernmost Tip</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'shopping', 'hotels', 'places', 'precautions'].map(tab => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' && '📖 Overview'}
            {tab === 'food' && '🍽️ Food'}
            {tab === 'shopping' && '🛍️ Shopping'}
            {tab === 'hotels' && '🏨 Hotels'}
            {tab === 'places' && '🏛️ Places'}
            {tab === 'precautions' && '⚠️ Tips'}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {renderContent()}
      </div>

      <RatingModal />
    </div>
  );
};

export default KanyakumariTravelGuide;