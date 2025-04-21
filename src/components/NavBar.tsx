import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  positionClass?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ positionClass = true }) => {
  // Pages Bar and Open Hours
  const [isBarsMenuOpen, setIsBarsMenuOpen] = useState(false);
  const [isHoursMenuOpen, setIsHoursMenuOpen] = useState(false);

  // Cart Icon
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  // To Navigate To Book Page
  const navigate = useNavigate();
  const goToBook = () => {
    navigate("/Book");
  };

  // Close Cart Bar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <>
      <div
        className={`bg-white p-4 rounded-full flex gap-4 items-center justify-center text-center mx-auto mb-4 absolute  bottom-4 z-20 ${
          positionClass ? "left-1/2 transform -translate-x-1/2" : ""
        } `}
      >
        {/* Bars Icon Hover */}
        <div
          onMouseEnter={() => setIsBarsMenuOpen(true)}
          onMouseLeave={() => setIsBarsMenuOpen(false)}
          className="relative"
        >
          <i className="pi pi-bars text-icon_inverse text-xl cursor-pointer"></i>
          <AnimatePresence>
            {isBarsMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-0 bg-white rounded-md shadow-md p-2 w-48 mb-10 z-30"
              >
                <ul className="space-y-1">
                  <li>
                    <p className="flex text-text_inverse justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax">
                      Pages
                    </p>
                  </li>
                  <li>
                    <Link
                      to="/menu"
                      className="flex text-text_inverse justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax"
                    >
                      Menu <i className="pi pi-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/restaurant"
                      className="flex text-text_inverse justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax"
                    >
                      Restaurant <i className="pi pi-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="flex text-text_inverse justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax"
                    >
                      Contact <i className="pi pi-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      className="flex text-text_inverse justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax"
                    >
                      Shop <i className="pi pi-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex text-text_inverse justify-between items-center px-4 py-2 hover:bg-gray-100 font-chillax"
                    >
                      Blog <i className="pi pi-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Open Hours Hover */}
        <div
          onMouseEnter={() => setIsHoursMenuOpen(true)}
          onMouseLeave={() => setIsHoursMenuOpen(false)}
          className="relative"
        >
          <i className="pi pi-clock text-icon_inverse text-xl cursor-pointer"></i>
          <AnimatePresence>
            {isHoursMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-0 bg-white rounded-md shadow-md mb-10 p-2 w-48  z-30"
              >
                <div>
                  <h3 className="font-semibold mb-2 text-left text-text_inverse font-chillax">
                    Opening Hours
                  </h3>
                  <div className="flex justify-between">
                    <p className="font-medium font-chillax text-text_inverse">
                      Mon
                    </p>
                    <p className="float-right font-chillax text-text_inverse">
                      closed
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium font-chillax text-text_inverse">
                      Tue - Fri
                    </p>
                    <p className="float-right font-chillax text-text_inverse">
                      4pm - 8pm
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium font-chillax text-text_inverse">
                      Sat - Sun
                    </p>
                    <p className="float-right font-chillax text-text_inverse">
                      5pm - 11pm
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cart SideBar  */}
        <AnimatePresence>
          {isCartOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-80 bg-bg_default shadow-lg z-50"
              ref={cartRef}
            >
              <aside className="h-screen p-4 grid grid-rows-[auto_1fr_auto] overflow-hidden">
                <div className="flex justify-between">
                  <h2 className="text-lg font-chillax font-semibold">Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-sm text-text_primary hover:text-black"
                  >
                    Close
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">No items in the cart.</p>
                </div>
              </aside>
            </motion.div>
          )}
        </AnimatePresence>

        <button onClick={() => setIsCartOpen(true)}>
          <i className="pi pi-shopping-cart text-icon_inverse text-xl"></i>
        </button>
        <Link
          to="/menu"
          className="font-chillax text-text_inverse  hidden lg:block"
        >
          Menu
        </Link>
        <Link
          to="/restaurant"
          className="font-chillax text-text_inverse  hidden lg:block"
        >
          Restaurant
        </Link>
        <Link
          to="/classes"
          className="font-chillax text-text_inverse  hidden lg:block"
        >
          Classes
        </Link>
        <button
          onClick={goToBook}
          className="group relative bg-bg_default sm:text-base text-text_default px-4 py-2 rounded-full overflow-hidden h-10 w-40"
        >
          <div className="flex flex-col transition-all duration-300 ease-in hover:translate-y-[-35px]">
            <span className="h-8 flex items-center justify-center">
              Book A Table
            </span>
            <span className="h-8 flex items-center justify-center">
              Book A Table
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default NavBar;
