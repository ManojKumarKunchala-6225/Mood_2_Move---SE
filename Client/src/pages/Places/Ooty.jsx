import React, { useState } from 'react';

const OotyTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Ooty Images for Carousel
  const ootyImages = [
    {
      url: "https://images.unsplash.com/photo-1711553186754-0cfbdfe38b8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b290eSUyMGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Ooty Lake",
      description: "Beautiful artificial lake with boating facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym90YW5pY2FsJTIwZ2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Botanical Gardens",
      description: "Well-maintained gardens with exotic plants"
    },
    {
      url: "https://images.unsplash.com/photo-1655895348625-5d9d7a366350?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RG9kZGFiZXR0YSUyMFBlYWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Doddabetta Peak",
      description: "Highest point in the Nilgiri mountains"
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
      background: 'linear-gradient(135deg, #228B22, #32CD32)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(34, 139, 34, 0.3)'
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
      backgroundColor: '#228B22',
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
      color: '#228B22',
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
      border: '2px solid #98FB98',
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
      backgroundColor: '#228B22',
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
      borderLeft: '3px solid #32CD32'
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
      color: '#228B22',
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
      backgroundColor: '#32CD32',
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
      backgroundColor: '#228B22',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(34, 139, 34, 0.4)'
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
      color: '#228B22',
      borderBottom: '3px solid #32CD32',
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
      backgroundColor: '#f0fff0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #98FB98',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(34, 139, 34, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#228B22',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#32CD32',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Ooty Travel Data
  const ootyData = {
    overview: {
      title: "Ooty - Queen of Hill Stations",
      content: `Ooty, officially known as Udhagamandalam, is a beautiful hill station in the Nilgiri Hills of Tamil Nadu. Situated at an altitude of 2,240 meters above sea level, it's fondly called the 'Queen of Hill Stations' for its stunning natural beauty, pleasant climate, and colonial charm. Founded by the British in the early 19th century as a summer retreat, Ooty is famous for its tea plantations, botanical gardens, and the Nilgiri Mountain Railway - a UNESCO World Heritage Site. The town offers breathtaking views of the Nilgiri mountains and is surrounded by dense forests, making it a perfect destination for nature lovers and honeymooners.`
    },
    famousFoods: [
      {
        name: "Ooty Varkey",
        description: "Traditional crispy biscuit-like snack",
        place: "Local bakeries, Commercial Road",
        price: "₹100-300",
        special: "Ooty's signature bakery product"
      },
      {
        name: "Homemade Chocolates",
        description: "Fresh chocolates made with local ingredients",
        place: "Chocolate shops, Charring Cross",
        price: "₹200-500",
        special: "Ooty's famous homemade chocolates"
      },
      {
        name: "Fresh Tea",
        description: "Freshly brewed tea from local plantations",
        place: "Tea stalls, Plantation visits",
        price: "₹20-50",
        special: "Direct from Nilgiri tea gardens"
      },
      {
        name: "Avial",
        description: "Mixed vegetable curry in coconut gravy",
        place: "Local restaurants, Hotels",
        price: "₹120-200",
        special: "Traditional Kerala dish popular in Ooty"
      },
      {
        name: "Fresh Fruits",
        description: "Fresh strawberries, plums and other hill fruits",
        place: "Local markets, Roadside stalls",
        price: "₹100-300/kg",
        special: "Fresh from Ooty farms"
      }
    ],
    shopping: [
      {
        category: "Tea & Coffee",
        description: "Fresh tea leaves and coffee beans from local plantations",
        places: ["Tea shops", "Government sales outlet", "Local markets"],
        items: ["Nilgiri Tea", "Instant Coffee", "Green Tea", "Tea Bags"],
        priceRange: "₹200 - ₹2000",
        bestTime: "Year-round"
      },
      {
        category: "Homemade Chocolates",
        description: "Fresh chocolates made in local chocolate factories",
        places: ["Charring Cross", "Commercial Road", "Chocolate factories"],
        items: ["Dark Chocolate", "Milk Chocolate", "Fruit & Nut", "Assorted Chocolates"],
        priceRange: "₹300 - ₹1500",
        bestTime: "Year-round"
      },
      {
        category: "Spices & Essential Oils",
        description: "Fresh spices and aromatic oils from Nilgiris",
        places: ["Local markets", "Spice shops", "Government emporium"],
        items: ["Cardamom", "Cinnamon", "Eucalyptus Oil", "Sandalwood Oil"],
        priceRange: "₹150 - ₹3000",
        bestTime: "Year-round"
      },
      {
        category: "Handicrafts & Souvenirs",
        description: "Local crafts and souvenir items",
        places: ["Government emporium", "Local markets", "Craft shops"],
        items: ["Wooden crafts", "Woolen shawls", "Keychains", "Photo frames"],
        priceRange: "₹100 - ₹5000",
        bestTime: "Tourist season"
      }
    ],
    hotels: [
      {
        name: "Taj Savoy Hotel",
        type: "Luxury Heritage Hotel",
        price: "₹8,000-25,000/night",
        rating: "4.7/5",
        facilities: ["Garden", "Spa", "Restaurant", "Bar", "Heritage Building"],
        location: "Ooty Town",
        distance: "Walking distance to Ooty Lake"
      },
      {
        name: "Fortune Resort Sullivan Court",
        type: "Luxury Resort",
        price: "₹6,000-18,000/night",
        rating: "4.5/5",
        facilities: ["Mountain View", "Restaurant", "Spa", "Indoor Games"],
        location: "Sullivan Court Road",
        distance: "2 km from railway station"
      },
      {
        name: "Sterling Ooty Elk Hill",
        type: "Resort",
        price: "₹5,000-12,000/night",
        rating: "4.3/5",
        facilities: ["Mountain View", "Restaurant", "Activities", "Parking"],
        location: "Elk Hill",
        distance: "3 km from town"
      },
      {
        name: "Hotel Lakeview",
        type: "Mid-range Hotel",
        price: "₹3,000-8,000/night",
        rating: "4.0/5",
        facilities: ["Lake View", "Restaurant", "Travel Desk", "Parking"],
        location: "Ooty Lake Road",
        distance: "Opposite Ooty Lake"
      },
      {
        name: "Youth Hostel Ooty",
        type: "Budget Accommodation",
        price: "₹500-1,500/night",
        rating: "3.8/5",
        facilities: ["Dormitory", "Common Kitchen", "Basic Amenities"],
        location: "Charring Cross",
        distance: "Central location"
      }
    ],
    places: [
      {
        name: "Ooty Lake",
        description: "Beautiful artificial lake with boating and amusement park",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "₹20 per person, Boating extra",
        bestTime: "Morning or evening",
        highlights: ["Boating", "Amusement Park", "Photography", "Horse Riding"]
      },
      {
        name: "Botanical Gardens",
        description: "Government botanical gardens with exotic plants",
        timing: "8:00 AM - 6:30 PM",
        entryFee: "₹30 for adults",
        bestTime: "Morning hours",
        highlights: ["Flower Show", "Fossil Tree", "Italian Garden", "Toda Hut"]
      },
      {
        name: "Doddabetta Peak",
        description: "Highest point in Tamil Nadu with telescope house",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "₹10 per person",
        bestTime: "Clear morning",
        highlights: ["Panoramic Views", "Telescope House", "Photography", "Nature Walk"]
      },
      {
        name: "Nilgiri Mountain Railway",
        description: "UNESCO World Heritage toy train ride",
        timing: "7:00 AM - 6:00 PM",
        entryFee: "Varies by distance",
        bestTime: "Daytime",
        highlights: ["Heritage Train", "Scenic Views", "Photography", "Tunnel Experience"]
      },
      {
        name: "Rose Garden",
        description: "Largest rose garden in India with thousands of varieties",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "₹30 for adults",
        bestTime: "Flowering season",
        highlights: ["Rose Varieties", "Photography", "Gardening", "Floral Display"]
      },
      {
        name: "Pykara Lake & Falls",
        description: "Beautiful lake and waterfalls surrounded by forests",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "Free, Boating charges extra",
        bestTime: "Monsoon season",
        highlights: ["Waterfalls", "Boating", "Picnic", "Nature Walk"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry warm clothes throughout the year",
          "Raincoat or umbrella is essential",
          "Comfortable walking shoes for sightseeing",
          "Sunglasses and sunscreen for daytime"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Book toy train tickets in advance",
          "Hire local taxis for sightseeing",
          "Walking is best for exploring the town",
          "Check road conditions during monsoon"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Acclimatize to high altitude gradually",
          "Carry basic medicines and first-aid",
          "Stay hydrated at high altitude",
          "Be cautious on mountain roads"
        ]
      },
      {
        category: "Shopping & Food",
        tips: [
          "Buy tea from government outlets for authenticity",
          "Check expiry dates on homemade chocolates",
          "Try local fruits from trusted vendors",
          "Bargain at local markets"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Respect local culture and traditions",
          "Keep environment clean",
          "Carry cash as some places don't accept cards",
          "Book accommodation in advance during peak season"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === ootyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? ootyImages.length - 1 : prevIndex - 1
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
                src={ootyImages[currentImageIndex].url} 
                alt={ootyImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{ootyImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{ootyImages[currentImageIndex].description}</p>
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
                {ootyImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Ooty - Queen of Hill Stations</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {ootyData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#228B22', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Pleasant summer weather</p>
                <p><span style={styles.highlight}>September to November:</span> Clear skies, perfect views</p>
                <p><span style={styles.highlight}>December to February:</span> Cold weather, misty mornings</p>
                <p><span style={styles.highlight}>Monsoon (Jul-Aug):</span> Lush greenery, heavy rains</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#228B22', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Coimbatore Airport (88 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Mettupalayam (46 km) for toy train</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Bangalore, Coimbatore, Mysore</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Buses, Toy Train, Auto-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Ooty Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Hill Station Experience</h4>
                  <p>How was your visit to Ooty?</p>
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
                  <h4>Natural Beauty</h4>
                  <p>How were the gardens, lakes and mountain views?</p>
                  {userRatings.nature ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.nature.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.nature.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'nature', type: 'Natural Beauty' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Toy Train Experience</h4>
                  <p>How was your Nilgiri Mountain Railway journey?</p>
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
                      onClick={() => handleRateClick({ name: 'toytrain', type: 'Toy Train' })}
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
              {ootyData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Ooty</h2>
            <div style={styles.grid}>
              {ootyData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{item.category}</h3>
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
              {ootyData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {ootyData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{place.name}</h3>
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
              {ootyData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police:</strong> 0423-244 3977 | <strong>Hospital:</strong> 0423-244 3950</p>
              <p><strong>Tourist Information Center:</strong> 0423-244 3977</p>
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
        <h1 style={styles.title}>🏔️ Ooty</h1>
        <p style={styles.subtitle}>Queen of Hill Stations - Nilgiri Paradise</p>
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
                e.target.style.backgroundColor = '#98FB98';
                e.target.style.color = '#228B22';
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
        <p>© 2024 Ooty Travel Guide. Experience the Queen of Hill Stations!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the Nilgiri Mountains
        </p>
      </div>
    </div>
  );
};

export default OotyTravelGuide;