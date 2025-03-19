import React from "react";
import { FaCoffee } from "react-icons/fa";
import Images from "../../Constants/Images";

const NavbarDetail = [
  { id: "1", title: "Home", link: "#/" },
  { id: "2", title: "About", link: "#about" },
  { id: "3", title: "Services", link: "#services" },
  { id: "4", title: "Contact", link: "#contact" },
  { id: "5", title: "Order Now", link: "#order-now" },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#4a1e1b] to-[#270c03]/90 text-white font-serif">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <a
              href="#"
              className="font-light text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img
                src={Images.coffeelogo}
                alt="Coffee_Khaas Logo"
                className="w-32 h-auto"
              />
              Coffee Khaas
            </a>
          </div>

          {/* Navigation & Order Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            <ul className="hidden sm:flex items-center gap-4">
              {NavbarDetail.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-xl py-4 px-4 text-white/80 hover:text-white duration-200 transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
