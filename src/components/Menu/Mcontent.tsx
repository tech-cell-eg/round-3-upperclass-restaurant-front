import { useEffect, useState } from "react";
import axios from "axios";
//import image from "../../assets/images/MenuB(images).png";
import { Footer } from "../Footer";

//  Types
interface MenuItem {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
  highlight?: boolean;
  category: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const Mcontent = () => {
  const [menuData, setMenuData] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);

  const sections = ["starters", "breakfast", "lunch", "drinks"];
  const [activeTab, setActiveTab] = useState(sections[0]);

  // Axios call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://round-3-upper-restaurant.digital-vision-solutions.com/api/menu-items"
        );

        if (response.data.status) {
          const rawItems: MenuItem[] = response.data.data;

          const groupedData: MenuCategory[] = sections.map((category) => ({
            category: category.charAt(0).toUpperCase() + category.slice(1),
            items: rawItems.filter(
              (item) => item.category.toLowerCase() === category
            ),
          }));

          setMenuData(groupedData);
        }
      } catch (err) {
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    
  }, []);
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <p className="text-lg animate-pulse">Loading menu...</p>
      </div>
    );
  }

  //  Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div
      id="menu-scroll"
      className="h-full relative md:h-screen md:overflow-y-auto bg-black text-white"
    >
      {/* Tab Menu */}
      <div className="sticky top-0 mb-10 px-4 py-4 z-[1000] bg-black text-white flex justify-center">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(section) as HTMLElement;
            
              if (el) {
                const offset = 80;
                const isSmallScreen = window.innerWidth < 768;
            
                const top = el.getBoundingClientRect().top + (isSmallScreen ? window.scrollY : document.getElementById("menu-scroll")!.scrollTop) - offset;
            
                (isSmallScreen ? window : document.getElementById("menu-scroll")!).scrollTo({
                  top,
                  behavior: "smooth",
                });
            
                setActiveTab(section);
              }
            }}
            
            className={`text-sm capitalize px-3 py-1 rounded-md transition-all duration-300 ${
              activeTab === section
                ? "text-text_primary"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {section}
          </a>
        ))}
      </div>

      {/* Sections */}
      <div className="px-4 sm:px-11 mt-10">
        {menuData.map((section) => (
          <div
            key={section.category}
            id={section.category.toLowerCase()}
            className="mb-16 scroll-mt-32 sm:scroll-mt-52"
          >
            <h2 className="text-2xl font-bitter text-text_primary font-bold mb-6">
              {section.category}
            </h2>

            {section.items.length === 0 ? (
              <p className="text-gray-500">No items available.</p>
            ) : (
              <div className="grid gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center justify-between p-4 transition-all duration-300 
                      ${
                        item.tag
                          ? "border border-text_primary rounded-xl"
                          : "border-none"
                      } 
                      hover:shadow-lg hover:border-text_primary`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                      />
                      <div>
                        <h3 className="text-xl sm:text-xl text-white font-semibold">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      {item.tag && (
                        <span className="absolute top-1/2 right-7 -translate-y-[63px] bg-text_primary text-black text-sm px-3 py-1 rounded shadow-md">
                          {item.tag}
                        </span>
                      )}

                      {item.originalPrice && item.originalPrice > item.price ? (
                        <div>
                          <p className="text-sm line-through text-red-400">
                            ${item.originalPrice}
                          </p>
                          <p className="text-lg text-text_primary font-bold">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      ) : (
                        <p className="text-lg text-text_primary font-bold">
                          ${item.price}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-8">
        <Footer />
      </div>
    </div>
  );
};

export default Mcontent;
