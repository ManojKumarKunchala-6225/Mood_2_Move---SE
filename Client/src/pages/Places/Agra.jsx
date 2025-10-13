import React, { useState } from 'react';

const AgraTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Agra Images for Carousel
  const agraImages = [
    {
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      title: "Taj Mahal",
      description: "The iconic symbol of love, one of the Seven Wonders of the World"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1697730373510-51b7fcf2ff52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdyYSUyMGZvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      title: "Agra Fort",
      description: "UNESCO World Heritage Site, massive red sandstone fort"
    },
    {
      url: "https://media.istockphoto.com/id/698902360/photo/diwan-i-khas-in-the-pachisi-courtyard-fatehpur-sikri-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=2fDXdXtTHH70CQhXxIq2t3NZSB-TyOaarMQV2XQp91c=",
      title: "Fatehpur Sikri",
      description: "Mughal capital city with stunning architecture"
    },
    {
      url: "https://media.istockphoto.com/id/1322685447/photo/itmad-ud-daula-also-know-as-baby-taj.jpg?s=1024x1024&w=is&k=20&c=7JZtJvXqOgevm7ijinXX3KgL6gtL3ZVqLFhDTYiEzps=",
      title: "Itmad-ud-Daulah's Tomb",
      description: "Beautiful marble tomb often called 'Baby Taj'"
    },
    {
      url: "https://media.istockphoto.com/id/89466780/photo/mughal-garden.jpg?s=1024x1024&w=is&k=20&c=FzQNBciM9LD0zE7ajhFrgGifLgsUDbAN4kdvc9_OPuU=",
      title: "Mehtab Bagh",
      description: "Moonlight Garden with perfect Taj Mahal views"
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
      background: 'linear-gradient(135deg, #800020, #B22222)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(128, 0, 32, 0.3)'
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
      backgroundColor: '#800020',
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
      color: '#800020',
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
      border: '2px solid #B22222',
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
      backgroundColor: '#800020',
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
      backgroundColor: '#fff5f5',
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
      color: '#800020',
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
      backgroundColor: '#800020',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(128, 0, 32, 0.4)'
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
      color: '#800020',
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
      border: '2px solid #B22222',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(128, 0, 32, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#800020',
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

  // Agra Travel Data
  const agraData = {
    overview: {
      title: "Agra - City of the Taj Mahal",
      content: `Agra is a historic city on the banks of the Yamuna River in Uttar Pradesh, India. Famous worldwide for the iconic Taj Mahal, Agra is a prominent tourist destination that forms part of the Golden Triangle tourist circuit along with Delhi and Jaipur. The city was the capital of the Mughal Empire from 1526 to 1658 and remains a major cultural and historical center. Agra's rich heritage is evident in its magnificent Mughal-era architecture, including three UNESCO World Heritage Sites: the Taj Mahal, Agra Fort, and Fatehpur Sikri. The city's history, architecture, and crafts like marble inlay work continue to attract millions of visitors from around the globe.`
    },
    famousFoods: [
      {
        name: "Petha",
        description: "Sweet candy made from ash gourd",
        place: "Panchhi Petha, Bhagat Halwai",
        price: "₹50-300",
        special: "Agra's most famous sweet"
      },
      {
        name: "Mughlai Cuisine",
        description: "Rich, aromatic dishes from Mughal era",
        place: "Local restaurants, Hotel dining",
        price: "₹200-800",
        special: "Biryani, Kebabs, Korma"
      },
      {
        name: "Bedai & Jalebi",
        description: "Traditional breakfast with spicy lentils and sweet jalebi",
        place: "Local breakfast joints",
        price: "₹60-120",
        special: "Classic Agra morning meal"
      },
      {
        name: "Dalmoth",
        description: "Spicy fried snack mix",
        place: "Local namkeen shops",
        price: "₹100-500",
        special: "Famous Agra savory"
      },
      {
        name: "Tandoori Chicken",
        description: "Clay oven roasted chicken with spices",
        place: "Restaurants near Taj Mahal",
        price: "₹300-600",
        special: "Mughlai specialty"
      }
    ],
    shopping: [
      {
        category: "Marble Inlay Work",
        description: "Beautiful handicrafts with semi-precious stone inlay",
        places: ["Shops near Taj Mahal", "Sadar Bazaar", "Kinari Bazaar"],
        items: ["Table tops", "Jewelry boxes", "Decoration pieces", "Coasters"],
        priceRange: "₹500 - ₹50,000",
        bestTime: "Year-round"
      },
      {
        category: "Leather Goods",
        description: "High-quality leather products",
        places: ["Sadar Bazaar", "Shops near railway station"],
        items: ["Shoes", "Bags", "Belts", "Jackets"],
        priceRange: "₹300 - ₹20,000",
        bestTime: "Year-round"
      },
      {
        category: "Carpets & Rugs",
        description: "Handwoven carpets with traditional designs",
        places: ["Specialty stores", "Government emporium"],
        items: ["Silk carpets", "Woolen rugs", "Dhurries"],
        priceRange: "₹2,000 - ₹1,00,000",
        bestTime: "Winter season"
      },
      {
        category: "Jewelry",
        description: "Traditional and modern jewelry designs",
        places: ["Kinari Bazaar", "Jewelry shops"],
        items: ["Gold jewelry", "Silver items", "Costume jewelry"],
        priceRange: "₹500 - ₹5,00,000",
        bestTime: "Festival season"
      }
    ],
    hotels: [
      {
        name: "The Oberoi Amarvilas",
        type: "Luxury 5-Star Hotel",
        price: "₹25,000-80,000/night",
        rating: "4.8/5",
        facilities: ["Taj Mahal view", "Spa", "Pool", "Fine dining"],
        location: "Taj East Gate Road",
        distance: "600 meters from Taj Mahal"
      },
      {
        name: "ITC Mughal",
        type: "Luxury Resort",
        price: "₹8,000-25,000/night",
        rating: "4.5/5",
        facilities: ["Spa", "Golf", "Pool", "Multiple restaurants"],
        location: "Taj Ganj",
        distance: "2 km from Taj Mahal"
      },
      {
        name: "Jaypee Palace Hotel",
        type: "5-Star Luxury",
        price: "₹6,000-18,000/night",
        rating: "4.3/5",
        facilities: ["Large property", "Pool", "Spa", "Conference facilities"],
        location: "Fatehabad Road",
        distance: "4 km from Taj Mahal"
      },
      {
        name: "Hotel Taj Resorts",
        type: "Mid-range Hotel",
        price: "₹3,000-8,000/night",
        rating: "4.0/5",
        facilities: ["Restaurant", "Travel Desk", "Parking", "AC Rooms"],
        location: "Fatehabad Road",
        distance: "1.5 km from Taj Mahal"
      },
      {
        name: "Zostel Agra",
        type: "Budget Hostel",
        price: "₹500-1,500/night",
        rating: "3.8/5",
        facilities: ["Dormitory", "Common Kitchen", "Roof-top cafe", "WiFi"],
        location: "Taj Ganj",
        distance: "Walking distance to Taj Mahal"
      }
    ],
    places: [
      {
        name: "Taj Mahal",
        description: "Iconic white marble mausoleum, one of the Seven Wonders",
        timing: "Sunrise to Sunset (Closed Fridays)",
        entryFee: "₹1,100 (Foreigners), ₹50 (Indians)",
        bestTime: "Sunrise or Sunset",
        highlights: ["Main Mausoleum", "Gardens", "Mosque", "Museum"]
      },
      {
        name: "Agra Fort",
        description: "Massive red sandstone fort, UNESCO World Heritage Site",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹550 (Foreigners), ₹40 (Indians)",
        bestTime: "Morning hours",
        highlights: ["Jahangir Palace", "Khas Mahal", "Musamman Burj", "Diwan-i-Khas"]
      },
      {
        name: "Fatehpur Sikri",
        description: "Mughal capital city with stunning architecture",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹510 (Foreigners), ₹40 (Indians)",
        bestTime: "Early morning",
        highlights: ["Buland Darwaza", "Jama Masjid", "Panch Mahal", "Tomb of Salim Chishti"]
      },
      {
        name: "Itmad-ud-Daulah's Tomb",
        description: "Beautiful marble tomb often called 'Baby Taj'",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹210 (Foreigners), ₹20 (Indians)",
        bestTime: "Late afternoon",
        highlights: ["Intricate Marble Work", "Pietra Dura", "Gardens", "River View"]
      },
      {
        name: "Mehtab Bagh",
        description: "Moonlight Garden with perfect Taj Mahal views",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹200 (Foreigners), ₹20 (Indians)",
        bestTime: "Sunset",
        highlights: ["Taj Mahal View", "Photography", "Gardens", "Sunset Point"]
      },
      {
        name: "Akbar's Tomb",
        description: "Mughal emperor Akbar's tomb in Sikandra",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹210 (Foreigners), ₹20 (Indians)",
        bestTime: "Morning",
        highlights: ["Architecture", "Gardens", "Historical Significance"]
      }
    ],
    precautions: [
      {
        category: "Taj Mahal Visit",
        tips: [
          "Book tickets online to avoid long queues",
          "Carry water bottle (plastic not allowed)",
          "No food items allowed inside",
          "Friday closed for general public"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Wear comfortable walking shoes",
          "Carry hat and sunglasses in summer",
          "Light woolens in winter",
          "Rain protection during monsoon"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Hire registered guides only",
          "Use prepaid taxis/auto-rickshaws",
          "Beware of touts and fake guides",
          "Keep hotel address handy"
        ]
      },
      {
        category: "Shopping & Food",
        tips: [
          "Bargain at local markets",
          "Buy marble items from certified shops",
          "Drink bottled water only",
          "Try street food from clean establishments"
        ]
      },
      {
        category: "General Safety",
        tips: [
          "Keep valuables secure",
          "Respect local customs and traditions",
          "Carry cash as some places don't accept cards",
          "Save emergency contacts"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === agraImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? agraImages.length - 1 : prevIndex - 1
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
                src={agraImages[currentImageIndex].url} 
                alt={agraImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{agraImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{agraImages[currentImageIndex].description}</p>
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
                {agraImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏛️ About Agra - City of the Taj Mahal</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {agraData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#800020', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>November to February:</span> Cool winter, perfect for photography</p>
                <p><span style={styles.highlight}>April to June:</span> Hot summer, carry water and protection</p>
                <p><span style={styles.highlight}>July to September:</span> Monsoon, lush greenery but humid</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#800020', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Agra Airport (8 km from city)</p>
                <p><span style={styles.highlight}>By Train:</span> Agra Cantt, Raja-ki-Mandi, Agra Fort stations</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected via Yamuna Expressway</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis, Cycle-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Agra Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Heritage Experience</h4>
                  <p>How was your visit to Agra?</p>
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
                  <h4>Taj Mahal Experience</h4>
                  <p>How was your visit to the Wonder of the World?</p>
                  {userRatings.tajmahal ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.tajmahal.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.tajmahal.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'tajmahal', type: 'Taj Mahal' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Mughlai Food Experience</h4>
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
                      onClick={() => handleRateClick({ name: 'food', type: 'Mughlai Food' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Mughlai Cuisine</h2>
            <div style={styles.grid}>
              {agraData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800020', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Agra</h2>
            <div style={styles.grid}>
              {agraData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800020', marginBottom: '15px'}}>{item.category}</h3>
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
              {agraData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800020', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {agraData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800020', marginBottom: '15px'}}>{place.name}</h3>
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
              {agraData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800020', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police:</strong> 0562-2421204 | <strong>Hospital:</strong> 0562-2261001</p>
              <p><strong>Tourist Information Center:</strong> 0562-2226368</p>
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
        <h1 style={styles.title}>🏛️ Agra</h1>
        <p style={styles.subtitle}>City of the Taj Mahal - Mughal Heritage Capital</p>
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
                e.target.style.backgroundColor = '#B22222';
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
        marginTop: '40px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Agra Travel Guide. Experience the Mughal Heritage!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the wonders of Agra
        </p>
      </div>
    </div>
  );
};

export default AgraTravelGuide;
