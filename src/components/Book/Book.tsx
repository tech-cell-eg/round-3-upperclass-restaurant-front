import "../../index.css"
import BookImage from "../../assets/images/BookImage.png"; 
import Bsidebar from "./Bsidebar";
import { Footer } from "../Footer";

const Menu: React.FC = () => {
    return (
      <div className="flex">
        {/* Right Section - Fixed Image */}
        <div className="w-1/2 bg-[#050505] opacity-95 z-[5] sticky top-0 h-screen">
          <img
            src={BookImage}
            alt="Menu Visual"
            className="w-full object-cover h-full"
          />
  
          {/* Logo top */}
          <p className="absolute font-chillax text-center top-20 left-72 text-text_default text-3xl z-10">nique.</p>
  
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-12">
            <h2 className="font-bitter text-text_primary text-5xl font-bold mb-2 text-center">Book a table</h2>
            <h1 className="font-bitter text-text_default text-8xl font-extrabold text-center">Reservation</h1>
          </div>
        </div>
  
        {/* Left Section - Scrollable Menu */}
        <div className="w-1/2  h-screen overflow-y-auto bg-black text-white ">
          <Bsidebar />
          <Footer />
        </div>
      </div>
    );
  };
  

export default Menu;
