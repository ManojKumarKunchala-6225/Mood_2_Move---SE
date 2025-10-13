import React, { useState } from 'react';

const MumbaiTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Mumbai Images for Carousel
  const mumbaiImages = [
    {
      url: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&h=400&fit=crop",
      title: "Gateway of India",
      description: "Historic monument overlooking Arabian Sea"
    },
    {
      url: "https://images.unsplash.com/photo-1666843527155-14ec5f016802?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFyaW5lJTIwZHJpdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Marine Drive",
      description: "Beautiful promenade along the coast"
    },
    {
      url: "https://images.unsplash.com/photo-1710838182226-8646b6949a2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hoYXRyYXBhdGklMjBTaGl2YWppJTIwVGVybWludXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Chhatrapati Shivaji Terminus",
      description: "UNESCO World Heritage Site"
    },
   
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f8ff',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(30, 60, 114, 0.3)'
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
      backgroundColor: '#1e3c72',
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
      color: '#1e3c72',
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
      backgroundColor: '#e3f2fd',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #90caf9',
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
      backgroundColor: '#1e3c72',
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
      borderLeft: '3px solid #2a5298'
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
      color: '#1e3c72',
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
      backgroundColor: '#2a5298',
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
      backgroundColor: '#1e3c72',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(30, 60, 114, 0.4)'
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
      color: '#1e3c72',
      borderBottom: '3px solid #2a5298',
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
      backgroundColor: '#e3f2fd',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #90caf9',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(30, 60, 114, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#1e3c72',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#2a5298',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Mumbai Travel Data
  const mumbaiData = {
    overview: {
      title: "Mumbai - The City of Dreams",
      content: `Mumbai, formerly known as Bombay, is the financial, commercial, and entertainment capital of India. Located on the west coast of Maharashtra, it's India's most populous city and home to Bollywood, the Hindi film industry. The city never sleeps and offers a perfect blend of historic colonial architecture, modern skyscrapers, bustling markets, and beautiful coastal areas.`
    },
    famousFoods: [
      {
        name: "Vada Pav",
        description: "Spicy potato fritter in bread, Mumbai's signature street food",
        place: "Street vendors, Ashok Vada Pav, Aram Vada Pav",
        price: "₹20-50",
        special: "Mumbai's burger"
      },
      {
        name: "Pav Bhaji",
        description: "Spicy vegetable curry served with soft bread",
        place: "Cannon Pav Bhaji, Sardar Pav Bhaji",
        price: "₹80-200",
        special: "Mumbai's comfort food"
      },
      {
        name: "Bhel Puri",
        description: "Sweet and savory puffed rice snack",
        place: "Juhu Beach, Chowpatty, Street stalls",
        price: "₹40-80",
        special: "Classic Mumbai chaat"
      },
      {
        name: "Seafood",
        description: "Fresh fish and seafood delicacies",
        place: "Trishna, Mahesh Lunch Home, Gajalee",
        price: "₹300-1000",
        special: "Coastal cuisine"
      },
      {
        name: "Irani Chai & Bun Maska",
        description: "Special tea with buttered bread",
        place: "Irani cafes, Kyani & Co.",
        price: "₹50-100",
        special: "Colonial-era tradition"
      }
    ],
    shopping: [
      {
        category: "Fashion & Clothing",
        description: "Everything from high fashion to street markets",
        places: ["Colaba Causeway", "Fashion Street", "Linking Road", "Phoenix Marketcity"],
        items: ["Designer wear", "Street fashion", "Accessories", "Footwear"],
        priceRange: "₹200 - ₹50,000",
        bestTime: "Evenings and weekends"
      },
      {
        category: "Jewelry",
        description: "Traditional and contemporary jewelry",
        places: ["Zaveri Bazaar", "Bhuleshwar", "Dadar", "Malabar Hill"],
        items: ["Gold jewelry", "Diamonds", "Silver items", "Costume jewelry"],
        priceRange: "₹1,000 - ₹10,00,000",
        bestTime: "Daytime on weekdays"
      },
      {
        category: "Electronics & Gadgets",
        description: "Latest technology and gadgets",
        places: ["Lamington Road", "Croma", "Reliance Digital"],
        items: ["Mobile phones", "Laptops", "Cameras", "Accessories"],
        priceRange: "₹500 - ₹2,00,000",
        bestTime: "Weekdays"
      },
      {
        category: "Antiques & Handicrafts",
        description: "Traditional crafts and antique items",
        places: ["Chor Bazaar", "Crawford Market", "Government emporiums"],
        items: ["Antique furniture", "Art pieces", "Handicrafts", "Souvenirs"],
        priceRange: "₹500 - ₹1,00,000",
        bestTime: "Saturdays for Chor Bazaar"
      }
    ],
    hotels: [
      {
        name: "Taj Mahal Palace",
        type: "Luxury Heritage Hotel",
        price: "₹15,000-80,000/night",
        rating: "4.8/5",
        facilities: ["Sea View", "Multiple Restaurants", "Spa", "Pool", "Business Center"],
        location: "Apollo Bunder, Colaba",
        distance: "Next to Gateway of India"
      },
      {
        name: "The Oberoi",
        type: "Luxury Business Hotel",
        price: "₹12,000-50,000/night",
        rating: "4.7/5",
        facilities: ["Marine Drive View", "Fine Dining", "Spa", "Fitness Center"],
        location: "Nariman Point",
        distance: "On Marine Drive"
      },
      {
        name: "Trident Nariman Point",
        type: "Business Luxury Hotel",
        price: "₹8,000-30,000/night",
        rating: "4.5/5",
        facilities: ["Sea Facing", "Restaurants", "Pool", "Meeting Rooms"],
        location: "Nariman Point",
        distance: "Business district"
      },
      {
        name: "Hotel Suba International",
        type: "Mid-range Hotel",
        price: "₹4,000-12,000/night",
        rating: "4.0/5",
        facilities: ["Restaurant", "Conference Hall", "Travel Desk"],
        location: "Sahar Road, Andheri",
        distance: "Near airport"
      },
      {
        name: "Backpacker Panda",
        type: "Budget Hostel",
        price: "₹800-2,500/night",
        rating: "4.2/5",
        facilities: ["Dormitory", "Common Kitchen", "WiFi", "Tour Desk"],
        location: "Colaba",
        distance: "Central location"
      }
    ],
    places: [
      {
        name: "Gateway of India",
        description: "Historic arch monument built during British Raj",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Early morning or evening",
        highlights: ["Boat rides", "Photography", "Street food", "Taj Hotel view"]
      },
      {
        name: "Marine Drive",
        description: "3.6 km long C-shaped boulevard along coast",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Sunset and evening",
        highlights: ["Queen's Necklace", "Evening walks", "Street food", "Skyline view"]
      },
      {
        name: "Elephanta Caves",
        description: "UNESCO World Heritage Site with rock-cut temples",
        timing: "9:00 AM - 5:30 PM",
        entryFee: "₹40 for Indians, Boat charges extra",
        bestTime: "Morning hours",
        highlights: ["Cave temples", "Stone sculptures", "Ferry ride", "Historical art"]
      },
      {
        name: "Siddhivinayak Temple",
        description: "Famous temple dedicated to Lord Ganesha",
        timing: "5:00 AM - 10:00 PM",
        entryFee: "Free",
        bestTime: "Early morning",
        highlights: ["Religious significance", "Architecture", "Spiritual atmosphere"]
      },
      {
        name: "Juhu Beach",
        description: "Famous beach and entertainment area",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Evening",
        highlights: ["Beach activities", "Street food", "Celebrity spotting", "Sunset"]
      },
      {
        name: "Sanjay Gandhi National Park",
        description: "Large protected area within city limits",
        timing: "7:30 AM - 6:30 PM",
        entryFee: "₹58 for adults",
        bestTime: "Winter mornings",
        highlights: ["Kanheri Caves", "Lion Safari", "Boating", "Trekking"]
      }
    ],
    precautions: [
      {
        category: "Transport & Commute",
        tips: [
          "Use local trains during non-peak hours",
          "Download taxi apps for convenient travel",
          "Keep small change for auto-rickshaws",
          "Avoid road travel during peak hours (8-11 AM, 5-8 PM)"
        ]
      },
      {
        category: "Safety & Security",
        tips: [
          "Be cautious with valuables in crowded areas",
          "Avoid isolated areas at night",
          "Keep emergency contacts handy",
          "Use registered taxis and auto-rickshaws"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Carry umbrella during monsoon (June-September)",
          "Wear light cotton clothes in summer",
          "Carry water to stay hydrated",
          "Use sunscreen throughout the year"
        ]
      },
      {
        category: "Food & Water",
        tips: [
          "Drink bottled water only",
          "Try street food from busy, popular stalls",
          "Be cautious with seafood during monsoon",
          "Wash hands frequently"
        ]
      },
      {
        category: "Shopping & Bargaining",
        tips: [
          "Bargain at street markets",
          "Check bills carefully at restaurants",
          "Keep receipts for expensive purchases",
          "Be aware of counterfeit products"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === mumbaiImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? mumbaiImages.length - 1 : prevIndex - 1
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
                src={mumbaiImages[currentImageIndex].url} 
                alt={mumbaiImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{mumbaiImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{mumbaiImages[currentImageIndex].description}</p>
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
                {mumbaiImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏙️ About Mumbai - The City of Dreams</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {mumbaiData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to February:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>Monsoon (Jun-Sept):</span> Heavy rains, lush greenery</p>
                <p><span style={styles.highlight}>Summer (Mar-May):</span> Hot and humid, good for indoor activities</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Chhatrapati Shivaji International Airport</p>
                <p><span style={styles.highlight}>By Train:</span> Major railway stations: CST, Dadar, Bandra</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected via national highways</p>
                <p><span style={styles.highlight}>Local Transport:</span> Local trains, Metro, Buses, Taxis, Auto-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Mumbai Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall City Experience</h4>
                  <p>How was your visit to Mumbai?</p>
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
                  <h4>Street Food Experience</h4>
                  <p>How was the street food in Mumbai?</p>
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
                      onClick={() => handleRateClick({ name: 'food', type: 'Street Food' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Local Transport</h4>
                  <p>How was your experience with Mumbai's local transport?</p>
                  {userRatings.transport ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.transport.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.transport.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'transport', type: 'Local Transport' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Street Delights</h2>
            <div style={styles.grid}>
              {mumbaiData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Mumbai</h2>
            <div style={styles.grid}>
              {mumbaiData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{item.category}</h3>
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
              {mumbaiData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {mumbaiData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{place.name}</h3>
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
              {mumbaiData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police:</strong> 022-2262 3456 | <strong>Tourist Police:</strong> 022-2204 4040</p>
              <p><strong>Medical Emergency:</strong> 102 | <strong>Railway Enquiry:</strong> 139</p>
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
        <h1 style={styles.title}>🏙️ Mumbai</h1>
        <p style={styles.subtitle}>The City of Dreams - Maximum City</p>
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
                e.target.style.backgroundColor = '#90caf9';
                e.target.style.color = '#1e3c72';
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
        <p>© 2024 Mumbai Travel Guide. Explore the vibrant city of Mumbai!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring Maximum City
        </p>
      </div>
    </div>
  );
};

export default MumbaiTravelGuide;