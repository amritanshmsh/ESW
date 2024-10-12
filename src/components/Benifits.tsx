import React from 'react';

const BenefitsOfSolar: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-0">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="/path-to-image/solar-benefits-illustration.svg" // Replace with actual image path
            alt="Solar Benefits Illustration"
            className="w-80 lg:w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-10 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits Of Going Solar</h2>

          <ul className="space-y-4 text-gray-700">
            <li>
              <h3 className="text-lg font-bold text-gray-900">Financial Savings</h3>
              <p>
                By installing solar panels with Engineer Solar Wala, you can save up to 90% of your electricity bills. As sunlight is free, you are reducing your dependency on utility providers.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-bold text-gray-900">Long-Term Investment</h3>
              <p>
                With minimal maintenance, this is a long-term investment that continues to provide consistent energy savings and returns over decades.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-bold text-gray-900">Reduced Reliance on Grid</h3>
              <p>
                By generating your own electricity, you become less dependent on the traditional power grid.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-bold text-gray-900">Make Planet Greener</h3>
              <p>
                Switching to solar energy significantly reduces greenhouse gas emissions. You can reduce up to 45 tons of carbon footprint and save over 45 trees in the next 25 years.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfSolar;