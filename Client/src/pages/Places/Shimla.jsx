import React, { useState } from 'react';

const ShimlaTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Shimla Images for Carousel
  const shimlaImages = [
    {
      url: "https://media.istockphoto.com/id/1138999470/photo/shimla-mall-road-in-evening.webp?a=1&b=1&s=612x612&w=0&k=20&c=KmDCGYmgmtXQyHAwjVlNG40AbVrIydYSkLYqBPcsdiQ=",
      title: "Shimla Mall Road",
      description: "The main shopping street of Shimla with colonial architecture"
    },
    {
      url: "https://media.istockphoto.com/id/1301336259/photo/muree-pakistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xv6URMY8_LAIuKSq2UfH4FuN3tEGaRQXauP43ivBBsA=",
      title: "Kufri Hill Station",
      description: "Beautiful hill station near Shimla with panoramic views"
    },
    {
      url: "https://media.istockphoto.com/id/1225623485/photo/beautiful-view-of-after-snowfall-in-shimla-railway-station.webp?a=1&b=1&s=612x612&w=0&k=20&c=kd5DqPFz3bbTjD7ISr6bEqYO6Tur5wUpl2DnAjZ4AuE=",
      title: "Toy Train Journey",
      description: "UNESCO World Heritage Kalka-Shimla toy train"
    },
    {
      url: "https://media.istockphoto.com/id/1367667619/photo/village-in-mountain-range.webp?a=1&b=1&s=612x612&w=0&k=20&c=O-gKwlkOqCQtiQh1cALr32Uxjmh6ecY-RuK5Acg0-Uc=",
      title: "Winter in Shimla",
      description: "Snow-covered landscapes during winter months"
    },
    {
      url: "https://media.istockphoto.com/id/468899408/photo/dhingu-mandir-sanjauli-shimla.webp?a=1&b=1&s=612x612&w=0&k=20&c=kEq0xjYIRGgX95KA7hh_WLiVnK9pdeDxqbAii1Uqii4=",
      title: "The Ridge Shimla",
      description: "Large open space in the heart of Shimla with scenic views"
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
      marginBottom: '50px',
      marginTop: '40px',
      padding: '40px',
      background: 'linear-gradient(135deg, #2E8B57, #3CB371)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(46, 139, 87, 0.3)'
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
      backgroundColor: '#2E8B57',
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
      color: '#2E8B57',
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
      border: '2px solid #3CB371',
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
      backgroundColor: '#2E8B57',
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
      borderLeft: '3px solid #3CB371'
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
      color: '#2E8B57',
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
      backgroundColor: '#3CB371',
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
      backgroundColor: '#2E8B57',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(46, 139, 87, 0.4)'
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
      color: '#2E8B57',
      borderBottom: '3px solid #3CB371',
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
      backgroundColor: '#f0fff0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #3CB371',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(46, 139, 87, 0.1)',
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
      color: '#2E8B57',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#3CB371',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Shimla Travel Data
  const shimlaData = {
    overview: {
      title: "Shimla - Queen of Hill Stations",
      content: `Shimla, the capital city of Himachal Pradesh, is one of India's most popular hill stations, often called the 'Queen of Hills'. Nestled in the foothills of the Himalayas at an altitude of 2,205 meters, Shimla was the summer capital of British India. The city is famous for its colonial architecture, scenic beauty, pleasant climate, and the UNESCO World Heritage Kalka-Shimla toy train. With its charming Mall Road, historic buildings, churches, and panoramic views of snow-capped mountains, Shimla offers a perfect blend of natural beauty and colonial heritage. The city serves as a gateway to other popular destinations like Kufri, Chail, and Narkanda.`
    },
    famousFoods: [
      {
        name: "Himachali Dham",
        description: "Traditional festive meal with multiple local dishes",
        place: "Local restaurants, Traditional eateries",
        price: "₹300-600",
        special: "Complete traditional Himachali experience"
      },
      {
        name: "Sidu",
        description: "Traditional bread stuffed with walnuts and local spices",
        place: "Local bakeries, Traditional restaurants",
        price: "₹80-150",
        special: "Himachali specialty bread"
      },
      {
        name: "Chana Madra",
        description: "Chickpeas cooked in yogurt-based gravy",
        place: "Local dhabas, Restaurants",
        price: "₹120-200",
        special: "Traditional Himachali curry"
      },
      {
        name: "Babru",
        description: "Himachali version of kachori stuffed with black gram",
        place: "Street vendors, Local cafes",
        price: "₹40-80",
        special: "Popular local snack"
      },
      {
        name: "Aktori",
        description: "Buckwheat leaf pancakes - local delicacy",
        place: "Traditional eateries, Festive occasions",
        price: "₹100-180",
        special: "Seasonal specialty"
      }
    ],
    shopping: [
      {
        category: "Handicrafts & Woolens",
        description: "Traditional Himachali handicrafts and woolen items",
        places: ["Lakkar Bazaar", "Mall Road", "Lower Bazaar"],
        items: ["Wooden crafts", "Shawls", "Woolen caps", "Hand-knitted sweaters"],
        priceRange: "₹200 - ₹15,000",
        bestTime: "Year-round"
      },
      {
        category: "Local Jams & Preserves",
        description: "Homemade jams, squashes and fruit preserves",
        places: ["Mall Road shops", "Local markets"],
        items: ["Apricot jam", "Plum preserve", "Apple products", "Local honey"],
        priceRange: "₹150 - ₹800",
        bestTime: "Summer season"
      },
      {
        category: "Himachali Shawls",
        description: "Traditional handwoven shawls and stoles",
        places: ["Specialty stores", "Government emporium"],
        items: ["Pashmina shawls", "Kullu shawls", "Stoles", "Wraps"],
        priceRange: "₹1,000 - ₹20,000",
        bestTime: "Winter season"
      },
      {
        category: "Local Artifacts",
        description: "Traditional crafts and local artwork",
        places: ["Lakkar Bazaar", "Craft centers"],
        items: ["Wooden toys", "Metal crafts", "Pottery", "Paintings"],
        priceRange: "₹100 - ₹8,000",
        bestTime: "Tourist season"
      }
    ],
    hotels: [
      {
        name: "Oberoi Cecil",
        type: "5-Star Luxury Hotel",
        price: "₹8,000-25,000/night",
        rating: "4.6/5",
        facilities: ["Fine dining", "Spa", "Indoor pool", "Business Center"],
        location: "Chaura Maidan",
        distance: "1 km from Mall Road"
      },
      {
        name: "Radisson Hotel Shimla",
        type: "4-Star Business Hotel",
        price: "₹5,000-15,000/night",
        rating: "4.4/5",
        facilities: ["Restaurant", "Bar", "Conference rooms", "Parking"],
        location: "Mall Road",
        distance: "Walking distance to attractions"
      },
      {
        name: "Hotel Woodville Palace",
        type: "Heritage Hotel",
        price: "₹4,000-12,000/night",
        rating: "4.2/5",
        facilities: ["Heritage rooms", "Restaurant", "Gardens", "Travel desk"],
        location: "Raj Bhavan Road",
        distance: "2 km from Mall Road"
      },
      {
        name: "Honeymoon Inn",
        type: "Mid-range Hotel",
        price: "₹2,500-7,000/night",
        rating: "4.0/5",
        facilities: ["Restaurant", "Travel Desk", "Parking", "AC Rooms"],
        location: "Mall Road",
        distance: "Central location"
      },
      {
        name: "Budget Hotels & Guest Houses",
        type: "Economy Accommodation",
        price: "₹1,000-3,000/night",
        rating: "3.5/5",
        facilities: ["Basic Rooms", "Attached Bath", "Food Available"],
        location: "Lower Bazaar area",
        distance: "Various distances"
      }
    ],
    places: [
      {
        name: "The Ridge",
        description: "Large open space in the heart of Shimla with panoramic views",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Morning and Evening",
        highlights: ["Scenic views", "Christ Church", "Shopping", "Photography"]
      },
      {
        name: "Mall Road",
        description: "Main shopping street with colonial architecture and shops",
        timing: "9:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Evening",
        highlights: ["Shopping", "Restaurants", "Colonial buildings", "Walking"]
      },
      {
        name: "Kufri",
        description: "Popular hill station near Shimla with adventure activities",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Free (Activities extra)",
        bestTime: "Winter for snow",
        highlights: ["Skiing", "Horse riding", "Snow views", "Adventure park"]
      },
      {
        name: "Jakhoo Temple",
        description: "Ancient Hanuman temple at highest point of Shimla",
        timing: "7:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Tall Hanuman statue", "Panoramic views", "Cable car", "Religious significance"]
      },
      {
        name: "Christ Church",
        description: "Second oldest church in North India with neo-gothic architecture",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Stained glass", "Colonial architecture", "Peaceful ambiance", "Historical"]
      },
      {
        name: "Kalka-Shimla Toy Train",
        description: "UNESCO World Heritage narrow-gauge railway journey",
        timing: "Various timings",
        entryFee: "₹300-800",
        bestTime: "Daytime",
        highlights: ["Scenic journey", "102 tunnels", "864 bridges", "Mountain views"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry woolens throughout the year (even in summer)",
          "Waterproof jackets during monsoon (July-September)",
          "Layered clothing for changing weather conditions",
          "Comfortable walking shoes with good grip"
        ]
      },
      {
        category: "Travel & Transportation",
        tips: [
          "Book toy train tickets in advance during peak season",
          "Avoid driving in crowded Mall Road area",
          "Use local taxis for hill station visits",
          "Carry cash as some places don't accept cards"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines for altitude sickness",
          "Stay hydrated to prevent dehydration",
          "Be cautious while walking on steep roads",
          "Keep emergency contacts saved"
        ]
      },
      {
        category: "Shopping & Local Etiquette",
        tips: [
          "Bargain politely in local markets",
          "Respect local customs and traditions",
          "Buy authentic handicrafts from government emporiums",
          "Carry reusable bags for shopping"
        ]
      },
      {
        category: "Adventure Activities",
        tips: [
          "Use authorized operators for trekking and skiing",
          "Check weather conditions before planning activities",
          "Carry proper equipment for winter sports",
          "Follow guide instructions during adventure activities"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === shimlaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? shimlaImages.length - 1 : prevIndex - 1
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
                src={shimlaImages[currentImageIndex].url} 
                alt={shimlaImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{shimlaImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{shimlaImages[currentImageIndex].description}</p>
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
                {shimlaImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Shimla - Queen of Hill Stations</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {shimlaData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Pleasant summer weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>July to September:</span> Monsoon, lush greenery but occasional rainfall</p>
                <p><span style={styles.highlight}>October to November:</span> Autumn, clear skies and comfortable weather</p>
                <p><span style={styles.highlight}>December to February:</span> Winter, snow activities and chilly weather</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Shimla Airport (Jubbarhatti) - 22 km from city</p>
                <p><span style={styles.highlight}>By Train:</span> Kalka-Shimla Toy Train (UNESCO Heritage)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Delhi, Chandigarh, Manali</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Local buses, Ropeway</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Shimla Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Hill Station Experience</h4>
                  <p>How was your visit to Shimla?</p>
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
                  <h4>Mall Road & Shopping Experience</h4>
                  <p>How was the shopping and colonial architecture?</p>
                  {userRatings.mallroad ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.mallroad.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.mallroad.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'mallroad', type: 'Mall Road Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Toy Train Journey</h4>
                  <p>How was the UNESCO Heritage train experience?</p>
                  {userRatings.toytrain ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.toytrain.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.toytrain.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'toytrain', type: 'Toy Train Journey' })}
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
              {shimlaData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Shimla</h2>
            <div style={styles.grid}>
              {shimlaData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{item.category}</h3>
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
              {shimlaData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {shimlaData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{place.name}</h3>
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
              {shimlaData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police (Shimla):</strong> 0177-2802101 | <strong>Hospital:</strong> 0177-2803073</p>
              <p><strong>Tourist Information Center:</strong> 0177-2652561</p>
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
        <h1 style={styles.title}>🏔️ Shimla Travel Guide</h1>
        <p style={styles.subtitle}>Queen of Hill Stations - Colonial Charm & Natural Beauty</p>
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
                e.target.style.backgroundColor = '#3CB371';
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
        marginTop: '60px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Shimla Travel Guide. Experience the Queen of Hill Stations!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the beautiful hills of Himachal Pradesh
        </p>
      </div>
    </div>
  );
};

export default ShimlaTravelGuide;
