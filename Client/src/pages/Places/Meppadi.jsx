import React, { useState } from 'react';

const MeppadiTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Meppadi Images for Carousel
  const meppadiImages = [
    {
      url: "https://images.unsplash.com/photo-1709105134096-7f0ebf30a3b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVwcGFkaSUyMEhpbGxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Meppadi Hills",
      description: "Beautiful hill station in Wayanad"
    },
    {
      url: "https://images.unsplash.com/photo-1649815510295-189356f5b694?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZWUlMjBwbGFudGF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Coffee Plantations",
      description: "Lush green coffee estates"
    },
    {
      url: "https://images.unsplash.com/photo-1585883721249-85e1112e6281?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVwcGFkaSUyMG1pc3QlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Misty Mountains",
      description: "Cloud-covered Western Ghats"
    },
    
  ];

  const styles = {
    container: {
      maxWidth: '100%',
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

  // Meppadi Travel Data
  const meppadiData = {
    overview: {
      title: "Meppadi - Gateway to Wayanad",
      content: `Meppadi is a beautiful hill station located in the Wayanad district of Kerala. Situated at an altitude of 1,100 meters, it's surrounded by lush green plantations, misty mountains, and rich biodiversity. Known for its coffee estates, tea gardens, and spice plantations, Meppadi offers a perfect blend of natural beauty, adventure, and tranquility. The town serves as the gateway to many popular destinations in Wayanad.`
    },
    famousFoods: [
      {
        name: "Kerala Sadya",
        description: "Traditional vegetarian feast served on banana leaf",
        place: "Local restaurants, Homestays",
        price: "₹200-400",
        special: "Complete traditional meal"
      },
      {
        name: "Appam with Stew",
        description: "Soft rice hoppers with vegetable or chicken stew",
        place: "Local eateries, Hotels",
        price: "₹80-150",
        special: "Kerala breakfast specialty"
      },
      {
        name: "Kerala Parotta with Beef",
        description: "Flaky layered bread with spicy beef curry",
        place: "Local restaurants, Street stalls",
        price: "₹120-200",
        special: "Malabar specialty"
      },
      {
        name: "Fresh Toddy",
        description: "Natural palm wine from local coconut trees",
        place: "Authorized toddy shops",
        price: "₹100-200",
        special: "Local alcoholic beverage"
      }
    ],
    shopping: [
      {
        category: "Coffee & Tea",
        description: "Fresh coffee beans and tea leaves from local plantations",
        places: ["Plantation shops", "Local markets", "Direct from farms"],
        items: ["Coffee Beans", "Tea Powder", "Instant Coffee", "Green Tea"],
        priceRange: "₹200 - ₹1000",
        bestTime: "Harvest season"
      },
      {
        category: "Spices",
        description: "Fresh spices from Wayanad plantations",
        places: ["Spice markets", "Plantation outlets", "Local shops"],
        items: ["Cardamom", "Pepper", "Cinnamon", "Cloves", "Nutmeg"],
        priceRange: "₹300 - ₹2000",
        bestTime: "Year-round"
      },
      {
        category: "Handicrafts",
        description: "Traditional Kerala handicrafts and souvenirs",
        places: ["Local markets", "Government emporium"],
        items: ["Wooden crafts", "Coir products", "Traditional lamps", "Souvenirs"],
        priceRange: "₹100 - ₹5000",
        bestTime: "Tourist season"
      },
      {
        category: "Honey & Natural Products",
        description: "Pure honey and natural forest products",
        places: ["Local shops", "Forest department outlets"],
        items: ["Wild Honey", "Herbal Products", "Natural Oils", "Medicinal Plants"],
        priceRange: "₹250 - ₹1500",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Vythiri Resort",
        type: "Luxury Nature Resort",
        price: "₹8000-20000/night",
        rating: "4.6/5",
        facilities: ["Tree Houses", "Infinity Pool", "Spa", "Adventure Sports"],
        location: "Vythiri",
        distance: "8 km from Meppadi"
      },
      {
        name: "Coffee Grove Resort",
        type: "Plantation Resort",
        price: "₹4000-10000/night",
        rating: "4.3/5",
        facilities: ["Coffee Plantation", "Restaurant", "Trekking", "Bonfire"],
        location: "Meppadi",
        distance: "2 km from town"
      },
      {
        name: "Green Gates Hotel",
        type: "Mid-range Hotel",
        price: "₹2500-6000/night",
        rating: "4.1/5",
        facilities: ["Restaurant", "Parking", "Travel Desk", "Garden"],
        location: "Meppadi Town",
        distance: "Walking distance to market"
      },
      {
        name: "Wayanad Wild Homestay",
        type: "Budget Homestay",
        price: "₹1000-3000/night",
        rating: "4.0/5",
        facilities: ["Home-cooked Food", "Garden", "Local Guide", "Cultural Experience"],
        location: "Meppadi Village",
        distance: "3 km from town"
      }
    ],
    places: [
      {
        name: "Chembra Peak",
        description: "Highest peak in Wayanad with heart-shaped lake",
        timing: "7:00 AM - 5:00 PM",
        entryFee: "₹50 for Indians, Trekking permit required",
        bestTime: "Morning hours",
        highlights: ["Heart-shaped Lake", "Trekking", "Viewpoints", "Photography"]
      },
      {
        name: "Banasura Sagar Dam",
        description: "Largest earth dam in India with boating facilities",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹20 for adults, Boating extra",
        bestTime: "Evening for sunset",
        highlights: ["Boating", "Island Trekking", "Photography", "Sunset Views"]
      },
      {
        name: "Kuruva Island",
        description: "Eco-tourism spot with dense forests and river",
        timing: "9:00 AM - 4:00 PM",
        entryFee: "₹50 for Indians, Boat charges extra",
        bestTime: "Daytime",
        highlights: ["Bamboo Rafting", "Bird Watching", "Nature Walk", "River"]
      },
      {
        name: "Pookode Lake",
        description: "Freshwater lake surrounded by forests",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹20 for adults, Boating extra",
        bestTime: "Morning or evening",
        highlights: ["Boating", "Aquarium", "Nature Walk", "Photography"]
      },
      {
        name: "Edakkal Caves",
        description: "Pre-historic caves with ancient carvings",
        timing: "9:00 AM - 4:30 PM",
        entryFee: "₹40 for Indians, Trekking required",
        bestTime: "Morning hours",
        highlights: ["Ancient Carvings", "Trekking", "Historical Significance", "Viewpoints"]
      }
    ],
    precautions: [
      {
        category: "Trekking & Adventure",
        tips: [
          "Hire local guides for trekking",
          "Carry water and snacks for long treks",
          "Wear comfortable trekking shoes",
          "Check weather conditions before planning"
        ]
      },
      {
        category: "Wildlife & Nature",
        tips: [
          "Don't venture into forests alone",
          "Carry mosquito repellent",
          "Respect wildlife and maintain distance",
          "Don't litter in natural areas"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Carry raincoat or umbrella (rains anytime)",
          "Wear light cotton clothes",
          "Carry warm clothes for evenings",
          "Use sunscreen and sunglasses"
        ]
      },
      {
        category: "Transport",
        tips: [
          "Hire local taxis for sightseeing",
          "Check road conditions during monsoon",
          "Carry cash for remote areas",
          "Book vehicles in advance during peak season"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Carry basic medicines and first-aid",
          "Learn basic Malayalam phrases",
          "Respect local culture and traditions",
          "Keep emergency contacts handy"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === meppadiImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? meppadiImages.length - 1 : prevIndex - 1
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
                src={meppadiImages[currentImageIndex].url} 
                alt={meppadiImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{meppadiImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{meppadiImages[currentImageIndex].description}</p>
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
                {meppadiImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🌿 About Meppadi - Gateway to Wayanad</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {meppadiData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to May:</span> Pleasant weather</p>
                <p><span style={styles.highlight}>Monsoon (Jun-Sept):</span> Lush greenery, heavy rains</p>
                <p><span style={styles.highlight}>Summer (Mar-May):</span> Warm but good for sightseeing</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Calicut Airport (85 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Kozhikode Railway Station (75 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Bangalore, Mysore, Coimbatore</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Buses, Auto-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Meppadi Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Nature Experience</h4>
                  <p>How was your visit to Meppadi?</p>
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
                  <h4>Plantation Experience</h4>
                  <p>How were the coffee and spice plantations?</p>
                  {userRatings.plantation ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.plantation.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.plantation.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'plantation', type: 'Plantation Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Adventure Activities</h4>
                  <p>How were the trekking and adventure options?</p>
                  {userRatings.adventure ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.adventure.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.adventure.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'adventure', type: 'Adventure Activities' })}
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
              {meppadiData.famousFoods.map((food, index) => (
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Meppadi</h2>
            <div style={styles.grid}>
              {meppadiData.shopping.map((item, index) => (
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
              {meppadiData.hotels.map((hotel, index) => (
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
              {meppadiData.places.map((place, index) => (
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
              {meppadiData.precautions.map((category, index) => (
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
              <p><strong>Local Police:</strong> 04936-222100 | <strong>Hospital:</strong> 04936-222222</p>
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
        <h1 style={styles.title}>🌿 Meppadi</h1>
        <p style={styles.subtitle}>Gateway to Wayanad - Nature's Paradise</p>
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
    </div>
  );
};

export default MeppadiTravelGuide;