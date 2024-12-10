import React from 'react';
import { PlayCircleOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './LiveLectureHero.css'; // Add custom styles if needed
import { Link } from 'react-router-dom';

const LiveLectureHero = () => {
  return (
    <div className="hero-section bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 relative">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section: Hero Text */}
        <div className="hero-content max-w-lg text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Join Our Live Lectures Now!</h1>
          <p className="text-lg mb-8 animate-fade-in delay-100">
            Attend live interactive sessions with expert instructors, ask questions in real-time, and 
            boost your understanding of complex subjects.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link to="/notes">
            <Button
              type="primary"
              icon={<PlayCircleOutlined />}
              className="live-btn"
              size="large"
            >
              Browse Notes
            </Button></Link>
            <Link to="/contact-us">
            <Button size="large" className="more-info-btn">
              More Information
            </Button></Link>
          </div>
        </div>

        {/* Right Section: Creative Icons */}
        <div className="relative flex justify-center items-center h-64 w-64 lg:h-80 lg:w-80">
          {/* Animated floating icons */}
          <div className="icon-animation absolute top-0 left-0">
            <VideoCameraOutlined className="text-4xl text-pink-300 animate-float" />
          </div>
          <div className="icon-animation absolute top-0 right-0">
            <PlayCircleOutlined className="text-4xl text-yellow-300 animate-float-slow" />
          </div>
          <div className="icon-animation absolute bottom-0 left-0">
            <VideoCameraOutlined className="text-4xl text-blue-300 animate-float-reverse" />
          </div>
          <div className="icon-animation absolute bottom-0 right-0">
            <PlayCircleOutlined className="text-4xl text-green-300 animate-float-fast" />
          </div>
          {/* Center icon */}
          <div className="center-icon relative">
            <VideoCameraOutlined className="text-7xl text-white" />
          </div>
        </div>
      </div>

      {/* Live Red Dot Indicator */}
      <div className="absolute top-5 right-5 flex items-center">
        <span className="live-dot bg-red-600 rounded-full w-3 h-3 inline-block mr-2"></span>
        <span>Live Lectures Ongoing</span>
      </div>
    </div>
  );
};

export default LiveLectureHero;
