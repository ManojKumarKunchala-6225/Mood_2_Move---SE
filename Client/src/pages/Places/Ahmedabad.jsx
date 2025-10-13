import React, { useState } from 'react';

const AhmedabadTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Ahmedabad Images for Carousel
  const ahmedabadImages = [
    {
      url: "https://images.unsplash.com/photo-1594736797933-d0d69c1d9466?w=1200&h=600&fit=crop",
      title: "Sabarmati Ashram",
      description: "Historic ashram where Mahatma Gandhi lived"
    },
    {
      url: "https://images.unsplash.com/photo-1582657118090-af35eefc4e1f?w=1200&h=600&fit=crop",
      title: "Sabarmati Riverfront",
      description: "Beautifully developed riverfront with gardens and activities"
    },
    {
      url: "https://images.unsplash.com/photo-1547981609-4b6bf67b9d0a?w=1200&h=600&fit=crop",
      title: "Adalaj Stepwell",
      description: "Ancient stepwell with intricate carvings"
    },
    {
      url: "https://images.unsplash.com/photo-1603383928972-0d6b0cac7e8f?w=1200&h=600&fit=crop",
      title: "Sidi Saiyyed Mosque",
      description: "Famous for its exquisite stone lattice work"
    },
    {
      url: "https://images.unsplash.com/photo-1582657118090-af35eefc4e1f?w=1200&h=600&fit=crop",
      title: "Kankaria Lake",
      description: "Historic lake with recreational activities"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#fffaf0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #006400, #228B22)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(0, 100, 0, 0.3)'
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
      backgroundColor: '#006400',
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
      color: '#006400',
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
      backgroundColor: '#f0fff0',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #228B22',
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
      backgroundColor: '#006400',
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
      backgroundColor: '#f0fff0',
      borderRadius: '5px',
      borderLeft: '3px solid #228B22'
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
      color: '#006400',
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
      backgroundColor: '#228B22',
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
      backgroundColor: '#006400',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(0, 100, 0, 0.4)'
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
      color: '#006400',
      borderBottom: '3px solid #228B22',
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
      backgroundColor: '#f0fff0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #228B22',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 100, 0, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#006400',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#228B22',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Ahmedabad Travel Data
  const ahmedabadData = {
    overview: {
      title: "Ahmedabad - Manchester of India",
      content: `Ahmedabad, the largest city in Gujarat, is a vibrant metropolis that beautifully blends rich history with modern development. Founded in 1411 by Sultan Ahmed Shah, the city served as the capital of Gujarat for many centuries. Ahmedabad is renowned for its association with Mahatma Gandhi, who established his Sabarmati Ashram here, making it a pivotal center for India's freedom struggle. The city is a UNESCO World Heritage City, recognized for its historic architecture including numerous pols (traditional housing clusters), stepwells, and temples. Today, Ahmedabad is a major economic and industrial hub, famous for its textile industry, earning it the nickname 'Manchester of India'. The city offers a unique mix of ancient heritage, cultural richness, and contemporary urban development.`
    },
    famousFoods: [
      {
        name: "Gujarati Thali",
        description: "Traditional meal with variety of vegetarian dishes",
        place: "Agashiye, Gordhan Thal, Vishalla",
        price: "₹300-800",
        special: "Complete meal with sweet, salty, and spicy flavors"
      },
      {
        name: "Khaman Dhokla",
        description: "Steamed savory chickpea flour cake",
        place: "Local snack centers, Street vendors",
        price: "₹50-150",
        special: "Light, fluffy, and healthy snack"
      },
      {
        name: "Fafda Jalebi",
        description: "Crispy gram flour snack with sweet jalebi",
        place: "Jay Mahakali Fafda, Local sweet shops",
        price: "₹80-200",
        special: "Classic Gujarati breakfast combination"
      },
      {
        name: "Undhiyu",
        description: "Winter vegetable curry cooked in earthen pot",
        place: "Seasonal restaurants, Local homes",
        price: "₹200-400",
        special: "Traditional winter specialty"
      },
      {
        name: "Dabeli",
        description: "Spicy potato burger with chutneys",
        place: "Street vendors, Local markets",
        price: "₹30-60",
        special: "Kutch's famous street food"
      }
    ],
    shopping: [
      {
        category: "Textiles & Handicrafts",
        description: "Traditional Gujarati textiles and crafts",
        places: ["Law Garden Market", "Rani no Hajiro", "Manek Chowk"],
        items: ["Bandhani sarees", "Patola silk", "Embroidery work", "Handicrafts"],
        priceRange: "₹500 - ₹50,000",
        bestTime: "Year-round"
      },
      {
        category: "Jewelry",
        description: "Traditional Gujarati jewelry",
        places: ["Jewelry shops in old city", "CG Road", "Law Garden"],
        items: ["Gold jewelry", "Silver items", "Kundan work", "Traditional sets"],
        priceRange: "₹1,000 - ₹5,00,000",
        bestTime: "Festival season"
      },
      {
        category: "Street Food & Snacks",
        description: "Local snacks and food items",
        places: ["Manek Chowk", "Law Garden Night Market", "Local markets"],
        items: ["Fafda", "Gathiya", "Chavanu", "Local sweets"],
        priceRange: "₹50 - ₹2,000",
        bestTime: "Evening hours"
      },
      {
        category: "Home Decor",
        description: "Traditional home decor items",
        places: ["Government emporium", "Craft shops", "Local markets"],
        items: ["Wall hangings", "Torans", "Handicrafts", "Textile products"],
        priceRange: "₹200 - ₹20,000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "The Renaissance Ahmedabad",
        type: "Luxury 5-Star Hotel",
        price: "₹8,000-20,000/night",
        rating: "4.6/5",
        facilities: ["Spa", "Pool", "Multiple restaurants", "Business center"],
        location: "SG Highway",
        distance: "8 km from city center"
      },
      {
        name: "Courtyard by Marriott",
        type: "Premium Business Hotel",
        price: "₹6,000-15,000/night",
        rating: "4.4/5",
        facilities: ["Fitness center", "Restaurant", "Meeting rooms", "Parking"],
        location: "Ramdev Nagar",
        distance: "6 km from Sabarmati Ashram"
      },
      {
        name: "Novotel Ahmedabad",
        type: "4-Star Hotel",
        price: "₹5,000-12,000/night",
        rating: "4.3/5",
        facilities: ["Pool", "Spa", "Restaurant", "Conference facilities"],
        location: "ISKCON Cross Road",
        distance: "7 km from airport"
      },
      {
        name: "Hotel Fortune Landmark",
        type: "Mid-range Hotel",
        price: "₹3,000-7,000/night",
        rating: "4.0/5",
        facilities: ["Restaurant", "Travel Desk", "Parking", "AC Rooms"],
        location: "Gurukul Road",
        distance: "5 km from city center"
      },
      {
        name: "Hotel Volga",
        type: "Budget Hotel",
        price: "₹1,500-4,000/night",
        rating: "3.8/5",
        facilities: ["Basic Rooms", "Restaurant", "WiFi", "Parking"],
        location: "C.G. Road",
        distance: "Central location"
      }
    ],
    places: [
      {
        name: "Sabarmati Ashram",
        description: "Historic ashram where Mahatma Gandhi lived and worked",
        timing: "8:30 AM - 6:30 PM",
        entryFee: "Free",
        bestTime: "Morning hours",
        highlights: ["Gandhi's residence", "Museum", "Library", "Peaceful environment"]
      },
      {
        name: "Sabarmati Riverfront",
        description: "Beautifully developed riverfront with gardens and activities",
        timing: "9:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Evening for sunset",
        highlights: ["Riverfront walk", "Gardens", "Boating", "Cycling track"]
      },
      {
        name: "Adalaj Stepwell",
        description: "Ancient stepwell with intricate carvings and architecture",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "₹25 for adults",
        bestTime: "Morning or late afternoon",
        highlights: ["Intricate carvings", "Architecture", "Photography", "Historical significance"]
      },
      {
        name: "Sidi Saiyyed Mosque",
        description: "16th-century mosque famous for its stone lattice work",
        timing: "7:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Daytime",
        highlights: ["Stone jaali work", "Architecture", "Photography", "Historical importance"]
      },
      {
        name: "Kankaria Lake",
        description: "Historic lake with recreational activities and entertainment",
        timing: "9:00 AM - 10:00 PM",
        entryFee: "₹25 per person",
        bestTime: "Evening hours",
        highlights: ["Lakefront", "Toy train", "Zoo", "Entertainment zone"]
      },
      {
        name: "Auto World Vintage Car Museum",
        description: "Museum showcasing collection of vintage cars",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "₹200 for adults",
        bestTime: "Weekdays",
        highlights: ["Vintage cars", "Classic automobiles", "Photography", "History"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Light cotton clothes in summer",
          "Carry water and stay hydrated",
          "Warm clothes in winter (Dec-Feb)",
          "Rain protection during monsoon"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Use BRTS for convenient city travel",
          "Hire registered auto-rickshaws",
          "Use ride-sharing apps for convenience",
          "Keep hotel address handy"
        ]
      },
      {
        category: "Food & Water",
        tips: [
          "Drink bottled water only",
          "Try street food from clean establishments",
          "Most restaurants serve vegetarian food",
          "Carry basic medicines for digestion"
        ]
      },
      {
        category: "Shopping & Markets",
        tips: [
          "Bargain at local markets",
          "Buy traditional textiles from reputed shops",
          "Check quality of handicrafts",
          "Keep valuables secure in crowded areas"
        ]
      },
      {
        category: "General Safety",
        tips: [
          "Respect local customs and traditions",
          "Dress modestly in religious places",
          "Carry cash as some places don't accept cards",
          "Save emergency contacts"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === ahmedabadImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? ahmedabadImages.length - 1 : prevIndex - 1
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
                src={ahmedabadImages[currentImageIndex].url} 
                alt={ahmedabadImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{ahmedabadImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{ahmedabadImages[currentImageIndex].description}</p>
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
                {ahmedabadImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏙️ About Ahmedabad - Manchester of India</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {ahmedabadData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#006400', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>November to February:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>July to September:</span> Monsoon season, lush greenery</p>
                <p><span style={styles.highlight}>March to June:</span> Hot summer, indoor activities recommended</p>
                <p><span style={styles.highlight}>Festival Season:</span> Navratri, Uttarayan for cultural experience</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#006400', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Sardar Vallabhbhai Patel International Airport</p>
                <p><span style={styles.highlight}>By Train:</span> Ahmedabad Junction, Kalupur Station</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected via national highways</p>
                <p><span style={styles.highlight}>Local Transport:</span> BRTS, Auto-rickshaws, Taxis, Metro</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Ahmedabad Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Heritage Experience</h4>
                  <p>How was your visit to Ahmedabad?</p>
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
                  <h4>Sabarmati Ashram Experience</h4>
                  <p>How was your visit to Gandhi's historic ashram?</p>
                  {userRatings.ashram ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.ashram.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.ashram.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'ashram', type: 'Sabarmati Ashram' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Gujarati Food Experience</h4>
                  <p>How was the local cuisine?</p>
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
                      onClick={() => handleRateClick({ name: 'food', type: 'Gujarati Food' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Gujarati Cuisine</h2>
            <div style={styles.grid}>
              {ahmedabadData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Ahmedabad</h2>
            <div style={styles.grid}>
              {ahmedabadData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{item.category}</h3>
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
              {ahmedabadData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏙️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {ahmedabadData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{place.name}</h3>
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
              {ahmedabadData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police:</strong> 079-2658 9200 | <strong>Hospital:</strong> 079-2268 0000</p>
              <p><strong>Tourist Information Center:</strong> 079-2657 8162</p>
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
        <h1 style={styles.title}>🏙️ Ahmedabad</h1>
        <p style={styles.subtitle}>Manchester of India - Heritage City</p>
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
                e.target.style.backgroundColor = '#228B22';
                e.target.style.color = 'white';
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
            {tab === 'places' && '🏙️ Places'}
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
        <p>© 2024 Ahmedabad Travel Guide. Experience the Heritage City!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the Manchester of India
        </p>
      </div>
    </div>
  );
};

export default AhmedabadTravelGuide;