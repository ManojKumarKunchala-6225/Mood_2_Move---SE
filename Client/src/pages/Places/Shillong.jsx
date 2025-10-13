import React, { useState } from 'react';

const ShillongTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Shillong Images for Carousel
  const shillongImages = [
    {
      url: "https://media.istockphoto.com/id/2148423299/photo/shillong-city-buildings-with-mountains-and-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=BSWmD8agFpbL7j9Qxx2m6jJEfXLTjtm10Hzf0mc2aa0=",
      title: "Shillong City View",
      description: "Scotland of the East with rolling hills and colonial architecture"
    },
    {
      url: "https://media.istockphoto.com/id/1256329737/photo/the-umiam-lake-in-shillong-meghalaya-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ul8eCfFy0QOCm7_v19fyA3llHAm_oIUcG6V9yl3khgY=",
      title: "Umiam Lake",
      description: "Stunning man-made reservoir surrounded by lush green hills"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1749499938590-40291c621d2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9saWNlJTIwYmF6YWFyJTIwaW4lMjBzaGlsbG9uZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      title: "Police Bazaar",
      description: "The main commercial hub and shopping area of Shillong"
    },
    {
      url: "https://unsplash.com/s/illustrations/charapunji-in-shillong",
      title: "Cherrapunji",
      description: "One of the wettest places on earth with breathtaking waterfalls"
    },
    {
      url: "https://media.istockphoto.com/id/1208987966/photo/living-root-bridge-handmade-from-the-aerial-roots-of-rubber-fig-trees-by-the-khasi-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=KFHfhVjKd8FaTNnJH7gRqFTLx_QrYahb17-xjqvCF44=",
      title: "Living Root Bridges",
      description: "Unique natural bridges grown from rubber tree roots"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#f0f8ff',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      marginTop: '40px',
      padding: '40px',
      background: 'linear-gradient(135deg, #4682B4, #87CEEB)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(70, 130, 180, 0.3)'
    },
    title: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    subtitle: {
      fontSize: '1.5rem',
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
      marginBottom: '50px',
      marginTop: '30px',
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
      backgroundColor: '#4682B4',
      transform: 'scale(1.2)'
    },
    // Rating Styles
    ratingSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '40px',
      marginBottom: '30px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    ratingTitle: {
      color: '#4682B4',
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
      border: '2px solid #87CEEB',
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
      backgroundColor: '#4682B4',
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
      backgroundColor: '#f0f8ff',
      borderRadius: '5px',
      borderLeft: '3px solid #87CEEB'
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
      color: '#4682B4',
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
      backgroundColor: '#87CEEB',
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
    // Tab Styles
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '50px',
      marginTop: '30px',
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
      backgroundColor: '#4682B4',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(70, 130, 180, 0.4)'
    },
    content: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      minHeight: '500px',
      marginTop: '30px'
    },
    section: {
      marginBottom: '50px',
      marginTop: '30px'
    },
    sectionTitle: {
      color: '#4682B4',
      borderBottom: '3px solid #87CEEB',
      paddingBottom: '15px',
      marginBottom: '40px',
      marginTop: '30px',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '40px'
    },
    card: {
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #87CEEB',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(70, 130, 180, 0.1)',
      marginTop: '20px'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '30px 0',
      marginTop: '35px'
    },
    highlight: {
      color: '#4682B4',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#87CEEB',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Shillong Travel Data
  const shillongData = {
    overview: {
      title: "Shillong - Scotland of the East",
      content: `Shillong, the capital city of Meghalaya, is often called the 'Scotland of the East' due to its striking similarity with the Scottish highlands. Nestled in the northeastern part of India at an altitude of 1,496 meters, Shillong is renowned for its pleasant climate, rolling hills, cascading waterfalls, and vibrant culture. The city served as the capital of Assam during British rule and continues to charm visitors with its colonial architecture, lush golf courses, and the unique Khasi culture. Shillong is also famous as the 'Rock Capital of India' for its thriving live music scene. Surrounded by pine forests, waterfalls, and crystal-clear lakes, it offers a perfect blend of natural beauty and urban sophistication.`
    },
    famousFoods: [
      {
        name: "Jadoh",
        description: "Traditional Khasi rice dish cooked with meat and spices",
        place: "Local Khasi eateries, Police Bazaar",
        price: "₹120-250",
        special: "Signature dish of Khasi cuisine"
      },
      {
        name: "Doh Neiiong",
        description: "Pork cooked with black sesame seeds and spices",
        place: "Traditional restaurants, Local homes",
        price: "₹180-300",
        special: "Rich and flavorful pork curry"
      },
      {
        name: "Tungrymbai",
        description: "Fermented soybean chutney with pork or fish",
        place: "Local markets, Traditional eateries",
        price: "₹80-150",
        special: "Unique fermented flavor"
      },
      {
        name: "Pumaloi",
        description: "Traditional rice powder cooked in special pot",
        place: "Khasi food stalls, Local restaurants",
        price: "₹60-120",
        special: "Soft and fluffy rice preparation"
      },
      {
        name: "Kyat",
        description: "Local rice beer - traditional beverage",
        place: "Local breweries, Cultural events",
        price: "₹50-100",
        special: "Traditional fermented drink"
      }
    ],
    shopping: [
      {
        category: "Handicrafts & Handlooms",
        description: "Traditional Khasi handicrafts and woven products",
        places: ["Police Bazaar", "Bara Bazaar", "Government Emporium"],
        items: ["Shillong shawls", "Bamboo crafts", "Cane products", "Traditional jewelry"],
        priceRange: "₹200 - ₹10,000",
        bestTime: "Year-round"
      },
      {
        category: "Local Handmade Products",
        description: "Authentic Meghalaya handmade items",
        places: ["Local markets", "Craft centers", "Roadside stalls"],
        items: ["Knitted woolens", "Handmade paper", "Wood carvings", "Local honey"],
        priceRange: "₹150 - ₹5,000",
        bestTime: "Winter season"
      },
      {
        category: "Musical Instruments",
        description: "Traditional and modern musical instruments",
        places: ["Police Bazaar", "Specialty music stores"],
        items: ["Guitars", "Drums", "Traditional flutes", "String instruments"],
        priceRange: "₹500 - ₹20,000",
        bestTime: "Year-round"
      },
      {
        category: "Local Tea & Coffee",
        description: "Meghalaya-grown tea and coffee products",
        places: ["Specialty stores", "Government outlets"],
        items: ["Local tea leaves", "Coffee beans", "Tea blends", "Gift packs"],
        priceRange: "₹200 - ₹2,000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Ri Kynjai - Serenity by The Lake",
        type: "Luxury Resort",
        price: "₹7,000-20,000/night",
        rating: "4.7/5",
        facilities: ["Lake view", "Spa", "Fine dining", "Swimming pool"],
        location: "Umiam Lake",
        distance: "15 km from city center"
      },
      {
        name: "Polo Towers Shillong",
        type: "4-Star Business Hotel",
        price: "₹4,000-12,000/night",
        rating: "4.3/5",
        facilities: ["Restaurant", "Bar", "Conference rooms", "Parking"],
        location: "Police Bazaar",
        distance: "City center location"
      },
      {
        name: "Hotel Centre Point",
        type: "Mid-range Hotel",
        price: "₹2,500-8,000/night",
        rating: "4.1/5",
        facilities: ["Restaurant", "Travel Desk", "Parking", "AC Rooms"],
        location: "Police Bazaar",
        distance: "Heart of the city"
      },
      {
        name: "The Heritage Club",
        type: "Boutique Heritage Hotel",
        price: "₹3,000-9,000/night",
        rating: "4.4/5",
        facilities: ["Garden", "Restaurant", "Heritage rooms", "Library"],
        location: "Laitumkhrah",
        distance: "2 km from city center"
      },
      {
        name: "Budget Hotels & Guest Houses",
        type: "Economy Accommodation",
        price: "₹800-2,500/night",
        rating: "3.5/5",
        facilities: ["Basic Rooms", "Attached Bath", "Food Available"],
        location: "Various locations in city",
        distance: "Walking distance to markets"
      }
    ],
    places: [
      {
        name: "Umiam Lake",
        description: "Stunning man-made reservoir offering water sports and scenic views",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free (Activities extra)",
        bestTime: "Morning and Evening",
        highlights: ["Boating", "Water sports", "Photography", "Sunset views"]
      },
      {
        name: "Elephant Falls",
        description: "Three-tiered waterfall named by British after elephant-like rock",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "₹20 per person",
        bestTime: "Monsoon season",
        highlights: ["Waterfall views", "Nature walk", "Photography", "Rock formations"]
      },
      {
        name: "Shillong Peak",
        description: "Highest point in Shillong offering panoramic city views",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹50 per person",
        bestTime: "Clear morning",
        highlights: ["Bird's eye view", "Photography", "Sunrise/sunset", "Forest walk"]
      },
      {
        name: "Don Bosco Museum",
        description: "Seven-storied museum showcasing Northeast Indian culture",
        timing: "9:30 AM - 5:30 PM (Closed Sunday)",
        entryFee: "₹100 (Adults), ₹50 (Children)",
        bestTime: "Daytime",
        highlights: ["Cultural exhibits", "Sky walk", "Artifacts", "Traditional houses"]
      },
      {
        name: "Police Bazaar",
        description: "The main commercial and shopping hub of Shillong",
        timing: "9:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Evening",
        highlights: ["Shopping", "Local food", "People watching", "Street music"]
      },
      {
        name: "Ward's Lake",
        description: "Beautiful colonial-era lake with garden and boating",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "₹10 per person",
        bestTime: "Morning",
        highlights: ["Boating", "Gardens", "Bridge", "Photography"]
      },
      {
        name: "Cherrapunji",
        description: "Famous for being one of the wettest places on earth",
        timing: "24 hours",
        entryFee: "Free (Specific attractions may charge)",
        bestTime: "October to May",
        highlights: ["Living root bridges", "Waterfalls", "Caves", "Viewpoints"]
      },
      {
        name: "Mawlynnong",
        description: "Asia's cleanest village with living root bridges",
        timing: "Daylight hours",
        entryFee: "Free",
        bestTime: "Year-round",
        highlights: ["Cleanliness", "Root bridges", "Sky view", "Local culture"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry woolens throughout the year - evenings can be chilly",
          "Rain protection essential (umbrella/raincoat) - sudden showers common",
          "Comfortable walking shoes for exploring hills and waterfalls",
          "Layered clothing for changing weather conditions"
        ]
      },
      {
        category: "Travel & Transportation",
        tips: [
          "Hire local taxis for hill station visits - negotiate rates beforehand",
          "Be prepared for narrow, winding roads in hilly areas",
          "Public transport available but private vehicles more convenient",
          "Carry cash as remote areas may not accept cards"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines for motion sickness on hilly roads",
          "Stay hydrated but drink only bottled or purified water",
          "Be cautious while walking near waterfalls and slippery areas",
          "Keep emergency contacts and local police numbers saved"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Respect local Khasi traditions and customs",
          "Ask permission before photographing local people",
          "Dress modestly, especially in villages and religious sites",
          "Learn basic greetings in Khasi language"
        ]
      },
      {
        category: "Adventure & Exploration",
        tips: [
          "Use local guides for trekking and exploring remote areas",
          "Check weather conditions before visiting waterfalls",
          "Carry proper equipment for cave exploration",
          "Follow safety instructions at water sports activities"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === shillongImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? shillongImages.length - 1 : prevIndex - 1
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
    setCurrentRating(0);
  };

  const submitRating = () => {
    if (currentRatingItem && currentRating > 0) {
      const newRating = {
        rating: currentRating,
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
      setCurrentRating(0);
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
                src={shillongImages[currentImageIndex].url} 
                alt={shillongImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{shillongImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{shillongImages[currentImageIndex].description}</p>
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
                {shillongImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Shillong - Scotland of the East</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {shillongData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#4682B4', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>September to May:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>March to May:</span> Spring season, blooming flowers</p>
                <p><span style={styles.highlight}>June to August:</span> Monsoon, lush greenery but heavy rainfall</p>
                <p><span style={styles.highlight}>October to February:</span> Winter, chilly but perfect for woolens</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#4682B4', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Shillong Airport (Umroi) - 30 km from city</p>
                <p><span style={styles.highlight}>By Train:</span> Guwahati Railway Station - 100 km from Shillong</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Guwahati, Silchar, Agartala</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Local buses, Auto-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Shillong Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Hill Station Experience</h4>
                  <p>How was your visit to Scotland of the East?</p>
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
                  <h4>Natural Beauty & Landscapes</h4>
                  <p>How were the waterfalls, lakes and scenic views?</p>
                  {userRatings.nature ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.nature.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.nature.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'nature', type: 'Natural Beauty' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Local Culture & Food</h4>
                  <p>How was the Khasi culture and local cuisine experience?</p>
                  {userRatings.culture ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.culture.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.culture.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'culture', type: 'Local Culture & Food' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Khasi Foods & Local Cuisine</h2>
            <div style={styles.grid}>
              {shillongData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4682B4', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Best Place:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
                  <p><strong>Special:</strong> {food.special}</p>
                  
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Shillong</h2>
            <div style={styles.grid}>
              {shillongData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4682B4', marginBottom: '15px'}}>{item.category}</h3>
                  <p>{item.description}</p>
                  <p><strong>Best Places:</strong> {item.places.join(', ')}</p>
                  <p><strong>Popular Items:</strong> {item.items.join(', ')}</p>
                  <p><strong>Price Range:</strong> <span style={styles.price}>{item.priceRange}</span></p>
                  <p><strong>Best Time:</strong> {item.bestTime}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'hotels':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏨 Hotels & Accommodation</h2>
            <div style={styles.grid}>
              {shillongData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4682B4', marginBottom: '15px'}}>{hotel.name}</h3>
                  <p><strong>Type:</strong> {hotel.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{hotel.price}</span></p>
                  <p><strong>Rating:</strong> {hotel.rating}</p>
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
            <h2 style={styles.sectionTitle}>🏔️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {shillongData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4682B4', marginBottom: '15px'}}>{place.name}</h3>
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
            <h2 style={styles.sectionTitle}>⚠️ Travel Precautions & Tips</h2>
            <div style={styles.grid}>
              {shillongData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4682B4', marginBottom: '15px'}}>{category.category}</h3>
                  <ul style={{paddingLeft: '20px'}}>
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} style={{marginBottom: '10px', lineHeight: '1.5'}}>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div style={{...styles.warning, marginTop: '30px'}}>
              <h4>🚨 Emergency Contacts</h4>
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Women Helpline:</strong> 1091</p>
              <p><strong>Local Police (Shillong):</strong> 0364-2221000 | <strong>Hospital:</strong> 0364-2220133</p>
              <p><strong>Tourist Information Center:</strong> 0364-2224534</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Rating Modal Component
  const RatingModal = () => {
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
              style={{
                ...styles.submitButton,
                ...(currentRating === 0 ? { backgroundColor: '#ccc', cursor: 'not-allowed' } : {})
              }}
              onClick={submitRating}
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
        <h1 style={styles.title}>🏔️ Shillong Travel Guide</h1>
        <p style={styles.subtitle}>Scotland of the East - Where Clouds Touch the Hills</p>
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
                e.target.style.backgroundColor = '#87CEEB';
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' && '📖 Overview'}
            {tab === 'food' && '🍽️ Food'}
            {tab === 'shopping' && '🛍️ Shopping'}
            {tab === 'hotels' && '🏨 Hotels'}
            {tab === 'places' && '🏔️ Places'}
            {tab === 'precautions' && '⚠️ Precautions'}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {renderContent()}
      </div>

      <RatingModal />

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '60px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Shillong Travel Guide. Experience the Scotland of the East!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the beautiful hills of Meghalaya
        </p>
      </div>
    </div>
  );
};

export default ShillongTravelGuide;
