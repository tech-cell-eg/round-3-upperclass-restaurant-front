import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/classes/1.jpeg"
import image2 from "../assets/images/classes/2.jpeg"
import image3 from "../assets/images/classes/3.jpeg"
import image4 from "../assets/images/classes/4.jpeg"
import image5 from "../assets/images/classes/5.jpeg"

export default function SliderClasses() {
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "Delicious Breakfast",
      category: "Asian",
      date: "June 16, 2023",
      image: image1
    },
    {
      title: "Coffee Time",
      category: "Breakfast",
      date: "March 17, 2023",
      image: image2
    },
    {
      title: "Vegan Burger",
      category: "Healthy",
      date: "January 10, 2023",
      image: image3
    },
    {
      title: "Salad Style",
      category: "Italian",
      date: "November 12, 2022",
      image: image4
    },
    {
      title: "Homemade Honey",
      category: "Italian",
      date: "October 8, 2022",
      image: image5
    },
  ];

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
    <div
      ref={containerRef}
      className=" overflow-x-scroll overflow-y-hidden scroll-smooth no-scrollbar "
    >
      <div className="flex w-max  ">
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-[30rem] h-screen flex-shrink-1">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 w-[30rem] bg-black bg-opacity-40 flex items-center justify-center">
              <Link to={`/classesdetail/${slide.category}`} >
                <div className="text-white text-center space-y-2 ">
                  <p className="text-xl text-yellow-300 font-semibold">
                    {slide.category}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-sm">{slide.date}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
