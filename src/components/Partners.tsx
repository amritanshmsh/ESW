import React, { useEffect, useRef } from 'react';

const logos = [
  '/path-to-logo/logo1.png',
  '/path-to-logo/logo2.png',
  '/path-to-logo/logo3.png',
  '/path-to-logo/logo4.png',
  '/path-to-logo/logo5.png',
  '/path-to-logo/logo6.png',
  // Add more logo paths here
];

const PartnerLogos: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
      }
    };
    const interval = setInterval(scroll, 20); // Adjust speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Our Partners</h2>

      {/* Scrolling Logos for Small Screens */}
      <div className="lg:hidden relative overflow-hidden" ref={scrollRef}>
        <div className="flex space-x-8">
          {logos.map((logo, index) => (
            <div key={index} className="min-w-[150px] bg-white p-2 rounded-lg shadow-md">
              <img src={logo} alt={`Partner logo ${index}`} className="w-full object-contain h-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-8 justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-md">
            <img src={logo} alt={`Partner logo ${index}`} className="w-full object-contain h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;