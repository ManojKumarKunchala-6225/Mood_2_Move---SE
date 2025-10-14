import React, { useState } from 'react';

const AuliTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Auli Images for Carousel
  const auliImages = [
    {
      url: "https://images.unsplash.com/photo-1582054879934-92c44a8e149f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVsaSUyMHNraSUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Auli Ski Resort",
      description: "One of Asia's best skiing destinations with pristine slopes"
    },
    {
      url: "https://images.unsplash.com/photo-1701599346683-37a6c9d1e001?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      title: "Auli Artificial Lake",
      description: "Breathtaking views of Nanda Devi, Trishul, and other peaks"
    },
    {
      url: "https://images.unsplash.com/photo-1631377952034-a0460eba141f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVsaSUyMGhpbWFsYXlhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Panoromic Himayalan Views",
      description: "World's highest artificial lake for snow production"
    },
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#f0f8ff',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      marginTop: '30px',
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
      marginBottom: '40px',
      marginTop: '20px',
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
      marginTop: '30px',
      marginBottom: '20px',
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
      backgroundColor: '#f0f8ff',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #2a5298',
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
      marginBottom: '40px',
      marginTop: '20px',
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
      minHeight: '500px',
      marginTop: '20px'
    },
    section: {
      marginBottom: '40px',
      marginTop: '20px'
    },
    sectionTitle: {
      color: '#1e3c72',
      borderBottom: '3px solid #2a5298',
      paddingBottom: '15px',
      marginBottom: '30px',
      marginTop: '20px',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '30px'
    },
    card: {
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #2a5298',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(30, 60, 114, 0.1)',
      marginTop: '15px'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '20px 0',
      marginTop: '25px'
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

  // Auli Travel Data
  const auliData = {
    overview: {
      title: "Auli - The Skiing Paradise of India",
      content: `Auli is a picturesque hill station and ski resort in the Garhwal region of Uttarakhand, situated at an elevation of 2,800 meters (9,200 feet). Known as one of the best skiing destinations in Asia, Auli offers breathtaking panoramic views of Himalayan peaks including Nanda Devi, Trishul, and Dronagiri. The region features pristine slopes, Asia's longest cable car (4.15 km), and the world's highest artificial lake for snow production. Originally developed as a paramilitary base, Auli has now become a premier winter sports destination with well-maintained slopes ranging from 3 km to 10 km. The summer months transform Auli into a beautiful meadow with lush green valleys and colorful flowers, making it a year-round destination.`
    },
    famousFoods: [
      {
        name: "Garhwali Thali",
        description: "Traditional meal with local Garhwali dishes",
        place: "Local dhabas, Hotel restaurants",
        price: "₹200-400",
        special: "Authentic mountain cuisine experience"
      },
      {
        name: "Kafuli",
        description: "Green leafy vegetable curry - Garhwali specialty",
        place: "Local eateries, Homestays",
        price: "₹120-200",
        special: "Healthy and nutritious local dish"
      },
      {
        name: "Bhatt Ki Churkani",
        description: "Black soybean curry with rice",
        place: "Traditional restaurants",
        price: "₹150-250",
        special: "Protein-rich mountain food"
      },
      {
        name: "Maggi Noodles",
        description: "Popular quick snack in mountains",
        place: "Roadside stalls, Cafes",
        price: "₹50-80",
        special: "Traveler's favorite in hills"
      },
      {
        name: "Local Tea with Pakoras",
        description: "Mountain tea with fried snacks",
        place: "Tea stalls, Viewpoints",
        price: "₹60-100",
        special: "Perfect for chilly weather"
      }
    ],
    shopping: [
      {
        category: "Woolen Handicrafts",
        description: "Local woolen items and handicrafts",
        places: ["Joshimath market", "Local shops", "Auli cable car station"],
        items: ["Woolen caps", "Gloves", "Socks", "Sweaters"],
        priceRange: "₹200 - ₹2,000",
        bestTime: "Winter season"
      },
      {
        category: "Local Produce",
        description: "Organic mountain products",
        places: ["Joshimath", "Local villages"],
        items: ["Local honey", "Herbal teas", "Mountain herbs", "Dry fruits"],
        priceRange: "₹150 - ₹1,500",
        bestTime: "Year-round"
      },
      {
        category: "Skiing Equipment",
        description: "Winter sports gear and accessories",
        places: ["Auli ski rental", "Joshimath shops"],
        items: ["Ski goggles", "Gloves", "Thermal wear", "Ski accessories"],
        priceRange: "₹500 - ₹5,000",
        bestTime: "November to March"
      },
      {
        category: "Religious Items",
        description: "Spiritual and religious artifacts",
        places: ["Joshimath temples", "Local markets"],
        items: ["Rudraksha", "Incense", "Religious books", "Statues"],
        priceRange: "₹100 - ₹2,000",
        bestTime: "Pilgrimage season"
      }
    ],
    hotels: [
      {
        name: "Cliff Top Club Resort",
        type: "Luxury Ski Resort",
        price: "₹8,000-20,000/night",
        rating: "4.5/5",
        facilities: ["Ski-in/ski-out", "Restaurant", "Spa", "Ski Equipment"],
        location: "Auli",
        distance: "On slopes"
      },
      {
        name: "GMVN Auli Tourist House",
        type: "Government Resort",
        price: "₹2,000-6,000/night",
        rating: "4.0/5",
        facilities: ["Basic amenities", "Restaurant", "Heating", "Ski access"],
        location: "Auli",
        distance: "Near ski slopes"
      },
      {
        name: "The Tattva Resort",
        type: "Boutique Resort",
        price: "₹5,000-12,000/night",
        rating: "4.3/5",
        facilities: ["Mountain view", "Restaurant", "Fireplace", "Adventure activities"],
        location: "Joshimath",
        distance: "15 km from Auli"
      },
      {
        name: "Hotel Mount View",
        type: "Mid-range Hotel",
        price: "₹3,000-7,000/night",
        rating: "3.8/5",
        facilities: ["Restaurant", "Travel Desk", "Heating", "Parking"],
        location: "Joshimath",
        distance: "16 km from Auli"
      },
      {
        name: "Budget Homestays",
        type: "Economy Accommodation",
        price: "₹1,000-3,000/night",
        rating: "3.5/5",
        facilities: ["Home-cooked food", "Basic rooms", "Local experience"],
        location: "Joshimath area",
        distance: "15-20 km from Auli"
      }
    ],
    places: [
      {
        name: "Auli Ski Slopes",
        description: "Professional skiing slopes with varying difficulty levels",
        timing: "8:00 AM - 4:00 PM (Winter season)",
        entryFee: "Ski pass: ₹800-2,000/day",
        bestTime: "December to March",
        highlights: ["Skiing", "Snowboarding", "Ski lessons", "Winter sports"]
      },
      {
        name: "Auli Ropeway",
        description: "Asia's longest cable car with stunning Himalayan views",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹700-1,200 (round trip)",
        bestTime: "Clear weather days",
        highlights: ["Panoramic views", "Photography", "Mountain scenery", "Adventure"]
      },
      {
        name: "Auli Artificial Lake",
        description: "World's highest artificial lake for snow production",
        timing: "Open 24 hours",
        entryFee: "Free",
        bestTime: "Winter months",
        highlights: ["Snow production", "Reflection photography", "Engineering marvel"]
      },
      {
        name: "Joshimath",
        description: "Base town for Auli with religious significance",
        timing: "Open all day",
        entryFee: "Free",
        bestTime: "Year-round",
        highlights: ["Narsimha Temple", "Shopping", "Local culture", "Adventure hub"]
      },
      {
        name: "Gurso Bugyal",
        description: "Beautiful alpine meadow near Auli",
        timing: "Daylight hours",
        entryFee: "Free",
        bestTime: "April to November",
        highlights: ["Trekking", "Flora & fauna", "Photography", "Nature walks"]
      },
      {
        name: "Chenab Lake",
        description: "Serene high-altitude lake near Auli",
        timing: "Daylight hours",
        entryFee: "Free",
        bestTime: "Summer months",
        highlights: ["Trekking destination", "Natural beauty", "Peaceful environment"]
      }
    ],
    precautions: [
      {
        category: "Winter Sports Safety",
        tips: [
          "Always use proper skiing equipment and safety gear",
          "Take professional lessons if you're a beginner",
          "Check weather conditions before heading to slopes",
          "Follow instructions from ski patrol and instructors"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Carry multiple layers of warm clothing",
          "Waterproof jackets and pants are essential",
          "Proper snow boots with good grip",
          "Sunglasses and sunscreen for high-altitude sun"
        ]
      },
      {
        category: "Altitude & Health",
        tips: [
          "Acclimatize properly to avoid altitude sickness",
          "Stay hydrated and avoid alcohol",
          "Carry necessary medications",
          "Inform someone about your trekking plans"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Check road conditions in winter months",
          "Book accommodations in advance during peak season",
          "Carry cash as ATMs are limited",
          "Keep emergency contacts handy"
        ]
      },
      {
        category: "Environmental Care",
        tips: [
          "Do not litter - carry back your waste",
          "Respect local wildlife and flora",
          "Stay on marked trails while trekking",
          "Follow fire safety rules in forest areas"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === auliImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? auliImages.length - 1 : prevIndex - 1
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
                src={auliImages[currentImageIndex].url} 
                alt={auliImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{auliImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{auliImages[currentImageIndex].description}</p>
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
                {auliImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Auli - Skiing Paradise</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {auliData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>December to March:</span> Perfect for skiing and winter sports</p>
                <p><span style={styles.highlight}>January to February:</span> Peak snow season, ideal for skiing</p>
                <p><span style={styles.highlight}>April to June:</span> Pleasant weather, lush green meadows</p>
                <p><span style={styles.highlight}>July to September:</span> Monsoon, risky for outdoor activities</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Jolly Grant Airport, Dehradun (270 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Haridwar Railway Station (270 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Joshimath (16 km) is the base town</p>
                <p><span style={styles.highlight}>Ropeway:</span> Cable car from Joshimath to Auli</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Auli Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Mountain Experience</h4>
                  <p>How was your visit to Auli?</p>
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
                  <h4>Skiing Experience</h4>
                  <p>How was the skiing and winter sports?</p>
                  {userRatings.skiing ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.skiing.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.skiing.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'skiing', type: 'Skiing Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Scenic Beauty</h4>
                  <p>How were the Himalayan views and natural beauty?</p>
                  {userRatings.scenery ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.scenery.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.scenery.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'scenery', type: 'Scenic Beauty' })}
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
              {auliData.famousFoods.map((food, index) => (
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Auli & Joshimath</h2>
            <div style={styles.grid}>
              {auliData.shopping.map((item, index) => (
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
              {auliData.hotels.map((hotel, index) => (
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
            <h2 style={styles.sectionTitle}>🏔️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {auliData.places.map((place, index) => (
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
              {auliData.precautions.map((category, index) => (
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
              <p><strong>Joshimath Police:</strong> 01389-222210 | <strong>Hospital:</strong> 01389-222202</p>
              <p><strong>Ski Patrol Auli:</strong> Available at ski resort | <strong>GMVN Office:</strong> 01389-222218</p>
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
        <h1 style={styles.title}>🏔️ Auli</h1>
        <p style={styles.subtitle}>Skiing Paradise of India - Himalayan Winter Wonderland</p>
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
                e.target.style.backgroundColor = '#2a5298';
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
            {tab === 'places' && '🏔️ Places'}
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
        marginTop: '50px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Auli Travel Guide. Experience the Himalayan Skiing Paradise!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for adventure lovers exploring the Indian Himalayas
        </p>
      </div>
    </div>
  );
};

export default AuliTravelGuide;