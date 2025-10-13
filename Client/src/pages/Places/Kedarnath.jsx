import React, { useState } from 'react';

const KedarnathTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Kedarnath Images for Carousel
  const kedarnathImages = [
    {
      url: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VkYXJuYXRofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Kedarnath Temple",
      description: "Sacred Jyotirlinga at 3,583 meters altitude"
    },
    {
      url: "https://images.unsplash.com/photo-1606722581293-628fa217a6f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlZGFybmF0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Himalayan Ranges",
      description: "Majestic snow-capped peaks surrounding the temple"
    },
    {
      url: "https://images.unsplash.com/photo-1617860931879-19d32ec9912d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2VkYXJuYXRofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Chorabari Glacier",
      description: "Source of Mandakini River near Kedarnath"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
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
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)'
      }
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
      backgroundColor: '#f0f8ff',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #d1e0ff',
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
      marginTop: '10px',
      transition: 'all 0.3s ease'
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
      resize: 'vertical',
      fontFamily: 'inherit'
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
      fontSize: '16px',
      transition: 'all 0.3s ease'
    },
    cancelButton: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.3s ease'
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
      border: '2px solid #d1e0ff',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(30, 60, 114, 0.1)',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(30, 60, 114, 0.2)'
      }
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
    difficulty: {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginLeft: '10px'
    },
    easy: {
      backgroundColor: '#e8f5e8',
      color: '#2d5016'
    },
    moderate: {
      backgroundColor: '#fff3e0',
      color: '#e65100'
    },
    challenging: {
      backgroundColor: '#ffebee',
      color: '#c62828'
    },
    spiritual: {
      backgroundColor: '#f3e5f5',
      color: '#7b1fa2'
    }
  };

  // Kedarnath Travel Data
  const kedarnathData = {
    overview: {
      title: "Kedarnath - Abode of Lord Shiva",
      content: `Kedarnath, situated at an altitude of 3,583 meters in the Garhwal Himalayas, is one of the most sacred pilgrimage sites for Hindus. It is one of the twelve Jyotirlingas and part of the Char Dham Yatra. The ancient Kedarnath Temple, built by the Pandavas, stands against the backdrop of majestic Kedarnath peak, offering a spiritually uplifting experience amidst breathtaking natural beauty.`
    },
    famousFoods: [
      {
        name: "Satvik Bhojan",
        description: "Pure vegetarian food without onion and garlic, served as prasad",
        place: "Temple premises, Bhojanalayas",
        price: "₹100-200 per plate"
      },
      {
        name: "Garhwali Thali",
        description: "Traditional local cuisine with mandua ki roti, chainsoo, and jhangora kheer",
        place: "Local dhabas enroute",
        price: "₹150-300"
      },
      {
        name: "Maggi & Tea",
        description: "Hot noodles and tea available at various stops during trek",
        place: "Trek route stalls",
        price: "₹50-100"
      }
    ],
    shopping: [
      {
        category: "Religious Items",
        description: "Rudraksha malas, Shiva lingams, religious books, and puja items",
        places: ["Gaurikund Market", "Sonprayag", "Local shops near temple"],
        priceRange: "₹100 - ₹5000"
      },
      {
        category: "Woolen Clothes",
        description: "Jackets, caps, gloves, and woolens for cold weather",
        places: ["Gaurikund", "Phata", "Sitapur markets"],
        priceRange: "₹200 - ₹3000"
      }
    ],
    accommodation: [
      {
        name: "GMVN Tourist Rest House",
        type: "Government Accommodation",
        price: "₹800-2000/night",
        location: "Kedarnath",
        facilities: "Basic amenities, hot water"
      },
      {
        name: "Private Guest Houses",
        type: "Budget Stay",
        price: "₹500-1500/night",
        location: "Kedarnath area",
        facilities: "Shared rooms, basic food"
      },
      {
        name: "Luxury Camps",
        type: "Premium Tents",
        price: "₹2000-5000/night",
        location: "Sonprayag, Phata",
        facilities: "Attached bathroom, heating"
      }
    ],
    places: [
      {
        name: "Kedarnath Temple",
        description: "Ancient temple dedicated to Lord Shiva, one of the 12 Jyotirlingas",
        timing: "4:00 AM - 9:00 PM (May-Nov)",
        entryFee: "Free",
        significance: "Spiritual"
      },
      {
        name: "Vasuki Tal",
        description: "High altitude lake at 4,150 meters, 8km trek from Kedarnath",
        timing: "Day trek (6-8 hours)",
        entryFee: "Free",
        significance: "Adventure"
      },
      {
        name: "Gaurikund",
        description: "Hot water springs and starting point of Kedarnath trek",
        timing: "24 hours",
        entryFee: "Free",
        significance: "Spiritual"
      },
      {
        name: "Shankaracharya Samadhi",
        description: "Final resting place of Adi Shankaracharya behind main temple",
        timing: "Same as temple timings",
        entryFee: "Free",
        significance: "Historical"
      },
      {
        name: "Bhairavnath Temple",
        description: "Temple dedicated to Bhairav, protector of Kedarnath",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        significance: "Spiritual"
      }
    ],
    precautions: [
      {
        category: "Trekking & Health",
        tips: [
          "Start trek early morning to avoid afternoon sun",
          "Carry water, dry fruits, and energy bars",
          "Get proper medical checkup before attempting trek",
          "Acclimatize properly to avoid altitude sickness",
          "Use walking stick for support during trek"
        ]
      },
      {
        category: "Spiritual & General",
        tips: [
          "Maintain cleanliness and don't litter",
          "Follow temple dress code - conservative clothing",
          "Carry original ID proof for registration",
          "Book accommodation in advance during peak season",
          "Respect local customs and traditions"
        ]
      },
      {
        category: "Weather & Essentials",
        tips: [
          "Carry woolens, raincoat, and proper trekking shoes",
          "Check weather forecast before starting journey",
          "Carry basic medicines and first aid kit",
          "Keep important documents in waterproof bag",
          "Use sunscreen and sunglasses for UV protection"
        ]
      }
    ],
    registration: {
      process: "Online registration through Uttarakhand Tourism website",
      documents: "ID proof (Aadhar, Voter ID, or Passport)",
      cost: "No fee for registration",
      helpline: "1364 (Uttarakhand Tourism)"
    }
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === kedarnathImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? kedarnathImages.length - 1 : prevIndex - 1
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

  const getSignificanceStyle = (significance) => {
    switch(significance?.toLowerCase()) {
      case 'spiritual': return styles.spiritual;
      case 'adventure': return styles.moderate;
      case 'historical': return styles.easy;
      default: return styles.spiritual;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div style={styles.section}>
            {/* Image Carousel */}
            <div style={styles.carousel}>
              <img 
                src={kedarnathImages[currentImageIndex].url} 
                alt={kedarnathImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{kedarnathImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{kedarnathImages[currentImageIndex].description}</p>
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
                {kedarnathImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🛕 About Kedarnath - Abode of Lord Shiva</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {kedarnathData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>May to June:</span> Pleasant weather, peak pilgrimage season</p>
                <p><span style={styles.highlight}>September to October:</span> Post-monsoon, clear views</p>
                <p><span style={styles.highlight}>November:</span> Closing time, very cold</p>
                <p><span style={{color: '#f44336', fontWeight: 'bold'}}>Closed:</span> December to April (Winter)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>Nearest Airport:</span> Jolly Grant, Dehradun (238km)</p>
                <p><span style={styles.highlight}>Nearest Railway:</span> Rishikesh (216km)</p>
                <p><span style={styles.highlight}>Road:</span> Up to Gaurikund by vehicle</p>
                <p><span style={styles.highlight}>Trek:</span> 16km from Gaurikund to Kedarnath</p>
              </div>

              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>📝 Registration Process</h3>
                <p><strong>Process:</strong> {kedarnathData.registration.process}</p>
                <p><strong>Documents:</strong> {kedarnathData.registration.documents}</p>
                <p><strong>Cost:</strong> {kedarnathData.registration.cost}</p>
                <p><strong>Helpline:</strong> {kedarnathData.registration.helpline}</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Spiritual Experience</h3>
              <p>Share your divine journey and help other pilgrims</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Spiritual Experience</h4>
                  <p>How was your pilgrimage to Kedarnath?</p>
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
              </div>
            </div>
          </div>
        );

      case 'food':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🍽️ Satvik Food & Local Cuisine</h2>
            <div style={styles.grid}>
              {kedarnathData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Available At:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
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
              {kedarnathData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{item.category}</h3>
                  <p>{item.description}</p>
                  <p><strong>Best Places:</strong> {item.places.join(', ')}</p>
                  <p><strong>Price Range:</strong> <span style={styles.price}>{item.priceRange}</span></p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'accommodation':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏔️ Accommodation & Stay Options</h2>
            <div style={styles.grid}>
              {kedarnathData.accommodation.map((stay, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{stay.name}</h3>
                  <p><strong>Type:</strong> {stay.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{stay.price}</span></p>
                  <p><strong>Location:</strong> {stay.location}</p>
                  <p><strong>Facilities:</strong> {stay.facilities}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'places':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🛕 Sacred Places & Attractions</h2>
            <div style={styles.grid}>
              {kedarnathData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>
                    {place.name}
                    {place.significance && (
                      <span style={{...styles.difficulty, ...getSignificanceStyle(place.significance)}}>
                        {place.significance}
                      </span>
                    )}
                  </h3>
                  <p>{place.description}</p>
                  <p><strong>Timing:</strong> {place.timing}</p>
                  <p><strong>Entry:</strong> {place.entryFee}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'precautions':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>⚠️ Pilgrimage Precautions & Tips</h2>
            <div style={styles.grid}>
              {kedarnathData.precautions.map((category, index) => (
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
        <h1 style={styles.title}>🛕 Kedarnath - Abode of Lord Shiva</h1>
        <p style={styles.subtitle}>Complete Pilgrimage Guide to Sacred Jyotirlinga</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'shopping', 'accommodation', 'places', 'precautions'].map(tab => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = '#d1e0ff';
                e.target.style.color = '#1e3c72';
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
            {tab === 'accommodation' && '🏔️ Stay'}
            {tab === 'places' && '🛕 Places'}
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

export default KedarnathTravelGuide;