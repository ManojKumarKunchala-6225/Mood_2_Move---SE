import React, { useState } from 'react';

const RishikeshTravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userRatings, setUserRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRatingItem, setCurrentRatingItem] = useState(null);
  const [userReview, setUserReview] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  // Rishikesh Images for Carousel
  const rishikeshImages = [
    {
      url: "https://media.istockphoto.com/id/2070123132/photo/aryaghat.webp?a=1&b=1&s=612x612&w=0&k=20&c=doCLc5CZT4wmhU7laiQhcNqHV5O-vscLFBzNqptJXTg=",
      title: "Ganga Aarti at Triveni Ghat",
      description: "Spiritual evening ceremony on the banks of River Ganga"
    },
    {
      url: "https://www.istockphoto.com/photo/lakshman-jhula-rishikesh-india-gm1148100484-309941252?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FLaxman-Jhula&utm_term=Laxman+Jhula%3A%3A%3A",
      title: "Laxman Jhula",
      description: "Iconic suspension bridge over the Ganges"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661891887710-0528c1d76b92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBXYXRlciUyMFJhZnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
      title: "White Water Rafting",
      description: "Adventure sports in the rapids of Ganga"
    },
    {
      url: "https://media.istockphoto.com/id/182755489/photo/young-woman-meditating-by-ganges-river-in-rishikesh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=cIup9CXDPA6U32LKMODUeQg3ikg_-4QAAwUjJ8wRLEk=",
      title: "Yoga by the Ganges",
      description: "World capital of yoga and meditation"
    },
    {
      url: "https://images.unsplash.com/photo-1609159272414-41b6abf189d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTIyTmVlbGthbnRoJTIwTWFoYWRldiUyMFRlbXBsZSUyMnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      title: "Neelkanth Mahadev Temple",
      description: "Sacred temple dedicated to Lord Shiva"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Noto Sans", Arial, sans-serif',
      backgroundColor: '#e6f7ff',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      marginTop: '40px',
      padding: '40px',
      background: 'linear-gradient(135deg, #008080, #20B2AA)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(0, 128, 128, 0.3)'
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
      backgroundColor: '#008080',
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
      color: '#008080',
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
      backgroundColor: '#f0ffff',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #20B2AA',
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
      backgroundColor: '#008080',
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
      backgroundColor: '#f0ffff',
      borderRadius: '5px',
      borderLeft: '3px solid #20B2AA'
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
      color: '#008080',
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
      backgroundColor: '#20B2AA',
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
      backgroundColor: '#008080',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(0, 128, 128, 0.4)'
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
      color: '#008080',
      borderBottom: '3px solid #20B2AA',
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
      backgroundColor: '#f0ffff',
      padding: '25px',
      borderRadius: '12px',
      border: '2px solid #20B2AA',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 128, 128, 0.1)',
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
      color: '#008080',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    price: {
      color: '#20B2AA',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    timing: {
      color: '#d84315',
      fontWeight: 'bold'
    },
    legend: {
      backgroundColor: '#f0ffff',
      padding: '15px',
      borderRadius: '8px',
      margin: '20px 0',
      borderLeft: '4px solid #008080'
    }
  };

  // Rishikesh Travel Data
  const rishikeshData = {
    overview: {
      title: "Rishikesh - Yoga Capital of the World",
      content: `Rishikesh, nestled in the foothills of the Himalayas in Uttarakhand, is a spiritual haven and adventure hub situated on the banks of the holy River Ganga. Known as the 'Yoga Capital of the World', this sacred town attracts spiritual seekers, yoga enthusiasts, and adventure lovers from across the globe. Rishikesh is famous for its ancient temples, ashrams, and the mesmerizing Ganga Aarti at Triveni Ghat. The town is also the gateway to the Char Dham pilgrimage and offers thrilling adventure activities like white water rafting, bungee jumping, and trekking. With its serene environment, spiritual ambiance, and breathtaking natural beauty, Rishikesh provides a perfect blend of peace and adventure.`
    },
    famousFoods: [
      {
        name: "Aloo Puri",
        description: "Deep fried bread served with spicy potato curry",
        place: "Local eateries, Ashram canteens",
        price: "₹60-120",
        special: "Popular breakfast in Rishikesh"
      },
      {
        name: "Kachori Sabzi",
        description: "Crispy fried bread with vegetable curry",
        place: "Street vendors, Local restaurants",
        price: "₹50-100",
        special: "Traditional North Indian snack"
      },
      {
        name: "Sattvic Food",
        description: "Pure vegetarian food without onion and garlic",
        place: "Ashrams, Yoga centers",
        price: "₹150-300",
        special: "Ayurvedic and healthy cuisine"
      },
      {
        name: "Ganga Kinare",
        description: "Riverside dining with multi-cuisine options",
        place: "Riverside restaurants, Hotels",
        price: "₹200-500",
        special: "Romantic dining by Ganges"
      },
      {
        name: "Fresh Fruit Juices",
        description: "Healthy fresh juices and smoothies",
        place: "Juice centers, Health cafes",
        price: "₹80-150",
        special: "Detox and healthy options"
      }
    ],
    shopping: [
      {
        category: "Spiritual Items",
        description: "Religious and spiritual artifacts",
        places: ["Laxman Jhula market", "Ram Jhula market", "Local shops"],
        items: ["Rudraksha beads", "Incense sticks", "Yoga mats", "Religious books"],
        priceRange: "₹50 - ₹5,000",
        bestTime: "Year-round"
      },
      {
        category: "Handicrafts & Clothing",
        description: "Traditional Uttarakhand handicrafts and clothes",
        places: ["Local markets", "Government emporium"],
        items: ["Woollen clothes", "Handmade jewellery", "Bamboo crafts", "Ayurvedic products"],
        priceRange: "₹200 - ₹10,000",
        bestTime: "Winter season"
      },
      {
        category: "Ayurvedic Products",
        description: "Traditional herbal and Ayurvedic items",
        places: ["Ayurvedic stores", "Pharmacy shops"],
        items: ["Herbal teas", "Medicinal oils", "Skin care products", "Health supplements"],
        priceRange: "₹100 - ₹3,000",
        bestTime: "Year-round"
      },
      {
        category: "Adventure Gear",
        description: "Equipment for adventure activities",
        places: ["Adventure shops", "Sports stores"],
        items: ["Rafting gear", "Trekking equipment", "Camping gear", "Waterproof bags"],
        priceRange: "₹500 - ₹15,000",
        bestTime: "Adventure season"
      }
    ],
    hotels: [
      {
        name: "Ananda in the Himalayas",
        type: "Luxury Spa Resort",
        price: "₹15,000-40,000/night",
        rating: "4.8/5",
        facilities: ["Spa treatments", "Yoga sessions", "Fine dining", "Pool"],
        location: "Narendra Nagar",
        distance: "16 km from Rishikesh"
      },
      {
        name: "Aloha on the Ganges",
        type: "4-Star Boutique Hotel",
        price: "₹6,000-15,000/night",
        rating: "4.5/5",
        facilities: ["Riverside views", "Restaurant", "Spa", "Adventure desk"],
        location: "Byasi",
        distance: "8 km from main town"
      },
      {
        name: "Ganga Kinare",
        type: "Mid-range Hotel",
        price: "₹3,000-8,000/night",
        rating: "4.2/5",
        facilities: ["Riverside location", "Restaurant", "Garden", "Parking"],
        location: "Swarg Ashram",
        distance: "1 km from Laxman Jhula"
      },
      {
        name: "Yoga Ashrams",
        type: "Spiritual Accommodation",
        price: "Donation basis or ₹500-2,000/night",
        rating: "4.0/5",
        facilities: ["Simple rooms", "Vegetarian food", "Yoga classes", "Meditation"],
        location: "Various locations",
        distance: "Walking distance to Ganga"
      },
      {
        name: "Budget Guest Houses",
        type: "Economy Accommodation",
        price: "₹800-2,500/night",
        rating: "3.5/5",
        facilities: ["Basic Rooms", "Attached Bath", "Food Available"],
        location: "Laxman Jhula area",
        distance: "Central locations"
      }
    ],
    places: [
      {
        name: "Laxman Jhula",
        description: "Iconic 450-foot suspension bridge over Ganga with spiritual significance",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Early morning or evening",
        highlights: ["Bridge crossing", "Temple views", "Photography", "River views"]
      },
      {
        name: "Triveni Ghat",
        description: "Main ghat for holy dip and famous Ganga Aarti ceremony",
        timing: "24 hours (Aarti: 6:00 PM)",
        entryFee: "Free",
        bestTime: "Evening for Aarti",
        highlights: ["Ganga Aarti", "Holy dip", "Spiritual experience", "Evening prayers"]
      },
      {
        name: "The Beatles Ashram",
        description: "Historic ashram where Beatles stayed and composed music",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "₹150 per person",
        bestTime: "Morning",
        highlights: ["Beatles history", "Graffiti art", "Meditation cells", "Photography"]
      },
      {
        name: "Neelkanth Mahadev Temple",
        description: "Sacred temple dedicated to Lord Shiva amidst forests",
        timing: "6:00 AM - 7:00 PM",
        entryFee: "Free",
        bestTime: "Morning",
        highlights: ["Religious significance", "Mountain views", "Peaceful environment", "Architecture"]
      },
      {
        name: "Parmarth Niketan",
        description: "Largest ashram in Rishikesh with beautiful gardens",
        timing: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "Morning for yoga",
        highlights: ["Yoga classes", "Ganga Aarti", "Beautiful gardens", "Spiritual talks"]
      },
      {
        name: "Rajaji National Park",
        description: "Wildlife sanctuary with diverse flora and fauna",
        timing: "6:00 AM - 6:00 PM",
        entryFee: "₹150 per person",
        bestTime: "November to June",
        highlights: ["Wildlife safari", "Bird watching", "Elephant sightings", "Nature walks"]
      },
      {
        name: "Kunjapuri Temple",
        description: "Hilltop temple offering panoramic Himalayan views",
        timing: "5:00 AM - 7:00 PM",
        entryFee: "Free",
        bestTime: "Sunrise",
        highlights: ["Sunrise views", "Himalayan panorama", "Trekking", "Photography"]
      },
      {
        name: "Ram Jhula",
        description: "Another iconic suspension bridge with ashrams and temples",
        timing: "24 hours",
        entryFee: "Free",
        bestTime: "Morning and evening",
        highlights: ["Bridge walk", "Temple visits", "River views", "Shopping"]
      }
    ],
    activities: [
      {
        name: "White Water Rafting",
        location: "Ganga River",
        duration: "2-4 hours",
        cost: "₹1,500-4,000 per person",
        bestTime: "September to June",
        experience: "Thrilling rapids from Shivpuri to Rishikesh"
      },
      {
        name: "Bungee Jumping",
        location: "Jumpin Heights",
        duration: "2-3 hours",
        cost: "₹3,500-4,500 per jump",
        bestTime: "Year-round",
        experience: "India's highest bungee jump platform"
      },
      {
        name: "Yoga and Meditation",
        location: "Various Ashrams",
        duration: "1 hour to months",
        cost: "Free to ₹2,000/day",
        bestTime: "Year-round",
        experience: "Learn from expert gurus in spiritual environment"
      },
      {
        name: "Trekking",
        location: "Nearby Himalayas",
        duration: "1-7 days",
        cost: "₹1,000-10,000 per person",
        bestTime: "March to June, September to November",
        experience: "Scenic trails through mountains and forests"
      },
      {
        name: "Camping",
        location: "Riverside camps",
        duration: "Overnight",
        cost: "₹1,500-5,000 per person",
        bestTime: "October to April",
        experience: "Riverside camping with bonfire and activities"
      },
      {
        name: "Ayurvedic Treatments",
        location: "Ayurvedic centers",
        duration: "1 hour to weeks",
        cost: "₹500-5,000 per session",
        bestTime: "Year-round",
        experience: "Traditional healing and rejuvenation therapies"
      }
    ],
    yogaAshrams: [
      {
        name: "Parmarth Niketan",
        focus: "Yoga and Spiritual Studies",
        programs: ["Hatha Yoga", "Meditation", "Vedic Studies", "Yoga Teacher Training"],
        duration: "1 day to 3 months",
        cost: "Donation basis or ₹1,000-5,000/month",
        special: "Evening Ganga Aarti and international community"
      },
      {
        name: "Sivananda Ashram",
        focus: "Classical Yoga",
        programs: ["Yoga Vacation", "Teacher Training", "Advanced Yoga", "Meditation"],
        duration: "2 weeks to 2 months",
        cost: "₹800-2,000/day",
        special: "Traditional yoga following Sivananda tradition"
      },
      {
        name: "Yoga Niketan",
        focus: "Ashtanga Yoga",
        programs: ["Ashtanga Vinyasa", "Pranayama", "Yoga Therapy", "Philosophy"],
        duration: "1 week to 6 months",
        cost: "₹500-1,500/day",
        special: "Serene environment with experienced teachers"
      },
      {
        name: "Omkarananda Ashram",
        focus: "Spiritual Development",
        programs: ["Meditation", "Yoga", "Scripture Study", "Self-Realization"],
        duration: "Flexible",
        cost: "Donation basis",
        special: "Peaceful location with Himalayan views"
      }
    ],
    precautions: [
      {
        category: "Spiritual Etiquette",
        tips: [
          "Dress modestly, especially in temples and ashrams",
          "Remove shoes before entering religious places",
          "Maintain silence in meditation and prayer areas",
          "Respect local customs and traditions"
        ]
      },
      {
        category: "Adventure Safety",
        tips: [
          "Use only authorized operators for adventure sports",
          "Check safety equipment before activities",
          "Follow instructor guidelines strictly",
          "Avoid rafting during monsoon season"
        ]
      },
      {
        category: "Health & Wellness",
        tips: [
          "Drink only bottled or purified water",
          "Carry necessary medications",
          "Be prepared for weather changes",
          "Stay hydrated during outdoor activities"
        ]
      },
      {
        category: "Travel & Transportation",
        tips: [
          "Book adventure activities in advance during peak season",
          "Use registered taxis and guides",
          "Carry cash as many places don't accept cards",
          "Keep important documents safe"
        ]
      },
      {
        category: "Environmental Care",
        tips: [
          "Avoid plastic usage near river",
          "Don't litter in natural areas",
          "Respect wildlife in national parks",
          "Use eco-friendly products"
        ]
      }
    ]
  };

  // Carousel Functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === rishikeshImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? rishikeshImages.length - 1 : prevIndex - 1
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
                src={rishikeshImages[currentImageIndex].url} 
                alt={rishikeshImages[currentImageIndex].title}
                style={styles.carouselImage}
              />
              <div style={styles.carouselText}>
                <h3 style={styles.carouselTitle}>{rishikeshImages[currentImageIndex].title}</h3>
                <p style={styles.carouselDescription}>{rishikeshImages[currentImageIndex].description}</p>
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
                {rishikeshImages.map((_, index) => (
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

            <h2 style={styles.sectionTitle}>🕉️ About Rishikesh - Yoga Capital of the World</h2>
            <p style={{fontSize: '18px', lineHeight: '1.8', textAlign: 'justify'}}>
              {rishikeshData.overview.content}
            </p>
            
            <div style={styles.legend}>
              <h3 style={{color: '#008080', marginBottom: '10px'}}>🌊 Why Visit Rishikesh?</h3>
              <p>Rishikesh offers a unique combination of deep spirituality and thrilling adventure. It's where ancient traditions meet modern adventure sports, creating an experience that caters to both soul-searchers and adrenaline junkies. The town's energy is palpable - from the serene morning yoga sessions to the roaring rapids of the Ganga.</p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={{color: '#008080', marginBottom: '15px'}}>📅 Best Time to Visit</h3>
                <p><span style={styles.highlight}>September to November:</span> Pleasant weather, ideal for all activities</p>
                <p><span style={styles.highlight}>December to February:</span> Cold but perfect for spiritual retreats</p>
                <p><span style={styles.highlight}>March to June:</span> Summer, good for adventure sports</p>
                <p><span style={styles.highlight}>July to August:</span> Monsoon, limited adventure activities</p>
              </div>
              
              <div style={styles.card}>
                <h3 style={{color: '#008080', marginBottom: '15px'}}>🚗 How to Reach</h3>
                <p><span style={styles.highlight}>By Air:</span> Jolly Grant Airport, Dehradun (21 km)</p>
                <p><span style={styles.highlight}>By Train:</span> Haridwar Railway Station (25 km)</p>
                <p><span style={styles.highlight}>By Road:</span> Well connected from Delhi, Haridwar, Dehradun</p>
                <p><span style={styles.highlight}>Local Transport:</span> Auto-rickshaws, Taxis, Local buses</p>
              </div>
            </div>

            {/* Rating Section */}
            <div style={styles.ratingSection}>
              <h3 style={styles.ratingTitle}>⭐ Rate Your Rishikesh Experience</h3>
              <p>Share your spiritual and adventure experiences</p>
              
              <div style={styles.ratingGrid}>
                <div style={styles.ratingCard}>
                  <h4>Overall Spiritual Experience</h4>
                  <p>How was your spiritual journey in Rishikesh?</p>
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
                  <h4>Adventure Activities</h4>
                  <p>How thrilling were the adventure sports?</p>
                  {userRatings.adventure ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.adventure.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.adventure.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'adventure', type: 'Adventure Activities' })}
                    >
                      Rate Adventure
                    </button>
                  )}
                </div>

                <div style={styles.ratingCard}>
                  <h4>Yoga & Meditation</h4>
                  <p>How transformative was your yoga experience?</p>
                  {userRatings.yoga ? (
                    <div style={styles.userRating}>
                      <p><strong>Your Rating:</strong> {userRatings.yoga.rating}/5</p>
                      <div style={styles.ratingStars}>
                        {renderStars(userRatings.yoga.rating)}
                      </div>
                    </div>
                  ) : (
                    <button 
                      style={styles.rateButton}
                      onClick={() => handleRateClick({ name: 'yoga', type: 'Yoga Experience' })}
                    >
                      Rate Yoga
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
            <h2 style={styles.sectionTitle}>🍽️ Famous Foods & Local Cuisine</h2>
            <div style={styles.grid}>
              {rishikeshData.famousFoods.map((food, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#008080', marginBottom: '15px'}}>{food.name}</h3>
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
            <h2 style={styles.sectionTitle}>🛍️ Shopping in Rishikesh</h2>
            <div style={styles.grid}>
              {rishikeshData.shopping.map((item, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#008080', marginBottom: '15px'}}>{item.category}</h3>
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
              {rishikeshData.hotels.map((hotel, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#008080', marginBottom: '15px'}}>{hotel.name}</h3>
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
              {rishikeshData.places.map((place, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#008080', marginBottom: '15px'}}>{place.name}</h3>
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

      case 'activities':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🚣 Adventure & Activities</h2>
            <div style={styles.grid}>
              {rishikeshData.activities.map((activity, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#008080', marginBottom: '15px'}}>{activity.name}</h3>
                  <p><strong>Location:</strong> {activity.location}</p>
                  <p><strong>Duration:</strong> {activity.duration}</p>
                  <p><strong>Cost:</strong> <span style={styles.price}>{activity.cost}</span></p>
                  <p><strong>Best Time:</strong> {activity.bestTime}</p>
                  <p><strong>Experience:</strong> {activity.experience}</p>
                </div>
              ))}
            </div>

            <h2 style={{...styles.sectionTitle, marginTop: '50px'}}>🧘 Yoga Ashrams & Centers</h2>
            <div style={styles.grid}>
              {rishikeshData.yogaAshrams.map((ashram, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#008080', marginBottom: '15px'}}>{ashram.name}</h3>
                  <p><strong>Focus:</strong> {ashram.focus}</p>
                  <p><strong>Programs:</strong> {ashram.programs.join(', ')}</p>
                  <p><strong>Duration:</strong> {ashram.duration}</p>
                  <p><strong>Cost:</strong> <span style={styles.price}>{ashram.cost}</span></p>
                  <p><strong>Special:</strong> {ashram.special}</p>
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
              {rishikeshData.precautions.map((category, index) => (
                <div key={index} style={styles.card}>
                  <h3 style={{color: '#008080', marginBottom: '15px'}}>{category.category}</h3>
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
              <p><strong>Local Police (Rishikesh):</strong> 0135-2430220 | <strong>Hospital:</strong> 0135-2430270</p>
              <p><strong>Tourist Information Center:</strong> 0135-2430209</p>
              <p><strong>Rafting Emergency:</strong> 0135-2442244</p>
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
        <h1 style={styles.title}>🕉️ Rishikesh</h1>
        <p style={styles.subtitle}>Yoga Capital of the World - Where Spirituality Meets Adventure</p>
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
                e.target.style.backgroundColor = '#20B2AA';
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
            {tab === 'activities' && '🚣 Activities'}
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
        <p>© 2024 Rishikesh Travel Guide. Experience the Yoga Capital of the World!</p>
        <p style={{fontSize: '14px', marginTop: '10px'}}>
          Har Har Gange - May the holy Ganga bless all visitors with peace and adventure
        </p>
      </div>
    </div>
  );
};

export default RishikeshTravelGuide;
