import  { useEffect ,useState } from "react";
import "./Menu.css";
import  image from"../../assets/images/MenuB(images).png";

const Msidebar = () => {
  const menuData = [
    {
      category: "Starters",
      items: [
        {
          name: "Tomato Toast",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 29,
          image: image,
          tag: "",
        },
        {
          name: "Noodle Soup",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 5,
          originalPrice: 8,
          image: image,
          tag: "",
        },
        {
          name: "Pumpkin Soup",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 5,
          image: image,
          tag: "Starter of the Day",
          highlight: true,
        },
      ],
    },
    {
      category: "Breakfast",
      items: [
        {
          name: "Tomato Toast",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 29,
          image: image,
          tag: "",
        },
        {
          name: "Noodle Soup",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 5,
          originalPrice: 8,
          image: image,
          tag: "",
        },
        {
          name: "Pumpkin Soup",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 5,
          image: image,
          tag: "Starter of the Day",
          highlight: true,
        },
      ],
    },
    {
      category: "Lunch",
      items: [
        {
          name: "Tomato Toast",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 29,
          image: image,
          tag: "",
        },
        {
          name: "Noodle Soup",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 5,
          originalPrice: 8,
          image: image,
          tag: "Starter of the Day",
          highlight: true,
        },
        {
          name: "Pumpkin Soup",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 5,
          image: image,
          tag: "",

        },
      ],    },
    {
      category: "Drinks",
      items: [
        {
          name: "Tomato Toast",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 29,
          image: image,
          tag: "Starter of the Day",
          highlight: true,
        },
        {
          name: "Noodle Soup",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 5,
          originalPrice: 8,
          image: image,
          tag: "",
        },
        {
          name: "Pumpkin Soup",
          description: "Lorem ipsum dolor sit amet, consectetur",
          price: 5,
          image: image,
          tag: "",

        },
      ],    },
  ];

      const sections = ["starters", "breakfast", "lunch", "drinks"];
      const [activeTab, setActiveTab] = useState(sections[0]);



    useEffect(() => {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.6, 
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
    <div>
      {/* Sticky TabMenu */}
      <div className="sticky top-0 bg-black z-10 shadow-md flex justify-center gap-8 p-4">
  {sections.map((section) => (
    <a
      key={section}
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById(section);
        if (el) {
          window.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
          });
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
      <div className="px-11 mt-10">
        {menuData.map((section) => (
          <div
            key={section.category}
            id={section.category.toLowerCase().replace(/\s+/g, "-")}
            className="mb-16 scroll-mt-40"
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
                      ${item.tag ? "border border-text_primary rounded-xl" : "border-none"} 
                      hover:shadow-lg hover:border-text_primary`}
                  >
                  

                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div>
                        <h3 className="text-xl text-white font-semibold">
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
                            ${item.price}
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
    </div>
  );
};

export default Msidebar;
