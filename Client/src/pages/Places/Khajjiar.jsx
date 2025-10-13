import React, { useState } from 'react';

const KhajjiarTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');

  // Khajjiar Images for Carousel
  const khajjiarImages = [
    {
      url: "https://images.unsplash.com/photo-1714381639586-80d1f04dfb0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2hhamppYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Khajjiar Lake",
      description: "The beautiful lake surrounded by meadows"
    },
    {
      url: "https://images.unsplash.com/photo-1600491001617-36f4e8005cc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2hhamppYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Golden Meadow",
      description: "Lush green meadows of Khajjiar"
    },
    {
      url: "https://images.unsplash.com/photo-1653454656100-0fd5ea96bebf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2hhamppYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Khajji Nag Temple",
      description: "Ancient temple dedicated to Serpent God"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f8f0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(46, 125, 50, 0.3)'
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
      backgroundColor: '#2e7d32',
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
      color: '#2e7d32',
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
      backgroundColor: '#f8fff8',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #e8f5e8',
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
      backgroundColor: '#2e7d32',
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
      color: '#2e7d32',
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
      backgroundColor: '#2e7d32',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(46, 125, 50, 0.4)'
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
      color: '#2e7d32',
      borderBottom: '3px solid #4caf50',
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
      backgroundColor: '#f8fff8',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #e8f5e8',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(46, 125, 50, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#2e7d32',
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

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === khajjiarImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? khajjiarImages.length - 1 : prevIndex - 1
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

  // Khajjiar Data
  const khajjiarData = {
    overview: {
      title: "Khajjiar - Mini Switzerland of India",
      content: `Khajjiar is a beautiful hill station in Chamba district, Himachal Pradesh, often called the 'Mini Switzerland of India'. Located at an altitude of 6,500 feet, it features a picturesque lake, lush green meadows, and dense deodar forests. The place is famous for its stunning natural beauty and adventure activities.`
    },
    famousFoods: [
      {
        name: "Siddu",
        description: "Traditional steamed bread served with ghee",
        place: "Local Dhabas",
        price: "₹80-150"
      },
      {
        name: "Madra",
        description: "Chickpea curry cooked in yogurt",
        place: "Himachali Restaurants",
        price: "₹120-200"
      },
      {
        name: "Thukpa",
        description: "Tibetan noodle soup",
        place: "Local Cafes",
        price: "₹80-120"
      }
    ],
    activities: [
      {
        name: "Zorbing",
        description: "Rolling down hills in a giant transparent ball",
        duration: "15-30 minutes",
        price: "₹300-500"
      },
      {
        name: "Paragliding",
        description: "Aerial views of Khajjiar",
        duration: "10-15 minutes",
        price: "₹1500-2500"
      },
      {
        name: "Horse Riding",
        description: "Explore meadows on horseback",
        duration: "30-60 minutes",
        price: "₹200-400"
      }
    ],
    accommodations: [
      {
        name: "HP Tourism Hotel",
        type: "Budget Hotel",
        price: "₹1500-3000/night",
        location: "Near Khajjiar Lake"
      },
      {
        name: "Devi Resorts",
        type: "Luxury Resort",
        price: "₹4000-8000/night",
        location: "Hilltop with valley view"
      }
    ],
    nearbyPlaces: [
      {
        name: "Dalhousie",
        description: "Colonial hill station with Scottish architecture",
        distance: "25 km from Khajjiar"
      },
      {
        name: "Kalatop Wildlife Sanctuary",
        description: "Dense forest with rich biodiversity",
        distance: "15 km from Khajjiar"
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
                src={khajjiarImages[currentImageIndex].url} 
                alt={khajjiarImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{khajjiarImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{khajjiarImages[currentImageIndex].description}</p>
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
                {khajjiarImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Khajjiar</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {khajjiarData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Pleasant weather for sightseeing</p>
                <p><span style={styles.highlight}>September to November:</span> Clear skies and beautiful views</p>
                <p><span style={styles.highlight}>December to February:</span> Snow experience</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Pathankot Airport (120 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Pathankot Railway Station</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Delhi, Chandigarh</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Khajjiar Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Experience</h4>
                  <p>How was your trip to Khajjiar?</p>
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
                  <h4>Natural Beauty</h4>
                  <p>How beautiful did you find Khajjiar?</p>
                  {userRatings.beauty ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.beauty.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.beauty.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'beauty', type: 'Natural Beauty' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Adventure Activities</h4>
                  <p>How were the adventure activities?</p>
                  {userRatings.activities ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.activities.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.activities.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'activities', type: 'Adventure Activities' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Local Himachali Cuisine</h2>
            <div style={styles.grid}>
              {khajjiarData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>{food.name}</h3>
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

      case 'activities':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🎯 Adventure Activities</h2>
            <div style={styles.grid}>
              {khajjiarData.activities.map((activity, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>{activity.name}</h3>
                  <p>{activity.description}</p>
                  <p><strong>Duration:</strong> {activity.duration}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{activity.price}</span></p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[activity.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[activity.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[activity.name].rating)}
                        </div>
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

      case 'accommodation':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏨 Stay Options</h2>
            <div style={styles.grid}>
              {khajjiarData.accommodations.map((stay, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>{stay.name}</h3>
                  <p><strong>Type:</strong> {stay.type}</p>
                  <p><strong>Location:</strong> {stay.location}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{stay.price}</span></p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[stay.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[stay.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[stay.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: stay.name, type: stay.name })}
                      >
                        Rate this Stay
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
            <h2 style={styles.sectionTitle}>🏞️ Nearby Attractions</h2>
            <div style={styles.grid}>
              {khajjiarData.nearbyPlaces.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>{place.name}</h3>
                  <p>{place.description}</p>
                  <p><strong>Distance:</strong> {place.distance}</p>
                  
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
            <h2 style={styles.sectionTitle}>⚠️ Travel Tips & Precautions</h2>
            
            <div style={styles.warning}>
              <h3 style={{color: '#d84315'}}>Important Tips:</h3>
              <ul style={{lineHeight: '1.8'}}>
                <li>Carry warm clothes as temperatures can drop suddenly</li>
                <li>Wear comfortable shoes for walking on meadows</li>
                <li>Carry cash as ATMs might be limited</li>
                <li>Book accommodation in advance during peak season</li>
                <li>Respect local culture and environment</li>
                <li>Carry basic medications for altitude sickness</li>
              </ul>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32'}}>🌤️ Weather</h3>
                <p>Summer: 15°C to 30°C</p>
                <p>Winter: -5°C to 10°C</p>
                <p>Monsoon: Heavy rainfall (July-August)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32'}}>💼 Essentials</h3>
                <p>Warm jackets</p>
                <p>Comfortable footwear</p>
                <p>Sunglasses and sunscreen</p>
                <p>Power bank</p>
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
        <h1 style={styles.title}>🏔️ Khajjiar</h1>
        <p style={styles.subtitle}>Mini Switzerland of India - Complete Travel Guide</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'activities', 'accommodation', 'places', 'precautions'].map(tab => (
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
            {tab === 'activities' && '🎯 Activities'}
            {tab === 'accommodation' && '🏨 Stay'}
            {tab === 'places' && '🏞️ Places'}
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

export default KhajjiarTravelGuide;