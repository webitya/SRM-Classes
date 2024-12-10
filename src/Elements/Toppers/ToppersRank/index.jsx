import React from 'react';
import { TrophyOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

// Sample data for toppers
const toppers = [
  { name: 'Rahul Sharma', class: 'Class XII', percentage: '97%', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Priya Mehta', class: 'Class X', percentage: '95%', img: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Aman Verma', class: 'Class XII', percentage: '96%', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { name: 'Neha Singh', class: 'Class X', percentage: '94%', img: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { name: 'Rohit Kumar', class: 'Class XII', percentage: '98%', img: 'https://randomuser.me/api/portraits/men/5.jpg' },
];

const ToppersSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Top Performers
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Meet our highest achievers
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
          {toppers.map((topper, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Circular Photo with Custom Golden Border */}
              <div className="relative">
                <img
                  src={topper.img}
                  alt={topper.name}
                  className="w-32 h-32 rounded-full object-cover border-4"
                  style={{ borderColor: '#FFD700' }} // Custom golden color
                />
                {/* Trophy Icon */}
                <div className="absolute -bottom-2 -right-2 bg-yellow-500 p-2 rounded-full">
                  <TrophyOutlined className="text-white text-xl" />
                </div>
              </div>

              {/* Topper Info */}
              <h3 className="text-xl font-semibold mt-4">{topper.name}</h3>
              <p className="text-gray-600">{topper.class}</p>
              <p className="text-yellow-600 font-bold">{topper.percentage}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToppersSection;
