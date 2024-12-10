import React from 'react';
import { Button } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500 py-16 sm:py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Animated Title */}
        <motion.h1
          className="text-white text-4xl sm:text-2xl md:text-5xl font-bold"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Congratulations to Our Toppers!
        </motion.h1>
        
        {/* Subheading */}
        <motion.p
          className="text-white text-lg sm:text-base md:text-xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Celebrating outstanding achievements of our top performers across all classes.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
         <Link to="/enroll-now">
         <Button
            type="primary"
            shape="round"
            size="large"
            icon={<TrophyOutlined />}
            className="bg-yellow-400 border-0 hover:bg-yellow-500"
          >
            Enroll Now
          </Button></Link>
        </motion.div>
      </div>
      
      {/* Animated Floating Icons */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Adjust icon size for responsiveness */}
        <TrophyOutlined className="text-5xl sm:text-3xl md:text-6xl text-white mx-2" />
        <TrophyOutlined className="text-5xl sm:text-3xl md:text-6xl text-white mx-2" />
        <TrophyOutlined className="text-5xl sm:text-3xl md:text-6xl text-white mx-2" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
