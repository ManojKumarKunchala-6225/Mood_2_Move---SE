import React, { useState } from 'react';

const MussoorieTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Mussoorie Images for Carousel
  const mussoorieImages = [
    {
      url: "https://images.unsplash.com/photo-1580723209134-48a2fd4b5712?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2VtcHR5JTIwRmFsbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Kempty Falls",
      description: "Beautiful waterfall and picnic spot"
    },
    {
      url: "https://images.unsplash.com/photo-1610858976366-7299c0ddee75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FtZWwncyUyMEJhY2slMjBSb2FkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Camel's Back Road",
      description: "Scenic walking trail with mountain views"
    },
    {
      url: "https://images.unsplash.com/photo-1638487246406-83a6dbdd3f36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3VuJTIwaGlsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Gun Hill",
      description: "Second highest point with panoramic views"
    },
   
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #8B4513, #A0522D)',
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
      backgroundColor: '#8B4513',
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
      backgroundColor: '#f5f5dc',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #d2b48c',
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
      backgroundColor: '#fffaf0',
      borderRadius: '5px',
      borderLeft: '3px solid #A0522D'
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
      backgroundColor: '#A0522D',
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
      minHeight: '500px'
    },
    section: {
      marginBottom: '30px'
    },
    sectionTitle: {
      color: '#8B4513',
      borderBottom: '3px solid #A0522D',
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
      backgroundColor: '#f5f5dc',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #d2b48c',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 69, 19, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#8B4513',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#A0522D',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Mussoorie Travel Data
  const mussoorieData = {
    overview: {
      title: "Mussoorie - Queen of Hills",
      content: `Mussoorie is a beautiful hill station in the Dehradun district of Uttarakhand, situated at an altitude of 2,005 meters in the Garhwal Himalayan range. Known as the 'Queen of Hills', it offers panoramic views of the Himalayan peaks and the Doon Valley. Founded by the British in 1823, Mussoorie has been a popular retreat from the summer heat of the plains. The town gets its name from the Mansur shrub found in abundance here.`
    },
    famousFoods: [
      {
        name: "Aloo Ke Gutke",
        description: "Spicy roasted potatoes with local spices",
        place: "Local eateries, Street stalls",
        price: "₹50-100",
        special: "Garhwali specialty"
      },
      {
        name: "Bhatt Ki Churkani",
        description: "Black soybean curry with rice",
        place: "Traditional restaurants",
        price: "₹120-200",
        special: "Local Garhwali dish"
      },
      {
        name: "Momos",
        description: "Steamed dumplings with various fillings",
        place: "Mall Road stalls, Tibetan restaurants",
        price: "₹60-120",
        special: "Tibetan influence"
      },
      {
        name: "Garhwali Thali",
        description: "Complete meal with local delicacies",
        place: "Traditional restaurants",
        price: "₹200-350",
        special: "Complete local experience"
      },
      {
        name: "Fresh Fruit Wines",
        description: "Local fruit wines from nearby vineyards",
        place: "Authorized wine shops",
        price: "₹400-800",
        special: "Local produce"
      }
    ],
    shopping: [
      {
        category: "Woolen Items",
        description: "Warm clothes and accessories",
        places: ["Mall Road", "Library Bazaar", "Kulri Bazaar"],
        items: ["Shawls", "Sweaters", "Caps", "Gloves"],
        priceRange: "₹300 - ₹5000",
        bestTime: "Winter season"
      },
      {
        category: "Local Handicrafts",
        description: "Traditional Uttarakhand crafts",
        places: ["Government emporium", "Local markets"],
        items: ["Wooden crafts", "Woolen rugs", "Candles", "Souvenirs"],
        priceRange: "₹200 - ₹3000",
        bestTime: "Tourist season"
      },
      {
        category: "Maple Products",
        description: "Products made from maple tree",
        places: ["Mall Road shops", "Specialty stores"],
        items: ["Maple syrup", "Maple candy", "Maple wood items"],
        priceRange: "₹150 - ₹2000",
        bestTime: "Year-round"
      },
      {
        category: "Books & Antiques",
        description: "Rare books and antique items",
        places: ["Cambridge Book Depot", "Mall Road"],
        items: ["Rare books", "Antique maps", "Collectibles"],
        priceRange: "₹100 - ₹10000",
        bestTime: "Weekends"
      }
    ],
    hotels: [
      {
        name: "JW Marriott Mussoorie",
        type: "Luxury Resort",
        price: "₹10,000-25,000/night",
        rating: "4.7/5",
        facilities: ["Mountain View", "Spa", "Pool", "Fine Dining"],
        location: "Walnut Grove",
        distance: "5 km from Mall Road"
      },
      {
        name: "Jaypee Residency Manor",
        type: "Heritage Hotel",
        price: "₹6,000-15,000/night",
        rating: "4.4/5",
        facilities: ["Restaurant", "Bar", "Garden", "Parking"],
        location: "Barlowganj",
        distance: "3 km from town"
      },
      {
        name: "Hotel Padmini Nivas",
        type: "Mid-range Hotel",
        price: "₹3,000-8,000/night",
        rating: "4.1/5",
        facilities: ["Restaurant", "Travel Desk", "Room Service"],
        location: "Mall Road",
        distance: "Walking distance to attractions"
      },
      {
        name: "Honeymoon Inn",
        type: "Budget Hotel",
        price: "₹1,500-4,000/night",
        rating: "3.9/5",
        facilities: ["Basic Amenities", "Hot Water", "TV"],
        location: "Library Bazaar",
        distance: "Central location"
      }
    ],
    places: [
      {
        name: "Kempty Falls",
        description: "Magnificent waterfall with bathing area",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "₹50 per person",
        bestTime: "Morning hours",
        highlights: ["Waterfall", "Bathing", "Photography", "Cable car"]
      },
      {
        name: "Gun Hill",
        description: "Second highest point with cable car access",
        timing: "10:00 AM - 6:00 PM",
        entryFee: "₹200 for cable car (round trip)",
        bestTime: "Sunset time",
        highlights: ["Panoramic views", "Cable car ride", "Sunset", "Photography"]
      },
      {
        name: "Camel's Back Road",
        description: "3 km walking trail with mountain views",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Early morning or evening",
        highlights: ["Walking trail", "Horse riding", "Sunrise/Sunset", "Photography"]
      },
      {
        name: "Lal Tibba",
        description: "Highest point with telescope views",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹30 per person",
        bestTime: "Clear morning",
        highlights: ["Telescope views", "Himalayan peaks", "Photography"]
      },
      {
        name: "Company Garden",
        description: "Beautiful garden with amusement activities",
        timing: "9:00 AM - 7:00 PM",
        entryFee: "₹25 for adults",
        bestTime: "Daytime",
        highlights: ["Gardens", "Boating", "Amusement rides", "Photography"]
      },
      {
        name: "Mussoorie Lake",
        description: "Artificial lake with boating facilities",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "₹20 entry, Boating extra",
        bestTime: "Evening",
        highlights: ["Boating", "Picnic spot", "Viewpoints"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry warm clothes throughout the year",
          "Raincoat or umbrella is essential",
          "Comfortable walking shoes for hills",
          "Sunglasses and sunscreen for daytime"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Hire local taxis for sightseeing",
          "Walking is best for Mall Road area",
          "Check road conditions during monsoon",
          "Book vehicles in advance during peak season"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines for altitude",
          "Stay hydrated at high altitude",
          "Be cautious on steep paths and viewpoints",
          "Avoid venturing out alone at night"
        ]
      },
      {
        category: "Shopping & Food",
        tips: [
          "Bargain at local markets",
          "Try local Garhwali cuisine",
          "Check quality of woolen items",
          "Carry cash as some places don't accept cards"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Respect local culture and traditions",
          "Keep environment clean",
          "Carry power bank for mobile",
          "Learn basic Hindi phrases"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === mussoorieImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? mussoorieImages.length - 1 : prevIndex - 1
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
                src={mussoorieImages[currentImageIndex].url} 
                alt={mussoorieImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{mussoorieImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{mussoorieImages[currentImageIndex].description}</p>
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
                {mussoorieImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Mussoorie - Queen of Hills</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {mussoorieData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Pleasant summer weather</p>
                <p><span style={styles.highlight}>September to November:</span> Clear skies, perfect views</p>
                <p><span style={styles.highlight}>December to February:</span> Snow experience, very cold</p>
                <p><span style={styles.highlight}>Monsoon (Jul-Aug):</span> Lush greenery, occasional landslides</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Jolly Grant Airport, Dehradun (60 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Dehradun Railway Station (35 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Delhi, Haridwar, Rishikesh</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Shared jeeps, Ropeway</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Mussoorie Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Hill Station Experience</h4>
                  <p>How was your visit to Mussoorie?</p>
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
              {mussoorieData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Mussoorie</h2>
            <div style={styles.grid}>
              {mussoorieData.shopping.map((item, index) => (
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
              {mussoorieData.hotels.map((hotel, index) => (
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
            <h2 style={styles.sectionTitle}>🏞️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {mussoorieData.places.map((place, index) => (
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
              {mussoorieData.precautions.map((category, index) => (
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
              <p><strong>Local Police:</strong> 0135-263 0253 | <strong>Hospital:</strong> 0135-263 2513</p>
              <p><strong>Tourist Information Center:</strong> 0135-263 2864</p>
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
        <h1 style={styles.title}>🏔️ Mussoorie</h1>
        <p style={styles.subtitle}>Queen of Hills - Himalayan Paradise</p>
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
                e.target.style.backgroundColor = '#d2b48c';
                e.target.style.color = '#8B4513';
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
        <p>© 2024 Mussoorie Travel Guide. Experience the Queen of Hills!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the Himalayas
        </p>
      </div>
    </div>
  );
};

export default MussoorieTravelGuide;