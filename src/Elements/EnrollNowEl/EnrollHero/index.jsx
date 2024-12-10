import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const EnrollNowHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
    phone: '',
    school: '',
    comments: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData, // Send form data
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        class: '',
        phone: '',
        school: '',
        comments: '',
      }); // Clear form
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500 py-20 flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Enroll Now
      </motion.h1>
      
      {!isSubmitted ? (
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mt-4 w-full max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="class"
                placeholder="Class"
                value={formData.class}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="school"
                placeholder="School"
                value={formData.school}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="comments"
                placeholder="Additional Comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.p
          className="text-lg text-white mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for enrolling! We will contact you soon.
        </motion.p>
      )}
    </div>
  );
};

export default EnrollNowHero;
