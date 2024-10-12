import React, { useEffect, useState } from 'react';

interface StatCardProps {
  image: string;
  targetNumber: number;
  text: string;
}

const StatCard: React.FC<StatCardProps> = ({ image, targetNumber, text }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  // Number animation effect
  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = targetNumber / (duration / 50); // update every 50ms

    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(interval);
      }
      setCurrentNumber(Math.round(start));
    }, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <div className="flex flex-col items-center text-center">
      <img src={image} alt={text} className="w-20 h-20 mb-4" />
      <h2 className="text-2xl font-semibold">{currentNumber.toLocaleString()}</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-8 bg-white">
      {/* Stat 1 */}
      <StatCard
        image="/src/assets/piggy-bank-icon.svg" // Replace with actual image path
        targetNumber={300000000}
        text="Nearly ₹3,00,00,000 Preserved "
      />

      {/* Stat 2 */}
      <StatCard
        image="/src/assets/happy-customers-icon.svg" // Replace with actual image path
        targetNumber={500}
        text="More than 500+ happy customers."
      />

      {/* Stat 3 */}
      <StatCard
        image="/src/assets/districts-icon.svg" // Replace with actual image path
        targetNumber={20}
        text="Across 20+ districts."
      />
    </div>
  );
};

export default StatsSection;