import React from 'react';

const services = [
  {
    title: "Consultancy",
    description: "Our services begin with a personal visit to your location. Here, we delve deep into understanding your unique energy needs. Leveraging our industry expertise, we offer tailored recommendations, ensuring every decision you make is well-informed and aligned with your goals.",
    icon: "/path-to-icons/consultancy-icon.svg", // Replace with actual icon path
    borderColor: "border-green-300",
  },
  {
    title: "Installation",
    description: "Our installation team visits your location and ensures a smooth and efficient setup of your solar solutions. With a meticulous approach to every detail, we promise a setup that stands the test of time, delivering consistent performance.",
    icon: "/path-to-icons/installation-icon.svg", // Replace with actual icon path
    borderColor: "border-green-500",
  },
  {
    title: "Maintenance & Services",
    description: "Regular maintenance checks, including visits to your premises, are integral to our service ethos. Through these proactive measures, we ensure your solar infrastructure remains in optimal condition, offering longevity and peak performance.",
    icon: "/path-to-icons/maintenance-icon.svg", // Replace with actual icon path
    borderColor: "border-blue-500",
  },
];

const HowWeServe: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-gray-900">How We Serve?</h2>
        <div className="flex justify-center mt-2">
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Services Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border-t-4 ${service.borderColor}`}
            >
              <div className="flex justify-center mb-4">
                <img src={service.icon} alt={service.title} className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeServe;