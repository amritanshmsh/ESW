import React, { useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // For quote icon
import testimonials from '../data/Testimonials.json'; // Your JSON file

const TestimonialPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
      }
    };
    const interval = setInterval(scroll, 20); // Adjust speed by changing 20ms to a higher or lower value
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Clients' Testimonials</h1>
        <p className="text-gray-600 mt-4">Read what our customers have to say about our solar services</p>
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto px-4">
        
        {/* Grid for Large Screens */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
              <p className="text-gray-700 text-lg mb-4">"{testimonial.feedback}"</p>
              <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>

        {/* Carousel for Small Screens with Auto-Scroll */}
        <div className="lg:hidden relative overflow-hidden" ref={scrollRef}>
          <div className="flex space-x-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[80%] bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
              >
                <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
                <p className="text-gray-700 text-lg mb-4">"{testimonial.feedback}"</p>
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;