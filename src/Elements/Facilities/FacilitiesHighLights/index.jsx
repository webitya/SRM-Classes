import React from "react";
import { Row, Col, Card } from "antd";
import { EnvironmentOutlined, LaptopOutlined, CameraOutlined, TeamOutlined } from "@ant-design/icons";

const facilitiesData = [
  {
    icon: <EnvironmentOutlined style={{ fontSize: "2rem", color: "#4A5568" }} />,
    title: "Modern Classrooms",
    description: "Our classrooms are equipped with the latest technology to enhance learning.",
  },
  {
    icon: <LaptopOutlined style={{ fontSize: "2rem", color: "#4A5568" }} />,
    title: "Computer Lab",
    description: "State-of-the-art computers and software for all your tech needs.",
  },
  {
    icon: <CameraOutlined style={{ fontSize: "2rem", color: "#4A5568" }} />,
    title: "Photography Studio",
    description: "A fully equipped studio for creative expression and skill development.",
  },
  {
    icon: <TeamOutlined style={{ fontSize: "2rem", color: "#4A5568" }} />,
    title: "Collaborative Spaces",
    description: "Spaces designed for teamwork and group projects, fostering collaboration.",
  },
];

const FacilitiesHighlights = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Our <span className="text-teal-600">Facilities</span>
        </h2>
        <Row gutter={[16, 16]}>
          {facilitiesData.map((facility, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                hoverable
                className="shadow-lg rounded-lg text-center p-6 h-full transition-transform transform hover:scale-105"
                bordered={false}
              >
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FacilitiesHighlights;
