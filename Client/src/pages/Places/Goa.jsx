import React, { useState } from 'react';

const GoaTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Goa Images for Carousel
  const goaImages = [
    {
      url: "https://imgs.search.brave.com/lEDqX2h8pMZhajjPMfX61uT46so-1MLV-yzwi3O33DA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9jYWxhbmd1dGUt/YmVhY2gtZ29hLTUt/bXVzdGhlYWQtaGVy/bz9xbHQ9ODImdHM9/MTc0MjE2ODkzNzE5/NQ",
      title: "Calangute Beach",
      description: "Queen of beaches with golden sands and vibrant atmosphere"
    },
    {
      url: "https://imgs.search.brave.com/ENOTJABl3qyFGRHwNvIXNRqPPQpPKub98bBtgeReG6g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI0/NjIzMDk0OC9waG90/by90aGUtZHVkaHNh/Z2FyLWZhbGxzLWlu/LWdvYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dlZCZ3Nn/YmF5cFhQM25ydUx2/czdvUWpIYlNyR0ha/SDFZaU4tZmtMTmlR/WT0",
      title: "Dudhsagar Falls",
      description: "Magnificent four-tiered waterfall on Mandovi River"
    },
    {
      url: "https://imgs.search.brave.com/75rdeWucw7iZZl1nFVVKTLPUldIVqRltzcHcvvIJlSs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/OTQwNDYxNC9waG90/by9jaHVyY2hlcy1v/Zi1vbGQtZ29hLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1l/c2tObGhFMlhUY1Y1/RDAyeVhQNVJEWlpG/Z19keU5qbVNYT21u/UDhkVHc0PQ",
      title: "Old Goa Churches",
      description: "UNESCO World Heritage site with Portuguese architecture"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#fff5e6',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop: '50px',
      padding: '30px',
      background: 'linear-gradient(135deg, #ff6b6b, #ffa500)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)'
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
      backgroundColor: '#ff6b6b',
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
      color: '#ff6b6b',
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
      border: '2px solid #ffa500',
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
      backgroundColor: '#ff6b6b',
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
      borderLeft: '3px solid #ffa500'
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
      color: '#ff6b6b',
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
      backgroundColor: '#ffa500',
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
      backgroundColor: '#ff6b6b',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(255, 107, 107, 0.4)'
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
      color: '#ff6b6b',
      borderBottom: '3px solid #ffa500',
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
      backgroundColor: '#fff5e6',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #ffa500',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(255, 107, 107, 0.1)'
    },
    warning: {
      backgroundColor: '#ffe0e0',
      border: '2px solid #ff6b6b',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#ff6b6b',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#ffa500',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Goa Travel Data
  const goaData = {
    overview: {
      title: "Goa - Pearl of the Orient",
      content: `Goa is India's smallest state by area and the fourth smallest by population. Located on India's western coast, it is bounded by the state of Maharashtra to the north and by Karnataka to the east and south, with the Arabian Sea forming its western coast. Goa is famous for its beautiful beaches, vibrant nightlife, Portuguese heritage, and delicious seafood. The state is known for its rich cultural heritage, evident in its architecture, cuisine, and festivals. From the bustling beaches of North Goa to the serene shores of South Goa, this coastal paradise offers something for every type of traveler. The state's unique blend of Indian and Portuguese cultures creates a distinctive atmosphere that makes it one of India's most popular tourist destinations.`
    },
    famousFoods: [
      {
        name: "Goan Fish Curry",
        description: "Spicy and tangy coconut-based curry with fresh fish",
        place: "Beach shacks, Local restaurants",
        price: "₹300-800",
        special: "Traditional Goan preparation with kokum and coconut"
      },
      {
        name: "Pork Vindaloo",
        description: "Fiery pork curry with vinegar and spices",
        place: "Portuguese restaurants, Local eateries",
        price: "₹400-900",
        special: "Portuguese-Goan fusion dish"
      },
      {
        name: "Seafood Platter",
        description: "Grilled fish, prawns, crabs, and lobsters",
        place: "Beachside restaurants, Luxury hotels",
        price: "₹800-2500",
        special: "Fresh catch from Arabian Sea"
      },
      {
        name: "Bebinca",
        description: "Traditional Goan layered dessert",
        place: "Bakeries, Sweet shops",
        price: "₹200-500",
        special: "16-layer coconut cake"
      },
      {
        name: "Feni",
        description: "Local alcoholic drink made from cashew or coconut",
        place: "Bars, Local taverns",
        price: "₹100-300",
        special: "Goa's signature spirit"
      }
    ],
    shopping: [
      {
        category: "Cashew Nuts",
        description: "Fresh and flavored cashew nuts",
        places: ["Mapusa Market", "Anjuna Flea Market", "Local shops"],
        items: ["Plain cashews", "Masala cashews", "Honey roasted", "Spicy variants"],
        priceRange: "₹200 - ₹2,000",
        bestTime: "November to March"
      },
      {
        category: "Feni & Alcohol",
        description: "Local Goan alcoholic beverages",
        places: ["Local distilleries", "Wine shops", "Supermarkets"],
        items: ["Cashew Feni", "Coconut Feni", "Local beers", "Wines"],
        priceRange: "₹150 - ₹2,000",
        bestTime: "Year-round"
      },
      {
        category: "Beach Wear",
        description: "Colorful beach clothing and accessories",
        places: ["Anjuna Flea Market", "Calangute Beach Road", "Local boutiques"],
        items: ["Beach dresses", "Hats", "Sunglasses", "Beach bags"],
        priceRange: "₹100 - ₹5,000",
        bestTime: "Tourist season"
      },
      {
        category: "Handicrafts",
        description: "Local crafts and souvenirs",
        places: ["Saturday Night Market", "Anjuna Market", "Government emporium"],
        items: ["Shell crafts", "Wood carvings", "Jewelry", "Home decor"],
        priceRange: "₹50 - ₹10,000",
        bestTime: "October to April"
      }
    ],
    hotels: [
      {
        name: "Taj Fort Aguada",
        type: "Luxury Heritage Resort",
        price: "₹20,000-60,000/night",
        rating: "4.8/5",
        facilities: ["Private beach", "Infinity pools", "Spa", "Multiple restaurants"],
        location: "Sinquerim, North Goa",
        distance: "On Aguada Beach"
      },
      {
        name: "W Goa",
        type: "Luxury Design Hotel",
        price: "₹15,000-45,000/night",
        rating: "4.7/5",
        facilities: ["Designer pools", "Beach access", "Luxury spa", "Wet deck"],
        location: "Vagator, North Goa",
        distance: "Beachfront property"
      },
      {
        name: "Park Hyatt Goa",
        type: "Luxury Beach Resort",
        price: "₹12,000-35,000/night",
        rating: "4.6/5",
        facilities: ["Private beach", "Golf course", "Spa", "Multiple dining"],
        location: "Arossim Beach, South Goa",
        distance: "On Arossim Beach"
      },
      {
        name: "Alila Diwa Goa",
        type: "Luxury Resort",
        price: "₹10,000-25,000/night",
        rating: "4.5/5",
        facilities: ["Infinity pool", "Spa", "Fine dining", "Rice field views"],
        location: "Majorda, South Goa",
        distance: "Near Majorda Beach"
      },
      {
        name: "Coconut Grove",
        type: "Budget Beach Resort",
        price: "₹2,000-8,000/night",
        rating: "4.0/5",
        facilities: ["Beach access", "Pool", "Restaurant", "Beach activities"],
        location: "Calangute, North Goa",
        distance: "Walking distance to Calangute Beach"
      }
    ],
    places: [
      {
        name: "Calangute Beach",
        description: "Largest beach in North Goa, known as Queen of Beaches",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "November to February",
        highlights: ["Water sports", "Beach shacks", "Shopping", "Nightlife"]
      },
      {
        name: "Baga Beach",
        description: "Famous for water sports and vibrant nightlife",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Evening for nightlife",
        highlights: ["Water sports", "Beach clubs", "Cafés", "Tito's Lane"]
      },
      {
        name: "Dudhsagar Falls",
        description: "Magnificent four-tiered waterfall on Mandovi River",
        timing: "9:00 AM - 5:30 PM",
        entryFee: "₹50-100",
        bestTime: "Monsoon season",
        highlights: ["Waterfall views", "Trekking", "Photography", "Train ride"]
      },
      {
        name: "Old Goa Churches",
        description: "UNESCO World Heritage site with Portuguese churches",
        timing: "7:30 AM - 6:30 PM",
        entryFee: "Free (some churches)",
        bestTime: "Morning hours",
        highlights: ["Basilica of Bom Jesus", "Se Cathedral", "Architecture", "History"]
      },
      {
        name: "Fort Aguada",
        description: "17th-century Portuguese fort overlooking Arabian Sea",
        timing: "9:30 AM - 6:00 PM",
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        bestTime: "Sunset",
        highlights: ["Lighthouse", "Fort walls", "Sea views", "Photography"]
      },
      {
        name: "Anjuna Flea Market",
        description: "Famous Wednesday flea market with global vendors",
        timing: "9:00 AM - 6:00 PM (Wednesdays)",
        entryFee: "Free",
        bestTime: "Wednesday mornings",
        highlights: ["Shopping", "Street food", "Live music", "Cultural mix"]
      }
    ],
    precautions: [
      {
        category: "Beach Safety",
        tips: [
          "Swim only in designated safe areas",
          "Beware of strong currents during monsoon",
          "Don't swim under influence of alcohol",
          "Follow lifeguard instructions"
        ]
      },
      {
        category: "Nightlife",
        tips: [
          "Drink responsibly",
          "Use authorized taxis or ride-sharing",
          "Keep valuables secure",
          "Stay in groups at night"
        ]
      },
      {
        category: "Health & Hygiene",
        tips: [
          "Stay hydrated in humid climate",
          "Use sunscreen and hats",
          "Be cautious with street food",
          "Carry mosquito repellent"
        ]
      },
      {
        category: "Travel & Transport",
        tips: [
          "Rent vehicles from authorized dealers",
          "Carry driving license for rentals",
          "Use helmets on two-wheelers",
          "Book water sports through registered operators"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Respect local customs and culture",
          "Dress appropriately in religious places",
          "Carry cash as some places don't accept cards",
          "Book accommodation in advance during peak season"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === goaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? goaImages.length - 1 : prevIndex - 1
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
                src={goaImages[currentImageIndex].url} 
                alt={goaImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{goaImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{goaImages[currentImageIndex].description}</p>
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
                {goaImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏖️ About Goa - Pearl of the Orient</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {goaData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#ff6b6b', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>November to February:</span> Perfect beach weather</p>
                <p><span style={styles.highlight}>March to May:</span> Hot but good for water sports</p>
                <p><span style={styles.highlight}>June to September:</span> Monsoon, lush greenery</p>
                <p><span style={styles.highlight}>October:</span> Shoulder season, fewer crowds</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#ff6b6b', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Dabolim Airport, Goa</p>
                <p><span style={styles.highlight}>By Train:</span> Madgaon, Thivim, Vasco da Gama</p>
                <p><span style={styles.highlight}>By Road:</span> Well-connected by NH66</p>
                <p><span style={styles.highlight}>Local Transport:</span> Bikes, Cars, Taxis, Buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Goa Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Goa Experience</h4>
                  <p>How was your visit to Goa?</p>
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
                  <h4>Beach Experience</h4>
                  <p>How were the beaches and water activities?</p>
                  {userRatings.beach ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.beach.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.beach.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'beach', type: 'Beach Experience' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Nightlife Experience</h4>
                  <p>How was your nightlife experience in Goa?</p>
                  {userRatings.nightlife ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.nightlife.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.nightlife.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'nightlife', type: 'Nightlife' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Goan Delicacies</h2>
            <div style={styles.grid}>
              {goaData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6b6b', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Goa</h2>
            <div style={styles.grid}>
              {goaData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6b6b', marginBottom: '15px'}}>{item.category}</h3>
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
              {goaData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6b6b', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏖️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {goaData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6b6b', marginBottom: '15px'}}>{place.name}</h3>
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
              {goaData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#ff6b6b', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Tourist Police:</strong> 0832-2427432 | <strong>Coastal Security:</strong> 1093</p>
              <p><strong>Goa Medical College:</strong> 0832-2458700 | <strong>Tourist Helpline:</strong> 1363</p>
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
        <h1 style={styles.title}>🏖️ Goa</h1>
        <p style={styles.subtitle}>Pearl of the Orient - Beach Paradise</p>
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
                e.target.style.backgroundColor = '#ffa500';
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
            {tab === 'places' && '🏖️ Places'}
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
        <p>© 2024 Goa Travel Guide. Experience Beach Paradise!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the Pearl of the Orient
        </p>
      </div>
    </div>
  );
};

export default GoaTravelGuide;