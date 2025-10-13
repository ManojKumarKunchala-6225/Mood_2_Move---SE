import React, { useState } from 'react';

const LehTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');

  // Leh Images for Carousel
  const lehImages = [
    {
      url: "https://images.unsplash.com/photo-1695954591222-b8645dee4caf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVoJTIwcGFsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Leh Palace",
      description: "The magnificent 17th-century royal palace overlooking Leh"
    },
    {
      url: "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Pangong Lake",
      description: "The stunning blue lake that changes colors"
    },
    {
      url: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Nubra Valley",
      description: "High altitude desert with double-humped camels"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f8ff',
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
      backgroundColor: '#1e3c72',
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
      backgroundColor: '#f8fdff',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #e1f5fe',
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
      backgroundColor: '#f8fdff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #e1f5fe',
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
      color: '#388e3c',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    },
    altitude: {
      color: '#7b1fa2',
      fontWeight: 'bold'
    }
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === lehImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? lehImages.length - 1 : prevIndex - 1
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

  // Leh Data
  const lehData = {
    overview: {
      title: "Leh-Ladakh - The Land of High Passes",
      content: `Leh is the joint capital and largest town of Ladakh in India. Situated at an altitude of 3,524 meters (11,562 ft), it's known for its stunning Buddhist monasteries, dramatic landscapes, and adventure activities. Leh serves as the gateway to the remote valleys of Nubra, Pangong, and Zanskar. The region offers breathtaking views of snow-capped peaks, crystal clear lakes, and unique high-altitude desert landscapes.`
    },
    famousFoods: [
      {
        name: "Thukpa",
        description: "Hearty noodle soup with vegetables and meat",
        place: "Local restaurants and homestays",
        price: "₹150-₹300 per bowl"
      },
      {
        name: "Momos",
        description: "Steamed dumplings with various fillings",
        place: "Street vendors and cafes",
        price: "₹80-₹200 per plate"
      },
      {
        name: "Butter Tea",
        description: "Traditional salted tea with butter",
        place: "Local homes and restaurants",
        price: "₹30-₹80 per cup"
      },
      {
        name: "Skyu",
        description: "Traditional Ladakhi pasta dish with vegetables",
        place: "Traditional Ladakhi restaurants",
        price: "₹200-₹400 per plate"
      }
    ],
    shopping: [
      {
        name: "Pashmina Shawls",
        description: "Luxurious woolen shawls and stoles",
        places: ["Leh Market", "Government Emporium"],
        priceRange: "₹2000 - ₹20000"
      },
      {
        name: "Tibetan Jewelry",
        description: "Silver and turquoise traditional jewelry",
        places: ["Main Bazaar Leh"],
        priceRange: "₹500 - ₹10000"
      },
      {
        name: "Prayer Wheels",
        description: "Traditional Buddhist religious items",
        places: ["Monastery shops", "Local markets"],
        priceRange: "₹300 - ₹5000"
      }
    ],
    accommodations: [
      {
        name: "Grand Dragon Ladakh",
        type: "Luxury Hotel",
        price: "₹8000-₹15000/day",
        location: "Leh City Center"
      },
      {
        name: "Hotel Ladakh Residency",
        type: "Mid-range Hotel",
        price: "₹3000-₹6000/day",
        location: "Fort Road, Leh"
      },
      {
        name: "Zostel Leh",
        type: "Budget Hostel",
        price: "₹500-₹1500/day",
        location: "Changspa Road, Leh"
      }
    ],
    adventureActivities: [
      {
        name: "Chadar Trek",
        description: "Frozen river trek on Zanskar River",
        season: "January-February",
        difficulty: "Extreme"
      },
      {
        name: "Mountain Biking",
        description: "Biking through high altitude passes",
        season: "May-September",
        difficulty: "Moderate to Difficult"
      },
      {
        name: "River Rafting",
        description: "White water rafting in Zanskar River",
        season: "June-August",
        difficulty: "Moderate"
      },
      {
        name: "Camel Safari",
        description: "Double-humped camel ride in Nubra Valley",
        season: "April-October",
        difficulty: "Easy"
      }
    ],
    monasteries: [
      {
        name: "Hemis Monastery",
        description: "Largest and richest monastery in Ladakh",
        distance: "45 km from Leh",
        altitude: "3,600 m"
      },
      {
        name: "Thiksey Monastery",
        description: "Beautiful monastery resembling Potala Palace",
        distance: "19 km from Leh",
        altitude: "3,600 m"
      },
      {
        name: "Diskit Monastery",
        description: "Oldest and largest monastery in Nubra Valley",
        distance: "150 km from Leh",
        altitude: "3,144 m"
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
                src={lehImages[currentImageIndex].url} 
                alt={lehImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{lehImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{lehImages[currentImageIndex].description}</p>
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
                {lehImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Leh-Ladakh</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {lehData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>May to September:</span> Ideal weather, all passes open</p>
                <p><span style={styles.highlight}>July-August:</span> Peak season, festivals</p>
                <p><span style={styles.highlight}>Winter:</span> For Chadar Trek (experienced only)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Kushok Bakula Rimpochee Airport, Leh</p>
                <p><span style={styles.highlight}>By Road:</span> Manali-Leh Highway, Srinagar-Leh Highway</p>
                <p><span style={styles.highlight}>Altitude:</span> <span style={styles.altitude}>3,524 meters</span></p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Leh Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Travel Experience</h4>
                  <p>How was your Ladakh adventure?</p>
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
                  <h4>Scenic Beauty</h4>
                  <p>How breathtaking were the landscapes?</p>
                  {userRatings.scenery ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.scenery.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.scenery.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'scenery', type: 'Scenic Beauty' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Adventure Activities</h4>
                  <p>How exciting were the adventure sports?</p>
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
            <h2 style={styles.sectionTitle}>🍽️ Local Ladakhi Cuisine</h2>
            <div style={styles.grid}>
              {lehData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Available At:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
                  
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Leh</h2>
            <div style={styles.grid}>
              {lehData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{item.name}</h3>
                  <p>{item.description}</p>
                  <p><strong>Available At:</strong> {item.places.join(', ')}</p>
                  <p><strong>Price Range:</strong> <span style={styles.price}>{item.priceRange}</span></p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[item.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[item.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[item.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: item.name, type: item.name })}
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

      case 'adventure':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🚵 Adventure Activities</h2>
            <div style={styles.grid}>
              {lehData.adventureActivities.map((activity, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{activity.name}</h3>
                  <p>{activity.description}</p>
                  <p><strong>Season:</strong> <span style={styles.timing}>{activity.season}</span></p>
                  <p><strong>Difficulty:</strong> <span style={styles.highlight}>{activity.difficulty}</span></p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[activity.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[activity.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[activity.name].rating)}
                        </div>
                        {userRatings[activity.name].review && (
                          <p><strong>Review:</strong> {userRatings[activity.name].review}</p>
                        )}
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: activity.name, type: activity.name })}
                      >
                        Rate this Activity
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'monasteries':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🕌 Buddhist Monasteries</h2>
            <div style={styles.grid}>
              {lehData.monasteries.map((monastery, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{monastery.name}</h3>
                  <p>{monastery.description}</p>
                  <p><strong>Distance from Leh:</strong> <span style={styles.highlight}>{monastery.distance}</span></p>
                  <p><strong>Altitude:</strong> <span style={styles.altitude}>{monastery.altitude}</span></p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[monastery.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[monastery.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[monastery.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: monastery.name, type: monastery.name })}
                      >
                        Rate this Monastery
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
            <h2 style={styles.sectionTitle}>⚠️ Travel Tips & Precautions</h2>
            
            <div style={styles.warning}>
              <h3 style={{color: '#d84315'}}>Important Health & Safety Information</h3>
              <ul style={{lineHeight: '1.8'}}>
                <li><strong>Acclimatization:</strong> Spend 2 days in Leh before any activities</li>
                <li><strong>Altitude Sickness:</strong> Watch for symptoms - headache, nausea, dizziness</li>
                <li><strong>Medication:</strong> Carry Diamox for altitude sickness prevention</li>
                <li><strong>Hydration:</strong> Drink 4-5 liters of water daily</li>
                <li><strong>Permits:</strong> Inner Line Permit required for protected areas</li>
                <li><strong>Weather:</strong> Temperature can drop suddenly, carry warm clothes</li>
              </ul>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72'}}>🏥 Health Essentials</h3>
                <p>• Carry first-aid kit and essential medicines</p>
                <p>• Use sunscreen SPF 50+ and lip balm</p>
                <p>• Avoid alcohol for first 48 hours</p>
                <p>• Walk slowly, avoid over-exertion</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72'}}>📜 Required Permits</h3>
                <p><span style={styles.highlight}>Inner Line Permit:</span> Required for Nubra, Pangong</p>
                <p><span style={styles.highlight}>Where to get:</span> DC Office Leh or online</p>
                <p><span style={styles.highlight}>Validity:</span> 7 days (extendable)</p>
                <p><span style={styles.highlight}>Cost:</span> ₹400-₹500 per person</p>
              </div>
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
        <h1 style={styles.title}>🏔️ Leh-Ladakh</h1>
        <p style={styles.subtitle}>Complete Travel Guide with Ratings</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'shopping', 'adventure', 'monasteries', 'precautions'].map(tab => (
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
            {tab === 'adventure' && '🚵 Adventure'}
            {tab === 'monasteries' && '🕌 Monasteries'}
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

export default LehTravelGuide;
