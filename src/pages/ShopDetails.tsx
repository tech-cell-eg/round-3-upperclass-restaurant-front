import Sidebar from "../components/Sidebar"
import image from "../assets/images/shopmain.png";
import ContentShopDetails from "../components/ContentShopDetails";


const ShopDetails = () => {
  return <>
      <div className="grid grid-cols-1 h-screen md:grid-cols-2">
          <Sidebar title="Gift " subtitle="Gift Card Light" background={image} />
          <ContentShopDetails />
      </div>
  </>
}

export default ShopDetails