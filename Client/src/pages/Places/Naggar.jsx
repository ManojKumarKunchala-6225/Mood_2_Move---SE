import React, { useState } from 'react';

const NaggarTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Naggar Images for Carousel
  const naggarImages = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTWhxD16_OCYNBd1VOHsbJ_r29ldW_tt1GQ&s",
      title: "Naggar Castle",
      description: "Historic castle with stunning architecture"
    },
    {
      url: "https://images.unsplash.com/photo-1560278384-ef70153784a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hhbmRyYWtoYW5pJTIwUGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Chandrakhani Pass",
      description: "Beautiful mountain pass with panoramic views"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1706430433607-48f37bdd71b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmljaG9sYXMlMjBSb2VyaWNoJTIwQXJ0JTIwR2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Nicholas Roerich Art Gallery",
      description: "Museum showcasing Russian artist's work"
    },
   
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#faf0e6',
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
      border: '2px solid #ffb6c1',
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
      marginTop: '10px'
    },
    userRating: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#fff0f5',
      borderRadius: '5px',
      borderLeft: '3px solid #B22222'
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
      resize: 'vertical'
    },
    modalButtons: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center'
    },
    submitButton: {
      backgroundColor: '#B22222',
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
      border: '2px solid #ffb6c1',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 0, 0, 0.1)'
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
      color: '#B22222',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Naggar Travel Data
  const naggarData = {
    overview: {
      title: "Naggar - Ancient Capital of Kullu",
      content: `Naggar is a beautiful town in the Kullu district of Himachal Pradesh, situated on the left bank of the Beas River. It served as the capital of the Kullu Kingdom for about 1400 years before the capital was shifted to Kullu. Nestled amidst pine and deodar forests, Naggar is known for its ancient temples, traditional Kathkuni architecture, and stunning views of the snow-capped Himalayas. The town offers a perfect blend of history, culture, and natural beauty.`
    },
    famousFoods: [
      {
        name: "Siddu",
        description: "Traditional steamed bread stuffed with nuts and poppy seeds",
        place: "Local homes, Traditional restaurants",
        price: "₹80-150",
        special: "Himachali specialty"
      },
      {
        name: "Madra",
        description: "Chickpea curry cooked in yogurt with spices",
        place: "Local dhabas, Traditional eateries",
        price: "₹120-200",
        special: "Festival delicacy"
      },
      {
        name: "Babru",
        description: "Kullu version of kachori with black gram filling",
        place: "Street vendors, Local shops",
        price: "₹40-80",
        special: "Local snack"
      },
      {
        name: "Aktori",
        description: "Buckwheat leaf cake made during festivals",
        place: "Local homes during festivals",
        price: "₹60-120",
        special: "Seasonal specialty"
      },
      {
        name: "Chha Gosht",
        description: "Marinated lamb cooked in yogurt gravy",
        place: "Traditional restaurants",
        price: "₹250-400",
        special: "Non-vegetarian delight"
      }
    ],
    shopping: [
      {
        category: "Handicrafts",
        description: "Traditional Himachali crafts and artifacts",
        places: ["Local markets", "Government emporium", "Craft shops"],
        items: ["Wooden crafts", "Shawls", "Woolen items", "Local art"],
        priceRange: "₹200 - ₹5000",
        bestTime: "Tourist season"
      },
      {
        category: "Woolen Items",
        description: "Warm woolen clothes and accessories",
        places: ["Local markets", "Shops near attractions"],
        items: ["Kullu shawls", "Sweaters", "Caps", "Socks"],
        priceRange: "₹300 - ₹4000",
        bestTime: "Winter season"
      },
      {
        category: "Local Produce",
        description: "Fresh fruits and local products",
        places: ["Local markets", "Roadside stalls"],
        items: ["Apples", "Dry fruits", "Honey", "Herbal products"],
        priceRange: "₹100 - ₹2000",
        bestTime: "Harvest season"
      },
      {
        category: "Art & Paintings",
        description: "Local art and Roerich reproductions",
        places: ["Roerich Gallery shop", "Art galleries"],
        items: ["Paintings", "Prints", "Art books", "Souvenirs"],
        priceRange: "₹500 - ₹10000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "The Castle Heritage Hotel",
        type: "Heritage Hotel",
        price: "₹5,000-12,000/night",
        rating: "4.6/5",
        facilities: ["Historic Building", "Restaurant", "Garden", "Mountain View"],
        location: "Naggar Castle Complex",
        distance: "Heritage location"
      },
      {
        name: "Johnson's Lodge",
        type: "Boutique Hotel",
        price: "₹3,000-8,000/night",
        rating: "4.3/5",
        facilities: ["Mountain View", "Restaurant", "Garden", "Parking"],
        location: "Naggar Village",
        distance: "Walking distance to attractions"
      },
      {
        name: "Himachal Tourism Hotel",
        type: "Government Hotel",
        price: "₹2,000-5,000/night",
        rating: "4.0/5",
        facilities: ["Basic Amenities", "Restaurant", "Parking"],
        location: "Near Bus Stand",
        distance: "Central location"
      },
      {
        name: "Woodside Cottages",
        type: "Budget Cottages",
        price: "₹1,500-4,000/night",
        rating: "4.1/5",
        facilities: ["Kitchen", "Garden", "Mountain View", "Hot Water"],
        location: "Forest Area",
        distance: "Peaceful location"
      }
    ],
    places: [
      {
        name: "Naggar Castle",
        description: "15th century castle with mixed architecture",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "₹30 for Indians",
        bestTime: "Morning hours",
        highlights: ["Historic Architecture", "Woodwork", "Museum", "Viewpoints"]
      },
      {
        name: "Nicholas Roerich Art Gallery",
        description: "Museum dedicated to Russian artist Nicholas Roerich",
        timing: "10:00 AM - 5:00 PM",
        entryFee: "₹50 for Indians",
        bestTime: "Daytime",
        highlights: ["Art Collection", "Russian Art", "Historical Significance", "Library"]
      },
      {
        name: "Tripura Sundari Temple",
        description: "Ancient wooden temple dedicated to Goddess Tripura Sundari",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning for prayers",
        highlights: ["Wooden Architecture", "Religious Significance", "Carving", "Peaceful"]
      },
      {
        name: "Chandrakhani Pass",
        description: "High altitude mountain pass with stunning views",
        timing: "Daylight hours",
        entryFee: "Free, Guide recommended",
        bestTime: "Summer months",
        highlights: ["Trekking", "Panoramic Views", "Photography", "Adventure"]
      },
      {
        name: "Gauri Shankar Temple",
        description: "Ancient stone temple with intricate carvings",
        timing: "6:00 AM - 7:00 PM",
        entryFee: "Free",
        bestTime: "Morning hours",
        highlights: ["Stone Architecture", "Ancient Carvings", "Spiritual", "Historical"]
      },
      {
        name: "Jana Waterfall",
        description: "Beautiful waterfall near Naggar",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "Free",
        bestTime: "Monsoon season",
        highlights: ["Waterfall", "Photography", "Nature Walk", "Picnic"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry warm clothes throughout the year",
          "Rain gear is essential during monsoon",
          "Comfortable trekking shoes for walks",
          "Sunglasses and sunscreen for high altitude"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Hire local taxis for sightseeing",
          "Walking is best for exploring the town",
          "Check road conditions during winter",
          "Book accommodation in advance during peak season"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Acclimatize to high altitude gradually",
          "Carry basic medicines and first-aid",
          "Stay hydrated at high altitude",
          "Be cautious on mountain trails"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Respect local customs and traditions",
          "Dress modestly when visiting temples",
          "Ask permission before photography in villages",
          "Remove shoes before entering temples"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Carry cash as ATMs are limited",
          "Learn basic Hindi phrases",
          "Keep environment clean",
          "Respect wildlife and nature"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === naggarImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? naggarImages.length - 1 : prevIndex - 1
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
                src={naggarImages[currentImageIndex].url} 
                alt={naggarImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{naggarImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{naggarImages[currentImageIndex].description}</p>
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
                {naggarImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏰 About Naggar - Ancient Capital of Kullu</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {naggarData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B0000', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>September to November:</span> Clear skies, perfect for photography</p>
                <p><span style={styles.highlight}>December to February:</span> Snow experience, very cold</p>
                <p><span style={styles.highlight}>Monsoon (Jul-Aug):</span> Lush greenery, occasional road blocks</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B0000', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Bhuntar Airport (35 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Joginder Nagar Railway Station (150 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Delhi, Chandigarh, Manali</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Local buses, Shared jeeps</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Naggar Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Heritage Experience</h4>
                  <p>How was your visit to Naggar?</p>
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
                  <h4>Historical Sites</h4>
                  <p>How were the heritage sites and ancient architecture?</p>
                  {userRatings.heritage ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.heritage.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.heritage.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'heritage', type: 'Historical Sites' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Natural Beauty</h4>
                  <p>How were the mountain views and natural surroundings?</p>
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Local Cuisine</h2>
            <div style={styles.grid}>
              {naggarData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Naggar</h2>
            <div style={styles.grid}>
              {naggarData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{item.category}</h3>
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
              {naggarData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {naggarData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{place.name}</h3>
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
              {naggarData.precautions.map((category, index) => (
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
            
            <div style={{...styles.warning, marginTop: '20px'}}>
              <h4>🚨 Emergency Contacts</h4>
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Women Helpline:</strong> 1091</p>
              <p><strong>Local Police:</strong> 01902-240 130 | <strong>Hospital:</strong> 01902-240 237</p>
              <p><strong>Tourist Information Center:</strong> 01902-240 254</p>
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
        <h1 style={styles.title}>🏰 Naggar</h1>
        <p style={styles.subtitle}>Ancient Capital of Kullu - Heritage Paradise</p>
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
                e.target.style.backgroundColor = '#ffb6c1';
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
        <p>© 2024 Naggar Travel Guide. Explore the Ancient Capital of Kullu!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring Himalayan heritage
        </p>
      </div>
    </div>
  );
};

export default NaggarTravelGuide;