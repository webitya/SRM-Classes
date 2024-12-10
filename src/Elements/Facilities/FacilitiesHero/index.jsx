import React from "react";
import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

const FacilitiesHero = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 py-16 text-gray-800">
      <div className="container mx-auto px-4">
        <Row gutter={[16, 16]} align="middle">
          {/* Left Section: Text Content */}
          <Col xs={24} md={12}>
            <h1 className="text-5xl font-extrabold leading-tight">
              Experience Our <span className="text-teal-600">Innovative Facilities</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-black">
              At SRM CLASSES, our facilities are designed to inspire learning and growth. With modern amenities and a supportive environment, we ensure every student has the tools they need to succeed.
            </p>
            <div className="mt-6">
              <Link to="/contact-us">
                <Button
                  type="primary"
                  size="large"
                  className="bg-teal-600 hover:bg-teal-700 border-none text-white shadow-lg transition-transform transform hover:scale-105"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link to="/enroll-now" className="ml-4">
                <Button
                  size="large"
                  className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-transform transform hover:scale-105"
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          </Col>

          {/* Right Section: Visual Representation */}
          <Col xs={24} md={12}>
            <div className="flex justify-center">
              <img
                src="/ab1.jpg" // Replace with your actual image URL
                alt="Facilities"
                className="rounded-lg shadow-2xl w-full max-w-md transition-transform transform hover:scale-105"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FacilitiesHero;
