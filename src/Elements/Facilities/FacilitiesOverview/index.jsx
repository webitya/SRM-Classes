import React from "react";
import { Row, Col } from "antd";
import { CameraOutlined, DesktopOutlined, EnvironmentOutlined, BookOutlined } from "@ant-design/icons";

const facilitiesOverviewData = [
  {
    icon: <CameraOutlined style={{ fontSize: "3rem", color: "#4A5568" }} />,
    title: "Modern Classrooms",
    description: "Our classrooms are equipped with the latest technology and comfortable seating to facilitate learning.",
  },
  {
    icon: <DesktopOutlined style={{ fontSize: "3rem", color: "#4A5568" }} />,
    title: "Advanced Labs",
    description: "Experience hands-on learning in our state-of-the-art science and computer labs.",
  },
  {
    icon: <EnvironmentOutlined style={{ fontSize: "3rem", color: "#4A5568" }} />,
    title: "Outdoor Spaces",
    description: "Our campus features beautiful outdoor spaces for relaxation and recreational activities.",
  },
  {
    icon: <BookOutlined style={{ fontSize: "3rem", color: "#4A5568" }} />,
    title: "Extensive Library",
    description: "Access a wide range of resources and study materials in our well-stocked library.",
  },
];

const FacilitiesOverview = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-200 to-blue-400">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Explore Our <span className="text-teal-600">Facilities</span>
        </h2>
        <Row gutter={[16, 16]} justify="center">
          {facilitiesOverviewData.map((facility, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform transform hover:scale-105">
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FacilitiesOverview;
