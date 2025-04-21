import { useState } from "react";
import DropDowenFeild from "./DropDowenFeild"
import { Footer } from "./Footer"
import InputFeild from "./InputFeild"
import ButtonFeild from "./ButtonFeild";
// import useFetchShopDetails from "../hooks/useFetchShopDetails";
import { useParams } from "react-router-dom";
import useFetchShopDetails from "../hooks/useFetchShopDetails";

const ContentShopDetails = () => {
    const [quantity, setQuantity] = useState(0);
    const [option, setOption] = useState("");
    const options = ["red", "blue", "green"];
    const {id} = useParams<{ id: string }>()
    // console.log(id);
    const { shopDetails, loading, error: errorShopdetails } = useFetchShopDetails(Number(id))

    if (errorShopdetails) {
        return <p className="flex items-center justify-center bg-black text-text_default">{errorShopdetails}</p>;
    }
    if (loading) {
        return <p className="flex items-center justify-center bg-black text-text_default">Loading...</p>;
    }

    console.log(shopDetails);
  
    return <>
        <main className="p-8 md:h-screen md:overflow-y-auto bg-black text-white">
        <div className="md:p-8 flex flex-col gap-10 font-Chillax">
                <div className="flex flex-col gap-3" >
                    <p className="text-text_primary text-lg">Gift Cards</p> 
                    <h1 className="font-medium text-5xl tracking-wide ">{shopDetails.title}</h1>
                    <p className="text-text_muted text-lg/10 ">{shopDetails.description}</p>
                </div>

                <div className="flex flex-col gap-3" >
                    <p className="text-text_default text-2xl tracking-wider font-normal">$ {shopDetails.price} USD</p>

                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <InputFeild type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => { setQuantity(parseInt(e.target.value)) }} placeholder="Quantity" className="focus:border-border_white" label="Quantity" error="" />
                            <DropDowenFeild label="color" placeholder="Color" className="focus:border-border_primary" value={option} onChange={(e) => { setOption(e) }} error="" options={options} />
                        </div>
                        <ButtonFeild label="Add to Cart" className="w-full" />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-text_primary text-2xl tracking-wider font-normal mb-7">Details</p>
                    <p className="text-text_muted text-lg/9 mb-4">{shopDetails.details}</p>
                  
                </div>
        </div>
        <Footer />
        </main>
    </>
}

export default ContentShopDetails