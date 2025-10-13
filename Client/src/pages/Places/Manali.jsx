import React, { useState } from 'react';

const ManaliTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Manali Images for Carousel
  const manaliImages = [
    {
      url: "https://images.unsplash.com/photo-1735453251488-7a2175e4a716?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U25vdy1DYXBwZWQlMjBNb3VudGFpbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Snow-Capped Mountains",
      description: "Beautiful Himalayan peaks surrounding Manali"
    },
    {
      url: "https://images.unsplash.com/photo-1713063968789-adf139c4a1eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U29sYW5nJTIwVmFsbGV5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Solang Valley",
      description: "Adventure sports and stunning valley views"
    },
    {
      url: "https://images.unsplash.com/photo-1655470062196-c37e923fc4c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFkaW1iYSUyMFRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Hadimba Temple",
      description: "Ancient temple amidst deodar forests"
    },
   
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#e6f2ff',
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
      backgroundColor: '#f0f8ff',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #cce7ff',
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
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #cce7ff',
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
      color: '#388e3c',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Manali Travel Data
  const manaliData = {
    overview: {
      title: "Manali - Valley of Gods",
      content: `Manali is a beautiful hill station nestled in the mountains of Himachal Pradesh. Situated at an altitude of 2,050 meters, it's surrounded by towering peaks, lush valleys, and gushing rivers. Known as the 'Valley of Gods', Manali offers breathtaking landscapes, adventure sports, ancient temples, and a perfect blend of natural beauty and modern amenities.`
    },
    famousFoods: [
      {
        name: "Siddu",
        description: "Traditional steamed bread stuffed with nuts and local herbs",
        place: "Local dhabas, Traditional restaurants",
        price: "₹80-150",
        special: "Himachali specialty"
      },
      {
        name: "Trout Fish",
        description: "Fresh river trout prepared in local spices",
        place: "Johnson Cafe, River-side restaurants",
        price: "₹300-600",
        special: "Fresh from Beas River"
      },
      {
        name: "Babru",
        description: "Himachali version of kachori stuffed with black gram",
        place: "Local eateries, Street vendors",
        price: "₹40-80",
        special: "Breakfast favorite"
      },
      {
        name: "Aktori",
        description: "Buckwheat leaf cake traditionally made during festivals",
        place: "Local homes during festivals",
        price: "₹100-200",
        special: "Festival special"
      }
    ],
    shopping: [
      {
        category: "Woolen Clothes",
        description: "Handmade woolen garments and accessories",
        places: ["Mall Road", "Old Manali Market", "Local shops"],
        items: ["Pullovers", "Shawls", "Caps", "Gloves", "Socks"],
        priceRange: "₹500 - ₹5000",
        bestTime: "Winter season"
      },
      {
        category: "Himachali Crafts",
        description: "Traditional handicrafts and wooden items",
        places: ["Government Emporium", "Local markets", "Craft shops"],
        items: ["Wooden artifacts", "Handicrafts", "Local paintings", "Souvenirs"],
        priceRange: "₹200 - ₹10000",
        bestTime: "Year-round"
      },
      {
        category: "Dry Fruits",
        description: "Fresh dry fruits from local orchards",
        places: ["Local markets", "Roadside stalls", "Shops near Mall Road"],
        items: ["Walnuts", "Almonds", "Apricots", "Raisins"],
        priceRange: "₹300 - ₹1500 per kg",
        bestTime: "Autumn season"
      },
      {
        category: "Local Honey",
        description: "Pure honey from Himalayan flowers",
        places: ["Local shops", "Government stores", "Roadside vendors"],
        items: ["Multiflora Honey", "Wild Honey", "Forest Honey"],
        priceRange: "₹400 - ₹1200 per kg",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "The Himalayan Resort & Spa",
        type: "Luxury Resort",
        price: "₹8000-25000/night",
        rating: "4.7/5",
        facilities: ["Heated Pool", "Spa", "Multiple Restaurants", "Adventure Sports"],
        location: "Prini",
        distance: "3 km from Manali"
      },
      {
        name: "Snow Valley Resorts",
        type: "Premium Resort",
        price: "₹5000-15000/night",
        rating: "4.4/5",
        facilities: ["Mountain View", "Restaurant", "Bonfire", "Parking"],
        location: "Mall Road",
        distance: "1 km from city center"
      },
      {
        name: "Hotel Johnson",
        type: "Mid-range Hotel",
        price: "₹3000-8000/night",
        rating: "4.2/5",
        facilities: ["Restaurant", "Travel Desk", "Hot Water", "Room Service"],
        location: "Circuit House Road",
        distance: "Walking distance to Mall Road"
      },
      {
        name: "Zostel Manali",
        type: "Budget Hostel",
        price: "₹500-2000/night",
        rating: "4.1/5",
        facilities: ["Dormitory", "Common Kitchen", "Bonfire", "Travel Assistance"],
        location: "Old Manali",
        distance: "2 km from main market"
      }
    ],
    places: [
      {
        name: "Solang Valley",
        description: "Adventure sports paradise with skiing, paragliding and stunning views",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Free, Activities extra",
        bestTime: "Winter for snow, Summer for adventure sports",
        highlights: ["Skiing", "Paragliding", "Zorbing", "Cable Car", "Photography"]
      },
      {
        name: "Hadimba Temple",
        description: "Ancient cave temple dedicated to Hidimba Devi amidst deodar forests",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning hours",
        highlights: ["Wooden Architecture", "Forest Setting", "Photography", "Peaceful Atmosphere"]
      },
      {
        name: "Rohtang Pass",
        description: "High mountain pass at 3,978 meters with breathtaking views",
        timing: "6:00 AM - 4:00 PM",
        entryFee: "Environmental fee applies",
        bestTime: "May to November",
        highlights: ["Snow Views", "Photography", "Adventure", "Mountain Scenery"]
      },
      {
        name: "Old Manali",
        description: "Charming old town with cafes, shops and traditional houses",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Evening for cafes",
        highlights: ["Cafes", "Shopping", "Local Culture", "Riverside Walks"]
      },
      {
        name: "Jogini Waterfall",
        description: "Beautiful waterfall near Vashisht village with trekking trail",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Monsoon season",
        highlights: ["Trekking", "Waterfall", "Nature Walk", "Photography"]
      }
    ],
    precautions: [
      {
        category: "Altitude & Health",
        tips: [
          "Acclimatize for 24 hours upon arrival",
          "Carry medicines for altitude sickness",
          "Stay hydrated and avoid alcohol initially",
          "Carry warm clothes even in summer"
        ]
      },
      {
        category: "Adventure Sports",
        tips: [
          "Use only licensed operators for adventure activities",
          "Check weather conditions before planning",
          "Follow instructor guidelines strictly",
          "Carry proper gear and equipment"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Carry multiple layers of clothing",
          "Waterproof jackets essential during monsoon",
          "Comfortable walking shoes for trekking",
          "Sunglasses and sunscreen for high altitude"
        ]
      },
      {
        category: "Transport",
        tips: [
          "Check road conditions before traveling to high passes",
          "Hire experienced local drivers for mountain roads",
          "Carry chains for vehicles during snow season",
          "Book taxis in advance during peak season"
        ]
      },
      {
        category: "General Safety",
        tips: [
          "Avoid traveling alone in remote areas",
          "Keep emergency contacts handy",
          "Respect local customs and traditions",
          "Carry cash as ATMs may be limited in remote areas"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === manaliImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? manaliImages.length - 1 : prevIndex - 1
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
                src={manaliImages[currentImageIndex].url} 
                alt={manaliImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{manaliImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{manaliImages[currentImageIndex].description}</p>
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
                {manaliImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Manali - Valley of Gods</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {manaliData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to June:</span> Pleasant weather</p>
                <p><span style={styles.highlight}>Winter (Dec-Feb):</span> Snow season</p>
                <p><span style={styles.highlight}>Monsoon (Jul-Sept):</span> Lush greenery</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Bhuntar Airport (50 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Joginder Nagar (165 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Excellent connectivity from Delhi</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Manali Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Hill Station Experience</h4>
                  <p>How was your visit to Manali?</p>
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
                  <h4>Adventure Sports</h4>
                  <p>How were the adventure activities?</p>
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
                      onClick={() => handleRateClick({ name: 'adventure', type: 'Adventure Sports' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Natural Beauty</h4>
                  <p>How were the mountain views and landscapes?</p>
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
              </div>
            </div>
          </div>
        );

      case 'food':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Local Cuisine</h2>
            <div style={styles.grid}>
              {manaliData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Manali</h2>
            <div style={styles.grid}>
              {manaliData.shopping.map((item, index) => (
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
              {manaliData.hotels.map((hotel, index) => (
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
              {manaliData.places.map((place, index) => (
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
              {manaliData.precautions.map((category, index) => (
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
              <p><strong>Local Police:</strong> 01902-252112 | <strong>Hospital:</strong> 01902-252383</p>
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
        <h1 style={styles.title}>🏔️ Manali</h1>
        <p style={styles.subtitle}>Valley of Gods - Adventure & Nature Paradise</p>
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
                e.target.style.backgroundColor = '#cce7ff';
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
    </div>
  );
};

export default ManaliTravelGuide;