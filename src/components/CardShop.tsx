interface CardShopProps {
    price: string;
    title: string;
    description: string;
    image: string;
}

const CardShop : React.FC<CardShopProps> = ({price, title, description, image}) => {
    return <>
            <div>
                <div className=" p-5 grid grid-cols-2 ">
                    <div className="col-span-1   ">
                        <img src={image} alt="Gift Card" className="w-full h-auto  rounded-image object-cover mb-2" />
                    </div>
                    <div className="text-white col-span-1 py-6 px-4 text-start ">
                        <div className=" flex items-center space-x-2">
                            <h3 className="font-Chillax font-normal text-base mb-2 text-text_primary">{price}</h3>
                        </div>
                        <h4 className="font-Chillax font-medium text-2xl text-text_default mb-5">{title}</h4>
                        <p className="font-Chillax font-normal text-base text-text_muted">{description}</p>
                    </div>
                </div>
            </div>

    </>

}

export default CardShop
