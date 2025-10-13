import React, { useState } from 'react';

const NagpurTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Nagpur Images for Carousel
  const nagpurImages = [
    {
      url: "https://plus.unsplash.com/premium_photo-1694475572292-5f19c8a188c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFncHVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Deekshabhoomi",
      description: "Sacred Buddhist monument and pilgrimage site"
    },
    {
      url: "https://images.unsplash.com/photo-1728306919437-2b94c1c43388?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnV0YWxhJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Futala Lake",
      description: "Beautiful lake with colorful fountains"
    },
    {
      url: "https://images.unsplash.com/photo-1695911242774-c089fc814913?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2l0YWJ1bGRpJTIwRm9ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Sitabuldi Fort",
      description: "Historic fort with panoramic city views"
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
      background: 'linear-gradient(135deg, #FF8C00, #FFA500)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(255, 140, 0, 0.3)'
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
      backgroundColor: '#FF8C00',
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
      color: '#FF8C00',
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
      border: '2px solid #ffd700',
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
      backgroundColor: '#FF8C00',
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
      backgroundColor: '#fff8dc',
      borderRadius: '5px',
      borderLeft: '3px solid #FFA500'
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
      color: '#FF8C00',
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
      backgroundColor: '#FFA500',
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
      backgroundColor: '#FF8C00',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(255, 140, 0, 0.4)'
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
      color: '#FF8C00',
      borderBottom: '3px solid #FFA500',
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
      border: '2px solid #ffd700',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(255, 140, 0, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#FF8C00',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#FFA500',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Nagpur Travel Data
  const nagpurData = {
    overview: {
      title: "Nagpur - Orange City of India",
      content: `Nagpur is the third largest city in Maharashtra and the winter capital of the state. Known as the 'Orange City' for being a major trade center of oranges cultivated in the region, Nagpur is also called the 'Tiger Capital of India' as it connects many Tiger Reserves in India to the world. The city is precisely located at the center of India with the Zero Mile Marker indicating the geographical center of the country. Nagpur has emerged as an important educational, commercial, and political center in Central India.`
    },
    famousFoods: [
      {
        name: "Saoji Chicken",
        description: "Spicy chicken curry with special Saoji masala",
        place: "Local Saoji restaurants, Street food stalls",
        price: "₹150-300",
        special: "Nagpur's signature non-veg dish"
      },
      {
        name: "Tarri Poha",
        description: "Flattened rice with spicy curry and toppings",
        place: "Breakfast stalls, Local eateries",
        price: "₹40-80",
        special: "Nagpur's unique breakfast"
      },
      {
        name: "Orange Barfi",
        description: "Sweet made from Nagpur oranges",
        place: "Sweet shops, Local markets",
        price: "₹200-400/kg",
        special: "Local orange specialty"
      },
      {
        name: "Samosa",
        description: "Crispy fried pastry with spicy potato filling",
        place: "Street vendors, Haldiram's",
        price: "₹15-30",
        special: "Nagpur style with unique chutney"
      },
      {
        name: "Methi Thecha",
        description: "Spicy fenugreek chutney with garlic",
        place: "Local restaurants, Street food",
        price: "₹30-60",
        special: "Traditional Maharashtrian accompaniment"
      }
    ],
    shopping: [
      {
        category: "Orange Products",
        description: "Products made from famous Nagpur oranges",
        places: ["Local markets", "Specialty stores", "Farmers markets"],
        items: ["Fresh oranges", "Orange marmalade", "Orange candy", "Orange squash"],
        priceRange: "₹100 - ₹2000",
        bestTime: "Winter season (Nov-Feb)"
      },
      {
        category: "Handicrafts",
        description: "Traditional Maharashtrian crafts",
        places: ["Sitabuldi Main Road", "Mahal", "Dharampeth"],
        items: ["Paithani sarees", "Wooden crafts", "Bamboo items", "Local art"],
        priceRange: "₹500 - ₹15000",
        bestTime: "Festival season"
      },
      {
        category: "Textiles",
        description: "Traditional and modern clothing",
        places: ["Itwari Market", "Sadar Bazaar", "Malls"],
        items: ["Cotton sarees", "Kurtas", "Dress materials", "Accessories"],
        priceRange: "₹200 - ₹10000",
        bestTime: "Year-round"
      },
      {
        category: "Spices & Snacks",
        description: "Local spices and traditional snacks",
        places: ["Itwari Market", "Local grocery stores"],
        items: ["Saoji masala", "Thecha", "Papad", "Local snacks"],
        priceRange: "₹50 - ₹1000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Le Meridien Nagpur",
        type: "Luxury Hotel",
        price: "₹7,000-20,000/night",
        rating: "4.6/5",
        facilities: ["Swimming Pool", "Spa", "Multiple Restaurants", "Business Center"],
        location: "Wardha Road",
        distance: "City center"
      },
      {
        name: "Radisson Blu Hotel",
        type: "Business Hotel",
        price: "₹5,000-15,000/night",
        rating: "4.4/5",
        facilities: ["Restaurant", "Bar", "Fitness Center", "Conference Hall"],
        location: "Civil Lines",
        distance: "Central location"
      },
      {
        name: "Hotel Centre Point",
        type: "Mid-range Hotel",
        price: "₹3,000-8,000/night",
        rating: "4.1/5",
        facilities: ["Restaurant", "Parking", "Room Service", "Travel Desk"],
        location: "Ramdaspeth",
        distance: "Commercial area"
      },
      {
        name: "Hotel Orange City",
        type: "Budget Hotel",
        price: "₹1,500-4,000/night",
        rating: "3.9/5",
        facilities: ["Basic Amenities", "Restaurant", "Parking"],
        location: "Central Avenue",
        distance: "Walking distance to markets"
      }
    ],
    places: [
      {
        name: "Deekshabhoomi",
        description: "Sacred monument of Buddhism and pilgrimage site",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning or evening",
        highlights: ["Buddhist Stupa", "Dr. Ambedkar Memorial", "Peaceful Atmosphere", "Architecture"]
      },
      {
        name: "Futala Lake",
        description: "Beautiful lake with musical fountain and food stalls",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Evening for fountain show",
        highlights: ["Musical Fountain", "Boating", "Food Stalls", "Evening Views"]
      },
      {
        name: "Sitabuldi Fort",
        description: "Historic fort with panoramic city views",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning hours",
        highlights: ["Historical Significance", "City Views", "Photography", "Gardens"]
      },
      {
        name: "Raman Science Centre",
        description: "Interactive science museum and planetarium",
        timing: "10:00 AM - 6:00 PM",
        entryFee: "₹50 for adults",
        bestTime: "Daytime",
        highlights: ["Science Exhibits", "Planetarium", "Interactive Displays", "Educational"]
      },
      {
        name: "Maharajbagh Zoo",
        description: "Zoological park and botanical garden",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "₹25 for adults",
        bestTime: "Morning hours",
        highlights: ["Animal Enclosures", "Botanical Garden", "Children's Park", "Nature Walk"]
      },
      {
        name: "Zero Mile Stone",
        description: "Monument marking geographical center of India",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Daytime",
        highlights: ["Historical Marker", "Photography", "Geographical Significance"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Light cotton clothes in summer (Mar-Jun)",
          "Carry umbrella during monsoon (Jul-Sep)",
          "Warm clothes in winter (Nov-Feb)",
          "Comfortable walking shoes for city exploration"
        ]
      },
      {
        category: "Transport & Commute",
        tips: [
          "Use app-based taxis for convenient travel",
          "Auto-rickshaws available for short distances",
          "City buses connect major areas",
          "Traffic can be heavy during peak hours"
        ]
      },
      {
        category: "Food & Water",
        tips: [
          "Try local street food from clean stalls",
          "Drink bottled water",
          "Be cautious with spicy food if not accustomed",
          "Carry water during sightseeing"
        ]
      },
      {
        category: "Shopping & Markets",
        tips: [
          "Bargain at local markets",
          "Check quality of orange products",
          "Carry cash for street shopping",
          "Visit markets in morning for fresh produce"
        ]
      },
      {
        category: "General Safety",
        tips: [
          "Be cautious with valuables in crowded areas",
          "Keep emergency contacts handy",
          "Respect local customs and traditions",
          "Learn basic Marathi phrases"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === nagpurImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? nagpurImages.length - 1 : prevIndex - 1
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
                src={nagpurImages[currentImageIndex].url} 
                alt={nagpurImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{nagpurImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{nagpurImages[currentImageIndex].description}</p>
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
                {nagpurImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🍊 About Nagpur - Orange City of India</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {nagpurData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#FF8C00', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, orange season</p>
                <p><span style={styles.highlight}>Monsoon (Jun-Sept):</span> Moderate rains, lush greenery</p>
                <p><span style={styles.highlight}>Summer (Apr-Jun):</span> Hot and dry, good for indoor activities</p>
                <p><span style={styles.highlight}>Winter (Nov-Feb):</span> Cool weather, perfect for sightseeing</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#FF8C00', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Dr. Babasaheb Ambedkar International Airport</p>
                <p><span style={styles.highlight}>By Train:</span> Nagpur Junction (major railway station)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected via national highways</p>
                <p><span style={styles.highlight}>Local Transport:</span> City buses, Auto-rickshaws, Taxis, Metro</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Nagpur Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall City Experience</h4>
                  <p>How was your visit to Nagpur?</p>
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
                  <h4>Local Food Experience</h4>
                  <p>How was the local cuisine and street food?</p>
                  {userRatings.food ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.food.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.food.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'food', type: 'Local Food' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Sightseeing Experience</h4>
                  <p>How were the tourist attractions and monuments?</p>
                  {userRatings.sightseeing ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.sightseeing.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.sightseeing.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'sightseeing', type: 'Sightseeing' })}
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
              {nagpurData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF8C00', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Nagpur</h2>
            <div style={styles.grid}>
              {nagpurData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF8C00', marginBottom: '15px'}}>{item.category}</h3>
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
              {nagpurData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF8C00', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏞️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {nagpurData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF8C00', marginBottom: '15px'}}>{place.name}</h3>
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
              {nagpurData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF8C00', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police:</strong> 0712-256 2626 | <strong>Hospital:</strong> 0712-256 3171</p>
              <p><strong>Tourist Information Center:</strong> 0712-256 2471</p>
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
        <h1 style={styles.title}>🍊 Nagpur</h1>
        <p style={styles.subtitle}>Orange City of India - Tiger Capital</p>
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
                e.target.style.backgroundColor = '#ffd700';
                e.target.style.color = '#FF8C00';
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
            {tab === 'places' && '🏞️ Places'}
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
        marginTop: '40px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Nagpur Travel Guide. Experience the Orange City!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring Central India
        </p>
      </div>
    </div>
  );
};

export default NagpurTravelGuide;