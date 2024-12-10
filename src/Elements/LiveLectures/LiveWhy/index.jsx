import React from 'react';
import { ClockCircleOutlined, TeamOutlined, LineChartOutlined } from '@ant-design/icons';
import './WhyChooseLiveLectures.css';

const features = [
  {
    title: 'Real-Time Interaction',
    description: 'Get answers to your questions instantly and interact with expert instructors during live sessions.',
    icon: <TeamOutlined className="text-4xl text-blue-600" />,
  },
  {
    title: 'Convenient Scheduling',
    description: 'Attend lectures that fit into your schedule, and never miss a class with our flexible timings.',
    icon: <ClockCircleOutlined className="text-4xl text-green-600" />,
  },
  {
    title: 'Enhanced Learning Experience',
    description: 'Our interactive tools and real-time engagement ensure a better understanding of complex concepts.',
    icon: <LineChartOutlined className="text-4xl text-red-600" />,
  },
];

const WhyChooseLiveLectures = () => {
  return (
    <div className="why-choose-section bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 animate-fade-in">Why Choose Our Live Lectures?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the benefits of attending our live interactive sessions. With expert guidance, flexible scheduling, and a 
          comprehensive learning environment, we offer the best way to enhance your academic journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="feature-icon mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLiveLectures;
