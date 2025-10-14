import React, { useState } from 'react';

const ShirdiTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Shirdi Images for Carousel
  const shirdiImages = [
    {
      url: "https://images.unsplash.com/photo-1629640890590-7836d69c5237?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcmRpJTIwc2FpJTIwYmFiYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Shirdi Sai Baba Temple",
      description: "The sacred temple of Shri Saibaba"
    },
    {
      url: "https://imgs.search.brave.com/_ozbiaZMFzAidiHAN0eTf67z4w4iOXlt7n-PWK7ioBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zYWli/YWJhaW1hZ2VzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMi9MYXJnZXIt/Vmlldy1vZi1Ed2Fy/a2FtYWktU2FpLUJh/YmEtU2hpcmRpLTEw/MjR4Njg0LmpwZw",
      title: "Dwarkamai Masjid",
      description: "The mosque where Sai Baba lived for many years"
    },
    {
      url: "https://imgs.search.brave.com/rAroBy-2HZ0zdkMT9rZkhs8fzZ2Te5yMFnwXyJtKdA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS90aHVtYi9tc2lk/LTU5MjE4MDYxLHdp/ZHRoLTU1MCxoZWln/aHQtNDMzLzU5MjE4/MDYxLmpwZw",
      title: "Lendi Baug",
      description: "Beautiful garden where Sai Baba used to walk daily"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#fffaf0',
      minHeight: '100vh',
      color: '#2c1810'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      padding: '30px',
      background: 'linear-gradient(135deg, #8B4513, #D2691E)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(139, 69, 19, 0.3)'
    },
    title: {
      fontSize: '3rem',
      marginBottom: '15px',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      fontWeight: '700'
    },
    subtitle: {
      fontSize: '1.3rem',
      opacity: 0.95,
      fontWeight: '500',
      color: '#fff8f0'
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
      fontWeight: 'bold',
      color: '#ffffff',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
    },
    carouselDescription: {
      fontSize: '1rem',
      opacity: 0.95,
      color: '#f0f0f0'
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
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      fontSize: '20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      color: '#8B4513',
      fontWeight: 'bold'
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
      backgroundColor: '#FFD700',
      transform: 'scale(1.2)'
    },
    // Rating Styles
    ratingSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      color: '#2c1810'
    },
    ratingTitle: {
      color: '#8B4513',
      marginBottom: '15px',
      fontSize: '1.5rem',
      fontWeight: '600'
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
      border: '2px solid #DEB887',
      transition: 'all 0.3s ease',
      color: '#2c1810'
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
      marginTop: '10px',
      fontWeight: '500',
      transition: 'all 0.3s ease'
    },
    userRating: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#fff8f0',
      borderRadius: '5px',
      borderLeft: '3px solid #D2691E',
      color: '#2c1810'
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
      boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
      color: '#2c1810'
    },
    modalTitle: {
      color: '#8B4513',
      marginBottom: '20px',
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: '600'
    },
    textarea: {
      width: '100%',
      padding: '15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '14px',
      marginBottom: '20px',
      minHeight: '100px',
      resize: 'vertical',
      color: '#2c1810',
      backgroundColor: '#fff'
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
      fontSize: '16px',
      fontWeight: '500',
      transition: 'all 0.3s ease'
    },
    cancelButton: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500'
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
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      color: '#2c1810'
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
      minHeight: '500px',
      color: '#2c1810'
    },
    section: {
      marginBottom: '30px'
    },
    sectionTitle: {
      color: '#8B4513',
      borderBottom: '3px solid #D2691E',
      paddingBottom: '15px',
      marginBottom: '25px',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: '600'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '25px'
    },
    card: {
      backgroundColor: '#fff8f0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #DEB887',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 69, 19, 0.1)',
      color: '#2c1810'
    },
    cardTitle: {
      color: '#8B4513',
      marginBottom: '15px',
      fontSize: '1.3rem',
      fontWeight: '600'
    },
    cardText: {
      color: '#2c1810',
      lineHeight: '1.6',
      marginBottom: '10px'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0',
      color: '#2c1810'
    },
    highlight: {
      color: '#8B4513',
      fontWeight: '600',
      fontSize: '1.1rem'
    },
    price: {
      color: '#D2691E',
      fontWeight: '600',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: '600'
    },
    strong: {
      color: '#2c1810',
      fontWeight: '600'
    },
    listItem: {
      color: '#2c1810',
      marginBottom: '10px',
      lineHeight: '1.5'
    }
  };

  // Shirdi Travel Data
  const shirdiData = {
    overview: {
      title: "Shirdi - Abode of Sai Baba",
      content: `Shirdi is a small town in Maharashtra, India, famous as the home of the spiritual master Shri Saibaba. Located approximately 296 km from Mumbai, Shirdi attracts millions of devotees from all over the world who come to seek blessings at the Saibaba Temple. Sai Baba lived in Shirdi for about 60 years and performed numerous miracles, preaching the importance of love, forgiveness, charity, and inner peace. The town has transformed from a small village to a major pilgrimage center, with the Saibaba Temple being one of the richest temples in India. The atmosphere in Shirdi is filled with devotion and spirituality, making it a unique destination for both religious and spiritual seekers.`
    },
    famousFoods: [
      {
        name: "Mahaprasad",
        description: "Holy food offered to Sai Baba and distributed to devotees",
        place: "Saibaba Temple",
        price: "Free",
        special: "Blessed food considered sacred"
      },
      {
        name: "Puran Poli",
        description: "Sweet flatbread stuffed with lentil and jaggery",
        place: "Local restaurants, Prasadalaya",
        price: "₹50-100",
        special: "Traditional Maharashtrian sweet"
      },
      {
        name: "Sabudana Khichdi",
        description: "Tapioca pearls cooked with peanuts and spices",
        place: "Hotels, Local eateries",
        price: "₹80-150",
        special: "Popular fasting food"
      },
      {
        name: "Poha",
        description: "Flattened rice breakfast dish",
        place: "Street vendors, Hotels",
        price: "₹40-80",
        special: "Maharashtrian breakfast specialty"
      },
      {
        name: "Sheera",
        description: "Sweet semolina pudding",
        place: "Prasadalaya, Local sweet shops",
        price: "₹60-120",
        special: "Offered as prasad in temples"
      }
    ],
    shopping: [
      {
        category: "Religious Items",
        description: "Sai Baba idols, photos, and religious artifacts",
        places: ["Temple complex", "Shirdi market", "Sai Nagar"],
        items: ["Sai Baba Idols", "Photos", "Lockets", "Rudraksha"],
        priceRange: "₹50 - ₹5000",
        bestTime: "Year-round"
      },
      {
        category: "Prasad & Holy Items",
        description: "Sacred items and blessed prasad from temple",
        places: ["Temple counters", "Authorized shops", "Prasadalaya"],
        items: ["Udi", "Chadar", "Prasad", "Holy Books"],
        priceRange: "₹10 - ₹2000",
        bestTime: "During temple hours"
      },
      {
        category: "Clothing & Accessories",
        description: "Traditional clothes and spiritual accessories",
        places: ["Shirdi market", "Sai complex", "Local shops"],
        items: ["Kurtas", "Sarees", "Stoles", "Spiritual jewelry"],
        priceRange: "₹200 - ₹5000",
        bestTime: "Festival seasons"
      },
      {
        category: "Books & Audio",
        description: "Spiritual books and devotional music",
        places: ["Book stalls", "Temple complex", "Spiritual centers"],
        items: ["Sai Satcharitra", "Biographies", "Bhajans", "DVDs"],
        priceRange: "₹50 - ₹2000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Sai Prasad Grand",
        type: "Luxury Hotel",
        price: "₹4,000-12,000/night",
        rating: "4.5/5",
        facilities: ["AC Rooms", "Restaurant", "Spa", "Swimming Pool"],
        location: "Near Temple",
        distance: "Walking distance to temple"
      },
      {
        name: "Hotel Sai Leela",
        type: "Premium Hotel",
        price: "₹3,000-8,000/night",
        rating: "4.3/5",
        facilities: ["AC Rooms", "Multi-cuisine Restaurant", "Travel Desk"],
        location: "Shirdi Town",
        distance: "1 km from temple"
      },
      {
        name: "Sai Sagar Hotel",
        type: "Mid-range Hotel",
        price: "₹2,000-5,000/night",
        rating: "4.0/5",
        facilities: ["AC/Non-AC Rooms", "Restaurant", "Parking"],
        location: "Station Road",
        distance: "1.5 km from temple"
      },
      {
        name: "Sai Darshan Guest House",
        type: "Budget Accommodation",
        price: "₹800-2,000/night",
        rating: "3.8/5",
        facilities: ["Basic Rooms", "Attached Bathroom", "24hr Hot Water"],
        location: "Temple Road",
        distance: "500m from temple"
      },
      {
        name: "Shirdi Temple Dharamshala",
        type: "Free/Low-cost Stay",
        price: "Free/₹100-500",
        rating: "3.5/5",
        facilities: ["Basic Accommodation", "Common Bathrooms", "Food"],
        location: "Temple Complex",
        distance: "Within temple premises"
      }
    ],
    places: [
      {
        name: "Shri Saibaba Sansthan Temple",
        description: "Main temple complex where Sai Baba's Samadhi is located",
        timing: "4:00 AM - 11:00 PM",
        entryFee: "Free",
        bestTime: "Early morning for Kakad Aarti",
        highlights: ["Samadhi Mandir", "Dhuni", "Aarti Ceremonies", "Prasad Distribution"]
      },
      {
        name: "Dwarkamai Masjid",
        description: "The mosque where Sai Baba lived and performed miracles",
        timing: "5:00 AM - 10:00 PM",
        entryFee: "Free",
        bestTime: "Morning hours",
        highlights: ["Stone where Baba sat", "Dhuni", "Oil paintings", "Sacred atmosphere"]
      },
      {
        name: "Chavadi",
        description: "Village council office where Baba used to sleep on alternate nights",
        timing: "6:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Daytime",
        highlights: ["Baba's bed", "Procession route", "Historical significance"]
      },
      {
        name: "Lendi Baug",
        description: "Beautiful garden where Sai Baba used to walk daily",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Early morning or evening",
        highlights: ["Nanda Deep", "Baba's sitting place", "Peaceful environment"]
      },
      {
        name: "Gurusthan",
        description: "Place under Neem tree where Sai Baba first appeared",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Sacred Neem tree", "First appearance spot", "Meditation area"]
      },
      {
        name: "Shani Shingnapur",
        description: "Famous temple of Lord Shani, located 65km from Shirdi",
        timing: "5:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Saturday (special day for Shani)",
        highlights: ["Open sky temple", "No doors in village", "Unique traditions"]
      }
    ],
    precautions: [
      {
        category: "Temple Etiquette",
        tips: [
          "Maintain silence inside temple premises",
          "Dress modestly - cover head, shoulders and legs",
          "Remove footwear before entering temple",
          "Follow queue system for darshan",
          "Don't carry mobile phones inside main temple"
        ]
      },
      {
        category: "Safety & Security",
        tips: [
          "Beware of pickpockets in crowded areas",
          "Keep valuables in hotel safe",
          "Use authorized guides only",
          "Follow temple security guidelines",
          "Keep children close in crowded places"
        ]
      },
      {
        category: "Health & Hygiene",
        tips: [
          "Carry water bottles to stay hydrated",
          "Use sanitizers frequently",
          "Eat at clean, hygienic places",
          "Carry basic medicines",
          "Wear comfortable footwear for standing in queues"
        ]
      },
      {
        category: "Accommodation & Travel",
        tips: [
          "Book accommodation in advance during peak seasons",
          "Use prepaid taxis from station/bus stand",
          "Keep temple entry pass handy",
          "Follow temple timings strictly",
          "Respect local customs and traditions"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Carry cash as some places don't accept cards",
          "Learn basic Aarti timings",
          "Respect photography restrictions",
          "Be patient in long queues",
          "Experience the spiritual atmosphere peacefully"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === shirdiImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? shirdiImages.length - 1 : prevIndex - 1
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
                src={shirdiImages[currentImageIndex].url} 
                alt={shirdiImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{shirdiImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{shirdiImages[currentImageIndex].description}</p>
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
                {shirdiImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🕌 About Shirdi - Abode of Sai Baba</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify', color: '#2c1810'}}>
              {shirdiData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>📅 Best Time to Visit</h3>
                <p style={styles.cardText}><span style={styles.highlight}>October to March:</span> Pleasant weather</p>
                <p style={styles.cardText}><span style={styles.highlight}>Ram Navami:</span> Major festival celebration</p>
                <p style={styles.cardText}><span style={styles.highlight}>Guru Purnima:</span> Spiritual significance</p>
                <p style={styles.cardText}><span style={styles.highlight}>Avoid Summers:</span> April-June can be hot</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>🚗 How to Reach</h3>
                <p style={styles.cardText}><span style={styles.highlight}>By Air:</span> Aurangabad Airport (144 km)</p>
                <p style={styles.cardText}><span style={styles.highlight}>By Train:</span> Sainagar Shirdi Railway Station</p>
                <p style={styles.cardText}><span style={styles.highlight}>By Road:</span> Well connected from Mumbai, Pune, Nashik</p>
                <p style={styles.cardText}><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis, Buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Shirdi Experience</h3>
              <p style={{color: '#2c1810'}}>Share your spiritual experience and help other devotees</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4 style={{color: '#8B4513', marginBottom: '10px'}}>Overall Spiritual Experience</h4>
                  <p style={styles.cardText}>How was your visit to Shirdi?</p>
                  {userRatings.overall ? (
                    <div style={styles.userRating}>
                      <p style={styles.cardText}><span style={styles.strong}>Your Rating:</span> {userRatings.overall.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.overall.rating)}
                      </div>
                      {userRatings.overall.review && (
                        <p style={styles.cardText}><span style={styles.strong}>Review:</span> {userRatings.overall.review}</p>
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
                  <h4 style={{color: '#8B4513', marginBottom: '10px'}}>Temple Darshan Experience</h4>
                  <p style={styles.cardText}>How was your Sai Baba temple darshan?</p>
                  {userRatings.darshan ? (
                    <div style={styles.userRating}>
                      <p style={styles.cardText}><span style={styles.strong}>Your Rating:</span> {userRatings.darshan.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.darshan.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'darshan', type: 'Temple Darshan' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4 style={{color: '#8B4513', marginBottom: '10px'}}>Aarti Experience</h4>
                  <p style={styles.cardText}>How was your spiritual experience during Aarti?</p>
                  {userRatings.aarti ? (
                    <div style={styles.userRating}>
                      <p style={styles.cardText}><span style={styles.strong}>Your Rating:</span> {userRatings.aarti.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.aarti.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'aarti', type: 'Aarti Experience' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Prasad</h2>
            <div style={styles.grid}>
              {shirdiData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={styles.cardTitle}>{food.name}</h3>
                  <p style={styles.cardText}>{food.description}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Best Place:</span> {food.place}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Price:</span> <span style={styles.price}>{food.price}</span></p>
                  <p style={styles.cardText}><span style={styles.strong}>Special:</span> {food.special}</p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[food.name] ? (
                      <div style={styles.userRating}>
                        <p style={styles.cardText}><span style={styles.strong}>Your Rating:</span> {userRatings[food.name].rating}/5</p>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Shirdi</h2>
            <div style={styles.grid}>
              {shirdiData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={styles.cardTitle}>{item.category}</h3>
                  <p style={styles.cardText}>{item.description}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Best Places:</span> {item.places.join(', ')}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Popular Items:</span> {item.items.join(', ')}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Price Range:</span> <span style={styles.price}>{item.priceRange}</span></p>
                  <p style={styles.cardText}><span style={styles.strong}>Best Time:</span> {item.bestTime}</p>
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
              {shirdiData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={styles.cardTitle}>{hotel.name}</h3>
                  <p style={styles.cardText}><span style={styles.strong}>Type:</span> {hotel.type}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Price:</span> <span style={styles.price}>{hotel.price}</span></p>
                  <p style={styles.cardText}><span style={styles.strong}>Rating:</span> {hotel.rating}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Location:</span> {hotel.location}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Distance:</span> {hotel.distance}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Facilities:</span> {hotel.facilities.join(', ')}</p>
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
              {shirdiData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={styles.cardTitle}>{place.name}</h3>
                  <p style={styles.cardText}>{place.description}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Timing:</span> {place.timing}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Entry Fee:</span> {place.entryFee}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Best Time to Visit:</span> {place.bestTime}</p>
                  <p style={styles.cardText}><span style={styles.strong}>Highlights:</span> {place.highlights.join(', ')}</p>
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
              {shirdiData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={styles.cardTitle}>{category.category}</h3>
                  <ul style={{paddingLeft: '20px'}}>
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} style={styles.listItem}>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div style={{...styles.warning, marginTop: '20px'}}>
              <h4 style={{color: '#d84315', marginBottom: '15px'}}>🚨 Emergency Contacts</h4>
              <p style={styles.cardText}><span style={styles.strong}>Police:</span> 100 | <span style={styles.strong}>Ambulance:</span> 108 | <span style={styles.strong}>Fire:</span> 101</p>
              <p style={styles.cardText}><span style={styles.strong}>Tourist Helpline:</span> 1363 | <span style={styles.strong}>Women Helpline:</span> 1091</p>
              <p style={styles.cardText}><span style={styles.strong}>Shirdi Police Station:</span> 02423-258050</p>
              <p style={styles.cardText}><span style={styles.strong}>Hospital:</span> 02423-258333 | <span style={styles.strong}>Temple Office:</span> 02423-255500</p>
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
            <p style={{marginTop: '10px', color: '#2c1810'}}>
              {currentRating > 0 ? `You rated: ${currentRating} stars` : 'Select your rating'}
            </p>
          </div>

          <textarea
            style={styles.textarea}
            placeholder="Share your spiritual experience (optional)..."
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
        <h1 style={styles.title}>🕌 Shirdi</h1>
        <p style={styles.subtitle}>Abode of Sai Baba - Spiritual Paradise</p>
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
                e.target.style.backgroundColor = '#DEB887';
                e.target.style.color = '#8B4513';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#2c1810';
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

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p style={{color: '#666', marginBottom: '10px'}}>© 2024 Shirdi Travel Guide. Experience the Divine Abode of Sai Baba!</p>
        <p style={{fontSize: '14px', color: '#888'}}>
          Made with ❤️ for devotees seeking Sai Baba's blessings
        </p>
      </div>
    </div>
  );
};

export default ShirdiTravelGuide;
