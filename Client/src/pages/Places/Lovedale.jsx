import React, { useState } from 'react';

const LovedaleTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Lovedale Images for Carousel
  const lovedaleImages = [
    {
      url: "https://images.unsplash.com/photo-1729228639759-bf2e14d8673d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG92ZWRhbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Tea Gardens",
      description: "Verdant tea plantations surrounding Lovedale"
    },
    {
      url: "https://images.unsplash.com/photo-1708505116595-488b5cbf58d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG92ZWRhbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Misty Valleys",
      description: "Beautiful mist-covered valleys in the Nilgiris"
    },
    {
      url: "https://images.unsplash.com/photo-1589908916333-ff0862dc16be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZWRhbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Colonial Bungalows",
      description: "Charming British-era architecture"
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
      background: 'linear-gradient(135deg, #1b5e20, #388e3c)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(27, 94, 32, 0.3)'
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
      backgroundColor: '#1b5e20',
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
      color: '#1b5e20',
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
      backgroundColor: '#e8f5e9',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #c8e6c9',
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
      backgroundColor: '#1b5e20',
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
      color: '#1b5e20',
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
      backgroundColor: '#1b5e20',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(27, 94, 32, 0.4)'
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
      color: '#1b5e20',
      borderBottom: '3px solid #388e3c',
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
      backgroundColor: '#e8f5e9',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #c8e6c9',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(27, 94, 32, 0.1)',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(27, 94, 32, 0.2)'
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
      color: '#1b5e20',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#388e3c',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    category: {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginLeft: '10px'
    },
    nature: {
      backgroundColor: '#e8f5e8',
      color: '#1b5e20'
    },
    historical: {
      backgroundColor: '#fff3e0',
      color: '#e65100'
    },
    sports: {
      backgroundColor: '#e3f2fd',
      color: '#1565c0'
    },
    scenic: {
      backgroundColor: '#f3e5f5',
      color: '#7b1fa2'
    }
  };

  // Lovedale Travel Data
  const lovedaleData = {
    overview: {
      title: "Lovedale - Tea Garden Paradise",
      content: `Lovedale is a picturesque hamlet nestled in the Nilgiri Hills of Tamil Nadu, known for its sprawling tea estates, colonial charm, and prestigious educational institutions. Situated near Ooty, this tranquil destination offers breathtaking views of tea plantations, mist-covered valleys, and pristine natural beauty. Lovedale is famous for its world-class boarding schools, golf course, and as a peaceful retreat away from the bustling hill station crowds.`
    },
    famousFoods: [
      {
        name: "Nilgiri Tea",
        description: "Freshly brewed tea from local plantations with authentic flavor",
        place: "Tea estate visits, local cafes",
        price: "₹20-50 per cup"
      },
      {
        name: "Traditional South Indian",
        description: "Idli, dosa, vada with authentic Tamil Nadu flavors",
        place: "Local restaurants, school canteens",
        price: "₹80-150"
      },
      {
        name: "English Breakfast",
        description: "Colonial-style breakfast with baked beans, toast, and eggs",
        place: "Heritage bungalows, premium hotels",
        price: "₹200-400"
      },
      {
        name: "Local Bakeries",
        description: "Freshly baked cookies, cakes, and pastries",
        place: "Local bakeries, Lovedale market",
        price: "₹50-200"
      }
    ],
    shopping: [
      {
        category: "Tea & Spices",
        description: "Fresh Nilgiri tea, homemade chocolates, and local spices",
        places: ["Tea estates", "Local market", "Ooty shops"],
        priceRange: "₹100 - ₹2000"
      },
      {
        category: "Handicrafts",
        description: "Wooden artifacts, handmade candles, and local crafts",
        places: ["Lovedale market", "Ooty Commercial Road"],
        priceRange: "₹200 - ₹5000"
      },
      {
        category: "Woolen Clothes",
        description: "Hand-knitted sweaters, shawls, and winter wear",
        places: ["Local shops", "Ooty markets"],
        priceRange: "₹500 - ₹3000"
      }
    ],
    hotels: [
      {
        name: "Savoy Hotel",
        type: "Luxury Heritage",
        price: "₹6000-15000/night",
        location: "Ooty-Lovedale Road",
        facilities: "Tea garden views, fireplace, fine dining"
      },
      {
        name: "Fortune Resort Sullivan Court",
        type: "Premium Resort",
        price: "₹5000-12000/night",
        location: "Lovedale",
        facilities: "Golf course access, spa, multiple restaurants"
      },
      {
        name: "Hotel Lakeview",
        type: "Mid-range Hotel",
        price: "₹3000-7000/night",
        location: "Near Lovedale",
        facilities: "Mountain views, restaurant, travel desk"
      },
      {
        name: "Homestays",
        type: "Budget Accommodation",
        price: "₹1500-4000/night",
        location: "Lovedale area",
        facilities: "Home-cooked meals, local experience"
      }
    ],
    places: [
      {
        name: "Lovedale Tea Estates",
        description: "Vast expanses of tea plantations offering guided tours and tea tasting sessions",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "Free (Tours: ₹200-500)",
        category: "Nature"
      },
      {
        name: "The Lawrence School",
        description: "Prestigious boarding school with beautiful colonial architecture and sprawling campus",
        timing: "Visits by prior appointment",
        entryFee: "Permission required",
        category: "Historical"
      },
      {
        name: "Lovedale Golf Course",
        description: "Picturesque 9-hole golf course surrounded by tea gardens and mountains",
        timing: "7:00 AM - 6:00 PM",
        entryFee: "₹1000-2000 for visitors",
        category: "Sports"
      },
      {
        name: "Ooty Lake",
        description: "Beautiful artificial lake located 6km from Lovedale, perfect for boating",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "₹20 entry, Boating: ₹150-500",
        category: "Scenic"
      },
      {
        name: "Doddabetta Peak",
        description: "Highest point in Tamil Nadu offering panoramic views of Nilgiris",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "₹20 for adults",
        category: "Scenic"
      },
      {
        name: "Botanical Gardens",
        description: "Well-maintained gardens with rare plant species, located near Ooty",
        timing: "7:00 AM - 6:30 PM",
        entryFee: "₹30 for adults",
        category: "Nature"
      },
      {
        name: "Pykara Falls",
        description: "Scenic waterfall and lake located 21km from Lovedale",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "Free",
        category: "Nature"
      }
    ],
    activities: [
      {
        name: "Tea Estate Tours",
        description: "Guided tours through tea plantations with tasting sessions",
        duration: "2-3 hours",
        bestTime: "Morning"
      },
      {
        name: "Nature Walks",
        description: "Peaceful walks through tea gardens and forest trails",
        duration: "1-2 hours",
        bestTime: "Early morning/Evening"
      },
      {
        name: "Golfing",
        description: "Play golf at one of India's most scenic courses",
        duration: "3-4 hours",
        bestTime: "Daytime"
      },
      {
        name: "Photography",
        description: "Capture stunning landscapes and colonial architecture",
        duration: "Flexible",
        bestTime: "Golden hours"
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry woolens throughout the year - temperatures can drop suddenly",
          "Raincoat/umbrella essential during monsoon (June-September)",
          "Comfortable walking shoes for exploring tea estates",
          "Sunscreen and hats for daytime sun protection"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines for altitude and motion sickness",
          "Stay hydrated but drink only bottled or boiled water",
          "Be cautious on winding roads and steep pathways",
          "Carry emergency contact numbers"
        ]
      },
      {
        category: "Travel & Navigation",
        tips: [
          "Cash is essential - limited ATM availability in Lovedale",
          "Mobile network can be patchy in remote areas",
          "Book accommodation in advance during peak season (April-June)",
          "Respect private property and school premises"
        ]
      },
      {
        category: "Local Etiquette",
        tips: [
          "Seek permission before photographing people or private properties",
          "Dress modestly when visiting educational institutions",
          "Maintain silence in residential and school areas",
          "Respect local customs and traditions"
        ]
      }
    ],
    transportation: {
      nearestAirport: "Coimbatore International Airport (88km)",
      nearestRailway: "Ooty Railway Station (5km), Mettupalayam (46km)",
      road: "Well-connected by road from Coimbatore, Bangalore, Mysore",
      local: "Taxis, auto-rickshaws, limited bus service"
    },
    educational: {
      institutions: [
        "The Lawrence School Lovedale",
        "Cranleigh School (nearby)",
        "St. Hilda's School (near Ooty)"
      ],
      note: "Most schools require prior permission for visits"
    }
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === lovedaleImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? lovedaleImages.length - 1 : prevIndex - 1
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

  const getCategoryStyle = (category) => {
    switch(category?.toLowerCase()) {
      case 'nature': return styles.nature;
      case 'historical': return styles.historical;
      case 'sports': return styles.sports;
      case 'scenic': return styles.scenic;
      default: return styles.nature;
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
                src={lovedaleImages[currentImageIndex].url} 
                alt={lovedaleImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{lovedaleImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{lovedaleImages[currentImageIndex].description}</p>
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
                {lovedaleImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🌿 About Lovedale - Tea Garden Paradise</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {lovedaleData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1b5e20', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>September to November:</span> Post-monsoon greenery, beautiful landscapes</p>
                <p><span style={styles.highlight}>December to February:</span> Winter chill, misty mornings</p>
                <p><span style={{color: '#f44336', fontWeight: 'bold'}}>Monsoon:</span> June-August (heavy rains, landslides possible)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1b5e20', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Coimbatore Airport (88km)</p>
                <p><span style={styles.highlight}>By Train:</span> Ooty (5km) or Mettupalayam (46km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well-connected from major South Indian cities</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, autos, limited buses</p>
              </div>

              <div style={styles.card}>
                <h3 style={{color: '#1b5e20', marginBottom: '15px'}}>🎓 Educational Institutions</h3>
                {lovedaleData.educational.institutions.map((school, index) => (
                  <p key={index} style={{marginBottom: '8px'}}>• {school}</p>
                ))}
                <p style={{fontSize: '14px', color: '#666', marginTop: '10px'}}>
                  {lovedaleData.educational.note}
                </p>
              </div>
            </div>

            {/* Activities Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>🥾 Popular Activities</h3>
              <div style={styles.grid}>
                {lovedaleData.activities.map((activity, index) => (
                  <div key={index} style={styles.ratingCard}>
                    <h4 style={{color: '#1b5e20', marginBottom: '10px'}}>{activity.name}</h4>
                    <p>{activity.description}</p>
                    <p><strong>Duration:</strong> {activity.duration}</p>
                    <p><strong>Best Time:</strong> {activity.bestTime}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Lovedale Experience</h3>
              <p>Share your tea garden retreat and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Nature Experience</h4>
                  <p>How was your visit to Lovedale?</p>
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
            <h2 style={styles.sectionTitle}>🍽️ Local Cuisine & Tea Experiences</h2>
            <div style={styles.grid}>
              {lovedaleData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1b5e20', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Local Shopping</h2>
            <div style={styles.grid}>
              {lovedaleData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1b5e20', marginBottom: '15px'}}>{item.category}</h3>
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
            <h2 style={styles.sectionTitle}>🏡 Accommodation & Stays</h2>
            <div style={styles.grid}>
              {lovedaleData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1b5e20', marginBottom: '15px'}}>{hotel.name}</h3>
                  <p><strong>Type:</strong> {hotel.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{hotel.price}</span></p>
                  <p><strong>Location:</strong> {hotel.location}</p>
                  <p><strong>Facilities:</strong> {hotel.facilities}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'places':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🌄 Places to Visit</h2>
            <div style={styles.grid}>
              {lovedaleData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1b5e20', marginBottom: '15px'}}>
                    {place.name}
                    {place.category && (
                      <span style={{...styles.category, ...getCategoryStyle(place.category)}}>
                        {place.category}
                      </span>
                    )}
                  </h3>
                  <p>{place.description}</p>
                  <p><strong>Timing:</strong> {place.timing}</p>
                  <p><strong>Entry Fee:</strong> {place.entryFee}</p>
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
              {lovedaleData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1b5e20', marginBottom: '15px'}}>{category.category}</h3>
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
            placeholder="Share your tea garden experience (optional)..."
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
        <h1 style={styles.title}>🌿 Lovedale - Tea Garden Paradise</h1>
        <p style={styles.subtitle}>Complete Travel Guide to Nilgiri's Hidden Gem</p>
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
                e.target.style.backgroundColor = '#c8e6c9';
                e.target.style.color = '#1b5e20';
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
            {tab === 'hotels' && '🏡 Stays'}
            {tab === 'places' && '🌄 Places'}
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

export default LovedaleTravelGuide;