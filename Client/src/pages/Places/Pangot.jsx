import React, { useState } from 'react';

const PangotTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Pangot Images for Carousel
  const pangotImages = [
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpbWFsYXlhbiUyMGJpcmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Bird Watching Paradise",
      description: "Home to over 580 species of Himalayan birds"
    },
    {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZ290JTIwaGltYWxheWFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Himalayan Views",
      description: "Breathtaking views of Trishul and Nanda Devi peaks"
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9ha2ZvcmVzdCUyMHBhbmdvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Oak and Rhododendron Forests",
      description: "Dense forests with rich biodiversity and trekking trails"
    },
    {
      url: "https://images.unsplash.com/photo-1579033064562-6d4ab36fdf6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGltYWxheWFuJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Quiet Village Life",
      description: "Peaceful mountain village with traditional Kumaoni culture"
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpcmQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Colorful Himalayan Birds",
      description: "Spot exotic species like Khalij Pheasant and Cheer Pheasant"
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
      marginBottom: '40px',
      marginTop: '30px',
      padding: '30px',
      background: 'linear-gradient(135deg, #228B22, #32CD32)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(34, 139, 34, 0.3)'
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
      backgroundColor: '#228B22',
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
      marginTop: '20px'
    },
    section: {
      marginBottom: '40px',
      marginTop: '20px'
    },
    sectionTitle: {
      color: '#228B22',
      borderBottom: '3px solid #32CD32',
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
      backgroundColor: '#f0fff0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #32CD32',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(34, 139, 34, 0.1)',
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
    }
  };

  // Pangot Travel Data
  const pangotData = {
    overview: {
      title: "Pangot - Bird Watching Paradise in Kumaon Himalayas",
      content: `Pangot is a picturesque Himalayan village nestled in the Kumaon hills of Uttarakhand, situated at an altitude of 6,300 feet. Located just 15 kilometers from the popular hill station of Nainital, Pangot is renowned as one of India's premier bird watching destinations. This tranquil village is home to over 580 species of birds, including exotic Himalayan species like the Khalij Pheasant, Cheer Pheasant, Rufous-bellied Woodpecker, and various species of eagles and vultures. Surrounded by dense oak and rhododendron forests, Pangot offers breathtaking views of the snow-capped Himalayan peaks including Trishul and Nanda Devi. The village provides a perfect escape from city life with its serene environment, pleasant climate, and opportunities for nature walks, bird photography, and trekking. Pangot is an ideal destination for ornithologists, nature lovers, and anyone seeking peace in the lap of the Himalayas.`
    },
    famousFoods: [
      {
        name: "Kumaoni Thali",
        description: "Traditional meal with local Kumaoni dishes",
        place: "Homestays, Local dhabas",
        price: "₹200-400",
        special: "Authentic mountain cuisine experience"
      },
      {
        name: "Bhatt Ki Churkani",
        description: "Black soybean curry with rice",
        place: "Local eateries, Homestays",
        price: "₹150-250",
        special: "Protein-rich traditional Kumaoni dish"
      },
      {
        name: "Aloo Ke Gutke",
        description: "Spicy roasted potatoes with local spices",
        place: "Roadside stalls, Local cafes",
        price: "₹80-150",
        special: "Popular Kumaoni snack"
      },
      {
        name: "Singodi",
        description: "Traditional sweet made with khoya and coconut",
        place: "Local sweet shops, Homestays",
        price: "₹50-100",
        special: "Authentic Kumaoni sweet"
      },
      {
        name: "Local Herbal Tea",
        description: "Mountain tea with local herbs",
        place: "Tea stalls, Homestays",
        price: "₹20-40",
        special: "Fresh mountain herbs and spices"
      }
    ],
    shopping: [
      {
        category: "Local Handicrafts",
        description: "Traditional Kumaoni crafts and woolen items",
        places: ["Local village shops", "Nainital markets"],
        items: ["Woolen caps", "Handmade shawls", "Local pottery", "Wooden crafts"],
        priceRange: "₹200 - ₹3,000",
        bestTime: "Year-round"
      },
      {
        category: "Organic Produce",
        description: "Fresh organic fruits and local products",
        places: ["Village markets", "Local farms"],
        items: ["Local honey", "Organic vegetables", "Herbal products", "Fresh fruits"],
        priceRange: "₹100 - ₹1,500",
        bestTime: "Seasonal availability"
      },
      {
        category: "Bird Watching Equipment",
        description: "Optics and birding accessories",
        places: ["Specialty stores in Nainital"],
        items: ["Binoculars", "Bird guides", "Cameras", "Field notebooks"],
        priceRange: "₹1,000 - ₹50,000",
        bestTime: "Birding season"
      },
      {
        category: "Local Artifacts",
        description: "Traditional Kumaoni artifacts",
        places: ["Village cooperatives", "Local artisans"],
        items: ["Brass items", "Copperware", "Traditional jewelry", "Handloom"],
        priceRange: "₹150 - ₹5,000",
        bestTime: "Tourist season"
      }
    ],
    stays: [
      {
        name: "Pangot Nature Camp",
        type: "Eco-friendly Resort",
        price: "₹3,000-8,000/night",
        rating: "4.5/5",
        facilities: ["Bird watching tours", "Nature walks", "Restaurant", "Bonfire"],
        location: "Pangot",
        distance: "In the heart of birding area"
      },
      {
        name: "The Himalayan Orchard",
        type: "Boutique Homestay",
        price: "₹2,500-6,000/night",
        rating: "4.3/5",
        facilities: ["Organic garden", "Home-cooked food", "Guided walks", "Mountain views"],
        location: "Pangot",
        distance: "Surrounded by forests"
      },
      {
        name: "Birders Inn",
        type: "Bird Watching Lodge",
        price: "₹4,000-10,000/night",
        rating: "4.6/5",
        facilities: ["Expert guides", "Library", "Telescopes", "Photography help"],
        location: "Pangot",
        distance: "Prime birding location"
      },
      {
        name: "Oakwood Retreat",
        type: "Mountain Resort",
        price: "₹5,000-12,000/night",
        rating: "4.4/5",
        facilities: ["Spa", "Restaurant", "Trekking", "Yoga sessions"],
        location: "Near Pangot",
        distance: "2 km from village"
      },
      {
        name: "Budget Homestays",
        type: "Economy Accommodation",
        price: "₹1,000-3,000/night",
        rating: "3.8/5",
        facilities: ["Basic rooms", "Home-cooked meals", "Local experience"],
        location: "Pangot village",
        distance: "Various locations"
      }
    ],
    places: [
      {
        name: "Pangot Bird Sanctuary",
        description: "Prime bird watching area with diverse avian population",
        timing: "Early morning and late evening",
        entryFee: "Free (Guide charges extra)",
        bestTime: "October to April",
        highlights: ["580+ bird species", "Nature trails", "Photography", "Guided tours"]
      },
      {
        name: "Kilbury Bird Sanctuary",
        description: "High-altitude sanctuary near Pangot",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹50 per person",
        bestTime: "Morning hours",
        highlights: ["Rare pheasants", "Oak forests", "Trekking", "Himalayan views"]
      },
      {
        name: "Nainital Lake",
        description: "Famous lake town near Pangot",
        timing: "Open all day",
        entryFee: "Free (Activities extra)",
        bestTime: "Year-round",
        highlights: ["Boating", "Shopping", "Cable car", "Naina Devi Temple"]
      },
      {
        name: "Snow View Point",
        description: "Panoramic views of Himalayan peaks",
        timing: "Sunrise to Sunset",
        entryFee: "Cable car: ₹200-400",
        bestTime: "Clear weather days",
        highlights: ["Himalayan ranges", "Photography", "Cable car ride", "Sunrise views"]
      },
      {
        name: "Cave Garden",
        description: "Natural and artificial caves in Nainital",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹50 per person",
        bestTime: "Daytime",
        highlights: ["Rock formations", "Adventure", "Photography", "Nature"]
      },
      {
        name: "Tiffin Top",
        description: "Famous viewpoint offering 360-degree views",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free (Trekking/horse ride extra)",
        bestTime: "Morning",
        highlights: ["Panoramic views", "Trekking", "Photography", "Peaceful environment"]
      }
    ],
    precautions: [
      {
        category: "Bird Watching",
        tips: [
          "Carry binoculars and bird identification guides",
          "Wear camouflage or earth-toned clothing",
          "Maintain silence and move slowly",
          "Hire local guides for better bird spotting"
        ]
      },
      {
        category: "Weather & Clothing",
        tips: [
          "Carry warm clothes even in summer",
          "Waterproof jackets during monsoon",
          "Comfortable trekking shoes",
          "Layered clothing for changing temperatures"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry basic first aid and medications",
          "Stay hydrated at high altitude",
          "Inform someone about your trekking plans",
          "Carry emergency contacts"
        ]
      },
      {
        category: "Environmental Care",
        tips: [
          "Do not disturb wildlife or birds",
          "Carry back all waste",
          "Stay on marked trails",
          "Avoid plastic and use reusable items"
        ]
      },
      {
        category: "Photography Etiquette",
        tips: [
          "Use telephoto lenses for bird photography",
          "Avoid flash photography near birds",
          "Respect privacy of local communities",
          "Follow guide's instructions"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === pangotImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? pangotImages.length - 1 : prevIndex - 1
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
                src={pangotImages[currentImageIndex].url} 
                alt={pangotImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{pangotImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{pangotImages[currentImageIndex].description}</p>
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
                {pangotImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🐦 About Pangot - Birding Paradise</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {pangotData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#228B22', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to April:</span> Best for bird watching and pleasant weather</p>
                <p><span style={styles.highlight}>November to February:</span> Winter migrants, clear mountain views</p>
                <p><span style={styles.highlight}>March to April:</span> Spring blooms, breeding season for birds</p>
                <p><span style={styles.highlight}>May to June:</span> Summer, good for escaping plains heat</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#228B22', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Pantnagar Airport (70 km from Pangot)</p>
                <p><span style={styles.highlight}>By Train:</span> Kathgodam Railway Station (35 km)</p>
                <p><span style={styles.highlight}>By Road:</span> 15 km from Nainital, well-connected route</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis from Nainital, limited bus service</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Pangot Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Birding Experience</h4>
                  <p>How was your bird watching experience in Pangot?</p>
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
                  <h4>Bird Species Spotting</h4>
                  <p>How many bird species did you spot and photograph?</p>
                  {userRatings.birding ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.birding.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.birding.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'birding', type: 'Bird Watching' })}
                    >
                      Rate Now
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Natural Beauty & Scenery</h4>
                  <p>How were the Himalayan views and forest trails?</p>
                  {userRatings.scenery ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.scenery.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.scenery.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'scenery', type: 'Natural Beauty' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Kumaoni Cuisine</h2>
            <div style={styles.grid}>
              {pangotData.famousFoods.map((food, index) => (
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Pangot Region</h2>
            <div style={styles.grid}>
              {pangotData.shopping.map((item, index) => (
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
            <h2 style={styles.sectionTitle}>🏡 Birding Lodges & Homestays</h2>
            <div style={styles.grid}>
              {pangotData.stays.map((stay, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#228B22', marginBottom: '15px'}}>{stay.name}</h3>
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
            <h2 style={styles.sectionTitle}>🐦 Famous Birding & Nature Spots</h2>
            <div style={styles.grid}>
              {pangotData.places.map((place, index) => (
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

      case 'precautions':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>⚠️ Travel Precautions & Birding Tips</h2>
            <div style={styles.grid}>
              {pangotData.precautions.map((category, index) => (
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
            
            <div style={{...styles.warning, marginTop: '20px'}}>
              <h4>🚨 Emergency Contacts</h4>
              <p><strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108 | <strong>Fire:</strong> 101</p>
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Women Helpline:</strong> 1091</p>
              <p><strong>Nainital Police:</strong> 05942-235114 | <strong>Hospital:</strong> 05942-235411</p>
              <p><strong>Tourist Information:</strong> 05942-235337 | <strong>Forest Department:</strong> 05942-235212</p>
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
        <h1 style={styles.title}>🐦 Pangot</h1>
        <p style={styles.subtitle}>Bird Watching Paradise in Kumaon Himalayas</p>
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
            {tab === 'hotels' && '🏡 Stays'}
            {tab === 'places' && '🐦 Places'}
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
        <p>© 2024 Pangot Travel Guide. Experience the Bird Watching Paradise!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for nature lovers and bird watchers exploring the Himalayas
        </p>
      </div>
    </div>
  );
};

export default PangotTravelGuide;