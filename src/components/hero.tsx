import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-600 to-yellow-500 min-h-[700px] bg-cover flex flex-col justify-center items-center text-center w-full px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background animated shapes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-20 rounded-full animate-ping"></div>
        <div className="absolute top-0 -right-20 w-48 h-48 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 right-10 w-72 h-72 bg-white opacity-5 rounded-full animate-ping"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Welcome to <span className="text-yellow-300">Website-ESW</span>
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl lg:text-2xl max-w-sm md:max-w-xl">
          A place where innovation meets creativity. Explore our features and get started!
        </p>

        <div className="mt-8 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <a
            href="#get-started"
            className="inline-block px-8 py-3 bg-yellow-400 text-green-800 font-semibold rounded-md shadow-lg transition transform hover:scale-105 hover:bg-yellow-500"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-md shadow-lg transition transform hover:scale-105 hover:bg-green-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;