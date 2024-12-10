import React from 'react';
import { Card } from 'antd';
import { DashboardOutlined, FileTextOutlined, TeamOutlined, SolutionOutlined } from '@ant-design/icons';
import './Facilities.css'; // Ensure you have the corresponding CSS

const facilities = [
  {
    title: 'Fully Digitalized Smart Classroom',
    description: 'Experience high-tech classrooms that enhance learning through technology.',
    icon: <DashboardOutlined style={{ fontSize: '2.5rem', color: '#fff' }} />, // White icon for contrast
    backgroundColor: '#4A90E2', // Light Blue
  },
  {
    title: 'Printed Notes',
    description: 'Receive well-structured printed materials for easy studying.',
    icon: <FileTextOutlined style={{ fontSize: '2.5rem', color: '#fff' }} />,
    backgroundColor: '#E94E77', // Pink
  },
  {
    title: 'Experienced Faculty',
    description: 'Learn from industry experts with years of teaching experience.',
    icon: <TeamOutlined style={{ fontSize: '2.5rem', color: '#fff' }} />,
    backgroundColor: '#F6AA1D', // Yellow
  },
  {
    title: 'Daily Practice Papers',
    description: 'Stay prepared with regular practice tests and feedback.',
    icon: <SolutionOutlined style={{ fontSize: '2.5rem', color: '#fff' }} />,
    backgroundColor: '#3EDB79', // Green
  },
];

const OurFacilitiesSection = () => {
  return (
    <div className="facilities-section py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Unique Facilities</h2>
      <div className="facilities-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((facility, index) => (
          <Card key={index} className="facility-card rounded-lg shadow-lg" style={{ backgroundColor: facility.backgroundColor }}>
            <div className="facility-icon flex justify-center mb-4">
              {facility.icon}
            </div>
            <h4 className="facility-title text-xl font-semibold text-center text-white">{facility.title}</h4>
            <p className="facility-description text-center text-white">{facility.description}</p>
          </Card>
        ))}
      </div>
      <div className="highlight-message text-center mt-6">
        <p className="text-lg font-medium text-gray-700">Join us for a transformative educational experience!</p>
      </div>
    </div>
  );
};

export default OurFacilitiesSection;
