import { useState } from "react";
import DropDowenFeild from "./DropDowenFeild"
import { Footer } from "./Footer"
import InputFeild from "./InputFeild"
import ButtonFeild from "./ButtonFeild";

const ContentShopDetails = () => {
    const [quantity, setQuantity] = useState(0);
    const [option, setOption] = useState("");
    const options = ["red", "blue", "green"];
    return <>
        <main className="p-8 md:h-screen md:overflow-y-auto bg-black text-white">
        <div className="md:p-8 flex flex-col gap-10 font-Chillax">
                <div className="flex flex-col gap-3" >
                    <p className="text-text_primary text-lg">Gift Cards</p> 
                    <h1 className="font-medium text-5xl tracking-wide ">Gift Card Light</h1>
                    <p className="text-text_muted text-lg/10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.</p>
                </div>

                <div className="flex flex-col gap-3" >
                    <p className="text-text_default text-2xl tracking-wider font-normal">$ 30.00 USD</p>

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
                    <p className="text-text_muted text-lg/8 mb-4">Congue eu consequat ac felis donec et. Feugiat vivamus at augue eget arcu dictum. Scelerisque felis imperdiet proin fermentum leo vel orci. Auctor urna nunc id cursus metus aliquam eleifend mi.</p>
                    <p className="text-text_muted text-lg/7 mb-4">Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eget arcu dictum varius duis at consectetur lorem. Magna eget est lorem ipsum.</p>
                </div>
        </div>
        <Footer />
        </main>
    </>
}

export default ContentShopDetails