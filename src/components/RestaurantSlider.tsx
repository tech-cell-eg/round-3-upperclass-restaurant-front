import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const images = import.meta.glob("../assets/images/restaurant/*.png", {
  eager: true,
});
const imageList = Object.values(images).map((mod: any) => mod.default);

const RestaurantSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(false);

  // Hide Text Layer When Scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        setIsHidden(scrollLeft > 70);
      }
    };

    const el = containerRef.current;
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  // Images Slider
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

{/* Logo */}
<Link
        to="/"
        className="fixed z-50 w-full justify-center text-center"
      >
        <p className="font-chillax mt-10 text-2xl sm:text-3xl font-medium text-text_default">
          nique.
        </p>
      </Link>

{/* Images Slides */}
<div className="flex w-max bg-black">
      {imageList.map((src, index) => (
  <div
    key={index}
    className="w-[50vw] h-[100vh] flex-shrink-0"
  >
    <img
      src={src}
      alt={`slide-${index}`}
      className="w-full h-full object-cover "
      loading="lazy"
    />
            </div>
          ))}

  {/* Text overlay with fade animation */}
  <div
  className={`absolute inset-0 z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center 
    bg-black bg-opacity-50 transform transition-all duration-500 ease-in-out 
    ${isHidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <h1 className="font-bitter text-text_primary text-6xl">
            Discover
          </h1>
          <h1 className="font-chillax font-semibold text-text_default text-8xl mt-7">
            nique.
          </h1>
        </div>
        </div>

      </div>

      <NavBar />
    </>
  );
};

export default RestaurantSlider;
