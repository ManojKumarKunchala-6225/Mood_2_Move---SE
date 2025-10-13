import React, { useState } from 'react';

const RanikhetTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Ranikhet Images for Carousel
  const ranikhetImages = [
    {
      url: "https://media.istockphoto.com/id/2151837635/photo/himalayan-landscapes.webp?a=1&b=1&s=612x612&w=0&k=20&c=vwKPTwWpeCOfsq7nX3hoSRTaQ36y-mT67iLiISdsBI0=",
      title: "Ranikhet Hills",
      description: "Picturesque views of the Kumaon Himalayas"
    },
    {
      url: "https://media.istockphoto.com/id/1184370261/photo/public-gardens-hyderabad-telangana-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=jdhISwFrUid4ZglP2UmCcoLZ5O5F8GUy0cFYqbFTvU8=",
      title: "Chaubatia Gardens",
      description: "Famous orchards with apple, peach and apricot trees"
    },
    {
      url: "https://media.istockphoto.com/id/1161434085/photo/golf-course-in-ranikhet-uttarakhand.webp?a=1&b=1&s=612x612&w=0&k=20&c=LF2BrA0xLY7XWOwp_0VDuUVempadC0utFMr6sy15og8=",
      title: "Golf Course",
      description: "One of the highest golf courses in Asia"
    },
    {
      url: "https://media.istockphoto.com/id/2155313290/photo/hills.webp?a=1&b=1&s=612x612&w=0&k=20&c=zLWhHGgyztjwiy4wjtHbfyA_Rvfd3iZGGJYaaIfkN0k=",
      title: "Majhkhali Valley",
      description: "Breathtaking valley views and peaceful environment"
    },
    {
      url: "https://media.istockphoto.com/id/1335083724/photo/sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=szY1LglMbVd8oep1hCzycGz0cizldmLP04iwQYyUeLY=",
      title: "Sunset Points",
      description: "Magnificent sunset views over Himalayan peaks"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#f0f8ff',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      marginTop: '40px',
      padding: '40px',
      background: 'linear-gradient(135deg, #2E8B57, #3CB371)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(46, 139, 87, 0.3)'
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
      backgroundColor: '#2E8B57',
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
      color: '#2E8B57',
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
      border: '2px solid #3CB371',
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
      backgroundColor: '#2E8B57',
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
      borderLeft: '3px solid #3CB371'
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
      color: '#2E8B57',
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
      backgroundColor: '#3CB371',
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
      backgroundColor: '#2E8B57',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(46, 139, 87, 0.4)'
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
      color: '#2E8B57',
      borderBottom: '3px solid #3CB371',
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
      border: '2px solid #3CB371',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(46, 139, 87, 0.1)',
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
      color: '#2E8B57',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#3CB371',
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
      borderLeft: '4px solid #2E8B57'
    }
  };

  // Ranikhet Travel Data
  const ranikhetData = {
    overview: {
      title: "Ranikhet - Queen's Meadow",
      content: `Ranikhet, which literally means 'Queen's Meadow', is a picturesque hill station in the Almora district of Uttarakhand. Situated at an altitude of 1,869 meters above sea level, this charming town offers breathtaking views of the western Himalayas, particularly the majestic Nanda Devi peak. The town gets its name from a local legend that Queen Padmini of Kumaon was so captivated by its beauty that she decided to make it her meadow. Ranikhet is famous for its pristine natural beauty, lush green forests, orchards, and tranquil environment. It is also a significant military station and home to the Kumaon Regiment of the Indian Army. The town maintains its old-world charm with colonial-era buildings, beautiful churches, and well-maintained gardens.`
    },
    famousFoods: [
      {
        name: "Bhatt ki Churkani",
        description: "Traditional black soybean curry from Kumaon region",
        place: "Local eateries, Kumaoni restaurants",
        price: "₹120-200",
        special: "Authentic Kumaoni flavor with local spices"
      },
      {
        name: "Aloo Ke Gutke",
        description: "Spicy potato preparation with local herbs",
        place: "Street vendors, Local dhabas",
        price: "₹80-150",
        special: "Classic Kumaoni snack"
      },
      {
        name: "Bal Mithai",
        description: "Brown chocolate-like fudge made with khoya",
        place: "Local sweet shops, Bakeries",
        price: "₹200-400 per kg",
        special: "Famous Uttarakhand sweet"
      },
      {
        name: "Singodi",
        description: "Sweet made with khoya and coconut wrapped in Malu leaves",
        place: "Sweet shops, Local markets",
        price: "₹150-300 per kg",
        special: "Traditional sweet with unique presentation"
      },
      {
        name: "Ras",
        description: "Sweet dish made from jaggery and thickened milk",
        place: "Local sweet shops, Festive occasions",
        price: "₹100-200",
        special: "Festive delicacy of Kumaon"
      }
    ],
    shopping: [
      {
        category: "Handicrafts & Woolens",
        description: "Traditional Kumaoni handicrafts and warm clothing",
        places: ["Local markets", "Mall Road", "Craft centers"],
        items: ["Woolen shawls", "Kumaoni caps", "Handmade candles", "Wooden crafts"],
        priceRange: "₹200 - ₹8,000",
        bestTime: "Year-round"
      },
      {
        category: "Local Produce",
        description: "Fresh fruits and local food products",
        places: ["Chaubatia orchards", "Local farms", "Roadside stalls"],
        items: ["Apples", "Apricots", "Peaches", "Local honey"],
        priceRange: "₹100 - ₹500",
        bestTime: "Seasonal availability"
      },
      {
        category: "Traditional Jewelry",
        description: "Kumaoni traditional ornaments and accessories",
        places: ["Local jewelers", "Craft markets"],
        items: ["Silver jewelry", "Traditional necklaces", "Earrings", "Bangles"],
        priceRange: "₹500 - ₹15,000",
        bestTime: "Festival season"
      },
      {
        category: "Organic Products",
        description: "Natural and organic products from the hills",
        places: ["Organic stores", "Farm outlets"],
        items: ["Herbal teas", "Natural preserves", "Essential oils", "Herbal products"],
        priceRange: "₹150 - ₹2,000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Welcomheritage Windsor Lodge",
        type: "Heritage Luxury Hotel",
        price: "₹6,000-15,000/night",
        rating: "4.5/5",
        facilities: ["Heritage rooms", "Multi-cuisine restaurant", "Garden", "Travel desk"],
        location: "Mall Road",
        distance: "Walking distance to market"
      },
      {
        name: "Westview Hotel",
        type: "Mid-range Hotel",
        price: "₹3,000-8,000/night",
        rating: "4.2/5",
        facilities: ["Mountain views", "Restaurant", "Parking", "Room service"],
        location: "Near Golf Course",
        distance: "2 km from center"
      },
      {
        name: "Hotel Meghdoot",
        type: "Budget Hotel",
        price: "₹1,500-4,000/night",
        rating: "4.0/5",
        facilities: ["Basic rooms", "Restaurant", "Travel assistance", "Parking"],
        location: "Main Market",
        distance: "Central location"
      },
      {
        name: "KMVN Tourist Rest House",
        type: "Government Accommodation",
        price: "₹1,000-3,000/night",
        rating: "3.8/5",
        facilities: ["Basic amenities", "Food service", "Garden", "Budget stay"],
        location: "Ranikhet",
        distance: "Various locations"
      },
      {
        name: "Homestays & Guest Houses",
        type: "Local Experience",
        price: "₹800-2,500/night",
        rating: "4.1/5",
        facilities: ["Home-cooked food", "Local experience", "Personalized service"],
        location: "Residential areas",
        distance: "Various locations"
      }
    ],
    places: [
      {
        name: "Chaubatia Gardens",
        description: "Famous government orchards with fruit trees and Himalayan views",
        timing: "8:00 AM - 5:00 PM",
        entryFee: "₹20 per person",
        bestTime: "March to November",
        highlights: ["Fruit orchards", "Himalayan views", "Photography", "Nature walks"]
      },
      {
        name: "Ranikhet Golf Course",
        description: "One of the highest golf courses in Asia with scenic beauty",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹500-1,000 for playing",
        bestTime: "March to June, September to November",
        highlights: ["Golfing", "Scenic views", "Professional course", "Army maintained"]
      },
      {
        name: "Jhula Devi Temple",
        description: "Ancient temple dedicated to Goddess Durga with thousands of bells",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Religious significance", "Ancient bells", "Spiritual experience", "Architecture"]
      },
      {
        name: "Majhkhali",
        description: "Beautiful valley offering panoramic Himalayan views",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Sunrise and Sunset",
        highlights: ["Valley views", "Photography", "Peaceful environment", "Himalayan panorama"]
      },
      {
        name: "Binsar Mahadev Temple",
        description: "Ancient Shiva temple surrounded by dense forests",
        timing: "6:00 AM - 7:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Religious importance", "Forest setting", "Architecture", "Spiritual peace"]
      },
      {
        name: "Haidakhan Temple",
        description: "Spiritual center dedicated to Lord Shiva",
        timing: "5:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "Morning and Evening",
        highlights: ["Spiritual activities", "Meditation", "Temple architecture", "Peaceful ambiance"]
      },
      {
        name: "Bhalu Dam",
        description: "Small reservoir surrounded by dense forests",
        timing: "7:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Daytime",
        highlights: ["Water body", "Forest walks", "Bird watching", "Photography"]
      },
      {
        name: "Mankameshwar Temple",
        description: "Beautiful temple dedicated to Lord Shiva",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Temple architecture", "Spiritual peace", "City views", "Religious significance"]
      }
    ],
    activities: [
      {
        name: "Nature Walks",
        location: "Forest trails around Ranikhet",
        duration: "1-3 hours",
        cost: "Free or ₹500-1,000 with guide",
        bestTime: "Early morning or evening",
        experience: "Peaceful walks through pine and oak forests"
      },
      {
        name: "Bird Watching",
        location: "Forest areas and gardens",
        duration: "2-4 hours",
        cost: "Free or ₹1,000-2,000 with guide",
        bestTime: "Early morning",
        experience: "Spot various Himalayan bird species"
      },
      {
        name: "Photography",
        location: "Viewpoints and scenic spots",
        duration: "Flexible",
        cost: "Free",
        bestTime: "Golden hours (sunrise/sunset)",
        experience: "Capture stunning Himalayan landscapes"
      },
      {
        name: "Golfing",
        location: "Ranikhet Golf Course",
        duration: "2-4 hours",
        cost: "₹500-1,000 per person",
        bestTime: "Daytime",
        experience: "Play at one of Asia's highest golf courses"
      },
      {
        name: "Village Tours",
        location: "Nearby Kumaoni villages",
        duration: "3-6 hours",
        cost: "₹1,000-2,000 per person",
        bestTime: "Daytime",
        experience: "Experience local Kumaoni culture and lifestyle"
      }
    ],
    armyConnection: [
      {
        establishment: "Kumaon Regimental Centre Museum",
        description: "Museum showcasing the history of Kumaon Regiment",
        timing: "9:30 AM - 5:00 PM",
        entryFee: "Free",
        highlights: ["Military history", "War memorabilia", "Regimental artifacts"]
      },
      {
        establishment: "Army Golf Course",
        description: "Well-maintained golf course managed by Indian Army",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "For players only",
        highlights: ["Professional course", "Scenic setting", "Army hospitality"]
      },
      {
        establishment: "Military Cantonment",
        description: "Beautifully maintained army area with colonial buildings",
        timing: "Daylight hours",
        entryFee: "Restricted access",
        highlights: ["Colonial architecture", "Well-maintained roads", "Military precision"]
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry woolens throughout the year - evenings are chilly",
          "Rain protection essential during monsoon (July-September)",
          "Comfortable walking shoes for exploring hills",
          "Layered clothing for changing weather conditions"
        ]
      },
      {
        category: "Travel & Transportation",
        tips: [
          "Hire local taxis for convenience in hilly areas",
          "Public transport available but limited frequency",
          "Carry cash as many places don't accept cards",
          "Book accommodation in advance during peak season"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic medicines for motion sickness",
          "Stay hydrated but drink only bottled or purified water",
          "Be cautious while walking on steep roads",
          "Keep emergency contacts saved"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Respect local Kumaoni traditions and customs",
          "Dress modestly, especially in temples",
          "Ask permission before photographing local people",
          "Support local artisans by buying authentic handicrafts"
        ]
      },
      {
        category: "Environmental Care",
        tips: [
          "Do not litter in natural areas",
          "Avoid plastic usage",
          "Respect wildlife and forest areas",
          "Use eco-friendly products"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === ranikhetImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? ranikhetImages.length - 1 : prevIndex - 1
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
                src={ranikhetImages[currentImageIndex].url} 
                alt={ranikhetImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{ranikhetImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{ranikhetImages[currentImageIndex].description}</p>
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
                {ranikhetImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏔️ About Ranikhet - Queen's Meadow</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {ranikhetData.overview.content}
            </p>
            
            <div style={styles.legend}>
              <h3 style={{color: '#2E8B57', marginBottom: '10px'}}>🌿 Why Visit Ranikhet?</h3>
              <p>Ranikhet offers a perfect blend of natural beauty, colonial charm, and military discipline. Unlike many commercial hill stations, it maintains its peaceful ambiance with well-preserved forests, beautiful gardens, and stunning Himalayan views. The town's association with the Indian Army adds to its clean, organized, and safe environment, making it ideal for a relaxing getaway.</p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>March to June:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>September to November:</span> Clear skies, perfect for Himalayan views</p>
                <p><span style={styles.highlight}>December to February:</span> Winter, chilly with possible snowfall</p>
                <p><span style={styles.highlight}>July to August:</span> Monsoon, lush greenery but occasional rainfall</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Pantnagar Airport (110 km) - nearest airport</p>
                <p><span style={styles.highlight}>By Train:</span> Kathgodam Railway Station (75 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Delhi, Dehradun, Nainital</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Local buses, Auto-rickshaws</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Ranikhet Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Hill Station Experience</h4>
                  <p>How was your visit to Queen's Meadow?</p>
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
                  <h4>Natural Beauty & Scenery</h4>
                  <p>How breathtaking were the Himalayan views?</p>
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
                  <h4>Peace & Tranquility</h4>
                  <p>How peaceful and relaxing was your stay?</p>
                  {userRatings.peace ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.peace.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.peace.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'peace', type: 'Peaceful Experience' })}
                    >
                      Rate Tranquility
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Kumaoni Cuisine</h2>
            <div style={styles.grid}>
              {ranikhetData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Ranikhet</h2>
            <div style={styles.grid}>
              {ranikhetData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{item.category}</h3>
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
              {ranikhetData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {ranikhetData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{place.name}</h3>
                  <p>{place.description}</p>
                  <p><strong>Timing:</strong> {place.timing}</p>
                  <p><strong>Entry Fee:</strong> {place.entryFee}</p>
                  <p><strong>Best Time to Visit:</strong> {place.bestTime}</p>
                  <p><strong>Highlights:</strong> {place.highlights.join(', ')}</p>
                </div>
              ))}
            </div>

            <h2 style={{...styles.sectionTitle, marginTop: '50px'}}>⚔️ Army Connections</h2>
            <div style={styles.grid}>
              {ranikhetData.armyConnection.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{place.establishment}</h3>
                  <p>{place.description}</p>
                  <p><strong>Timing:</strong> {place.timing}</p>
                  <p><strong>Entry Fee:</strong> {place.entryFee}</p>
                  <p><strong>Highlights:</strong> {place.highlights.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'activities':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🚶 Activities & Experiences</h2>
            <div style={styles.grid}>
              {ranikhetData.activities.map((activity, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{activity.name}</h3>
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
              {ranikhetData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2E8B57', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police (Ranikhet):</strong> 05966-220100 | <strong>Hospital:</strong> 05966-220233</p>
              <p><strong>Tourist Information Center:</strong> 05966-220345</p>
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
        <h1 style={styles.title}>🏔️ Ranikhet</h1>
        <p style={styles.subtitle}>Queen's Meadow - Where Peace Meets the Himalayas</p>
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
                e.target.style.backgroundColor = '#3CB371';
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
            {tab === 'activities' && '🚶 Activities'}
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
        <p>© 2024 Ranikhet Travel Guide. Experience the Serenity of Queen's Meadow!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Jai Kumaon - Explore the Beautiful Hills of Uttarakhand
        </p>
      </div>
    </div>
  );
};

export default RanikhetTravelGuide;
