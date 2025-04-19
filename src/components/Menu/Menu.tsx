import Sidebar from "../../components/Sidebar";
import image from "../../assets/images/MenuImage.png";
import Mcontent from "../Menu/Mcontent";

const Shop = () => {
  return (
    <>
      <div className="grid grid-cols-1 h-screen md:grid-cols-2">
        <Sidebar title="Check Out" subtitle="Our Menu" background={image} />
        <Mcontent />
      </div>
    </>
  );
};

export default Shop;
