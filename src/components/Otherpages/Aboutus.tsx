import React from 'react';

const AboutUsAndTeam: React.FC = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-64 md:h-96">
        <img 
          src="/path-to-your-hero-image.jpg" // Replace with the path to your hero image
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Every day, the sun gifts us with its radiant energy. We teach our clients how to use its energy to make smart choices.
            Engineer Solar Wala stands beside our customers, helping them harness this power and navigate life’s choices with clarity.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mb-6">The Engineer Solar Wala Story</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Engineer Solar Wala is an up-and-coming engineering firm that was established in May 2020. We are proud to be an 
            ISO 9001:2015 certified company, reflecting our commitment to quality and excellence. Our company is grounded on three key pillars: 
            consultancy, installation, and services.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Our main goal is to deliver top-notch engineering solutions to our valued customers, backed by exceptional service.
            With a strong presence in eight districts across India and a dedicated team of employees, we are well-equipped to meet the needs of our clients.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Additionally, we have three offices strategically located for convenience and efficiency, as well as a state-of-the-art repair unit to ensure 
            prompt maintenance and support.
          </p>
        </div>

        {/* Meet the Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet The Team</h2>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
            {/* Left: Founder Information */}
            <div className="lg:w-1/2 text-left">
              <img src="/path-to-logo.png" alt="Engineer Solar Wala Logo" className="mb-6 mx-auto lg:mx-0" />
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Er. Ashish Dixit is the Founder Director of Engineer Solar Wala, bringing a blend of vision and leadership to the organization.
                Apart from his pivotal role at Engineer Solar Wala, Dixit holds esteemed positions in various institutions and enterprises,
                including Manager at S.R.P.S.N.S. Awadh Public School and Chairman of Dr. B.R. Ambedkar Pvt. ITI.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                With a rich academic background, he served as an Assistant Professor in the Electronics & Communication Department at 
                Amity University, Lucknow Campus, for over 17 years. Additionally, Dixit's dedication to education is evident through his 
                authorship of over 19 engineering books for B.Tech. students.
              </p>
              <p className="font-bold text-gray-900 text-lg">Er. Ashish Dixit</p>
              <p className="text-gray-700">Founder Director of Engineer Solar Wala</p>
            </div>

            {/* Right: Founder Image */}
            <div className="lg:w-1/2">
              <img
                src="/path-to-founder-image.jpg" // Replace with the actual path to the image
                alt="Founder"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsAndTeam;
