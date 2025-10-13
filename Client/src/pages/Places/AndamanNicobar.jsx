import React, { useState } from 'react';

const AndamanTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Andaman Images for Carousel
  const andamanImages = [
    {
      url: "https://media.istockphoto.com/id/1369829721/photo/radhanagar-beach-swaraj-dweep.webp?a=1&b=1&s=612x612&w=0&k=20&c=DGOFtRuwFnMSbuS7DiP-uxoQGTyRPOLoI_omNQ_wZ90=",
      title: "Radhanagar Beach",
      description: "Voted as Asia's best beach with white sands and turquoise waters"
    },
    {
      url: "https://images.unsplash.com/photo-1582657118090-af35eefc4e1f?w=1200&h=600&fit=crop",
      title: "Havelock Island",
      description: "Pristine beaches and vibrant coral reefs"
    },
    {
      url: "https://images.unsplash.com/photo-1547981609-4b6bf67b9d0a?w=1200&h=600&fit=crop",
      title: "Cellular Jail",
      description: "Historical prison from British colonial era"
    },
    {
      url: "https://images.unsplash.com/photo-1603383928972-0d6b0cac7e8f?w=1200&h=600&fit=crop",
      title: "Scuba Diving",
      description: "Explore vibrant marine life and coral reefs"
    },
    {
      url: "https://images.unsplash.com/photo-1582657118090-af35eefc4e1f?w=1200&h=600&fit=crop",
      title: "Neil Island",
      description: "Serene island with natural bridges and beaches"
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
      marginBottom: '30px',
      padding: '30px',
      background: 'linear-gradient(135deg, #1e90ff, #00bfff)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(30, 144, 255, 0.3)'
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
      backgroundColor: '#1e90ff',
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
      color: '#1e90ff',
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
      border: '2px solid #87ceeb',
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
      backgroundColor: '#1e90ff',
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
      borderLeft: '3px solid #00bfff'
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
      color: '#1e90ff',
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
      backgroundColor: '#00bfff',
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
      backgroundColor: '#1e90ff',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(30, 144, 255, 0.4)'
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
      color: '#1e90ff',
      borderBottom: '3px solid #00bfff',
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
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #87ceeb',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(30, 144, 255, 0.1)'
    },
    warning: {
      backgroundColor: '#fff3e0',
      border: '2px solid #ffb74d',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px 0'
    },
    highlight: {
      color: '#1e90ff',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#00bfff',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    }
  };

  // Andaman Travel Data
  const andamanData = {
    overview: {
      title: "Andaman & Nicobar Islands - Tropical Paradise",
      content: `The Andaman and Nicobar Islands are a breathtaking archipelago of 572 islands in the Bay of Bengal, known for their pristine beaches, crystal-clear turquoise waters, and vibrant marine life. This Union Territory of India is a tropical paradise that offers a perfect blend of adventure, relaxation, and natural beauty. The islands are famous for their white sandy beaches, coral reefs, lush rainforests, and rich history, including the Cellular Jail in Port Blair. With activities ranging from scuba diving and snorkeling to island hopping and historical tours, the Andaman Islands provide an unforgettable tropical experience. The islands are also home to indigenous tribes and offer unique cultural insights alongside their natural wonders.`
    },
    famousFoods: [
      {
        name: "Seafood Platter",
        description: "Fresh catch including fish, prawns, crabs, and lobsters",
        place: "Beachside shacks, Local restaurants",
        price: "₹500-2000",
        special: "Daily fresh seafood from local waters"
      },
      {
        name: "Andaman Fish Curry",
        description: "Traditional fish curry with coconut and local spices",
        place: "Local eateries, Home stays",
        price: "₹200-500",
        special: "Authentic local preparation"
      },
      {
        name: "Coconut Prawns",
        description: "Prawns cooked in coconut gravy with spices",
        place: "Beach restaurants, Hotels",
        price: "₹300-800",
        special: "Coastal specialty"
      },
      {
        name: "Grilled Lobster",
        description: "Fresh lobster grilled with butter and herbs",
        place: "Premium restaurants, Resorts",
        price: "₹800-2500",
        special: "Luxury seafood experience"
      },
      {
        name: "Tropical Fruits",
        description: "Fresh local fruits including coconut, pineapple, bananas",
        place: "Local markets, Street vendors",
        price: "₹50-200",
        special: "Fresh from island plantations"
      }
    ],
    shopping: [
      {
        category: "Pearl Jewelry",
        description: "Beautiful pearls and pearl jewelry",
        places: ["Aberdeen Bazaar", "Government emporium", "Pearl shops"],
        items: ["Pearl necklaces", "Earrings", "Bracelets", "Rings"],
        priceRange: "₹500 - ₹50,000",
        bestTime: "Year-round"
      },
      {
        category: "Shell Crafts",
        description: "Handicrafts made from seashells and corals",
        places: ["Local markets", "Beach shops", "Craft stores"],
        items: ["Shell decorations", "Wind chimes", "Jewelry boxes", "Showpieces"],
        priceRange: "₹100 - ₹5,000",
        bestTime: "Tourist season"
      },
      {
        category: "Wooden Crafts",
        description: "Handcrafted wooden items",
        places: ["Local markets", "Tribal craft centers"],
        items: ["Wooden sculptures", "Furniture", "Decorative items"],
        priceRange: "₹200 - ₹20,000",
        bestTime: "Year-round"
      },
      {
        category: "Coconut Products",
        description: "Products made from coconut shells and fibers",
        places: ["Local markets", "Government shops"],
        items: ["Coconut shell crafts", "Coir products", "Coconut oil"],
        priceRange: "₹50 - ₹2,000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Taj Exotica Resort & Spa",
        type: "Luxury Beach Resort",
        price: "₹15,000-40,000/night",
        rating: "4.7/5",
        facilities: ["Private beach", "Infinity pool", "Spa", "Multiple restaurants"],
        location: "Havelock Island",
        distance: "On Radhanagar Beach"
      },
      {
        name: "Sinclair's Bayview",
        type: "4-Star Hotel",
        price: "₹6,000-15,000/night",
        rating: "4.3/5",
        facilities: ["Sea view", "Restaurant", "Pool", "Travel desk"],
        location: "Port Blair",
        distance: "2 km from Cellular Jail"
      },
      {
        name: "SeaShell Hotel & Resort",
        type: "Beach Resort",
        price: "₹8,000-20,000/night",
        rating: "4.4/5",
        facilities: ["Beach access", "Pool", "Water sports", "Restaurant"],
        location: "Havelock Island",
        distance: "On Beach No. 5"
      },
      {
        name: "Hotel Driftwood",
        type: "Mid-range Hotel",
        price: "₹4,000-10,000/night",
        rating: "4.1/5",
        facilities: ["Restaurant", "Travel Desk", "Parking", "AC Rooms"],
        location: "Port Blair",
        distance: "3 km from airport"
      },
      {
        name: "Blue Planet Resort",
        type: "Budget Resort",
        price: "₹2,000-6,000/night",
        rating: "3.9/5",
        facilities: ["Beach view", "Basic amenities", "Restaurant", "Tour assistance"],
        location: "Neil Island",
        distance: "Walking distance to beaches"
      }
    ],
    places: [
      {
        name: "Radhanagar Beach",
        description: "Voted as Asia's best beach with white sands and turquoise waters",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Sunrise or sunset",
        highlights: ["White sandy beach", "Crystal clear water", "Sunset views", "Photography"]
      },
      {
        name: "Cellular Jail",
        description: "Historical prison from British colonial era, now a national memorial",
        timing: "9:00 AM - 12:30 PM, 1:30 PM - 5:00 PM",
        entryFee: "₹30 (Indians), ₹100 (Foreigners)",
        bestTime: "Morning for light and sound show booking",
        highlights: ["Historical significance", "Light and sound show", "Museum", "Architecture"]
      },
      {
        name: "Havelock Island",
        description: "Most popular island with pristine beaches and water sports",
        timing: "24 hours",
        entryFee: "Free (ferry charges apply)",
        bestTime: "November to April",
        highlights: ["Radhanagar Beach", "Elephant Beach", "Kalapathar Beach", "Water sports"]
      },
      {
        name: "Ross Island",
        description: "Former British administrative headquarters with ruins",
        timing: "8:30 AM - 4:00 PM",
        entryFee: "₹50 (Indians), ₹500 (Foreigners)",
        bestTime: "Morning hours",
        highlights: ["Historical ruins", "Deer spotting", "Light and sound show", "Photography"]
      },
      {
        name: "Neil Island",
        description: "Serene island with natural bridges and beautiful beaches",
        timing: "24 hours",
        entryFee: "Free (ferry charges apply)",
        bestTime: "Day trip",
        highlights: ["Natural Bridge", "Bharatpur Beach", "Laxmanpur Beach", "Coral viewing"]
      },
      {
        name: "Baratang Island",
        description: "Known for limestone caves and mangrove forests",
        timing: "6:00 AM - 3:00 PM",
        entryFee: "Permit required",
        bestTime: "Early morning",
        highlights: ["Limestone Caves", "Mangrove forests", "Tribal areas", "Adventure"]
      }
    ],
    precautions: [
      {
        category: "Water Activities",
        tips: [
          "Always use life jackets during water sports",
          "Check weather conditions before sea activities",
          "Follow instructor guidelines for scuba diving",
          "Avoid touching corals while snorkeling"
        ]
      },
      {
        category: "Travel & Permits",
        tips: [
          "Carry valid ID proof at all times",
          "Obtain necessary permits for restricted areas",
          "Book ferry tickets in advance during peak season",
          "Keep permit copies handy during island visits"
        ]
      },
      {
        category: "Health & Safety",
        tips: [
          "Carry mosquito repellent",
          "Stay hydrated in tropical climate",
          "Use sunscreen and hats for sun protection",
          "Carry basic medicines and first aid"
        ]
      },
      {
        category: "Island Etiquette",
        tips: [
          "Respect tribal areas and restrictions",
          "Do not litter on beaches and islands",
          "Follow designated paths in forests",
          "Respect marine life and coral reefs"
        ]
      },
      {
        category: "General Tips",
        tips: [
          "Carry cash as ATMs are limited on islands",
          "Book accommodation in advance during peak season",
          "Carry waterproof bags for beach visits",
          "Learn about tidal patterns for beach activities"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === andamanImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? andamanImages.length - 1 : prevIndex - 1
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
                src={andamanImages[currentImageIndex].url} 
                alt={andamanImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{andamanImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{andamanImages[currentImageIndex].description}</p>
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
                {andamanImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🏝️ About Andaman & Nicobar Islands</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {andamanData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#1e90ff', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to May:</span> Perfect weather for beach activities</p>
                <p><span style={styles.highlight}>November to February:</span> Pleasant climate, ideal for sightseeing</p>
                <p><span style={styles.highlight}>March to May:</span> Warm weather, good for water sports</p>
                <p><span style={styles.highlight}>June to September:</span> Monsoon, some activities restricted</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#1e90ff', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Veer Savarkar Airport, Port Blair</p>
                <p><span style={styles.highlight}>By Sea:</span> Ships from Chennai, Kolkata, Visakhapatnam</p>
                <p><span style={styles.highlight}>Inter-island:</span> Government and private ferries</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Auto-rickshaws, Buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Andaman Experience</h3>
              <p>Share your experience and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Island Experience</h4>
                  <p>How was your visit to Andaman Islands?</p>
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
                  <h4>Water Sports Experience</h4>
                  <p>How was your scuba diving and snorkeling?</p>
                  {userRatings.watersports ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.watersports.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.watersports.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'watersports', type: 'Water Sports' })}
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Seafood Delicacies</h2>
            <div style={styles.grid}>
              {andamanData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e90ff', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Andaman</h2>
            <div style={styles.grid}>
              {andamanData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e90ff', marginBottom: '15px'}}>{item.category}</h3>
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
              {andamanData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e90ff', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🏝️ Famous Places to Visit</h2>
            <div style={styles.grid}>
              {andamanData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e90ff', marginBottom: '15px'}}>{place.name}</h3>
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
              {andamanData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#1e90ff', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Tourist Helpline:</strong> 1363 | <strong>Coast Guard:</strong> 1554</p>
              <p><strong>Port Blair Police:</strong> 03192-233077 | <strong>Hospital:</strong> 03192-233473</p>
              <p><strong>Tourist Information Center:</strong> 03192-232694</p>
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
        <h1 style={styles.title}>🏝️ Andaman & Nicobar</h1>
        <p style={styles.subtitle}>Tropical Paradise - Emerald Islands</p>
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
                e.target.style.backgroundColor = '#00bfff';
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
            {tab === 'places' && '🏝️ Places'}
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
        <p>© 2024 Andaman & Nicobar Travel Guide. Experience Tropical Paradise!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Made with ❤️ for travelers exploring the Emerald Islands
        </p>
      </div>
    </div>
  );
};

export default AndamanTravelGuide;