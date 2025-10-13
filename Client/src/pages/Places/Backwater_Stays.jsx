import React, { useState } from 'react';

const AlleppeyTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Alleppey Images for Carousel
  const alleppeyImages = [
    {
      url: "https://media.istockphoto.com/id/177447843/photo/house-boat-in-backwaters.webp?a=1&b=1&s=612x612&w=0&k=20&c=-qor9710ge3GbC6MvV0Mp9AK4UxmzfcFxphG5L_xMXE=",
      title: "Backwaters of Alleppey",
      description: "Serene network of canals, lakes and lagoons - Venice of the East"
    },
    {
      url: "https://media.istockphoto.com/id/471988323/photo/india.webp?a=1&b=1&s=612x612&w=0&k=20&c=RVx3BjCK4oghitogZjx9BN-dn4RWiKH-4ghZJFWzsiw=",
      title: "Houseboat Experience",
      description: "Luxurious houseboats cruising through peaceful backwaters"
    },
    {
      url: "https://media.istockphoto.com/id/656511192/photo/kerala-india-vacation-in-exotic-country.webp?a=1&b=1&s=612x612&w=0&k=20&c=SKnpKc1Cimi03C7pisjo0ZAxz5r01nO5nxBgVdpJn3k=",
      title: "Alleppey Beach",
      description: "Pristine beach with historic pier and lighthouse"
    },
    {
      url: "https://media.istockphoto.com/id/657317806/photo/green-rice-fields-beside-kerala-backwaters-in-alleppey-kerala-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=4KNhXP-PQFxNc77O1RSVxC0wO-68kqdKRdMMfmc45_U=",
      title: "Paddy Fields",
      description: "Lush green rice fields stretching to the horizon"
    },
    {
      url: "https://media.istockphoto.com/id/471498081/photo/boat-on-indian-river.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ikln9fzf2oP0OOMaP4Nsk2xCFTzUJKP6CukSB6Oi4c0=",
      title: "Vembanad Lake",
      description: "Longest lake in India, heart of Kerala backwaters"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#f0fff8',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #006400, #228B22)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(0, 100, 0, 0.3)'
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
      backgroundColor: '#006400',
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
      color: '#006400',
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
      backgroundColor: '#f0fff8',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #228B22',
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
      backgroundColor: '#006400',
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
      backgroundColor: '#f0fff8',
      borderRadius: '5px',
      borderLeft: '3px solid #228B22'
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
      color: '#006400',
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
      backgroundColor: '#228B22',
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
      backgroundColor: '#006400',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(0, 100, 0, 0.4)'
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
      color: '#006400',
      borderBottom: '3px solid #228B22',
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
      backgroundColor: '#f0fff8',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #228B22',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 100, 0, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#006400',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#228B22',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Alleppey Travel Data
  const alleppeyData = {
    overview: {
      title: "Alleppey - Venice of the East",
      content: `Alleppey (Alappuzha), often called the 'Venice of the East', is a picturesque city in Kerala famous for its beautiful backwaters, houseboats, and pristine beaches. Located on the Malabar Coast, Alleppey is the gateway to Kerala's famous backwaters with over 900 km of canals, lakes, and lagoons. The city is renowned for its annual Nehru Trophy Boat Race, traditional houseboats, coir industry, and breathtaking natural beauty. Alleppey's unique geography with the Arabian Sea on the west and Vembanad Lake on the east makes it one of the most popular tourist destinations in India, offering a perfect blend of natural beauty, cultural heritage, and authentic Kerala experiences.`
    },
    famousFoods: [
      {
        name: "Karimeen Pollichathu",
        description: "Pearl spot fish marinated and grilled in banana leaf",
        place: "Houseboats, Local restaurants",
        price: "₹400-800",
        special: "Kerala's signature fish dish"
      },
      {
        name: "Appam with Stew",
        description: "Lacy rice pancakes with vegetable or meat stew",
        place: "Local eateries, Hotels",
        price: "₹120-250",
        special: "Traditional Kerala breakfast"
      },
      {
        name: "Puttu and Kadala",
        description: "Steamed rice cakes with black chickpea curry",
        place: "Breakfast joints, Street stalls",
        price: "₹60-120",
        special: "Classic Kerala morning meal"
      },
      {
        name: "Seafood Platter",
        description: "Fresh catch including prawns, crabs, and fish",
        place: "Beachside restaurants",
        price: "₹600-1500",
        special: "Fresh from Arabian Sea"
      },
      {
        name: "Kerala Sadya",
        description: "Traditional vegetarian feast served on banana leaf",
        place: "Special occasions, Temple festivals",
        price: "₹200-500",
        special: "Complete traditional meal"
      }
    ],
    shopping: [
      {
        category: "Coir Products",
        description: "Eco-friendly products made from coconut fiber",
        places: ["Coir emporiums", "Local markets", "Government shops"],
        items: ["Mats", "Baskets", "Wall hangings", "Doormats"],
        priceRange: "₹100 - ₹5,000",
        bestTime: "Year-round"
      },
      {
        category: "Spices",
        description: "Fresh Kerala spices and ayurvedic products",
        places: ["Spice markets", "Ayurvedic stores"],
        items: ["Cardamom", "Pepper", "Cinnamon", "Ayurvedic oils"],
        priceRange: "₹200 - ₹10,000",
        bestTime: "Winter season"
      },
      {
        category: "Handicrafts",
        description: "Traditional Kerala crafts and artifacts",
        places: ["Crafts emporium", "Beach road shops"],
        items: ["Wood carvings", "Brass lamps", "Kathakali masks"],
        priceRange: "₹500 - ₹20,000",
        bestTime: "Tourist season"
      },
      {
        category: "Cashew Nuts",
        description: "Fresh and processed cashews from Kerala",
        places: ["Local markets", "Specialty stores"],
        items: ["Roasted cashews", "Cashew butter", "Spiced cashews"],
        priceRange: "₹300 - ₹2,000",
        bestTime: "Harvest season"
      }
    ],
    hotels: [
      {
        name: "Punnamada Resort",
        type: "Luxury Backwater Resort",
        price: "₹8,000-25,000/night",
        rating: "4.7/5",
        facilities: ["Backwater view", "Ayurveda spa", "Pool", "Private houseboat"],
        location: "Punnamada",
        distance: "On backwaters"
      },
      {
        name: "Sterling Lake Palace",
        type: "Luxury Lake Resort",
        price: "₹6,000-18,000/night",
        rating: "4.5/5",
        facilities: ["Lake view", "Spa", "Swimming pool", "Cultural programs"],
        location: "Punnamada",
        distance: "On Vembanad Lake"
      },
      {
        name: "Ramada Alleppey",
        type: "5-Star Hotel",
        price: "₹5,000-15,000/night",
        rating: "4.3/5",
        facilities: ["Multiple restaurants", "Pool", "Fitness center", "Banquet"],
        location: "Beach Road",
        distance: "1 km from beach"
      },
      {
        name: "Tharavadu Heritage",
        type: "Heritage Homestay",
        price: "₹2,500-6,000/night",
        rating: "4.2/5",
        facilities: ["Traditional meals", "Cultural experience", "Garden", "Boat rides"],
        location: "Backwaters",
        distance: "Access to backwaters"
      },
      {
        name: "Zostel Alleppey",
        type: "Budget Hostel",
        price: "₹500-1,500/night",
        rating: "3.9/5",
        facilities: ["Dormitory", "Common area", "Bike rental", "Tour desk"],
        location: "City Center",
        distance: "2 km from backwaters"
      }
    ],
    places: [
      {
        name: "Alleppey Backwaters",
        description: "Network of canals, rivers and lakes - Venice of the East",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Houseboat ₹5,000-20,000, Shikara ₹1,000-3,000",
        bestTime: "Early morning or sunset",
        highlights: ["Houseboat cruise", "Village life", "Paddy fields", "Bird watching"]
      },
      {
        name: "Vembanad Lake",
        description: "Longest lake in India, hub of backwater tourism",
        timing: "All day",
        entryFee: "Free (Boat rides extra)",
        bestTime: "Sunset",
        highlights: ["Boat races", "Fishing", "Sunset views", "Bird sanctuary"]
      },
      {
        name: "Alleppey Beach",
        description: "Pristine beach with 150-year-old pier and lighthouse",
        timing: "All day",
        entryFee: "Free",
        bestTime: "Early morning or evening",
        highlights: ["Pier", "Lighthouse", "Beach activities", "Sunset"]
      },
      {
        name: "Krishnapuram Palace",
        description: "18th-century palace with Kerala architecture and mural",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹10 (Indians), ₹50 (Foreigners)",
        bestTime: "Morning hours",
        highlights: ["Gajendra Moksham mural", "Museum", "Architecture", "Gardens"]
      },
      {
        name: "Ambalapuzha Temple",
        description: "Famous Krishna temple known for Palpayasam",
        timing: "5:00 AM - 12:00 PM, 5:00 PM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning or evening",
        highlights: ["Traditional architecture", "Palpayasam", "Festivals", "Cultural significance"]
      },
      {
        name: "Pathiramanal Island",
        description: "Beautiful island in Vembanad Lake, bird watcher's paradise",
        timing: "Daylight hours",
        entryFee: "Boat charges apply",
        bestTime: "Morning for bird watching",
        highlights: ["Migratory birds", "Nature walk", "Photography", "Serene environment"]
      }
    ],
    precautions: [
      {
        category: "Houseboat Experience",
        tips: [
          "Book houseboats through registered operators",
          "Carry mosquito repellent",
          "Confirm meal inclusions in package",
          "Check safety equipment on board"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Light cotton clothes recommended",
          "Carry rain protection during monsoon",
          "Sunscreen and hats essential",
          "Comfortable footwear for walking"
        ]
      },
      {
        category: "Transport & Travel",
        tips: [
          "Pre-book houseboats in peak season",
          "Use registered boat operators",
          "Bargain for Shikara boat rides",
          "Keep hotel contact details handy"
        ]
      },
      {
        category: "Food & Water",
        tips: [
          "Drink bottled water only",
          "Try local seafood from clean establishments",
          "Carry basic medications",
          "Inform about food allergies"
        ]
      },
      {
        category: "General Safety",
        tips: [
          "Respect local customs and traditions",
          "Be cautious while swimming",
          "Keep valuables secure",
          "Save emergency contacts"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === alleppeyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? alleppeyImages.length - 1 : prevIndex - 1
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
                src={alleppeyImages[currentImageIndex].url} 
                alt={alleppeyImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{alleppeyImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{alleppeyImages[currentImageIndex].description}</p>
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
                {alleppeyImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🌴 About Alleppey - Venice of the East</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {alleppeyData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#006400', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>September to March:</span> Pleasant weather, ideal for backwaters</p>
                <p><span style={styles.highlight}>November to February:</span> Cool winter, perfect for houseboats</p>
                <p><span style={styles.highlight}>April to June:</span> Summer, good for beach activities</p>
                <p><span style={styles.highlight}>June to August:</span> Monsoon, lush greenery but humid</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#006400', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Cochin International Airport (85 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Alleppey Railway Station (well connected)</p>
                <p><span style={styles.highlight}>By Road:</span> Excellent road connectivity via NH66</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis, Boats</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Alleppey Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Backwater Experience</h4>
                  <p>How was your visit to Alleppey?</p>
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
                  <h4>Houseboat Experience</h4>
                  <p>How was your backwater cruise?</p>
                  {userRatings.houseboat ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.houseboat.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.houseboat.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'houseboat', type: 'Houseboat' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Kerala Food Experience</h4>
                  <p>How was the local cuisine?</p>
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
                      onClick={() => handleRateClick({ name: 'food', type: 'Kerala Food' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Kerala Cuisine</h2>
            <div style={styles.grid}>
              {alleppeyData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Alleppey</h2>
            <div style={styles.grid}>
              {alleppeyData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{item.category}</h3>
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
              {alleppeyData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🌴 Famous Places to Visit</h2>
            <div style={styles.grid}>
              {alleppeyData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{place.name}</h3>
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
              {alleppeyData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#006400', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police:</strong> 0477-2252266 | <strong>Hospital:</strong> 0477-2262222</p>
              <p><strong>Tourist Information Center:</strong> 0477-2253308</p>
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
        <h1 style={styles.title}>🌴 Alleppey</h1>
        <p style={styles.subtitle}>Venice of the East - Backwater Paradise</p>
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
                e.target.style.backgroundColor = '#228B22';
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
            {tab === 'places' && '🌴 Places'}
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
        <p>© 2024 Alleppey Travel Guide. Experience the Backwater Paradise!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the wonders of Kerala
        </p>
      </div>
    </div>
  );
};

export default AlleppeyTravelGuide;
