import Sidebar from "../components/Sidebar"
import image from "../assets/images/shopmain.png";
import ContentShopDetails from "../components/ContentShopDetails";
import { useParams } from "react-router-dom";
import useFetchShopDetails from "../hooks/useFetchShopDetails";


const ShopDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { shopDetails} = useFetchShopDetails(Number(id))
  return <>
      <div className="grid grid-cols-1 h-screen md:grid-cols-2">
          <Sidebar title="Gift " subtitle={shopDetails.title} background={image} />
          <ContentShopDetails />
      </div>
  </>
}

export default ShopDetails