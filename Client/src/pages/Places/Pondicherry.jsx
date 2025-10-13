import React, { useState } from 'react';

const PondicherryTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Pondicherry Images for Carousel
  const pondicherryImages = [
    {
      url: "https://images.unsplash.com/photo-1599396145122-4f3d1b1e7b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9uZGljaGVycnklMjBwcm9tZW5hZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "French Quarter Promenade",
      description: "Colonial architecture along the beachfront"
    },
    {
      url: "https://images.unsplash.com/photo-1573549748958-1c7986ceff8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9uZGljaGVycnklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Paradise Beach",
      description: "Pristine sandy beaches with turquoise waters"
    },
    {
      url: "https://images.unsplash.com/photo-1597041729366-cf1c75cd56d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9uZGljaGVycnklMjBmcmVuY2glMjBxdWFydGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "French Colony Streets",
      description: "Colorful colonial buildings with bougainvillea"
    },
    {
      url: "https://images.unsplash.com/photo-1623846737355-83f34d2db80c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1cm92aWxsZSUyMGFzaHJhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Auroville Matrimandir",
      description: "Spiritual golden globe in the international township"
    },
    {
      url: "https://images.unsplash.com/photo-1573549727652-7d6330369a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvbmRpY2hlcnJ5JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "French Café Culture",
      description: "European-style cafes with coastal charm"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      marginTop: '30px',
      padding: '30px',
      background: 'linear-gradient(135deg, #1565C0, #7E57C2)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(21, 101, 192, 0.3)'
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
      backgroundColor: '#1565C0',
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
      color: '#1565C0',
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
      border: '2px solid #7E57C2',
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
      backgroundColor: '#1565C0',
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
      borderLeft: '3px solid #7E57C2'
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
      color: '#1565C0',
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
      backgroundColor: '#7E57C2',
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
      backgroundColor: '#1565C0',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(21, 101, 192, 0.4)'
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
      color: '#1565C0',
      borderBottom: '3px solid #7E57C2',
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
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #7E57C2',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(21, 101, 192, 0.1)',
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
      color: '#1565C0',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#7E57C2',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    },
    frenchStyle: {
      fontStyle: 'italic',
      color: '#7E57C2',
      fontWeight: 'bold'
    }
  };

  // Pondicherry Travel Data
  const pondicherryData = {
    overview: {
      title: "Pondicherry - The French Riviera of the East",
      content: `Pondicherry (now officially Puducherry) is a charming coastal union territory on India's southeastern coast, renowned for its unique French colonial heritage and spiritual significance. Often called the 'French Riviera of the East,' Pondicherry is beautifully divided into the French Quarter (White Town) and the Tamil Quarter (Black Town). The French Quarter features stunning colonial architecture, tree-lined boulevards, and vibrant yellow buildings with colorful bougainvillea. The city is also famous for Auroville, an experimental township dedicated to human unity and spiritual consciousness, centered around the magnificent Matrimandir. With its pristine beaches, French cafes, spiritual centers, and rich cultural fusion, Pondicherry offers a perfect blend of European charm and Indian spirituality. The city's laid-back atmosphere, excellent seafood, and unique Franco-Tamil culture make it a favorite destination for travelers seeking relaxation and cultural enrichment.`
    },
    famousFoods: [
      {
        name: "French Croissants & Coffee",
        description: "Authentic French bakery items with South Indian coffee",
        place: "Baker Street, Café des Arts",
        price: "₹150-400",
        special: "Perfect French breakfast experience"
      },
      {
        name: "Seafood Platter",
        description: "Fresh catch of the day with local spices",
        place: "Sea Side restaurants, French Quarter",
        price: "₹500-1200",
        special: "Fresh seafood with French cooking techniques"
      },
      {
        name: "Filter Coffee",
        description: "Traditional South Indian filter coffee",
        place: "Local cafes, Heritage hotels",
        price: "₹30-80",
        special: "Authentic Tamil Nadu style coffee"
      },
      {
        name: "Crepes & Galettes",
        description: "French-style pancakes with sweet and savory fillings",
        place: "French cafes, Beach shacks",
        price: "₹200-500",
        special: "Genuine French creperie experience"
      },
      {
        name: "Coastal Curry",
        description: "Traditional Tamil fish curry with rice",
        place: "Local Tamil restaurants",
        price: "₹180-350",
        special: "Authentic Chettinad coastal flavors"
      }
    ],
    shopping: [
      {
        category: "French Boutiques",
        description: "European-style clothing and accessories",
        places: ["White Town", "Promenade Beach Road"],
        items: ["Linen clothing", "Handmade jewelry", "French perfumes", "Straw hats"],
        priceRange: "₹500 - ₹10,000",
        bestTime: "Evening shopping"
      },
      {
        category: "Auroville Products",
        description: "Handmade organic and spiritual products",
        places: ["Auroville Boutiques", "Visitor Center"],
        items: ["Handmade paper", "Essential oils", "Organic food", "Spiritual books"],
        priceRange: "₹200 - ₹5,000",
        bestTime: "Daytime visits"
      },
      {
        category: "Local Handicrafts",
        description: "Traditional Tamil crafts and souvenirs",
        places: ["Goubert Market", "Local bazaars"],
        items: ["Wood carvings", "Bronze statues", "Textiles", "Shell crafts"],
        priceRange: "₹100 - ₹3,000",
        bestTime: "Morning markets"
      },
      {
        category: "Spiritual Items",
        description: "Meditation and yoga accessories",
        places: ["Sri Aurobindo Ashram", "Auroville"],
        items: ["Incense", "Meditation mats", "Spiritual texts", "Yoga wear"],
        priceRange: "₹150 - ₹2,500",
        bestTime: "Ashram visiting hours"
      }
    ],
    stays: [
      {
        name: "Palais de Mahe",
        type: "Heritage Luxury Hotel",
        price: "₹8,000-20,000/night",
        rating: "4.7/5",
        facilities: ["Pool", "Spa", "French restaurant", "Heritage rooms"],
        location: "White Town",
        distance: "Beachfront location"
      },
      {
        name: "La Villa",
        type: "Boutique Heritage Stay",
        price: "₹6,000-15,000/night",
        rating: "4.6/5",
        facilities: ["Garden", "Library", "Bicycle rental", "French breakfast"],
        location: "French Quarter",
        distance: "Walking distance to beach"
      },
      {
        name: "Auroville Guesthouses",
        type: "Spiritual Retreat",
        price: "₹2,000-6,000/night",
        rating: "4.3/5",
        facilities: ["Meditation spaces", "Organic meals", "Yoga", "Peaceful environment"],
        location: "Auroville",
        distance: "15 km from city"
      },
      {
        name: "Promenade Hotel",
        type: "Beachfront Hotel",
        price: "₹5,000-12,000/night",
        rating: "4.4/5",
        facilities: ["Sea view rooms", "Multi-cuisine restaurant", "Pool", "Beach access"],
        location: "Beach Road",
        distance: "On Promenade Beach"
      },
      {
        name: "Budget Heritage Homes",
        type: "Guest Houses",
        price: "₹1,500-4,000/night",
        rating: "4.0/5",
        facilities: ["Basic rooms", "Home-cooked meals", "Local experience"],
        location: "Various locations",
        distance: "Across French and Tamil quarters"
      }
    ],
    places: [
      {
        name: "Promenade Beach",
        description: "1.2 km long seaside walkway in White Town",
        timing: "24 hours (best during sunrise/sunset)",
        entryFee: "Free",
        bestTime: "Early morning or evening",
        highlights: ["Rock Beach", "French architecture", "Walking", "Photography"]
      },
      {
        name: "Auroville Matrimandir",
        description: "Golden spherical meditation chamber in international township",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "Free (Pass required for inner chamber)",
        bestTime: "Morning hours",
        highlights: ["Meditation", "Architecture", "Gardens", "Spiritual experience"]
      },
      {
        name: "Sri Aurobindo Ashram",
        description: "Spiritual community founded by Sri Aurobindo and The Mother",
        timing: "8:00 AM - 12:00 PM, 2:00 PM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning meditation hours",
        highlights: ["Samadhi", "Library", "Meditation", "Bookstore"]
      },
      {
        name: "Paradise Beach",
        description: "Pristine beach accessible only by boat",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "Boat: ₹200-400 per person",
        bestTime: "Weekday mornings",
        highlights: ["White sand", "Clear water", "Water sports", "Seclusion"]
      },
      {
        name: "French War Memorial",
        description: "Memorial dedicated to French soldiers in White Town",
        timing: "Open all day",
        entryFee: "Free",
        bestTime: "Evening for lighting",
        highlights: ["History", "Architecture", "Photography", "Location"]
      },
      {
        name: "Botanical Garden",
        description: "19th century French-style botanical gardens",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "₹20 per person",
        bestTime: "Morning or late afternoon",
        highlights: ["French layout", "Rare plants", "Aquarium", "Fountain"]
      }
    ],
    precautions: [
      {
        category: "Beach Safety",
        tips: [
          "Swim only in designated safe areas",
          "Avoid swimming after sunset",
          "Be cautious of strong currents",
          "Keep valuables secure on crowded beaches"
        ]
      },
      {
        category: "Cultural Sensitivity",
        tips: [
          "Dress modestly when visiting ashrams and temples",
          "Remove footwear before entering spiritual places",
          "Maintain silence in meditation areas",
          "Respect local customs and traditions"
        ]
      },
      {
        category: "Transportation",
        tips: [
          "Rent bicycles for White Town exploration",
          "Use authorized boat services for Paradise Beach",
          "Negotiate auto-rickshaw fares in advance",
          "Carry cash for local transportation"
        ]
      },
      {
        category: "Health & Food",
        tips: [
          "Drink bottled water",
          "Use sunscreen and stay hydrated",
          "Try street food from clean, busy stalls",
          "Carry basic medications"
        ]
      },
      {
        category: "Auroville Visit",
        tips: [
          "Book Matrimandir visit in advance online",
          "Maintain silence in the inner chamber",
          "Respect the community's rules and ethos",
          "Wear white clothing for inner peace area"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === pondicherryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? pondicherryImages.length - 1 : prevIndex - 1
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
                src={pondicherryImages[currentImageIndex].url} 
                alt={pondicherryImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{pondicherryImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{pondicherryImages[currentImageIndex].description}</p>
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
                {pondicherryImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏛️ About Pondicherry - French Riviera of the East</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {pondicherryData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1565C0', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>January to February:</span> Coolest months, perfect for beaches</p>
                <p><span style={styles.highlight}>April to June:</span> Summer, good for indoor activities</p>
                <p><span style={styles.highlight}>July to September:</span> Monsoon, fewer crowds</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1565C0', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Puducherry Airport (5 km from city)</p>
                <p><span style={styles.highlight}>By Train:</span> Puducherry Railway Station (Central location)</p>
                <p><span style={styles.highlight}>By Road:</span> Excellent connectivity from Chennai (150 km)</p>
                <p><span style={styles.highlight}>Local Transport:</span> Bicycles, auto-rickshaws, taxis</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Pondicherry Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall French Quarter Experience</h4>
                  <p>How was your experience in the French Colonial area?</p>
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
                  <p>How were the beaches and coastal activities?</p>
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
                  <h4>Spiritual Experience</h4>
                  <p>How was your visit to Auroville and ashrams?</p>
                  {userRatings.spiritual ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.spiritual.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.spiritual.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'spiritual', type: 'Spiritual Experience' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Franco-Tamil Fusion Cuisine</h2>
            <div style={styles.grid}>
              {pondicherryData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1565C0', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Best Place:</strong> <span style={styles.frenchStyle}>{food.place}</span></p>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Pondicherry</h2>
            <div style={styles.grid}>
              {pondicherryData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1565C0', marginBottom: '15px'}}>{item.category}</h3>
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
            <h2 style={styles.sectionTitle}>🏨 Heritage Stays & Beach Resorts</h2>
            <div style={styles.grid}>
              {pondicherryData.stays.map((stay, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1565C0', marginBottom: '15px'}}>{stay.name}</h3>
                  <p><strong>Type:</strong> {stay.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{stay.price}</span></p>
                  <p><strong>Rating:</strong> {stay.rating}</p>
                  <p><strong>Location:</strong> <span style={styles.frenchStyle}>{stay.location}</span></p>
                  <p><strong>Distance:</strong> {stay.distance}</p>
                  <p><strong>Facilities:</strong> {stay.facilities.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'places':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏛️ Famous French & Spiritual Spots</h2>
            <div style={styles.grid}>
              {pondicherryData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1565C0', marginBottom: '15px'}}>{place.name}</h3>
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
            <h2 style={styles.sectionTitle}>⚠️ Travel Precautions & Cultural Tips</h2>
            <div style={styles.grid}>
              {pondicherryData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1565C0', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Puducherry Police:</strong> 0413-2222222 | <strong>Hospital:</strong> 0413-2333333</p>
              <p><strong>Tourist Information:</strong> 0413-2339497 | <strong>Coastal Security:</strong> 1093</p>
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
        <h1 style={styles.title}>🏛️ Pondicherry</h1>
        <p style={styles.subtitle}>French Riviera of the East | Spiritual Paradise</p>
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
                e.target.style.backgroundColor = '#7E57C2';
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
            {tab === 'hotels' && '🏨 Stays'}
            {tab === 'places' && '🏛️ Places'}
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
        <p>© 2024 Pondicherry Travel Guide. Experience the French Riviera of the East!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring Pondicherry's unique Franco-Tamil charm
        </p>
      </div>
    </div>
  );
};

export default PondicherryTravelGuide;