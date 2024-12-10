import React from 'react';
import { Card, Row, Col } from 'antd';
import './FeaturesSection.css';

const features = [
  {
    title: 'Experienced Faculty',
    description: 'Learn from the best in the field with years of teaching experience.',
    imgSrc: '/e1.jpeg', // Replace with your image link
  },
  {
    title: 'Digital Learning Resources',
    description: 'Access to a variety of digital resources to enhance your learning experience.',
    imgSrc:'/e3.jpeg', // Replace with your image link
  },
  // {
  //   title: 'Personalized Coaching',
  //   description: 'Tailored coaching programs to meet individual learning needs.',
  //   imgSrc: '/bg2.jpg', // Replace with your image link
  // },
  {
    title: 'Regular Assessments',
    description: 'Frequent assessments to track progress and areas for improvement.',
    imgSrc: '/e2.jpeg', // Replace with your image link
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Why Choose <span className="text-green-500">SRM Classes?</span>
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card className="bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
              <img src={feature.imgSrc} alt={feature.title} className="w-full h-32 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturesSection;
