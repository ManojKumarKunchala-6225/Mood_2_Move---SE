import React, { useState } from 'react';

const AjantaElloraTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Ajanta & Ellora Images for Carousel
  const cavesImages = [
    {
      url: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=1200&h=600&fit=crop",
      title: "Ajanta Caves",
      description: "Ancient Buddhist rock-cut cave monuments with exquisite paintings"
    },
    {
      url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1200&h=600&fit=crop",
      title: "Ellora Caves",
      description: "UNESCO World Heritage Site with Hindu, Buddhist, and Jain temples"
    },
    {
      url: "https://images.unsplash.com/photo-1621261144936-7b3f6c4c0d6a?w=1200&h=600&fit=crop",
      title: "Kailasa Temple",
      description: "World's largest monolithic rock-cut structure at Ellora"
    },
    {
      url: "https://images.unsplash.com/photo-1574947603240-38d884ecc3ef?w=1200&h=600&fit=crop",
      title: "Ajanta Cave Paintings",
      description: "Ancient Buddhist frescoes and murals"
    },
    {
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=600&fit=crop",
      title: "Ellora Buddhist Caves",
      description: "Early Buddhist viharas and chaityas"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#f8f8f8',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px', // Increased margin
      marginTop: '30px', // Added top margin
      padding: '30px',
      background: 'linear-gradient(135deg, #8B4513, #CD853F)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(139, 69, 19, 0.3)'
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
      marginBottom: '40px', // Increased margin
      marginTop: '20px', // Added top margin
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
      backgroundColor: '#8B4513',
      transform: 'scale(1.2)'
    },
    // Rating Styles
    ratingSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '30px', // Increased margin
      marginBottom: '20px', // Added bottom margin
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    ratingTitle: {
      color: '#8B4513',
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
      backgroundColor: '#fff8f0',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #CD853F',
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
      backgroundColor: '#8B4513',
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
      backgroundColor: '#fff8f0',
      borderRadius: '5px',
      borderLeft: '3px solid #CD853F'
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
      color: '#8B4513',
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
      backgroundColor: '#CD853F',
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
      marginBottom: '40px', // Increased margin
      marginTop: '20px', // Added top margin
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
      backgroundColor: '#8B4513',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(139, 69, 19, 0.4)'
    },
    content: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      minHeight: '500px',
      marginTop: '20px' // Added top margin
    },
    section: {
      marginBottom: '40px', // Increased margin
      marginTop: '20px' // Added top margin
    },
    sectionTitle: {
      color: '#8B4513',
      borderBottom: '3px solid #CD853F',
      paddingBottom: '15px',
      marginBottom: '30px', // Increased margin
      marginTop: '20px', // Added top margin
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '30px' // Increased margin
    },
    card: {
      backgroundColor: '#fff8f0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #CD853F',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 69, 19, 0.1)',
      marginTop: '15px' // Added top margin
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '20px 0', // Increased margin
      marginTop: '25px' // Added top margin
    },
    highlight: {
      color: '#8B4513',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#CD853F',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Ajanta & Ellora Travel Data
  const cavesData = {
    overview: {
      title: "Ajanta & Ellora Caves - Ancient Rock-Cut Marvels",
      content: `The Ajanta and Ellora Caves are UNESCO World Heritage Sites located in Maharashtra, India, representing some of the most magnificent examples of ancient Indian rock-cut architecture. Ajanta Caves (2nd century BCE to 480 CE) consist of 30 Buddhist cave monuments featuring exquisite paintings and sculptures that depict the Jataka tales. Ellora Caves (600-1000 CE) comprise 34 caves representing Buddhist, Hindu, and Jain traditions, with the magnificent Kailasa Temple (Cave 16) being the world's largest monolithic rock-cut structure. These caves showcase the religious harmony and artistic excellence of ancient India, attracting historians, archaeologists, and tourists from around the world.`
    },
    famousFoods: [
      {
        name: "Maharashtrian Thali",
        description: "Traditional meal with variety of local dishes",
        place: "Local restaurants, Aurangabad",
        price: "₹200-400",
        special: "Complete traditional Maharashtrian experience"
      },
      {
        name: "Puran Poli",
        description: "Sweet flatbread stuffed with lentil and jaggery",
        place: "Local eateries, Hotel restaurants",
        price: "₹50-100",
        special: "Traditional Maharashtrian sweet dish"
      },
      {
        name: "Vada Pav",
        description: "Spicy potato fritter in bun - Mumbai's favorite",
        place: "Street vendors, Local cafes",
        price: "₹20-40",
        special: "Maharashtra's most popular street food"
      },
      {
        name: "Misal Pav",
        description: "Spicy curry with sprouts served with bread",
        place: "Local restaurants, Roadside stalls",
        price: "₹60-120",
        special: "Spicy Maharashtrian breakfast"
      },
      {
        name: "Bhakri",
        description: "Traditional millet bread with local curries",
        place: "Village restaurants, Traditional eateries",
        price: "₹80-150",
        special: "Rural Maharashtrian specialty"
      }
    ],
    shopping: [
      {
        category: "Handicrafts & Replicas",
        description: "Stone carvings and miniature replicas of cave sculptures",
        places: ["Shops near caves", "Aurangabad markets", "Government emporium"],
        items: ["Buddha statues", "Stone carvings", "Miniature paintings", "Replica sculptures"],
        priceRange: "₹200 - ₹20,000",
        bestTime: "Year-round"
      },
      {
        category: "Himroo Shawls",
        description: "Traditional Aurangabad silk and cotton fabric",
        places: ["Aurangabad markets", "Specialty stores"],
        items: ["Himroo shawls", "Stoles", "Sarees", "Dress materials"],
        priceRange: "₹500 - ₹15,000",
        bestTime: "Winter season"
      },
      {
        category: "Paithani Sarees",
        description: "Traditional Maharashtrian silk sarees with zari work",
        places: ["Aurangabad", "Specialized saree shops"],
        items: ["Silk sarees", "Brocade work", "Traditional designs"],
        priceRange: "₹5,000 - ₹1,00,000",
        bestTime: "Festival season"
      },
      {
        category: "Local Artifacts",
        description: "Traditional crafts and local artwork",
        places: ["Local markets", "Craft centers"],
        items: ["Bidriware", "Leather goods", "Pottery", "Woodwork"],
        priceRange: "₹150 - ₹10,000",
        bestTime: "Tourist season"
      }
    ],
    hotels: [
      {
        name: "Lemon Tree Hotel",
        type: "4-Star Business Hotel",
        price: "₹4,000-12,000/night",
        rating: "4.3/5",
        facilities: ["Restaurant", "Pool", "Spa", "Business Center"],
        location: "Aurangabad",
        distance: "30 km from caves"
      },
      {
        name: "Vivanta Aurangabad",
        type: "5-Star Luxury Hotel",
        price: "₹6,000-18,000/night",
        rating: "4.5/5",
        facilities: ["Multiple restaurants", "Pool", "Spa", "Gym"],
        location: "Aurangabad",
        distance: "28 km from Ellora"
      },
      {
        name: "Hotel Kailas",
        type: "Mid-range Hotel",
        price: "₹2,000-6,000/night",
        rating: "4.0/5",
        facilities: ["Restaurant", "Travel Desk", "Parking", "AC Rooms"],
        location: "Ellora Road",
        distance: "1 km from Ellora Caves"
      },
      {
        name: "MTDC Resort",
        type: "Government Resort",
        price: "₹1,500-4,000/night",
        rating: "3.8/5",
        facilities: ["Basic Amenities", "Restaurant", "Gardens"],
        location: "Fardapur",
        distance: "4 km from Ajanta Caves"
      },
      {
        name: "Budget Hotels & Guest Houses",
        type: "Economy Accommodation",
        price: "₹800-2,500/night",
        rating: "3.5/5",
        facilities: ["Basic Rooms", "Attached Bath", "Food Available"],
        location: "Aurangabad & nearby towns",
        distance: "Various distances"
      }
    ],
    places: [
      {
        name: "Ajanta Caves",
        description: "30 Buddhist rock-cut cave monuments with ancient paintings",
        timing: "9:00 AM - 5:30 PM (Closed Monday)",
        entryFee: "₹40 (Indians), ₹600 (Foreigners)",
        bestTime: "Morning hours",
        highlights: ["Cave 1 Paintings", "Cave 2 Sculptures", "Cave 16 Vihara", "Cave 26 Chaitya"]
      },
      {
        name: "Ellora Caves",
        description: "34 caves representing Buddhist, Hindu, and Jain traditions",
        timing: "9:00 AM - 5:30 PM (Closed Tuesday)",
        entryFee: "₹40 (Indians), ₹600 (Foreigners)",
        bestTime: "Early morning",
        highlights: ["Kailasa Temple", "Buddhist Caves", "Hindu Caves", "Jain Caves"]
      },
      {
        name: "Kailasa Temple (Cave 16)",
        description: "World's largest monolithic rock-cut structure",
        timing: "9:00 AM - 5:30 PM",
        entryFee: "Included in Ellora ticket",
        bestTime: "Morning light",
        highlights: ["Monolithic Structure", "Intricate Carvings", "Elephant sculptures", "Temple complex"]
      },
      {
        name: "Bibi Ka Maqbara",
        description: "Tomb built by Aurangzeb, often called 'Mini Taj'",
        timing: "8:00 AM - 8:00 PM",
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        bestTime: "Evening",
        highlights: ["Mughal Architecture", "Gardens", "Photography", "Historical significance"]
      },
      {
        name: "Daulatabad Fort",
        description: "Impressive hill fort with complex defense systems",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "₹15 (Indians), ₹200 (Foreigners)",
        bestTime: "Morning or evening",
        highlights: ["Fort Architecture", "Defense Mechanisms", "View from top", "Historical tunnels"]
      },
      {
        name: "Grishneshwar Temple",
        description: "One of the 12 Jyotirlinga Shiva temples",
        timing: "5:30 AM - 9:30 PM",
        entryFee: "Free",
        bestTime: "Morning prayers",
        highlights: ["Jyotirlinga", "Temple Architecture", "Religious significance", "Near Ellora"]
      }
    ],
    precautions: [
      {
        category: "Cave Exploration",
        tips: [
          "Wear comfortable walking shoes with good grip",
          "Carry water bottles and stay hydrated",
          "Hire authorized guides for detailed information",
          "Respect photography restrictions in some caves"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Light cotton clothes in summer",
          "Carry hats and sunscreen for sun protection",
          "Rain protection during monsoon (June-September)",
          "Light woolens in winter (November-February)"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Hire taxis from Aurangabad for convenience",
          "Start early to avoid crowds and heat",
          "Carry cash as some places don't accept cards",
          "Keep hotel contact details handy"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic first aid and medicines",
          "Be cautious while climbing steps in caves",
          "Stay on marked paths and follow instructions",
          "Keep emergency contacts saved"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Maintain silence in religious areas",
          "Dress modestly, especially in temples",
          "Remove shoes where required",
          "Respect local customs and traditions"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === cavesImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? cavesImages.length - 1 : prevIndex - 1
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
                src={cavesImages[currentImageIndex].url} 
                alt={cavesImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{cavesImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{cavesImages[currentImageIndex].description}</p>
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
                {cavesImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏛️ About Ajanta & Ellora Caves</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {cavesData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for exploration</p>
                <p><span style={styles.highlight}>November to February:</span> Cool climate, perfect for photography</p>
                <p><span style={styles.highlight}>April to June:</span> Hot but manageable with precautions</p>
                <p><span style={styles.highlight}>July to September:</span> Monsoon, lush greenery but slippery paths</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Aurangabad Airport (30 km from Ellora)</p>
                <p><span style={styles.highlight}>By Train:</span> Aurangabad Railway Station</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Mumbai, Pune, Hyderabad</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Buses, Auto-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Ajanta & Ellora Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Heritage Experience</h4>
                  <p>How was your visit to the caves?</p>
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
                  <h4>Ajanta Caves Experience</h4>
                  <p>How were the Buddhist cave paintings and sculptures?</p>
                  {userRatings.ajanta ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.ajanta.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.ajanta.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'ajanta', type: 'Ajanta Caves' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Ellora Caves Experience</h4>
                  <p>How was the Kailasa Temple and other rock-cut structures?</p>
                  {userRatings.ellora ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.ellora.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.ellora.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'ellora', type: 'Ellora Caves' })}
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
              {cavesData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Aurangabad Region</h2>
            <div style={styles.grid}>
              {cavesData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{item.category}</h3>
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
              {cavesData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏛️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {cavesData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{place.name}</h3>
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
              {cavesData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police (Aurangabad):</strong> 0240-2332101 | <strong>Hospital:</strong> 0240-2331515</p>
              <p><strong>Tourist Information Center:</strong> 0240-2331517</p>
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
        <h1 style={styles.title}>🏛️ Ajanta & Ellora</h1>
        <p style={styles.subtitle}>Ancient Rock-Cut Cave Temples - UNESCO World Heritage</p>
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
                e.target.style.backgroundColor = '#CD853F';
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
            {tab === 'places' && '🏛️ Places'}
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
        marginTop: '50px', // Increased margin
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Ajanta & Ellora Travel Guide. Experience Ancient Indian Heritage!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the rock-cut marvels of India
        </p>
      </div>
    </div>
  );
};

export default AjantaElloraTravelGuide;