import React from "react";
import { Row, Col, Card } from "antd";
import { UserOutlined, BookOutlined, LaptopOutlined, TeamOutlined } from "@ant-design/icons";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <UserOutlined style={{ fontSize: "2rem", color: "#fff" }} />,
      title: "Experienced Faculty",
      description:
        "Our team of dedicated educators brings years of experience to provide high-quality education.",
    },
    {
      icon: <BookOutlined style={{ fontSize: "2rem", color: "#fff" }} />,
      title: "Comprehensive Study Materials",
      description:
        "Receive printed notes, daily assignments, and regular tests to track your progress.",
    },
    {
      icon: <LaptopOutlined style={{ fontSize: "2rem", color: "#fff" }} />,
      title: "Digital Learning",
      description:
        "Learn through modern digital classrooms, making education engaging and interactive.",
    },
    {
      icon: <TeamOutlined style={{ fontSize: "2rem", color: "#fff" }} />,
      title: "Personalized Attention",
      description:
        "We ensure every student gets personalized attention to cater to their individual learning needs.",
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Why Choose <span className="text-blue-500">SRM CLASSES?</span>
        </h2>
        <Row gutter={[16, 16]}>
          {features.map((feature, index) => (
            <Col xs={24} md={12} lg={6} key={index}>
              <div className="h-full flex">
                <Card
                  hoverable
                  className="transform transition duration-500 hover:scale-105 bg-gray-800 hover:bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-2xl text-white rounded-lg p-6 flex-grow"
                  bordered={false}
                >
                  {/* Icon with background */}
                  <div className="mb-4 flex justify-center items-center w-16 h-16 bg-blue-500 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WhyChooseUs;
