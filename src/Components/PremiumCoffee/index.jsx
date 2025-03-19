import React, { useEffect } from 'react';
import { GrSecure } from 'react-icons/gr'; // Importing the GrSecure icon
import { IoFastFood } from 'react-icons/io5'; // Importing the IoFastFood icon
import { GiFoodTruck } from 'react-icons/gi'; // Importing the GiFoodTruck icon
import Images from '../../Constants/Images';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

// Inline styles for background image
const bgImage = {
  backgroundImage: `url(${Images.coffeeTexture})`,
  backgroundColor: '#270c03',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
};

const PremiumCoffee = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out',
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <div id="services" style={bgImage}>
      <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Image Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img 
              src={Images.whiteCoffee} 
              alt="Premium Coffee" 
              className="max-w-[430px] w-full mx-auto spin animate-spin drop-shadow-xl" 
            />
          </div>

          {/* Text Section */}
          <div
            className="flex flex-col justify-center gap-6 sm:pt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h1 className="text-3xl sm:text-3xl font-light font-cursive font-bold text-primary">
              Welcome to Premium Coffee_Khaas
            </h1>
            <p className="text-xl text-black/90 font-serif">
              Savor the finest blends of coffee, handpicked for your perfect moment of relaxation.
            </p>

            {/* Premium Section (col-1) */}
            <div className='grid grid-cols-2 gap-6'>
              <div
                className='space-y-5'
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                {/* Secure Icon Section */}
                <div className='flex items-center gap-3 font-serif'>
                  <GrSecure className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
                  <span>Secure & Reliable Ordering</span>
                </div>

                {/* Fast Food Icon Section */}
                <div className='flex items-center gap-3 font-serif'>
                  <IoFastFood className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100'/>
                  <span>Quick & Delicious Fast Food</span>
                </div>

                {/* Food Truck Icon Section */}
                <div className='flex items-center gap-3 font-serif'>
                  <GiFoodTruck className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100'/>
                  <span>Mobile Food Truck for On-the-Go</span>
                </div>
              </div>

              {/* Tea-Lover Description Section (col-2) */}
              <div
                className='space-y-3 border-l-4 border-primary/60 pl-6'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <h1 className="text-2xl sm:text-2xl font-light font-cursive text-primary">For Tea-Lovers</h1>
                <p className="text-xl text-black/90 font-serif">
                  Our premium coffee blends are perfect for those who enjoy tea. Whether it's a simple green tea or a fancy herbal tea, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumCoffee;
