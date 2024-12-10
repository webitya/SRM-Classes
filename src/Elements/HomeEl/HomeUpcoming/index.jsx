import React from 'react';
import { Button, Card, Row, Col } from 'antd';
import './UpcomingCoursesSection.css'; // Ensure to create this CSS file
import { Link } from 'react-router-dom';

const upcomingCourses = [
  {
    title: 'Foundation Course for Class VI-VIII',
    date: 'Starting from 20 May 2024',
    description: 'An engaging foundation course designed for students of classes VI to VIII to build their concepts.',
    color: 'bg-blue-400', // Background color for card
    textColor: 'text-white', // Text color
  },
  {
    title: 'Board Preparation for Class IX-X',
    date: 'Starting from 5 June 2024',
    description: 'Intensive preparation for board exams with focused study materials and regular assessments.',
    color: 'bg-green-400',
    textColor: 'text-white',
  },
  {
    title: 'Advanced Classes for Class XI-XII',
    date: 'Starting from 15 July 2024',
    description: 'Advanced coaching for students preparing for competitive exams while managing their regular syllabus.',
    color: 'bg-orange-400',
    textColor: 'text-white',
  },
];

const UpcomingCoursesSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Upcoming <span className="text-green-500">Courses</span>
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {upcomingCourses.map((course, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className={`shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ${course.color} flex flex-col justify-between h-full`}
            >
              <div className={`p-6 ${course.textColor} flex-grow`}>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="mb-2">{course.date}</p>
                <p className="mb-4">{course.description}</p>
              </div>
              <Link to="/enroll-now"><Button className="bg-white text-blue-600 hover:bg-blue-100 transition duration-200 mb-4" type="primary">
                Enroll Now
              </Button></Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UpcomingCoursesSection;
