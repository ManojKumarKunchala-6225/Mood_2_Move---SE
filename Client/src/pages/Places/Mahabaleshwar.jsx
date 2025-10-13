import React, { useState } from 'react';

const MahabaleshwarTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Mahabaleshwar Images for Carousel
  const mahabaleshwarImages = [
    {
      url: "https://media.istockphoto.com/id/492601337/photo/pratapgad-fort.webp?a=1&b=1&s=612x612&w=0&k=20&c=6ZxuB9Lu2dfwfPh1R0E11Yt447-exoVRgEKximF_3Lg=",
      title: "Pratapgad Fort",
      description: "Historical fort with panoramic views"
    },
    {
      url: "https://images.unsplash.com/photo-1756027419676-658b1dc51c12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVubmElMjBsYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Venna Lake",
      description: "Beautiful lake with boating facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1721817708574-640ddbd22d85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rhd2JlcnJ5JTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Strawberry Farms",
      description: "Famous strawberry plantations"
    },
    
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
      backgroundColor: '#f1f8e9',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #c5e1a5',
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
      backgroundColor: '#f1f8e9',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #c5e1a5',
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

  // Mahabaleshwar Travel Data
  const mahabaleshwarData = {
    overview: {
      title: "Mahabaleshwar - Queen of Hill Stations",
      content: `Mahabaleshwar is a beautiful hill station located in the Western Ghats of Maharashtra. Known as the 'Queen of Hill Stations', it's famous for its stunning viewpoints, strawberry farms, ancient temples, and pleasant climate throughout the year. The town offers breathtaking views of valleys and lush green landscapes.`
    },
    famousFoods: [
      {
        name: "Fresh Strawberries",
        description: "Freshly picked strawberries from local farms",
        place: "Mapro Garden, Local Farms",
        price: "₹100-300 per kg",
        special: "Available October to May"
      },
      {
        name: "Strawberry Cream",
        description: "Fresh strawberries with cream and honey",
        place: "Mapro Garden, Hotel restaurants",
        price: "₹150-250",
        special: "Signature dessert"
      },
      {
        name: "Corn Patties",
        description: "Spicy corn patties served with chutney",
        place: "Local street vendors, Hotels",
        price: "₹50-100",
        special: "Popular snack"
      },
      {
        name: "Parsi Berry Pulav",
        description: "Traditional Parsi dish with local berries",
        place: "Irani restaurants, Local dhabas",
        price: "₹200-350",
        special: "Local specialty"
      }
    ],
    shopping: [
      {
        category: "Strawberry Products",
        description: "Various products made from fresh strawberries",
        places: ["Mapro Garden", "Local farms", "Mahabaleshwar Market"],
        items: ["Strawberry Jam", "Strawberry Crush", "Strawberry Syrup", "Fresh Strawberries"],
        priceRange: "₹150 - ₹500",
        bestTime: "October to May"
      },
      {
        category: "Local Handicrafts",
        description: "Traditional Maharashtrian handicrafts",
        places: ["Main Market", "Local shops", "Craft stores"],
        items: ["Wooden artifacts", "Local paintings", "Handmade jewelry", "Souvenirs"],
        priceRange: "₹200 - ₹2000",
        bestTime: "Year-round"
      },
      {
        category: "Woolen Clothes",
        description: "Warm woolen clothes for cold weather",
        places: ["Local markets", "Shops near viewpoints"],
        items: ["Sweaters", "Shawls", "Caps", "Gloves"],
        priceRange: "₹300 - ₹1500",
        bestTime: "Winter season"
      },
      {
        category: "Honey & Jams",
        description: "Natural honey and fruit preserves",
        places: ["Mapro Garden", "Local farms", "Main Market"],
        items: ["Multiflora Honey", "Fruit Jams", "Squashes", "Pickles"],
        priceRange: "₹200 - ₹800",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "The Ravla Hotel",
        type: "Luxury Resort",
        price: "₹6000-15000/night",
        rating: "4.5/5",
        facilities: ["Swimming Pool", "Spa", "Multiple Restaurants", "Garden"],
        location: "Near Venna Lake",
        distance: "1 km from lake"
      },
      {
        name: "Sunderban Resort",
        type: "Premium Resort",
        price: "₹4000-10000/night",
        rating: "4.3/5",
        facilities: ["Garden", "Restaurant", "Parking", "Room Service"],
        location: "Mahabaleshwar Road",
        distance: "2 km from market"
      },
      {
        name: "Hotel Panorama",
        type: "Mid-range Hotel",
        price: "₹2500-6000/night",
        rating: "4.1/5",
        facilities: ["Restaurant", "Travel Desk", "Parking", "Hot Water"],
        location: "Main Market Area",
        distance: "Walking distance to market"
      },
      {
        name: "MTDC Resort",
        type: "Budget Government",
        price: "₹1500-4000/night",
        rating: "3.8/5",
        facilities: ["Basic Rooms", "Restaurant", "Parking", "Garden"],
        location: "Near Bus Stand",
        distance: "1 km from market"
      }
    ],
    places: [
      {
        name: "Pratapgad Fort",
        description: "Historical fort built by Shivaji Maharaj with panoramic views",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "Free, Guide: ₹200-500",
        bestTime: "Morning or evening",
        highlights: ["Historical significance", "Viewpoints", "Bhavani Temple", "Hiking"]
      },
      {
        name: "Venna Lake",
        description: "Beautiful man-made lake with boating and horse riding",
        timing: "8:00 AM - 7:00 PM",
        entryFee: "Free, Boating: ₹200-500",
        bestTime: "Evening for sunset",
        highlights: ["Boating", "Horse Riding", "Food Stalls", "Sunset Views"]
      },
      {
        name: "Mapro Garden",
        description: "Famous garden and food park with strawberry products",
        timing: "9:00 AM - 10:00 PM",
        entryFee: "Free",
        bestTime: "Morning or evening",
        highlights: ["Strawberry Products", "Food Court", "Garden", "Shopping"]
      },
      {
        name: "Lingmala Waterfall",
        description: "Majestic waterfall especially beautiful during monsoon",
        timing: "7:00 AM - 6:00 PM",
        entryFee: "₹10 per person",
        bestTime: "Monsoon season",
        highlights: ["Waterfall View", "Rainbow Formation", "Photography", "Nature Walk"]
      },
      {
        name: "Wilson Point",
        description: "Highest point in Mahabaleshwar, perfect for sunrise",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Sunrise",
        highlights: ["Sunrise View", "Photography", "Panoramic Views", "Peaceful Atmosphere"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry woolen clothes throughout the year",
          "Umbrella/raincoat essential during monsoon",
          "Comfortable walking shoes for sightseeing",
          "Sunglasses and sunscreen for sunny days"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines for cold and altitude sickness",
          "Stay hydrated but avoid drinking tap water",
          "Be cautious while walking near viewpoints",
          "Keep first-aid kit handy"
        ]
      },
      {
        category: "Transport",
        tips: [
          "Hire local taxis for sightseeing",
          "Walking is best for exploring local markets",
          "Book vehicles in advance during peak season",
          "Carry cash for local transport"
        ]
      },
      {
        category: "Shopping",
        tips: [
          "Buy strawberries directly from farms for freshness",
          "Bargain at local markets but be reasonable",
          "Check manufacturing dates of food products",
          "Keep purchase bills for expensive items"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Start early for popular viewpoints to avoid crowds",
          "Carry camera for beautiful landscapes",
          "Respect local culture and traditions",
          "Keep environment clean - no littering"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === mahabaleshwarImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? mahabaleshwarImages.length - 1 : prevIndex - 1
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
                src={mahabaleshwarImages[currentImageIndex].url} 
                alt={mahabaleshwarImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{mahabaleshwarImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{mahabaleshwarImages[currentImageIndex].description}</p>
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
                {mahabaleshwarImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏞️ About Mahabaleshwar - Queen of Hill Stations</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {mahabaleshwarData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to June:</span> Pleasant weather</p>
                <p><span style={styles.highlight}>Monsoon (July-Sept):</span> Lush greenery, waterfalls</p>
                <p><span style={styles.highlight}>Winter (Dec-Feb):</span> Cold but beautiful</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Pune Airport (120 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Pune Railway Station</p>
                <p><span style={styles.highlight}>By Road:</span> Excellent road from Mumbai, Pune</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Auto-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Mahabaleshwar Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Hill Station Experience</h4>
                  <p>How was your visit to Mahabaleshwar?</p>
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
                  <h4>Strawberry Experience</h4>
                  <p>How were the strawberry farms and products?</p>
                  {userRatings.strawberry ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.strawberry.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.strawberry.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'strawberry', type: 'Strawberry Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Natural Beauty</h4>
                  <p>How were the viewpoints and landscapes?</p>
                  {userRatings.nature ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.nature.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.nature.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'nature', type: 'Natural Beauty' })}
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
            <h2 style={styles.sectionTitle}>🍓 Famous Foods & Local Delicacies</h2>
            <div style={styles.grid}>
              {mahabaleshwarData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Mahabaleshwar</h2>
            <div style={styles.grid}>
              {mahabaleshwarData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>{item.category}</h3>
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
              {mahabaleshwarData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {mahabaleshwarData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>{place.name}</h3>
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
              {mahabaleshwarData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police Station:</strong> 02168-260224 | <strong>Hospital:</strong> 02168-260227</p>
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
        <h1 style={styles.title}>🏞️ Mahabaleshwar</h1>
        <p style={styles.subtitle}>Queen of Hill Stations - Complete Travel Guide</p>
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
                e.target.style.backgroundColor = '#c5e1a5';
                e.target.style.color = '#2e7d32';
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
            {tab === 'food' && '🍓 Food'}
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
    </div>
  );
};

export default MahabaleshwarTravelGuide;