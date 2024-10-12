import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 text-center">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-gray-900">Why Us?</h2>
        <div className="flex justify-center mt-2">
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Grid Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">India’s Widely Trusted & Renowned Solar Brand</h3>
            <p className="mt-3 text-gray-600">Our commitment to excellence and customer satisfaction has made Engineer Solar Wala India's most trusted solar company.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">Engineered By Industry Experts & Skilled IITians</h3>
            <p className="mt-3 text-gray-600">With our team of IITians, we are committed to pushing the boundaries of innovation and delivering solutions that exceed expectations.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">Every Green Choice Made Today, Makes A Legacy Tomorrow</h3>
            <p className="mt-3 text-gray-600">Embrace the revolution – Go Green Initiative. (link to form)</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">Our Visionary Outlook</h3>
            <p className="mt-3 text-gray-600">We envision a brighter India powered by the sun. By embracing solar energy, we aim to protect our planet from pollution.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">We Are At A Mission</h3>
            <p className="mt-3 text-gray-600">Our goal is to lead the way in solar power, making India green and setting an example for the world. Let’s make a radiant India, where the golden rays of the sun power our progress.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">Go Greener, Go Solar!</h3>
            <p className="mt-3 text-gray-600">Click here</p>
            <div className="mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transform transition duration-300 hover:scale-105">
                Be Our Associate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;