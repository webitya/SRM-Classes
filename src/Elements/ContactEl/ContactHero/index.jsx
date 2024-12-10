import React, { useState } from "react";
import { Button, Input, Form, message, Card } from "antd";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", values, "YOUR_PUBLIC_KEY")
      .then(
        (response) => {
          message.success("Your message has been sent successfully!");
          form.resetFields();
        },
        (error) => {
          message.error("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div>
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-green-400 to-blue-600 p-10 text-white text-center shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold">Connect with SRM CLASSES</h2>
        <p className="mt-4 text-lg">We are here to support your educational journey. Reach out to us for any queries!</p>
      </div>

      {/* Contact Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-6">
        <Card className="p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300 bg-white rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-700">support@srmclasses.com</p>
          <p className="text-gray-500 mt-1">Available 24/7</p>
        </Card>
        <Card className="p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300 bg-white rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-700">+91 9876543210</p>
          <p className="text-gray-500 mt-1">Mon-Fri: 10 AM - 7 PM</p>
        </Card>
        <Card className="p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300 bg-white rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-700">Ravi Steel Chowk, Kamre Ashram, Ranchi</p>
          <p className="text-gray-500 mt-1">Open: Mon-Sat</p>
        </Card>
      </div>

      {/* Contact Form Section */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Reach Out to Us</h2>
      <div className="flex flex-col md:flex-row justify-between px-6 py-10">
        <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Your Name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="e.g. John Doe" className="rounded-lg" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Your Email"
              rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
            >
              <Input placeholder="e.g. johndoe@example.com" className="rounded-lg" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Your Phone"
              rules={[{ required: true, message: "Please enter your phone number!" }]}
            >
              <Input placeholder="e.g. +91 9876543210" className="rounded-lg" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Your Message"
              rules={[{ required: true, message: "Please enter your message!" }]}
            >
              <Input.TextArea rows={4} placeholder="Write your message here..." className="rounded-lg" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Google Map Section */}
        <div className="md:w-1/2 md:pl-6">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160833.7998910766!2d77.05512465439414!3d28.53551710950634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc43cd0bff9b%3A0xf5f50d6436aa80c6!2sIndia!5e0!3m2!1sen!2sus!4v1696458504540!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
