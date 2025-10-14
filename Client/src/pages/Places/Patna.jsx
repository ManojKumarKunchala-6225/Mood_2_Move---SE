import React, { useState } from 'react';

const PatnaTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Patna Images for Carousel
  const patnaImages = [
    {
      url: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Takht Sri Patna Sahib",
      description: "One of the Five Takhts of Sikhism, birthplace of Guru Gobind Singh Ji"
    },
    {
      url: "https://images.unsplash.com/photo-1574313884751-84fd8b20c919?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZ2hhciUyMHBhdG5hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Golghar",
      description: "Historic granary with panoramic views of Patna"
    },
    {
      url: "https://images.unsplash.com/photo-1667745812053-2e5eddef5dd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0bmElMjBtdXNldW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Patna Museum",
      description: "Rich collection of historical artifacts and art"
    },
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#fff9e6',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      marginTop: '40px',
      padding: '40px',
      background: 'linear-gradient(135deg, #800000, #d4af37)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(128, 0, 0, 0.3)'
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
      backgroundColor: '#800000',
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
      color: '#800000',
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
      backgroundColor: '#fff5f5',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #d4af37',
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
      backgroundColor: '#800000',
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
      backgroundColor: '#fff5f5',
      borderRadius: '5px',
      borderLeft: '3px solid #d4af37'
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
      color: '#800000',
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
      backgroundColor: '#d4af37',
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
      backgroundColor: '#800000',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(128, 0, 0, 0.4)'
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
      color: '#800000',
      borderBottom: '3px solid #d4af37',
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
      backgroundColor: '#fff5f5',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #d4af37',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(128, 0, 0, 0.1)',
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
      color: '#800000',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#d4af37',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    },
    legend: {
      backgroundColor: '#fff5f5',
      padding: '15px',
      borderRadius: '8px',
      margin: '20px 0',
      borderLeft: '4px solid #800000'
    }
  };

  // Patna Travel Data
  const patnaData = {
    overview: {
      title: "Patna - The Historic Capital of Bihar",
      content: `Patna, formerly known as Pataliputra, is one of the oldest continuously inhabited cities in the world with a history spanning over three millennia. Situated on the southern bank of the holy River Ganga, Patna serves as the capital of Bihar and is a major cultural, educational, and commercial hub. The city has been the seat of powerful empires including the Mauryas and Guptas, and has witnessed the rise of Buddhism, Jainism, and Sikhism. Today, Patna blends its rich historical heritage with modern development, offering visitors a unique glimpse into India's glorious past while embracing contemporary progress.`
    },
    famousFoods: [
      {
        name: "Litti Chokha",
        description: "Traditional Bihari dish of roasted wheat balls with mashed vegetables",
        place: "Local eateries, Street vendors",
        price: "₹50-100",
        special: "Signature dish of Bihar"
      },
      {
        name: "Sattu Paratha",
        description: "Flatbread stuffed with roasted gram flour",
        place: "Breakfast stalls, Local restaurants",
        price: "₹40-80",
        special: "Healthy and nutritious breakfast"
      },
      {
        name: "Chandrakala/Pedakiya",
        description: "Sweet dumplings filled with khoya and dry fruits",
        place: "Sweet shops, Local markets",
        price: "₹20-50 per piece",
        special: "Traditional Bihari sweet"
      },
      {
        name: "Bihari Thali",
        description: "Complete meal with various local delicacies",
        place: "Traditional restaurants, Dhabas",
        price: "₹150-300",
        special: "Complete Bihari culinary experience"
      },
      {
        name: "Malpua",
        description: "Sweet pancake dipped in sugar syrup",
        place: "Sweet shops, Festive stalls",
        price: "₹30-60 per piece",
        special: "Popular during festivals"
      }
    ],
    shopping: [
      {
        category: "Traditional Handicrafts",
        description: "Authentic Bihari handicrafts and artifacts",
        places: ["Maurya Lok Complex", "Patna Market", "Hathwa Market"],
        items: ["Madhubani paintings", "Sikki grass products", "Stone pottery", "Bamboo crafts"],
        priceRange: "₹100 - ₹10,000",
        bestTime: "Year-round"
      },
      {
        category: "Silk & Textiles",
        description: "Traditional Bihar silk and cotton textiles",
        places: ["Mithila Emporium", "Government handicraft stores"],
        items: ["Bhagalpur silk", "Tussar silk sarees", "Cotton garments", "Traditional jewelry"],
        priceRange: "₹500 - ₹20,000",
        bestTime: "Festival season"
      },
      {
        category: "Local Specialties",
        description: "Unique Patna and Bihar specific products",
        places: ["Local markets", "Specialty stores"],
        items: ["Sattu", "Local spices", "Traditional sweets", "Handmade paper products"],
        priceRange: "₹50 - ₹2,000",
        bestTime: "Year-round"
      },
      {
        category: "Books & Literature",
        description: "Academic and literary books",
        places: ["Book markets", "University areas"],
        items: ["Academic books", "Bihar history", "Local literature", "Competitive exam guides"],
        priceRange: "₹100 - ₹5,000",
        bestTime: "Academic season"
      }
    ],
    hotels: [
      {
        name: "Hotel Maurya",
        type: "5-Star Luxury Hotel",
        price: "₹7,000-20,000/night",
        rating: "4.5/5",
        facilities: ["Swimming pool", "Multiple restaurants", "Spa", "Business center"],
        location: "South Gandhi Maidan",
        distance: "City center"
      },
      {
        name: "Lemon Tree Premier",
        type: "4-Star Business Hotel",
        price: "₹4,000-12,000/night",
        rating: "4.3/5",
        facilities: ["Restaurant", "Fitness center", "Meeting rooms", "Parking"],
        location: "Frazer Road",
        distance: "1 km from railway station"
      },
      {
        name: "Hotel Patliputra",
        type: "Mid-range Hotel",
        price: "₹2,500-6,000/night",
        rating: "4.0/5",
        facilities: ["Restaurant", "Conference hall", "Travel desk", "WiFi"],
        location: "Exhibition Road",
        distance: "Central location"
      },
      {
        name: "Yuvraj Palace",
        type: "Budget Hotel",
        price: "₹1,200-3,000/night",
        rating: "3.8/5",
        facilities: ["Basic amenities", "Restaurant", "Room service"],
        location: "Station Road",
        distance: "Near railway station"
      },
      {
        name: "Government Tourist Bungalows",
        type: "Economy Accommodation",
        price: "₹800-2,000/night",
        rating: "3.5/5",
        facilities: ["Basic rooms", "Canteen", "Travel assistance"],
        location: "Various locations",
        distance: "City-wide locations"
      }
    ],
    places: [
      {
        name: "Takht Sri Patna Sahib",
        description: "One of the Five Takhts in Sikhism, birthplace of Guru Gobind Singh Ji",
        timing: "4:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Morning and evening",
        highlights: ["Golden Temple", "Guru ka Langar", "Historical museum", "Spiritual atmosphere"]
      },
      {
        name: "Golghar",
        description: "Historic granary built in 1786 by British Army, offers panoramic city views",
        timing: "10:00 AM - 5:00 PM",
        entryFee: "₹10 per person",
        bestTime: "Evening for sunset views",
        highlights: ["Spiral staircase", "City views", "Historical significance", "Photography"]
      },
      {
        name: "Patna Museum",
        description: "State museum showcasing rich history and artifacts from ancient Bihar",
        timing: "10:30 AM - 4:30 PM (Closed Mondays)",
        entryFee: "₹15 for Indians, ₹250 for foreigners",
        bestTime: "Morning hours",
        highlights: ["Didarganj Yakshi", "Mauryan artifacts", "Terracotta collection", "Historical coins"]
      },
      {
        name: "Mahatma Gandhi Setu",
        description: "Long river bridge over Ganga connecting Patna to Hajipur",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Evening for river views",
        highlights: ["River Ganga views", "Engineering marvel", "Sunset photography", "River breeze"]
      },
      {
        name: "Buddha Smriti Park",
        description: "Modern park built to commemorate Buddha's life with meditation facilities",
        timing: "9:00 AM - 7:00 PM",
        entryFee: "₹20 per person",
        bestTime: "Early morning and evening",
        highlights: ["Pataliputra Karuna Stupa", "Meditation area", "Museum", "Peaceful environment"]
      },
      {
        name: "Sanjay Gandhi Biological Park",
        description: "Large zoological park with diverse wildlife species",
        timing: "8:00 AM - 5:00 PM (Closed Mondays)",
        entryFee: "₹30 for adults, ₹10 for children",
        bestTime: "Winter season",
        highlights: ["White tiger", "Botanical garden", "Toy train", "Aquarium"]
      },
      {
        name: "Kumhrar",
        description: "Archaeological site with remains of ancient Pataliputra",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹5 per person",
        bestTime: "Morning",
        highlights: ["Mauryan hall pillars", "Ancient ruins", "Historical significance", "Archaeological site"]
      },
      {
        name: "Agam Kuan",
        description: "Ancient well with historical and mythological significance",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Daytime",
        highlights: ["Historical well", "Mythological stories", "Archaeological site", "Ancient architecture"]
      }
    ],
    activities: [
      {
        name: "Ganga River Cruise",
        location: "Ganga River",
        duration: "1-2 hours",
        cost: "₹200-500 per person",
        bestTime: "October to March",
        experience: "Peaceful boat ride on holy Ganga with city views"
      },
      {
        name: "Historical Tour",
        location: "Various historical sites",
        duration: "4-6 hours",
        cost: "₹1,000-2,000 per person",
        bestTime: "Year-round",
        experience: "Guided tour of ancient Pataliputra ruins and monuments"
      },
      {
        name: "Food Walk",
        location: "Local markets and eateries",
        duration: "2-3 hours",
        cost: "₹500-1,000 per person",
        bestTime: "Evening",
        experience: "Culinary journey through Patna's famous street food"
      },
      {
        name: "Shopping Tour",
        location: "Traditional markets",
        duration: "3-4 hours",
        cost: "Varies",
        bestTime: "Morning",
        experience: "Explore local handicrafts and traditional products"
      },
      {
        name: "Cultural Events",
        location: "Various venues",
        duration: "2-4 hours",
        cost: "Free to ₹500",
        bestTime: "Festival seasons",
        experience: "Attend local cultural programs and festivals"
      },
      {
        name: "Museum Hopping",
        location: "Various museums",
        duration: "3-5 hours",
        cost: "₹100-300",
        bestTime: "Daytime",
        experience: "Explore Patna's rich history through museums"
      }
    ],
    culturalSites: [
      {
        name: "Patna Sahib Gurudwara",
        focus: "Sikh Pilgrimage",
        programs: ["Daily prayers", "Guru ka Langar", "Religious ceremonies"],
        duration: "2-3 hours",
        cost: "Free (Donations accepted)",
        special: "Birthplace of Guru Gobind Singh Ji"
      },
      {
        name: "Mahavir Mandir",
        focus: "Hindu Temple",
        programs: ["Daily aarti", "Special pujas", "Festival celebrations"],
        duration: "1-2 hours",
        cost: "Free",
        special: "One of the most visited temples in North India"
      },
      {
        name: "Padri Ki Haveli",
        focus: "Historical Church",
        programs: ["Church services", "Historical tours", "Prayer meetings"],
        duration: "1 hour",
        cost: "Free",
        special: "Oldest church in Bihar with colonial architecture"
      },
      {
        name: "Bihar Museum",
        focus: "Cultural Education",
        programs: ["Historical exhibitions", "Educational tours", "Cultural events"],
        duration: "2-3 hours",
        cost: "₹50-100",
        special: "Modern museum showcasing Bihar's rich heritage"
      }
    ],
    precautions: [
      {
        category: "Weather & Climate",
        tips: [
          "Summer (April-June) can be extremely hot - carry water and wear light cotton clothes",
          "Monsoon (July-September) brings heavy rainfall - carry umbrella and waterproof gear",
          "Winter (October-March) is pleasant but can be foggy - carry warm clothes",
          "Check weather forecast before planning outdoor activities"
        ]
      },
      {
        category: "Transportation",
        tips: [
          "Use prepaid taxis from railway station and airport",
          "Auto-rickshaws are convenient for short distances - negotiate fare beforehand",
          "Public buses are economical but can be crowded",
          "Book Ola/Uber for comfortable travel within city"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Drink only bottled or purified water",
          "Carry necessary medications and first-aid kit",
          "Be cautious with street food - choose clean vendors",
          "Keep emergency contact numbers handy"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Dress modestly when visiting religious places",
          "Remove shoes before entering temples and gurudwaras",
          "Maintain silence in religious and historical sites",
          "Respect local customs and traditions"
        ]
      },
      {
        category: "Shopping & Money",
        tips: [
          "Carry cash as many small shops don't accept cards",
          "Bargain politely in local markets",
          "Keep valuables secure in crowded places",
          "Use ATMs in secure locations"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === patnaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? patnaImages.length - 1 : prevIndex - 1
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
                src={patnaImages[currentImageIndex].url} 
                alt={patnaImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{patnaImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{patnaImages[currentImageIndex].description}</p>
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
                {patnaImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏛️ About Patna - The Historic Capital</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {patnaData.overview.content}
            </p>
            
            <div style={styles.legend}>
              <h3 style={{color: '#800000', marginBottom: '10px'}}>📜 Historical Significance</h3>
              <p>Patna has been a center of learning, culture, and power for over 2500 years. It was the capital of mighty empires including the Mauryan and Gupta empires. The city has been associated with important historical figures like Emperor Ashoka, Guru Gobind Singh, and many Buddhist and Jain scholars. Today, it stands as a testament to India's rich historical and cultural heritage.</p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#800000', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>April to June:</span> Summer, can be very hot</p>
                <p><span style={styles.highlight}>July to September:</span> Monsoon, heavy rainfall</p>
                <p><span style={styles.highlight}>Festival Season:</span> Durga Puja, Chhath, Diwali for cultural experience</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#800000', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Jay Prakash Narayan Airport (PAT)</p>
                <p><span style={styles.highlight}>By Train:</span> Patna Junction, Rajendra Nagar Terminal</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected via NH 19, 30, 31</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis, City buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Patna Experience</h3>
              <p>Share your historical and cultural experiences</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Historical Experience</h4>
                  <p>How was your journey through Patna's history?</p>
                  {userRatings.overall ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.overall.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.overall.rating)}
                      </div>
                      {userRatings.overall.review && (
                        <p><strong>Experience:</strong> {userRatings.overall.review}</p>
                      )}
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'overall', type: 'Overall Experience' })}
                    >
                      Share Experience
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Cultural Immersion</h4>
                  <p>How enriching was your cultural experience?</p>
                  {userRatings.cultural ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.cultural.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.cultural.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'cultural', type: 'Cultural Experience' })}
                    >
                      Rate Culture
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Food Experience</h4>
                  <p>How delicious was the local cuisine?</p>
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
                      Rate Food
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
              {patnaData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800000', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Patna</h2>
            <div style={styles.grid}>
              {patnaData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800000', marginBottom: '15px'}}>{item.category}</h3>
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
              {patnaData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800000', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏛️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {patnaData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800000', marginBottom: '15px'}}>{place.name}</h3>
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
            <h2 style={styles.sectionTitle}>🚣 Activities & Experiences</h2>
            <div style={styles.grid}>
              {patnaData.activities.map((activity, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800000', marginBottom: '15px'}}>{activity.name}</h3>
                  <p><strong>Location:</strong> {activity.location}</p>
                  <p><strong>Duration:</strong> {activity.duration}</p>
                  <p><strong>Cost:</strong> <span style={styles.price}>{activity.cost}</span></p>
                  <p><strong>Best Time:</strong> {activity.bestTime}</p>
                  <p><strong>Experience:</strong> {activity.experience}</p>
                </div>
              ))}
            </div>

            <h2 style={{...styles.sectionTitle, marginTop: '50px'}}>🕌 Cultural & Religious Sites</h2>
            <div style={styles.grid}>
              {patnaData.culturalSites.map((site, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800000', marginBottom: '15px'}}>{site.name}</h3>
                  <p><strong>Focus:</strong> {site.focus}</p>
                  <p><strong>Programs:</strong> {site.programs.join(', ')}</p>
                  <p><strong>Duration:</strong> {site.duration}</p>
                  <p><strong>Cost:</strong> <span style={styles.price}>{site.cost}</span></p>
                  <p><strong>Special:</strong> {site.special}</p>
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
              {patnaData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#800000', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police (Patna):</strong> 0612-2215215 | <strong>Hospital:</strong> 0612-2300001</p>
              <p><strong>Tourist Information Center:</strong> 0612-2225411</p>
              <p><strong>Railway Enquiry:</strong> 139 | <strong>Airport:</strong> 0612-2223255</p>
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
        <h1 style={styles.title}>🏛️ Patna</h1>
        <p style={styles.subtitle}>The Historic Capital of Bihar - Where History Meets Modernity</p>
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
                e.target.style.backgroundColor = '#d4af37';
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
            {tab === 'places' && '🏛️ Places'}
            {tab === 'activities' && '🚣 Activities'}
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
        <p>© 2024 Patna Travel Guide. Experience the Historical Capital of Bihar!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          जय हिन्द, जय बिहार - Explore the rich heritage and culture of ancient Pataliputra
        </p>
      </div>
    </div>
  );
};

export default PatnaTravelGuide;