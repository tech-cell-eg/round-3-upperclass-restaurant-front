import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

interface ClassItem {
  id: number;
  title: string;
  sub_title: string;
  image: string;
  date: string;
}

export default function SliderClasses() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState<ClassItem[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          "https://round-3-upper-restaurant.digital-vision-solutions.com/api/classes"
        );
        setSlides(response.data.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

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
      className="overflow-x-scroll overflow-y-hidden scroll-smooth no-scrollbar"
    >
      {/* Logo */}
      <Link to="/" className="fixed z-50 w-full justify-center text-center">
        <p className="font-chillax mt-10 text-2xl sm:text-3xl font-medium text-text_default">
          nique.
        </p>
      </Link>

      <div className="flex w-max">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-[30rem] h-screen flex-shrink-0"
          >
            <img
              src={slide.image}
              alt={slide.sub_title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 w-[30rem] bg-black bg-opacity-40 flex items-center justify-center">
              <Link to={`/classesdetail/${slide.id}`}>
                <div className="text-white text-center space-y-2">
                  <p className="text-xl text-yellow-300 font-semibold">
                    {slide.title}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-bold">
                    {slide.sub_title}
                  </h2>
                  <p className="text-sm">{slide.date}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <NavBar />
    </div>
  );
}
