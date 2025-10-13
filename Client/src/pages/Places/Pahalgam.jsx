import React, { useState } from 'react';

const PahalgamTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Pahalgam Images for Carousel
  const pahalgamImages = [
    {
      url: "https://images.unsplash.com/photo-1580651315530-4c6c5d5a1c0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFoYWxnYW0lMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Lidder River Valley",
      description: "Crystal clear Lidder River flowing through picturesque valleys"
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFoYWxnYW0lMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Snow-capped Himalayas",
      description: "Breathtaking views of Himalayan peaks surrounding Pahalgam"
    },
    {
      url: "https://images.unsplash.com/photo-1579033064562-6d4ab36fdf6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmV0YWJpbiUyMGtob3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Betaab Valley",
      description: "Stunning valley named after the Bollywood movie Betaab"
    },
    {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ1JTIwdmFsbGV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Aru Valley",
      description: "Base camp for trekking to Kolahoi Glacier and other adventures"
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhaGFsZ2FtJTIwdHJla2tpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Meadows and Trekking",
      description: "Lush green meadows perfect for trekking and pony rides"
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
      marginBottom: '40px',
      marginTop: '30px',
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
      marginBottom: '40px',
      marginTop: '20px',
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
      backgroundColor: '#1e3c72',
      transform: 'scale(1.2)'
    },
    // Rating Styles
    ratingSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '30px',
      marginBottom: '20px',
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
      border: '2px solid #2a5298',
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
      backgroundColor: '#1e3c72',
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
      borderLeft: '3px solid #2a5298'
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
      backgroundColor: '#2a5298',
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
      marginBottom: '40px',
      marginTop: '20px',
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
      minHeight: '500px',
      marginTop: '20px'
    },
    section: {
      marginBottom: '40px',
      marginTop: '20px'
    },
    sectionTitle: {
      color: '#1e3c72',
      borderBottom: '3px solid #2a5298',
      paddingBottom: '15px',
      marginBottom: '30px',
      marginTop: '20px',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '30px'
    },
    card: {
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #2a5298',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(30, 60, 114, 0.1)',
      marginTop: '15px'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '20px 0',
      marginTop: '25px'
    },
    highlight: {
      color: '#1e3c72',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#2a5298',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Pahalgam Travel Data
  const pahalgamData = {
    overview: {
      title: "Pahalgam - The Valley of Shepherds",
      content: `Pahalgam, often called the 'Valley of Shepherds', is a breathtaking hill station in the Anantnag district of Jammu and Kashmir. Situated at an altitude of 2,130 meters (7,000 feet) on the banks of the Lidder River, Pahalgam serves as the base camp for the annual Amarnath Yatra pilgrimage. This picturesque destination is surrounded by lush green meadows, dense pine forests, and snow-capped Himalayan peaks. Pahalgam is famous for its stunning valleys including Betaab Valley (named after the Bollywood movie), Aru Valley, and Chandanwari. The town offers numerous adventure activities like trekking, horse riding, fishing, and golfing. With its serene environment, pleasant climate, and breathtaking landscapes, Pahalgam has been a favorite destination for filmmakers, nature lovers, and adventure enthusiasts for decades.`
    },
    famousFoods: [
      {
        name: "Kashmiri Wazwan",
        description: "Multi-course traditional Kashmiri feast",
        place: "Local restaurants, Hotels",
        price: "₹500-1,500",
        special: "Authentic Kashmiri culinary experience"
      },
      {
        name: "Rogan Josh",
        description: "Aromatic lamb curry with Kashmiri spices",
        place: "Local dhabas, Restaurants",
        price: "₹300-600",
        special: "Signature Kashmiri dish"
      },
      {
        name: "Gushtaba",
        description: "Minced meatballs in yogurt gravy",
        place: "Traditional eateries, Hotels",
        price: "₹350-700",
        special: "Royal Kashmiri delicacy"
      },
      {
        name: "Kahwa",
        description: "Traditional Kashmiri green tea with spices",
        place: "Tea stalls, Hotels",
        price: "₹50-150",
        special: "Warming Kashmiri beverage"
      },
      {
        name: "Nadru Yakhni",
        description: "Lotus stem in yogurt gravy",
        place: "Local restaurants",
        price: "₹200-400",
        special: "Vegetarian Kashmiri specialty"
      }
    ],
    shopping: [
      {
        category: "Kashmiri Handicrafts",
        description: "Traditional Kashmiri crafts and artifacts",
        places: ["Local markets", "Government emporium"],
        items: ["Pashmina shawls", "Paper mache", "Wood carving", "Carpets"],
        priceRange: "₹500 - ₹50,000",
        bestTime: "Year-round"
      },
      {
        category: "Dry Fruits & Saffron",
        description: "Premium Kashmiri dry fruits and saffron",
        places: ["Local markets", "Specialty stores"],
        items: ["Almonds", "Walnuts", "Saffron", "Apricots"],
        priceRange: "₹200 - ₹5,000",
        bestTime: "Winter season"
      },
      {
        category: "Woolen Garments",
        description: "Handmade Kashmiri woolen items",
        places: ["Local shops", "Street vendors"],
        items: ["Pherans", "Woolen caps", "Gloves", "Socks"],
        priceRange: "₹300 - ₹8,000",
        bestTime: "Winter months"
      },
      {
        category: "Local Honey",
        description: "Pure Himalayan honey",
        places: ["Local beekeepers", "Markets"],
        items: ["Wildflower honey", "Pine honey", "Multiflora honey"],
        priceRange: "₹200 - ₹1,500",
        bestTime: "Harvest season"
      }
    ],
    hotels: [
      {
        name: "Hotel Heevan Pahalgam",
        type: "4-Star Luxury Hotel",
        price: "₹6,000-15,000/night",
        rating: "4.4/5",
        facilities: ["River view", "Restaurant", "Spa", "Adventure activities"],
        location: "Pahalgam",
        distance: "On banks of Lidder River"
      },
      {
        name: "Pine-n-Peak Resort",
        type: "Premium Resort",
        price: "₹4,000-10,000/night",
        rating: "4.2/5",
        facilities: ["Mountain view", "Restaurant", "Bonfire", "Trekking"],
        location: "Pahalgam",
        distance: "Near Betaab Valley"
      },
      {
        name: "Hotel Mountview",
        type: "Mid-range Hotel",
        price: "₹2,500-6,000/night",
        rating: "4.0/5",
        facilities: ["Restaurant", "Travel desk", "Parking", "Garden"],
        location: "Pahalgam",
        distance: "Town center"
      },
      {
        name: "JKTDC Huts",
        type: "Government Accommodation",
        price: "₹1,500-4,000/night",
        rating: "3.8/5",
        facilities: ["Basic amenities", "Restaurant", "Scenic location"],
        location: "Pahalgam",
        distance: "Various locations"
      },
      {
        name: "Budget Guest Houses",
        type: "Economy Accommodation",
        price: "₹800-2,500/night",
        rating: "3.5/5",
        facilities: ["Basic rooms", "Home-cooked food", "Local experience"],
        location: "Pahalgam town",
        distance: "Walking distance to market"
      }
    ],
    places: [
      {
        name: "Betaab Valley",
        description: "Picturesque valley named after Bollywood movie Betaab",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "₹50 per person",
        bestTime: "April to October",
        highlights: ["River streams", "Photography", "Horse riding", "Scenic beauty"]
      },
      {
        name: "Aru Valley",
        description: "Base camp for trekking to Kolahoi Glacier",
        timing: "Daylight hours",
        entryFee: "Free (Activities extra)",
        bestTime: "May to September",
        highlights: ["Trekking", "Pony rides", "Mountain views", "Camping"]
      },
      {
        name: "Chandanwari",
        description: "Starting point of Amarnath Yatra and snow point",
        timing: "7:00 AM - 4:00 PM",
        entryFee: "Free",
        bestTime: "May to July",
        highlights: ["Snow point", "Sledge rides", "Amarnath base", "Scenic drive"]
      },
      {
        name: "Lidder River",
        description: "Crystal clear river perfect for fishing and walks",
        timing: "Open 24 hours",
        entryFee: "Free",
        bestTime: "Year-round",
        highlights: ["Riverside walks", "Fishing", "Photography", "Picnics"]
      },
      {
        name: "Baisaran Valley",
        description: "Beautiful meadow known as 'Mini Switzerland'",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "Pony ride charges apply",
        bestTime: "April to November",
        highlights: ["Meadows", "Pony rides", "Photography", "Nature walks"]
      },
      {
        name: "Mamleshwar Temple",
        description: "Ancient Shiva temple with historical significance",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning hours",
        highlights: ["Religious significance", "Architecture", "Peaceful environment"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry warm clothes even in summer",
          "Waterproof jackets and shoes essential",
          "Layered clothing for changing temperatures",
          "Sunglasses and sunscreen for high altitude"
        ]
      },
      {
        category: "Trekking & Adventure",
        tips: [
          "Hire experienced local guides for treks",
          "Carry proper trekking equipment",
          "Check weather conditions before starting",
          "Inform someone about your trekking plans"
        ]
      },
      {
        category: "Health & Altitude",
        tips: [
          "Acclimatize properly to avoid altitude sickness",
          "Carry necessary medications",
          "Stay hydrated and avoid alcohol",
          "Carry first aid kit"
        ]
      },
      {
        category: "Travel Documents",
        tips: [
          "Carry valid ID proof at all times",
          "Keep permits and passes handy",
          "Save emergency contacts",
          "Keep hotel details with you"
        ]
      },
      {
        category: "Local Guidelines",
        tips: [
          "Respect local customs and traditions",
          "Follow security guidelines",
          "Dress modestly in religious places",
          "Avoid photography in restricted areas"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === pahalgamImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? pahalgamImages.length - 1 : prevIndex - 1
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
                src={pahalgamImages[currentImageIndex].url} 
                alt={pahalgamImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{pahalgamImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{pahalgamImages[currentImageIndex].description}</p>
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
                {pahalgamImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Pahalgam - Valley of Shepherds</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {pahalgamData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>April to October:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>May to July:</span> Best for Amarnath Yatra and adventure</p>
                <p><span style={styles.highlight}>December to February:</span> Snow season, winter sports</p>
                <p><span style={styles.highlight}>March to April:</span> Spring blooms, moderate weather</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Srinagar Airport (95 km from Pahalgam)</p>
                <p><span style={styles.highlight}>By Train:</span> Jammu Tawi Railway Station (255 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Srinagar, Jammu</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Buses, Pony rides</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Pahalgam Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Valley Experience</h4>
                  <p>How was your visit to Pahalgam's beautiful valleys?</p>
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
                  <h4>Betaab Valley Experience</h4>
                  <p>How was your visit to the famous Betaab Valley?</p>
                  {userRatings.betaab ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.betaab.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.betaab.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'betaab', type: 'Betaab Valley' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Adventure Activities</h4>
                  <p>How were the trekking and adventure experiences?</p>
                  {userRatings.adventure ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.adventure.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.adventure.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'adventure', type: 'Adventure Activities' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Kashmiri Cuisine</h2>
            <div style={styles.grid}>
              {pahalgamData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Pahalgam</h2>
            <div style={styles.grid}>
              {pahalgamData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{item.category}</h3>
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
            <h2 style={styles.sectionTitle}>🏨 Hotels & Resorts</h2>
            <div style={styles.grid}>
              {pahalgamData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏔️ Famous Valleys & Places</h2>
            <div style={styles.grid}>
              {pahalgamData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{place.name}</h3>
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
              {pahalgamData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Women Helpline:</strong> 1091</p>
              <p><strong>Pahalgam Police:</strong> 01936-243233 | <strong>Hospital:</strong> 01936-243202</p>
              <p><strong>Tourist Information:</strong> 01936-243224 | <strong>Rescue Services:</strong> 01936-243210</p>
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
        <h1 style={styles.title}>🏔️ Pahalgam</h1>
        <p style={styles.subtitle}>Valley of Shepherds - Paradise in Kashmir</p>
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
                e.target.style.backgroundColor = '#2a5298';
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
        marginTop: '50px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Pahalgam Travel Guide. Experience the Valley of Shepherds!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the paradise of Kashmir
        </p>
      </div>
    </div>
  );
};

export default PahalgamTravelGuide;