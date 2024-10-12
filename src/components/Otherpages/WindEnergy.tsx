import React from 'react';
import { motion } from 'framer-motion';

const WindEnergy: React.FC = () => {
  // Animation Variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="wind-energy-page">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen bg-cover bg-center" 
        style={{ backgroundImage: 'url(/images/wind-energy-banner.jpg)' }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative z-10 text-center text-white p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl font-bold">Harnessing the Power of Wind Energy</h1>
          <p className="mt-4 text-xl">Discover how wind energy is shaping the future of clean power generation.</p>
        </motion.div>
      </motion.section>

      {/* What is Wind Energy */}
      <motion.section
        className="py-12 px-6 lg:px-24 bg-gray-100"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold text-center mb-6" variants={fadeInUp}>
          What is Wind Energy?
        </motion.h2>
        <motion.p className="text-lg leading-relaxed text-gray-700" variants={fadeInUp}>
          Wind energy is a form of renewable energy that harnesses the power of wind to generate electricity. Using wind turbines, the kinetic energy from wind is converted into mechanical power, which can then be used to produce electricity. It’s one of the fastest-growing energy sources in the world, providing a clean and sustainable way to meet energy demands.
        </motion.p>
      </motion.section>

      {/* How Wind Energy Works */}
      <motion.section
        className="py-12 px-6 lg:px-24"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold text-center mb-6" variants={fadeInUp}>
          How Wind Energy Works
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <img
              src="/images/wind-turbine-diagram.jpg"
              alt="How Wind Energy Works"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Wind turbines are the core technology used to harness wind energy. The blades of the turbine are designed to capture the wind's kinetic energy and rotate a shaft connected to a generator, producing electricity.
            </p>
            <ul className="list-disc ml-6 text-lg text-gray-700">
              <motion.li variants={fadeInUp}>Wind causes the blades of the turbine to spin.</motion.li>
              <motion.li variants={fadeInUp}>The rotor turns a shaft that is connected to a generator.</motion.li>
              <motion.li variants={fadeInUp}>The generator converts the mechanical energy into electricity.</motion.li>
              <motion.li variants={fadeInUp}>The electricity is then fed into the grid or stored for later use.</motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Advantages of Wind Energy */}
      <motion.section
        className="py-12 px-6 lg:px-24 bg-green-50"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold text-center mb-6" variants={fadeInUp}>
          Advantages of Wind Energy
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Renewable & Sustainable</h3>
            <p className="text-lg text-gray-700">
              Wind energy is completely renewable. It doesn’t deplete any natural resources and reduces reliance on fossil fuels.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Clean & Green</h3>
            <p className="text-lg text-gray-700">
              Wind turbines generate electricity without emitting greenhouse gases, making them an eco-friendly energy solution.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Cost-Effective</h3>
            <p className="text-lg text-gray-700">
              Wind energy is becoming one of the cheapest sources of electricity, with falling installation and operational costs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Challenges of Wind Energy */}
      <motion.section
        className="py-12 px-6 lg:px-24"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold text-center mb-6" variants={fadeInUp}>
          Challenges of Wind Energy
        </motion.h2>
        <motion.p className="text-lg leading-relaxed text-gray-700" variants={fadeInUp}>
          While wind energy has many advantages, it also faces challenges such as variable wind speeds, high upfront costs, and the need for large open spaces for wind farms. Technological advancements and government policies are continuously addressing these challenges to make wind energy more efficient and accessible.
        </motion.p>
      </motion.section>
    </div>
  );
};

export default WindEnergy;