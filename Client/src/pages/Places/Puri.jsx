import React, { useState } from 'react';

const PuriTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Puri Images for Carousel
  const puriImages = [
    {
      url: "https://media.istockphoto.com/id/1069137628/photo/top-of-the-jagannath-temple-puri-odisha-india.webp?s=2048x2048&w=is&k=20&c=hsHY2ifaJtsllX5YqG6czbzgVeGoPD6u85sT03eHMSk=",
      title: "Jagannath Temple",
      description: "One of the Char Dham pilgrimage sites, famous for Rath Yatra"
    },
    {
      url: "https://unsplash.com/photos/a-colorful-umbrella-on-a-sandy-beach-near-the-ocean-rbdGSSoLBYQ",
      title: "Puri Beach",
      description: "Golden sandy beach along the Bay of Bengal"
    },
    {
      url: "https://images.unsplash.com/photo-1633530541201-139b32fa4ffa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Chilika Lake",
      description: "Asia's largest brackish water lagoon and bird sanctuary"
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
      background: 'linear-gradient(135deg, #FF6B35, #FF8E53)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)'
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
      backgroundColor: '#FF6B35',
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
      color: '#FF6B35',
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
      backgroundColor: '#fff5e6',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #FF8E53',
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
      backgroundColor: '#FF6B35',
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
      backgroundColor: '#fff5e6',
      borderRadius: '5px',
      borderLeft: '3px solid #FF8E53'
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
      color: '#FF6B35',
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
      backgroundColor: '#FF8E53',
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
      backgroundColor: '#FF6B35',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)'
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
      color: '#FF6B35',
      borderBottom: '3px solid #FF8E53',
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
      backgroundColor: '#fff5e6',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #FF8E53',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(255, 107, 53, 0.1)',
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
      color: '#FF6B35',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#FF8E53',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Puri Travel Data
  const puriData = {
    overview: {
      title: "Puri - The Spiritual Beach City of Odisha",
      content: `Puri, also known as Jagannath Puri, is one of the four sacred Char Dham pilgrimage sites for Hindus and a major tourist destination on the Bay of Bengal coast in Odisha. Famous for the 12th-century Jagannath Temple, Puri attracts millions of pilgrims and tourists annually. The city is renowned for its annual Rath Yatra (Chariot Festival), where giant chariots carrying Lord Jagannath, Balabhadra, and Subhadra are pulled through the streets by thousands of devotees. Puri's golden beach stretches for miles, offering stunning sunrises and various water sports. The city is also the gateway to Konark Sun Temple and Chilika Lake, Asia's largest brackish water lagoon. With its rich cultural heritage, spiritual significance, and natural beauty, Puri offers a unique blend of devotion, history, and coastal charm.`
    },
    famousFoods: [
      {
        name: "Mahaprasad",
        description: "Sacred food offering from Jagannath Temple",
        place: "Ananda Bazar, Temple kitchen",
        price: "₹50-200",
        special: "Considered divine and served on banana leaves"
      },
      {
        name: "Chhena Poda",
        description: "Caramelized cheese dessert from Odisha",
        place: "Local sweet shops, Bakeries",
        price: "₹100-300",
        special: "Signature sweet of Odisha"
      },
      {
        name: "Pakhala Bhata",
        description: "Fermented rice with curd and spices",
        place: "Local restaurants, Traditional eateries",
        price: "₹80-150",
        special: "Traditional Odia summer dish"
      },
      {
        name: "Seafood Platter",
        description: "Fresh catch from Bay of Bengal",
        place: "Beach shacks, Seafood restaurants",
        price: "₹300-800",
        special: "Fresh prawns, crabs, and fish"
      },
      {
        name: "Rasabali",
        description: "Sweet fried cheese patties in thickened milk",
        place: "Sweet shops, Local markets",
        price: "₹40-80",
        special: "Traditional Odia sweet"
      }
    ],
    shopping: [
      {
        category: "Pattachitra",
        description: "Traditional cloth-based scroll painting",
        places: ["Raghurajpur village", "Local markets"],
        items: ["Pattachitra paintings", "Palm leaf engravings", "Stone carvings"],
        priceRange: "₹200 - ₹20,000",
        bestTime: "Year-round"
      },
      {
        category: "Handicrafts",
        description: "Traditional Odisha handicrafts",
        places: ["Government emporiums", "Local markets"],
        items: ["Silver filigree", "Horn work", "Wood carvings", "Textiles"],
        priceRange: "₹150 - ₹15,000",
        bestTime: "Festival season"
      },
      {
        category: "Sea Shell Items",
        description: "Beautiful items made from sea shells",
        places: ["Beach markets", "Local shops"],
        items: ["Shell jewelry", "Decorative items", "Wind chimes", "Showpieces"],
        priceRange: "₹50 - ₹2,000",
        bestTime: "Tourist season"
      },
      {
        category: "Religious Items",
        description: "Temple souvenirs and religious artifacts",
        places: ["Temple market", "Local shops"],
        items: ["Jagannath idols", "Religious books", "Rudraksha", "Incense"],
        priceRange: "₹100 - ₹5,000",
        bestTime: "Pilgrimage season"
      }
    ],
    hotels: [
      {
        name: "Mayfair Heritage",
        type: "5-Star Luxury Resort",
        price: "₹8,000-20,000/night",
        rating: "4.6/5",
        facilities: ["Beach access", "Pool", "Spa", "Multiple restaurants"],
        location: "Puri Beach",
        distance: "On the beachfront"
      },
      {
        name: "Toshali Sands",
        type: "4-Star Resort",
        price: "₹5,000-12,000/night",
        rating: "4.3/5",
        facilities: ["Private beach", "Pool", "Restaurant", "Ayurveda"],
        location: "Konark Road",
        distance: "8 km from Puri"
      },
      {
        name: "Hotel Holiday Resort",
        type: "Mid-range Hotel",
        price: "₹3,000-7,000/night",
        rating: "4.0/5",
        facilities: ["Beach view", "Restaurant", "Travel desk", "Parking"],
        location: "Marine Drive",
        distance: "500m from beach"
      },
      {
        name: "Yatrinivas",
        type: "Government Hotel",
        price: "₹2,000-5,000/night",
        rating: "3.8/5",
        facilities: ["Basic amenities", "Restaurant", "Central location"],
        location: "Station Road",
        distance: "1 km from temple"
      },
      {
        name: "Budget Lodges",
        type: "Economy Accommodation",
        price: "₹800-2,500/night",
        rating: "3.5/5",
        facilities: ["Basic rooms", "Food available", "Pilgrim facilities"],
        location: "Near temple area",
        distance: "Walking distance to temple"
      }
    ],
    places: [
      {
        name: "Jagannath Temple",
        description: "12th-century temple, one of Char Dham pilgrimage sites",
        timing: "5:00 AM - 10:00 PM",
        entryFee: "Free (Non-Hindus not allowed inside)",
        bestTime: "Early morning",
        highlights: ["Rath Yatra", "Mahaprasad", "Temple architecture", "Spiritual atmosphere"]
      },
      {
        name: "Puri Beach",
        description: "Golden sandy beach along Bay of Bengal",
        timing: "Open 24 hours",
        entryFee: "Free",
        bestTime: "Sunrise and sunset",
        highlights: ["Swimming", "Beach walks", "Water sports", "Local food stalls"]
      },
      {
        name: "Chilika Lake",
        description: "Asia's largest brackish water lagoon",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Boat rides: ₹200-500",
        bestTime: "Winter months",
        highlights: ["Dolphin watching", "Bird sanctuary", "Island visits", "Sunset views"]
      },
      {
        name: "Konark Sun Temple",
        description: "13th-century UNESCO World Heritage site",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "₹40 (Indians), ₹600 (Foreigners)",
        bestTime: "Morning hours",
        highlights: ["Sun Temple architecture", "Stone carvings", "Light show", "Museum"]
      },
      {
        name: "Raghurajpur Heritage Village",
        description: "Traditional artisan village for Pattachitra",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Daytime",
        highlights: ["Pattachitra art", "Traditional crafts", "Cultural experience", "Workshops"]
      },
      {
        name: "Gundicha Temple",
        description: "Aunt's temple where deities stay during Rath Yatra",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Rath Yatra season",
        highlights: ["Rath Yatra destination", "Temple gardens", "Religious significance"]
      }
    ],
    precautions: [
      {
        category: "Temple Etiquette",
        tips: [
          "Non-Hindus are not allowed inside Jagannath Temple",
          "Dress modestly and remove footwear before entry",
          "Follow temple rules and priest instructions",
          "Mobile phones and cameras not allowed inside"
        ]
      },
      {
        category: "Beach Safety",
        tips: [
          "Swim only in designated safe areas",
          "Beware of strong currents and undertows",
          "Don't swim after sunset or during high tide",
          "Keep valuables safe while on beach"
        ]
      },
      {
        category: "Food & Water",
        tips: [
          "Drink bottled or purified water",
          "Try Mahaprasad from temple for authentic experience",
          "Be cautious with street food if sensitive stomach",
          "Carry basic medications"
        ]
      },
      {
        category: "Cultural Respect",
        tips: [
          "Respect local customs and traditions",
          "Dress modestly, especially in temple areas",
          "Ask permission before photographing locals",
          "Participate respectfully in religious ceremonies"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Book accommodations in advance during peak seasons",
          "Use registered guides for temple tours",
          "Carry cash as some places don't accept cards",
          "Keep emergency contacts handy"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === puriImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? puriImages.length - 1 : prevIndex - 1
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
                src={puriImages[currentImageIndex].url} 
                alt={puriImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{puriImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{puriImages[currentImageIndex].description}</p>
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
                {puriImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🛕 About Puri - Spiritual Beach City</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {puriData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#FF6B35', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>June-July:</span> Rath Yatra festival (check dates)</p>
                <p><span style={styles.highlight}>November-February:</span> Best for Chilika bird watching</p>
                <p><span style={styles.highlight}>April-June:</span> Summer, good for beach activities</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#FF6B35', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Biju Patnaik Airport, Bhubaneswar (60 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Puri Railway Station (direct trains available)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Bhubaneswar, Kolkata</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis, Cycle rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Puri Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Spiritual Experience</h4>
                  <p>How was your visit to Jagannath Temple and Puri?</p>
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
                  <h4>Jagannath Temple Experience</h4>
                  <p>How was your spiritual experience at the temple?</p>
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
                      onClick={() => handleRateClick({ name: 'temple', type: 'Jagannath Temple' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Beach & Nature Experience</h4>
                  <p>How were the beaches and natural attractions?</p>
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
                      onClick={() => handleRateClick({ name: 'nature', type: 'Beach & Nature' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Odia Cuisine</h2>
            <div style={styles.grid}>
              {puriData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF6B35', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Puri</h2>
            <div style={styles.grid}>
              {puriData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF6B35', marginBottom: '15px'}}>{item.category}</h3>
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
            <h2 style={styles.sectionTitle}>🏨 Hotels & Resorts</h2>
            <div style={styles.grid}>
              {puriData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF6B35', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛕 Famous Places to Visit</h2>
            <div style={styles.grid}>
              {puriData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF6B35', marginBottom: '15px'}}>{place.name}</h3>
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
              {puriData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#FF6B35', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Puri Police:</strong> 06752-222002 | <strong>Hospital:</strong> 06752-223644</p>
              <p><strong>Tourist Information:</strong> 06752-222554 | <strong>Temple Office:</strong> 06752-222002</p>
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
        <h1 style={styles.title}>🛕 Puri</h1>
        <p style={styles.subtitle}>Spiritual Beach City - Land of Lord Jagannath</p>
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
                e.target.style.backgroundColor = '#FF8E53';
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
            {tab === 'places' && '🛕 Places'}
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
        <p>© 2024 Puri Travel Guide. Experience the Spiritual Beach City!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for pilgrims and travelers exploring Odisha's cultural heritage
        </p>
      </div>
    </div>
  );
};

export default PuriTravelGuide;