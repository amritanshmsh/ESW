import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // for arrows

const ImageSlider: React.FC = () => {
  const images = [
    '/src/assets/Scroll-1.jpg', 
    '/src/assets/Scroll-2.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Automatically scroll images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to handle next image
  const scrollNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous image
  const scrollPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Effect to scroll manually when arrows are clicked
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Slider wrapper */}
      <div
        ref={sliderRef}
        className="flex overflow-hidden scroll-smooth w-full"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-40 sm:h-56 md:h-72 lg:h-[90vh]" // Smaller height for small screens, larger for large screens
          >
            <img
              src={image}
              alt={`Scroll ${index + 1}`}
              className="w-full h-full object-contain md:object-cover" // object-contain for small screens, object-cover for large screens
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        onClick={scrollPrev}
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        onClick={scrollNext}
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default ImageSlider;