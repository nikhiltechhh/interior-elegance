import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Jubilee Hills, Hyderabad",
      rating: 5,
      review: "IRA Interiors transformed our home beautifully. Their attention to detail and professional approach made the entire process smooth and enjoyable.",
      project: "Complete Home Interior",
      date: "November 2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Banjara Hills, Hyderabad",
      rating: 5,
      review: "Exceptional quality and service! The modular kitchen they designed is not only stunning but also highly functional. The team was punctual and professional.",
      project: "Modular Kitchen",
      date: "October 2024"
    },
    {
      id: 3,
      name: "Anil Reddy",
      location: "Gachibowli, Hyderabad",
      rating: 5,
      review: "Working with IRA Interiors was a fantastic experience. They brought creativity and practicality together perfectly. Our office space now looks modern.",
      project: "Office Interior",
      date: "September 2024"
    },
    {
      id: 4,
      name: "Sneha Patel",
      location: "Kondapur, Hyderabad",
      rating: 5,
      review: "Absolutely loved the wardrobe designs! IRA Interiors maximized our storage space while keeping everything elegant and accessible. Top-notch craftsmanship!",
      project: "Wardrobe Design",
      date: "October 2024"
    },
    {
      id: 5,
      name: "Vikram Mehta",
      location: "Hitech City, Hyderabad",
      rating: 5,
      review: "From initial consultation to final execution, everything was handled professionally. The team delivered a stunning living room that's both stylish and comfortable.",
      project: "Living Room Interior",
      date: "November 2024"
    },
    {
      id: 6,
      name: "Kavita Rao",
      location: "Madhapur, Hyderabad",
      rating: 5,
      review: "IRA Interiors exceeded all our expectations! The bedroom interior they designed is peaceful and elegant. Their use of colors created the perfect ambiance.",
      project: "Bedroom Interior",
      date: "September 2024"
    },
    {
      id: 7,
      name: "Suresh Babu",
      location: "Kukatpally, Hyderabad",
      rating: 5,
      review: "Outstanding work on our commercial space! The design is modern, functional, and perfectly represents our brand. Very impressed with the final result.",
      project: "Commercial Interior",
      date: "August 2024"
    },
    {
      id: 8,
      name: "Deepa Krishnan",
      location: "Miyapur, Hyderabad",
      rating: 5,
      review: "The renovation work was completed on time and within budget. IRA Interiors team was professional throughout. Our home feels brand new now!",
      project: "Home Renovation",
      date: "October 2024"
    },
    {
      id: 9,
      name: "Ramesh Iyer",
      location: "Manikonda, Hyderabad",
      rating: 5,
      review: "Fantastic experience with IRA Interiors! They handled our entire apartment interior with great care. The quality of materials and finishing is exceptional.",
      project: "Apartment Interior",
      date: "September 2024"
    }
  ];

  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = reviews.length - cardsToShow;

  useEffect(() => {
    if (!isPaused && maxIndex > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isPaused, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-red-600 text-red-600' : 'text-gray-300'
        }`}
      />
    ));
  };

  const totalDots = maxIndex + 1;

  return (
    <div id="reviews" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience with IRA Interiors in Hyderabad
          </p>
        </div>

        {/* Review Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-900 text-gray-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hidden md:block"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-900 text-gray-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hidden md:block"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="px-3"
                  style={{ 
                    minWidth: `${100 / cardsToShow}%`,
                    maxWidth: `${100 / cardsToShow}%`
                  }}
                >
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 h-full hover:shadow-xl transition-shadow duration-300">
                    {/* Quote Icon */}
                    <div className="flex justify-end mb-3">
                      <Quote className="w-8 h-8 text-red-100" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[80px]">
                      "{review.review}"
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-red-600 mb-4"></div>

                    {/* Reviewer Info */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {review.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">{review.location}</p>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full font-medium">
                          {review.project}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={goToPrevious}
              className="bg-gray-900 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="bg-gray-900 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Dots */}
          {totalDots > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalDots }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-red-600'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

       
      </div>
    </div>
  );
}