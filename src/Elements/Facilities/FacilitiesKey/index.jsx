import React from "react";
import { Row, Col } from "antd";
import { SafetyCertificateOutlined, ClockCircleOutlined, StarOutlined, FundProjectionScreenOutlined } from "@ant-design/icons";

const keyFeaturesData = [
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: "2rem", color: "#4A5568" }} />,
    title: "Safety First",
    description: "We prioritize student safety with well-monitored premises and health protocols.",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: "2rem", color: "#4A5568" }} />,
    title: "Flexible Timings",
    description: "Our classes are scheduled to fit your busy lifestyle, with options for evening sessions.",
  },
  {
    icon: <StarOutlined style={{ fontSize: "2rem", color: "#4A5568" }} />,
    title: "Top-Rated Programs",
    description: "Our courses are recognized for their excellence, with a high success rate.",
  },
  {
    icon: <FundProjectionScreenOutlined style={{ fontSize: "2rem", color: "#4A5568" }} />,
    title: "State-of-the-Art Facilities",
    description: "Experience modern amenities, from labs to libraries, designed for optimal learning.",
  },
];

const KeyFeatures = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Key <span className="text-teal-600">Features</span>
        </h2>
        <Row gutter={[16, 16]}>
          {keyFeaturesData.map((feature, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <div className="bg-white shadow rounded-lg p-6 text-center h-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default KeyFeatures;
