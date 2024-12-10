import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { ExperimentOutlined, ReadOutlined, TrophyOutlined } from "@ant-design/icons";

const courses = [
  {
    icon: <ExperimentOutlined style={{ fontSize: "3rem", color: "#fff" }} />,
    title: "Intermediate Science",
    description: "Specialized classes for Class XI and XII (JAC and CBSE Boards) to help you excel in science subjects.",
    link: "/enroll-now",
  },
  {
    icon: <TrophyOutlined style={{ fontSize: "3rem", color: "#fff" }} />,
    title: "Olympiad Preparation",
    description: "Focused Olympiad preparation for Class VI to X, building critical thinking and problem-solving skills.",
    link: "/enroll-now",
  },
  {
    icon: <ReadOutlined style={{ fontSize: "3rem", color: "#fff" }} />,
    title: "Foundation Batches",
    description: "Comprehensive courses for Class VI, VII, and VIII to lay the groundwork for future academic success.",
    link: "/enroll-now",
  },
];

const CoursesWeOffer = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Courses <span className="text-blue-400">We Offer</span>
        </h2>
        <Row gutter={[16, 16]}>
          {courses.map((course, index) => (
            <Col xs={24} md={8} key={index}>
              {/* Custom Card Design */}
              <div className="h-full transform transition duration-500 hover:scale-105">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-2xl rounded-xl p-6 flex flex-col items-center justify-between h-full text-white relative overflow-hidden">
                  {/* Icon and Content */}
                  <div className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/abstract-pattern.png)' }}></div>
                  <div className="z-10 mb-4">{course.icon}</div>
                  <h3 className="text-2xl font-semibold z-10 text-center mb-4">{course.title}</h3>
                  <p className="text-base text-white opacity-80 z-10 text-center mb-8">{course.description}</p>
                  <Link to={course.link} className="z-10">
                    <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CoursesWeOffer;
