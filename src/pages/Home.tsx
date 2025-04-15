import React from 'react';
import homeBg from '../assets/images/homeBg.png';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-bg_default bg-center w-full overflow-hidden"
    >
      {/* Background image */}
      <img
        src={homeBg}
        alt="background"
        className="absolute w-full h-full inset-0 object-cover opacity-1 z-0"
      />

      {/* Logo */}
      <Link
        to="/"
        className="relative z-10 w-full justify-center text-center"
      >
        <p className="font-Chillax mt-10 text-2xl sm:text-3xl font-medium text-text_default">
          nique.
        </p>
      </Link>

      {/* Content over the image */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 sm:px-10">
        <h1 className="font-Bitter italic text-text_primary text-3xl sm:text-5xl md:text-[80px] mb-2">
          The pure taste of
        </h1>
        <h1 className="font-Chillax text-7xl sm:text-[160px] md:text-[160px] text-text_default mb-4">
          Thailand
        </h1>
        <p className="text-gray-300 max-w-xs sm:max-w-md md:max-w-xl text-md sm:text-base mb-40">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* NavBar Section */}
        <NavBar />

    </motion.div>
  );
};

export default HomePage;
