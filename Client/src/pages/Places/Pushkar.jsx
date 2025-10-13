import React, { useState } from 'react';

const PushkarTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Pushkar Images for Carousel
  const pushkarImages = [
    {
       url: "https://media.istockphoto.com/id/475177362/photo/pushkar-camel-fair.webp?a=1&b=1&s=612x612&w=0&k=20&c=zkDWCmabI59HZHevjM0yngklejZvTHyWS11or9jPTMY=",
      title: "Pushkar Lake",
      description: "Sacred lake surrounded by ghats and temples"
    },
    {
      url: "https://media.istockphoto.com/id/638532774/photo/brahma-hindu-temple-in-pushkar.webp?a=1&b=1&s=612x612&w=0&k=20&c=FdVMVpSZBwISwpPtealT94vF-hIMdjPXP3QdrJrMmYI=",
      title: "Brahma Temple",
      description: "One of the few temples dedicated to Lord Brahma"
    },
    {
      url: "https://media.istockphoto.com/id/1262199907/photo/the-pushkar-fair.webp?a=1&b=1&s=612x612&w=0&k=20&c=KvCA2X7wE5i9b4EtwyJsU2rJgtfiDsUvuflHmUxwyUI=",
      title: "Pushkar Camel Fair",
      description: "World's largest camel fair and cultural festival"
    },
    {
      url: "https://media.istockphoto.com/id/1320345442/photo/view-of-indian-pilgrimage-sacred-city-pushkar-with-pushkar-ghats-rajasthan-india-horizontal.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q2tECQmmdobaNeHq8kttSKVdXAPHOeFcpDy1S6X_rPM=",
      title: "Evening Aarti",
      description: "Spiritual ceremony at Pushkar Lake"
    },
    {
      url: "https://media.istockphoto.com/id/979183928/photo/pushkar-town-sunset-panorama-view-from-papmochani-mata-hindu-temple-in-pushkar-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=MNsSJf3VO3uCwW6cJSTuNPCnkoP-oaR745OzzkfLzKg=",
      title: "Colorful Streets",
      description: "Vibrant markets and traditional architecture"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#fffaf0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      marginTop: '40px',
      padding: '40px',
      background: 'linear-gradient(135deg, #4A90E2, #7B68EE)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(74, 144, 226, 0.3)'
    },
    title: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    subtitle: {
      fontSize: '1.5rem',
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
      marginBottom: '50px',
      marginTop: '30px',
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
      backgroundColor: '#4A90E2',
      transform: 'scale(1.2)'
    },
    // Rating Styles
    ratingSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '40px',
      marginBottom: '30px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    ratingTitle: {
      color: '#4A90E2',
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
      border: '2px solid #7B68EE',
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
      backgroundColor: '#4A90E2',
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
      borderLeft: '3px solid #7B68EE'
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
      color: '#4A90E2',
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
      backgroundColor: '#7B68EE',
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
      marginBottom: '50px',
      marginTop: '30px',
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
      backgroundColor: '#4A90E2',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(74, 144, 226, 0.4)'
    },
    content: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      minHeight: '500px',
      marginTop: '30px'
    },
    section: {
      marginBottom: '50px',
      marginTop: '30px'
    },
    sectionTitle: {
      color: '#4A90E2',
      borderBottom: '3px solid #7B68EE',
      paddingBottom: '15px',
      marginBottom: '40px',
      marginTop: '30px',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '40px'
    },
    card: {
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #7B68EE',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(74, 144, 226, 0.1)',
      marginTop: '20px'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '30px 0',
      marginTop: '35px'
    },
    highlight: {
      color: '#4A90E2',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#7B68EE',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    },
    legend: {
      backgroundColor: '#f0f8ff',
      padding: '15px',
      borderRadius: '8px',
      margin: '20px 0',
      borderLeft: '4px solid #4A90E2'
    }
  };

  // Pushkar Travel Data
  const pushkarData = {
    overview: {
      title: "Pushkar - The Sacred Lake City",
      content: `Pushkar, often called the 'Rose Garden of Rajasthan', is one of the oldest cities in India and a prominent Hindu pilgrimage site. Located in the Ajmer district of Rajasthan, this sacred town is built around Pushkar Lake, believed to have been created by Lord Brahma himself. The city is famous for having one of the very few temples in the world dedicated to Lord Brahma. Pushkar is also renowned for its annual Camel Fair, which attracts thousands of tourists, traders, and devotees from around the world. The town's narrow lanes, vibrant markets, numerous ghats, and over 500 temples create a unique spiritual atmosphere that blends perfectly with traditional Rajasthani culture.`
    },
    famousFoods: [
      {
        name: "Malpua with Rabri",
        description: "Sweet pancake dipped in sugar syrup served with thickened milk",
        place: "Street vendors, Sweet shops",
        price: "₹50-150",
        special: "Traditional Pushkar sweet specialty"
      },
      {
        name: "Kachori with Sabzi",
        description: "Fried bread stuffed with lentils served with potato curry",
        place: "Local breakfast joints, Street stalls",
        price: "₹40-80",
        special: "Popular breakfast item"
      },
      {
        name: "Thali Meals",
        description: "Complete vegetarian meal with multiple dishes",
        place: "Local restaurants, Temple bhojanalaya",
        price: "₹150-300",
        special: "Traditional Rajasthani complete meal"
      },
      {
        name: "Lassi",
        description: "Sweet yogurt-based drink, often with dry fruits",
        place: "Lassi shops, Street vendors",
        price: "₹50-120",
        special: "Creamy and refreshing drink"
      },
      {
        name: "Rose Products",
        description: "Rose milk, rose sweets, and rose-based items",
        place: "Specialty shops, Local markets",
        price: "₹30-200",
        special: "Pushkar's signature rose flavor"
      }
    ],
    shopping: [
      {
        category: "Religious Items",
        description: "Spiritual and ritual items for pilgrims",
        places: ["Temple street", "Local markets", "Near ghats"],
        items: ["Rudraksha beads", "Incense sticks", "Pooja items", "Religious books"],
        priceRange: "₹50 - ₹5,000",
        bestTime: "Year-round"
      },
      {
        category: "Handicrafts & Souvenirs",
        description: "Traditional Rajasthani crafts and souvenirs",
        places: ["Sadar Bazaar", "Main market", "Hotel shops"],
        items: ["Silver jewelry", "Leather goods", "Camel leather items", "Miniature paintings"],
        priceRange: "₹200 - ₹15,000",
        bestTime: "Tourist season"
      },
      {
        category: "Clothing & Textiles",
        description: "Traditional Rajasthani clothing and fabrics",
        places: ["Local markets", "Handloom stores"],
        items: ["Tie-dye dresses", "Bandhani sarees", "Rajasthani prints", "Embroidered jackets"],
        priceRange: "₹300 - ₹8,000",
        bestTime: "Winter season"
      },
      {
        category: "Musical Instruments",
        description: "Traditional Rajasthani musical instruments",
        places: ["Specialty shops", "Local markets"],
        items: ["Harmonium", "Tabla", "Ravanahatha", "Flutes"],
        priceRange: "₹500 - ₹20,000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Pushkar Bagh",
        type: "Luxury Resort",
        price: "₹8,000-20,000/night",
        rating: "4.7/5",
        facilities: ["Luxury tents", "Pool", "Spa", "Multi-cuisine restaurant"],
        location: "Pushkar Bye Pass Road",
        distance: "3 km from lake"
      },
      {
        name: "Inn Seventh Heaven",
        type: "Boutique Hotel",
        price: "₹4,000-12,000/night",
        rating: "4.5/5",
        facilities: ["Roof-top restaurant", "Lake view", "Garden", "AC rooms"],
        location: "Near Pushkar Lake",
        distance: "Walking distance to lake"
      },
      {
        name: "Hotel Pushkar Palace",
        type: "Heritage Hotel",
        price: "₹6,000-15,000/night",
        rating: "4.3/5",
        facilities: ["Heritage rooms", "Lake-facing", "Restaurant", "Cultural events"],
        location: "Lake side",
        distance: "On the lake front"
      },
      {
        name: "Zostel Pushkar",
        type: "Budget Hostel",
        price: "₹500-2,000/night",
        rating: "4.2/5",
        facilities: ["Dormitories", "Common kitchen", "Travel desk", "Roof-top cafe"],
        location: "Main market area",
        distance: "1 km from lake"
      },
      {
        name: "Brahma Temple Dharamshala",
        type: "Budget Pilgrim Accommodation",
        price: "₹200-800/night",
        rating: "3.8/5",
        facilities: ["Basic rooms", "Temple proximity", "Food service"],
        location: "Near Brahma Temple",
        distance: "Adjacent to temple"
      }
    ],
    temples: [
      {
        name: "Brahma Temple",
        description: "One of the very few temples dedicated to Lord Brahma in the world",
        timing: "6:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Early morning or evening",
        highlights: ["Main sanctum with four-faced Brahma", "Silver turtle floor", "Ancient architecture"]
      },
      {
        name: "Savitri Temple",
        description: "Temple dedicated to Goddess Savitri, wife of Lord Brahma",
        timing: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
        entryFee: "Free (Cable car: ₹150)",
        bestTime: "Sunrise or sunset",
        highlights: ["Hilltop location", "Panoramic view of Pushkar", "Cable car ride"]
      },
      {
        name: "Varaha Temple",
        description: "Ancient temple dedicated to Lord Varaha (boar incarnation of Vishnu)",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Intricate carvings", "Ancient architecture", "Peaceful atmosphere"]
      },
      {
        name: "Rangji Temple",
        description: "Beautiful temple dedicated to Lord Rangji (Vishnu)",
        timing: "7:00 AM - 7:00 PM",
        entryFee: "Free",
        bestTime: "Evening aarti time",
        highlights: ["South Indian architecture", "Colorful gopuram", "Mixed architectural styles"]
      },
      {
        name: "Pap Mochani Temple",
        description: "Temple believed to wash away sins of devotees",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Early morning",
        highlights: ["Religious significance", "Peaceful location", "Spiritual atmosphere"]
      }
    ],
    ghats: [
      {
        name: "Brahma Ghat",
        description: "Most important ghat where Lord Brahma performed yajna",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Early morning for bath",
        highlights: ["Main ceremonial ghat", "Evening aarti", "Religious ceremonies"]
      },
      {
        name: "Gau Ghat",
        description: "Ghat known for its peaceful atmosphere and scenic views",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Sunrise",
        highlights: ["Beautiful sunrise views", "Less crowded", "Photography"]
      },
      {
        name: "Varaha Ghat",
        description: "Ancient ghat near Varaha Temple",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Evening",
        highlights: ["Historical significance", "Temple proximity", "Evening rituals"]
      }
    ],
    camelFair: [
      {
        aspect: "Dates & Duration",
        details: "Held during Kartik Purnima (October-November)",
        duration: "7-14 days",
        highlights: ["Camel trading", "Cultural events", "Competitions"]
      },
      {
        aspect: "Main Events",
        details: "Cultural programs and competitions",
        events: ["Camel races", "Matka phod", "Longest moustache", "Bridal competition"],
        highlights: ["Traditional music", "Folk dances", "Camel decoration"]
      },
      {
        aspect: "Accommodation",
        details: "Special arrangements during fair",
        options: ["Luxury tents", "Budget camps", "Hotel packages"],
        highlights: ["Desert camping", "Cultural experiences", "Traditional food"]
      }
    ],
    precautions: [
      {
        category: "Religious Etiquette",
        tips: [
          "Remove shoes before entering temples",
          "Dress modestly - cover shoulders and knees",
          "Maintain silence in temple premises",
          "Follow temple rules and priest instructions"
        ]
      },
      {
        category: "Lake & Ghats",
        tips: [
          "Respect religious ceremonies at ghats",
          "Do not swim in the sacred lake",
          "Take blessings from priests for rituals",
          "Be cautious while walking on slippery ghats"
        ]
      },
      {
        category: "Shopping & Markets",
        tips: [
          "Bargain politely in local markets",
          "Check quality of silver and leather items",
          "Buy from authorized shops",
          "Keep valuables secure in crowded areas"
        ]
      },
      {
        category: "Food & Water",
        tips: [
          "Drink bottled water only",
          "Try street food from busy stalls",
          "Inform about food preferences (spice levels)",
          "Carry basic medicines for stomach upsets"
        ]
      },
      {
        category: "Photography",
        tips: [
          "Ask permission before photographing people",
          "No photography inside main temple sanctums",
          "Respect 'no photography' signs",
          "Be discreet during religious ceremonies"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === pushkarImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? pushkarImages.length - 1 : prevIndex - 1
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
                src={pushkarImages[currentImageIndex].url} 
                alt={pushkarImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{pushkarImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{pushkarImages[currentImageIndex].description}</p>
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
                {pushkarImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🕉️ About Pushkar - The Sacred Lake City</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {pushkarData.overview.content}
            </p>
            
            <div style={styles.legend}>
              <h3 style={{color: '#4A90E2', marginBottom: '10px'}}>🌟 Why Visit Pushkar?</h3>
              <p>Pushkar offers a unique blend of spirituality, culture, and natural beauty. As one of the five sacred dhams (pilgrimage sites) for Hindus, it provides a deeply spiritual experience. The town's colorful markets, ancient temples, sacred lake, and the world-famous Camel Fair make it a must-visit destination for spiritual seekers and cultural enthusiasts alike.</p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#4A90E2', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>November:</span> Pushkar Camel Fair - peak tourist season</p>
                <p><span style={styles.highlight}>Kartik Purnima:</span> Sacred bath in Pushkar Lake</p>
                <p><span style={styles.highlight}>April to September:</span> Hot weather, fewer crowds</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#4A90E2', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Jaipur Airport (150 km) - nearest airport</p>
                <p><span style={styles.highlight}>By Train:</span> Ajmer Railway Station (15 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Jaipur, Delhi, Udaipur</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis, Local buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Pushkar Experience</h3>
              <p>Share your spiritual journey and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Spiritual Experience</h4>
                  <p>How was your spiritual journey in Pushkar?</p>
                  {userRatings.overall ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.overall.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.overall.rating)}
                      </div>
                      {userRatings.overall.review && (
                        <p><strong>Experience:</strong> {userRatings.overall.review}</p>
                      )}
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'overall', type: 'Overall Experience' })}
                    >
                      Share Experience
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Brahma Temple Visit</h4>
                  <p>How amazing was your visit to Brahma Temple?</p>
                  {userRatings.brahmaTemple ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.brahmaTemple.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.brahmaTemple.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'brahmaTemple', type: 'Brahma Temple Visit' })}
                    >
                      Rate Temple Experience
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Lake & Ghats Experience</h4>
                  <p>How peaceful was your time at Pushkar Lake?</p>
                  {userRatings.lake ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.lake.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.lake.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'lake', type: 'Lake Experience' })}
                    >
                      Rate Lake Experience
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Rajasthani & Local Cuisine</h2>
            <div style={styles.grid}>
              {pushkarData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4A90E2', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Pushkar</h2>
            <div style={styles.grid}>
              {pushkarData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4A90E2', marginBottom: '15px'}}>{item.category}</h3>
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
              {pushkarData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4A90E2', marginBottom: '15px'}}>{hotel.name}</h3>
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

      case 'temples':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🛕 Temples of Pushkar</h2>
            
            <h3 style={{color: '#4A90E2', marginBottom: '20px', fontSize: '1.5rem'}}>Major Temples</h3>
            <div style={styles.grid}>
              {pushkarData.temples.map((temple, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4A90E2', marginBottom: '15px'}}>{temple.name}</h3>
                  <p><strong>Description:</strong> {temple.description}</p>
                  <p><strong>Timing:</strong> {temple.timing}</p>
                  <p><strong>Entry Fee:</strong> {temple.entryFee}</p>
                  <p><strong>Best Time to Visit:</strong> {temple.bestTime}</p>
                  <p><strong>Highlights:</strong> {temple.highlights.join(', ')}</p>
                </div>
              ))}
            </div>

            <h3 style={{color: '#4A90E2', marginBottom: '20px', marginTop: '40px', fontSize: '1.5rem'}}>Sacred Ghats</h3>
            <div style={styles.grid}>
              {pushkarData.ghats.map((ghat, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4A90E2', marginBottom: '15px'}}>{ghat.name}</h3>
                  <p><strong>Description:</strong> {ghat.description}</p>
                  <p><strong>Timing:</strong> {ghat.timing}</p>
                  <p><strong>Entry Fee:</strong> {ghat.entryFee}</p>
                  <p><strong>Best Time to Visit:</strong> {ghat.bestTime}</p>
                  <p><strong>Highlights:</strong> {ghat.highlights.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'camelFair':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🐫 Pushkar Camel Fair</h2>
            
            <div style={styles.legend}>
              <h3 style={{color: '#4A90E2', marginBottom: '10px'}}>About the Camel Fair</h3>
              <p>The Pushkar Camel Fair is one of the world's largest camel fairs and a vibrant cultural extravaganza. What began as a livestock trading fair has evolved into a major tourist attraction featuring camel races, cultural performances, and various competitions.</p>
            </div>

            <div style={styles.grid}>
              {pushkarData.camelFair.map((fair, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4A90E2', marginBottom: '15px'}}>{fair.aspect}</h3>
                  <p><strong>Details:</strong> {fair.details}</p>
                  {fair.duration && <p><strong>Duration:</strong> {fair.duration}</p>}
                  {fair.events && <p><strong>Events:</strong> {fair.events.join(', ')}</p>}
                  {fair.options && <p><strong>Options:</strong> {fair.options.join(', ')}</p>}
                  <p><strong>Highlights:</strong> {fair.highlights.join(', ')}</p>
                </div>
              ))}
            </div>

            <div style={{...styles.warning, marginTop: '30px'}}>
              <h4>📝 Planning Tips for Camel Fair</h4>
              <p><strong>Booking:</strong> Book accommodation 3-6 months in advance</p>
              <p><strong>Budget:</strong> Prices increase significantly during fair period</p>
              <p><strong>Clothing:</strong> Carry light woolens for chilly evenings</p>
              <p><strong>Photography:</strong> Get permission for photographing locals</p>
              <p><strong>Cash:</strong> Carry sufficient cash as ATMs may run out</p>
            </div>
          </div>
        );

      case 'precautions':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>⚠️ Travel Precautions & Tips</h2>
            <div style={styles.grid}>
              {pushkarData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#4A90E2', marginBottom: '15px'}}>{category.category}</h3>
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
            
            <div style={{...styles.warning, marginTop: '30px'}}>
              <h4>🚨 Emergency Contacts</h4>
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Women Helpline:</strong> 1091</p>
              <p><strong>Pushkar Police Station:</strong> 0145-2772040</p>
              <p><strong>Local Hospital:</strong> 0145-2772085 | <strong>Tourist Information:</strong> 0145-2772040</p>
              <p><strong>Ajmer Hospital (Nearest):</strong> 0145-2620250</p>
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
            placeholder="Share your spiritual experience (optional)..."
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
        <h1 style={styles.title}>🕉️ Pushkar</h1>
        <p style={styles.subtitle}>The Sacred Lake City - Where Spirituality Meets Culture</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'shopping', 'hotels', 'temples', 'camelFair', 'precautions'].map(tab => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = '#7B68EE';
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
            {tab === 'temples' && '🛕 Temples'}
            {tab === 'camelFair' && '🐫 Camel Fair'}
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
        marginTop: '60px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Pushkar Travel Guide. Experience the Spirituality of Sacred Lake City!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Preserve the Sanctity - Respect Local Traditions and Religious Sentiments
        </p>
      </div>
    </div>
  );
};

export default PushkarTravelGuide;
