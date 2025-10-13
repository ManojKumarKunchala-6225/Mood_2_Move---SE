import React, { useState } from 'react';

const MahabalipuramTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Mahabalipuram Images for Carousel
  const mahabalipuramImages = [
    {
      url: "https://images.unsplash.com/photo-1717522692051-78f400c96270?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcmUlMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Shore Temple",
      description: "UNESCO World Heritage Site by the Bay of Bengal"
    },
    {
      url: "https://images.unsplash.com/photo-1740727263526-106ea10a355a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuY2hhJTIwUmF0aGFzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Pancha Rathas",
      description: "Five monolithic rock-cut temples"
    },
    {
      url: "https://images.unsplash.com/photo-1713986720216-4abc6d414c82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJqdW5hJ3MlMjBQZW5hbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Arjuna's Penance",
      description: "Giant open-air rock relief"
    },
    
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fffaf0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #8B4513, #CD853F)',
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
      backgroundColor: '#fffaf0',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #f5e6d3',
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
      backgroundColor: '#f0f8ff',
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
      borderBottom: '3px solid #CD853F',
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
      backgroundColor: '#fffaf0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #f5e6d3',
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
      color: '#388e3c',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Mahabalipuram Travel Data
  const mahabalipuramData = {
    overview: {
      title: "Mahabalipuram - UNESCO World Heritage Site",
      content: `Mahabalipuram, also known as Mamallapuram, is a historic town in Tamil Nadu famous for its 7th and 8th-century Hindu monuments. A UNESCO World Heritage Site, it showcases magnificent rock-cut architecture from the Pallava dynasty. The town is renowned for its shore temple, rock reliefs, and stone carvings that depict scenes from Hindu mythology.`
    },
    famousFoods: [
      {
        name: "Seafood Platter",
        description: "Fresh catch from Bay of Bengal with traditional spices",
        place: "Sea Shore Restaurant, Moonrakers",
        price: "₹400-800",
        special: "Daily fresh catch"
      },
      {
        name: "Chettinad Fish Curry",
        description: "Spicy traditional Tamil fish preparation",
        place: "Local restaurants, Beach shacks",
        price: "₹250-500",
        special: "Authentic Chettinad recipe"
      },
      {
        name: "South Indian Thali",
        description: "Traditional meal with rice, sambar, and vegetables",
        place: "Sri Ananda Bhavan, Local eateries",
        price: "₹150-300",
        special: "Complete traditional meal"
      },
      {
        name: "Coconut Water",
        description: "Fresh tender coconut water from local palms",
        place: "Beach vendors, Roadside stalls",
        price: "₹30-50",
        special: "Natural refreshment"
      }
    ],
    shopping: [
      {
        category: "Stone Carvings",
        description: "Traditional stone sculptures and artifacts",
        places: ["Government Emporium", "Local workshops", "Main Market"],
        items: ["Stone deities", "Sculptures", "Decorative pieces", "Small idols"],
        priceRange: "₹500 - ₹50000",
        bestTime: "Year-round"
      },
      {
        category: "Sea Shell Products",
        description: "Beautiful products made from sea shells",
        places: ["Beach shops", "Local markets", "Souvenir shops"],
        items: ["Shell jewelry", "Decor items", "Wind chimes", "Photo frames"],
        priceRange: "₹100 - ₹2000",
        bestTime: "Tourist season"
      },
      {
        category: "Silk Sarees",
        description: "Traditional Kanchipuram silk sarees",
        places: ["Silk shops", "Government emporiums"],
        items: ["Kanjeevaram sarees", "Silk dress materials", "Stoles", "Blouse pieces"],
        priceRange: "₹2000 - ₹50000",
        bestTime: "Festival season"
      },
      {
        category: "Bronze Statues",
        description: "Traditional bronze casting artwork",
        places: ["Artisan workshops", "Government shops"],
        items: ["Bronze deities", "Decorative items", "Small statues", "Wall hangings"],
        priceRange: "₹1000 - ₹30000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Ideal Beach Resort",
        type: "Beach Resort",
        price: "₹5000-12000/night",
        rating: "4.3/5",
        facilities: ["Beach Access", "Swimming Pool", "Restaurant", "Spa"],
        location: "Beach Road",
        distance: "Direct beach access"
      },
      {
        name: "GRT Temple Bay",
        type: "Luxury Resort",
        price: "₹8000-20000/night",
        rating: "4.6/5",
        facilities: ["Private Beach", "Multiple Pools", "Spa", "Fine Dining"],
        location: "Covelong Road",
        distance: "2 km from monuments"
      },
      {
        name: "MGM Beach Resort",
        type: "Mid-range Resort",
        price: "₹3000-7000/night",
        rating: "4.1/5",
        facilities: ["Pool", "Restaurant", "Garden", "Parking"],
        location: "Beach Road",
        distance: "1 km from Shore Temple"
      },
      {
        name: "Hotel Mamalla Heritage",
        type: "Budget Hotel",
        price: "₹1500-4000/night",
        rating: "3.9/5",
        facilities: ["Basic Rooms", "Restaurant", "Travel Desk", "Parking"],
        location: "Main Road",
        distance: "Walking distance to monuments"
      }
    ],
    places: [
      {
        name: "Shore Temple",
        description: "7th-century structural temple by the sea, UNESCO site",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹40 for Indians, ₹600 for foreigners",
        bestTime: "Sunrise or sunset",
        highlights: ["Sea view", "Ancient architecture", "Photography", "Sunset"]
      },
      {
        name: "Pancha Rathas",
        description: "Five monolithic rock-cut temples in different styles",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹40 for Indians, ₹600 for foreigners",
        bestTime: "Morning hours",
        highlights: ["Rock-cut architecture", "Different styles", "Historical significance"]
      },
      {
        name: "Arjuna's Penance",
        description: "Giant open-air rock relief depicting Hindu mythology",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹40 for Indians, ₹600 for foreigners",
        bestTime: "Morning or evening",
        highlights: ["Rock carving", "Mythological scenes", "Photography"]
      },
      {
        name: "Krishna's Butterball",
        description: "Giant balancing rock that defies gravity",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Daytime",
        highlights: ["Natural wonder", "Photography", "Unique formation"]
      },
      {
        name: "Tiger Cave",
        description: "Rock-cut shrine dedicated to Durga",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Rock architecture", "Seaside location", "Ancient art"]
      }
    ],
    precautions: [
      {
        category: "Monument Visits",
        tips: [
          "Wear comfortable footwear for walking",
          "Carry water and stay hydrated",
          "Hire authorized guides for better understanding",
          "Respect photography restrictions"
        ]
      },
      {
        category: "Beach Safety",
        tips: [
          "Swim only in designated safe areas",
          "Be cautious of strong currents",
          "Don't venture too far into the sea",
          "Keep children supervised near water"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Wear light cotton clothes",
          "Carry umbrella or hat for sun protection",
          "Use sunscreen generously",
          "Carry raincoat during monsoon"
        ]
      },
      {
        category: "Shopping",
        tips: [
          "Bargain at local markets",
          "Buy stone carvings from authorized shops",
          "Check authenticity of products",
          "Keep purchase bills for expensive items"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Start early to avoid crowds and heat",
          "Carry camera for beautiful monuments",
          "Learn basic Tamil phrases",
          "Respect local culture and traditions"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === mahabalipuramImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? mahabalipuramImages.length - 1 : prevIndex - 1
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
                src={mahabalipuramImages[currentImageIndex].url} 
                alt={mahabalipuramImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{mahabalipuramImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{mahabalipuramImages[currentImageIndex].description}</p>
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
                {mahabalipuramImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏛️ About Mahabalipuram - UNESCO Heritage Site</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {mahabalipuramData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>November to February:</span> Pleasant weather</p>
                <p><span style={styles.highlight}>Monsoon (Oct-Dec):</span> Cool with occasional rains</p>
                <p><span style={styles.highlight}>Summer (Mar-Jun):</span> Hot but less crowded</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Chennai Airport (60 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Chengalpattu Station (29 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Excellent connectivity from Chennai</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Mahabalipuram Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Heritage Experience</h4>
                  <p>How was your visit to Mahabalipuram?</p>
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
                  <h4>Monument Preservation</h4>
                  <p>How well are the heritage sites maintained?</p>
                  {userRatings.preservation ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.preservation.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.preservation.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'preservation', type: 'Monument Preservation' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Cultural Experience</h4>
                  <p>How was the local culture and heritage?</p>
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
                      onClick={() => handleRateClick({ name: 'culture', type: 'Cultural Experience' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Local Cuisine</h2>
            <div style={styles.grid}>
              {mahabalipuramData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Best Place:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
                  <p><strong>Special:</strong> {food.special}</p>
                  
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Mahabalipuram</h2>
            <div style={styles.grid}>
              {mahabalipuramData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{item.category}</h3>
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
              {mahabalipuramData.hotels.map((hotel, index) => (
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
            <h2 style={styles.sectionTitle}>🏛️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {mahabalipuramData.places.map((place, index) => (
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
            <h2 style={styles.sectionTitle}>⚠️ Travel Precautions & Tips</h2>
            <div style={styles.grid}>
              {mahabalipuramData.precautions.map((category, index) => (
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
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Women Helpline:</strong> 1091</p>
              <p><strong>Local Police:</strong> 044-27442260 | <strong>Hospital:</strong> 044-27442330</p>
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
        <h1 style={styles.title}>🏛️ Mahabalipuram</h1>
        <p style={styles.subtitle}>UNESCO World Heritage Site - Ancient Rock Architecture</p>
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
                e.target.style.backgroundColor = '#f5e6d3';
                e.target.style.color = '#8B4513';
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
            {tab === 'places' && '🏛️ Places'}
            {tab === 'precautions' && '⚠️ Precautions'}
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

export default MahabalipuramTravelGuide;