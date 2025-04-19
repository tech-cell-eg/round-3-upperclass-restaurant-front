import { Footer } from "../Footer";
import image1 from "../../assets/images//blog/1.png";
import image2 from "../../assets/images/blog/2.png";
import image3 from "../../assets/images/blog/3.png";
import image4 from "../../assets/images/blog/4.png";
import image5 from "../../assets/images/blog/5.png";
import BlogCart from "./BlogCart";

export const cardsdata = [
  {
    id: "1",
    Date: "September 19, 2022",
    title: "Gatsby Night",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
    image: image1,
  },
  {
    id: "2",
    Date: "September 19, 2022",
    title: "Gift Card Standard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
    image: image2,
  },
  {
    id: "3",
    Date: "September 19, 2022",
    title: "New Restaurant",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
    image: image3,
  },
  {
    id: "4",
    Date: "September 19, 2022",
    title: "Romantic Dinner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
    image: image4,
  },
  {
    id: "5",
    Date: "September 19, 2022",
    title: "Brand New Kitchen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
    image: image5,
  },
];
const ContentBlog = () => {
  return (
    <>
      <main className="md:p-8 md:h-screen md:overflow-y-auto bg-black text-white">
        {cardsdata.map((card, index) => (
          <BlogCart
            key={index}
            id={card.id}
            title={card.title}
            Date={card.Date}
            description={card.description}
            image={card.image}
          />
        ))}

        <Footer />
      </main>
    </>
  );
};

export default ContentBlog;
