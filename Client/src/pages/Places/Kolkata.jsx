import React, { useState } from 'react';

const KolkataTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Kolkata Images for Carousel
  const kolkataImages = [
    {
      url: "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Howrah Bridge",
      description: "Iconic cantilever bridge over Hooghly River"
    },
    {
      url: "https://images.unsplash.com/photo-1603813507806-0d311a6eecd1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Victoria Memorial",
      description: "Majestic marble museum in white"
    },
    {
      url: "https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Dakshineswar Kali Temple",
      description: "Sacred temple on the banks of Hooghly"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#fffaf0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #8B0000, #B22222)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(139, 0, 0, 0.3)'
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
      backgroundColor: '#8B0000',
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
      color: '#8B0000',
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
      backgroundColor: '#fff5f5',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #ffcccc',
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
      backgroundColor: '#8B0000',
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
      color: '#8B0000',
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
      backgroundColor: '#8B0000',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(139, 0, 0, 0.4)'
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
      color: '#8B0000',
      borderBottom: '3px solid #B22222',
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
      backgroundColor: '#fff5f5',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #ffcccc',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 0, 0, 0.1)',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(139, 0, 0, 0.2)'
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
      color: '#8B0000',
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
    historical: {
      backgroundColor: '#e8f5e8',
      color: '#2d5016'
    },
    cultural: {
      backgroundColor: '#fff3e0',
      color: '#e65100'
    },
    religious: {
      backgroundColor: '#e3f2fd',
      color: '#1565c0'
    },
    food: {
      backgroundColor: '#f3e5f5',
      color: '#7b1fa2'
    }
  };

  // Kolkata Travel Data
  const kolkataData = {
    overview: {
      title: "Kolkata - City of Joy",
      content: `Kolkata, formerly Calcutta, is the cultural capital of India and the capital of West Bengal. Known as the 'City of Joy', it is celebrated for its rich literary and artistic heritage, colonial architecture, intellectual fervor, and warm-hearted people. From the iconic Howrah Bridge to the majestic Victoria Memorial, from Durga Puja celebrations to mouth-watering street food, Kolkata offers a unique blend of tradition and modernity.`
    },
    famousFoods: [
      {
        name: "Kathi Rolls",
        description: "Flaky paratha wrapped around spiced fillings, Kolkata's signature street food",
        place: "Nizam's, Kusum Rolls, Park Street",
        price: "₹80-200 per roll"
      },
      {
        name: "Macher Jhol",
        description: "Traditional Bengali fish curry with rice, staple of Bengali cuisine",
        place: "6 Ballygunge Place, Oh! Calcutta",
        price: "₹300-600"
      },
      {
        name: "Misti Doi & Rosogolla",
        description: "Sweet yogurt and spongy cottage cheese balls in syrup",
        place: "KC Das, Balaram Mullick, Ganguram",
        price: "₹50-200"
      },
      {
        name: "Phuchka",
        description: "Crisp hollow puris filled with spicy tamarind water and potato",
        place: "Victoria Memorial, Southern Avenue",
        price: "₹20-50 for 6 pieces"
      },
      {
        name: "Bengali Thali",
        description: "Complete meal with rice, fish, vegetables, dal and sweets",
        place: "Bhojohori Manna, Kewpie's",
        price: "₹400-800"
      }
    ],
    shopping: [
      {
        category: "Traditional Bengali Sarees",
        description: "Baluchari, Tant, Dhakai, and Kantha stitch sarees",
        places: ["Gariahat Market", "New Market", "Shree Mahalakshmi"],
        priceRange: "₹2000 - ₹50000"
      },
      {
        category: "Terracotta & Handicrafts",
        description: "Bankura horses, Dokra art, clay idols, and handicrafts",
        places: ["Dakshinapan", "College Street", "New Market"],
        priceRange: "₹100 - ₹10000"
      },
      {
        category: "Books & Literature",
        description: "Rare books, academic texts, and Bengali literature",
        places: ["College Street", "Seagull Bookstore", "Oxford Bookstore"],
        priceRange: "₹50 - ₹5000"
      }
    ],
    hotels: [
      {
        name: "Taj Bengal",
        type: "Luxury Heritage",
        price: "₹10000-30000/night",
        location: "Alipore",
        facilities: "Pool, spa, fine dining, heritage rooms"
      },
      {
        name: "The Oberoi Grand",
        type: "Historic Luxury",
        price: "₹12000-35000/night",
        location: "Park Street",
        facilities: "Colonial architecture, multiple restaurants"
      },
      {
        name: "ITC Sonar",
        type: "Business Luxury",
        price: "₹8000-20000/night",
        location: "EM Bypass",
        facilities: "Conference rooms, pool, spa"
      },
      {
        name: "Fairlawn Hotel",
        type: "Heritage Budget",
        price: "₹3000-8000/night",
        location: "Sudder Street",
        facilities: "Colonial charm, garden restaurant"
      }
    ],
    places: [
      {
        name: "Victoria Memorial",
        description: "Magnificent white marble museum built in memory of Queen Victoria",
        timing: "10:00 AM - 5:00 PM (Closed Mondays)",
        entryFee: "₹30 for Indians",
        category: "Historical"
      },
      {
        name: "Howrah Bridge",
        description: "Iconic cantilever bridge over Hooghly River, engineering marvel",
        timing: "24 hours",
        entryFee: "Free",
        category: "Historical"
      },
      {
        name: "Dakshineswar Kali Temple",
        description: "Famous temple where Ramakrishna Paramahamsa served as priest",
        timing: "6:00 AM - 12:30 PM, 3:00 PM - 8:30 PM",
        entryFee: "Free",
        category: "Religious"
      },
      {
        name: "Indian Museum",
        description: "Oldest and largest museum in India with diverse collections",
        timing: "10:00 AM - 5:00 PM (Closed Mondays)",
        entryFee: "₹50 for Indians",
        category: "Cultural"
      },
      {
        name: "Science City",
        description: "Largest science center in Indian subcontinent with interactive exhibits",
        timing: "9:00 AM - 8:00 PM",
        entryFee: "₹60 for adults",
        category: "Cultural"
      },
      {
        name: "Park Street",
        description: "Historic street known for restaurants, pubs, and Christmas decorations",
        timing: "All day",
        entryFee: "Free",
        category: "Food"
      },
      {
        name: "College Street",
        description: "Boi Para (Book Market) - World's largest second-hand book market",
        timing: "10:00 AM - 8:00 PM",
        entryFee: "Free",
        category: "Cultural"
      },
      {
        name: "Kalighat Temple",
        description: "One of 51 Shakti Peethas, dedicated to Goddess Kali",
        timing: "5:00 AM - 2:00 PM, 4:00 PM - 10:00 PM",
        entryFee: "Free",
        category: "Religious"
      }
    ],
    festivals: [
      {
        name: "Durga Puja",
        period: "October",
        description: "Largest festival with artistic pandals, cultural programs"
      },
      {
        name: "Kolkata International Film Festival",
        period: "November",
        description: "Premier film festival attracting international cinema"
      },
      {
        name: "Kolkata Book Fair",
        period: "January-February",
        description: "World's largest non-trade book fair"
      },
      {
        name: "Poila Boishakh",
        period: "April",
        description: "Bengali New Year with cultural programs and feasts"
      }
    ],
    precautions: [
      {
        category: "Weather & Climate",
        tips: [
          "Carry umbrella during monsoon (June-September)",
          "Wear light cotton clothes in summer (March-June)",
          "Carry woolens in winter (November-February)",
          "Stay hydrated in humid weather"
        ]
      },
      {
        category: "Transport & Navigation",
        tips: [
          "Use Kolkata Metro for quick city travel",
          "Bargain with yellow taxi drivers before ride",
          "Try tram rides for heritage experience",
          "Use app-based cabs for comfort"
        ]
      },
      {
        category: "Food & Shopping",
        tips: [
          "Try street food but ensure hygiene",
          "Bargain in local markets except fixed-price shops",
          "Carry cash for local markets and street shopping",
          "Check saree authenticity before purchase"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Respect religious places - remove shoes where required",
          "Dress modestly in temples and religious sites",
          "Ask permission before photography in sensitive areas",
          "Be prepared for crowded places during festivals"
        ]
      }
    ],
    transportation: {
      airport: "Netaji Subhash Chandra Bose International Airport (17km from city)",
      railway: "Howrah Junction, Sealdah Station, Kolkata Railway Station",
      metro: "Kolkata Metro - India's first metro railway",
      local: "Buses, Trams, Taxis, Auto-rickshaws, App-based cabs"
    }
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === kolkataImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? kolkataImages.length - 1 : prevIndex - 1
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
      case 'historical': return styles.historical;
      case 'cultural': return styles.cultural;
      case 'religious': return styles.religious;
      case 'food': return styles.food;
      default: return styles.historical;
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
                src={kolkataImages[currentImageIndex].url} 
                alt={kolkataImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{kolkataImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{kolkataImages[currentImageIndex].description}</p>
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
                {kolkataImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🎭 About Kolkata - City of Joy</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {kolkataData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B0000', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, festival season</p>
                <p><span style={styles.highlight}>April to June:</span> Summer, hot but good for indoor activities</p>
                <p><span style={styles.highlight}>June to September:</span> Monsoon, lush greenery but humid</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B0000', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Netaji Subhash Bose Airport (17km)</p>
                <p><span style={styles.highlight}>By Train:</span> Howrah, Sealdah, Kolkata stations</p>
                <p><span style={styles.highlight}>By Road:</span> Well-connected by national highways</p>
              </div>

              <div style={styles.card}>
                <h3 style={{color: '#8B0000', marginBottom: '15px'}}>🎉 Major Festivals</h3>
                {kolkataData.festivals.slice(0, 3).map((festival, index) => (
                  <p key={index}><strong>{festival.name}:</strong> {festival.period}</p>
                ))}
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Kolkata Experience</h3>
              <p>Share your cultural journey and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Cultural Experience</h4>
                  <p>How was your visit to Kolkata?</p>
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
            <h2 style={styles.sectionTitle}>🍽️ Bengali Cuisine & Street Food</h2>
            <div style={styles.grid}>
              {kolkataData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Kolkata</h2>
            <div style={styles.grid}>
              {kolkataData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{item.category}</h3>
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
            <h2 style={styles.sectionTitle}>🏨 Accommodation & Stays</h2>
            <div style={styles.grid}>
              {kolkataData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏛️ Places to Visit</h2>
            <div style={styles.grid}>
              {kolkataData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>
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
              {kolkataData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{category.category}</h3>
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
            placeholder="Share your Kolkata experience (optional)..."
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
        <h1 style={styles.title}>🎭 Kolkata - City of Joy</h1>
        <p style={styles.subtitle}>Complete Travel Guide to Cultural Capital of India</p>
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
                e.target.style.backgroundColor = '#ffcccc';
                e.target.style.color = '#8B0000';
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
            {tab === 'hotels' && '🏨 Stays'}
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

export default KolkataTravelGuide;