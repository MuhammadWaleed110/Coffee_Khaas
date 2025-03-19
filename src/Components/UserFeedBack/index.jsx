import React, { useEffect } from "react";
import Images from '../../Constants/Images';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// User feedback data
const userFeedback = [
  {
    id: 1,
    name: "Ali Khan",
    feedback:
      "Coffee_Khaas is the perfect place to enjoy chai with a desi twist. The samosas are crispy, delicious, and flavorful!",
    Image: Images.coffeeFeedback,
  },
  {
    id: 2,
    name: "Ayesha Siddiqui",
    feedback:
      "The ambiance at Coffee_Khaas is incredibly cozy and welcoming. It’s my favorite spot in Karachi to relax and unwind.",
    Image: Images.coffeeKhaas,
  },
  {
    id: 3,
    name: "Ahmed Raza",
    feedback:
      "Coffee_Khaas is a great place for an evening hangout with friends. The chai paratha combo is unbeatable!",
    Image: Images.feedbackCoffee1,
  },
  {
    id: 4,
    name: "Fatima Noor",
    feedback:
      "I love how Coffee_Khaas blends traditional Pakistani flavors with modern coffee shop vibes. Highly recommend their Kashmiri chai!",
    Image: Images.feedbackCoffee2,
  },
  {
    id: 5,
    name: "Hassan Ali",
    feedback:
      "After a hectic day at work, Coffee_Khaas is my go-to place to relax and enjoy a cup of coffee. Amazing service!",
    Image: Images.premiumCoffee,
  },
  {
    id: 6,
    name: "Zainab Malik",
    feedback:
      "Coffee_Khaas has redefined my coffee experience. Their fusion of traditional flavors with a modern touch is unparalleled!",
    Image: Images.ReviewCoffee,
  },
];

const UserFeedback = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Animation easing
    });
  }, []);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 10000, // For large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="userFeedback" className="py-20 bg-gray-50">
      {/* Container for the feedback section */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-center font-cursive text-primary text-4xl font-light">
            What Our Customers Say
          </h1>
          <p className="text-center text-black/90 mt-4 font-serif">
            Here's what our valued customers think about Coffee_Khaas.
          </p>
        </div>

        {/* Slick Slider */}
        <Slider {...settings}>
          {userFeedback.map((feedback) => (
            <div key={feedback.id} className="p-6">
              <div
                data-aos="zoom-in"  // Apply AOS zoom-in animation here
                className="flex flex-col items-center gap-4 shadow-lg rounded-xl py-8 px-6 mx-4 font-serif bg-brandDark/10 relative"
              >
                {/* User Image */}
                <div className="mb-4">
                  <img
                    src={feedback.Image} // Using feedback-specific image
                    alt={feedback.name}
                    className="rounded-full w-20 h-20 border-2 border-primary"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-gray-700 italic text-lg">
                      "{feedback.feedback}"
                    </p>
                    <h1 className="text-primary font-cursive font-light text-xl">{feedback.name}</h1>
                  </div>
                </div>
                {/* Decorative text */}
                <p className="text-brandDark/10 text-9xl font-serif absolute top-0 right-0">,,</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UserFeedback;
