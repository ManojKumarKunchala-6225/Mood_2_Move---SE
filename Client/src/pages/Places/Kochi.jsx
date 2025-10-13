import React, { useState } from 'react';

const KochiTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Kochi Images for Carousel
  const kochiImages = [
    {
      url: "https://images.unsplash.com/photo-1605955794720-651b9ae7f5e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29jaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Chinese Fishing Nets",
      description: "Iconic fishing nets at Fort Kochi waterfront"
    },
    {
      url: "https://images.unsplash.com/photo-1558013400-b724200f9c39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29jaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Marine Drive",
      description: "Beautiful promenade along the backwaters"
    },
    {
      url: "https://images.unsplash.com/photo-1590123717647-de5b78ed762e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtvY2hpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Jewish Synagogue",
      description: "Historic synagogue in Jew Town, Mattancherry"
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
      background: 'linear-gradient(135deg, #1a237e, #303f9f)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(26, 35, 126, 0.3)'
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
      backgroundColor: '#1a237e',
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
      color: '#1a237e',
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
      backgroundColor: '#e8eaf6',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #c5cae9',
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
      backgroundColor: '#1a237e',
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
      color: '#1a237e',
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
      backgroundColor: '#1a237e',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(26, 35, 126, 0.4)'
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
      color: '#1a237e',
      borderBottom: '3px solid #303f9f',
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
      backgroundColor: '#e8eaf6',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #c5cae9',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(26, 35, 126, 0.1)',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(26, 35, 126, 0.2)'
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
      color: '#1a237e',
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
    nature: {
      backgroundColor: '#e3f2fd',
      color: '#1565c0'
    },
    adventure: {
      backgroundColor: '#f3e5f5',
      color: '#7b1fa2'
    }
  };

  // Kochi Travel Data
  const kochiData = {
    overview: {
      title: "Kochi - Queen of Arabian Sea",
      content: `Kochi, also known as Cochin, is a vibrant port city on the southwest coast of India. Often called the 'Queen of the Arabian Sea', it boasts a rich history of Portuguese, Dutch, and British colonial influences. From the iconic Chinese fishing nets to the historic Fort Kochi, from spice markets to contemporary art galleries, Kochi beautifully blends traditional heritage with modern development.`
    },
    famousFoods: [
      {
        name: "Kerala Sadhya",
        description: "Traditional vegetarian feast served on banana leaf with numerous dishes",
        place: "Grand Hotel, Kayees Rahmathulla",
        price: "₹300-600 per plate"
      },
      {
        name: "Kerala Seafood",
        description: "Fresh fish curry, karimeen pollichathu, and prawn preparations",
        place: "Fort Kochi seafood restaurants, Dhe Puttu",
        price: "₹400-800"
      },
      {
        name: "Appam with Stew",
        description: "Lacy rice pancakes with vegetable or chicken stew",
        place: "Local restaurants, Brunton Boatyard",
        price: "₹150-300"
      },
      {
        name: "Parippu Vada & Banana Chips",
        description: "Traditional Kerala snacks - lentil fritters and banana chips",
        place: "Local tea shops, street vendors",
        price: "₹20-50"
      }
    ],
    shopping: [
      {
        category: "Spices & Ayurveda",
        description: "Authentic Kerala spices, ayurvedic oils, and herbal products",
        places: ["Jew Town Spice Market", "Broadway Market", "Mattancherry"],
        priceRange: "₹100 - ₹5000"
      },
      {
        category: "Handicrafts & Souvenirs",
        description: "Wooden carvings, coir products, Kathakali masks, and traditional artifacts",
        places: ["Fort Kochi", "Lulu Mall", "Government Emporiums"],
        priceRange: "₹200 - ₹10000"
      },
      {
        category: "Textiles & Clothing",
        description: "Kerala sarees, traditional mundu, and contemporary fashion",
        places: ["MG Road", "Convent Road", "Lulu Mall"],
        priceRange: "₹500 - ₹20000"
      }
    ],
    hotels: [
      {
        name: "Taj Malabar Resort",
        type: "Luxury Heritage",
        price: "₹8000-25000/night",
        location: "Willingdon Island",
        facilities: "Pool, spa, multiple restaurants"
      },
      {
        name: "Brunton Boatyard",
        type: "Historic Luxury",
        price: "₹12000-30000/night",
        location: "Fort Kochi",
        facilities: "Heritage rooms, fine dining"
      },
      {
        name: "Gokulam Grand",
        type: "Business Hotel",
        price: "₹4000-10000/night",
        location: "Kaloor",
        facilities: "Conference rooms, pool"
      },
      {
        name: "Zostel Kochi",
        type: "Budget Hostel",
        price: "₹500-1500/night",
        location: "Fort Kochi",
        facilities: "Dormitories, common area"
      }
    ],
    places: [
      {
        name: "Chinese Fishing Nets",
        description: "Iconic fishing nets introduced by Chinese traders in 14th century",
        timing: "Sunrise to Sunset",
        entryFee: "Free",
        category: "Historical"
      },
      {
        name: "Fort Kochi",
        description: "Historic neighborhood with colonial architecture, art galleries, and cafes",
        timing: "All day",
        entryFee: "Free",
        category: "Historical"
      },
      {
        name: "Mattancherry Palace",
        description: "Portuguese palace with Kerala murals depicting Ramayana",
        timing: "10:00 AM - 5:00 PM",
        entryFee: "₹20 for Indians",
        category: "Historical"
      },
      {
        name: "Jewish Synagogue",
        description: "Oldest active synagogue in Commonwealth, built in 1568",
        timing: "10:00 AM - 5:00 PM",
        entryFee: "Free",
        category: "Cultural"
      },
      {
        name: "Marine Drive",
        description: "Beautiful promenade along backwaters with shopping and dining",
        timing: "All day",
        entryFee: "Free",
        category: "Nature"
      },
      {
        name: "Kochi Backwaters",
        description: "Serene backwater experience with houseboat cruises",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Houseboat: ₹6000-15000",
        category: "Nature"
      },
      {
        name: "Kerala Folklore Museum",
        description: "Extensive collection of Kerala's cultural heritage and artifacts",
        timing: "9:30 AM - 6:00 PM",
        entryFee: "₹200 for adults",
        category: "Cultural"
      }
    ],
    precautions: [
      {
        category: "Weather & Climate",
        tips: [
          "Carry umbrella/raincoat during monsoon (June-September)",
          "Wear light cotton clothes - humid tropical climate",
          "Use sunscreen and hats during summer months",
          "Stay hydrated in hot and humid weather"
        ]
      },
      {
        category: "Transport & Navigation",
        tips: [
          "Use prepaid taxis from airport/railway station",
          "Try Kochi Water Metro for unique experience",
          "Bargain with auto-rickshaw drivers before ride",
          "Use Google Maps for navigation around city"
        ]
      },
      {
        category: "Shopping & Food",
        tips: [
          "Bargain politely in spice markets and local shops",
          "Check spice quality and authenticity before buying",
          "Try street food but ensure hygiene standards",
          "Carry cash for local markets and small shops"
        ]
      }
    ],
    transportation: {
      airport: "Cochin International Airport (35km from city)",
      railway: "Ernakulam Junction, Ernakulam Town",
      seaport: "Kochi Port, Willingdon Island",
      local: "Buses, Auto-rickshaws, Taxis, Water Metro"
    }
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === kochiImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? kochiImages.length - 1 : prevIndex - 1
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
      case 'nature': return styles.nature;
      case 'adventure': return styles.adventure;
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
                src={kochiImages[currentImageIndex].url} 
                alt={kochiImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{kochiImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{kochiImages[currentImageIndex].description}</p>
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
                {kochiImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏙️ About Kochi - Queen of Arabian Sea</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {kochiData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1a237e', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>April to June:</span> Summer, hot but good for indoor activities</p>
                <p><span style={styles.highlight}>June to September:</span> Monsoon, lush greenery but heavy rains</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1a237e', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Cochin International Airport (35km)</p>
                <p><span style={styles.highlight}>By Train:</span> Ernakulam Junction, Ernakulam Town</p>
                <p><span style={styles.highlight}>By Road:</span> Well-connected by national highways</p>
                <p><span style={styles.highlight}>By Sea:</span> Kochi Port, international cruise terminal</p>
              </div>

              <div style={styles.card}>
                <h3 style={{color: '#1a237e', marginBottom: '15px'}}>🚇 Local Transportation</h3>
                <p><strong>Water Metro:</strong> Unique water transport system</p>
                <p><strong>Buses:</strong> Extensive KSRTC and private bus network</p>
                <p><strong>Auto-rickshaws:</strong> Metered and negotiated fares</p>
                <p><strong>Taxi:</strong> App-based and local taxi services</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Kochi Experience</h3>
              <p>Share your coastal journey and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Cultural Experience</h4>
                  <p>How was your visit to Kochi?</p>
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
            <h2 style={styles.sectionTitle}>🍽️ Kerala Cuisine & Seafood</h2>
            <div style={styles.grid}>
              {kochiData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1a237e', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Kochi</h2>
            <div style={styles.grid}>
              {kochiData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1a237e', marginBottom: '15px'}}>{item.category}</h3>
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
              {kochiData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1a237e', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {kochiData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1a237e', marginBottom: '15px'}}>
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
              {kochiData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1a237e', marginBottom: '15px'}}>{category.category}</h3>
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
            placeholder="Share your coastal experience (optional)..."
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
        <h1 style={styles.title}>🏙️ Kochi - Queen of Arabian Sea</h1>
        <p style={styles.subtitle}>Complete Travel Guide to Coastal Paradise</p>
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
                e.target.style.backgroundColor = '#c5cae9';
                e.target.style.color = '#1a237e';
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

export default KochiTravelGuide;