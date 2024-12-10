import React from 'react';
import { CheckCircleOutlined, BookOutlined, TeamOutlined, RiseOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: <CheckCircleOutlined className="text-4xl text-blue-500" />,
    title: 'Expert Faculty',
    description: 'Learn from experienced teachers who are experts in their fields.',
  },
  {
    icon: <BookOutlined className="text-4xl text-blue-500" />,
    title: 'Comprehensive Study Material',
    description: 'Access to detailed study materials and regular tests.',
  },
  {
    icon: <TeamOutlined className="text-4xl text-blue-500" />,
    title: 'Personalized Attention',
    description: 'We focus on each student’s unique learning needs.',
  },
  {
    icon: <RiseOutlined className="text-4xl text-blue-500" />,
    title: 'Proven Success',
    description: 'A track record of top-performing students year after year.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose SRM Classes?</h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover the reasons why SRM Classes is the best choice for your academic success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
