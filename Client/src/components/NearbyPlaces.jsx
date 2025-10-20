import React from "react";
import { motion } from "framer-motion";

const nearbyPlacesData = {
  "Agra": [
    {
      name: "Taj Mahal",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      className: "w-full h-full object-cover"
    },
    {
      name: "Agra Fort",
      type: "Attraction",
      image: "https://plus.unsplash.com/premium_photo-1697730373510-51b7fcf2ff52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdyYSUyMGZvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      name: "ITC Mughal",
      type: "Hotel",
      image: "https://media.istockphoto.com/id/698902360/photo/diwan-i-khas-in-the-pachisi-courtyard-fatehpur-sikri-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=2fDXdXtTHH70CQhXxIq2t3NZSB-TyOaarMQV2XQp91c=",
    }
  ],
  "Ahmedabad": [
    {
      name: "Sabarmati Ashram",
      type: "Attraction",
      image: "https://plus.unsplash.com/premium_photo-1661934637634-6ea976de7a43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FiYXJtYXRpJTIwYXNocmFtfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Kankaria Lake",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1596201403089-d6cb29543f22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fua2FyaWElMjBsYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Adalaj Stepwell",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1662101511083-2411bdc40f27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWRhbGFqJTIwc3RlcHdlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    }
  ],
  "AjantaElloraCaves": [
    {
      name: "Ajanta Caves",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=1200&h=600&fit=crop",
    },
    {
      name: "Ellora Caves",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1200&h=600&fit=crop",
    },
    {
      name: "Hotel Kailas",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1621261144936-7b3f6c4c0d6a?w=1200&h=600&fit=crop",
    }
  ],
  "AndamanNicobar": [
    {
      name: "Radhanagar Beach",
      type: "Attraction",
      image: "https://media.istockphoto.com/id/1369829721/photo/radhanagar-beach-swaraj-dweep.webp?a=1&b=1&s=612x612&w=0&k=20&c=DGOFtRuwFnMSbuS7DiP-uxoQGTyRPOLoI_omNQ_wZ90=",
    },
    {
      name: "Neil Island",
      type: "Attraction",
      image: "https://imgs.search.brave.com/842CzFavFXMF3e39X4nSjhZsyoE9QR7EG-efzR-QGzs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3RhbXBl/ZG1vbWVudHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzEwL2xha3NobWFu/cHVyLWJlYWNoLTEt/bmVpbC1pc2xhbmQt/YW5kYW1hbi0yLmpw/Zz9maXQ9MTAyNCw3/Njgmc3NsPTE",
    },
    {
      name: "Scuba Diving",
      type: "Hotel",
      image: "https://imgs.search.brave.com/5K0PnIS4i-O4yPOCq87E0eUZeGl7I1-wbnrTSrlodVk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/MzIxMDMwNy9waG90/by9hLXNjdWJhLWRp/dmVyc2l0cy1vbi1h/LWJvYXQtYW5kLWxv/b2tzLWF0LXRoZS10/dXJxdW9pc2Utc2Vh/LWluLWtyYWJpLXRo/YWlsYW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05MlhJ/eVpfUGI1Qi1RY0tn/cXl0MFlCQUN2UkEt/cEZZQXpJOTRGR0RO/cGhNPQ",
    }
  ],
  "ArakuValley":[
    {
      name: "Borra Caves",
      type: "Attraction",
      image: "https://imgs.search.brave.com/DSqNQ7uced7OeBEP2Gmk_iFWfeM64Bm1B0wzcnx2ARQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI2/OTYzNTQ2L3Bob3Rv/L2NvbG9yZnVsLWJv/cnJhLWNhdmVzLWxv/Y2F0ZWQtb24tdGhl/LWVhc3QtY29hc3Qt/b2YtaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTV5/MERrWVA4T3c1UHVX/TGVTOG04Y2kwT0V2/clJFNHNEbUdacktH/Q2NBQW89",
      className: "w-full h-full object-cover"
    },
    {
      name: "Tribal Museum",
      type: "Attraction",
      image: "https://imgs.search.brave.com/KmyyAPH0uvYk-ANVP-hvdjkm_GHDYtYT7BZ7XXq6Mrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaG9w/Lm11c2V1bXNvZmlu/ZGlhLm9yZy9zaXRl/cy9kZWZhdWx0L2Zp/bGVzLzIwMjAtMDMv/QXJha3UlMjBUcmli/YWwlMjBNdXNldW1f/aW1nMS5qcGVn",
    },
    {
      name: "Katiki Waterfalls",
      type: "Attraction",
      image: "https://imgs.search.brave.com/qFAHoLLAI9kvbm1wyiG6Tq4TUn1Veqw8ucP_koikoqw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iYWNr/cGFja2Vyc3VuaXRl/ZC5pbi9fbmV4dC9p/bWFnZT91cmw9aHR0/cHM6Ly9icHUtaW1h/Z2VzLXYxLnMzLmV1/LW5vcnRoLTEuYW1h/em9uYXdzLmNvbS91/cGxvYWRzLzE3MjE5/ODAxMzk0MzJfS2F0/aWtpJTIwV2F0ZXJm/YWxscyUyMDQlMjAu/anBlZyZ3PTM4NDAm/cT03NQ",
    },
  ],
  "Auli":[
    {
      name: "Auli Ski Resort",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1582054879934-92c44a8e149f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVsaSUyMHNraSUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Auli Artificial Lake",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1701599346683-37a6c9d1e001?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    },
    {
      name: "Paonromic Himalayan Views",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1631377952034-a0460eba141f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVsaSUyMGhpbWFsYXlhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    }
  ],
  // "Backwater_Stays": [
  //   {
  //     name: "Alleppey Backwaters",
  //     type: "Attraction",
  //     image: "https://media.istockphoto.com/id/177447843/photo/house-boat-in-backwaters.webp?a=1&b=1&s=612x612&w=0&k=20&c=-qor9710ge3GbC6MvV0Mp9AK4UxmzfcFxphG5L_xMXE=",
  //   },
  //   {
  //     name: "Paddy Fields",
  //     type: "Attraction",
  //     image: "https://media.istockphoto.com/id/657317806/photo/green-rice-fields-beside-kerala-backwaters-in-alleppey-kerala-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=4KNhXP-PQFxNc77O1RSVxC0wO-68kqdKRdMMfmc45_U=",
  //   },
  //   {
  //     name: "Houseboats",
  //     type: "Hotel",
  //     image: "https://media.istockphoto.com/id/471988323/photo/india.webp?a=1&b=1&s=612x612&w=0&k=20&c=RVx3BjCK4oghitogZjx9BN-dn4RWiKH-4ghZJFWzsiw=",
  //   }
  // ],
  "Bikaner": [
    {
      name: "Junagarh Fort",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1706163903474-dfa8697c0134?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVuYWdhcmglMjBwYWxhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
    },
    {
      name: "Karni Mata Temple",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1730021155304-9ff1f0f33b29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGthcm5pJTIwbWF0YSUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
    },
    {
      name: "Narendra Bhawan",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1699949985517-cfcd9a3b154c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVyaXRhZ2UlMjBob3RlbCUyMHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
    }
  ],
  "Bir Billing": [
    {
      name: "Bir Monastery",
      type: "Attraction",
      image: "https://imgs.search.brave.com/5k54QYUJeENOsg58k0_TIVYcljw6_WUFUOP3iVHBFfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2xvYmFsLWdhbGxp/dmFudGluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDcvMTA1MDIwNS0w/MS0xMDI0eDc2OC5q/cGVn"
    },
    {
      name: "Billing Paragliding",
      type: "Attraction",
      image: "https://imgs.search.brave.com/v1afV2oIIRl8CClWQWDbkxa2nJwiOLdyQec-_lPwnDk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYW51/YWR2ZW50dXJlc2lu/ZGlhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNC9x/bTNlNmp6MjBtaWxu/dW9ucnJqdDRzOTJi/cjM1XzE1NjM5NzAx/NjFfMy53ZWJw"
    },
    {
      name: "Zostel Bir",
      type: "Hotel",
      image: "https://imgs.search.brave.com/nww1xXiiZjoH7Ru0o7NZ-7neamyTp1zY-smq5in8QU4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvbWF4MTAy/NHg3NjgvMjMzMzQz/NTAyLmpwZz9rPTdl/ZmE2NTExNmNlYTA5/NjllNTljOTc4MjA5/Y2RjMWU2Mjk4ZGZh/Y2M3OTE3MjE2M2Zj/YWE3Zjg1YmI1NDI0/NzQmbz0maHA9MQ"
    }
  ],
  "Goa": [
    {
      name: "Baga Beach",
      type: "Attraction",
      image: "https://imgs.search.brave.com/HaPaXJ07RIPp8N3tZGEe0Ovlp5uSzLZYg6ZNN276sgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iYWdh/LWJlYWNoLW9uZS1t/b3N0LXBvcHVsYXIt/dmlzaXRlZC1iZWFj/aGVzLW5vcnRoLWdv/YS1uYW1lZC1jcmVl/ay13aGljaC1mbG93/cy1hcmFiaWFuLXNl/YS1wZXJmZWN0LTE3/NTY2NTMzNC5qcGc",
    },
    {
      name: "Dudhsagar Falls",
      type: "Attraction",
      image: "https://imgs.search.brave.com/ENOTJABl3qyFGRHwNvIXNRqPPQpPKub98bBtgeReG6g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI0/NjIzMDk0OC9waG90/by90aGUtZHVkaHNh/Z2FyLWZhbGxzLWlu/LWdvYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dlZCZ3Nn/YmF5cFhQM25ydUx2/czdvUWpIYlNyR0ha/SDFZaU4tZmtMTmlR/WT0",
    },
    {
      name: "Old Goa Churches",
      type: "Attraction",
      image: "https://imgs.search.brave.com/75rdeWucw7iZZl1nFVVKTLPUldIVqRltzcHcvvIJlSs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/OTQwNDYxNC9waG90/by9jaHVyY2hlcy1v/Zi1vbGQtZ29hLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1l/c2tObGhFMlhUY1Y1/RDAyeVhQNVJEWlpG/Z19keU5qbVNYT21u/UDhkVHc0PQ",
    },
  ],
  "Jaipur": [
    {
      name: "Hawa Mahal",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Amber Fort",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Rambagh Palace",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    }
  ],
  // "Jaisalmer": [
  //   {
  //     name: "Jaisalmer Fort",
  //     type: "Attraction",
  //     image: "https://source.unsplash.com/400x300/?jaisalmer-fort"
  //   },
  //   {
  //     name: "Sam Sand Dunes",
  //     type: "Attraction",
  //     image: "https://source.unsplash.com/400x300/?sam-sand-dunes"
  //   },
  //   {
  //     name: "Suryagarh",
  //     type: "Hotel",
  //     image: "https://source.unsplash.com/400x300/?suryagarh"
  //   }
  // ],
  "Jodhpur": [
    {
      name: "Mehrangarh Fort",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Umaid Bhawan Palace",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1545321945-7edd9bf1331a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
    },
    {
      name: "RAAS Jodhpur",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1504194947363-2f14d9e0e445?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    }
  ],
  "Kanchipuram": [
    {
      name: "Kanchipuram Temples",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1697263021095-1b702c092026?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FuY2hpcHVyYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Kanchi Kudil",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1757681079728-a9a115fff11f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthbmNoaXB1cmFtfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Regency Kanchipuram",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1660463835177-bc6329055a6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGthbmNoaXB1cmFtfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
    }
  ],
  "Kanyakumari": [
    {
      name: "Vivekananda Rock Memorial",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1646722391520-98919b71ea72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGthbnlha3VtYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Kanyakumari Temple",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1645689326349-61af008aad82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGthbnlha3VtYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "The Gopinivas Grand",
      type: "Hotel",
      image: "https://source.unsplash.com/400x300/?gopinivas-grand"
    }
  ],
  "Kasauli": [
    {
      name: "Kasauli Brewery",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1637204329780-e82358c50ee3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2FzYXVsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Christ Church",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1715964644963-ec9668b880ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FzYXVsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Kasauli Regency",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1634541576884-359e3db2a675?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthc2F1bGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    }
  ],
  "Kasol": [
    {
      name: "Parvati River",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1612638039814-1a67ea727114?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fzb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Riverside Camps",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1662944113366-123561a844e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2Fzb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "The Himalayan Village",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1643042725188-42df82135f1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2Fzb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    }
  ],
  "Kedarnath": [
    {
      name: "Kedarnath Temple",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VkYXJuYXRofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Himalayan Ranges",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1606722581293-628fa217a6f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlZGFybmF0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Chorobari Glacier",
      type: "Hotel",
      image: "https://images.unsplash.com/photo-1617860931879-19d32ec9912d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2VkYXJuYXRofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
    }
  ],
  "Khajjiar": [
    {
      name: "Khajjiar Lake",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1714381639586-80d1f04dfb0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2hhamppYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Khajjar Meadow",
      type: "Attraction",
      image: "https://images.unsplash.com/photo-1600491001617-36f4e8005cc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2hhamppYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      name: "Khajji Nag Temple",
      type: "Temple",
      image: "https://images.unsplash.com/photo-1653454656100-0fd5ea96bebf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2hhamppYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    }
  ],
  "Khajuraho": [
  {
    name: "Kandariya Mahadev Temple",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2hhanVyYWhvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Western Group of Temples",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1672215051407-6e05138da3a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2hhanVyYWhvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "The Lalit Temple View",
    type: "Temple",
    image: "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2hhanVyYWhvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  }
],
"Kochi": [
  {
    name: "Marine Drive",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1558013400-b724200f9c39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29jaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Chinese Fishing Nets",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1605955794720-651b9ae7f5e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29jaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Jewish Synagogue",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1590123717647-de5b78ed762e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtvY2hpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  }
],
"Kodaikanal": [
  {
    name: "Kodaikanal Lake",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1593692716621-1e228b0a9224?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29kYWlrYW5hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Coaker's Walk",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1633931698758-f59cdaf042a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtvZGFpa2FuYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Pillar Rocks",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1734007741768-0d55ed0cc02b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a29kYWlrYW5hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
  }
],
"Kolkata": [
  {
    name: "Howrah Bridge",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Victoria Memorial",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1603813507806-0d311a6eecd1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "The Dakshineswar Temple",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
  }
],
// "Kollur Mookambika": [
//   {
//     name: "Mookambika Temple",
//     type: "Attraction",
//     image: "https://source.unsplash.com/400x300/?mookambika-temple"
//   },
//   {
//     name: "Kollur Beach",
//     type: "Attraction",
//     image: "https://source.unsplash.com/400x300/?kollur,beach"
//   },
//   {
//     name: "Adiga's Hotel",
//     type: "Hotel",
//     image: "https://source.unsplash.com/400x300/?kollur,hotel"
//   }
// ],
"Konark": [
  {
    name: "Sun Temple",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29uYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Intricate Carvings",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1601815264039-67c8ba1a7f98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a29uYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Wheel of Konark",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1682703174034-f9de5333d7d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtvbmFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
  }
],
"Lansdowne": [
  {
    name: "Snow-clad Himalayas",
    type: "Attraction",
    image:  "https://images.unsplash.com/photo-1606202801044-284067800cdf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuc2Rvd25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Colonial Architecture",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1502215842985-f167631b0151?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuc2Rvd25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Pine Forests",
    type: "Hotel",
    image: "https://plus.unsplash.com/premium_photo-1674289121560-79ca47c03788?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuc2Rvd25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  }
],
"Leh": [
  {
    name: "Pangong Lake",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Leh Palace",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1695954591222-b8645dee4caf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVoJTIwcGFsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Nubra Valley",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
  }
],
"Lovedale": [
  {
    name: "Ooty Rose Garden",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1729228639759-bf2e14d8673d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG92ZWRhbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Doddabetta Peak",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1708505116595-488b5cbf58d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG92ZWRhbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
  },
  {
    name: "Colonial Bunglows",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1589908916333-ff0862dc16be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZWRhbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
  }
],
"Lucknow": [
  {
    name: "Bara Imambara",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1601752874509-0e350467dc7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVja25vd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Rumi Darwaza",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1688287580970-70fe8e0f4bef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHVja25vd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "British Residency",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1547716467-fdb9102f1ac4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHVja25vd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Mahabalipuram": [
  {
    name: "Shore Temple",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1717522692051-78f400c96270?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcmUlMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Five Rathas",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1740727263526-106ea10a355a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuY2hhJTIwUmF0aGFzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Arjuna's Penance",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1713986720216-4abc6d414c82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJqdW5hJ3MlMjBQZW5hbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  }
],
"Manali": [
  {
    name: "Snow-Capped Mountains",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1735453251488-7a2175e4a716?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U25vdy1DYXBwZWQlMjBNb3VudGFpbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Solang Valley",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1713063968789-adf139c4a1eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U29sYW5nJTIwVmFsbGV5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Hadimba Temple",
    type: "Ancient temple amidst deodar forests",
    image: "https://images.unsplash.com/photo-1655470062196-c37e923fc4c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFkaW1iYSUyMFRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Mathura": [
  {
    name: "Shri Krishna Janmabhoomi",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1644254881308-70dca01a049d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aHVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Vishram Ghat",
    type: "Attraction",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQNs10KGVf1Ep0PTzl4mqKSTTih-KhJgxJw&s"
  },
  {
    name: "Dwarkadhish Temple",
    type: "Beautiful temple dedicated to Lord Krishna",
    image: "https://images.unsplash.com/photo-1668160747331-4275e35f0713?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHdhcmthZGhpc2glMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Meppadi": [
  {
    name: "Meppadi hills",
    type: "Beautiful hill station in Wayanad",
    image: "https://images.unsplash.com/photo-1709105134096-7f0ebf30a3b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVwcGFkaSUyMEhpbGxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Coffee Plantations",
    type: "Lush green coffee estates",
    image: "https://images.unsplash.com/photo-1649815510295-189356f5b694?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZWUlMjBwbGFudGF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Misty Mountains",
    type: "Cloud-covered Western Ghats",
    image: "https://images.unsplash.com/photo-1585883721249-85e1112e6281?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVwcGFkaSUyMG1pc3QlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  }
],"Mount Abu": [
  {
    name: "Dilwara Temples",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1675080990465-e04000543cd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpbHdhcmElMjB0ZW1wbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Nakki Lake",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1724250385111-3e06c1429b29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFra2klMjBsYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Sunset Point",
    type: "Breathtaking sunset views over Aravalli hills",
    image: "https://images.unsplash.com/photo-1676555359137-3c84dd96a226?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnQlMjBhYnUlMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Mumbai": [
  {
    name: "Gateway of India",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&h=400&fit=crop"
  },
  {
    name: "Marine Drive",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1666843527155-14ec5f016802?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFyaW5lJTIwZHJpdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Chhatrapati Shivaji Terminus",
    type: "UNESCO World Heritage Site",
    image: "https://images.unsplash.com/photo-1710838182226-8646b6949a2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hoYXRyYXBhdGklMjBTaGl2YWppJTIwVGVybWludXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Munnar": [
  {
    name: "Munnar Tea Gardens",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Eravikulam National Park",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1574423886860-a27bb1814f28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXJhdmlrdWxhbSUyME5hdGlvbmFsJTIwUGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Mattupetty Dam",
    type: "Beautiful dam surrounded by rolling hills",
    image: "https://images.unsplash.com/photo-1706721030382-c14c27844fbd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWF0dHVwZXR0eSUyMERhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Mussoorie": [
  {
    name: "Kempty Falls",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1580723209134-48a2fd4b5712?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2VtcHR5JTIwRmFsbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Gun Hill",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1638487246406-83a6dbdd3f36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3VuJTIwaGlsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Camel's Back Road",
    type: "Scenic walking trail with mountain views",
    image: "https://images.unsplash.com/photo-1610858976366-7299c0ddee75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FtZWwncyUyMEJhY2slMjBSb2FkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  }
],
"Mysore": [
  {
    name: "Mysore Palace",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1659126574791-13313aa424bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXlzb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Chamundi Hill",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1606141836803-d011ab38b61e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhbXVuZCUyMGhpbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Brindavan Gardens",
    type: "Beautiful gardens with musical fountain show",
    image: "https://images.unsplash.com/photo-1652010570939-6f8b53410331?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpbmRhdmFuJTIwZ2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600p"
  }
],
"Naggar": [
  {
    name: "Naggar Castle",
    type: "Attraction",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTWhxD16_OCYNBd1VOHsbJ_r29ldW_tt1GQ&s"
  },
  {
    name: "Nicholas Roerich Art Gallery",
    type: "Attraction",
    image: "https://plus.unsplash.com/premium_photo-1706430433607-48f37bdd71b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmljaG9sYXMlMjBSb2VyaWNoJTIwQXJ0JTIwR2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Chandrakhani Pass",
    type: "HoBeautiful mountain pass with panoramic viewstel",
    image: "https://images.unsplash.com/photo-1560278384-ef70153784a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hhbmRyYWtoYW5pJTIwUGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Nagpur": [
  {
    name: "Deekshabhoomi",
    type: "Attraction",
    image: "https://plus.unsplash.com/premium_photo-1694475572292-5f19c8a188c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFncHVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Futala Lake",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1728306919437-2b94c1c43388?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnV0YWxhJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Sitabuldi Fort",
    type: "Historic fort with panoramic city views",
    image: "https://images.unsplash.com/photo-1695911242774-c089fc814913?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2l0YWJ1bGRpJTIwRm9ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Ooty": [
  {
    name: "Ooty Lake",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1711553186754-0cfbdfe38b8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b290eSUyMGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Botanical Gardens",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym90YW5pY2FsJTIwZ2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Doddabetta Peak",
    type: "Highest point in the Nilgiri mountains",
    image: "https://images.unsplash.com/photo-1655895348625-5d9d7a366350?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RG9kZGFiZXR0YSUyMFBlYWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Pahalgam": [
  {
    name: "Betaab Valley",
    type: "Attraction",
    image: "https://plus.unsplash.com/premium_photo-1676761976616-a185bc5f7981?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmV0YWFiJTIwdmFsbGV5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Aru Valley",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1666438241711-d4001d1ff99a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ1JTIwdmFsbGV5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Welcomhotel by ITC",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1745243136447-e16e815d4a65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VsY29tZSUyMGl0Y3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  }
],
"Pangot": [
  {
    name: "Pangot Forest",
    type: "Attraction",
    image: "https://imgs.search.brave.com/g5zuMn1NO7ZjhrTmSPYQ7YGA0z6XoyZEzl2XZuEltOg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWF1/dGlmdWwtcGFuZ290/LXZpbGxhZ2UtaGlt/YWxheWFzLWxvY2F0/ZWQta20tbmFpbml0/YWwtNDEyNDgyNjku/anBn"
  },
  {
    name: "Bird Watching Trails",
    type: "Attraction",
    image: "https://imgs.search.brave.com/FCNgGQ5RVrMtravnsn9A7dOI8SSubV5Z7YKLtf8OenU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/aTFrZDBoTW9tUFN6/dldtTjBPYmpjbngy/bzNsOUV5MEVUU3Zi/WFc4a0xRdjQ0blVY/LTBWTFJXRUVSSUd1/U2ZUaWdsTlBscEpR/S1VQeWxjM05ZTGdj/N3dSMXNuNGgxNGQz/UTRycmVTMlJUWElM/SGxqdnpzVTM5TDda/QzJ3cWY2Y2s3Zy1Y/LWxwQjVUTVdFL3c2/NDAtaDQ4MC1ydy9i/aXJkX3dhdGNoaW5n/X2JheV9hcmVhSU1H/XzY2MzMuSlBH"
  },
  {
    name: "Jungle Lore Birding Lodge",
    type: "Hotel",
    image: "https://imgs.search.brave.com/eybi_19UBeHrXEWExps-P5tqqTtkTJazb9hc0i8bAcI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDIvMzAvZjcvNGIv/anVuZ2xlLWxvcmUt/YmlyZGluZy1sb2Rn/ZS5qcGc"
  }
],
"Patna": [
  {
    name: "Golghar",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1574313884751-84fd8b20c919?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZ2hhciUyMHBhdG5hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Patna Sahib Gurudwara",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1667745812053-2e5eddef5dd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0bmElMjBtdXNldW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Hotel Maurya",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Pondicherry": [
  {
    name: "Promenade Beach",
    type: "Attraction",
    image: "https://plus.unsplash.com/premium_photo-1675039871449-62f86fb78a70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvbWVuYWRlJTIwYmVhY2glMjBwb25kaWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Aurobindo Ashram",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1709817243500-87259ebd7d50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3JpJTIwYXVyb2JpbmRvJTIwYXNocmFtfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Palais de Mahe",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1721548685266-68edbc084187?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFsYWlzJTIwZGUlMjBNYWhlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  }
],
"Pune": [
  {
    name: "Shaniwar Wada",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1715678710159-ee67d5bdba85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhbml3YXIlMjB3YWRhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Aga Khan Palace",
    type: "Attraction",
    image: "https://plus.unsplash.com/premium_photo-1694475157443-58938d0ff195?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdhJTIwa2hhbiUyMHBhbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
    },
  {
    name: "JW Marriott Pune",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  }
],
"Puri": [
  {
    name: "Jagannath Temple",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/1069137628/photo/top-of-the-jagannath-temple-puri-odisha-india.webp?s=2048x2048&w=is&k=20&c=hsHY2ifaJtsllX5YqG6czbzgVeGoPD6u85sT03eHMSk=",
  },
  {
    name: "Chilika Lake",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1633530541201-139b32fa4ffa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    name: "Mayfair Heritage",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1720171649902-b839b8c774d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331Y"
  }
],
"Pushkar": [
  {
    name: "Pushkar Lake",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/475177362/photo/pushkar-camel-fair.webp?a=1&b=1&s=612x612&w=0&k=20&c=zkDWCmabI59HZHevjM0yngklejZvTHyWS11or9jPTMY=",
  },
  {
    name: "Brahma Temple",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/638532774/photo/brahma-hindu-temple-in-pushkar.webp?a=1&b=1&s=612x612&w=0&k=20&c=FdVMVpSZBwISwpPtealT94vF-hIMdjPXP3QdrJrMmYI=",
  },
  {
    name: "Colourful Streets",
    type: "Hotel",
    image: "https://media.istockphoto.com/id/979183928/photo/pushkar-town-sunset-panorama-view-from-papmochani-mata-hindu-temple-in-pushkar-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=MNsSJf3VO3uCwW6cJSTuNPCnkoP-oaR745OzzkfLzKg=",
  }
],
"Rameswaram": [
  {
    name: "Ramanathaswamy Temple",
    type: "Attraction",
    image: "https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFtYW5hdGhhc3dhbXklMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
  },
  {
    name: "Dhanushkodi Beach",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/2200798244/photo/closeup-view-of-dhanushkodi-via-drone-image-of-tamil-nadu-india-its-in-the-ramanathapuram.webp?a=1&b=1&s=612x612&w=0&k=20&c=J1svLNsK2WNgZtcb-JcQ3SZ90BKvkPAArhr2oE_pnCQ=",
  },
  {
    name: "Coastal Beauty",
    type: "Hotel",
    image: "https://media.istockphoto.com/id/2200798405/photo/scenic-aerial-image-of-the-pamban-bridge-at-sunrise-as-the-golden-hues-reflect-over-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=4FyuOKif19F3EHhVtiO_fJKac8Ab0qKxPBt2SlzA3lY=",
  }
],
"Ranikhet": [
  {
    name: "Ranikhet Hills",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/2151837635/photo/himalayan-landscapes.webp?a=1&b=1&s=612x612&w=0&k=20&c=vwKPTwWpeCOfsq7nX3hoSRTaQ36y-mT67iLiISdsBI0=",
  },
  {
    name: "Chaubatia Gardens",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/1184370261/photo/public-gardens-hyderabad-telangana-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=jdhISwFrUid4ZglP2UmCcoLZ5O5F8GUy0cFYqbFTvU8=",
  },
  {
    name: "Sunset Points",
    type: "Hotel",
    image: "https://media.istockphoto.com/id/1335083724/photo/sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=szY1LglMbVd8oep1hCzycGz0cizldmLP04iwQYyUeLY=",
  }
],
"Ranthambore": [
  {
    name: "Royal Bengal Tiger",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/674191480/photo/bengal-tiger-at-ranthambhore-national-park-in-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=gMayPggRz6Cf-Eskiz5TjaU8C7SR9a7Feunt1dXcYcQ=",
  },
  {
    name: "Ranthambore Fort",
    type: "Attraction",
    image:"https://media.istockphoto.com/id/1957671557/photo/ranthambore-fort-among-the-breathtaking-jungle-scenery-of-ranthambore-national-park-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=PO6qOD-vEXtOWEmz1c5-UruLTbFBdQglYCiuFF6G-BQ=",
  },
  {
    name: "Wildlife Diversity",
    type: "Hotel",
    image: "https://media.istockphoto.com/id/1163174046/photo/landscape-from-the-land-of-tigers-ranthambore-national-park-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=S2xhBpleYH5GDfvutCySvy-3GgsGkZwnYp7DsGRHGFc=",
  }
],
"Rishikesh": [
  {
    name: "Laxman Jhula",
    type: "Attraction",
    image: "https://www.istockphoto.com/photo/lakshman-jhula-rishikesh-india-gm1148100484-309941252?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FLaxman-Jhula&utm_term=Laxman+Jhula%3A%3A%3A",
  },
  {
    name: "Ganga Arthi at Triveni Ghat",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/2070123132/photo/aryaghat.webp?a=1&b=1&s=612x612&w=0&k=20&c=doCLc5CZT4wmhU7laiQhcNqHV5O-vscLFBzNqptJXTg=",
  },
  {
    name: "Yoga by the Ganges",
    type: "Hotel",
    image: "https://media.istockphoto.com/id/182755489/photo/young-woman-meditating-by-ganges-river-in-rishikesh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=cIup9CXDPA6U32LKMODUeQg3ikg_-4QAAwUjJ8wRLEk=",
  }
],
"Sabarimala": [
  {
    name: "Sabarimala Temple",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/1353922374/photo/sabarimala-lord-ayyappa-temple-keral.webp?a=1&b=1&s=612x612&w=0&k=20&c=ULpDumMY-SeRlBNE35a_yFgh9tUqHgXS5XPsNZ8ITKo=",
  },
  {
    name: "Pampa River",
    type: "Attraction",
    image: "https://plus.unsplash.com/premium_photo-1669047670004-e952cb988335?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFtYmElMjByaXZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    name: "Makara Jyothi",
    type: "Hotel",
    image: "https://images.unsplash.com/photo-1706392925777-6208f7b8f2e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435",
  }
],
"Saputara": [
  {
    name: "Saputara Lake",
    type: "Attraction",
    image: "https://imgs.search.brave.com/wI2nli-zccQSlrlatCQZ951QjgVed6988VF6AnDpNt4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubGFuZ2ltZy5j/b20vbmJ0L3RodW1i/LzkxMzk5MzIzL25h/dmJoYXJhdC10aW1l/cy5qcGc_aW1nc2l6/ZT0xMzk3OTAmd2lk/dGg9NzAwJnJlc2l6/ZW1vZGU9Mw"
  },
  {
    name: "Sunset Point",
    type: "Attraction",
    image: "https://imgs.search.brave.com/5Y5EiPTvZOdgCf-rup60mSVix0I_clKSKK0DqAonI5k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvc2Fw/dXRhcmEvbW10L2Fj/dGl2aXRpZXMvdF91/ZnMvbV9hY3Rpdml0/aWVzX3NhcHV0YXJh/X3N1bnNldF9wb2lu/dF9sXzQwMF82NDAu/anBn"
  },
  {
    name: "Aakar Lords Inn",
    type: "Hotel",
    image: "https://imgs.search.brave.com/QsX0MrGlqVXahlbxCUYL9Ch3Kym8-Rcacayth9kaVdI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8zLmlt/aW1nLmNvbS9kYXRh/My9UUS9LVS9NWS04/Njg1NzQ5L2hvdGVs/LWFha2FyLWxvcmRz/LWlubi1zYXB1dGFy/YS1ndWphcmF0LXJl/ZGVmaW5pbmctbHV4/dXJ5LTUwMHg1MDAu/anBn"
  }
],
"ShaktiPeeths": [
  {
    name: "Kamakhya Temple",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/1502218452/photo/sacred-hindu-shrine-in-assam-india-kamakhya-temple-sacred-place-of-worship-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=jme10wCWQH3PSHg6R2lfr2OkIf75x0t7d0N2hyHD1oQ=",
  },
  {
    name: "Vaishno Devi",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/1319981113/photo/vaishno-you-have-to.webp?a=1&b=1&s=612x612&w=0&k=20&c=knHEQfEqtcOjBYNrhY9EB29gWs-2kKEBFgJnKKnQSxo=",
  },
  {
    name: "Jwalamukhi Temple",
    type: "Hotel",
    image: "https://media.istockphoto.com/id/2222586177/photo/shri-chamunda-mata-temple-and-maa-jwalamukhi-devi-temple-on-the-south-side-of-mehrangarh-fort.webp?a=1&b=1&s=612x612&w=0&k=20&c=vD6kgWZZ58lQjP5BdeMnbVkz5QFFkr71cMt7SrR3zAY=",
  }
],
"Shillong": [
  {
    name: "Ward's Lake",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/1256329737/photo/the-umiam-lake-in-shillong-meghalaya-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ul8eCfFy0QOCm7_v19fyA3llHAm_oIUcG6V9yl3khgY=",
  },
  {
    name: "Shillong City View",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/2148423299/photo/shillong-city-buildings-with-mountains-and-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=BSWmD8agFpbL7j9Qxx2m6jJEfXLTjtm10Hzf0mc2aa0=",
  },
  {
    name: "Police Bazaar",
    type: "Hotel",
    image: "https://plus.unsplash.com/premium_photo-1749499938590-40291c621d2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9saWNlJTIwYmF6YWFyJTIwaW4lMjBzaGlsbG9uZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  }
],
"Shimla": [
  {
    name: "The Ridge",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/468899408/photo/dhingu-mandir-sanjauli-shimla.webp?a=1&b=1&s=612x612&w=0&k=20&c=kEq0xjYIRGgX95KA7hh_WLiVnK9pdeDxqbAii1Uqii4=",
  },
  {
    name: "Shimla Mall Road",
    type: "Attraction",
    image: "https://media.istockphoto.com/id/1138999470/photo/shimla-mall-road-in-evening.webp?a=1&b=1&s=612x612&w=0&k=20&c=KmDCGYmgmtXQyHAwjVlNG40AbVrIydYSkLYqBPcsdiQ=",
  },
  {
    name: "Toy Train Journey",
    type: "Hotel",
    image: "https://media.istockphoto.com/id/1225623485/photo/beautiful-view-of-after-snowfall-in-shimla-railway-station.webp?a=1&b=1&s=612x612&w=0&k=20&c=kd5DqPFz3bbTjD7ISr6bEqYO6Tur5wUpl2DnAjZ4AuE=",
  }
],
"Shirdi": [
  {
    name: "Sai Baba Temple",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1629640890590-7836d69c5237?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcmRpJTIwc2FpJTIwYmFiYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Dwarkamai",
    type: "Attraction",
    image: "https://imgs.search.brave.com/_ozbiaZMFzAidiHAN0eTf67z4w4iOXlt7n-PWK7ioBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zYWli/YWJhaW1hZ2VzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMi9MYXJnZXIt/Vmlldy1vZi1Ed2Fy/a2FtYWktU2FpLUJh/YmEtU2hpcmRpLTEw/MjR4Njg0LmpwZw",
  },
  {
    name: "Lendi Baug",
    type: "Hotel",
    image: "https://imgs.search.brave.com/W9UQn1EMpfnJBF3y1pLbSfln_vujGnRW7yDOlEtYuEE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hay1k/LnRyaXBjZG4uY29t/L2ltYWdlcy8wd3cw/dTEyMDAwOTBmdzZm/ZEQ4NjhfQ182NzBf/Mzc2X1E3MC53ZWJw/P3Byb2M9c291cmNl/L3RyaXAmcHJvYz1z/b3VyY2UvdHJpcA",
  }
],
"Tirupati": [
  {
    name: "Tirumala Venkateswara Temple",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1733805569204-41768c7d8c0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlydW1hbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Golden Gopuram",
    type: "Attraction",
    image: "https://images.unsplash.com/photo-1705723116788-d11fa6e3f415?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGlydW1hbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Marasa Sarovar Premiere",
    type: "Magnificent temple tower",
    image: "https://source.unsplash.com/400x300/?tirupati,hotel"
  }
]
};

const NearbyPlaces = ({ destinationName, onBack }) => {
  const nearbyPlaces = nearbyPlacesData[destinationName] || [];

  return (
    <section className="py-16 bg-gray-50 text-center">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
      >
        ← Back to Destinations
      </button>

      <h2 className="text-3xl font-bold mb-8">Nearby Places & Food in {destinationName}</h2>

      {nearbyPlaces.length === 0 ? (
        <p className="text-gray-500">No nearby places found for this destination.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {nearbyPlaces.map((place, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <img src={place.image} alt={place.name} className="w-full h-48 object-cover"/>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">{place.name}</h3>
                <p className="text-sm text-gray-500">{place.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default NearbyPlaces;