import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import handshake from "./assets/handshake.jpeg";
import contactimg from './assets/contactform.jpg'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      alert(response.data);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  return (
    <>
      <div className="relative z-20 rounded-xl">
        <h1 className="text-white font-serif text-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-7xl italic z-10">
          CONTACT US
        </h1>
        <img
          src={handshake}
          alt="Contact image"
          className="head_img rounded-lg opacity-80"
        />
      </div>

      <div className="mt-10 grid max-w-screen-xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-8 lg:px-12 xl:px-16 dark:bg-gray-100 dark:text-gray-800 relative z-20">
        <div className="bg-white rounded-xl shadow-lg">
          <div className="space-y-2 p-4 md:p-6">
            <h3 className="text-lg font-semibold italic leading-tight mt-4 lg:text-xl text-black-500">
              Interested in studying overseas with First Ladder?
            </h3>
            <h3 className="text-lg font-semibold italic leading-tight mt-4 lg:text-xl text-black-500">
              Fill in your details and we'll call you back!
            </h3>
          </div>
          <img
            src={contactimg}
            alt=""
            className="w-full p-1 shadow-md shadow-blue-400 h-60 md:h-80 mt-2 md:mt-0 rounded-xl"
          />
        </div>
        <form
          noValidate=""
          className="space-y-6 container bg-white rounded-xl shadow-lg p-4 md:p-6"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              id="name"
              type="text"
              placeholder="Full name"
              className="w-full border-2 p-3 dark:bg-gray-100"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 border-2 rounded dark:bg-gray-100"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border-2 rounded dark:bg-gray-100"
              onChange={handleChange}
              value={formData.phone}
            />
          </div>
          <div>
            <textarea
              id="message"
              rows="3"
              placeholder="Message"
              className="w-full p-3 border-2 rounded dark:bg-gray-100"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold bg-sky-400 tracking-wide uppercase rounded dark:bg--600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-wrap justify-center mt-16">
        <div className="card mt-10 md:mt-0 md:ml-8 card-content p-4 md:p-5">
          <FaMapMarkedAlt className="h-12 w-10 text-sky-500" />
          <h1 className="text-sky-500 mt-2 md:mt-4">
            <b>Head Quarter</b>
          </h1>
          <a
            href="https://maps.app.goo.gl/b5aD54gnkmN9Ug89A"
            className="text-sm md:text-base"
          >
            714A, 7th floor, Phase II, Spencer Plaza, Anna Salai, Chennai 600002
          </a>
        </div>
        <div className="card mt-10 md:mt-0 md:ml-16 card-content p-4 md:p-5">
          <IoMdMail className="h-12 w-10 text-sky-500" />
          <h1 className="text-sky-500 mt-2 md:mt-4">
            <b>Mailing Address</b>
          </h1>
          <a href="mailto:hr@firstladder.com" className="text-sm md:text-base">
            hr@firstladder.com
          </a>
        </div>
        <div className="card mt-10 md:mt-0 md:ml-16 card-content p-4 md:p-5">
          <FaPhoneSquareAlt className="h-12 w-10 text-sky-500" />
          <h1 className="text-sky-500 mt-2 md:mt-4">
            <b>Business Talk</b>
          </h1>
          <a href="tel:+918300941219" className="text-sm md:text-base">
            +91 83009 41219
          </a>
        </div>
      </div>
      <div className="map mt-8 mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62186.64274524278!2d80.1792213!3d13.056972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e0c38c5381%3A0x405ededf7e643c76!2sFirst-Ladder%20Management%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1714646303749!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
