import React, { useState } from 'react';

const PuneTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Pune Images for Carousel
  const puneImages = [
    {
      url: "https://images.unsplash.com/photo-1715678710159-ee67d5bdba85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhbml3YXIlMjB3YWRhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Shaniwar Wada",
      description: "Historic fortification built by the Peshwa dynasty"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1694475157443-58938d0ff195?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdhJTIwa2hhbiUyMHBhbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Aga Khan Palace",
      description: "Historical palace and memorial to Mahatma Gandhi"
    },
    {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "JW Marriot ",
      description: "Ancient hill fortress with panoramic views"
    },
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#fff5f5',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      marginTop: '30px',
      padding: '30px',
      background: 'linear-gradient(135deg, #8B0000, #FF6B6B)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(139, 0, 0, 0.3)'
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
      backgroundColor: '#8B0000',
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
      color: '#8B0000',
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
      backgroundColor: '#fff0f0',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #FF6B6B',
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
      backgroundColor: '#8B0000',
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
      backgroundColor: '#fff0f0',
      borderRadius: '5px',
      borderLeft: '3px solid #FF6B6B'
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
      color: '#8B0000',
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
      backgroundColor: '#FF6B6B',
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
      backgroundColor: '#8B0000',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(139, 0, 0, 0.4)'
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
      color: '#8B0000',
      borderBottom: '3px solid #FF6B6B',
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
      backgroundColor: '#fff0f0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #FF6B6B',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 0, 0, 0.1)',
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
      color: '#8B0000',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#FF6B6B',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Pune Travel Data
  const puneData = {
    overview: {
      title: "Pune - Cultural Capital of Maharashtra",
      content: `Pune, known as the 'Oxford of the East' and 'Cultural Capital of Maharashtra', is a vibrant city that beautifully blends rich history with modern development. Located in the western state of Maharashtra, Pune sits at the confluence of the Mula and Mutha rivers. The city has a glorious history as the capital of the Maratha Empire under the Peshwas and is home to magnificent historical landmarks like Shaniwar Wada. Today, Pune is a major educational hub with numerous prestigious institutions, a growing IT sector, and a thriving automotive industry. The city's pleasant climate, rich cultural heritage, delicious Maharashtrian cuisine, and vibrant nightlife make it a popular destination for students, professionals, and tourists alike. Pune's unique charm lies in its ability to maintain traditional Marathi culture while embracing modernity.`
    },
    famousFoods: [
      {
        name: "Misal Pav",
        description: "Spicy curry made of sprouts topped with farsan, served with pav",
        place: "Bedekar Misal, Shri Krishna Bhuvan",
        price: "₹80-150",
        special: "Pune's signature breakfast dish"
      },
      {
        name: "Poha",
        description: "Flattened rice cooked with onions, potatoes, and spices",
        place: "Local breakfast joints, Street stalls",
        price: "₹30-60",
        special: "Light and healthy Maharashtrian breakfast"
      },
      {
        name: "Bakarwadi",
        description: "Spicy and sweet crispy snack from Chitale Bandhu",
        place: "Chitale Bandhu, Local sweet shops",
        price: "₹200-500",
        special: "Pune's most famous food souvenir"
      },
      {
        name: "Pithla Bhakri",
        description: "Traditional rural meal of gram flour curry with millet bread",
        place: "Traditional restaurants, Highway dhabas",
        price: "₹120-200",
        special: "Authentic Maharashtrian village food"
      },
      {
        name: "Vada Pav",
        description: "Deep-fried potato dumpling in bun with chutneys",
        place: "Joshi Wadewale, Street vendors",
        price: "₹15-30",
        special: "Mumbai's favorite, Pune's delight"
      }
    ],
    shopping: [
      {
        category: "Traditional Souvenirs",
        description: "Authentic Maharashtrian handicrafts and artifacts",
        places: ["Tulsi Baug", "Laxmi Road", "FC Road"],
        items: ["Paithani sarees", "Kolhapuri chappals", "Nath (nose rings)", "Copperware"],
        priceRange: "₹500 - ₹50,000",
        bestTime: "Evenings and weekends"
      },
      {
        category: "Modern Shopping",
        description: "Branded stores and shopping malls",
        places: ["Phoenix Marketcity", "Amanora Mall", "Seasons Mall"],
        items: ["Branded clothing", "Electronics", "Home decor", "Books"],
        priceRange: "₹1,000 - ₹1,00,000",
        bestTime: "All days"
      },
      {
        category: "Local Specialties",
        description: "Pune's unique food products and snacks",
        places: ["Chitale Bandhu", "Kayani Bakery", "Chitale's Mithaiwale"],
        items: ["Bakarwadi", "Shrewsbury biscuits", "Mango barfi", "Kharda"],
        priceRange: "₹100 - ₹2,000",
        bestTime: "Morning hours"
      },
      {
        category: "Street Shopping",
        description: "Bargain shopping and local markets",
        places: ["Juna Bazaar", "Bombay Bazaar", "MG Road"],
        items: ["Clothing", "Accessories", "Home items", "Antiques"],
        priceRange: "₹100 - ₹5,000",
        bestTime: "Sunday mornings"
      }
    ],
    stays: [
      {
        name: "JW Marriott Pune",
        type: "Luxury Hotel",
        price: "₹8,000-20,000/night",
        rating: "4.7/5",
        facilities: ["Swimming pool", "Spa", "Multiple restaurants", "Fitness center"],
        location: "Senapati Bapat Road",
        distance: "Central Pune"
      },
      {
        name: "Conrad Pune",
        type: "Business Luxury Hotel",
        price: "₹10,000-25,000/night",
        rating: "4.8/5",
        facilities: ["Rooftop pool", "Fine dining", "Business center", "Luxury spa"],
        location: "Mangaldas Road",
        distance: "Near Koregaon Park"
      },
      {
        name: "Ibis Pune",
        type: "Budget Business Hotel",
        price: "₹3,000-6,000/night",
        rating: "4.2/5",
        facilities: ["Comfortable rooms", "Restaurant", "WiFi", "Parking"],
        location: "Hinjewadi",
        distance: "IT Park area"
      },
      {
        name: "O Hotel",
        type: "Boutique Hotel",
        price: "₹5,000-12,000/night",
        rating: "4.5/5",
        facilities: ["Designer rooms", "Rooftop bar", "Spa", "Fine dining"],
        location: "Koregaon Park",
        distance: "Trendy neighborhood"
      },
      {
        name: "Backpacker Panda",
        type: "Hostel",
        price: "₹800-2,000/night",
        rating: "4.0/5",
        facilities: ["Dorm beds", "Common kitchen", "Game room", "Events"],
        location: "Kothrud",
        distance: "Student-friendly area"
      }
    ],
    places: [
      {
        name: "Shaniwar Wada",
        description: "Historic fortification built by Bajirao I in 1732",
        timing: "9:00 AM - 5:30 PM",
        entryFee: "₹25 for Indians, ₹300 for foreigners",
        bestTime: "Evening for light show",
        highlights: ["Historical palace", "Light and sound show", "Gardens", "Architecture"]
      },
      {
        name: "Aga Khan Palace",
        description: "Historical palace where Mahatma Gandhi was imprisoned",
        timing: "9:00 AM - 5:30 PM",
        entryFee: "₹20 for Indians, ₹300 for foreigners",
        bestTime: "Morning hours",
        highlights: ["Gandhi memorial", "Architecture", "Photography", "History"]
      },
      {
        name: "Sinhagad Fort",
        description: "Ancient hill fortress located 30km from Pune",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Early morning or late afternoon",
        highlights: ["Trekking", "Historical significance", "Views", "Photography"]
      },
      {
        name: "Dagdusheth Halwai Temple",
        description: "Famous temple dedicated to Lord Ganesha",
        timing: "6:00 AM - 10:30 PM",
        entryFee: "Free",
        bestTime: "Morning aarti or evening",
        highlights: ["Ganesh idol", "Festivals", "Spiritual experience", "Architecture"]
      },
      {
        name: "Rajiv Gandhi Zoo",
        description: "Also known as Katraj Snake Park, features diverse wildlife",
        timing: "9:30 AM - 5:30 PM",
        entryFee: "₹50 for adults, ₹25 for children",
        bestTime: "Weekday mornings",
        highlights: ["Snake park", "Animal enclosures", "Lake", "Bird watching"]
      },
      {
        name: "Osho Ashram",
        description: "International meditation resort in Koregaon Park",
        timing: "6:00 AM - 10:00 PM",
        entryFee: "₹970 for day visit (with prerequisites)",
        bestTime: "Meditation hours",
        highlights: ["Meditation", "Gardens", "Library", "Silence zones"]
      }
    ],
    precautions: [
      {
        category: "Transportation",
        tips: [
          "Use app-based cabs or auto-rickshaws with meters",
          "Avoid traveling during peak hours (9-11 AM, 6-8 PM)",
          "PMPML buses are economical but can be crowded",
          "Metro is available for certain routes"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Carry light woolens in winter (Nov-Feb)",
          "Umbrella or raincoat essential during monsoon (Jun-Sep)",
          "Light cotton clothes suitable for summer",
          "Comfortable walking shoes for fort visits"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Drink bottled or filtered water",
          "Carry basic medications for stomach upsets",
          "Be cautious with street food if you have sensitive stomach",
          "Keep emergency contacts handy"
        ]
      },
      {
        category: "Cultural Etiquette",
        tips: [
          "Dress modestly when visiting temples",
          "Remove footwear before entering religious places",
          "Ask permission before photographing people",
          "Respect local customs and traditions"
        ]
      },
      {
        category: "Shopping Tips",
        tips: [
          "Bargain in local markets but not in malls",
          "Check authenticity of traditional crafts",
          "Carry cash for street shopping",
          "Keep receipts for expensive purchases"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === puneImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? puneImages.length - 1 : prevIndex - 1
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
                src={puneImages[currentImageIndex].url} 
                alt={puneImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{puneImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{puneImages[currentImageIndex].description}</p>
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
                {puneImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏛️ About Pune - Cultural Capital</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {puneData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B0000', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to February:</span> Pleasant weather, ideal for sightseeing</p>
                <p><span style={styles.highlight}>March to May:</span> Summer, good for indoor activities</p>
                <p><span style={styles.highlight}>June to September:</span> Monsoon, lush greenery but rain</p>
                <p><span style={styles.highlight}>August:</span> Ganesh Chaturthi festival season</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B0000', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Pune International Airport (10 km from city)</p>
                <p><span style={styles.highlight}>By Train:</span> Pune Railway Station (Central location)</p>
                <p><span style={styles.highlight}>By Road:</span> Excellent highway connectivity from Mumbai</p>
                <p><span style={styles.highlight}>Local Transport:</span> Buses, auto-rickshaws, cabs, metro</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Pune Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Cultural Experience</h4>
                  <p>How was your cultural experience in Pune?</p>
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
                  <h4>Historical Sites</h4>
                  <p>How were the historical monuments and forts?</p>
                  {userRatings.historical ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.historical.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.historical.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'historical', type: 'Historical Sites' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Food Experience</h4>
                  <p>How was the local Maharashtrian cuisine?</p>
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Maharashtrian Cuisine</h2>
            <div style={styles.grid}>
              {puneData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Pune</h2>
            <div style={styles.grid}>
              {puneData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{item.category}</h3>
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
              {puneData.stays.map((stay, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{stay.name}</h3>
                  <p><strong>Type:</strong> {stay.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{stay.price}</span></p>
                  <p><strong>Rating:</strong> {stay.rating}</p>
                  <p><strong>Location:</strong> {stay.location}</p>
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
            <h2 style={styles.sectionTitle}>🏛️ Famous Historical & Cultural Spots</h2>
            <div style={styles.grid}>
              {puneData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{place.name}</h3>
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
              {puneData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Pune Police Control Room:</strong> 020-26123366 | <strong>Hospital:</strong> 020-26127333</p>
              <p><strong>Tourist Information:</strong> 020-26126867 | <strong>Railway Inquiry:</strong> 139</p>
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
        <h1 style={styles.title}>🏛️ Pune</h1>
        <p style={styles.subtitle}>Cultural Capital of Maharashtra | Oxford of the East</p>
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
                e.target.style.backgroundColor = '#FF6B6B';
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
        <p>© 2024 Pune Travel Guide. Experience the Cultural Capital of Maharashtra!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring Pune's rich heritage and modern charm
        </p>
      </div>
    </div>
  );
};

export default PuneTravelGuide;