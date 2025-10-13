import React, { useState } from 'react';

const RameswaramTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Rameswaram Images for Carousel
  const rameswaramImages = [
    {
      url: "https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFtYW5hdGhhc3dhbXklMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
      title: "Ramanathaswamy Temple",
      description: "One of the twelve Jyotirlinga temples with magnificent corridors"
    },
    {
      url: "https://media.istockphoto.com/id/1184626877/photo/south-indian-beach-blue-shot-from-the-pamban-road-bridge-of-rameswaram-connecting-dhanushkodi.webp?a=1&b=1&s=612x612&w=0&k=20&c=K7N7K1UbHPpYZSlvyt3yRyKetmOVzL9iB3mLprEFUAQ=",
      title: "Pamban Bridge",
      description: "India's first sea bridge connecting Rameswaram to mainland"
    },
    {
      url: "https://media.istockphoto.com/id/2200798244/photo/closeup-view-of-dhanushkodi-via-drone-image-of-tamil-nadu-india-its-in-the-ramanathapuram.webp?a=1&b=1&s=612x612&w=0&k=20&c=J1svLNsK2WNgZtcb-JcQ3SZ90BKvkPAArhr2oE_pnCQ=",
      title: "Dhanushkodi",
      description: "Ghost town at the southern tip of India with pristine beaches"
    },
    {
      url: "https://media.istockphoto.com/id/1760931095/photo/gate-at-entrance-to-ramagiri.webp?a=1&b=1&s=612x612&w=0&k=20&c=hpb97_2k3H8rDenjlkb-ar9D7rcGoTOE3vjBhXl1b6g=",
      title: "Agnitheertham",
      description: "Sacred beach where pilgrims take holy dips"
    },
    {
      url: "https://media.istockphoto.com/id/2200798405/photo/scenic-aerial-image-of-the-pamban-bridge-at-sunrise-as-the-golden-hues-reflect-over-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=4FyuOKif19F3EHhVtiO_fJKac8Ab0qKxPBt2SlzA3lY=",
      title: "Coastal Beauty",
      description: "Stunning coastal landscapes and turquoise waters"
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
      background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(30, 60, 114, 0.3)'
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
      backgroundColor: '#1e3c72',
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
      color: '#1e3c72',
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
      border: '2px solid #2a5298',
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
      backgroundColor: '#1e3c72',
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
      borderLeft: '3px solid #2a5298'
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
      color: '#1e3c72',
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
      backgroundColor: '#2a5298',
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
      backgroundColor: '#1e3c72',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(30, 60, 114, 0.4)'
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
      color: '#1e3c72',
      borderBottom: '3px solid #2a5298',
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
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #2a5298',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(30, 60, 114, 0.1)',
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
      color: '#1e3c72',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#2a5298',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    },
    legend: {
      backgroundColor: '#f0f8ff',
      padding: '15px',
      borderRadius: '8px',
      margin: '20px 0',
      borderLeft: '4px solid #1e3c72'
    }
  };

  // Rameswaram Travel Data
  const rameswaramData = {
    overview: {
      title: "Rameswaram - The Sacred Island of Spiritual Significance",
      content: `Rameswaram, located on Pamban Island in Tamil Nadu, is one of the holiest places in Hinduism and forms part of the Char Dham pilgrimage. This sacred town is famous for the Ramanathaswamy Temple, one of the twelve Jyotirlinga temples dedicated to Lord Shiva. According to Hindu mythology, Lord Rama built a bridge (Ram Setu) from Rameswaram to Lanka to rescue his wife Sita. The town is surrounded by the Bay of Bengal and Indian Ocean, offering pristine beaches and a unique coastal landscape. Rameswaram is also known for its 22 sacred wells (Theerthams) within the temple complex, each with water of different taste and medicinal properties. The combination of spiritual significance, architectural marvels, and natural beauty makes Rameswaram a must-visit destination for pilgrims and tourists alike.`
    },
    famousFoods: [
      {
        name: "Chettinad Fish Curry",
        description: "Spicy coastal fish preparation with traditional Tamil spices",
        place: "Local restaurants, Beach shacks",
        price: "₹300-600",
        special: "Signature Tamil coastal dish"
      },
      {
        name: "Meen Kuzhambu",
        description: "Traditional Tamil fish curry with tamarind base",
        place: "Local eateries, Temple area restaurants",
        price: "₹250-500",
        special: "Authentic Tamil fish preparation"
      },
      {
        name: "South Indian Thali",
        description: "Complete meal with rice, sambar, rasam, vegetables and curd",
        place: "Vegetarian hotels, Temple prasadam",
        price: "₹150-300",
        special: "Traditional Tamil complete meal"
      },
      {
        name: "Pazham Pori",
        description: "Banana fritters - ripe banana coated in flour and deep fried",
        place: "Street vendors, Local tea shops",
        price: "₹50-100",
        special: "Popular Tamil snack"
      },
      {
        name: "Filter Coffee",
        description: "Traditional South Indian filter coffee",
        place: "Local tea stalls, Restaurants",
        price: "₹20-50",
        special: "Classic Tamil beverage"
      }
    ],
    shopping: [
      {
        category: "Religious Items",
        description: "Pooja items and spiritual souvenirs",
        places: ["Temple street", "Main bazaar", "Near temple entrance"],
        items: ["Rudraksha malas", "Sandalwood items", "Religious books", "Pooja kits"],
        priceRange: "₹100 - ₹5,000",
        bestTime: "Year-round"
      },
      {
        category: "Sea Shell Items",
        description: "Beautiful sea shell crafts and decorations",
        places: ["Beach shops", "Local markets", "Dhanushkodi area"],
        items: ["Shell jewelry", "Shell decorations", "Wind chimes", "Photo frames"],
        priceRange: "₹50 - ₹2,000",
        bestTime: "Tourist season"
      },
      {
        category: "Textiles & Clothing",
        description: "Traditional Tamil fabrics and garments",
        places: ["Local markets", "Handloom stores"],
        items: ["Kanjeevaram silk", "Cotton veshtis", "Traditional jewelry", "Sarees"],
        priceRange: "₹500 - ₹20,000",
        bestTime: "Festival season"
      },
      {
        category: "Local Produce",
        description: "Tamil spices and food items",
        places: ["Local markets", "Spice shops"],
        items: ["Tamil spices", "Pickles", "Traditional sweets", "Banana chips"],
        priceRange: "₹100 - ₹1,500",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Hyatt Place Rameswaram",
        type: "Luxury Hotel",
        price: "₹8,000-15,000/night",
        rating: "4.5/5",
        facilities: ["AC rooms", "Swimming pool", "Multi-cuisine restaurant", "Spa"],
        location: "Beach Road",
        distance: "2 km from temple"
      },
      {
        name: "GRT Temple Bay",
        type: "Beach Resort",
        price: "₹6,000-12,000/night",
        rating: "4.3/5",
        facilities: ["Beach view", "Pool", "Restaurant", "Ayurvedic center"],
        location: "East Coast Road",
        distance: "3 km from temple"
      },
      {
        name: "Hotel Royal Park",
        type: "Mid-range Hotel",
        price: "₹3,000-7,000/night",
        rating: "4.0/5",
        facilities: ["AC rooms", "Restaurant", "Travel desk", "Parking"],
        location: "Temple Street",
        distance: "500 m from temple"
      },
      {
        name: "TTDC Hotel Tamil Nadu",
        type: "Budget Government Hotel",
        price: "₹1,500-4,000/night",
        rating: "3.8/5",
        facilities: ["Basic rooms", "Restaurant", "Tour booking", "Safe location"],
        location: "Near Bus Stand",
        distance: "1 km from temple"
      },
      {
        name: "Sri Saravana Lodge",
        type: "Budget Pilgrim Accommodation",
        price: "₹800-2,000/night",
        rating: "3.5/5",
        facilities: ["Basic amenities", "Food service", "Temple proximity"],
        location: "Temple area",
        distance: "200 m from temple"
      }
    ],
    temples: [
      {
        name: "Ramanathaswamy Temple",
        description: "One of the 12 Jyotirlinga temples with longest temple corridors",
        timing: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM",
        entryFee: "Free (Special darshan: ₹50-200)",
        bestTime: "Early morning",
        highlights: ["22 Sacred wells", "Long corridors", "Jyotirlinga", "Architecture"]
      },
      {
        name: "Kothandaramaswamy Temple",
        description: "Temple at Dhanushkodi where Rama performed Vibhishana's coronation",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Sunrise or Sunset",
        highlights: ["Seaside location", "Historical significance", "Peaceful atmosphere"]
      },
      {
        name: "Panchamukhi Hanuman Temple",
        description: "Unique temple with five-faced Hanuman idol",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Five-faced Hanuman", "Floating stone", "Spiritual energy"]
      },
      {
        name: "Gandhamadhana Parvatham",
        description: "Hillock with Rama's footprints in a small temple",
        timing: "6:00 AM - 7:00 PM",
        entryFee: "Free",
        bestTime: "Evening",
        highlights: ["Rama's footprints", "Panoramic view", "Hill temple"]
      }
    ],
    beaches: [
      {
        name: "Dhanushkodi Beach",
        description: "Ghost town beach where Bay of Bengal meets Indian Ocean",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Sangam of seas", "Ghost town ruins", "Pristine beauty"]
      },
      {
        name: "Agnitheertham",
        description: "Sacred beach where pilgrims take holy dip before temple visit",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Sunrise",
        highlights: ["Holy dip", "Temple proximity", "Spiritual significance"]
      },
      {
        name: "Olaikuda Beach",
        description: "Beautiful coral beach ideal for swimming and relaxation",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Evening",
        highlights: ["Coral formations", "Clean water", "Less crowded"]
      },
      {
        name: "Kushi Beach",
        description: "Serene beach named after Sita's hair ornament",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Sunset",
        highlights: ["Mythological significance", "Peaceful", "Photography"]
      }
    ],
    places: [
      {
        name: "Pamban Bridge",
        description: "India's first sea bridge with spectacular views",
        timing: "24 hours (Check train schedule)",
        entryFee: "Free (Train ticket required)",
        bestTime: "Daylight hours",
        highlights: ["Engineering marvel", "Sea views", "Photography", "Train journey"]
      },
      {
        name: "APJ Abdul Kalam Memorial",
        description: "Memorial dedicated to India's Missile Man",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning or Evening",
        highlights: ["Inspirational", "Educational", "Beautiful location"]
      },
      {
        name: "Ram Setu View Point",
        description: "Viewpoint to see Adam's Bridge (Ram Setu)",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Clear day",
        highlights: ["Mythological significance", "Natural wonder", "Photography"]
      },
      {
        name: "Villondi Theertham",
        description: "Natural spring where Rama shot arrow to get water",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Sweet water in sea", "Mythological importance", "Unique phenomenon"]
      }
    ],
    travelInfo: [
      {
        type: "By Train",
        description: "Scenic train journey over Pamban Bridge",
        duration: "From Chennai: 12-14 hours",
        cost: "₹300-2,000 depending on class",
        advantages: ["Beautiful sea bridge crossing", "Comfortable", "Direct connectivity"],
        booking: "Indian Railways website or app"
      },
      {
        type: "By Road",
        description: "Road trip through coastal Tamil Nadu",
        duration: "From Chennai: 10-12 hours",
        cost: "₹2,000-5,000 by car",
        advantages: ["Flexible stops", "Coastal views", "Personal vehicle"],
        booking: "Self-drive or hired taxi"
      },
      {
        type: "By Air",
        description: "Nearest airport with connecting road journey",
        duration: "Flight + Road: 4-5 hours total",
        cost: "₹3,000-8,000",
        advantages: ["Fastest option", "Comfortable", "Multiple airlines"],
        booking: "Flight to Madurai + taxi to Rameswaram"
      }
    ],
    precautions: [
      {
        category: "Temple Etiquette",
        tips: [
          "Dress modestly - shoulders and knees covered",
          "Remove footwear before entering temple premises",
          "Follow temple rules and priest instructions",
          "Maintain silence in sanctum sanctorum"
        ]
      },
      {
        category: "Beach Safety",
        tips: [
          "Swim only in designated safe areas",
          "Beware of strong currents",
          "Don't venture too deep into water",
          "Follow lifeguard instructions"
        ]
      },
      {
        category: "General Safety",
        tips: [
          "Carry water and stay hydrated",
          "Use sunscreen and hats",
          "Keep valuables secure",
          "Respect local customs and traditions"
        ]
      },
      {
        category: "Travel Planning",
        tips: [
          "Book accommodation in advance during peak season",
          "Carry cash as digital payments may not be accepted everywhere",
          "Check weather conditions before planning beach visits",
          "Carry necessary medications"
        ]
      },
      {
        category: "Cultural Respect",
        tips: [
          "Respect religious sentiments",
          "Ask permission before photography in temples",
          "Don't litter on beaches or temple premises",
          "Support local artisans and businesses"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === rameswaramImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? rameswaramImages.length - 1 : prevIndex - 1
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
                src={rameswaramImages[currentImageIndex].url} 
                alt={rameswaramImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{rameswaramImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{rameswaramImages[currentImageIndex].description}</p>
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
                {rameswaramImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🛕 About Rameswaram - The Sacred Island</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {rameswaramData.overview.content}
            </p>
            
            <div style={styles.legend}>
              <h3 style={{color: '#1e3c72', marginBottom: '10px'}}>🌊 Why Visit Rameswaram?</h3>
              <p>Rameswaram offers a unique blend of spiritual significance, mythological history, and natural coastal beauty. As one of the Char Dham pilgrimage sites, it attracts millions of devotees seeking spiritual blessings. The town's geographical location on an island provides stunning beaches, while its rich mythology connected to the Ramayana makes it culturally significant. The architectural marvel of Ramanathaswamy Temple and the engineering wonder of Pamban Bridge add to its appeal.</p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to March:</span> Pleasant weather, ideal for temple visits and beaches</p>
                <p><span style={styles.highlight}>November to February:</span> Peak season, comfortable climate</p>
                <p><span style={styles.highlight}>April to June:</span> Hot but manageable for temple visits</p>
                <p><span style={styles.highlight}>July to September:</span> Monsoon, fewer crowds but beach visits limited</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Train:</span> Direct trains to Rameswaram over Pamban Bridge</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Madurai, Chennai, other cities</p>
                <p><span style={styles.highlight}>By Air:</span> Madurai Airport (174 km) - nearest airport</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis, Buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Rameswaram Experience</h3>
              <p>Share your spiritual journey and help other pilgrims</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Spiritual Experience</h4>
                  <p>How was your pilgrimage experience?</p>
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
                  <h4>Temple Visit</h4>
                  <p>How amazing was your temple darshan?</p>
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
                      onClick={() => handleRateClick({ name: 'temple', type: 'Temple Visit' })}
                    >
                      Rate Temple Experience
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Beach & Natural Beauty</h4>
                  <p>How beautiful were the coastal landscapes?</p>
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
                      Rate Coastal Beauty
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Tamil Cuisine</h2>
            <div style={styles.grid}>
              {rameswaramData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Rameswaram</h2>
            <div style={styles.grid}>
              {rameswaramData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{item.category}</h3>
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
            <h2 style={styles.sectionTitle}>🏨 Hotels & Pilgrim Accommodation</h2>
            <div style={styles.grid}>
              {rameswaramData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{hotel.name}</h3>
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

      case 'safari':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🛕 Temples & Spiritual Sites</h2>
            
            <div style={styles.grid}>
              {rameswaramData.temples.map((temple, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{temple.name}</h3>
                  <p><strong>Description:</strong> {temple.description}</p>
                  <p><strong>Timing:</strong> {temple.timing}</p>
                  <p><strong>Entry Fee:</strong> {temple.entryFee}</p>
                  <p><strong>Best Time to Visit:</strong> {temple.bestTime}</p>
                  <p><strong>Highlights:</strong> {temple.highlights.join(', ')}</p>
                </div>
              ))}
            </div>

            <h3 style={{color: '#1e3c72', marginBottom: '20px', marginTop: '40px', fontSize: '1.5rem'}}>Travel Information</h3>
            <div style={styles.grid}>
              {rameswaramData.travelInfo.map((info, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{info.type}</h3>
                  <p><strong>Description:</strong> {info.description}</p>
                  <p><strong>Duration:</strong> {info.duration}</p>
                  <p><strong>Cost:</strong> <span style={styles.price}>{info.cost}</span></p>
                  <p><strong>Advantages:</strong> {info.advantages.join(', ')}</p>
                  <p><strong>Booking:</strong> {info.booking}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'wildlife':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏖️ Beaches & Natural Attractions</h2>
            <div style={styles.grid}>
              {rameswaramData.beaches.map((beach, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{beach.name}</h3>
                  <p><strong>Description:</strong> {beach.description}</p>
                  <p><strong>Timing:</strong> {beach.timing}</p>
                  <p><strong>Entry Fee:</strong> {beach.entryFee}</p>
                  <p><strong>Best Time to Visit:</strong> {beach.bestTime}</p>
                  <p><strong>Highlights:</strong> {beach.highlights.join(', ')}</p>
                </div>
              ))}
            </div>

            <h3 style={{color: '#1e3c72', marginBottom: '20px', marginTop: '40px', fontSize: '1.5rem'}}>Other Places to Visit</h3>
            <div style={styles.grid}>
              {rameswaramData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{place.name}</h3>
                  <p><strong>Description:</strong> {place.description}</p>
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
              {rameswaramData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e3c72', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Ramanathaswamy Temple Office:</strong> 04573-221223</p>
              <p><strong>Local Hospital:</strong> 04573-221474 | <strong>Tourist Information:</strong> 04573-221223</p>
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
        <h1 style={styles.title}>🛕 Rameswaram</h1>
        <p style={styles.subtitle}>The Sacred Island of Spiritual Significance - Where Faith Meets the Sea</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'shopping', 'hotels', 'safari', 'wildlife', 'precautions'].map(tab => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = '#2a5298';
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
            {tab === 'safari' && '🛕 Temples'}
            {tab === 'wildlife' && '🏖️ Beaches'}
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
        <p>© 2024 Rameswaram Travel Guide. Experience the Spiritual Essence of Southern India!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Preserve Our Sacred Heritage - Respect Local Customs and Environment
        </p>
      </div>
    </div>
  );
};

export default RameswaramTravelGuide;
