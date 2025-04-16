import React from 'react'
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { motion } from 'framer-motion'; 

const images = import.meta.glob("../assets/images/restaurant/*.png", {
  eager: true,
});
const imageList = Object.values(images).map((mod: any) => mod.default)




const  RestaurantSlider: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        const x = containerRef.current;
        const onWheel = (e: WheelEvent) => {
          if (x && e.deltaY !== 0) {
            x.scrollLeft += e.deltaY;
            e.preventDefault();
          }
        };
        x?.addEventListener("wheel", onWheel, { passive: false });
        return () => x?.removeEventListener("wheel", onWheel);
      }, []);
    

  return (
  <>
<div
      ref={containerRef}
      className="relative overflow-x-scroll overflow-y-hidden scroll-smooth no-scrollbar">
        <Link
        to="/"
        className="fixed z-10 w-full justify-center text-center"
      >
        <p className="font-chillax mt-10 text-2xl sm:text-3xl font-medium text-text_default">
          nique.
        </p>
      </Link>

      <div className="flex w-max ">
      {imageList.map((src, index) => (
  <div
    key={index}
    className="relative w-[50vw] h-[100vh] flex-shrink-0"
  >
    <img
      src={src}
      alt={`footer-icon-${index}`}
      className="w-full h-full object-cover"
    />
            </div>
          ))}
        </div>

        {/* Text On Slides with Fade Effect */}
  {/* <motion.div
                className="
                  absolute z-10 top-52 left-52
                  bg-black bg-opacity-40
                  flex  items-center justify-center
                  transition-opacity duration-300 ease-in-out
                "
              >
                <p className="font-chillax text-white text-xl sm:text-2xl">Discover</p>
                <p className="font-chillax mt-4 text-4xl sm:text-5xl font-bold text-white">nique.</p>
              </motion.div> */}

      </div>

    <NavBar  />

  </>
  )
}


export default RestaurantSlider;
