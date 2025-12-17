import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  // Real company logos
  const clients = [
    { name: 'Plyneer', logo: 'https://plyneer.com/cdn/shop/files/plyneer_logo2_1.png?v=1722234898&width=280' },
    { name: 'Kridhalam', logo: 'https://www.kridhalam.com/wp-content/uploads/2023/10/logo-1.png' },
    { name: 'mhgroove', logo: 'https://mhgroove.com/wp-content/uploads/2024/10/cropped-cropped-Groome-Logo.png' },
    { name: 'EBCO', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiQ3OraqulkE2LzVt7NxOb7mLtgXxfSFAMp1ox32D7oGNFjwcAB3NRFIrLm0xeD7Lnn4&usqp=CAU' },
    { name: 'GreenPly', logo: 'https://companieslogo.com/img/orig/GREENPLY.NS_BIG-b6a4a002.png?t=1604670420' },
    { name: 'Royale', logo: 'https://i2.wp.com/matlab.com.lb/wp-content/uploads/2018/01/royale_touche_logo_mobile.png?ssl=1' },
    { name: 'Hettich', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logo_of_Hettich_%28company%29.svg/1200px-Logo_of_Hettich_%28company%29.svg.png' },
    { name: 'Hafele', logo: 'https://www.sainiworld.in/cdn/shop/collections/1.jpg?v=1667386971' },
    { name: 'CenturyPly', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Century_Plyboards.svg/1200px-Century_Plyboards.svg.png' },
  ];

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="clients" className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We've partnered with exceptional clients to bring their interior visions to life
          </p>
        </div>

        {/* Sliding Logos Container */}
        <div className="relative">

          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-gray-900" />
          </button>
          
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-gray-900" />
          </button>

          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div
              className={`flex gap-8 md:gap-12 ${isPaused ? '' : 'animate-scroll'}`}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 md:p-8 w-44 h-24 md:w-52 md:h-28"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;