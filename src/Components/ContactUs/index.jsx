import React, { useEffect } from 'react';
import Images from '../../Constants/Images';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Background styling for the Contact Us section
const bgImage = {
    backgroundImage: `url(${Images.backgroundImage})`,
    backgroundColor: '#270c03',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

const ContactUs = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  return (
    <div id='contact' style={bgImage} className='min-h-screen flex items-center justify-center p-6'>
      {/* Container for the Contact Us content */}
      <div
        className='w-full max-w-3xl bg-primary/30 rounded-lg shadow-lg py-8 px-6'
        data-aos='fade-up' // Apply AOS animation
      >
        {/* Heading */}
        <h1
          className='text-4xl font-cursive text-primary font-semilight bold text-center mb-4'
          data-aos='fade-down' // Heading animation
        >
          Connect with Coffee_Khaas
        </h1>
        {/* Description */}
        <p
          className='text-center text-lg text-black/80 mb-8 font-cursive'
          data-aos='fade-right' // Paragraph animation
        >
          Got a question or feedback? We’d love to hear from you! Fill out the form below and let’s connect over coffee.
        </p>

        {/* Contact Us Form */}
        <form className='space-y-6 font-serif' data-aos='zoom-in'>
          {/* Name Field */}
          <div>
            <label htmlFor='name' className='block text-black/90 text-lg font-medium mb-1'>
              Your Name
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter your full name'
              className='w-full p-3 rounded-md border text-sm border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none'
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor='email' className='block text-black/90 text-lg font-medium mb-1'>
              Your Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email address'
              className='w-full p-3 rounded-md border text-sm border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none'
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor='message' className='block text-black/90 text-lg font-medium mb-1'>
              Your Message
            </label>
            <textarea
              id='message'
              rows='4'
              placeholder='Write your message here...'
              className='w-full p-3 rounded-md border text-sm border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none'
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className='text-center'>
            <button
              type='submit'
              className='bg-gradient-to-r from-primary to-secondary border-2 text-white px-6 py-3 rounded-lg border-primary font-serif hover:scale-105 duration-200'
              data-aos='flip-up' // Button animation
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Additional Information */}
        <div className='mt-8 text-center text-black/80' data-aos='fade-in'>
          <p className='font-cursive'>📍 Visit us at Coffee_Khaas, Main Street, Your City</p>
          <p className='font-cursive'>📧 Email: contact@coffee-khaas.com</p>
          <p className='font-cursive'>☎️ Call us: +92 3155570362</p>
          <p className='font-cursive mt-4 italic'>
            "Coffee is not just a drink; it's an experience we brew with love at Coffee_Khaas."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
