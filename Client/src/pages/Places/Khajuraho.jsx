import React, { useState } from 'react';

const KhajurahoTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');

  // Khajuraho Images for Carousel
  const khajurahoImages = [
    {
      url: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2hhanVyYWhvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Kandariya Mahadeva Temple",
      description: "Largest and most ornate Hindu temple"
    },
    {
      url: "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2hhanVyYWhvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Temple Complex",
      description: "UNESCO World Heritage Site"
    },
    {
      url: "https://images.unsplash.com/photo-1672215051407-6e05138da3a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2hhanVyYWhvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Western Group of Temples",
      description: "Main temple complex with stunning architecture"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f5f0',
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

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === khajurahoImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? khajurahoImages.length - 1 : prevIndex - 1
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

  // Khajuraho Data
  const khajurahoData = {
    overview: {
      title: "Khajuraho - UNESCO World Heritage Site",
      content: `Khajuraho is famous for its group of Hindu and Jain temples, renowned for their nagara-style architectural symbolism and erotic sculptures. Built between 950-1050 CE by the Chandela dynasty, these temples represent one of the high points of Indian architectural and sculptural tradition. The temples are UNESCO World Heritage Sites and attract visitors from around the world.`
    },
    famousFoods: [
      {
        name: "Poha Jalebi",
        description: "Traditional breakfast combo of flattened rice with sweet jalebi",
        place: "Local Street Vendors",
        price: "₹40-80"
      },
      {
        name: "Bhutte ka Kees",
        description: "Grated corn cooked with spices",
        place: "Local Restaurants",
        price: "₹60-120"
      },
      {
        name: "Dal Bafla",
        description: "MP's version of Dal Bati",
        place: "Traditional Restaurants",
        price: "₹150-250"
      }
    ],
    temples: [
      {
        name: "Kandariya Mahadeva Temple",
        description: "Largest and most ornate temple with exquisite carvings",
        architecture: "Nagara Style",
        built: "1025-1050 CE"
      },
      {
        name: "Lakshmana Temple",
        description: "Dedicated to Lord Vishnu with intricate sculptures",
        architecture: "Panchayatana Style",
        built: "930-950 CE"
      },
      {
        name: "Vishwanath Temple",
        description: "Dedicated to Lord Shiva with Nandi shrine",
        architecture: "Nagara Style",
        built: "1002 CE"
      }
    ],
    accommodations: [
      {
        name: "MPT Hotel Chandela",
        type: "Luxury Hotel",
        price: "₹4000-8000/night",
        location: "Close to Western Group Temples"
      },
      {
        name: "Lalit Temple View",
        type: "Mid-range Hotel",
        price: "₹2500-5000/night",
        location: "Walking distance to temples"
      }
    ],
    nearbyPlaces: [
      {
        name: "Panna National Park",
        description: "Tiger reserve and diamond mines",
        distance: "45 km from Khajuraho"
      },
      {
        name: "Raneh Falls",
        description: "Canyon with seasonal waterfalls",
        distance: "20 km from Khajuraho"
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
                src={khajurahoImages[currentImageIndex].url} 
                alt={khajurahoImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{khajurahoImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{khajurahoImages[currentImageIndex].description}</p>
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
                {khajurahoImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏛️ About Khajuraho Temples</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {khajurahoData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather for exploration</p>
                <p><span style={styles.highlight}>Dance Festival:</span> Annual festival (February)</p>
                <p><span style={styles.highlight}>Avoid:</span> Summer months (April-June)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Khajuraho Airport (5 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Khajuraho Railway Station</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from major cities</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Khajuraho Experience</h3>
              <p>Share your experience and help other visitors</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Temple Experience</h4>
                  <p>How was your visit to the temples?</p>
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
                  <h4>Architecture & Sculptures</h4>
                  <p>How impressive were the carvings and architecture?</p>
                  {userRatings.architecture ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.architecture.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.architecture.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'architecture', type: 'Architecture & Sculptures' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Guided Tours</h4>
                  <p>How helpful were the guides and information?</p>
                  {userRatings.guides ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.guides.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.guides.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'guides', type: 'Guided Tours' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Local Cuisine</h2>
            <div style={styles.grid}>
              {khajurahoData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{food.name}</h3>
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

      case 'temples':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🛕 Major Temples</h2>
            <div style={styles.grid}>
              {khajurahoData.temples.map((temple, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{temple.name}</h3>
                  <p>{temple.description}</p>
                  <p><strong>Architecture:</strong> {temple.architecture}</p>
                  <p><strong>Built:</strong> {temple.built}</p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[temple.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[temple.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[temple.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: temple.name, type: temple.name })}
                      >
                        Rate this Temple
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
              {khajurahoData.accommodations.map((stay, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{stay.name}</h3>
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
              {khajurahoData.nearbyPlaces.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{place.name}</h3>
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
            <h2 style={styles.sectionTitle}>⚠️ Travel Tips & Guidelines</h2>
            
            <div style={styles.warning}>
              <h3 style={{color: '#d84315'}}>Important Guidelines:</h3>
              <ul style={{lineHeight: '1.8'}}>
                <li>Respect the cultural and religious significance of the temples</li>
                <li>Dress modestly while visiting the temples</li>
                <li>Hire authorized guides for better understanding of sculptures</li>
                <li>Carry water and wear comfortable shoes for temple exploration</li>
                <li>Photography is allowed but respect the rules</li>
                <li>Visit during early morning or late afternoon for better experience</li>
              </ul>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B4513'}}>🎫 Entry Information</h3>
                <p><strong>Indian Citizens:</strong> ₹40 per person</p>
                <p><strong>Foreign Tourists:</strong> ₹600 per person</p>
                <p><strong>Camera Fee:</strong> ₹25 (still camera)</p>
                <p><strong>Timings:</strong> Sunrise to Sunset</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B4513'}}>💼 Essentials</h3>
                <p>Comfortable walking shoes</p>
                <p>Sun protection (hat, sunscreen)</p>
                <p>Water bottle</p>
                <p>Camera for photography</p>
                <p>Guide book or audio guide</p>
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
        <h1 style={styles.title}>🏛️ Khajuraho Temples</h1>
        <p style={styles.subtitle}>UNESCO World Heritage Site - Complete Travel Guide</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'temples', 'food', 'accommodation', 'places', 'precautions'].map(tab => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' && '📖 Overview'}
            {tab === 'temples' && '🛕 Temples'}
            {tab === 'food' && '🍽️ Food'}
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

export default KhajurahoTravelGuide;