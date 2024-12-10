import React, { useRef } from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { Link } from 'react-router-dom';
import './HomeToCar.css'; // Import the CSS file for additional styling

const CarouselEl = () => {
  const carouselRef = useRef(null); // Create a ref for the Carousel

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Move to the next slide
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(); // Move to the previous slide
    }
  };

  return (
    <div className="carousel-container">
      <Carousel
        ref={carouselRef} // Attach the ref to the Carousel
        autoplay
        autoplaySpeed={1500} // Auto-slide every 1.5 seconds
        dotPosition="bottom"
        effect="scrollx" // Change transition effect to sliding
      >
        {/* Slide 1 */}
        <div className="carousel-slide slide-1">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Welcome to SRM CLASSES</h1>
            {/* <p className="carousel-description">Your gateway to academic excellence and success.</p> */}
            <Link to="/enroll-now">
              <Button type="primary" size="large" className="carousel-button">Join Us Now</Button>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide slide-2">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Unlock Your Potential</h1>
            {/* <p className="carousel-description">Empowering students with knowledge and skills for a bright future.</p> */}
            <Link to="/enroll-now">
              <Button type="primary" size="large" className="carousel-button">Discover More</Button>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-slide slide-3">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Achieve Your Goals</h1>
            {/* <p className="carousel-description">Comprehensive coaching tailored to your academic needs.</p> */}
            <Link to="/enroll-now">
              <Button type="primary" size="large" className="carousel-button">Contact Us</Button>
            </Link>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-slide slide-4">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Join Our Success Stories</h1>
            {/* <p className="carousel-description">Become a part of our community and thrive in your studies.</p> */}
            <Link to="/enroll-now">
              <Button type="primary" size="large" className="carousel-button">Enroll Today</Button>
            </Link>
          </div>
        </div>
      </Carousel>

      {/* Navigation Buttons */}
      <Button className="arrow left-arrow" onClick={prev}>
        <LeftOutlined style={{ fontSize: '28px' }} />
      </Button>
      <Button className="arrow right-arrow" onClick={next}>
        <RightOutlined style={{ fontSize: '28px' }} />
      </Button>
    </div>
  );
};

export default CarouselEl;
