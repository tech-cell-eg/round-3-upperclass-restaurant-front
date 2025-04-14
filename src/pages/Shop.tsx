import Sidebar from "../components/Sidebar";
import image from "../assets/images/shopmain.png";
import ContentShop from "../components/ContentShop";

const Shop = () => {
  return (
    <>
      <div className="grid grid-cols-1 h-screen md:grid-cols-2">
        <Sidebar title="shop" subtitle="Give a gift" background={image} />
        <ContentShop />
      </div>
    </>
  );
};

export default Shop;
