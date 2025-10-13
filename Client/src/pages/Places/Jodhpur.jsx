// JodhpurTravelGuide.jsx
import React, { useState } from 'react';

const JodhpurTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');

  // Jodhpur Images for Carousel
  const jodhpurImages = [
    {
      url: "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Mehrangarh Fort",
      description: "The magnificent fortress overlooking the Blue City"
    },
    {
      url: "https://images.unsplash.com/photo-1545321945-7edd9bf1331a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Blue City",
      description: "Historic blue-painted houses of Jodhpur"
    },
    {
      url: "https://images.unsplash.com/photo-1504194947363-2f14d9e0e445?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
      title: "Jaswant Thada",
      description: "Beautiful marble memorial"
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
      background: 'linear-gradient(135deg, #2c3e50, #3498db)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(44, 62, 80, 0.3)'
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
      backgroundColor: '#3498db',
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
      color: '#2c3e50',
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
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #e9ecef',
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
      color: '#f39c12'
    },
    rateButton: {
      backgroundColor: '#3498db',
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
      borderLeft: '3px solid #27ae60'
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
      color: '#2c3e50',
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
      backgroundColor: '#27ae60',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    cancelButton: {
      backgroundColor: '#e74c3c',
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
      backgroundColor: '#2c3e50',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(44, 62, 80, 0.4)'
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
      color: '#2c3e50',
      borderBottom: '3px solid #3498db',
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
      backgroundColor: '#f8f9fa',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #e9ecef',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(44, 62, 80, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#2c3e50',
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
    }
  };

  // Jodhpur Travel Data
  const jodhpurData = {
    overview: {
      title: "Jodhpur - The Blue City & Sun City",
      content: `Jodhpur, the second largest city in Rajasthan, is famously known as the 'Blue City' for the blue-painted houses around the Mehrangarh Fort. It's also called the 'Sun City' for the bright, sunny weather it enjoys all year. Founded in 1459 by Rao Jodha, the city is known for its magnificent forts, palaces, temples, and vibrant culture.`
    },
    famousFoods: [
      {
        name: "Makhaniya Lassi",
        description: "Creamy yogurt drink topped with malai and dry fruits",
        place: "Shri Mishrilal Hotel, Janta Sweet Home",
        price: "₹60-120",
        rating: "4.6/5"
      },
      {
        name: "Pyaaz Kachori",
        description: "Flaky pastry filled with spiced onion mixture",
        place: "Jodhpur Sweets, Shri Shankar Kachori Wala",
        price: "₹25-40",
        rating: "4.5/5"
      },
      {
        name: "Mawa Kachori",
        description: "Sweet deep-fried pastry filled with mawa",
        place: "Janta Sweet Home, Rawat Mishthan Bhandar",
        price: "₹40-60",
        rating: "4.4/5"
      },
      {
        name: "Laal Maas",
        description: "Spicy mutton curry with Mathania red chilies",
        place: "Gypsy Restaurant, Indique",
        price: "₹350-600",
        rating: "4.3/5"
      },
      {
        name: "Gatte ki Sabzi",
        description: "Gram flour dumplings in spicy yogurt gravy",
        place: "On the Rocks, Kalinga Restaurant",
        price: "₹180-280",
        rating: "4.2/5"
      }
    ],
    shopping: [
      {
        category: "Antique Furniture",
        description: "Traditional Rajasthani wooden furniture and artifacts",
        places: ["Sojati Gate", "Nai Sarak", "Clock Tower Market"],
        priceRange: "₹2000 - ₹100000",
        bestTime: "October-March"
      },
      {
        category: "Silver Jewelry",
        description: "Traditional Kundan and Meenakari jewelry",
        places: ["Jewelers in Sardar Market", "Mochi Street", "Tripolia Bazar"],
        priceRange: "₹500 - ₹50000",
        bestTime: "Year-round"
      },
      {
        category: "Leather Products",
        description: "Camel leather footwear, bags, and accessories",
        places: ["Mochi Street", "Clock Tower Market", "Local artisans"],
        priceRange: "₹300 - ₹15000",
        bestTime: "Winter season"
      },
      {
        category: "Spices",
        description: "Traditional Rajasthani spices and Mathania red chilies",
        places: ["Clock Tower Market", "Nai Sarak", "Local spice shops"],
        priceRange: "₹100 - ₹2000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Umaid Bhawan Palace",
        type: "Luxury Heritage",
        price: "₹30000-100000/night",
        rating: "4.9/5",
        facilities: ["Palace Rooms", "Spa", "Museum", "Fine Dining"],
        location: "Circuit House Road",
        distance: "5 km from city center"
      },
      {
        name: "Raas Jodhpur",
        type: "Boutique Heritage",
        price: "₹15000-35000/night",
        rating: "4.7/5",
        facilities: ["Pool", "Restaurant", "Spa", "Haveli Architecture"],
        location: "Tunvarji ka Jhalra",
        distance: "1 km from Mehrangarh Fort"
      },
      {
        name: "The Ummed Jodhpur",
        type: "Business Luxury",
        price: "₹8000-20000/night",
        rating: "4.4/5",
        facilities: ["Multiple Pools", "Spa", "Conference Hall", "Restaurants"],
        location: "Ratanada",
        distance: "4 km from Railway Station"
      },
      {
        name: "Hotel Haveli",
        type: "Mid-range Heritage",
        price: "₹4000-10000/night",
        rating: "4.3/5",
        facilities: ["Rooftop Restaurant", "Traditional Decor", "Travel Desk"],
        location: "Near Clock Tower",
        distance: "Walking distance to markets"
      },
      {
        name: "Zostel Jodhpur",
        type: "Hostel/Budget",
        price: "₹500-2000/night",
        rating: "4.2/5",
        facilities: ["Dormitories", "Common Kitchen", "Rooftop", "Travel Desk"],
        location: "Jalori Gate",
        distance: "2 km from Mehrangarh Fort"
      }
    ],
    places: [
      {
        name: "Mehrangarh Fort",
        description: "One of India's largest forts with magnificent architecture",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹100 for Indians, ₹600 for foreigners",
        bestTime: "Early morning or late afternoon",
        highlights: ["Palace interiors", "Museum", "Cannons", "Panoramic views"]
      },
      {
        name: "Jaswant Thada",
        description: "Beautiful marble memorial built in memory of Maharaja Jaswant Singh II",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹30 for Indians, ₹50 for foreigners",
        bestTime: "Morning for photography",
        highlights: ["Marble architecture", "Peaceful gardens", "Lake views"]
      },
      {
        name: "Umaid Bhawan Palace",
        description: "One of the world's largest private residences, part museum, part hotel",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹100 for Indians, ₹250 for foreigners",
        bestTime: "Morning hours",
        highlights: ["Art Deco architecture", "Museum", "Royal garage", "Gardens"]
      },
      {
        name: "Clock Tower & Sardar Market",
        description: "Vibrant local market around historic clock tower",
        timing: "9:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Evening for shopping",
        highlights: ["Local crafts", "Spices", "Street food", "Traditional atmosphere"]
      },
      {
        name: "Mandore Gardens",
        description: "Historic gardens with royal cenotaphs and temples",
        timing: "8:00 AM - 8:00 PM",
        entryFee: "₹20 for adults",
        bestTime: "Evening for light show",
        highlights: ["Cenotaphs", "Temple complex", "Museum", "Rock garden"]
      },
      {
        name: "Balsamand Lake & Palace",
        description: "Scenic artificial lake with heritage palace hotel",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Free (palace access for guests)",
        bestTime: "Sunset",
        highlights: ["Lake views", "Gardens", "Bird watching", "Peaceful atmosphere"]
      }
    ],
    precautions: [
      {
        category: "General Safety",
        tips: [
          "Be cautious of pickpockets in crowded markets",
          "Use registered guides at tourist spots",
          "Keep valuables secure",
          "Carry water and wear comfortable shoes for fort visits"
        ]
      },
      {
        category: "Health",
        tips: [
          "Stay hydrated in the dry climate",
          "Use sunscreen and hats for sun protection",
          "Be cautious with street food if you have sensitive stomach",
          "Carry basic medicines for common issues"
        ]
      },
      {
        category: "Transport",
        tips: [
          "Negotiate auto-rickshaw fares before riding",
          "Use Ola/Uber for better pricing",
          "Hire taxis for full-day sightseeing",
          "Check bus timings for inter-city travel"
        ]
      },
      {
        category: "Shopping",
        tips: [
          "Bargain politely in local markets",
          "Check authenticity of silver and antiques",
          "Buy from government emporiums for guaranteed quality",
          "Keep purchase bills for expensive items"
        ]
      },
      {
        category: "Cultural",
        tips: [
          "Dress modestly, especially in religious places",
          "Ask permission before photographing people",
          "Remove footwear at temples",
          "Respect local customs and traditions"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === jodhpurImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? jodhpurImages.length - 1 : prevIndex - 1
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
                src={jodhpurImages[currentImageIndex].url} 
                alt={jodhpurImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{jodhpurImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{jodhpurImages[currentImageIndex].description}</p>
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
                {jodhpurImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏰 About Jodhpur - The Blue City</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {jodhpurData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>🌤️ Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather for sightseeing</p>
                <p><span style={styles.highlight}>Marwar Festival:</span> Cultural celebrations (October)</p>
                <p><span style={styles.highlight}>Summer:</span> Hot but fewer crowds (April-June)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Jodhpur Airport (5 km from city)</p>
                <p><span style={styles.highlight}>By Train:</span> Jodhpur Junction (main station)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected via NH62, NH114</p>
              </div>

              <div style={styles.card}>
                <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>🎯 Must Experience</h3>
                <p>• Sunset view from Mehrangarh Fort</p>
                <p>• Shopping at Clock Tower Market</p>
                <p>• Traditional Rajasthani dinner with folk music</p>
                <p>• Photography in the Blue City lanes</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Jodhpur Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall City Experience</h4>
                  <p>How was your visit to the Blue City?</p>
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
                  <h4>Food Experience</h4>
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
                      onClick={() => handleRateClick({ name: 'food', type: 'Food Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Cultural Experience</h4>
                  <p>How was the heritage and culture?</p>
                  {userRatings.culture ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.culture.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.culture.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'culture', type: 'Cultural Experience' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods of Jodhpur</h2>
            <div style={styles.grid}>
              {jodhpurData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Jodhpur</h2>
            <div style={styles.grid}>
              {jodhpurData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>{item.category}</h3>
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
            <h2 style={styles.sectionTitle}>🏨 Hotels & Stays in Jodhpur</h2>
            <div style={styles.grid}>
              {jodhpurData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {jodhpurData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>{place.name}</h3>
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
              {jodhpurData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2c3e50', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Jodhpur Tourism Office:</strong> +91-291-2545083</p>
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
        <h1 style={styles.title}>🏰 Jodhpur - The Blue City</h1>
        <p style={styles.subtitle}>Complete Travel Guide with Interactive Ratings</p>
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

export default JodhpurTravelGuide;