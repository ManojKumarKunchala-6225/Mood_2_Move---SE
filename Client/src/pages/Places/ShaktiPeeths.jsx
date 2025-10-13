import React, { useState } from 'react';

const ShaktiPeethsTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Shakti Peeths Images for Carousel
  const shaktiPeethsImages = [
    {
      url: "https://media.istockphoto.com/id/1319981113/photo/vaishno-you-have-to.webp?a=1&b=1&s=612x612&w=0&k=20&c=knHEQfEqtcOjBYNrhY9EB29gWs-2kKEBFgJnKKnQSxo=",
      title: "Vaishno Devi Temple",
      description: "One of the most revered Shakti Peeths in Jammu & Kashmir"
    },
    {
      url: "https://media.istockphoto.com/id/1502218452/photo/sacred-hindu-shrine-in-assam-india-kamakhya-temple-sacred-place-of-worship-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=jme10wCWQH3PSHg6R2lfr2OkIf75x0t7d0N2hyHD1oQ=",
      title: "Kamakhya Temple",
      description: "Ancient temple in Guwahati where the yoni fell"
    },
    {
      url: "https://images.unsplash.com/photo-1659951345409-b517e77edbc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29sa2F0YSUyMGthbGlnaGF0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      title: "Kolkata Kalighat",
      description: "Where the right toe of Sati fell - famous Kali Temple"
    },
    {
      url: "https://media.istockphoto.com/id/2222586177/photo/shri-chamunda-mata-temple-and-maa-jwalamukhi-devi-temple-on-the-south-side-of-mehrangarh-fort.webp?a=1&b=1&s=612x612&w=0&k=20&c=vD6kgWZZ58lQjP5BdeMnbVkz5QFFkr71cMt7SrR3zAY=",
      title: "Jwalamukhi Temple",
      description: "Eternal flames worshiped as manifestation of Goddess"
    },
    {
      url: "https://media.istockphoto.com/id/186841221/photo/mahalakshmi-temple-ponda-goa.webp?a=1&b=1&s=612x612&w=0&k=20&c=8NeRBIq2fcLY6CEIRy0ZEfgwHzsKn4Nuy8WQhyg0UxY",
      title: "Mahalakshmi Temple",
      description: "Where the heart of Sati fell in Kolhapur, Maharashtra"
    }
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
      marginBottom: '50px',
      marginTop: '40px',
      padding: '40px',
      background: 'linear-gradient(135deg, #8B0000, #DC143C)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(139, 0, 0, 0.3)'
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
      backgroundColor: '#8B0000',
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
      border: '2px solid #DC143C',
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
      borderLeft: '3px solid #DC143C'
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
      backgroundColor: '#DC143C',
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
      marginTop: '30px'
    },
    section: {
      marginBottom: '50px',
      marginTop: '30px'
    },
    sectionTitle: {
      color: '#8B0000',
      borderBottom: '3px solid #DC143C',
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
      backgroundColor: '#fff0f0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #DC143C',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 0, 0, 0.1)',
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
      color: '#8B0000',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#DC143C',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    },
    legend: {
      backgroundColor: '#fff0f0',
      padding: '15px',
      borderRadius: '8px',
      margin: '20px 0',
      borderLeft: '4px solid #8B0000'
    }
  };

  // Shakti Peeths Travel Data
  const shaktiPeethsData = {
    overview: {
      title: "Shakti Peeths - Sacred Abodes of Divine Feminine Energy",
      content: `Shakti Peeths are highly revered temples dedicated to the Goddess Shakti, the divine feminine energy in Hinduism. According to Hindu mythology, these sacred sites originated when Lord Vishnu cut the body of Goddess Sati (an incarnation of Shakti) into 51 pieces to stop Lord Shiva's cosmic dance of destruction (Tandava) after Sati's self-immolation. Each place where a body part fell became a Shakti Peeth. These temples are spread across the Indian subcontinent and are among the most important pilgrimage sites for Shaktism followers. Each Peeth has both the Goddess (Shakti) and Lord Shiva (Bhairav) worshipped together, representing the eternal union of masculine and feminine divine energies.`
    },
    majorPeeths: [
      {
        name: "Kamakhya Temple",
        location: "Guwahati, Assam",
        bodyPart: "Yoni (Reproductive Organ)",
        significance: "Most powerful Shakti Peeth, source of feminine energy",
        bestTime: "June-July (Ambubachi Mela)",
        specialFeature: "Natural spring worshipped as Goddess, annual menstruation ceremony"
      },
      {
        name: "Vaishno Devi",
        location: "Katra, Jammu & Kashmir",
        bodyPart: "Head",
        significance: "One of the most visited pilgrimage sites in India",
        bestTime: "March-October",
        specialFeature: "Cave temple accessible after 14km trek"
      },
      {
        name: "Kalighat Kali Temple",
        location: "Kolkata, West Bengal",
        bodyPart: "Right Toe",
        significance: "One of the 51 Shakti Peeths, famous Kali temple",
        bestTime: "October-March",
        specialFeature: "Goddess Kali in unique form, animal sacrifice tradition"
      },
      {
        name: "Jwalamukhi Temple",
        location: "Kangra, Himachal Pradesh",
        bodyPart: "Tongue",
        significance: "Natural eternal flames worshipped as Goddess",
        bestTime: "March-June",
        specialFeature: "Blue flames emerging from rock crevices without any fuel"
      },
      {
        name: "Mahalakshmi Temple",
        location: "Kolhapur, Maharashtra",
        bodyPart: "Heart",
        significance: "One of the six abodes of salvation",
        bestTime: "November-February",
        specialFeature: "Goddess in unique form with four arms"
      },
      {
        name: "Vindhyavasini Temple",
        location: "Vindhyachal, Uttar Pradesh",
        bodyPart: "Left Hand",
        significance: "One of the most powerful Siddha Peeths",
        bestTime: "Navratri seasons",
        specialFeature: "Goddess believed to fulfill all wishes"
      }
    ],
    ritualsPractices: [
      {
        category: "Daily Worship",
        practices: [
          "Morning and evening aarti with lamps and bells",
          "Flower offerings and prasad distribution",
          "Chanting of Devi Mahatmya and other sacred texts",
          "Abhishekam (ritual bathing) of the deity"
        ],
        significance: "Maintains divine energy and fulfills devotees' wishes"
      },
      {
        category: "Special Pujas",
        practices: [
          "Navratri Puja - 9 days of special worship",
          "Chandi Path recitation for protection",
          "Kumari Puja - worship of young girls as Goddess",
          "Havan and Yajna for specific desires"
        ],
        significance: "Enhanced spiritual benefits during auspicious times"
      },
      {
        category: "Festivals",
        practices: [
          "Navratri - twice yearly major festival",
          "Diwali and other Hindu festivals",
          "Temple-specific utsavs and melas",
          "Full moon and new moon special prayers"
        ],
        significance: "Peak spiritual energy and large gatherings"
      },
      {
        category: "Personal Worship",
        practices: [
          "Circumambulation of the temple",
          "Fasting on specific days",
          "Meditation and japa",
          "Offering red cloth, sindoor, and bangles"
        ],
        significance: "Personal spiritual growth and blessings"
      }
    ],
    travelGuide: [
      {
        category: "Best Time to Visit",
        tips: [
          "October to March: Pleasant weather for most locations",
          "Avoid monsoon season for hilly regions",
          "Navratri seasons: Great spiritual energy but crowded",
          "Check specific temple festivals for unique experiences"
        ]
      },
      {
        category: "What to Wear",
        tips: [
          "Traditional Indian wear preferred (saree, salwar kameez, dhoti)",
          "Modest clothing covering shoulders and knees",
          "Comfortable footwear for temple premises",
          "Avoid leather items in temple premises"
        ]
      },
      {
        category: "Essential Items",
        tips: [
          "Prasad offerings (fruits, flowers, sweets)",
          "Red cloth/chunri for offering",
          "Cash for donations and purchases",
          "Water bottle and basic medicines"
        ]
      },
      {
        category: "Temple Etiquette",
        tips: [
          "Maintain silence and respect in temple premises",
          "Follow queue systems and temple rules",
          "Remove footwear before entering sanctum",
          "Seek priest guidance for special pujas"
        ]
      }
    ],
    accommodation: [
      {
        name: "Temple Guest Houses",
        type: "Budget Accommodation",
        price: "Free - ₹500/night",
        facilities: ["Basic rooms", "Shared bathrooms", "Simple food", "Near temple"],
        booking: "Through temple administration",
        special: "Ideal for pilgrims, spiritual atmosphere"
      },
      {
        name: "Dharamshalas",
        type: "Charity Accommodation",
        price: "Free - ₹300/night",
        facilities: ["Dormitory beds", "Community kitchen", "Prayer halls", "Basic amenities"],
        booking: "First-come basis or advance booking",
        special: "Run by religious trusts, economical"
      },
      {
        name: "Budget Hotels",
        type: "Economy Hotels",
        price: "₹800-₹2,500/night",
        facilities: ["AC/Non-AC rooms", "Attached bathrooms", "Restaurant", "Travel desk"],
        booking: "Online or direct booking",
        special: "Comfortable stay with modern facilities"
      },
      {
        name: "Mid-range Hotels",
        type: "Comfort Hotels",
        price: "₹2,500-₹6,000/night",
        facilities: ["AC rooms", "Restaurant", "Room service", "Parking"],
        booking: "Online portals or direct",
        special: "Better comfort and services"
      }
    ],
    spiritualSignificance: [
      {
        aspect: "Cosmic Energy Centers",
        description: "Each Peeth represents a chakra in the cosmic body of Goddess",
        benefits: ["Spiritual awakening", "Energy healing", "Karma cleansing"]
      },
      {
        aspect: "Feminine Divine Worship",
        description: "Celebration of feminine power and creativity",
        benefits: ["Women empowerment", "Fertility blessings", "Family harmony"]
      },
      {
        aspect: "Union of Shiva-Shakti",
        description: "Represent the eternal balance of masculine and feminine",
        benefits: ["Relationship harmony", "Inner balance", "Complete spiritual growth"]
      },
      {
        aspect: "Manifestation of Desires",
        description: "Believed to fulfill sincere prayers and wishes",
        benefits: ["Wish fulfillment", "Problem resolution", "Life transformation"]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === shaktiPeethsImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? shaktiPeethsImages.length - 1 : prevIndex - 1
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
                src={shaktiPeethsImages[currentImageIndex].url} 
                alt={shaktiPeethsImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{shaktiPeethsImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{shaktiPeethsImages[currentImageIndex].description}</p>
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
                {shaktiPeethsImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🕉️ About Shakti Peeths</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {shaktiPeethsData.overview.content}
            </p>
            
            <div style={styles.legend}>
              <h3 style={{color: '#8B0000', marginBottom: '10px'}}>📖 Mythological Background</h3>
              <p>The Shakti Peethas originated from the dramatic story of Sati and Shiva. When Sati immolated herself in her father Daksha's yagna, Shiva carried her burning body across the universe. To calm Shiva's destructive Tandava, Lord Vishnu used his Sudarshana Chakra to cut Sati's body into 51 pieces, which fell at different places on Earth, each becoming a Shakti Peetha.</p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B0000', marginBottom: '15px'}}>🕰️ Best Time to Visit</h3>
                <p><span style={styles.highlight}>Navratri:</span> Most auspicious time, great spiritual energy</p>
                <p><span style={styles.highlight}>October-March:</span> Pleasant weather for pilgrimage</p>
                <p><span style={styles.highlight}>Full Moon Days:</span> Special spiritual significance</p>
                <p><span style={styles.highlight}>Temple Festivals:</span> Unique local celebrations</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B0000', marginBottom: '15px'}}>🙏 Spiritual Significance</h3>
                <p><span style={styles.highlight}>51 Body Parts:</span> Represent complete cosmic energy</p>
                <p><span style={styles.highlight}>Shiva-Shakti Union:</span> Balance of masculine-feminine</p>
                <p><span style={styles.highlight}>Energy Centers:</span> Each Peeth is a power center</p>
                <p><span style={styles.highlight}>Wish Fulfillment:</span> Believed to grant sincere prayers</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Spiritual Experience</h3>
              <p>Share your divine experience and help other devotees</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Spiritual Experience</h4>
                  <p>How was your pilgrimage to Shakti Peeth?</p>
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
                      onClick={() => handleRateClick({ name: 'overall', type: 'Overall Spiritual Experience' })}
                    >
                      Share Experience
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Divine Energy Feeling</h4>
                  <p>How powerful was the spiritual energy you felt?</p>
                  {userRatings.energy ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.energy.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.energy.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'energy', type: 'Divine Energy Experience' })}
                    >
                      Rate Energy
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Pilgrimage Facilities</h4>
                  <p>How were the accommodation and facilities?</p>
                  {userRatings.facilities ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.facilities.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.facilities.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'facilities', type: 'Pilgrimage Facilities' })}
                    >
                      Rate Facilities
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'peeths':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏛️ Major Shakti Peeths</h2>
            <div style={styles.grid}>
              {shaktiPeethsData.majorPeeths.map((peeth, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{peeth.name}</h3>
                  <p><strong>📍 Location:</strong> {peeth.location}</p>
                  <p><strong>🔱 Body Part:</strong> {peeth.bodyPart}</p>
                  <p><strong>🙏 Significance:</strong> {peeth.significance}</p>
                  <p><strong>📅 Best Time:</strong> {peeth.bestTime}</p>
                  <p><strong>✨ Special Feature:</strong> {peeth.specialFeature}</p>
                  
                  <div style={{marginTop: '15px'}}>
                    {userRatings[peeth.name] ? (
                      <div style={styles.userRating}>
                        <p><strong>Your Rating:</strong> {userRatings[peeth.name].rating}/5</p>
                        <div style={styles.ratingStars}>
                          {renderStars(userRatings[peeth.name].rating)}
                        </div>
                      </div>
                    ) : (
                      <button 
                        style={styles.rateButton}
                        onClick={() => handleRateClick({ name: peeth.name, type: peeth.name })}
                      >
                        Rate this Peeth
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'rituals':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🕯️ Rituals & Worship Practices</h2>
            <div style={styles.grid}>
              {shaktiPeethsData.ritualsPractices.map((ritual, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{ritual.category}</h3>
                  <p><strong>Significance:</strong> {ritual.significance}</p>
                  <h4 style={{margin: '15px 0 10px 0', color: '#DC143C'}}>Practices:</h4>
                  <ul style={{paddingLeft: '20px'}}>
                    {ritual.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} style={{marginBottom: '8px', lineHeight: '1.5'}}>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'accommodation':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🏨 Pilgrimage Accommodation</h2>
            <div style={styles.grid}>
              {shaktiPeethsData.accommodation.map((stay, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{stay.name}</h3>
                  <p><strong>Type:</strong> {stay.type}</p>
                  <p><strong>Price:</strong> <span style={styles.price}>{stay.price}</span></p>
                  <p><strong>Facilities:</strong> {stay.facilities.join(', ')}</p>
                  <p><strong>Booking:</strong> {stay.booking}</p>
                  <p><strong>Special:</strong> {stay.special}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'significance':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🌌 Spiritual Significance</h2>
            <div style={styles.grid}>
              {shaktiPeethsData.spiritualSignificance.map((aspect, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{aspect.aspect}</h3>
                  <p>{aspect.description}</p>
                  <h4 style={{margin: '15px 0 10px 0', color: '#DC143C'}}>Benefits:</h4>
                  <ul style={{paddingLeft: '20px'}}>
                    {aspect.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} style={{marginBottom: '8px', lineHeight: '1.5'}}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'travel':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🧭 Travel Guide & Tips</h2>
            <div style={styles.grid}>
              {shaktiPeethsData.travelGuide.map((guide, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B0000', marginBottom: '15px'}}>{guide.category}</h3>
                  <ul style={{paddingLeft: '20px'}}>
                    {guide.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} style={{marginBottom: '10px', lineHeight: '1.5'}}>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div style={{...styles.warning, marginTop: '30px'}}>
              <h4>📜 Important Guidelines for Pilgrims</h4>
              <p><strong>Respect Temple Traditions:</strong> Follow dress codes and customs</p>
              <p><strong>Photography Restrictions:</strong> Many temples don't allow photography inside sanctum</p>
              <p><strong>Queue Systems:</strong> Be patient and follow temple procedures</p>
              <p><strong>Donations:</strong> Give according to your capacity, not under pressure</p>
              <p><strong>Health Precautions:</strong> Carry necessary medicines and stay hydrated</p>
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
            Share Your Experience at {currentRatingItem?.type}
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
            placeholder="Share your spiritual experience, blessings received, or any divine moments (optional)..."
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
              Share Experience
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
        <h1 style={styles.title}>🕉️ Shakti Peeths</h1>
        <p style={styles.subtitle}>Sacred Abodes of Divine Feminine Energy - 51 Power Centers</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'peeths', 'rituals', 'accommodation', 'significance', 'travel'].map(tab => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = '#DC143C';
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
            {tab === 'peeths' && '🏛️ Major Peeths'}
            {tab === 'rituals' && '🕯️ Rituals'}
            {tab === 'accommodation' && '🏨 Stay'}
            {tab === 'significance' && '🌌 Significance'}
            {tab === 'travel' && '🧭 Travel Guide'}
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
        <p>© 2024 Shakti Peeths Travel Guide. Experience the Divine Feminine Energy!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Jai Maa Durga - May the Divine Mother bless all devotees
        </p>
      </div>
    </div>
  );
};

export default ShaktiPeethsTravelGuide;
