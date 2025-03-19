import React, { useEffect } from "react";
import Images from "../../Constants/Images"; // Import the image paths
import Lottie from "lottie-react";
import coffeeAnimation from "../../coffeeAnimation.json"; // Ensure the correct file path and extension
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Background image styles
const bgImage = {
  backgroundImage: `url(${Images.backgroundImage})`, // Make sure backgroundImage is defined correctly in the Images object
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "500px",
  marginBottom: "2rem",
  position: "relative",
  overflow: "hidden",
};

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000, // Set the duration for the animations (in milliseconds)
      once: true, // Animation will only happen once when scrolling into view
    });
  }, []);

  return (
    <div id="about" className="md:py-20 py-40" style={bgImage}>
      {/* Overlay */}
      <h1 
        className="text-5xl text-primary font-cursive text-center" 
        data-aos="fade-up" 
        data-aos-duration="1500"
      >
        About Us
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
       
        {/* Image Section with AOS zoom-in animation and slow duration */}
        <div data-aos="zoom-in" data-aos-duration="2000"> {/* Slow zoom-in effect */}
          <Lottie animationData={coffeeAnimation} className="md:w-[600px]" />
        </div>
       
        {/* Text Section with fade-up animation */}
        <div className="space-py-4 px-4 md:px-0">
          <h1 
            className="text-3xl text-primary font-cursive" 
            data-aos="fade-up" 
            data-aos-duration="1500"
            data-aos-delay="300" // Adds a slight delay for the heading
          >
            Welcome to the Heart of Coffee_Khaas
          </h1>
          <p 
            className="font-serif text-xl" 
            data-aos="fade-up" 
            data-aos-duration="1500"
            data-aos-delay="500" // Adds a slight delay for the paragraph
          >
            At Coffee_Khaas, we take pride in serving you the finest, handpicked coffee beans from around the world. 
            Whether you're looking for a cozy spot to relax or need a quick pick-me-up, we offer a warm, welcoming atmosphere 
            where you can indulge in expertly brewed coffee, delicious pastries, and a selection of freshly prepared snacks. 
            Join us for an experience that’s not just about great coffee, but also about creating lasting memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
