import React from 'react';
import { Button } from 'antd';
import { BookOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const NotesHero = () => {
  return (
    <section className="adii-hero-section relative bg-gradient-to-r from-purple-400 to-pink-500 text-white py-16 px-4 lg:px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="adii-title text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Explore Comprehensive Study Notes
          </h1>
          <p className="adii-description text-base sm:text-lg lg:text-xl mb-6">
            Enhance your learning with in-depth notes and resources for Class VI to XII. Master every subject with ease!
          </p>
          <Link to="/live-lectures">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            className="adii-btn bg-white text-pink-600 hover:bg-pink-600 hover:text-white transition font-semibold"
          >
            Live Lectures
          </Button>
          </Link>
        </div>
        
        {/* Right Section - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 text-center relative z-10">
          <img
            src="/n1.jpg"
            alt="Notes illustration"
            className="adii-hero-image w-full md:w-3/4 lg:w-2/3 mx-auto rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Floating Book Icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <BookOutlined className="adii-floating-book absolute top-10 left-5 text-white opacity-50 text-4xl sm:text-5xl lg:text-7xl animate-float" />
        {/* <BookOutlined className="adii-floating-book absolute top-1/3 left-1/4 text-white opacity-60 text-3xl sm:text-4xl lg:text-6xl animate-float-slow" /> */}
        <BookOutlined className="adii-floating-book absolute bottom-10 right-10 text-white opacity-40 text-5xl sm:text-6xl lg:text-8xl animate-float" />
        <BookOutlined className="adii-floating-book absolute bottom-1/3 right-1/4 text-white opacity-50 text-4xl sm:text-5xl lg:text-5xl animate-float-slow" />
      </div>
    </section>
  );
};

export default NotesHero;
