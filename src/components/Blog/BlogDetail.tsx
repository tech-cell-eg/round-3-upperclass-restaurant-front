import { useParams } from "react-router-dom";
import { Footer } from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";

interface Blog {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
}

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://round-3-upper-restaurant.digital-vision-solutions.com/api/posts/${id}`
      )
      .then((res) => {
        setBlog(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-white p-8">Loading...</div>;
  } else if (!blog) {
    return <div className="text-white p-8">Blog not found.</div>;
  }

  return (
    <main className="p-8 md:h-screen md:overflow-y-auto bg-black text-white">
      <section>
        <p className="text-sm text-text_primary mb-2">{blog.date}</p>
        <h2 className="text-2xl font-semibold mb-8">{blog.title}</h2>
        <p className="text-text_muted mb-8">{blog.description}</p>
      </section>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto mb-8 rounded-lg"
      />

      <h1 className="text-3xl font-semibold text-text_default mb-8">
        {blog.title}
      </h1>

      <section>
        <p className="text-text_muted mb-8">{blog.description}</p>

        <p className="text-text_muted mt-8">
          Velt ut tortor pretium viverra. Vivamus arcu felis bibendum ut. Quis
          enim lobortis scelerisque fermentum dui faucibus in ornare. Fusce ut
          placerat orci nulla pellentesque dignissim enim.
        </p>

        <p className="text-text_muted mt-8">
          Congue eu consequat ac felis donec et. Feugiat vivamus at augue eget
          arcu dictum. Scelerisque felis imperdiet proin fermentum leo vel.
          Auctor urna nunc id cursus metus aliquam eleifend mi. Facilisis mauris
          sit amet massa vitae tortor condimentum lacinia. Elit eget gravida cum
          sociis at consectetur lorem. Magna eget est lorem ipsum.
        </p>
        <Footer />
      </section>
    </main>
  );
};

export default BlogDetail;
