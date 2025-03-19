import React, { useEffect } from 'react';
import Images from '../../Constants/Images';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuDetail = [
  {
    id: 1,
    Image: Images.blackCoffee,
    name: "Premium Coffee Selection",
    description:
      "Savor a range of freshly brewed coffee made from high-quality beans, offering everything from bold espressos to creamy lattes.",
  },
  {
    id: 2,
    Image: Images.whiteCoffee,
    name: "Cappuccino Bliss",
    description:
      "A rich blend of espresso, steamed milk, and frothy foam, delivering a creamy, smooth taste that satisfies and delights every time.",
  },
  {
    id: 3,
    Image: Images.blackCoffee,
    name: "Desi Latte",
    description:
      "A comforting latte infused with cardamom, blending traditional spice and creamy coffee for a unique, aromatic experience at Coffee_Khaas.",
  },
];

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Animate only once when scrolling down
    });
  }, []);

  return (
    <div id="services" className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header-Title */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-4xl font-light font-cursive text-primary">
            Our Services at Coffee_Khaas
          </h1>
        </div>

        {/* Menu-Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {MenuDetail.map((menu) => {
            return (
              <div
                key={menu.id}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white transition-all relative shadow-xl group max-w-[300px] min-h-[400px] font-serif"
                data-aos="fade-up" // AOS animation
                data-aos-delay={menu.id * 300} // Delay for staggered animation
              >
                <div className="h-[160px]">
                  <img
                    src={menu.Image}
                    alt={menu.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{menu.name}</h3>
                  <p className="text-gray-600 group-hover:text-white">{menu.description}</p>

                  {/* Price and Order Button */}
                  <div className="flex justify-between mt-5 items-center">
                    <p className="text-lg font-semibold">$3.75</p>
                    <button
                      className="bg-primary/90 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-primary/90 transition-all"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
