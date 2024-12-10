import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const backgroundImages = [
  'bg1.jpg',
  'bg2.jpg',
  'bg3.jpg',
];

const phrases = [
  'Courses',
  'Facilities',
  'Admissions Open',
  'Expert Faculty',
  'Regular Tests',
];

const HeroSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const circularImage = '/bg1.jpg';

  const handleImageClick = () => {
    setSelectedImage(circularImage);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    const backgroundInterval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000);

    return () => {
      clearInterval(textInterval);
      clearInterval(backgroundInterval);
    };
  }, []);

  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-between bg-cover bg-center min-h-screen transition-all duration-1000"
      style={{ backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex-1 max-w-lg px-6 py-10 md:px-12 text-white text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">SRM CLASSES</h1>
        <p className="text-xl md:text-2xl font-semibold mb-4">Surety of Success</p>
        <h2 className="text-lg md:text-xl mb-6">
          Now Offering: <span className="font-bold">{phrases[currentPhraseIndex]}</span>
        </h2>

        {/* New content for the left side */}
        <p className="text-base md:text-lg mb-4">
          SRM Classes is your gateway to academic excellence. We offer comprehensive coaching for students of all grades. From expert faculty to regular tests, we ensure every student reaches their full potential.
        </p>

        <ul className="mb-6 space-y-2">
          <li>✅ Highly Qualified Faculty</li>
          <li>✅ Individual Attention</li>
          <li>✅ Excellent Study Materials</li>
          <li>✅ Affordable Fees Structure</li>
        </ul>

        <Link to="#enroll">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-transform transform hover:scale-105">
            Enroll Now
          </button>
        </Link>

        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-start space-x-4 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FacebookOutlined className="text-white hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <TwitterOutlined className="text-white hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <InstagramOutlined className="text-white hover:text-pink-500" />
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-8 lg:mt-0" onClick={handleImageClick}>
        <img
          src={circularImage}
          alt="Facility"
          className="w-50 h-50 sm:w-36 sm:h-36 md:w-60 md:h-60 object-cover rounded-full border-4 border-white shadow-lg cursor-pointer"
        />
      </div>

      <Modal
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
        width={600}
      >
        <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
      </Modal>
    </div>
  );
};

export default HeroSection;
