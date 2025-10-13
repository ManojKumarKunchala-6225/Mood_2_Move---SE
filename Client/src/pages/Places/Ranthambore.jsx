import React, { useState } from 'react';

const RanthamboreTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Ranthambore Images for Carousel
  const ranthamboreImages = [
    {
      url: "https://media.istockphoto.com/id/674191480/photo/bengal-tiger-at-ranthambhore-national-park-in-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=gMayPggRz6Cf-Eskiz5TjaU8C7SR9a7Feunt1dXcYcQ=",
      title: "Royal Bengal Tiger",
      description: "Majestic tigers roaming in their natural habitat"
    },
    {
      url: "https://media.istockphoto.com/id/1957671557/photo/ranthambore-fort-among-the-breathtaking-jungle-scenery-of-ranthambore-national-park-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=PO6qOD-vEXtOWEmz1c5-UruLTbFBdQglYCiuFF6G-BQ=",
      title: "Ranthambore Fort",
      description: "Ancient fort overlooking the tiger reserve"
    },
    {
      url: "https://images.unsplash.com/photo-1606293715325-9329879fec0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FmYXJpJTIwZXhwZXJpZW5jZSUyMGluJTIwcmFudGhvbWJvcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      title: "Safari Experience",
      description: "Jeep safari through the wild forests"
    },
    {
      url: "https://media.istockphoto.com/id/121169517/photo/ranthambore.webp?a=1&b=1&s=612x612&w=0&k=20&c=aq1Kk8aZ321DX8pl1FwZ0XOscCF2iiIUaFwDvG9i4Oo=",
      title: "Lakes and Landscapes",
      description: "Scenic water bodies attracting wildlife"
    },
    {
      url: "https://media.istockphoto.com/id/1163174046/photo/landscape-from-the-land-of-tigers-ranthambore-national-park-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=S2xhBpleYH5GDfvutCySvy-3GgsGkZwnYp7DsGRHGFc=",
      title: "Wildlife Diversity",
      description: "Rich biodiversity beyond tigers"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#fffaf0',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      marginTop: '40px',
      padding: '40px',
      background: 'linear-gradient(135deg, #8B4513, #CD853F)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(139, 69, 19, 0.3)'
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
      backgroundColor: '#8B4513',
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
      color: '#8B4513',
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
      backgroundColor: '#fff8f0',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #CD853F',
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
      backgroundColor: '#8B4513',
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
      backgroundColor: '#fff8f0',
      borderRadius: '5px',
      borderLeft: '3px solid #CD853F'
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
      color: '#8B4513',
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
      backgroundColor: '#CD853F',
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
      backgroundColor: '#8B4513',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(139, 69, 19, 0.4)'
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
      color: '#8B4513',
      borderBottom: '3px solid #CD853F',
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
      backgroundColor: '#fff8f0',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #CD853F',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(139, 69, 19, 0.1)',
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
      color: '#8B4513',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#CD853F',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    },
    legend: {
      backgroundColor: '#fff8f0',
      padding: '15px',
      borderRadius: '8px',
      margin: '20px 0',
      borderLeft: '4px solid #8B4513'
    }
  };

  // Ranthambore Travel Data
  const ranthamboreData = {
    overview: {
      title: "Ranthambore - Land of Royal Bengal Tigers",
      content: `Ranthambore National Park, located in Sawai Madhopur district of Rajasthan, is one of India's largest and most famous national parks. Spread over 1,334 square kilometers, this former royal hunting ground is now a premier tiger reserve and a crucial Project Tiger sanctuary. The park is renowned for its high density of Royal Bengal Tigers, which can often be spotted during safari tours. Beyond tigers, Ranthambore boasts a rich biodiversity including leopards, hyenas, sloth bears, and over 300 species of birds. The park's landscape is characterized by ancient banyan trees, lakes, and the magnificent Ranthambore Fort that stands as a sentinel over the wilderness. The unique combination of wildlife, history, and natural beauty makes Ranthambore a must-visit destination for nature enthusiasts and wildlife photographers.`
    },
    famousFoods: [
      {
        name: "Laal Maas",
        description: "Traditional Rajasthani mutton curry with red chilies",
        place: "Local restaurants, Hotel dining",
        price: "₹400-800",
        special: "Signature Rajasthani non-vegetarian dish"
      },
      {
        name: "Dal Baati Churma",
        description: "Lentil curry with baked wheat balls and sweet crushed wheat",
        place: "Traditional eateries, Local dhabas",
        price: "₹200-400",
        special: "Classic Rajasthani complete meal"
      },
      {
        name: "Gatte ki Sabzi",
        description: "Gram flour dumplings in spicy yogurt gravy",
        place: "Local restaurants, Vegetarian eateries",
        price: "₹150-300",
        special: "Popular Rajasthani vegetarian dish"
      },
      {
        name: "Ker Sangri",
        description: "Traditional desert beans and berries preparation",
        place: "Local homes, Traditional restaurants",
        price: "₹180-350",
        special: "Authentic desert vegetable dish"
      },
      {
        name: "Mohan Maas",
        description: "Royal mutton preparation with milk and spices",
        place: "Heritage hotels, Fine dining",
        price: "₹500-900",
        special: "Royal Rajasthani delicacy"
      }
    ],
    shopping: [
      {
        category: "Handicrafts & Souvenirs",
        description: "Traditional Rajasthani crafts and tiger-themed items",
        places: ["Local markets", "Hotel shops", "Craft stores"],
        items: ["Blue pottery", "Tiger figurines", "Leather goods", "Miniature paintings"],
        priceRange: "₹200 - ₹10,000",
        bestTime: "Year-round"
      },
      {
        category: "Textiles & Clothing",
        description: "Traditional Rajasthani fabrics and garments",
        places: ["Local markets", "Handloom stores"],
        items: ["Bandhani sarees", "Rajasthani prints", "Woollen shawls", "Traditional jewelry"],
        priceRange: "₹500 - ₹15,000",
        bestTime: "Winter season"
      },
      {
        category: "Wildlife Memorabilia",
        description: "Tiger-themed souvenirs and wildlife products",
        places: ["Park entrance shops", "Hotel gift shops"],
        items: ["Tiger T-shirts", "Wildlife books", "Photography books", "Animal figurines"],
        priceRange: "₹150 - ₹5,000",
        bestTime: "Tourist season"
      },
      {
        category: "Local Produce",
        description: "Rajasthani spices and food items",
        places: ["Local markets", "Spice shops"],
        items: ["Rajasthani spices", "Papad", "Pickles", "Local sweets"],
        priceRange: "₹100 - ₹2,000",
        bestTime: "Year-round"
      }
    ],
    hotels: [
      {
        name: "Oberoi Vanyavilas",
        type: "Luxury Wildlife Resort",
        price: "₹25,000-60,000/night",
        rating: "4.8/5",
        facilities: ["Luxury tents", "Spa", "Pool", "Private butler"],
        location: "Ranthambore Road",
        distance: "5 km from park entrance"
      },
      {
        name: "Taj Safari - Sawai Madhopur Lodge",
        type: "Heritage Luxury Hotel",
        price: "₹15,000-35,000/night",
        rating: "4.6/5",
        facilities: ["Heritage rooms", "Safari desk", "Pool", "Fine dining"],
        location: "Sawai Madhopur",
        distance: "10 km from park"
      },
      {
        name: "Ranthambore Regency",
        type: "Mid-range Resort",
        price: "₹4,000-12,000/night",
        rating: "4.2/5",
        facilities: ["AC rooms", "Restaurant", "Pool", "Safari booking"],
        location: "Ranthambore Road",
        distance: "3 km from park"
      },
      {
        name: "Tiger Den Resort",
        type: "Budget Wildlife Resort",
        price: "₹2,500-6,000/night",
        rating: "4.0/5",
        facilities: ["Basic rooms", "Restaurant", "Garden", "Travel desk"],
        location: "Near park entrance",
        distance: "2 km from safari gate"
      },
      {
        name: "Forest Rest Houses",
        type: "Government Accommodation",
        price: "₹1,500-4,000/night",
        rating: "3.8/5",
        facilities: ["Basic amenities", "Food service", "Park location"],
        location: "Inside forest area",
        distance: "Within park premises"
      }
    ],
    safariZones: [
      {
        zone: "Zone 1-5",
        description: "Core tiger territory with highest tiger sightings",
        bestFor: "Tiger sightings, Photography",
        successRate: "High",
        highlights: ["Frequent tiger sightings", "Good road network", "Water bodies"]
      },
      {
        zone: "Zone 6-10",
        description: "Peripheral zones with diverse wildlife",
        bestFor: "Bird watching, Landscape photography",
        successRate: "Medium",
        highlights: ["Bird diversity", "Scenic landscapes", "Less crowded"]
      },
      {
        zone: "Buffer Zones",
        description: "Outer areas with occasional tiger movement",
        bestFor: "General wildlife, Nature walks",
        successRate: "Low to Medium",
        highlights: ["Peaceful experience", "General wildlife", "Affordable safaris"]
      }
    ],
    wildlife: [
      {
        category: "Big Cats",
        animals: ["Royal Bengal Tiger", "Indian Leopard", "Jungle Cat"],
        bestTime: "October to June",
        sightings: ["Tigers near water bodies", "Leopards on hills", "Early morning hours"]
      },
      {
        category: "Herbivores",
        animals: ["Sambar Deer", "Spotted Deer", "Nilgai", "Wild Boar"],
        bestTime: "Year-round",
        sightings: ["Grasslands", "Water holes", "Forest edges"]
      },
      {
        category: "Birds",
        animals: ["Indian Pitta", "Crested Serpent Eagle", "Sarus Crane", "Peacock"],
        bestTime: "November to March",
        sightings: ["Lakes", "Forest canopy", "Open areas"]
      },
      {
        category: "Other Mammals",
        animals: ["Sloth Bear", "Hyena", "Jackal", "Mongoose"],
        bestTime: "Early morning, Evening",
        sightings: ["Dense forests", "Rocky areas", "Night safaris"]
      }
    ],
    places: [
      {
        name: "Ranthambore Fort",
        description: "UNESCO World Heritage Site overlooking the national park",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹100 (Indians), ₹200 (Foreigners)",
        bestTime: "Morning or Evening",
        highlights: ["Historic architecture", "Panoramic views", "Ancient temples", "Wildlife spotting"]
      },
      {
        name: "Padam Talao",
        description: "Largest lake in Ranthambore with water lilies",
        timing: "Safari timings",
        entryFee: "Included in safari",
        bestTime: "Winter season",
        highlights: ["Tiger sightings", "Bird watching", "Photography", "Water lilies"]
      },
      {
        name: "Jogi Mahal",
        description: "Forest rest house near Padam Talao with ancient banyan tree",
        timing: "Safari timings",
        entryFee: "Included in safari",
        bestTime: "Year-round",
        highlights: ["Second largest banyan tree", "Lake views", "Historical building"]
      },
      {
        name: "Raj Bagh Ruins",
        description: "Ancient ruins amidst the forest with water channels",
        timing: "Safari timings",
        entryFee: "Included in safari",
        bestTime: "Morning",
        highlights: ["Historical ruins", "Tiger territory", "Photography", "Architecture"]
      },
      {
        name: "Surwal Lake",
        description: "Bird watching paradise near the park",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "Winter for migratory birds",
        highlights: ["Bird photography", "Migratory birds", "Peaceful environment"]
      },
      {
        name: "Kachida Valley",
        description: "Picturesque valley known for panther sightings",
        timing: "Safari timings",
        entryFee: "Included in safari",
        bestTime: "Early morning",
        highlights: ["Valley views", "Panther sightings", "Landscape photography"]
      }
    ],
    safariInfo: [
      {
        type: "Jeep Safari (Gypsy)",
        capacity: "6 persons",
        duration: "3-4 hours",
        cost: "₹1,200-1,800 per person",
        advantages: ["Better mobility", "Closer to animals", "Photography friendly"],
        booking: "Online advance booking recommended"
      },
      {
        type: "Canter Safari",
        capacity: "20 persons",
        duration: "3-4 hours",
        cost: "₹800-1,200 per person",
        advantages: ["Economical", "Good for groups", "Elevated view"],
        booking: "Easier to get, can book locally"
      },
      {
        type: "Full Day Safari",
        capacity: "6 persons",
        duration: "8 hours",
        cost: "₹8,000-12,000 per jeep",
        advantages: ["Maximum tiger sighting chance", "Flexible timing", "Photography focused"],
        booking: "Special permission required"
      }
    ],
    precautions: [
      {
        category: "Safari Safety",
        tips: [
          "Always follow the guide's instructions",
          "Do not stand up or make sudden movements in the safari vehicle",
          "Maintain silence when animals are spotted",
          "Never get down from the vehicle in core areas"
        ]
      },
      {
        category: "Clothing & Gear",
        tips: [
          "Wear earth-colored clothes (green, brown, beige)",
          "Carry binoculars and good camera equipment",
          "Wear comfortable walking shoes",
          "Carry water bottles and sun protection"
        ]
      },
      {
        category: "Wildlife Etiquette",
        tips: [
          "Do not feed any wild animals",
          "Keep safe distance from wildlife",
          "Avoid flash photography",
          "Respect the animals' space and habitat"
        ]
      },
      {
        category: "Booking & Planning",
        tips: [
          "Book safari permits 3-4 months in advance",
          "Choose morning safaris for better sightings",
          "Carry valid ID proof for safari entry",
          "Check weather conditions before planning"
        ]
      },
      {
        category: "Health & Environment",
        tips: [
          "Carry basic medicines and first aid",
          "Stay hydrated during safaris",
          "Do not litter in the forest",
          "Use eco-friendly products"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === ranthamboreImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? ranthamboreImages.length - 1 : prevIndex - 1
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
                src={ranthamboreImages[currentImageIndex].url} 
                alt={ranthamboreImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{ranthamboreImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{ranthamboreImages[currentImageIndex].description}</p>
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
                {ranthamboreImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🐯 About Ranthambore - Land of Royal Bengal Tigers</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {ranthamboreData.overview.content}
            </p>
            
            <div style={styles.legend}>
              <h3 style={{color: '#8B4513', marginBottom: '10px'}}>🌿 Why Visit Ranthambore?</h3>
              <p>Ranthambore offers one of the best opportunities in the world to see tigers in their natural habitat. The park's unique topography of dry deciduous forests, ancient ruins, and numerous water bodies creates perfect conditions for wildlife viewing. Combined with the historic Ranthambore Fort and rich Rajasthani culture, it provides a complete wilderness experience.</p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>October to April:</span> Pleasant weather, ideal for safaris</p>
                <p><span style={styles.highlight}>November to March:</span> Peak season, best wildlife sightings</p>
                <p><span style={styles.highlight}>April to June:</span> Hot but excellent for tiger sightings near water</p>
                <p><span style={styles.highlight}>July to September:</span> Monsoon, park closed for safaris</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#8B4513', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Jaipur Airport (180 km) - nearest airport</p>
                <p><span style={styles.highlight}>By Train:</span> Sawai Madhopur Railway Station (11 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Jaipur, Delhi, Agra</p>
                <p><span style={styles.highlight}>Local Transport:</span> Taxis, Auto-rickshaws, Hotel pickups</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Ranthambore Experience</h3>
              <p>Share your wildlife adventure and help other travelers</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Wildlife Experience</h4>
                  <p>How was your tiger safari adventure?</p>
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
                  <h4>Tiger Sightings</h4>
                  <p>How amazing were your tiger encounters?</p>
                  {userRatings.tiger ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.tiger.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.tiger.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'tiger', type: 'Tiger Sightings' })}
                    >
                      Rate Tiger Experience
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Safari & Guide Quality</h4>
                  <p>How good was your safari and guide service?</p>
                  {userRatings.safari ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.safari.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.safari.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'safari', type: 'Safari Experience' })}
                    >
                      Rate Safari
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Rajasthani Cuisine</h2>
            <div style={styles.grid}>
              {ranthamboreData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Ranthambore</h2>
            <div style={styles.grid}>
              {ranthamboreData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{item.category}</h3>
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
            <h2 style={styles.sectionTitle}>🏨 Hotels & Wildlife Resorts</h2>
            <div style={styles.grid}>
              {ranthamboreData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{hotel.name}</h3>
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
            <h2 style={styles.sectionTitle}>🚙 Safari Information & Zones</h2>
            
            <h3 style={{color: '#8B4513', marginBottom: '20px', fontSize: '1.5rem'}}>Safari Types</h3>
            <div style={styles.grid}>
              {ranthamboreData.safariInfo.map((safari, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{safari.type}</h3>
                  <p><strong>Capacity:</strong> {safari.capacity}</p>
                  <p><strong>Duration:</strong> {safari.duration}</p>
                  <p><strong>Cost:</strong> <span style={styles.price}>{safari.cost}</span></p>
                  <p><strong>Advantages:</strong> {safari.advantages.join(', ')}</p>
                  <p><strong>Booking:</strong> {safari.booking}</p>
                </div>
              ))}
            </div>

            <h3 style={{color: '#8B4513', marginBottom: '20px', marginTop: '40px', fontSize: '1.5rem'}}>Safari Zones</h3>
            <div style={styles.grid}>
              {ranthamboreData.safariZones.map((zone, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{zone.zone}</h3>
                  <p><strong>Description:</strong> {zone.description}</p>
                  <p><strong>Best For:</strong> {zone.bestFor}</p>
                  <p><strong>Success Rate:</strong> {zone.successRate}</p>
                  <p><strong>Highlights:</strong> {zone.highlights.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'wildlife':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🐾 Wildlife & Biodiversity</h2>
            <div style={styles.grid}>
              {ranthamboreData.wildlife.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{category.category}</h3>
                  <p><strong>Animals:</strong> {category.animals.join(', ')}</p>
                  <p><strong>Best Time for Sightings:</strong> {category.bestTime}</p>
                  <p><strong>Common Sightings:</strong> {category.sightings.join(', ')}</p>
                </div>
              ))}
            </div>

            <h3 style={{color: '#8B4513', marginBottom: '20px', marginTop: '40px', fontSize: '1.5rem'}}>Places to Visit</h3>
            <div style={styles.grid}>
              {ranthamboreData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{place.name}</h3>
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
            <h2 style={styles.sectionTitle}>⚠️ Safari Precautions & Tips</h2>
            <div style={styles.grid}>
              {ranthamboreData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#8B4513', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Forest Department:</strong> 07462-220479 | <strong>Safari Booking:</strong> 07462-223622</p>
              <p><strong>Local Hospital:</strong> 07462-220256 | <strong>Tourist Information:</strong> 07462-220808</p>
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
            placeholder="Share your wildlife experience (optional)..."
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
        <h1 style={styles.title}>🐯 Ranthambore</h1>
        <p style={styles.subtitle}>Land of Royal Bengal Tigers - Where Wilderness Meets History</p>
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
                e.target.style.backgroundColor = '#CD853F';
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
            {tab === 'safari' && '🚙 Safari'}
            {tab === 'wildlife' && '🐾 Wildlife'}
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
        <p>© 2024 Ranthambore Travel Guide. Experience the Majesty of Royal Bengal Tigers!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Save the Tiger - Preserve our National Heritage for Future Generations
        </p>
      </div>
    </div>
  );
};

export default RanthamboreTravelGuide;
