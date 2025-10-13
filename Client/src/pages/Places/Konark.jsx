import React, { useState } from 'react';

const KonarkTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');

  // Konark Images for Carousel
  const konarkImages = [
    {
      url: "https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29uYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Konark Sun Temple",
      description: "The magnificent Sun Temple chariot structure"
    },
    {
      url: "https://images.unsplash.com/photo-1601815264039-67c8ba1a7f98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a29uYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Intricate Carvings",
      description: "Detailed stone artwork on temple walls"
    },
    {
      url: "https://images.unsplash.com/photo-1682703174034-f9de5333d7d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtvbmFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Wheel of Konark",
      description: "Famous architectural marvel - the stone wheel"
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
      background: 'linear-gradient(135deg, #d4af37, #ff6b35)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)'
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
      backgroundColor: '#d4af37',
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
      color: '#d4af37',
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
      backgroundColor: '#fffaf5',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #ffe8d6',
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
      backgroundColor: '#d4af37',
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
      color: '#d4af37',
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
      backgroundColor: '#d4af37',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4)'
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
      color: '#d4af37',
      borderBottom: '3px solid #ff6b35',
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
      backgroundColor: '#fffaf5',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #ffe8d6',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#d4af37',
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
      prevIndex === konarkImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? konarkImages.length - 1 : prevIndex - 1
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

  // Konark Data
  const konarkData = {
    overview: {
      title: "Konark Sun Temple - Architectural Marvel",
      content: `The Konark Sun Temple is a 13th-century CE Sun temple at Konark in Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga Dynasty. Shaped like a giant chariot, the temple is known for its intricate stone carvings that cover the entire structure. It is a UNESCO World Heritage Site and one of India's most famous temples.`
    },
    famousFoods: [
      {
        name: "Chhena Poda",
        description: "Traditional Odia sweet made from cheese and sugar",
        place: "Local sweet shops",
        price: "₹200-₹400 per kg"
      },
      {
        name: "Pakhala Bhata",
        description: "Fermented rice served with curd and vegetables",
        place: "Local restaurants",
        price: "₹80-₹150 per plate"
      },
      {
        name: "Rasagolla",
        description: "Famous Bengali sweet popular in Odisha",
        place: "Sweet stalls near temple",
        price: "₹10-₹20 per piece"
      }
    ],
    shopping: [
      {
        name: "Stone Carvings",
        description: "Miniature replicas of temple architecture",
        places: ["Government Emporium", "Local handicraft shops"],
        priceRange: "₹500 - ₹5000"
      },
      {
        name: "Pattachitra",
        description: "Traditional cloth-based scroll painting",
        places: ["Raghurajpur Craft Village"],
        priceRange: "₹1000 - ₹10000"
      }
    ],
    accommodations: [
      {
        name: "OTDC Panthanivas",
        type: "Budget Hotel",
        price: "₹1200-₹2500/day",
        location: "Near Konark Temple"
      },
      {
        name: "Sun Temple Hotel",
        type: "Mid-range Accommodation",
        price: "₹2500-₹5000/day",
        location: "Beach Road, Konark"
      }
    ],
    nearbyPlaces: [
      {
        name: "Chandrabhaga Beach",
        description: "Beautiful beach near the Sun Temple",
        distance: "3 km from Konark"
      },
      {
        name: "Puri Jagannath Temple",
        description: "Famous Hindu temple dedicated to Lord Jagannath",
        distance: "35 km from Konark"
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
                src={konarkImages[currentImageIndex].url} 
                alt={konarkImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{konarkImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{konarkImages[currentImageIndex].description}</p>
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
                {konarkImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>☀️ About Konark Sun Temple</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {konarkData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#d4af37', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather for exploration</p>
                <p><span style={styles.highlight}>February:</span> Konark Dance Festival</p>
                <p><span style={styles.highlight}>Avoid Monsoon:</span> Heavy rainfall (June-September)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#d4af37', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Biju Patnaik Airport, Bhubaneswar (65 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Puri Railway Station (35 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Bhubaneswar and Puri</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Konark Experience</h3>
              <p>Share your experience and help other visitors</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Temple Experience</h4>
                  <p>How was your visit to this architectural wonder?</p>
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
                  <h4>Architecture & Carvings</h4>
                  <p>How impressive were the stone carvings and design?</p>
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
                      onClick={() => handleRateClick({ name: 'architecture', type: 'Architecture' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Guided Tours</h4>
                  <p>How was the quality of guided tours and information?</p>
                  {userRatings.tours ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.tours.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.tours.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'tours', type: 'Guided Tours' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Local Odia Cuisine</h2>
            <div style={styles.grid}>
              {konarkData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#d4af37', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Available At:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
                  
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping & Handicrafts</h2>
            <div style={styles.grid}>
              {konarkData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#d4af37', marginBottom: '15px'}}>{item.name}</h3>
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

      case 'accommodation':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏨 Accommodation Options</h2>
            <div style={styles.grid}>
              {konarkData.accommodations.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#d4af37', marginBottom: '15px'}}>{hotel.name}</h3>
                  <p><strong>Type:</strong> {hotel.type}</p>
                  <p><strong>Location:</strong> {hotel.location}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{hotel.price}</span></p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[hotel.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[hotel.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[hotel.name].rating)}
                        </div>
                        {userRatings[hotel.name].review && (
                          <p><strong>Review:</strong> {userRatings[hotel.name].review}</p>
                        )}
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: hotel.name, type: hotel.name })}
                      >
                        Rate this Accommodation
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
              {konarkData.nearbyPlaces.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#d4af37', marginBottom: '15px'}}>{place.name}</h3>
                  <p>{place.description}</p>
                  <p><strong>Distance:</strong> <span style={styles.highlight}>{place.distance}</span></p>
                  
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
              <h3 style={{color: '#d84315'}}>Important Information</h3>
              <ul style={{lineHeight: '1.8'}}>
                <li>Carry water and wear comfortable shoes for extensive walking</li>
                <li>Best to visit early morning to avoid crowds and heat</li>
                <li>Hire authorized guides for detailed information about carvings</li>
                <li>Photography is allowed but avoid using flash inside temple premises</li>
                <li>Carry sunscreen and hats during summer months</li>
              </ul>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#d4af37'}}>⏰ Temple Timings</h3>
                <p><span style={styles.timing}>Opening:</span> 6:00 AM</p>
                <p><span style={styles.timing}>Closing:</span> 8:00 PM</p>
                <p><span style={styles.timing}>Light Show:</span> 7:00 PM (Winter), 7:30 PM (Summer)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#d4af37'}}>🎫 Entry Fees</h3>
                <p><span style={styles.highlight}>Indian Citizens:</span> ₹40</p>
                <p><span style={styles.highlight}>Foreign Tourists:</span> ₹600</p>
                <p><span style={styles.highlight}>Children (below 15):</span> Free</p>
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
        <h1 style={styles.title}>☀️ Konark Sun Temple</h1>
        <p style={styles.subtitle}>Complete Travel Guide with Ratings</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'shopping', 'accommodation', 'places', 'precautions'].map(tab => (
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

export default KonarkTravelGuide;