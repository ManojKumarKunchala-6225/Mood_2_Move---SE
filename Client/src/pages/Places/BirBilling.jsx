import React, { useState } from 'react';

const BirBillingTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Bir Billing Images for Carousel
  const birBillingImages = [
    {
      url: "https://imgs.search.brave.com/v1afV2oIIRl8CClWQWDbkxa2nJwiOLdyQec-_lPwnDk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYW51/YWR2ZW50dXJlc2lu/ZGlhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNC9x/bTNlNmp6MjBtaWxu/dW9ucnJqdDRzOTJi/cjM1XzE1NjM5NzAx/NjFfMy53ZWJw",
      title: "Paragliding in Billing",
      description: "One of the world's best paragliding sites with breathtaking views"
    },
    {
      url: "https://imgs.search.brave.com/DAl2pML--_S2P-9NUImTyKGlye3NjzB91BrF1b3VZew/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/czN3YWFzLmdvdi5p/bi9zMzQ4YWVkYjg4/ODBjYWI4YzQ1NjM3/YWJjNzQ5M2VjZGRk/L3VwbG9hZHMvYmZp/X3RodW1iLzIwMTgw/NDI3MTgtb2x3OGs1/eWhiOThnNWZ6M24z/ODIzbDY0ZDVvN3d4/MmwzdWgzZDNpZzlz/LmpwZwhttps://images.unsplash.com/photo-1464822759849-e0e1003bcf7b?w=1200&h=600&fit=crop",
      title: "Dhauladhar Range",
      description: "Majestic Dhauladhar mountain range as seen from Bir"
    },
    {
      url: "https://imgs.search.brave.com/5k54QYUJeENOsg58k0_TIVYcljw6_WUFUOP3iVHBFfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2xvYmFsLWdhbGxp/dmFudGluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDcvMTA1MDIwNS0w/MS0xMDI0eDc2OC5q/cGVn",
      title: "Tibetan Monasteries",
      description: "Beautiful Tibetan monasteries and culture in Bir"
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
      marginBottom: '30px',
      padding: '30px',
      background: 'linear-gradient(135deg, #4CAF50, #8BC34A)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)'
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
      backgroundColor: '#4CAF50',
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
      color: '#4CAF50',
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
      border: '2px solid #A5D6A7',
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
      backgroundColor: '#4CAF50',
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
      borderLeft: '3px solid #8BC34A'
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
      color: '#4CAF50',
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
      backgroundColor: '#8BC34A',
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
      backgroundColor: '#4CAF50',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)'
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
      color: '#4CAF50',
      borderBottom: '3px solid #8BC34A',
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
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #A5D6A7',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(76, 175, 80, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#4CAF50',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#8BC34A',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Bir Billing Travel Data
  const birBillingData = {
    overview: {
      title: "Bir Billing - Paragliding Capital of India",
      content: `Bir Billing, located in the Kangra Valley of Himachal Pradesh, is renowned as one of the world's best paragliding destinations. This picturesque town offers the perfect combination of adventure sports and spiritual tranquility. Bir is a Tibetan colony known for its monasteries and spiritual centers, while Billing (14 km uphill) serves as the take-off point for paragliding. The site offers incredible thermal conditions that allow pilots to soar for hours over the stunning Dhauladhar mountain range. With its perfect weather conditions, breathtaking landscapes, and well-established paragliding infrastructure, Bir Billing attracts adventure enthusiasts from around the globe. The area also offers trekking, mountain biking, and cultural experiences in Tibetan monasteries.`
    },
    famousFoods: [
      {
        name: "Thukpa",
        description: "Traditional Tibetan noodle soup with vegetables and meat",
        place: "Tibetan restaurants, Local cafes",
        price: "₹120-250",
        special: "Authentic Tibetan recipe"
      },
      {
        name: "Momos",
        description: "Steamed or fried dumplings with various fillings",
        place: "Street stalls, Tibetan eateries",
        price: "₹80-200",
        special: "Freshly made with local ingredients"
      },
      {
        name: "Thenthuk",
        description: "Hand-pulled noodle soup with vegetables",
        place: "Local Tibetan restaurants",
        price: "₹100-180",
        special: "Comfort food for cold weather"
      },
      {
        name: "Local Himachali Dham",
        description: "Traditional festive meal with multiple courses",
        place: "Local homes, Special restaurants",
        price: "₹300-500",
        special: "Authentic Himachali cuisine"
      },
      {
        name: "Siddu",
        description: "Traditional steamed bread with local fillings",
        place: "Local eateries, Homestays",
        price: "₹50-100",
        special: "Himachali specialty"
      }
    ],
    shopping: [
      {
        category: "Tibetan Handicrafts",
        description: "Traditional Tibetan crafts and artifacts",
        places: ["Bir Market", "Tibetan Colony", "Monastery shops"],
        items: ["Prayer flags", "Singing bowls", "Thangka paintings", "Buddha statues"],
        priceRange: "₹200 - ₹10,000",
        bestTime: "Year-round"
      },
      {
        category: "Woolen Items",
        description: "Hand-knitted woolen clothes and accessories",
        places: ["Local markets", "Roadside shops"],
        items: ["Woolen caps", "Sweaters", "Gloves", "Socks"],
        priceRange: "₹150 - ₹2,000",
        bestTime: "Winter season"
      },
      {
        category: "Local Honey",
        description: "Pure Himalayan honey from local beekeepers",
        places: ["Local shops", "Direct from farmers"],
        items: ["Wildflower honey", "Multiflora honey", "Organic honey"],
        priceRange: "₹300 - ₹800",
        bestTime: "Year-round"
      },
      {
        category: "Adventure Gear",
        description: "Paragliding and trekking equipment",
        places: ["Adventure shops", "Sports stores"],
        items: ["Gloves", "Goggles", "Jackets", "Accessories"],
        priceRange: "₹500 - ₹20,000",
        bestTime: "Paragliding season"
      }
    ],
    hotels: [
      {
        name: "Hotel Silver Oaks",
        type: "3-Star Hotel",
        price: "₹2,500-6,000/night",
        rating: "4.2/5",
        facilities: ["Mountain view", "Restaurant", "Hot water", "Travel desk"],
        location: "Bir Road",
        distance: "1 km from landing site"
      },
      {
        name: "Zostel Bir",
        type: "Hostel & Camping",
        price: "₹500-2,000/night",
        rating: "4.5/5",
        facilities: ["Dormitory", "Common area", "Camping", "Cafe"],
        location: "Bir Colony",
        distance: "Walking distance to monasteries"
      },
      {
        name: "Dragon Guest House",
        type: "Budget Guest House",
        price: "₹800-2,500/night",
        rating: "4.0/5",
        facilities: ["Hot water", "WiFi", "Restaurant", "Garden"],
        location: "Tibetan Colony",
        distance: "Near Deer Park Institute"
      },
      {
        name: "Billing Paradise Resort",
        type: "Mountain Resort",
        price: "₹4,000-10,000/night",
        rating: "4.3/5",
        facilities: ["Mountain view", "Restaurant", "Bonfire", "Adventure activities"],
        location: "Billing",
        distance: "Near take-off site"
      },
      {
        name: "Homestay Experience",
        type: "Local Homestay",
        price: "₹1,000-3,000/night",
        rating: "4.6/5",
        facilities: ["Home-cooked meals", "Local experience", "Cultural exchange"],
        location: "Various locations",
        distance: "Authentic local experience"
      }
    ],
    places: [
      {
        name: "Billing Take-off Site",
        description: "World-class paragliding take-off point at 2400 meters",
        timing: "7:00 AM - 4:00 PM",
        entryFee: "Free (Activity charges apply)",
        bestTime: "October to June",
        highlights: ["Paragliding", "Mountain views", "Photography", "Adventure sports"]
      },
      {
        name: "Deer Park Institute",
        description: "Center for Buddhist studies and traditional wisdom",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "Free",
        bestTime: "Morning for meditation",
        highlights: ["Buddhist studies", "Meditation", "Library", "Cultural events"]
      },
      {
        name: "Sherabling Monastery",
        description: "Beautiful Tibetan Buddhist monastery in serene surroundings",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning prayers",
        highlights: ["Monastery architecture", "Prayer sessions", "Peaceful environment"]
      },
      {
        name: "Bir Tea Gardens",
        description: "Vast tea estates offering scenic walks and photography",
        timing: "Daylight hours",
        entryFee: "Free",
        bestTime: "Morning or evening",
        highlights: ["Tea plantation walks", "Photography", "Nature trails"]
      },
      {
        name: "Chokling Monastery",
        description: "One of the oldest Tibetan monasteries in Bir",
        timing: "7:00 AM - 7:00 PM",
        entryFee: "Free",
        bestTime: "During prayer times",
        highlights: ["Ancient architecture", "Prayer wheels", "Spiritual atmosphere"]
      },
      {
        name: "Baijnath Temple",
        description: "Ancient Shiva temple dating back to 13th century",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning or evening aarti",
        highlights: ["Ancient architecture", "Spiritual significance", "Historical importance"]
      }
    ],
    precautions: [
      {
        category: "Paragliding Safety",
        tips: [
          "Always fly with certified and experienced pilots",
          "Check weather conditions before flying",
          "Follow all safety instructions from instructors",
          "Wear proper safety gear including helmet"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Carry warm clothes as temperatures drop significantly",
          "Wear comfortable shoes for walking",
          "Carry raincoat during monsoon season",
          "Use sunscreen at high altitude"
        ]
      },
      {
        category: "Health & Altitude",
        tips: [
          "Acclimatize properly to avoid altitude sickness",
          "Stay hydrated throughout your stay",
          "Carry basic medicines for headaches and nausea",
          "Inform about any health conditions to instructors"
        ]
      },
      {
        category: "Travel Planning",
        tips: [
          "Book paragliding in advance during peak season",
          "Carry cash as ATMs are limited",
          "Check road conditions before traveling",
          "Keep emergency contacts handy"
        ]
      },
      {
        category: "General Safety",
        tips: [
          "Respect local culture and traditions",
          "Avoid night travel on mountain roads",
          "Keep important documents safe",
          "Inform someone about your trekking plans"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === birBillingImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? birBillingImages.length - 1 : prevIndex - 1
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
                src={birBillingImages[currentImageIndex].url} 
                alt={birBillingImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{birBillingImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{birBillingImages[currentImageIndex].description}</p>
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
                {birBillingImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Bir Billing</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {birBillingData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#4CAF50', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Perfect for paragliding with clear skies</p>
                <p><span style={styles.highlight}>September to November:</span> Pleasant weather, ideal for all activities</p>
                <p><span style={styles.highlight}>December to February:</span> Cold but beautiful, limited paragliding</p>
                <p><span style={styles.highlight}>July to August:</span> Monsoon, adventure activities restricted</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#4CAF50', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Gaggal Airport (67 km) or Chandigarh Airport</p>
                <p><span style={styles.highlight}>By Train:</span> Ahju Railway Station (10 km) or Pathankot</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Delhi, Chandigarh, Dharamshala</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Buses, Auto-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Bir Billing Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Experience</h4>
                  <p>How was your visit to Bir Billing?</p>
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
                  <h4>Paragliding Experience</h4>
                  <p>How was your paragliding adventure?</p>
                  {userRatings.paragliding ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.paragliding.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.paragliding.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'paragliding', type: 'Paragliding Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Scenic Beauty</h4>
                  <p>How were the mountain views and landscapes?</p>
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Local Delicacies</h2>
            <div style={styles.grid}>
              {birBillingData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4CAF50', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Bir Billing</h2>
            <div style={styles.grid}>
              {birBillingData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4CAF50', marginBottom: '15px'}}>{item.category}</h3>
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
              {birBillingData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4CAF50', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {birBillingData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4CAF50', marginBottom: '15px'}}>{place.name}</h3>
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
              {birBillingData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4CAF50', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 102 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Local Police Station:</strong> 01894-248202</p>
              <p><strong>Nearest Hospital:</strong> Civil Hospital, Baijnath | <strong>Paragliding Association:</strong> 098160-00000</p>
              <p><strong>Taxi Services:</strong> Local taxi stand near Bir bus stand</p>
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
        <h1 style={styles.title}>🪂 Bir Billing</h1>
        <p style={styles.subtitle}>Paragliding Capital of India - Adventure Paradise</p>
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
                e.target.style.backgroundColor = '#8BC34A';
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
        marginTop: '40px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Bir Billing Travel Guide. Experience Adventure Paradise!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for adventure seekers exploring the Himalayas
        </p>
      </div>
    </div>
  );
};

export default BirBillingTravelGuide;