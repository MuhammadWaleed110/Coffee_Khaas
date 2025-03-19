import React from "react";
import Images from "../../Constants/Images";

const Home = () => {
  return (
    <div id="/" className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
          {/* Text Section */}
          <div className="font-serif order-2 sm:order-1 flex flex-col justify-center gap-6">
            <h1 className="text-4xl md:text-5xl font-light leading-tight">
              Welcome to{" "}
              <span className="text-primary font-cursive">Coffee_Khaas</span>
              <br />
              Your One-Stop Destination for Premium Coffee & Chai
            </h1>

            <p className="mt-4 text-xl">
              At Coffee_Khaas, we serve the finest brews to satisfy your
              caffeine cravings. Whether you’re starting your day or unwinding
              after a long one, we’ve got the perfect cup waiting for you.
            </p>
            <div>
              <button className="mt-4 bg-gradient-to-r from-primary to-secondary border-2 text-white px-6 py-3 rounded-full border-primary font-serif hover:scale-105 duration 200">
                Coffee & Chai
              </button>
            </div>
          </div>


          {/* Image Section */}
          <div className="min-h-[450px] flex flex-col items-center order-1 sm:order-2 relative">
            <a href="#">
              <img
                src={Images.blackCoffee}
                alt="Coffee Khaas"
                className=" w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
              />
            </a>

            {/* {Text-Looks like buttons} */}
            <div className="mt-5 bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full absolute left-10 font-serif hover:scale-105 duration-200 border-primary">
                <h1>Sip & Smile</h1>
            </div>

            <div>
                <h1 className="mb-5 bg-gradient-to-r from-secondary to-primary px-6 py-3 border-2 rounded-full border-primary text-white font-serif hover:scale-105 duration-200 absolute right-10">Wake up with Us</h1>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
