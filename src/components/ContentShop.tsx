// import CardShop from './CardShop';
import image from "../assets/images/shopcard1.png";
import CardShop from "./CardShop";
import { Footer } from "./Footer";

const ContentShop = () => {
  const cardsdata = [
    {
      
      price: "$ 50 USD",
      title: "Gift Card",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
      image: image,
    },
    {
      price: "$ 50 USD",
      title: "Gift Card",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
      image: image,
    },
    {
      price: "$ 50 USD",
      title: "Gift Card",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
      image: image,
    },
    {
      price: "$ 50 USD",
      title: "Gift Card",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
      image: image,
    },
    {
      price: "$ 50 USD",
      title: "Gift Card",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
      image: image,
    },
  ];
  return (
    <main className="p-8 md:h-screen md:overflow-y-auto bg-black text-white">
      {cardsdata.map((card, index) => (
        <CardShop
          key={index}
          title={card.title}
          price={card.price}
          description={card.description}
          image={card.image}
        />
      ))}
      <Footer />
    </main>
  );
};

export default ContentShop;
