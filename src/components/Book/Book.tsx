import Sidebar from "../../components/Sidebar";
import image from "../../assets/images/BookImage.png";
import BookContent from "../../components/Book/BookContent";

const Book = () => {
  return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-2 ">
      <Sidebar title="Book a table" subtitle="Reservation" background={image} />
      <BookContent />
    </div>
  );
};

export default Book;
