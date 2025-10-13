import React, { useState } from 'react';

const LansdowneTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Lansdowne Images for Carousel
  const lansdowneImages = [
    {
      url: "https://images.unsplash.com/photo-1606202801044-284067800cdf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuc2Rvd25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Snow-clad Himalayas",
      description: "Breathtaking views of Himalayan peaks from Lansdowne"
    },
    {
      url: "https://images.unsplash.com/photo-1502215842985-f167631b0151?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuc2Rvd25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Colonial Architecture",
      description: "British-era churches and buildings in pristine condition"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1674289121560-79ca47c03788?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuc2Rvd25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
      title: "Pine Forests",
      description: "Serene pine forests perfect for nature walks"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f0f8f0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #2d5016, #4a7c59)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(45, 80, 22, 0.3)'
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
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)'
      }
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
      backgroundColor: '#2d5016',
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
      color: '#2d5016',
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
      backgroundColor: '#f8fff8',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #e0f0e0',
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
      backgroundColor: '#2d5016',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '14px',
      marginTop: '10px',
      transition: 'all 0.3s ease'
    },
    userRating: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#f0fff0',
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
      color: '#2d5016',
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
      resize: 'vertical',
      fontFamily: 'inherit'
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
      fontSize: '16px',
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
      transition: 'all 0.3s ease'
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
      backgroundColor: '#2d5016',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(45, 80, 22, 0.4)'
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
      color: '#2d5016',
      borderBottom: '3px solid #4a7c59',
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
      backgroundColor: '#f8fff8',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #e0f0e0',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(45, 80, 22, 0.1)',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(45, 80, 22, 0.2)'
      }
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#2d5016',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#388e3c',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    category: {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginLeft: '10px'
    },
    nature: {
      backgroundColor: '#e8f5e8',
      color: '#2d5016'
    },
    historical: {
      backgroundColor: '#fff3e0',
      color: '#e65100'
    },
    adventure: {
      backgroundColor: '#e3f2fd',
      color: '#1565c0'
    },
    viewpoint: {
      backgroundColor: '#f3e5f5',
      color: '#7b1fa2'
    }
  };

  // Lansdowne Travel Data
  const lansdowneData = {
    overview: {
      title: "Lansdowne - Serene Hill Station",
      content: `Lansdowne is a charming, quiet hill station in the Garhwal hills of Uttarakhand, situated at an altitude of 1,706 meters. Unlike other crowded hill stations, Lansdowne maintains its pristine beauty and peaceful atmosphere. Originally established as a military garrison by the British, it's now known for its colonial architecture, oak and pine forests, and breathtaking views of the Himalayan ranges. It's the perfect destination for those seeking tranquility and nature's embrace.`
    },
    famousFoods: [
      {
        name: "Garhwali Thali",
        description: "Traditional meal with mandua ki roti, chainsoo, and local vegetables",
        place: "Local dhabas, Hotel Snow View",
        price: "₹200-400 per plate"
      },
      {
        name: "Aloo Ke Gutke",
        description: "Spicy fried potatoes with local spices, Garhwali specialty",
        place: "Roadside stalls, local restaurants",
        price: "₹80-150"
      },
      {
        name: "Bhatt Ki Churdkani",
        description: "Black soybean curry served with rice, traditional Garhwali dish",
        place: "Traditional restaurants",
        price: "₹120-200"
      },
      {
        name: "Maggi & Tea",
        description: "Hot noodles and local tea at various viewpoints",
        place: "Tip-in-Top point, Bhulla Tal",
        price: "₹40-80"
      }
    ],
    shopping: [
      {
        category: "Local Handicrafts",
        description: "Wooden artifacts, woolen items, and local crafts",
        places: ["Local market", "Army Welfare Shop"],
        priceRange: "₹100 - ₹3000"
      },
      {
        category: "Organic Products",
        description: "Local honey, herbs, and organic produce from hills",
        places: ["Local shops", "Weekly market"],
        priceRange: "₹200 - ₹1000"
      },
      {
        category: "Woolen Clothes",
        description: "Hand-knitted sweaters, caps, and woolens for cold weather",
        places: ["Local market", "Shops near bus stand"],
        priceRange: "₹300 - ₹2500"
      }
    ],
    hotels: [
      {
        name: "Fairydale Resort",
        type: "Luxury Resort",
        price: "₹4000-10000/night",
        location: "Kalagarh Road",
        facilities: "Mountain view, restaurant, bonfire"
      },
      {
        name: "Hotel Snow View",
        type: "Mid-range Hotel",
        price: "₹2000-5000/night",
        location: "Mall Road",
        facilities: "Central location, restaurant"
      },
      {
        name: "GMVN Tourist Rest House",
        type: "Budget Government",
        price: "₹1000-2500/night",
        location: "Near Bus Stand",
        facilities: "Basic amenities, great views"
      },
      {
        name: "Blue Pine Resort",
        type: "Nature Resort",
        price: "₹3000-7000/night",
        location: "Surkanda Devi Road",
        facilities: "Pine forest, camping, trekking"
      }
    ],
    places: [
      {
        name: "Tip-in-Top Point",
        description: "Highest point in Lansdowne offering panoramic views of Himalayan ranges",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        category: "Viewpoint"
      },
      {
        name: "Bhulla Tal",
        description: "Man-made lake maintained by Indian Army, perfect for boating and relaxation",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "Free (Boating: ₹100-200)",
        category: "Nature"
      },
      {
        name: "St. Mary's Church",
        description: "Beautiful colonial-era church built in 1895, still in use",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "Free",
        category: "Historical"
      },
      {
        name: "Garhwali Museum",
        description: "Museum showcasing the history and culture of Garhwal Rifles",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹20 for adults",
        category: "Historical"
      },
      {
        name: "Tiffin Top",
        description: "Scenic spot perfect for picnics with stunning valley views",
        timing: "All day",
        entryFee: "Free",
        category: "Viewpoint"
      },
      {
        name: "Santoshi Mata Temple",
        description: "Popular temple located on a hilltop with spiritual significance",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        category: "Nature"
      },
      {
        name: "Kaleshwar Mahadev Temple",
        description: "Ancient temple dedicated to Lord Shiva, surrounded by forests",
        timing: "6:00 AM - 7:00 PM",
        entryFee: "Free",
        category: "Nature"
      }
    ],
    activities: [
      {
        name: "Nature Walks",
        description: "Peaceful walks through pine and oak forests",
        duration: "1-3 hours",
        bestTime: "Morning/Evening"
      },
      {
        name: "Bird Watching",
        description: "Spot various Himalayan bird species",
        duration: "2-4 hours",
        bestTime: "Early morning"
      },
      {
        name: "Boating",
        description: "Paddle boating in Bhulla Tal lake",
        duration: "30-60 minutes",
        bestTime: "Daytime"
      },
      {
        name: "Photography",
        description: "Capture stunning Himalayan landscapes and colonial architecture",
        duration: "Flexible",
        bestTime: "Golden hours"
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry woolens throughout the year - evenings get cold",
          "Raincoat/umbrella essential during monsoon (July-September)",
          "Comfortable walking shoes for exploring hills",
          "Sunscreen and sunglasses for daytime"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines for altitude and motion sickness",
          "Stay hydrated but avoid drinking untreated water",
          "Inform someone about your trekking plans",
          "Carry power banks as electricity can be unreliable"
        ]
      },
      {
        category: "Travel & Navigation",
        tips: [
          "Cash is essential - limited ATM availability",
          "Mobile network is patchy, especially in remote areas",
          "Book accommodation in advance during peak season",
          "Respect army areas and follow local guidelines"
        ]
      },
      {
        category: "Environmental Care",
        tips: [
          "Do not litter - carry back your waste",
          "Avoid plastic and use reusable bottles",
          "Respect wildlife and maintain distance",
          "Follow designated trails during treks"
        ]
      }
    ],
    transportation: {
      nearestAirport: "Jolly Grant Airport, Dehradun (148km)",
      nearestRailway: "Kotdwar Railway Station (41km)",
      road: "Well-connected by road from Delhi (260km), Dehradun, Kotdwar",
      local: "Limited local transport, walking is best for exploration"
    }
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === lansdowneImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? lansdowneImages.length - 1 : prevIndex - 1
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

  const getCategoryStyle = (category) => {
    switch(category?.toLowerCase()) {
      case 'nature': return styles.nature;
      case 'historical': return styles.historical;
      case 'adventure': return styles.adventure;
      case 'viewpoint': return styles.viewpoint;
      default: return styles.nature;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div style={styles.section}>
            {/* Image Carousel */}
            <div style={styles.carousel}>
              <img 
                src={lansdowneImages[currentImageIndex].url} 
                alt={lansdowneImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{lansdowneImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{lansdowneImages[currentImageIndex].description}</p>
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
                {lansdowneImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Lansdowne - Serene Hill Station</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {lansdowneData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2d5016', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>September to November:</span> Clear skies, great for photography</p>
                <p><span style={styles.highlight}>December to February:</span> Snow season, very cold but beautiful</p>
                <p><span style={{color: '#f44336', fontWeight: 'bold'}}>Monsoon:</span> July-August (heavy rains, landslides possible)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2d5016', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Road:</span> 260km from Delhi (6-7 hours drive)</p>
                <p><span style={styles.highlight}>Nearest Railway:</span> Kotdwar (41km)</p>
                <p><span style={styles.highlight}>Nearest Airport:</span> Dehradun (148km)</p>
                <p><span style={styles.highlight}>Local Transport:</span> Limited, walking recommended</p>
              </div>

              <div style={styles.card}>
                <h3 style={{color: '#2d5016', marginBottom: '15px'}}>🥾 Popular Activities</h3>
                {lansdowneData.activities.slice(0, 3).map((activity, index) => (
                  <p key={index}><strong>{activity.name}:</strong> {activity.description}</p>
                ))}
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Lansdowne Experience</h3>
              <p>Share your peaceful retreat and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Nature Experience</h4>
                  <p>How was your visit to Lansdowne?</p>
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
              </div>
            </div>
          </div>
        );

      case 'food':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🍽️ Garhwali Cuisine & Local Food</h2>
            <div style={styles.grid}>
              {lansdowneData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Best Place:</strong> {food.place}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{food.price}</span></p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'shopping':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🛍️ Local Shopping</h2>
            <div style={styles.grid}>
              {lansdowneData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{item.category}</h3>
                  <p>{item.description}</p>
                  <p><strong>Best Places:</strong> {item.places.join(', ')}</p>
                  <p><strong>Price Range:</strong> <span style={styles.price}>{item.priceRange}</span></p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'hotels':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏡 Accommodation & Stays</h2>
            <div style={styles.grid}>
              {lansdowneData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{hotel.name}</h3>
                  <p><strong>Type:</strong> {hotel.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{hotel.price}</span></p>
                  <p><strong>Location:</strong> {hotel.location}</p>
                  <p><strong>Facilities:</strong> {hotel.facilities}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'places':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🌄 Places to Visit</h2>
            <div style={styles.grid}>
              {lansdowneData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>
                    {place.name}
                    {place.category && (
                      <span style={{...styles.category, ...getCategoryStyle(place.category)}}>
                        {place.category}
                      </span>
                    )}
                  </h3>
                  <p>{place.description}</p>
                  <p><strong>Timing:</strong> {place.timing}</p>
                  <p><strong>Entry Fee:</strong> {place.entryFee}</p>
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
              {lansdowneData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2d5016', marginBottom: '15px'}}>{category.category}</h3>
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
            placeholder="Share your peaceful mountain experience (optional)..."
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
        <h1 style={styles.title}>🏔️ Lansdowne - Serene Hill Station</h1>
        <p style={styles.subtitle}>Complete Travel Guide to Peaceful Mountain Retreat</p>
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
                e.target.style.backgroundColor = '#e0f0e0';
                e.target.style.color = '#2d5016';
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
            {tab === 'hotels' && '🏡 Stays'}
            {tab === 'places' && '🌄 Places'}
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

export default LansdowneTravelGuide;