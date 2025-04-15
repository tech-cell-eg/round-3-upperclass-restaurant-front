import Sidebar from "../components/Sidebar";
import ContactForm from './../components/Contact/ContactForm';
import image from "../assets/images/contactImg.png";

const Contact: React.FC = () =>  {
return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-2 ">
    <Sidebar title="contact" subtitle="Get in Touch" background={image} />

    <ContactForm />
    </div>
);
};

export default Contact;
