// KasauliTravelGuide.jsx
import React, { useState } from 'react';

const KasauliTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');

  // Kasauli Images for Carousel
  const kasauliImages = [
    {
      url: "https://images.unsplash.com/photo-1637204329780-e82358c50ee3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2FzYXVsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Kasauli Hills",
      description: "Serene hill station in the Shivalik range"
    },
    {
      url: "https://images.unsplash.com/photo-1715964644963-ec9668b880ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FzYXVsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Christ Church",
      description: "Historic colonial-era church"
    },
    {
      url: "https://images.unsplash.com/photo-1634541576884-359e3db2a675?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthc2F1bGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      title: "Monkey Point",
      description: "Highest point in Kasauli with panoramic views"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #2d5016, #4a7c59)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(45, 80, 22, 0.3)'
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
      backgroundColor: '#4a7c59',
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
      color: '#2d5016',
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
      backgroundColor: '#f0f8f0',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #d4e8d4',
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
      backgroundColor: '#4a7c59',
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
      color: '#2d5016',
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
    // Existing styles
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
      backgroundColor: '#2d5016',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(45, 80, 22, 0.4)'
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
      color: '#2d5016',
      borderBottom: '3px solid #4a7c59',
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
      backgroundColor: '#f0f8f0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #d4e8d4',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(45, 80, 22, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#2d5016',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#27ae60',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#c0392b',
      fontWeight: 'bold'
    },
    rating: {
      color: '#ffa500',
      fontWeight: 'bold'
    }
  };

  // Kasauli Travel Data
  const kasauliData = {
    overview: {
      title: "Kasauli - The Serene Hill Station",
      content: `Kasauli is a charming hill station in the Solan district of Himachal Pradesh, nestled in the Shivalik range. Known for its colonial-era architecture, serene environment, and pleasant climate, Kasauli offers breathtaking views of the surrounding hills and valleys. This quiet retreat is perfect for nature lovers and those seeking peace away from city life.`
    },
    famousFoods: [
      {
        name: "Himachali Dham",
        description: "Traditional festive meal with multiple courses",
        place: "Local dhabas, Hotel Pine View",
        price: "₹300-600",
        rating: "4.5/5"
      },
      {
        name: "Siddu",
        description: "Steamed wheat bread stuffed with sweet or savory fillings",
        place: "Kasauli Club, Local eateries",
        price: "₹80-150",
        rating: "4.3/5"
      },
      {
        name: "Trout Fish",
        description: "Fresh river trout prepared in local spices",
        place: "Kasauli Regency, Ros Common Restaurant",
        price: "₹350-600",
        rating: "4.6/5"
      },
      {
        name: "Madra",
        description: "Chickpea curry cooked in yogurt base",
        place: "Himachal Tourism Restaurant, Local homes",
        price: "₹200-350",
        rating: "4.2/5"
      },
      {
        name: "Apple Pie",
        description: "Fresh apple pie with locally grown apples",
        place: "Kasauli Bakeries, German Bakery",
        price: "₹120-200",
        rating: "4.4/5"
      }
    ],
    shopping: [
      {
        category: "Handicrafts",
        description: "Wooden crafts, woolen items, and local artifacts",
        places: ["Kasauli Market", "Mall Road", "Local craft shops"],
        priceRange: "₹200 - ₹5000",
        bestTime: "March-November"
      },
      {
        category: "Woolens",
        description: "Hand-knitted sweaters, shawls, and caps",
        places: ["Local woolen shops", "Tibetan market", "Mall Road"],
        priceRange: "₹500 - ₹3000",
        bestTime: "September-April"
      },
      {
        category: "Preserves & Jams",
        description: "Homemade jams, pickles, and fruit preserves",
        places: ["Local bakeries", "Kasauli preserves", "Mall Road shops"],
        priceRange: "₹150 - ₹800",
        bestTime: "Year-round"
      },
      {
        category: "Tibetan Crafts",
        description: "Prayer flags, singing bowls, and Buddhist artifacts",
        places: ["Tibetan market", "Local souvenir shops"],
        priceRange: "₹100 - ₹2000",
        bestTime: "Summer season"
      }
    ],
    hotels: [
      {
        name: "Kasauli Resort",
        type: "Luxury Resort",
        price: "₹8000-20000/night",
        rating: "4.6/5",
        facilities: ["Mountain View", "Spa", "Restaurant", "Adventure Activities"],
        location: "Kasauli Hills",
        distance: "2 km from Mall Road"
      },
      {
        name: "Hotel Pine View",
        type: "Heritage Property",
        price: "₹5000-12000/night",
        rating: "4.4/5",
        facilities: ["Garden", "Restaurant", "Library", "Vintage Decor"],
        location: "Near Christ Church",
        distance: "Walking distance to main market"
      },
      {
        name: "Kasauli Regency",
        type: "Mid-range",
        price: "₹3000-8000/night",
        rating: "4.2/5",
        facilities: ["Restaurant", "Travel Desk", "Parking", "Room Service"],
        location: "Mall Road",
        distance: "Central location"
      },
      {
        name: "HPTDC Kasauli",
        type: "Budget Government",
        price: "₹2000-5000/night",
        rating: "4.0/5",
        facilities: ["Basic Amenities", "Canteen", "Parking", "Tour Assistance"],
        location: "Kasauli Heights",
        distance: "1.5 km from bus stand"
      },
      {
        name: "Kasauli Homestay",
        type: "Budget Homestay",
        price: "₹1500-3500/night",
        rating: "4.3/5",
        facilities: ["Home-cooked Food", "Garden", "Local Experience"],
        location: "Residential area",
        distance: "2 km from center"
      }
    ],
    places: [
      {
        name: "Monkey Point",
        description: "Highest point in Kasauli offering panoramic views of Sutlej River",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "Free",
        bestTime: "Early morning for clear views",
        highlights: ["Hanuman Temple", "360-degree views", "Photography spot", "Sunrise viewing"]
      },
      {
        name: "Christ Church",
        description: "Historic Anglican church built in 1853 with beautiful stained glass",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning for peaceful visit",
        highlights: ["Colonial architecture", "Stained glass", "Peaceful atmosphere", "Historical significance"]
      },
      {
        name: "Sunset Point",
        description: "Popular viewpoint for spectacular sunset over the mountains",
        timing: "Open 24 hours",
        entryFee: "Free",
        bestTime: "Evening before sunset",
        highlights: ["Sunset views", "Photography", "Romantic spot", "Mountain scenery"]
      },
      {
        name: "Gilbert Trail",
        description: "Beautiful walking trail through dense forests and pine trees",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning for bird watching",
        highlights: ["Nature walk", "Bird watching", "Photography", "Peaceful environment"]
      },
      {
        name: "Kasauli Brewery",
        description: "One of the oldest distilleries in Asia established in 1820",
        timing: "10:00 AM - 4:00 PM (Weekdays only)",
        entryFee: "₹50 per person",
        bestTime: "Weekday mornings",
        highlights: ["Historical tour", "Manufacturing process", "Tasting session", "Colonial history"]
      },
      {
        name: "Mall Road",
        description: "Main shopping street with colonial buildings and local shops",
        timing: "9:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Evening for shopping and stroll",
        highlights: ["Shopping", "Local cuisine", "Colonial architecture", "People watching"]
      }
    ],
    precautions: [
      {
        category: "Mountain Safety",
        tips: [
          "Wear comfortable shoes for walking on hilly terrain",
          "Carry water and light snacks during treks",
          "Be cautious of monkeys at Monkey Point",
          "Avoid walking alone on isolated trails after dark"
        ]
      },
      {
        category: "Health",
        tips: [
          "Carry basic medicines for altitude sickness",
          "Stay hydrated in the mountain climate",
          "Use sunscreen even on cloudy days",
          "Carry warm clothes as temperatures drop suddenly"
        ]
      },
      {
        category: "Transport",
        tips: [
          "Pre-book taxis during peak season",
          "Walking is the best way to explore the town",
          "Check road conditions during monsoon",
          "Use local buses for budget travel"
        ]
      },
      {
        category: "Weather",
        tips: [
          "Carry woolens even in summer (nights can be cold)",
          "Check weather forecast before planning outdoor activities",
          "Carry raincoat during monsoon (July-September)",
          "Dress in layers for changing temperatures"
        ]
      },
      {
        category: "Local Guidelines",
        tips: [
          "Respect local customs and traditions",
          "Maintain silence in residential areas",
          "Do not feed or provoke monkeys",
          "Follow designated walking trails only"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === kasauliImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? kasauliImages.length - 1 : prevIndex - 1
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

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div style={styles.section}>
            {/* Image Carousel */}
            <div style={styles.carousel}>
              <img 
                src={kasauliImages[currentImageIndex].url} 
                alt={kasauliImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{kasauliImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{kasauliImages[currentImageIndex].description}</p>
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
                {kasauliImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Kasauli - Hill Station Paradise</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {kasauliData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2d5016', marginBottom: '15px'}}>🌤️ Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Pleasant summer weather</p>
                <p><span style={styles.highlight}>September to November:</span> Clear skies and festivals</p>
                <p><span style={styles.highlight}>December to February:</span> Snow experience in nearby areas</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2d5016', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Road:</span> Well connected via NH5</p>
                <p><span style={styles.highlight}>Nearest Railway:</span> Kalka (35 km)</p>
                <p><span style={styles.highlight}>Nearest Airport:</span> Chandigarh (60 km)</p>
              </div>

              <div style={styles.card}>
                <h3 style={{color: '#2d5016', marginBottom: '15px'}}>🎯 Must Experience</h3>
                <p>• Sunrise from Monkey Point</p>
                <p>• Walk on Gilbert Trail</p>
                <p>• Sunset at Sunset Point</p>
                <p>• Local Himachali cuisine</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Kasauli Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Hill Station Experience</h4>
                  <p>How was your stay in Kasauli?</p>
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
                  <h4>Natural Beauty & Views</h4>
                  <p>How spectacular were the mountain views?</p>
                  {userRatings.views ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.views.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.views.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'views', type: 'Natural Beauty & Views' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Peace & Serenity</h4>
                  <p>How peaceful was your experience?</p>
                  {userRatings.peace ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.peace.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.peace.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'peace', type: 'Peace & Serenity' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods of Kasauli</h2>
            <div style={styles.grid}>
              {kasauliData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Best Place:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
                  <p><strong>Rating:</strong> <span style={styles.rating}>{food.rating}</span></p>
                  
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Kasauli</h2>
            <div style={styles.grid}>
              {kasauliData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{item.category}</h3>
                  <p>{item.description}</p>
                  <p><strong>Best Places:</strong> {item.places.join(', ')}</p>
                  <p><strong>Price Range:</strong> <span style={styles.price}>{item.priceRange}</span></p>
                  <p><strong>Best Time to Buy:</strong> {item.bestTime}</p>
                  
                  {/* Rating for shopping categories */}
                  <div style={{marginTop: '15px'}}>
                    {userRatings[item.category] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[item.category].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[item.category].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: item.category, type: item.category })}
                      >
                        Rate Shopping Experience
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'hotels':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏨 Hotels & Stays in Kasauli</h2>
            <div style={styles.grid}>
              {kasauliData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{hotel.name}</h3>
                  <p><strong>Type:</strong> {hotel.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{hotel.price}</span></p>
                  <p><strong>Rating:</strong> <span style={styles.rating}>{hotel.rating}</span></p>
                  <p><strong>Location:</strong> {hotel.location}</p>
                  <p><strong>Distance:</strong> {hotel.distance}</p>
                  <p><strong>Facilities:</strong> {hotel.facilities.join(', ')}</p>
                  
                  {/* Rating for hotels */}
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
                        Rate this Hotel
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
            <h2 style={styles.sectionTitle}>🏛️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {kasauliData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{place.name}</h3>
                  <p>{place.description}</p>
                  <p><strong>Timing:</strong> <span style={styles.timing}>{place.timing}</span></p>
                  <p><strong>Entry Fee:</strong> {place.entryFee}</p>
                  <p><strong>Best Time to Visit:</strong> {place.bestTime}</p>
                  <p><strong>Highlights:</strong> {place.highlights.join(', ')}</p>
                  
                  {/* Rating for places */}
                  <div style={{marginTop: '15px'}}>
                    {userRatings[place.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[place.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[place.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: place.name, type: place.name })}
                      >
                        Rate this Place
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
            <h2 style={styles.sectionTitle}>⚠️ Travel Precautions & Tips</h2>
            <div style={styles.grid}>
              {kasauliData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{category.category}</h3>
                  <ul style={{paddingLeft: '20px'}}>
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} style={{marginBottom: '8px', lineHeight: '1.4'}}>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={styles.warning}>
              <h4>⚠️ Emergency Contacts:</h4>
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Women Helpline:</strong> 1091</p>
              <p><strong>Kasauli Police Station:</strong> +91-1792-272002</p>
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
        <h1 style={styles.title}>🏔️ Kasauli - Hill Station Retreat</h1>
        <p style={styles.subtitle}>Complete Travel Guide to the Serene Mountain Getaway</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'shopping', 'hotels', 'places', 'precautions'].map(tab => (
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
            {tab === 'hotels' && '🏨 Hotels'}
            {tab === 'places' && '🏛️ Places'}
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

export default KasauliTravelGuide;