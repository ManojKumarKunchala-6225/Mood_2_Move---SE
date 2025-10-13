import React, { useState } from 'react';

const JaipurTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');

  // Jaipur Images for Carousel
  const jaipurImages = [
    {
      url: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Hawa Mahal",
      description: "The Palace of Winds - Iconic symbol of Jaipur"
    },
    {
      url: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Amber Fort",
      description: "Majestic hilltop fort overlooking Maota Lake"
    },
    {
      url: "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "City Palace",
      description: "Royal residence blending Rajasthani and Mughal architecture"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      paddingtop: '100px',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginTop:'4%',
      marginBottom: '30px',
      padding: '30px',
      background: 'linear-gradient(135deg, #d4af37, #b8860b)',
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
      borderBottom: '3px solid #b8860b',
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
      prevIndex === jaipurImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? jaipurImages.length - 1 : prevIndex - 1
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

  // Jaipur Data
  const jaipurData = {
    overview: {
      title: "Jaipur - The Pink City",
      content: `Jaipur, the capital of Rajasthan, is known as the Pink City due to the distinct color of its buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, it's a city rich in history, culture, and architectural marvels. Jaipur forms part of the Golden Triangle tourist circuit along with Delhi and Agra.`
    },
    famousFoods: [
      {
        name: "Dal Baati Churma",
        description: "Traditional Rajasthani dish with lentil curry, baked dough balls, and sweet crumble",
        place: "Laxmi Mishthan Bhandar",
        price: "₹200-₹400"
      },
      {
        name: "Laal Maas",
        description: "Spicy mutton curry cooked with Mathania red chilies",
        place: "Spice Court",
        price: "₹350-₹600"
      },
      {
        name: "Ghewar",
        description: "Sweet disc-shaped dessert made from flour and soaked in sugar syrup",
        place: "Famous Sweet Homes",
        price: "₹100-₹300"
      }
    ],
    shopping: [
      {
        name: "Blue Pottery",
        description: "Traditional hand-painted pottery with Persian influences",
        places: ["Neerja International", "Jaipur Blue Pottery Art Center"],
        priceRange: "₹500 - ₹5000"
      },
      {
        name: "Rajasthani Jewellery",
        description: "Kundan, Meenakari, and Thewa traditional jewellery",
        places: ["Johari Bazaar", "MI Road"],
        priceRange: "₹1000 - ₹50000"
      },
      {
        name: "Textiles & Block Prints",
        description: "Hand-block printed fabrics and Sanganeri prints",
        places: ["Bapu Bazaar", "Kishanpol Bazaar"],
        priceRange: "₹200 - ₹10000"
      }
    ],
    accommodations: [
      {
        name: "Rambagh Palace",
        type: "Luxury Heritage Hotel",
        price: "₹15,000-₹50,000/night",
        location: "Bhawani Singh Road"
      },
      {
        name: "Hotel Pearl Palace",
        type: "Budget Hotel",
        price: "₹1,500-₹4,000/night",
        location: "Hathroi Fort"
      },
      {
        name: "Fairmont Jaipur",
        type: "5-Star Luxury",
        price: "₹8,000-₹20,000/night",
        location: "Amer Road"
      }
    ],
    attractions: [
      {
        name: "Amber Fort",
        description: "Majestic fort complex with palaces, temples, and stunning views",
        timing: "8:00 AM - 5:30 PM",
        entryFee: "₹100 for Indians, ₹500 for foreigners"
      },
      {
        name: "City Palace",
        description: "Royal residence with museums, courtyards, and architecture",
        timing: "9:30 AM - 5:00 PM",
        entryFee: "₹300 for Indians, ₹700 for foreigners"
      },
      {
        name: "Hawa Mahal",
        description: "Five-story palace with 953 windows for royal women to observe street festivals",
        timing: "9:00 AM - 4:30 PM",
        entryFee: "₹50 for Indians, ₹200 for foreigners"
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
                src={jaipurImages[currentImageIndex].url} 
                alt={jaipurImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{jaipurImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{jaipurImages[currentImageIndex].description}</p>
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
                {jaipurImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏰 About Jaipur - The Pink City</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {jaipurData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#d4af37', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather for sightseeing</p>
                <p><span style={styles.highlight}>January:</span> Jaipur Literature Festival</p>
                <p><span style={styles.highlight}>Avoid Summer:</span> April-June can be extremely hot</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#d4af37', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Jaipur International Airport (13 km from city)</p>
                <p><span style={styles.highlight}>By Train:</span> Jaipur Junction Railway Station</p>
                <p><span style={styles.highlight}>By Road:</span> Well-connected by NH48 and NH52</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Jaipur Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall City Experience</h4>
                  <p>How was your cultural journey in Jaipur?</p>
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
                  <h4>Local Cuisine</h4>
                  <p>How was the Rajasthani food experience?</p>
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
                      onClick={() => handleRateClick({ name: 'food', type: 'Local Cuisine' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Shopping Experience</h4>
                  <p>How was your shopping in local markets?</p>
                  {userRatings.shopping ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.shopping.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.shopping.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'shopping', type: 'Shopping Experience' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Rajasthani Cuisine</h2>
            <div style={styles.grid}>
              {jaipurData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#d4af37', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Best Place:</strong> {food.place}</p>
                  <p><strong>Price Range:</strong> <span style={styles.price}>{food.price}</span></p>
                  
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Jaipur</h2>
            <div style={styles.grid}>
              {jaipurData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#d4af37', marginBottom: '15px'}}>{item.name}</h3>
                  <p>{item.description}</p>
                  <p><strong>Best Places:</strong> {item.places.join(', ')}</p>
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
                        Rate Shopping
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
            <h2 style={styles.sectionTitle}>🏨 Accommodations in Jaipur</h2>
            <div style={styles.grid}>
              {jaipurData.accommodations.map((hotel, index) => (
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
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: hotel.name, type: hotel.name })}
                      >
                        Rate Accommodation
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
            <h2 style={styles.sectionTitle}>🏞️ Must-Visit Attractions</h2>
            <div style={styles.grid}>
              {jaipurData.attractions.map((attraction, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#d4af37', marginBottom: '15px'}}>{attraction.name}</h3>
                  <p>{attraction.description}</p>
                  <p><strong>Timing:</strong> <span style={styles.timing}>{attraction.timing}</span></p>
                  <p><strong>Entry Fee:</strong> {attraction.entryFee}</p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[attraction.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[attraction.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[attraction.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: attraction.name, type: attraction.name })}
                      >
                        Rate Attraction
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
              <h3 style={{color: '#d84315', marginBottom: '10px'}}>Important Tips:</h3>
              <ul style={{lineHeight: '1.8'}}>
                <li>Carry water and stay hydrated, especially during summer months</li>
                <li>Wear comfortable shoes as there's a lot of walking involved in forts and palaces</li>
                <li>Bargain while shopping in local markets</li>
                <li>Respect local customs and dress modestly when visiting religious sites</li>
                <li>Hire authorized guides only from government-approved counters</li>
                <li>Keep your belongings secure in crowded areas</li>
              </ul>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#d4af37', marginBottom: '15px'}}>🌡️ Weather Guide</h3>
                <p><strong>Winter (Oct-Mar):</strong> 8°C to 22°C - Perfect for sightseeing</p>
                <p><strong>Summer (Apr-Jun):</strong> 25°C to 45°C - Carry sunscreen and hats</p>
                <p><strong>Monsoon (Jul-Sep):</strong> 25°C to 35°C - Occasional rainfall</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#d4af37', marginBottom: '15px'}}>🚕 Local Transport</h3>
                <p><strong>Auto-rickshaws:</strong> Always negotiate fare before ride</p>
                <p><strong>Uber/Ola:</strong> Available throughout the city</p>
                <p><strong>Local Buses:</strong> Economical option for budget travelers</p>
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
        <h1 style={styles.title}>🏰 Jaipur - The Pink City</h1>
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

export default JaipurTravelGuide;