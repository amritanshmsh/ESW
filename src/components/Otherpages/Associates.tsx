import React, { useState, useEffect } from 'react';
import associates from '../../data/associate.json'; // Import the JSON data

interface Associate {
  name: string;
  address: string;
  tradeName: string;
  image: string;
  pinCode: string;
  city: string;
  state: string;
  certificateLink: string;
  locationLink: string;
}

const OurAssociates: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>(''); // State to hold the selected state
  const [filteredAssociates, setFilteredAssociates] = useState<Associate[]>([]); // State to hold the filtered associates

  // List of predefined states
  const states = [
    'Uttar Pradesh',
    'Delhi',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep',
    'Puducherry',
    'Jammu and Kashmir',
    'Ladakh'
  ];
  // Filter associates based on the selected state
  useEffect(() => {
    if (selectedState) {
      const filtered = associates.filter(associate => associate.state === selectedState);
      setFilteredAssociates(filtered);
    } else {
      setFilteredAssociates([]);
    }
  }, [selectedState]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Our Associates</h1>

      {/* State Dropdown */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Your State:</label>
        <select
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select State --</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* No associates found */}
      {selectedState && filteredAssociates.length === 0 && (
        <div className="mt-4 p-4 bg-red-100 text-red-600 rounded">
          No associates found in this state.
        </div>
      )}

      {/* Display Associates */}
      {filteredAssociates.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAssociates.map((associate, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-lg">
              <img src={associate.image} alt={associate.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-2xl font-bold mb-2">{associate.name}</h2>
              <p className="text-gray-700 mb-2">{associate.address}</p>
              <p className="text-gray-700 mb-2">Trade Name: {associate.tradeName}</p>
              <p className="text-gray-700 mb-2">City: {associate.city}</p>
              <p className="text-gray-700 mb-2">PIN Code: {associate.pinCode}</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={associate.certificateLink}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
                <a
                  href={associate.locationLink}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Location
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Become an Associate Button - Always Displayed */}
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Become an Associate
        </button>
      </div>
    </div>
  );
};

export default OurAssociates;