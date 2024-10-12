import React from 'react';
import { useNavigate } from 'react-router-dom'; // UseNavigate instead of useHistory

// Import or define a list of images (these can be URLs)
const images = [
  '/assets/gallery/image1.jpg',
  '/assets/gallery/image2.jpg',
  '/assets/gallery/image3.jpg',
  '/assets/gallery/image4.jpg',
  '/assets/gallery/image5.jpg',
  '/assets/gallery/image6.jpg',
];

const Gallery: React.FC = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const redirectToGallery = () => {
    navigate('/full-gallery'); // Redirect to the full gallery page
  };

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Our Gallery</h2>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button to Full Gallery */}
      <div className="text-center mt-8">
        <button
          onClick={redirectToGallery}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View Full Gallery
        </button>
      </div>
    </div>
  );
};

export default Gallery;