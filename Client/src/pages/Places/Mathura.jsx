import React, { useState } from 'react';

const MathuraTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Mathura Images for Carousel
  const mathuraImages = [
    {
      url: "https://images.unsplash.com/photo-1644254881308-70dca01a049d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aHVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Shri Krishna Janmasthan Temple",
      description: "Birthplace of Lord Krishna"
    },
    {
      url: "https://images.unsplash.com/photo-1668160747331-4275e35f0713?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHdhcmthZGhpc2glMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Dwarkadhish Temple",
      description: "Beautiful temple dedicated to Lord Krishna"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQNs10KGVf1Ep0PTzl4mqKSTTih-KhJgxJw&s",
      title: "Vishram Ghat",
      description: "Sacred bathing ghat on Yamuna River"
    },
    
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff8e1',
      minHeight: '100vh'
    },

   
 
  // ... rest of your styles
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #ff6f00, #ff8f00)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(255, 111, 0, 0.3)'
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
      backgroundColor: '#ff6f00',
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
      color: '#ff6f00',
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
      backgroundColor: '#fff3e0',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #ffe0b2',
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
      backgroundColor: '#ff6f00',
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
      color: '#ff6f00',
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
      backgroundColor: '#ff6f00',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(255, 111, 0, 0.4)'
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
      color: '#ff6f00',
      borderBottom: '3px solid #ff8f00',
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
      backgroundColor: '#fff3e0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #ffe0b2',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(255, 111, 0, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#ff6f00',
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

  // Mathura Travel Data
  const mathuraData = {
    overview: {
      title: "Mathura - Birthplace of Lord Krishna",
      content: `Mathura is one of the seven sacred cities in Hinduism and the birthplace of Lord Krishna. Located on the banks of Yamuna River in Uttar Pradesh, it's a major pilgrimage site with numerous ancient temples, ghats, and spiritual significance. The city attracts millions of devotees annually and is an important part of the Krishna Janmashtami celebrations.`
    },
    famousFoods: [
      {
        name: "Mathura Peda",
        description: "Famous sweet made from khoya and sugar",
        place: "Brijwasi Sweet Shop, Local sweet shops",
        price: "₹200-500 per kg",
        special: "Signature sweet of Mathura"
      },
      {
        name: "Kachori Sabzi",
        description: "Spicy kachori served with potato curry",
        place: "Local street vendors, Breakfast joints",
        price: "₹40-80",
        special: "Popular breakfast item"
      },
      {
        name: "Chaat",
        description: "Various street food chaat items",
        place: "Street vendors, Local markets",
        price: "₹30-60",
        special: "Evening snack favorite"
      },
      {
        name: "Lassi",
        description: "Sweet yogurt-based drink",
        place: "Local shops, Temple areas",
        price: "₹30-50",
        special: "Refreshing drink"
      }
    ],
    shopping: [
      {
        category: "Religious Items",
        description: "Spiritual items and temple souvenirs",
        places: ["Temple shops", "Holigate Market", "Dress Circle Market"],
        items: ["Krishna idols", "Religious books", "Rudraksha"," Incense sticks"],
        priceRange: "₹50 - ₹5000",
        bestTime: "Festival seasons"
      },
      {
        category: "Sweets & Prasad",
        description: "Famous Mathura sweets and temple prasad",
        places: ["Brijwasi", "Gopal Mandir", "Local sweet shops"],
        items: ["Peda", "Laddoo", "Burfi", "Other sweets"],
        priceRange: "₹200 - ₹1000",
        bestTime: "Year-round"
      },
      {
        category: "Handicrafts",
        description: "Traditional crafts and artwork",
        places: ["Government Emporium", "Local markets"],
        items: ["Brass items", "Wooden crafts", "Paintings", "Souvenirs"],
        priceRange: "₹100 - ₹5000",
        bestTime: "Tourist season"
      },
      {
        category: "Clothes & Accessories",
        description: "Traditional Indian clothing",
        places: ["Holigate Market", "Local shops"],
        items: ["Kurtas", "Sarees", "Stoles", "Religious dresses"],
        priceRange: "₹300 - ₹5000",
        bestTime: "Festival time"
      }
    ],
    hotels: [
      {
        name: "Brijwasi Royal",
        type: "Luxury Hotel",
        price: "₹4000-10000/night",
        rating: "4.3/5",
        facilities: ["Restaurant", "Parking", "Room Service", "Travel Desk"],
        location: "Near Krishna Janmasthan",
        distance: "1 km from main temple"
      },
      {
        name: "Goverdhan Palace",
        type: "Premium Hotel",
        price: "₹2500-6000/night",
        rating: "4.1/5",
        facilities: ["Restaurant", "Garden", "Parking", "Conference Hall"],
        location: "Vrindavan Road",
        distance: "3 km from city center"
      },
      {
        name: "Hotel Basera",
        type: "Mid-range Hotel",
        price: "₹1500-4000/night",
        rating: "3.9/5",
        facilities: ["Basic Rooms", "Restaurant", "Parking", "Hot Water"],
        location: "Holigate",
        distance: "Walking distance to temples"
      },
      {
        name: "ISKCON Guest House",
        type: "Budget Spiritual",
        price: "₹500-1500/night",
        rating: "4.0/5",
        facilities: ["Simple Rooms", "Prasadam", "Temple Access", "Spiritual Atmosphere"],
        location: "Vrindavan",
        distance: "10 km from Mathura"
      }
    ],
    places: [
      {
        name: "Shri Krishna Janmasthan Temple",
        description: "Birthplace of Lord Krishna with ancient temple complex",
        timing: "5:00 AM - 12:00 PM, 4:00 PM - 9:30 PM",
        entryFee: "Free",
        bestTime: "Morning aarti or evening",
        highlights: ["Birth chamber", "Ancient ruins", "Aarti ceremony", "Spiritual atmosphere"]
      },
      {
        name: "Dwarkadhish Temple",
        description: "Beautiful temple dedicated to Lord Krishna",
        timing: "6:30 AM - 12:00 PM, 4:00 PM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Morning or evening aarti",
        highlights: ["Architecture", "Aarti", "Spiritual talks", "Prasadam"]
      },
      {
        name: "Vishram Ghat",
        description: "Sacred bathing ghat where Krishna rested after killing Kansa",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Morning for bath, evening for aarti",
        highlights: ["Yamuna River", "Evening aarti", "Bathing", "Boat ride"]
      },
      {
        name: "Government Museum",
        description: "Archaeological museum with ancient artifacts",
        timing: "10:30 AM - 4:30 PM (Closed on Mondays)",
        entryFee: "₹10 for Indians",
        bestTime: "Daytime",
        highlights: ["Ancient sculptures", "Terracotta items", "Coins", "Archaeological finds"]
      },
      {
        name: "Kans Qila",
        description: "Ancient fort associated with King Kansa",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning hours",
        highlights: ["Historical significance", "River view", "Ancient architecture"]
      }
    ],
    precautions: [
      {
        category: "Temple Etiquette",
        tips: [
          "Remove footwear before entering temples",
          "Dress modestly - cover shoulders and knees",
          "Maintain silence in temple premises",
          "Follow photography restrictions"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Drink bottled or filtered water",
          "Be cautious with street food",
          "Carry basic medicines",
          "Stay hydrated in summer"
        ]
      },
      {
        category: "Transport",
        tips: [
          "Use auto-rickshaws for short distances",
          "Negotiate fares before riding",
          "Hire taxis for Vrindavan trips",
          "Park vehicles in designated areas"
        ]
      },
      {
        category: "Shopping",
        tips: [
          "Bargain at local markets",
          "Buy sweets from reputed shops",
          "Check quality of religious items",
          "Keep purchase bills"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Visit during weekdays to avoid crowds",
          "Carry cash for small purchases",
          "Respect local customs and traditions",
          "Learn basic Hindi phrases"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === mathuraImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? mathuraImages.length - 1 : prevIndex - 1
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
                src={mathuraImages[currentImageIndex].url} 
                alt={mathuraImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{mathuraImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{mathuraImages[currentImageIndex].description}</p>
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
                {mathuraImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🕌 About Mathura - Birthplace of Lord Krishna</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {mathuraData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#ff6f00', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather</p>
                <p><span style={styles.highlight}>Janmashtami:</span> Major festival (August-September)</p>
                <p><span style={styles.highlight}>Holi:</span> Color festival (March)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#ff6f00', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Delhi Airport (150 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Mathura Junction (well connected)</p>
                <p><span style={styles.highlight}>By Road:</span> Excellent connectivity from Delhi, Agra</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Mathura Experience</h3>
              <p>Share your spiritual experience and help other pilgrims</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Spiritual Experience</h4>
                  <p>How was your pilgrimage to Mathura?</p>
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
                  <h4>Temple Atmosphere</h4>
                  <p>How was the spiritual atmosphere in temples?</p>
                  {userRatings.temple ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.temple.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.temple.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'temple', type: 'Temple Atmosphere' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Cultural Heritage</h4>
                  <p>How was the experience of ancient heritage?</p>
                  {userRatings.heritage ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.heritage.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.heritage.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'heritage', type: 'Cultural Heritage' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Prasadam</h2>
            <div style={styles.grid}>
              {mathuraData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6f00', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Mathura</h2>
            <div style={styles.grid}>
              {mathuraData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6f00', marginBottom: '15px'}}>{item.category}</h3>
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
              {mathuraData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6f00', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🕌 Famous Places to Visit</h2>
            <div style={styles.grid}>
              {mathuraData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6f00', marginBottom: '15px'}}>{place.name}</h3>
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
              {mathuraData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6f00', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police:</strong> 0565-2505100 | <strong>Hospital:</strong> 0565-2505222</p>
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
        <h1 style={styles.title}>🕌 Mathura</h1>
        <p style={styles.subtitle}>Birthplace of Lord Krishna - Spiritual Capital</p>
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
                e.target.style.backgroundColor = '#ffe0b2';
                e.target.style.color = '#ff6f00';
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
            {tab === 'places' && '🕌 Places'}
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

export default MathuraTravelGuide;