import React, { useState } from 'react';

const KasolTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Kasol Images for Carousel
  const kasolImages = [
    {
      url: "https://images.unsplash.com/photo-1612638039814-1a67ea727114?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fzb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Parvati Valley",
      description: "Breathtaking views of the Himalayan valley"
    },
    {
      url: "https://images.unsplash.com/photo-1662944113366-123561a844e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2Fzb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Riverside Camps",
      description: "Serene campsites along the Parvati River"
    },
    {
      url: "https://images.unsplash.com/photo-1643042725188-42df82135f1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2Fzb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Israeli Cafes",
      description: "Famous cafes with international cuisine"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f0f8f5',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #2d5016, #4a7c59)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(45, 80, 22, 0.3)'
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
      backgroundColor: '#2d5016',
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
      color: '#2d5016',
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
      border: '2px solid #e0f0e0',
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
      backgroundColor: '#2d5016',
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
      color: '#2d5016',
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
      backgroundColor: '#2d5016',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(45, 80, 22, 0.4)'
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
      color: '#2d5016',
      borderBottom: '3px solid #4a7c59',
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
      border: '2px solid #e0f0e0',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(45, 80, 22, 0.1)',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(45, 80, 22, 0.2)'
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
      color: '#2d5016',
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
    }
  };

  // Kasol Travel Data
  const kasolData = {
    overview: {
      title: "Kasol - Mini Israel of India",
      content: `Nestled in the Parvati Valley of Himachal Pradesh, Kasol is a picturesque hamlet known as 'Mini Israel' due to its popularity among Israeli backpackers. This hippie paradise offers stunning mountain views, serene riverside camps, thrilling treks, and a vibrant international cafe culture. Perfect for solo travelers, adventure enthusiasts, and those seeking peace in the Himalayas.`
    },
    famousFoods: [
      {
        name: "Israeli Breakfast",
        description: "Authentic Israeli platter with hummus, pita, falafel and shakshuka",
        place: "Evergreen Cafe, Little Italy",
        price: "₹300-500"
      },
      {
        name: "Trout Fish",
        description: "Fresh river trout prepared in local style",
        place: "Riverside restaurants",
        price: "₹400-600"
      },
      {
        name: "Himachali Dham",
        description: "Traditional festive meal with local delicacies",
        place: "Local dhabas",
        price: "₹200-350"
      }
    ],
    shopping: [
      {
        category: "Hippie Clothing & Accessories",
        description: "Bohemian dresses, harem pants, silver jewelry and dreamcatchers",
        places: ["Kasol Market", "Chalal Road", "Local flea markets"],
        priceRange: "₹200 - ₹5000"
      },
      {
        category: "Local Handicrafts",
        description: "Wooden artifacts, woolen caps, and Himalayan souvenirs",
        places: ["Kasol Main Market", "Manikaran Road"],
        priceRange: "₹100 - ₹2000"
      }
    ],
    hotels: [
      {
        name: "The Hosteller Kasol",
        type: "Backpacker Hostel",
        price: "₹500-1500/night",
        location: "Kasol Main Market"
      },
      {
        name: "Parvati Woods Camp",
        type: "Riverside Camping",
        price: "₹1200-2500/night",
        location: "Parvati Riverside"
      },
      {
        name: "Snow Valley Resort",
        type: "Luxury Resort",
        price: "₹3000-8000/night",
        location: "Hillside Kasol"
      }
    ],
    places: [
      {
        name: "Kheerganga Trek",
        description: "Famous 12km trek to natural hot water springs with breathtaking valley views",
        timing: "6-8 hours trek",
        entryFee: "Free (Guide: ₹1000-2000)",
        difficulty: "Moderate"
      },
      {
        name: "Manikaran Sahib",
        description: "Sacred Gurudwara with hot springs, located 6km from Kasol",
        timing: "24 hours",
        entryFee: "Free",
        difficulty: "Easy"
      },
      {
        name: "Chalal Village",
        description: "Peaceful village across the river, popular for its hippie culture",
        timing: "Daytime",
        entryFee: "Free",
        difficulty: "Easy"
      },
      {
        name: "Tosh Village",
        description: "Scenic village at the end of Parvati Valley, perfect for extended stays",
        timing: "Day trip",
        entryFee: "Free",
        difficulty: "Moderate"
      }
    ],
    precautions: [
      {
        category: "Trekking Safety",
        tips: [
          "Hire local guides for difficult treks",
          "Carry water, snacks and first-aid kit",
          "Start early to avoid afternoon weather changes",
          "Check weather forecast before trekking"
        ]
      },
      {
        category: "General Precautions",
        tips: [
          "Carry cash as ATMs are limited",
          "Respect local culture and traditions",
          "Avoid traveling during heavy rainfall",
          "Keep important documents safe",
          "Be cautious near river areas"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === kasolImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? kasolImages.length - 1 : prevIndex - 1
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

  const getDifficultyStyle = (difficulty) => {
    switch(difficulty?.toLowerCase()) {
      case 'easy': return styles.easy;
      case 'moderate': return styles.moderate;
      case 'challenging': return styles.challenging;
      default: return styles.easy;
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
                src={kasolImages[currentImageIndex].url} 
                alt={kasolImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{kasolImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{kasolImages[currentImageIndex].description}</p>
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
                {kasolImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Kasol - Mini Israel of India</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {kasolData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2d5016', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Perfect weather for trekking</p>
                <p><span style={styles.highlight}>September to November:</span> Clear skies, great photography</p>
                <p><span style={styles.highlight}>December to February:</span> Snow season, very cold</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2d5016', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Road:</span> 8-10 hours from Delhi via Bhuntar</p>
                <p><span style={styles.highlight}>Nearest Airport:</span> Bhuntar Airport (31km)</p>
                <p><span style={styles.highlight}>Nearest Railway:</span> Joginder Nagar (144km)</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Kasol Experience</h3>
              <p>Share your Himalayan adventure and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Adventure Experience</h4>
                  <p>How was your trip to Kasol?</p>
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
            <h2 style={styles.sectionTitle}>🍽️ International & Local Cuisine</h2>
            <div style={styles.grid}>
              {kasolData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Best Place:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'shopping':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🛍️ Hippie Shopping in Kasol</h2>
            <div style={styles.grid}>
              {kasolData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{item.category}</h3>
                  <p>{item.description}</p>
                  <p><strong>Best Places:</strong> {item.places.join(', ')}</p>
                  <p><strong>Price Range:</strong> <span style={styles.price}>{item.priceRange}</span></p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'hotels':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏕️ Stays & Accommodation</h2>
            <div style={styles.grid}>
              {kasolData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{hotel.name}</h3>
                  <p><strong>Type:</strong> {hotel.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{hotel.price}</span></p>
                  <p><strong>Location:</strong> {hotel.location}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'places':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🥾 Adventure & Sightseeing</h2>
            <div style={styles.grid}>
              {kasolData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>
                    {place.name}
                    {place.difficulty && (
                      <span style={{...styles.difficulty, ...getDifficultyStyle(place.difficulty)}}>
                        {place.difficulty}
                      </span>
                    )}
                  </h3>
                  <p>{place.description}</p>
                  <p><strong>Duration:</strong> {place.timing}</p>
                  <p><strong>Cost:</strong> {place.entryFee}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'precautions':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>⚠️ Adventure Precautions & Tips</h2>
            <div style={styles.grid}>
              {kasolData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{category.category}</h3>
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
            placeholder="Share your adventure experience (optional)..."
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
        <h1 style={styles.title}>🏔️ Kasol - Mini Israel of India</h1>
        <p style={styles.subtitle}>Complete Adventure Guide to Parvati Valley</p>
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
                e.target.style.backgroundColor = '#e0f0e0';
                e.target.style.color = '#2d5016';
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
            {tab === 'hotels' && '🏕️ Stays'}
            {tab === 'places' && '🥾 Adventure'}
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

export default KasolTravelGuide;