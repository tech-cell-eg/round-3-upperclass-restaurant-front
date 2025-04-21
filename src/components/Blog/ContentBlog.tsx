import { Footer } from "../Footer";
import BlogCart from "./BlogCart";
import { useState, useEffect } from "react";
import axios from "axios";

interface PostType {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}
const ContentBlog = () => {
  const [cards, setCards] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://round-3-upper-restaurant.digital-vision-solutions.com/api/posts"
        );
        setCards(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-white p-4">Loading...</div>;
  } else if (!cards.length) {
    return <div className="text-white p-4">No posts found.</div>;
  }

  return (
    <>
      <main className="md:p-8 md:h-screen md:overflow-y-auto bg-black text-white">
        {cards.map((card) => (
          <BlogCart
            key={card.id}
            id={card.id.toString()}
            title={card.title}
            Date={card.date}
            description={card.description}
            image={card.image}
          />
        ))}

        <Footer />
      </main>
    </>
  );
};
export default ContentBlog;
