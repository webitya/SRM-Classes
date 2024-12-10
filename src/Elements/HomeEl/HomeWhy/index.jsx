import React from 'react';
import { Card } from 'antd';
import './WhyChooseUsSection.css'; // Ensure to create this CSS file

const features = [
  {
    title: 'Experienced Faculty',
    description: 'Learn from qualified and experienced educators dedicated to your success.',
    color: '#ffccbc', // Light orange
  },
  {
    title: 'Digitalized Classrooms',
    description: 'Our classrooms are equipped with the latest technology for an engaging learning experience.',
    color: '#c5cae9', // Light blue
  },
  {
    title: 'Regular Assessments',
    description: 'We conduct regular tests to ensure you are on the right track with your studies.',
    color: '#b2dfdb', // Light teal
  },
  {
    title: 'Personalized Attention',
    description: 'Small class sizes ensure that every student receives personalized guidance.',
    color: '#ffe082', // Light yellow
  },
  {
    title: 'Daily Practice Papers',
    description: 'Practice makes perfect! We provide daily practice papers to strengthen your knowledge.',
    color: '#ffecb3', // Light golden
  },
  {
    title: 'Parent-Teacher Meetings',
    description: 'Regular meetings with parents keep them informed about their child\'s progress.',
    color: '#f8bbd0', // Light pink
  },
  {
    title: 'Flexible Timings',
    description: 'Our flexible class schedules allow students to learn at their convenience.',
    color: '#d1c4e9', // Light purple
  },
  {
    title: 'Holistic Development',
    description: 'We focus on overall development, including extracurricular activities and personal growth.',
    color: '#c8e6c9', // Light green
  },
];

const WhyChooseUsSection = () => {
  return (
    <div className="why-choose-us-section">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="feature-card"
            style={{ backgroundColor: feature.color }}
            title={feature.title}
            bordered={false}
          >
            <p className="feature-description">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
