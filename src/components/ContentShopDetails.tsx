import { Footer } from "./Footer"

const ContentShopDetails = () => {
    return <>
        <main className="p-8 md:h-screen md:overflow-y-auto bg-black text-white">
         <div>
                <div>
                    <p>Gift Cards</p>
                    <h1>Gift Card Light</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.</p>
                </div>

                <div>
                    <p>$ 15.00 USD</p>
                    <input type="text" placeholder="Quantity" name="quantity" id="quantity" className="w-1/2" />
                    <input type="text" placeholder="color" name="color" id="color" className="w-1/2" />
                    <button type="submit" className="bg-[#face8d] w-full rounded-button">Buy Now</button>
                </div>

                <div>
                    <p>Details</p>
                    <p>Congue eu consequat ac felis donec et. Feugiat vivamus at augue eget arcu dictum. Scelerisque felis imperdiet proin fermentum leo vel orci. Auctor urna nunc id cursus metus aliquam eleifend mi.</p>

                    <p>Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eget arcu dictum varius duis at consectetur lorem. Magna eget est lorem ipsum.</p>
                </div>
         </div>
         <Footer />
        </main>
    </>
}

export default ContentShopDetails