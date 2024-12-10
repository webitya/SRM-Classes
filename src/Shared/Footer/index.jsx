import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './FooterEl.css'; // Ensure you have the corresponding CSS

const FooterEl = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1: About Us */}
          <div className="footer-column mb-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              Welcome to SRM Classes! We provide exceptional academic support to help students from Class VI to XII excel. With experienced educators, top-notch study materials, and innovative learning methods, we are committed to empowering students for academic success.
            </p>
            <Link to="/about-us">
              <Button className="footer-button" type="primary" shape="round">Learn More</Button>
            </Link>
          </div>

          {/* Column 2: Quick Links - Courses */}
          <div className="footer-column mb-4">
            <h5 className="footer-title">Our Courses</h5>
            <ul className="footer-list">
              <li><Link to="/">Mathematics</Link></li>
              <li><Link to="/">Science</Link></li>
              <li><Link to="/">English</Link></li>
              <li><Link to="/">Social Studies</Link></li>
              <li><Link to="/">Computer Science</Link></li>
              <li><Link to="/">Coaching Programs</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-column mb-4">
            <h5 className="footer-title">Resources</h5>
            <ul className="footer-list">
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Testimonials</Link></li>
              <li><Link to="/">FAQs</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/">Events</Link></li>
              <li><Link to="/enroll">Enroll Now</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Links */}
          <div className="footer-column mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p><strong>Address:</strong> Karam Chowk, Harmu, Ranchi, Jharkhand</p>
            <p><strong>Phone:</strong> +91 9693245941</p>
            <p><strong>Email:</strong> <a href="mailto:brightnetmedia@gmail.com">webitya@gmail.com</a></p>

            <h5 className="footer-title mt-4">Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.webitya.com" target="_blank" rel="noopener noreferrer"><FacebookOutlined /></a>
              <a href="https://www.webitya.com" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a>
              <a href="https://www.webitya.com" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
              <a href="https://www.webitya.com" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a>
              <a href="https://www.webitya.com"target="_blank" rel="noopener noreferrer"><YoutubeOutlined /></a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; 2024 SRM Classes. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterEl;
