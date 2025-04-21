import Sidebar from "../components/Sidebar"
import image from "../assets/images/shopmain.png";
import ContentShopDetails from "../components/ContentShopDetails";
import { useParams } from "react-router-dom";
import useFetchShopDetails from "../hooks/useFetchShopDetails";


const ShopDetails = () => {
  const { id } = useParams<{ id: string }>()
  console.log(id);
  const { shopDetails, loading, error: errorShopdetails } = useFetchShopDetails(Number(id))

  if (errorShopdetails) {
      return <p className="flex items-center justify-center bg-black text-text_default">{errorShopdetails}</p>;
  }
  if (loading) {
      return <p className="flex items-center justify-center bg-black text-text_default">Loading...</p>;
  }

  return <>
      <div className="grid grid-cols-1 h-screen md:grid-cols-2">
          <Sidebar title="Gift " subtitle={shopDetails.title} background={image} />
          <ContentShopDetails />
      </div>
  </>
}

export default ShopDetails