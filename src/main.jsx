import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import Home from "./Components/Home/index.jsx";
import Menu from "./Components/Menu/index.jsx";
import OrderNow from "./Components/OrderNow/index.jsx";
import About from "./Components/About/index.jsx";
import PremiumCoffee from "./Components/PremiumCoffee/index.jsx";
import UserFeedback from "./Components/UserFeedBack/index.jsx";
import ContactUs from "./Components/ContactUs/index.jsx";
import Footer from "./Components/Footer/index.jsx";

createRoot(document.getElementById("root")).render(
  <div className="overflow-x-hidden">
    <StrictMode>
      {/* <App/> */}
      <Navbar />
      <Home />
      <About/>
      <Menu/>
      <OrderNow/>
      <PremiumCoffee/>
      <UserFeedback/>
      <ContactUs/>
      <Footer/>
    </StrictMode>
    ,
  </div>
);
