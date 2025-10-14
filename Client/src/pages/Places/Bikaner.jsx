import React, { useState } from 'react';

const BikanerTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Bikaner Images for Carousel
  const bikanerImages = [
    {
      url: "https://images.unsplash.com/photo-1706163903474-dfa8697c0134?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVuYWdhcmglMjBwYWxhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Junagarh Fort",
      description: "Magnificent fort built in 16th century with beautiful architecture"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661914463458-c643243cb167?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZWwlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Camel Festival",
      description: "Vibrant camel festival showcasing Rajasthan's cultural heritage"
    },
    {
      url: "https://images.unsplash.com/photo-1676193361626-debc2960b1c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlcml0YWdlJTIwaG90ZWwlMjByYWphc3RoYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Local Cuisine",
      description: "Famous Bikaneri bhujia and traditional Rajasthani food"
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
      marginBottom: '40px',
      marginTop: '30px',
      padding: '30px',
      background: 'linear-gradient(135deg, #CD853F, #D2691E)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(205, 133, 63, 0.3)'
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
      marginBottom: '40px',
      marginTop: '20px',
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
      backgroundColor: '#CD853F',
      transform: 'scale(1.2)'
    },
    // Rating Styles
    ratingSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '30px',
      marginBottom: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    ratingTitle: {
      color: '#CD853F',
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
      backgroundColor: '#fff8f0',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #D2691E',
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
      backgroundColor: '#CD853F',
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
      backgroundColor: '#fff8f0',
      borderRadius: '5px',
      borderLeft: '3px solid #D2691E'
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
      color: '#CD853F',
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
      backgroundColor: '#D2691E',
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
      marginBottom: '40px',
      marginTop: '20px',
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
      backgroundColor: '#CD853F',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(205, 133, 63, 0.4)'
    },
    content: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      minHeight: '500px',
      marginTop: '20px'
    },
    section: {
      marginBottom: '40px',
      marginTop: '20px'
    },
    sectionTitle: {
      color: '#CD853F',
      borderBottom: '3px solid #D2691E',
      paddingBottom: '15px',
      marginBottom: '30px',
      marginTop: '20px',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '30px'
    },
    card: {
      backgroundColor: '#fff8f0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #D2691E',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(205, 133, 63, 0.1)',
      marginTop: '15px'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '20px 0',
      marginTop: '25px'
    },
    highlight: {
      color: '#CD853F',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#D2691E',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Bikaner Travel Data
  const bikanerData = {
    overview: {
      title: "Bikaner - The Camel Country of Rajasthan",
      content: `Bikaner is a vibrant city in the northwestern part of Rajasthan, India, founded in 1488 by Rao Bika Ji. Known as the 'Camel Country', Bikaner is famous for its magnificent forts, beautiful palaces, and rich cultural heritage. The city stands on an elevated ground in the arid Thar Desert and is surrounded by a 7 km long fort wall with five gates. Bikaner is renowned for its unique architecture, with red sandstone havelis and buildings showcasing intricate carvings. The city is also famous for Bikaneri bhujia, snacks, and sweets. Major attractions include the magnificent Junagarh Fort, Lalgarh Palace, Karni Mata Temple (Rat Temple), and the annual Camel Festival that attracts tourists from around the world. Bikaner offers an authentic Rajasthani experience with its desert landscapes, traditional cuisine, and warm hospitality.`
    },
    famousFoods: [
      {
        name: "Bikaneri Bhujia",
        description: "Crispy snack made from gram flour and spices",
        place: "Local shops, Haldiram's",
        price: "₹100-500",
        special: "World-famous Bikaneri specialty"
      },
      {
        name: "Dal Baati Churma",
        description: "Traditional Rajasthani meal with lentils and baked dough balls",
        place: "Local restaurants, Traditional eateries",
        price: "₹200-400",
        special: "Complete Rajasthani thali experience"
      },
      {
        name: "Gatte Ki Sabzi",
        description: "Gram flour dumplings in spicy yogurt gravy",
        place: "Local dhabas, Restaurants",
        price: "₹150-300",
        special: "Authentic Rajasthani vegetarian dish"
      },
      {
        name: "Kachori",
        description: "Deep fried pastry filled with spicy mixture",
        place: "Street vendors, Breakfast joints",
        price: "₹20-50",
        special: "Popular Rajasthani breakfast"
      },
      {
        name: "Mawa Kachori",
        description: "Sweet fried pastry filled with khoya and dry fruits",
        place: "Sweet shops, Local markets",
        price: "₹40-80",
        special: "Bikaner's famous sweet delicacy"
      }
    ],
    shopping: [
      {
        category: "Camel Leather Products",
        description: "High-quality leather goods made from camel leather",
        places: ["Local markets", "Craft emporiums"],
        items: ["Camel leather bags", "Wallets", "Belts", "Footwear"],
        priceRange: "₹500 - ₹10,000",
        bestTime: "Year-round"
      },
      {
        category: "Handicrafts & Pottery",
        description: "Traditional Rajasthani crafts and pottery",
        places: ["Kote Gate Market", "Local artisan shops"],
        items: ["Blue pottery", "Camel leather items", "Wooden crafts", "Textiles"],
        priceRange: "₹200 - ₹8,000",
        bestTime: "Tourist season"
      },
      {
        category: "Bikaneri Sweets & Snacks",
        description: "Famous local snacks and sweets",
        places: ["Bhujia Bazaar", "Local sweet shops"],
        items: ["Bikaneri bhujia", "Rasgulla", "Mawa kachori", "Traditional sweets"],
        priceRange: "₹100 - ₹2,000",
        bestTime: "Festival season"
      },
      {
        category: "Rajasthani Textiles",
        description: "Traditional fabrics and clothing",
        places: ["Jewelery Market", "Local boutiques"],
        items: ["Bandhani sarees", "Leheriya dupattas", "Traditional jewelry", "Tie-dye fabrics"],
        priceRange: "₹800 - ₹20,000",
        bestTime: "Wedding season"
      }
    ],
    hotels: [
      {
        name: "Laxmi Niwas Palace",
        type: "Heritage Luxury Hotel",
        price: "₹8,000-25,000/night",
        rating: "4.7/5",
        facilities: ["Palace rooms", "Fine dining", "Pool", "Spa", "Cultural events"],
        location: "Bikaner",
        distance: "3 km from Junagarh Fort"
      },
      {
        name: "Hotel Bhairon Vilas",
        type: "Heritage Hotel",
        price: "₹4,000-12,000/night",
        rating: "4.3/5",
        facilities: ["Traditional rooms", "Restaurant", "Garden", "Cultural performances"],
        location: "Junagarh Fort Complex",
        distance: "Within fort premises"
      },
      {
        name: "Gajner Palace",
        type: "Wildlife Heritage Hotel",
        price: "₹6,000-18,000/night",
        rating: "4.5/5",
        facilities: ["Lake view", "Restaurant", "Boating", "Wildlife sanctuary"],
        location: "Gajner",
        distance: "32 km from Bikaner"
      },
      {
        name: "Hotel Heritage Resort",
        type: "Mid-range Hotel",
        price: "₹2,500-6,000/night",
        rating: "4.0/5",
        facilities: ["AC rooms", "Restaurant", "Travel desk", "Parking"],
        location: "Bikaner",
        distance: "2 km from city center"
      },
      {
        name: "Budget Hotels & Guest Houses",
        type: "Economy Accommodation",
        price: "₹800-2,500/night",
        rating: "3.5/5",
        facilities: ["Basic amenities", "Food available", "Local tours"],
        location: "City center areas",
        distance: "Various locations"
      }
    ],
    places: [
      {
        name: "Junagarh Fort",
        description: "Magnificent fort built in 16th century, never conquered",
        timing: "10:00 AM - 4:30 PM",
        entryFee: "₹50 (Indians), ₹300 (Foreigners)",
        bestTime: "Morning hours",
        highlights: ["Karan Mahal", "Anup Mahal", "Badal Mahal", "Museum"]
      },
      {
        name: "Lalgarh Palace",
        description: "Red sandstone palace with Indo-Saracenic architecture",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹100 (Indians), ₹200 (Foreigners)",
        bestTime: "Late afternoon",
        highlights: ["Museum", "Architecture", "Gardens", "Photography"]
      },
      {
        name: "Karni Mata Temple",
        description: "Famous temple with thousands of sacred rats",
        timing: "4:00 AM - 10:00 PM",
        entryFee: "Free",
        bestTime: "Early morning",
        highlights: ["Sacred rats", "Temple architecture", "Religious significance"]
      },
      {
        name: "Camel Research Farm",
        description: "World's largest camel breeding farm",
        timing: "2:30 PM - 5:30 PM",
        entryFee: "₹20",
        bestTime: "Evening hours",
        highlights: ["Camel rides", "Research center", "Camel milk products"]
      },
      {
        name: "Gajner Wildlife Sanctuary",
        description: "Beautiful sanctuary with lake and migratory birds",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹100",
        bestTime: "Winter months",
        highlights: ["Bird watching", "Lake", "Wildlife", "Boating"]
      },
      {
        name: "Bhandasar Jain Temple",
        description: "15th century Jain temple with beautiful paintings",
        timing: "5:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Morning prayers",
        highlights: ["Architecture", "Paintings", "Religious art", "Peaceful environment"]
      }
    ],
    precautions: [
      {
        category: "Desert Climate",
        tips: [
          "Carry water bottles and stay hydrated in dry climate",
          "Use sunscreen and wear hats for sun protection",
          "Wear light cotton clothes in summer",
          "Carry woolens in winter (November-February)"
        ]
      },
      {
        category: "Food & Water",
        tips: [
          "Drink bottled or purified water",
          "Be cautious with street food if you have sensitive stomach",
          "Try local cuisine in reputable restaurants",
          "Carry basic medications"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Dress modestly, especially when visiting temples",
          "Remove shoes before entering religious places",
          "Ask permission before photographing locals",
          "Respect local customs and traditions"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Hire authorized guides for historical sites",
          "Book camel safaris through registered operators",
          "Carry cash as some places don't accept cards",
          "Keep hotel contact details handy"
        ]
      },
      {
        category: "Shopping & Bargaining",
        tips: [
          "Bargain politely in local markets",
          "Check quality of handicrafts before purchase",
          "Buy from government emporiums for authenticity",
          "Keep purchase receipts for valuable items"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === bikanerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? bikanerImages.length - 1 : prevIndex - 1
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
                src={bikanerImages[currentImageIndex].url} 
                alt={bikanerImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{bikanerImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{bikanerImages[currentImageIndex].description}</p>
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
                {bikanerImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏰 About Bikaner - The Camel Country</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {bikanerData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#CD853F', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>November to February:</span> Cool climate, perfect for desert activities</p>
                <p><span style={styles.highlight}>January:</span> Camel Festival (check dates)</p>
                <p><span style={styles.highlight}>April to June:</span> Hot but manageable with precautions</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#CD853F', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Nal Airport (17 km from city)</p>
                <p><span style={styles.highlight}>By Train:</span> Bikaner Junction Railway Station</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Delhi, Jaipur, Jodhpur</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis, Local buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Bikaner Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Heritage Experience</h4>
                  <p>How was your visit to Bikaner's historical sites?</p>
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
                  <h4>Junagarh Fort Experience</h4>
                  <p>How was your visit to the magnificent Junagarh Fort?</p>
                  {userRatings.fort ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.fort.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.fort.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'fort', type: 'Junagarh Fort' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Camel Festival Experience</h4>
                  <p>How was the Camel Festival and cultural events?</p>
                  {userRatings.festival ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.festival.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.festival.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'festival', type: 'Camel Festival' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Bikaneri Cuisine</h2>
            <div style={styles.grid}>
              {bikanerData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#CD853F', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Bikaner</h2>
            <div style={styles.grid}>
              {bikanerData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#CD853F', marginBottom: '15px'}}>{item.category}</h3>
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
            <h2 style={styles.sectionTitle}>🏨 Hotels & Heritage Stays</h2>
            <div style={styles.grid}>
              {bikanerData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#CD853F', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏰 Famous Places to Visit</h2>
            <div style={styles.grid}>
              {bikanerData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#CD853F', marginBottom: '15px'}}>{place.name}</h3>
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
              {bikanerData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#CD853F', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Bikaner Police:</strong> 0151-2522101 | <strong>Hospital:</strong> 0151-2522191</p>
              <p><strong>Tourist Information Center:</strong> 0151-2522123</p>
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
        <h1 style={styles.title}>🏰 Bikaner</h1>
        <p style={styles.subtitle}>The Camel Country - Heritage City of Rajasthan</p>
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
                e.target.style.backgroundColor = '#D2691E';
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
            {tab === 'places' && '🏰 Places'}
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
        marginTop: '50px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Bikaner Travel Guide. Experience the Camel Country of Rajasthan!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the royal heritage of Rajasthan
        </p>
      </div>
    </div>
  );
};

export default BikanerTravelGuide;