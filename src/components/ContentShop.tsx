// import CardShop from './CardShop';
// import image from "../assets/images/shopcard1.png";
import useFetchAllShop from "../hooks/useFetchAllShop";
import CardShop from "./CardShop";
import { Footer } from "./Footer";


const ContentShop = () => {
  const {shop, loading, error:errorShop} = useFetchAllShop()
  if (errorShop) {
    return <p className="flex items-center justify-center bg-black text-text_default">{errorShop}</p>;
  }
  if (loading) {
    return <p className="flex items-center justify-center bg-black text-text_default">Loading...</p>;
  }

  return (
    <main className="md:p-8 md:h-screen md:overflow-y-auto bg-black text-white">
      {shop.map((card, index) => (
        <CardShop
          id={card.id}
          key={index}
          title={card.title}
          price={`$ ${card.price} USD`}
          description={card.description}
          image={card.image}
        />
      ))}
      <Footer />
    </main>
  );
};

export default ContentShop;
