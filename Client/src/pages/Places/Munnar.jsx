import React, { useState } from 'react';

const MunnarTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Munnar Images for Carousel
  const munnarImages = [
    {
      url: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Tea Plantations",
      description: "Vast stretches of lush green tea gardens"
    },
    {
      url: "https://images.unsplash.com/photo-1574423886860-a27bb1814f28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXJhdmlrdWxhbSUyME5hdGlvbmFsJTIwUGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Eravikulam National Park",
      description: "Home to the endangered Nilgiri Tahr"
    },
    {
      url: "https://images.unsplash.com/photo-1706721030382-c14c27844fbd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWF0dHVwZXR0eSUyMERhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Mattupetty Dam",
      description: "Beautiful dam surrounded by rolling hills"
    },
    
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f8f0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(46, 125, 50, 0.3)'
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
      backgroundColor: '#2e7d32',
      transform: 'scale(1.2)'
    },
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
      backgroundColor: '#2e7d32',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(46, 125, 50, 0.4)'
    },
    content: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      minHeight: '500px'
    },
    sectionTitle: {
      color: '#2e7d32',
      borderBottom: '3px solid #4caf50',
      paddingBottom: '15px',
      marginBottom: '25px',
      fontSize: '2rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      marginTop: '25px'
    },
    card: {
      backgroundColor: '#f1f8e9',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #c5e1a5',
      transition: 'all 0.3s ease'
    },
    highlight: {
      color: '#2e7d32',
      fontWeight: 'bold'
    }
  };

  // Munnar Travel Data
  const munnarData = {
    overview: {
      title: "Munnar - Kashmir of South India",
      content: `Munnar is a beautiful hill station located in the Western Ghats of Kerala, situated at an altitude of about 1,600 meters above sea level. Famous for its sprawling tea plantations, misty hills, and pleasant climate, Munnar was once the summer resort of the British government in South India. The name Munnar means "three rivers" as it's located at the confluence of three mountain streams.`
    },
    famousFoods: [
      {
        name: "Kerala Sadya",
        description: "Traditional vegetarian feast served on banana leaf",
        place: "Local restaurants, Resorts",
        price: "₹200-400",
        special: "Complete traditional meal with 20+ items"
      },
      {
        name: "Appam with Stew",
        description: "Soft rice hoppers with vegetable or chicken stew",
        place: "Local eateries, Hotels",
        price: "₹80-150",
        special: "Kerala breakfast specialty"
      },
      {
        name: "Fresh Tea",
        description: "Freshly brewed tea from local plantations",
        place: "Tea stalls, Plantation visits",
        price: "₹10-30",
        special: "Direct from tea gardens"
      }
    ],
    places: [
      {
        name: "Tea Gardens",
        description: "Vast expanses of tea plantations",
        timing: "7:00 AM - 6:00 PM",
        entryFee: "Free, Guided tours available",
        bestTime: "Morning for best views",
        highlights: ["Tea processing", "Photography", "Plantation walks"]
      },
      {
        name: "Eravikulam National Park",
        description: "Protected area for Nilgiri Tahr",
        timing: "8:00 AM - 4:30 PM",
        entryFee: "₹65 for Indians",
        bestTime: "February-April for Neelakurinji flowers",
        highlights: ["Wildlife", "Trekking", "Flowering plants"]
      },
      {
        name: "Mattupetty Dam",
        description: "Concrete gravity dam with boating",
        timing: "9:30 AM - 5:00 PM",
        entryFee: "Free, Boating charges extra",
        bestTime: "Morning hours",
        highlights: ["Boating", "Photography", "Picnic spots"]
      }
    ],
    hotels: [
      {
        name: "Tea County",
        type: "Luxury Resort",
        price: "₹6,000-15,000/night",
        rating: "4.5/5",
        facilities: ["Mountain View", "Restaurant", "Spa"],
        location: "Munnar Town",
        distance: "1 km from town center"
      },
      {
        name: "Fragrant Nature",
        type: "Boutique Resort",
        price: "₹4,000-10,000/night",
        rating: "4.3/5",
        facilities: ["Tea Garden View", "Pool", "Restaurant"],
        location: "Pallivasal",
        distance: "8 km from Munnar"
      }
    ],
    precautions: [
      {
        category: "Weather & Clothing",
        tips: [
          "Carry warm clothes as temperature drops at night",
          "Raincoat or umbrella is essential",
          "Comfortable walking shoes for plantation visits"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === munnarImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? munnarImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            {/* Image Carousel */}
            <div style={styles.carousel}>
              <img 
                src={munnarImages[currentImageIndex].url} 
                alt={munnarImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{munnarImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{munnarImages[currentImageIndex].description}</p>
              </div>
              
              <div style={styles.carouselControls}>
                <button style={styles.carouselButton} onClick={prevImage}>‹</button>
                <button style={styles.carouselButton} onClick={nextImage}>›</button>
              </div>
              
              <div style={styles.carouselDots}>
                {munnarImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🌿 About Munnar</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8'}}>
              {munnarData.overview.content}
            </p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32'}}>Best Time to Visit</h3>
                <p><span style={styles.highlight}>September to May:</span> Pleasant weather</p>
                <p><span style={styles.highlight}>August:</span> Neelakurinji flowering (once every 12 years)</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#2e7d32'}}>How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Cochin Airport (110 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Aluva Railway Station (110 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Kochi, Madurai</p>
              </div>
            </div>
          </div>
        );

      case 'food':
        return (
          <div>
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods</h2>
            <div style={styles.grid}>
              {munnarData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32'}}>{food.name}</h3>
                  <p>{food.description}</p>
                  <p><strong>Best Place:</strong> {food.place}</p>
                  <p><strong>Price:</strong> {food.price}</p>
                  <p><strong>Special:</strong> {food.special}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'places':
        return (
          <div>
            <h2 style={styles.sectionTitle}>🏞️ Famous Places</h2>
            <div style={styles.grid}>
              {munnarData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32'}}>{place.name}</h3>
                  <p>{place.description}</p>
                  <p><strong>Timing:</strong> {place.timing}</p>
                  <p><strong>Entry Fee:</strong> {place.entryFee}</p>
                  <p><strong>Best Time:</strong> {place.bestTime}</p>
                  <p><strong>Highlights:</strong> {place.highlights.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'hotels':
        return (
          <div>
            <h2 style={styles.sectionTitle}>🏨 Hotels & Resorts</h2>
            <div style={styles.grid}>
              {munnarData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32'}}>{hotel.name}</h3>
                  <p><strong>Type:</strong> {hotel.type}</p>
                  <p><strong>Price:</strong> {hotel.price}</p>
                  <p><strong>Rating:</strong> {hotel.rating}</p>
                  <p><strong>Location:</strong> {hotel.location}</p>
                  <p><strong>Facilities:</strong> {hotel.facilities.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'precautions':
        return (
          <div>
            <h2 style={styles.sectionTitle}>⚠️ Travel Tips</h2>
            <div style={styles.grid}>
              {munnarData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#2e7d32'}}>{category.category}</h3>
                  <ul>
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🌿 Munnar</h1>
        <p style={styles.subtitle}>Kashmir of South India - Tea Garden Paradise</p>
      </div>

      <div style={styles.tabs}>
        {['overview', 'food', 'places', 'hotels', 'precautions'].map(tab => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.target.style.backgroundColor = '#c5e1a5';
                e.target.style.color = '#2e7d32';
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
            {tab === 'places' && '🏞️ Places'}
            {tab === 'hotels' && '🏨 Hotels'}
            {tab === 'precautions' && '⚠️ Precautions'}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {renderContent()}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2024 Munnar Travel Guide. Experience the beauty of tea gardens!</p>
      </div>
    </div>
  );
};

export default MunnarTravelGuide;