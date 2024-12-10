import React from "react";
import { Row, Col } from "antd";
import { SolutionOutlined, ExperimentOutlined, TrophyOutlined, TeamOutlined } from "@ant-design/icons";

const KeyFeatures = () => {
  const features = [
    {
      icon: <SolutionOutlined style={{ fontSize: "2.5rem", color: "#fff" }} />,
      title: "Personalized Attention",
      description:
        "We ensure every student gets personalized attention, helping them achieve their full potential.",
    },
    {
      icon: <ExperimentOutlined style={{ fontSize: "2.5rem", color: "#fff" }} />,
      title: "Cutting-Edge Learning",
      description:
        "Modern classrooms with digital learning tools to make the learning experience engaging and effective.",
    },
    {
      icon: <TrophyOutlined style={{ fontSize: "2.5rem", color: "#fff" }} />,
      title: "Proven Results",
      description:
        "Our track record of academic excellence speaks for itself. We focus on delivering results.",
    },
    {
      icon: <TeamOutlined style={{ fontSize: "2.5rem", color: "#fff" }} />,
      title: "Expert Faculty",
      description:
        "Our educators bring a wealth of experience and are committed to student success.",
    },
  ];

  return (
    <div className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-yellow-400">Key Features</span>
        </h2>
        <Row gutter={[16, 16]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center h-full transition transform hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default KeyFeatures;
