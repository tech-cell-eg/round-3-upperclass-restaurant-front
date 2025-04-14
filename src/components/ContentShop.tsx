// import CardShop from './CardShop';
import image from '../assets/images/shopcard1.png'
import CardShop from "./CardShop";

const ContentShop = () => {
    const cardsdata = [
        {
            price: "20$",
            title: "Gift Card",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
            image: image,
        },
        {
            price: "20$",
            title: "Gift Card",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
            image: image,
        },
        {
            price: "20$",
            title: "Gift Card",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
            image: image,
        },
        {
            price: "20$",
            title: "Gift Card",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
            image: image,
        },
        {
            price: "20$",
            title: "Gift Card",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?",
            image: image,
        },
    ]
    return (
        <main className="p-8 h-screen overflow-y-auto bg-black text-white" >
            {cardsdata.map((card, index) => (
                <CardShop key={index} title={card.title} price={card.price} description={card.description} image={card.image} />
            ))}
        </main>
    );
}; 

export default ContentShop;