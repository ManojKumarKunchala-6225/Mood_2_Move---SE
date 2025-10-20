import React, { useState } from 'react';

const ArakuValleyTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Araku Valley Images for Carousel
  const arakuImages = [
    {
      url: "https://imgs.search.brave.com/2vLuHQsJHeYtMYlZWd6_geo0ZPrFfM86ckMpxg4-H50/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwTlZjM0c3/Slo0RnhFRDBSTEhC/UkJYcVNiYnZKUFNR/ZDNiN1FUMEM9czE2/MDAtdzQwMA",
      title: "Coffee Plantations",
      description: "Lush green coffee estates in Eastern Ghats"
    },
    {
      url: "https://imgs.search.brave.com/DSqNQ7uced7OeBEP2Gmk_iFWfeM64Bm1B0wzcnx2ARQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI2/OTYzNTQ2L3Bob3Rv/L2NvbG9yZnVsLWJv/cnJhLWNhdmVzLWxv/Y2F0ZWQtb24tdGhl/LWVhc3QtY29hc3Qt/b2YtaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTV5/MERrWVA4T3c1UHVX/TGVTOG04Y2kwT0V2/clJFNHNEbUdacktH/Q2NBQW89",
      title: "Borra Caves",
      description: "Million-year-old limestone caves with stunning formations"
    },
    {
      url: "https://imgs.search.brave.com/KmyyAPH0uvYk-ANVP-hvdjkm_GHDYtYT7BZ7XXq6Mrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaG9w/Lm11c2V1bXNvZmlu/ZGlhLm9yZy9zaXRl/cy9kZWZhdWx0L2Zp/bGVzLzIwMjAtMDMv/QXJha3UlMjBUcmli/YWwlMjBNdXNldW1f/aW1nMS5qcGVn",
      title: "Tribal Museum",
      description: "Showcasing rich tribal culture and heritage"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#f0fff0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop: '50px',
      padding: '30px',
      background: 'linear-gradient(135deg, #228b22, #32cd32)',
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
      backgroundColor: '#228b22',
      transform: 'scale(1.2)'
    },
    ratingSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    ratingTitle: {
      color: '#228b22',
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
      border: '2px solid #32cd32',
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
      backgroundColor: '#228b22',
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
      borderLeft: '3px solid #32cd32'
    },
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
      color: '#228b22',
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
      backgroundColor: '#32cd32',
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
      backgroundColor: '#228b22',
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
      color: '#228b22',
      borderBottom: '3px solid #32cd32',
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
      border: '2px solid #32cd32',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(34, 139, 34, 0.1)'
    },
    warning: {
      backgroundColor: '#fff0f0',
      border: '2px solid #ff6b6b',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#228b22',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#32cd32',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Araku Valley Travel Data
  const arakuData = {
    overview: {
      title: "Araku Valley - Kashmir of Andhra Pradesh",
      content: `Araku Valley is a picturesque hill station located in the Eastern Ghats of Andhra Pradesh, approximately 115 kilometers from Visakhapatnam. Often referred to as the 'Kashmir of Andhra Pradesh', this beautiful valley is known for its stunning landscapes, coffee plantations, waterfalls, and rich tribal culture. Situated at an altitude of 911 meters to 1,415 meters above sea level, Araku Valley offers a perfect escape from the heat and hustle of city life. The valley is surrounded by lush green forests, terraced gardens, and scenic waterfalls. It is home to various tribal communities who have preserved their unique culture and traditions. The famous Borra Caves, located nearby, add to the valley's natural charm with their million-year-old limestone formations.`
    },
    famousFoods: [
      {
        name: "Bamboo Chicken",
        description: "Chicken marinated in spices and cooked inside bamboo",
        place: "Local tribal stalls, Roadside eateries",
        price: "₹200-500",
        special: "Traditional tribal cooking method"
      },
      {
        name: "Tribal Coffee",
        description: "Freshly brewed coffee from local plantations",
        place: "Coffee stalls, Plantation visits",
        price: "₹50-100",
        special: "Freshly grown Araku coffee"
      },
      {
        name: "Organic Honey",
        description: "Pure honey collected from forest areas",
        place: "Local markets, Tribal vendors",
        price: "₹300-800",
        special: "Natural and organic"
      },
      {
        name: "Local Vegetables",
        description: "Fresh organic vegetables grown in valley",
        place: "Local restaurants, Homestays",
        price: "₹100-300",
        special: "Fresh from tribal farms"
      },
      {
        name: "Rice-based Dishes",
        description: "Traditional rice preparations with local spices",
        place: "Local eateries, Tribal food centers",
        price: "₹150-400",
        special: "Authentic tribal cuisine"
      }
    ],
    shopping: [
      {
        category: "Coffee & Tea",
        description: "Fresh coffee and tea from local plantations",
        places: ["Local markets", "Plantation shops", "Government outlets"],
        items: ["Araku Coffee", "Organic Tea", "Coffee powder", "Tea leaves"],
        priceRange: "₹200 - ₹2,000",
        bestTime: "Year-round"
      },
      {
        category: "Tribal Handicrafts",
        description: "Handmade crafts by local tribal communities",
        places: ["Tribal Museum", "Local markets", "Craft centers"],
        items: ["Wood carvings", "Bamboo crafts", "Tribal jewelry", "Handwoven textiles"],
        priceRange: "₹100 - ₹5,000",
        bestTime: "Tourist season"
      },
      {
        category: "Organic Products",
        description: "Natural and organic products from valley",
        places: ["Local markets", "Government shops", "Farm outlets"],
        items: ["Organic honey", "Herbal products", "Natural oils", "Spices"],
        priceRange: "₹150 - ₹3,000",
        bestTime: "Year-round"
      },
      {
        category: "Local Artifacts",
        description: "Traditional tribal artifacts and souvenirs",
        places: ["Tribal Museum shop", "Local craft stores"],
        items: ["Tribal masks", "Musical instruments", "Decorative items", "Paintings"],
        priceRange: "₹200 - ₹10,000",
        bestTime: "October to March"
      }
    ],
    hotels: [
      {
        name: "ITC Grand Bay",
        type: "Luxury Resort",
        price: "₹8,000-20,000/night",
        rating: "4.5/5",
        facilities: ["Swimming pool", "Spa", "Restaurant", "Mountain views"],
        location: "Araku Valley",
        distance: "Central location"
      },
      {
        name: "Haritha Valley Resort",
        type: "Government Resort",
        price: "₹3,000-8,000/night",
        rating: "4.0/5",
        facilities: ["Basic amenities", "Restaurant", "Garden", "Tour assistance"],
        location: "Araku Valley",
        distance: "Near main attractions"
      },
      {
        name: "Araku Tribal Resort",
        type: "Eco Resort",
        price: "₹4,000-12,000/night",
        rating: "4.2/5",
        facilities: ["Eco-friendly", "Nature walks", "Cultural programs", "Organic food"],
        location: "Araku Valley",
        distance: "Amidst coffee plantations"
      },
      {
        name: "Hotel Mayfair",
        type: "Mid-range Hotel",
        price: "₹5,000-15,000/night",
        rating: "4.3/5",
        facilities: ["Restaurant", "Bar", "Conference hall", "Travel desk"],
        location: "Araku Valley",
        distance: "Central location"
      },
      {
        name: "Homestays",
        type: "Budget Accommodation",
        price: "₹1,000-4,000/night",
        rating: "4.1/5",
        facilities: ["Home-cooked food", "Local experience", "Basic amenities", "Cultural immersion"],
        location: "Various locations",
        distance: "Scattered across valley"
      }
    ],
    places: [
      {
        name: "Borra Caves",
        description: "Million-year-old limestone caves with stunning formations",
        timing: "10:00 AM - 5:00 PM",
        entryFee: "₹60 (Indians), ₹100 (Foreigners)",
        bestTime: "Morning hours",
        highlights: ["Stalactites", "Stalagmites", "Natural formations", "Photography"]
      },
      {
        name: "Coffee Plantations",
        description: "Vast expanses of coffee estates in Eastern Ghats",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Free (some charge for guided tours)",
        bestTime: "October to March",
        highlights: ["Coffee walks", "Plantation tours", "Fresh coffee", "Scenic views"]
      },
      {
        name: "Tribal Museum",
        description: "Showcasing rich tribal culture and heritage of Araku",
        timing: "9:30 AM - 5:30 PM",
        entryFee: "₹20",
        bestTime: "Daytime",
        highlights: ["Tribal artifacts", "Cultural exhibits", "Handicrafts", "History"]
      },
      {
        name: "Katiki Waterfalls",
        description: "Beautiful waterfall near Borra Caves",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "Free",
        bestTime: "Monsoon season",
        highlights: ["Waterfall views", "Trekking", "Photography", "Nature walks"]
      },
      {
        name: "Padmapuram Gardens",
        description: "Beautiful botanical gardens with tree houses",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "₹30",
        bestTime: "Morning or evening",
        highlights: ["Tree houses", "Gardens", "Toy train", "Flower shows"]
      },
      {
        name: "Ananthagiri Hills",
        description: "Scenic hills with coffee plantations and viewpoints",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Sunrise or sunset",
        highlights: ["Viewpoints", "Coffee estates", "Trekking", "Photography"]
      }
    ],
    precautions: [
      {
        category: "Trekking & Hiking",
        tips: [
          "Hire local guides for forest treks",
          "Carry water and snacks",
          "Wear comfortable trekking shoes",
          "Check weather conditions before trekking"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Carry woolens during winter months",
          "Carry raincoat during monsoon",
          "Wear comfortable walking shoes",
          "Carry sunscreen and hats"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines",
          "Stay hydrated during treks",
          "Be cautious near waterfalls",
          "Carry mosquito repellent"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Respect tribal customs and traditions",
          "Seek permission before photography of tribal people",
          "Don't litter in forest areas",
          "Respect local culture and traditions"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Carry cash as ATMs are limited",
          "Book accommodation in advance during peak season",
          "Carry power banks for photography",
          "Learn about local customs and traditions"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === arakuImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? arakuImages.length - 1 : prevIndex - 1
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
                src={arakuImages[currentImageIndex].url} 
                alt={arakuImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{arakuImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{arakuImages[currentImageIndex].description}</p>
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
                {arakuImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏞️ About Araku Valley - Kashmir of Andhra Pradesh</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {arakuData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#228b22', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>September to March:</span> Pleasant weather for sightseeing</p>
                <p><span style={styles.highlight}>October to February:</span> Ideal for trekking and outdoor activities</p>
                <p><span style={styles.highlight}>June to August:</span> Monsoon, lush greenery but limited activities</p>
                <p><span style={styles.highlight}>April to May:</span> Summer, warm but good for valley views</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#228b22', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Train:</span> Scenic train from Visakhapatnam</p>
                <p><span style={styles.highlight}>By Road:</span> Well-connected by road from Vizag</p>
                <p><span style={styles.highlight}>Nearest Airport:</span> Visakhapatnam Airport</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Buses, Auto-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Araku Valley Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Valley Experience</h4>
                  <p>How was your visit to Araku Valley?</p>
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
                  <h4>Nature Experience</h4>
                  <p>How was your experience with nature and scenery?</p>
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
                      onClick={() => handleRateClick({ name: 'nature', type: 'Nature Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Tribal Culture Experience</h4>
                  <p>How was your experience with tribal culture?</p>
                  {userRatings.tribal ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.tribal.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.tribal.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'tribal', type: 'Tribal Culture' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Tribal Delicacies</h2>
            <div style={styles.grid}>
              {arakuData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228b22', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Araku Valley</h2>
            <div style={styles.grid}>
              {arakuData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228b22', marginBottom: '15px'}}>{item.category}</h3>
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
              {arakuData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228b22', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {arakuData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228b22', marginBottom: '15px'}}>{place.name}</h3>
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
              {arakuData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228b22', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 102 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Forest Department:</strong> 1800-425-5366</p>
              <p><strong>Araku Police Station:</strong> 08936-235522 | <strong>Hospital:</strong> 08936-235533</p>
              <p><strong>Tourist Information Center:</strong> 08936-235544</p>
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
        <h1 style={styles.title}>🏞️ Araku Valley</h1>
        <p style={styles.subtitle}>Kashmir of Andhra Pradesh - Coffee Paradise</p>
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
                e.target.style.backgroundColor = '#32cd32';
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
        <p>© 2024 Araku Valley Travel Guide. Experience Coffee Paradise!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the Kashmir of Andhra Pradesh
        </p>
      </div>
    </div>
  );
};

export default ArakuValleyTravelGuide;