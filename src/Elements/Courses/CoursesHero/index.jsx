import React, { useState } from "react";
import { Button, Row, Col, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const CoursesHeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    schoolName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((response) => {
        message.success("Registration Successful!");
        setFormData({
          name: "",
          class: "",
          schoolName: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        message.error("Failed to send the form. Please try again later.");
      });
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <Row gutter={[16, 16]} align="middle">
          {/* Left Section: Text Content */}
          <Col xs={24} md={12}>
            <h1 className="text-4xl font-bold leading-tight">
              Discover Our <span className="text-yellow-300">Comprehensive</span>{" "}
              Courses
            </h1>
            <p className="mt-4 text-lg">
              At SRM CLASSES, we offer a variety of courses to help you excel in
              your academic journey. From intermediate science to foundation
              courses and Olympiad preparation, we have everything you need to
              succeed.
            </p>
            <div className="mt-6">
              <Link to="//contact-us">
                <Button
                  type="primary"
                  size="large"
                  className="bg-yellow-400 hover:bg-yellow-500 border-none text-gray-900"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/" className="ml-4">
                <Button
                  size="large"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900"
                >
                  View Courses
                </Button>
              </Link>
            </div>
          </Col>

          {/* Right Section: Registration Form */}
          <Col xs={24} md={12}>
            <div className="flex justify-center">
              <Form
                layout="vertical"
                onSubmitCapture={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
              >
                <h2 className="text-xl font-semibold mb-4 text-white text-center">Registration Form</h2>
                
                {/* Form Fields Without Labels */}
                <Form.Item>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    placeholder="Class"
                    required
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="School Name"
                    required
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    required
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full bg-yellow-400 hover:bg-yellow-500">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CoursesHeroSection;
