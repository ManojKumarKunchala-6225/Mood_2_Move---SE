import React, { useState } from 'react';

const MountAbuTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Mount Abu Images for Carousel
  const mountAbuImages = [
    {
      url: "https://images.unsplash.com/photo-1675080990465-e04000543cd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpbHdhcmElMjB0ZW1wbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Dilwara Temples",
      description: "Exquisite marble temples of Jain architecture"
    },
    {
      url: "https://images.unsplash.com/photo-1724250385111-3e06c1429b29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFra2klMjBsYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      title: "Nakki Lake",
      description: "Sacred artificial lake with boating facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1676555359137-3c84dd96a226?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnQlMjBhYnUlMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: "Sunset Point",
      description: "Breathtaking sunset views over Aravalli hills"
    }
  ];

  const styles = {
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff8f0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      marginTop:'4%',
      padding: '30px',
      background: 'linear-gradient(135deg, #d35400, #e67e22)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(211, 84, 0, 0.3)'
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
      objectFit: 'cover'
    },
    carouselText: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      color: 'white',
      padding: '20px'
    },
    carouselTitle: {
      fontSize: '1.8rem',
      marginBottom: '5px'
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
      cursor: 'pointer'
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
      cursor: 'pointer'
    },
    activeDot: {
      backgroundColor: '#d35400'
    },
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '30px',
      gap: '15px',
      flexWrap: 'wrap'
    },
    tab: {
      padding: '15px 30px',
      border: 'none',
      borderRadius: '50px',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold'
    },
    activeTab: {
      backgroundColor: '#d35400',
      color: 'white'
    },
    content: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
    },
    sectionTitle: {
      color: '#d35400',
      borderBottom: '3px solid #e67e22',
      paddingBottom: '15px',
      marginBottom: '25px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px'
    },
    card: {
      backgroundColor: '#fef9e7',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #f8c471'
    }
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === mountAbuImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? mountAbuImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <div style={styles.carousel}>
              <img 
                src={mountAbuImages[currentImageIndex].url} 
                alt={mountAbuImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{mountAbuImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{mountAbuImages[currentImageIndex].description}</p>
              </div>
              
              <div style={styles.carouselControls}>
                <button style={styles.carouselButton} onClick={prevImage}>‹</button>
                <button style={styles.carouselButton} onClick={nextImage}>›</button>
              </div>
              
              <div style={styles.carouselDots}>
                {mountAbuImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>About Mount Abu</h2>
            <p>Mount Abu is Rajasthan's only hill station, known for its cool climate and beautiful landscapes.</p>
            
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3>Best Time to Visit</h3>
                <p>October to March: Pleasant weather</p>
              </div>
              <div style={styles.card}>
                <h3>How to Reach</h3>
                <p>Nearest airport: Udaipur (185 km)</p>
              </div>
            </div>
          </div>
        );

      case 'places':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Famous Places</h2>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3>Dilwara Temples</h3>
                <p>Famous Jain temples with exquisite marble work</p>
              </div>
              <div style={styles.card}>
                <h3>Nakki Lake</h3>
                <p>Beautiful lake for boating and sunset views</p>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Content for {activeTab} tab</div>;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🏔️ Mount Abu</h1>
        <p style={styles.subtitle}>Rajasthan's Only Hill Station</p>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'overview' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('overview')}
        >
          📖 Overview
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'places' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('places')}
        >
          🏞️ Places
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'hotels' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('hotels')}
        >
          🏨 Hotels
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'food' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('food')}
        >
          🍽️ Food
        </button>
      </div>

      <div style={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default MountAbuTravelGuide;