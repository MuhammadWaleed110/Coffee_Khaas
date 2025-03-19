import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Ensure you import the AOS styles
import 'slick-carousel/slick/slick.css'; // Added space after import
import 'slick-carousel/slick/slick-theme.css'; // Fixed spacing issue here



const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <>
      <h1 data-aos="fade-up">
        Welcome to Coffee_Khaas
      </h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Where every cup tells a story, and every sip feels like home. At Coffee_Khaas, we bring you a curated blend of flavors, aromas, and experiences that redefine your love for coffee. From our signature drinks to our cozy ambiance, we are here to make your coffee moments truly special.
      </p>
    </>
  );
};

export default App;
