import React, { useState } from 'react';

const SavingsCalculator: React.FC = () => {
  // State for form inputs
  const [pinCode, setPinCode] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [rooftopArea, setRooftopArea] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [category, setCategory] = useState('Residential'); // Default category is Residential
  const [capacity, setCapacity] = useState<number | null>(null);
  const [savings, setSavings] = useState<number | null>(null);

  // Function to calculate savings capacity and money savings
  const calculateSavings = () => {
    const areaInSquareMeters = Number(rooftopArea) * 0.092903; // Convert sqft to square meters
    const capacityInKW = areaInSquareMeters * 0.15; // Assume 1 sq meter = 0.15 kW capacity

    // Assuming 70% savings on monthly bill due to solar power usage
    const savingsPercentage = 0.7;
    const potentialSavings = Number(monthlyBill) * savingsPercentage;

    setCapacity(capacityInKW);
    setSavings(potentialSavings);
  };

  return (
    <div className="bg-blue-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Engineer Solar Wala Savings Calculator
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Calculate Your Solar Generation And Start Saving Now!
      </p>

      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="pinCode">
            PIN Code
          </label>
          <input
            id="pinCode"
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            placeholder="Enter PIN Code"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="monthlyBill">
            Average Monthly Bill
          </label>
          <input
            id="monthlyBill"
            type="text"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(e.target.value)}
            placeholder="Enter Average Monthly Bill"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="rooftopArea">
            Rooftop Area (in sq. ft.)
          </label>
          <input
            id="rooftopArea"
            type="text"
            value={rooftopArea}
            onChange={(e) => setRooftopArea(e.target.value)}
            placeholder="Enter Rooftop Area"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter Mobile Number"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="category">
            Residential / Commercial / Industrial
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>

        <div className="flex space-x-4 mt-4">
          <button
            type="button"
            onClick={calculateSavings}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Calculate
          </button>

          <a
            href={`https://wa.me/91${mobileNumber}?text=I'm%20interested%20in%20solar%20savings%20calculation!`}
            className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📲</span>
            <span>Get in touch over WhatsApp!</span>
          </a>
        </div>
      </form>

      {/* Display the calculated capacity and savings */}
      {capacity && (
        <p className="mt-6 text-lg text-gray-900">
          The power system required by you has the capacity of: 
          <span className="font-bold"> {capacity.toFixed(2)} kW</span>
        </p>
      )}

      {savings && (
        <p className="mt-2 text-lg text-gray-900">
          You can save approximately: 
          <span className="font-bold"> ₹{savings.toFixed(2)} per month</span>
        </p>
      )}
    </div>
  );
};

export default SavingsCalculator;