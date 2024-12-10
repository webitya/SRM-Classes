import React from 'react';
import { Card } from 'antd';
import './Success.css';

const testimonials = [
  {
    name: 'Anand Bhagat',
    message: 'SRM Classes helped me achieve my goals. The faculty is amazing!',
    course: 'Class 10th',
    image: '/t4.png',
  },
  {
    name: 'Harshit Kumar',
    message: 'I improved my grades significantly thanks to the personalized attention.',
    course: 'Class 12th',
    image: '/t5.jpg',
  },
  {
    name: 'Abhishek Sinha',
    message: 'The digitalized classrooms made learning enjoyable. I highly recommend!',
    course: 'Class 10th',
    image: '/t3.png',
  },
  {
    name: 'Priya Sharma',
    message: 'Regular assessments kept me on track. I couldn’t have done it without SRM!',
    course: 'Class 12th',
    image: '/t2.png',
  },
];

const SuccessStoriesSection = () => {
  return (
    <div className="success-stories-section">
      <h2 className="section-title">Success Stories</h2>
      <div className="stories-container">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="testimonial-card" bordered={false}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-course">{testimonial.course}</p>
            <p className="testimonial-message">"{testimonial.message}"</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
