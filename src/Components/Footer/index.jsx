import React, { useEffect } from 'react';
import { FaLocationArrow, FaPhone, FaEnvelope, FaCoffee, FaInfoCircle, FaHome, FaUtensils, FaBookOpen, FaCogs, FaGithub, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import Images from '../../Constants/Images';

// Footer details array for quick links with their corresponding icons and titles
const footerDetail = [
  {
    title: 'Home',
    link: '#home',
    icon: <FaHome className="mr-2 text-white" /> 
  },
  {
    title: 'About',
    link: '#about',
    icon: <FaInfoCircle className="mr-2 text-white" /> 
  },
  {
    title: 'Menu',
    link: '#menu',
    icon: <FaUtensils className="mr-2 text-white" /> 
  },
  {
    title: 'Café Story',
    link: '#cafeStory',
    icon: <FaBookOpen className="mr-2 text-white" /> 
  },
  {
    title: 'Services',
    link: '#service',
    icon: <FaCoffee className="mr-2 text-white" /> 
  },
  {
    title: 'Contact US',
    link: '#contactus',
    icon: <FaPhone className="mr-2 text-white" /> 
  },
];

// Footer component
const Footer = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 }); // You can adjust duration and other settings here
  }, []);

  return (
    <div className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* First section: About Coffee_Khaas */}
          <div className="space-y-4" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-light font-cursive text-white">Coffee_Khaas</h2>
            <p className="text-sm sm:text-base font-serif leading-relaxed">
              Experience the rich aroma and flavors of our special brews. Coffee_Khaas offers a unique and cozy ambiance for coffee lovers.
            </p>
            <img src={Images.whiteCoffee} alt="Coffee Shop" className="w-40 h-auto rounded-lg mt-4" />
          </div>

          {/* Second section: Quick Links */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl sm:text-2xl font-light font-serif text-white">Quick Links</h3>
            <ul className="text-sm sm:text-base font-serif space-y-2">
              {footerDetail.map((item, index) => (
                <li className="flex items-center" key={index} data-aos="fade-right">
                  {item.icon} {/* Icon for each link */}
                  <a href={item.link} className="text-white hover:text-gray-300">{item.title}</a> {/* Link text */}
                </li>
              ))}
            </ul>
          </div>

          {/* Third section: Contact Us */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl sm:text-2xl font-light font-serif text-white">Contact Us</h3>
            <ul className="text-sm sm:text-base font-serif space-y-2">
              {/* Contact details with icons */}
              <li><FaPhone className="inline-block text-white" /> <a href="tel:+923012345678" className="text-white hover:text-gray-300">+92 30 123 45678</a></li>
              <li><FaEnvelope className="inline-block text-white" /> <a href="mailto:info@coffeekhaas.com" className="text-white hover:text-gray-300">info@coffeekhaas.com</a></li>
              <li><FaLocationArrow className="inline-block text-white" /> 123 Coffee Lane, Khairpur, Pakistan</li>
            </ul>
          </div>

          {/* Fourth section: Social Media Links */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-xl sm:text-2xl font-light font-serif text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Social media icons with links */}
              <a href="https://www.facebook.com" className="text-blue-500 hover:text-blue-700">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-600">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://github.com/MuhammadWaleed110" className="text-black-500 hover:text-black-700">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-waleed-gazar/" className="text-blue-700 hover:text-blue-900">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center text-sm sm:text-base text-black/90 font-serif mb-0">
          <p>&copy; 2025 Coffee_Khaas. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
