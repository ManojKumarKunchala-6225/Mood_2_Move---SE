import React, { useState } from 'react';

const SabarimalaTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Sabarimala Images for Carousel
  const sabarimalaImages = [
    {
      url: "https://media.istockphoto.com/id/1353922374/photo/sabarimala-lord-ayyappa-temple-keral.webp?a=1&b=1&s=612x612&w=0&k=20&c=ULpDumMY-SeRlBNE35a_yFgh9tUqHgXS5XPsNZ8ITKo=",
      title: "Sabarimala Temple",
      description: "The sacred hill shrine of Lord Ayyappa"
    },
    {
      url: "https://images.unsplash.com/photo-1710439672382-87cab6b75e15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=392",
      title: "Pathinettam Padi",
      description: "The holy 18 golden steps to the sanctum"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1669047670004-e952cb988335?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFtYmElMjByaXZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      title: "Pamba River",
      description: "Sacred river where pilgrims take holy dip"
    },
    {
      url: "https://images.unsplash.com/photo-1677252451874-85a4c84b53fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435",
      title: "Forest Trek",
      description: "The traditional forest path to Sabarimala"
    },
    {
      url: "https://images.unsplash.com/photo-1706392925777-6208f7b8f2e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435",
      title: "Makara Jyothi",
      description: "The celestial light witnessed during Makaravilakku"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#fffaf0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #8B4513, #D2691E)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(139, 69, 19, 0.3)'
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
      backgroundColor: '#8B4513',
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
      color: '#8B4513',
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
      backgroundColor: '#fff8f0',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #D2691E',
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
      backgroundColor: '#8B4513',
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
      backgroundColor: '#fff8f0',
      borderRadius: '5px',
      borderLeft: '3px solid #D2691E'
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
      color: '#8B4513',
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
      backgroundColor: '#D2691E',
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
      backgroundColor: '#8B4513',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(139, 69, 19, 0.4)'
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
      color: '#8B4513',
      borderBottom: '3px solid #D2691E',
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
      backgroundColor: '#fff8f0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #D2691E',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 69, 19, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#8B4513',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#D2691E',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Sabarimala Travel Data
  const sabarimalaData = {
    overview: {
      title: "Sabarimala - Sacred Hill Shrine",
      content: `Sabarimala is one of the most famous and prominent Hindu pilgrimage centers in India, located in the Western Ghat mountain ranges of Pathanamthitta District in Kerala. The temple is dedicated to Lord Ayyappa, who is also known as Dharma Shastha. Situated at an altitude of 1260 meters above sea level, Sabarimala is surrounded by mountains and dense forests. The pilgrimage season begins in November and ends in January. The temple attracts millions of devotees every year, making it one of the largest annual pilgrimages in the world. The sacred 18 steps (Pathinettam Padi) leading to the sanctum sanctorum are of prime importance.`
    },
    famousFoods: [
      {
        name: "Aravana Payasam",
        description: "Sweet rice pudding offered as prasadam",
        place: "Temple counters, Annadanam halls",
        price: "₹50-100",
        special: "Sacred temple prasadam"
      },
      {
        name: "Appam",
        description: "Sweet rice cake offered to Lord Ayyappa",
        place: "Temple counters, Local shops",
        price: "₹30-50",
        special: "Traditional offering"
      },
      {
        name: "Ghee Abhishekam",
        description: "Ghee used for ceremonial bathing of deity",
        place: "Temple sanctum",
        price: "Donation based",
        special: "Ritual offering"
      },
      {
        name: "Kerala Sadya",
        description: "Traditional vegetarian feast",
        place: "Annadanam halls, Local restaurants",
        price: "₹100-200",
        special: "Complete traditional meal"
      },
      {
        name: "Prasadam Packets",
        description: "Packaged temple offerings",
        place: "Temple counters",
        price: "₹30-150",
        special: "Blessed food from temple"
      }
    ],
    shopping: [
      {
        category: "Pooja Items",
        description: "Religious items for worship and offerings",
        places: ["Shops near Pamba", "Nilakkal market", "Temple counters"],
        items: ["Irumudi kits", "Camphor", "Incense sticks", "Vibhuti"],
        priceRange: "₹100 - ₹2000",
        bestTime: "Pilgrimage season"
      },
      {
        category: "Ayyappa Memorabilia",
        description: "Religious souvenirs and mementos",
        places: ["Shops near temple", "Pamba market", "Online stores"],
        items: ["Lockets", "Photos", "CDs", "Books"],
        priceRange: "₹50 - ₹1000",
        bestTime: "Throughout the year"
      },
      {
        category: "Traditional Kerala Items",
        description: "Local handicrafts and traditional items",
        places: ["Local markets", "Government emporium"],
        items: ["Handloom clothes", "Wooden crafts", "Spices"],
        priceRange: "₹200 - ₹5000",
        bestTime: "Tourist season"
      },
      {
        category: "Medicinal Herbs",
        description: "Ayurvedic herbs from Western Ghats",
        places: ["Authorized shops", "Ayurveda centers"],
        items: ["Medicinal oils", "Herbal powders", "Kashayam"],
        priceRange: "₹150 - ₹3000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "KTDC Hotels",
        type: "Government Accommodation",
        price: "₹1,500-4,000/night",
        rating: "4.2/5",
        facilities: ["Basic Amenities", "Food", "Parking", "Security"],
        location: "Pamba, Nilakkal",
        distance: "Base camps for pilgrimage"
      },
      {
        name: "Devotee Accommodation",
        type: "Free/Low-cost Stay",
        price: "Free - ₹500/night",
        rating: "3.8/5",
        facilities: ["Dormitory", "Basic Facilities", "Food Counters"],
        location: "Pamba, Nilakkal",
        distance: "Near starting points"
      },
      {
        name: "Private Lodges",
        type: "Budget Hotels",
        price: "₹800-2,500/night",
        rating: "3.5/5",
        facilities: ["Private Rooms", "Attached Bath", "Food"],
        location: "Pamba, Erumeli",
        distance: "Near pilgrimage routes"
      },
      {
        name: "Resorts in Pathanamthitta",
        type: "Comfort Stay",
        price: "₹2,000-8,000/night",
        rating: "4.0/5",
        facilities: ["AC Rooms", "Restaurant", "Travel Desk"],
        location: "Pathanamthitta Town",
        distance: "40-60 km from Sabarimala"
      },
      {
        name: "Dormitory Accommodation",
        type: "Mass Accommodation",
        price: "₹100-300/night",
        rating: "3.2/5",
        facilities: ["Shared Rooms", "Common Bathrooms", "Security"],
        location: "Pamba area",
        distance: "Walking distance to temple"
      }
    ],
    places: [
      {
        name: "Sabarimala Temple",
        description: "Main shrine of Lord Ayyappa with golden flag mast",
        timing: "Seasonal - Mostly 5:00 AM - 11:00 PM",
        entryFee: "Free, Special darshan tickets available",
        bestTime: "Mandala-Makaravilakku season",
        highlights: ["Main Sanctum", "Pathinettam Padi", "Golden Flag Mast"]
      },
      {
        name: "Pamba River",
        description: "Sacred river where pilgrims take holy dip before trek",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Early morning",
        highlights: ["Holy Bath", "Religious Ceremonies", "Scenic Beauty"]
      },
      {
        name: "Erumeli",
        description: "Important starting point for pilgrimage with Petta Temple",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Pilgrimage season",
        highlights: ["Petta Temple", "Traditional Start", "Cultural Significance"]
      },
      {
        name: "Nilakkal",
        description: "Base camp with extensive facilities for pilgrims",
        timing: "24 hours during season",
        entryFee: "Free",
        bestTime: "Throughout pilgrimage season",
        highlights: ["Base Camp", "Facilities", "Transport Hub"]
      },
      {
        name: "Malikappuram",
        description: "Shrine dedicated to Malikappurathamma near main temple",
        timing: "Same as main temple",
        entryFee: "Free",
        bestTime: "Regular temple hours",
        highlights: ["Malikappurathamma Temple", "Offerings", "Religious Significance"]
      },
      {
        name: "Sannidhanam",
        description: "The temple complex area with various shrines",
        timing: "Seasonal temple hours",
        entryFee: "Free",
        bestTime: "Early morning darshan",
        highlights: ["Main Temple", "Other Shrines", "Religious Atmosphere"]
      }
    ],
    precautions: [
      {
        category: "Religious Customs",
        tips: [
          "Strict 41-day Vratham (austerities) mandatory",
          "Only men and women above 50/ below 10 allowed",
          "Wear black/blue/saffron colored clothes",
          "Follow celibacy during Vratham period"
        ]
      },
      {
        category: "Trek Preparation",
        tips: [
          "Carry Irumudi (traditional pilgrim bundle)",
          "Wear comfortable trekking shoes",
          "Carry minimal essentials only",
          "Be prepared for 4-5 km forest trek"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines and first-aid",
          "Stay hydrated during trek",
          "Be cautious on steep paths",
          "Follow COVID protocols if applicable"
        ]
      },
      {
        category: "Documentation",
        tips: [
          "Carry identity proof",
          "Keep pilgrimage booking confirmation",
          "Save emergency contacts",
          "Keep valuables secure"
        ]
      },
      {
        category: "General Guidelines",
        tips: [
          "Respect temple traditions and customs",
          "Follow queue systems patiently",
          "Keep environment clean",
          "Cooperate with police and volunteers"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === sabarimalaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? sabarimalaImages.length - 1 : prevIndex - 1
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
                src={sabarimalaImages[currentImageIndex].url} 
                alt={sabarimalaImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{sabarimalaImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{sabarimalaImages[currentImageIndex].description}</p>
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
                {sabarimalaImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🛕 About Sabarimala - Sacred Pilgrimage</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {sabarimalaData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>📅 Pilgrimage Seasons</h3>
                <p><span style={styles.highlight}>Mandala Season:</span> November 15 - December 26</p>
                <p><span style={styles.highlight}>Makaravilakku:</span> January 14 (approx)</p>
                <p><span style={styles.highlight}>Vishu:</span> April 14 (approx)</p>
                <p><span style={styles.highlight}>First 5 days:</span> Every Malayalam month</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Kochi Airport (160 km), Trivandrum (170 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Chengannur (90 km), Kottayam (100 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected to Pamba and Nilakkal</p>
                <p><span style={styles.highlight}>Trek:</span> 4-5 km from Pamba to Sannidhanam</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Sabarimala Experience</h3>
              <p>Share your spiritual experience and help other devotees</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Pilgrimage Experience</h4>
                  <p>How was your spiritual journey?</p>
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
                  <h4>Spiritual Atmosphere</h4>
                  <p>How was the divine environment?</p>
                  {userRatings.spiritual ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.spiritual.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.spiritual.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'spiritual', type: 'Spiritual Atmosphere' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Trek Experience</h4>
                  <p>How was the forest trek to temple?</p>
                  {userRatings.trek ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.trek.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.trek.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'trek', type: 'Trek Experience' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Temple Prasadam & Local Food</h2>
            <div style={styles.grid}>
              {sabarimalaData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Available At:</strong> {food.place}</p>
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
                        Rate this Prasadam
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
            <h2 style={styles.sectionTitle}>🛍️ Religious Shopping</h2>
            <div style={styles.grid}>
              {sabarimalaData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{item.category}</h3>
                  <p>{item.description}</p>
                  <p><strong>Available At:</strong> {item.places.join(', ')}</p>
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
            <h2 style={styles.sectionTitle}>🏨 Accommodation & Stay</h2>
            <div style={styles.grid}>
              {sabarimalaData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛕 Important Places</h2>
            <div style={styles.grid}>
              {sabarimalaData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{place.name}</h3>
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
            <h2 style={styles.sectionTitle}>⚠️ Pilgrimage Guidelines & Precautions</h2>
            <div style={styles.grid}>
              {sabarimalaData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{category.category}</h3>
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
            
            <div style={{...styles.warning, marginTop: '20px'}}>
              <h4>🚨 Emergency Contacts</h4>
              <p><strong>Police Control Room:</strong> 112 | <strong>Ambulance:</strong> 108</p>
              <p><strong>Devaswom Board:</strong> 04735-202202 | <strong>Fire Station:</strong> 101</p>
              <p><strong>Medical Help:</strong> 04735-203226 | <strong>Transport Help:</strong> 04735-202048</p>
              <p><strong>Pilgrim Assistance:</strong> 04735-202048</p>
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
            placeholder="Share your spiritual experience (optional)..."
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
        <h1 style={styles.title}>🛕 Sabarimala</h1>
        <p style={styles.subtitle}>Sacred Abode of Lord Ayyappa - Divine Pilgrimage</p>
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
                e.target.style.backgroundColor = '#D2691E';
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
            {tab === 'food' && '🍽️ Prasadam'}
            {tab === 'shopping' && '🛍️ Shopping'}
            {tab === 'hotels' && '🏨 Stay'}
            {tab === 'places' && '🛕 Places'}
            {tab === 'precautions' && '⚠️ Guidelines'}
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
        marginTop: '40px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Sabarimala Travel Guide. Experience the Divine Pilgrimage!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with 🙏 for devotees of Lord Ayyappa
        </p>
      </div>
    </div>
  );
};

export default SabarimalaTravelGuide;
