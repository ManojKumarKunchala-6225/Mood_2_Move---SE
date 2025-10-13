import React, { useState } from 'react';

const SaputaraTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Saputara Images for Carousel
  const saputaraImages = [
    {
      url: "https://images.unsplash.com/photo-1548013141-0c11b866ff46?w=1200&h=600&fit=crop",
      title: "Saputara Lake",
      description: "Beautiful artificial lake surrounded by lush green hills"
    },
    {
      url: "https://images.unsplash.com/photo-1464822759849-e41f4b4b2536?w=1200&h=600&fit=crop",
      title: "Sunset Point",
      description: "Breathtaking sunset views over the Sahyadri ranges"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
      title: "Saputara Hills",
      description: "Misty mountains and lush green valleys of the Western Ghats"
    },
    {
      url: "https://images.unsplash.com/photo-1574362841339-371839e69a59?w=1200&h=600&fit=crop",
      title: "Boat Club",
      description: "Picturesque boating experience in the heart of nature"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
      title: "Tribal Culture",
      description: "Rich Warli tribal heritage and traditional art forms"
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
      marginBottom: '50px',
      marginTop: '40px',
      padding: '40px',
      background: 'linear-gradient(135deg, #228B22, #32CD32)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(34, 139, 34, 0.3)'
    },
    title: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    subtitle: {
      fontSize: '1.5rem',
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
      marginBottom: '50px',
      marginTop: '30px',
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
      backgroundColor: '#228B22',
      transform: 'scale(1.2)'
    },
    // Rating Styles
    ratingSection: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '40px',
      marginBottom: '30px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    ratingTitle: {
      color: '#228B22',
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
      border: '2px solid #32CD32',
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
      backgroundColor: '#228B22',
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
      borderLeft: '3px solid #32CD32'
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
      color: '#228B22',
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
      backgroundColor: '#32CD32',
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
      marginBottom: '50px',
      marginTop: '30px',
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
      backgroundColor: '#228B22',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(34, 139, 34, 0.4)'
    },
    content: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      minHeight: '500px',
      marginTop: '30px'
    },
    section: {
      marginBottom: '50px',
      marginTop: '30px'
    },
    sectionTitle: {
      color: '#228B22',
      borderBottom: '3px solid #32CD32',
      paddingBottom: '15px',
      marginBottom: '40px',
      marginTop: '30px',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '40px'
    },
    card: {
      backgroundColor: '#f0fff0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #32CD32',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(34, 139, 34, 0.1)',
      marginTop: '20px'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '30px 0',
      marginTop: '35px'
    },
    highlight: {
      color: '#228B22',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#32CD32',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    },
    legend: {
      backgroundColor: '#f0fff0',
      padding: '15px',
      borderRadius: '8px',
      margin: '20px 0',
      borderLeft: '4px solid #228B22'
    }
  };

  // Saputara Travel Data
  const saputaraData = {
    overview: {
      title: "Saputara - Kashmir of Gujarat",
      content: `Saputara, which means 'Abode of Serpents', is Gujarat's only hill station nestled in the Sahyadri range of the Western Ghats. Located at an altitude of 1,000 meters above sea level in the Dang district, this picturesque hill station is often called the 'Kashmir of Gujarat'. Surrounded by dense forests, stunning waterfalls, and lush green valleys, Saputara offers a perfect escape from the plains. The hill station is rich in tribal culture, primarily inhabited by the Warli and Kunbi tribes, known for their unique art forms and traditions. With its pleasant climate throughout the year, beautiful lake, and numerous viewpoints, Saputara has become a popular destination for nature lovers, honeymooners, and family vacations.`
    },
    famousFoods: [
      {
        name: "Dangi Dal",
        description: "Traditional lentil preparation with local spices",
        place: "Local restaurants, Hotel dining",
        price: "₹120-200",
        special: "Authentic tribal recipe"
      },
      {
        name: "Ukadina Moda",
        description: "Steamed rice flour dumplings with jaggery filling",
        place: "Street vendors, Local eateries",
        price: "₹40-80",
        special: "Traditional sweet snack"
      },
      {
        name: "Bamboo Chicken",
        description: "Chicken marinated in spices and cooked in bamboo",
        place: "Local dhabas, Tribal food stalls",
        price: "₹180-300",
        special: "Unique cooking method"
      },
      {
        name: "Surati Dal Dhokli",
        description: "Wheat flour dumplings in sweet and sour dal",
        place: "Local restaurants, Gujarati thali centers",
        price: "₹100-180",
        special: "Gujarati comfort food"
      },
      {
        name: "Farsi Puri",
        description: "Crispy fried snacks served with chutneys",
        place: "Street food stalls, Local markets",
        price: "₹50-100",
        special: "Popular tea-time snack"
      }
    ],
    shopping: [
      {
        category: "Tribal Handicrafts",
        description: "Authentic Warli tribal art and crafts",
        places: ["Local markets", "Tribal craft centers", "Government emporium"],
        items: ["Warli paintings", "Bamboo crafts", "Terracotta items", "Tribal jewelry"],
        priceRange: "₹100 - ₹5,000",
        bestTime: "Year-round"
      },
      {
        category: "Local Produce",
        description: "Fresh produce and local specialties",
        places: ["Weekly markets", "Local farms", "Roadside stalls"],
        items: ["Honey", "Spices", "Local fruits", "Herbal products"],
        priceRange: "₹200 - ₹2,000",
        bestTime: "Seasonal availability"
      },
      {
        category: "Textiles & Clothing",
        description: "Traditional Gujarati and tribal textiles",
        places: ["Local shops", "Handloom centers"],
        items: ["Traditional sarees", "Stoles", "Woolen garments", "Handwoven fabrics"],
        priceRange: "₹500 - ₹8,000",
        bestTime: "Winter season"
      },
      {
        category: "Souvenirs",
        description: "Memorable gifts and local specialties",
        places: ["Tourist shops", "Hotel gift shops"],
        items: ["Keychains", "Fridge magnets", "Photo frames", "Local art"],
        priceRange: "₹50 - ₹1,000",
        bestTime: "Tourist season"
      }
    ],
    hotels: [
      {
        name: "The Coco Resort",
        type: "Luxury Resort",
        price: "₹6,000-15,000/night",
        rating: "4.5/5",
        facilities: ["Swimming pool", "Spa", "Multi-cuisine restaurant", "Adventure activities"],
        location: "Hill Top",
        distance: "2 km from lake"
      },
      {
        name: "Saputara Lake Resort",
        type: "4-Star Hotel",
        price: "₹4,000-10,000/night",
        rating: "4.3/5",
        facilities: ["Lake view", "Restaurant", "Conference hall", "Garden"],
        location: "Lake Side",
        distance: "Walking distance to lake"
      },
      {
        name: "MTDC Resort",
        type: "Government Resort",
        price: "₹2,500-6,000/night",
        rating: "4.0/5",
        facilities: ["Basic amenities", "Restaurant", "Travel desk", "Parking"],
        location: "Main Road",
        distance: "Central location"
      },
      {
        name: "Hotel Hill View",
        type: "Mid-range Hotel",
        price: "₹1,800-4,000/night",
        rating: "3.8/5",
        facilities: ["Restaurant", "Parking", "AC Rooms", "Travel assistance"],
        location: "Market Area",
        distance: "1 km from bus stand"
      },
      {
        name: "Budget Hotels & Guest Houses",
        type: "Economy Accommodation",
        price: "₹800-2,000/night",
        rating: "3.5/5",
        facilities: ["Basic Rooms", "Attached Bath", "Food Available"],
        location: "Various locations",
        distance: "Walking distance to attractions"
      }
    ],
    places: [
      {
        name: "Saputara Lake",
        description: "Beautiful artificial lake offering boating and picturesque views",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "Free (Boating extra)",
        bestTime: "Morning and Evening",
        highlights: ["Boating", "Photography", "Walking track", "Sunset views"]
      },
      {
        name: "Sunset Point",
        description: "Popular viewpoint offering breathtaking sunset views over valleys",
        timing: "4:00 PM - 7:00 PM",
        entryFee: "Free",
        bestTime: "Evening before sunset",
        highlights: ["Sunset photography", "Valley views", "Telescope viewing", "Cool breeze"]
      },
      {
        name: "Step Garden",
        description: "Beautiful terraced garden with colorful flowers and fountains",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "₹10 per person",
        bestTime: "Morning",
        highlights: ["Flower beds", "Fountains", "Photography", "Relaxing walks"]
      },
      {
        name: "Gira Falls",
        description: "Picturesque waterfall surrounded by dense forests",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "Free",
        bestTime: "Monsoon season",
        highlights: ["Waterfall views", "Nature photography", "Picnic spot", "Forest walk"]
      },
      {
        name: "Artist Village",
        description: "Cultural center showcasing Warli tribal art and traditions",
        timing: "10:00 AM - 5:00 PM",
        entryFee: "₹20 per person",
        bestTime: "Daytime",
        highlights: ["Warli art", "Tribal dance", "Handicrafts", "Cultural shows"]
      },
      {
        name: "Rope Way",
        description: "Cable car ride offering panoramic views of Saputara",
        timing: "10:00 AM - 5:30 PM",
        entryFee: "₹150-300 per person",
        bestTime: "Clear day",
        highlights: ["Aerial views", "Photography", "Thrilling experience", "Valley panorama"]
      },
      {
        name: "Nageshwar Mahadev Temple",
        description: "Ancient Shiva temple with religious significance",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Religious significance", "Architecture", "Peaceful environment", "Spiritual experience"]
      },
      {
        name: "Table Land",
        description: "Large plateau offering adventure activities and views",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "Free (Activities extra)",
        bestTime: "Daytime",
        highlights: ["Adventure sports", "Picnics", "Photography", "Open space"]
      }
    ],
    activities: [
      {
        name: "Boating",
        location: "Saputara Lake",
        duration: "30-60 minutes",
        cost: "₹100-400 per person",
        bestTime: "Morning and Evening",
        experience: "Peaceful ride on the serene lake surrounded by hills"
      },
      {
        name: "Trekking",
        location: "Surrounding hills",
        duration: "2-4 hours",
        cost: "₹500-1,500 per person",
        bestTime: "October to March",
        experience: "Explore nature trails and discover hidden viewpoints"
      },
      {
        name: "Paragliding",
        location: "Table Land",
        duration: "15-30 minutes",
        cost: "₹1,500-3,000 per person",
        bestTime: "Winter season",
        experience: "Thrilling aerial adventure over beautiful landscapes"
      },
      {
        name: "Nature Walks",
        location: "Forest areas",
        duration: "1-2 hours",
        cost: "Free",
        bestTime: "Early morning",
        experience: "Peaceful walks through lush green forests"
      },
      {
        name: "Cultural Shows",
        location: "Artist Village",
        duration: "1-2 hours",
        cost: "₹100-200 per person",
        bestTime: "Evening",
        experience: "Traditional Warli tribal dances and music performances"
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry woolens throughout the year - evenings can be chilly",
          "Rain protection essential during monsoon (June-September)",
          "Comfortable walking shoes for exploring hills and gardens",
          "Layered clothing for changing weather conditions"
        ]
      },
      {
        category: "Travel & Transportation",
        tips: [
          "Hire local taxis for convenience in hilly areas",
          "Public transport available but limited frequency",
          "Carry cash as remote areas may have limited card facilities",
          "Book accommodation in advance during peak season"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines for motion sickness on winding roads",
          "Stay hydrated but drink only bottled or purified water",
          "Be cautious while walking near waterfalls and viewpoints",
          "Keep emergency contacts and local police numbers saved"
        ]
      },
      {
        category: "Adventure Activities",
        tips: [
          "Use authorized operators for adventure sports",
          "Check weather conditions before planning outdoor activities",
          "Follow safety instructions during paragliding and trekking",
          "Carry proper equipment for hiking and nature walks"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Respect local tribal traditions and customs",
          "Ask permission before photographing tribal people",
          "Dress modestly, especially in religious sites",
          "Support local artisans by buying authentic handicrafts"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === saputaraImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? saputaraImages.length - 1 : prevIndex - 1
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
                src={saputaraImages[currentImageIndex].url} 
                alt={saputaraImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{saputaraImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{saputaraImages[currentImageIndex].description}</p>
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
                {saputaraImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Saputara - Kashmir of Gujarat</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {saputaraData.overview.content}
            </p>
            
            <div style={styles.legend}>
              <h3 style={{color: '#228B22', marginBottom: '10px'}}>🌿 Why Visit Saputara?</h3>
              <p>Saputara offers a unique blend of natural beauty, tribal culture, and modern amenities. As Gujarat's only hill station, it provides a refreshing escape with its cool climate, misty mountains, and rich biodiversity. The destination is perfect for nature lovers, adventure enthusiasts, and those seeking cultural experiences.</p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#228B22', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>June to September:</span> Monsoon, lush greenery and waterfalls</p>
                <p><span style={styles.highlight}>April to June:</span> Summer escape from heat</p>
                <p><span style={styles.highlight}>December to February:</span> Winter, chilly but perfect for bonfires</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#228B22', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Surat Airport (172 km) - nearest airport</p>
                <p><span style={styles.highlight}>By Train:</span> Bilimora Railway Station (50 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Surat, Nashik, Mumbai</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Auto-rickshaws, Local buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Saputara Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Hill Station Experience</h4>
                  <p>How was your visit to Kashmir of Gujarat?</p>
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
                  <h4>Natural Beauty & Scenery</h4>
                  <p>How were the landscapes, lakes and viewpoints?</p>
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
                      Rate Scenery
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Cultural Experience</h4>
                  <p>How was the tribal culture and local cuisine?</p>
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
                      Rate Culture
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
              {saputaraData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Saputara</h2>
            <div style={styles.grid}>
              {saputaraData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{item.category}</h3>
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
              {saputaraData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏔️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {saputaraData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{place.name}</h3>
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

      case 'activities':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🚴 Adventure & Activities</h2>
            <div style={styles.grid}>
              {saputaraData.activities.map((activity, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{activity.name}</h3>
                  <p><strong>Location:</strong> {activity.location}</p>
                  <p><strong>Duration:</strong> {activity.duration}</p>
                  <p><strong>Cost:</strong> <span style={styles.price}>{activity.cost}</span></p>
                  <p><strong>Best Time:</strong> {activity.bestTime}</p>
                  <p><strong>Experience:</strong> {activity.experience}</p>
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
              {saputaraData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{category.category}</h3>
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
            
            <div style={{...styles.warning, marginTop: '30px'}}>
              <h4>🚨 Emergency Contacts</h4>
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Women Helpline:</strong> 1091</p>
              <p><strong>Local Police (Saputara):</strong> 02631-222100 | <strong>Hospital:</strong> 02631-222033</p>
              <p><strong>Tourist Information Center:</strong> 02631-222345</p>
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
        <h1 style={styles.title}>🏔️ Saputara</h1>
        <p style={styles.subtitle}>Kashmir of Gujarat - Where Nature Meets Serenity</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'shopping', 'hotels', 'places', 'activities', 'precautions'].map(tab => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = '#32CD32';
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
            {tab === 'places' && '🏔️ Places'}
            {tab === 'activities' && '🚴 Activities'}
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
        marginTop: '60px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Saputara Travel Guide. Experience Gujarat's Only Hill Station!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the beautiful hills of Gujarat
        </p>
      </div>
    </div>
  );
};

export default SaputaraTravelGuide;