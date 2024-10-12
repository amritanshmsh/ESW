import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';
import { LatLngTuple } from 'leaflet'; // Import LatLngTuple for explicit typing

// Import Leaflet default marker images using ES6 imports
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default marker icon issues with Webpack by setting the icons manually
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapSection: React.FC = () => {
  // Explicitly type the position as LatLngTuple
  const position: LatLngTuple = [26.825413614635565, 81.01584608197714];

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Our Location</h2>

      <div className="container mx-auto px-4">
        {/* Map Container */}
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Our office is located here! <br /> 26.825413614635565, 81.01584608197714
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;