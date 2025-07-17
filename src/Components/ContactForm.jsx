import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., emailjs, backend API)
    alert("Thanks for reaching out!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
