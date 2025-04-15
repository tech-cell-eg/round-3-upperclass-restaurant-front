// src/components/Blog/BlogDetail.tsx
import { useParams } from "react-router-dom";
import { cardsdata } from "./ContentBlog";
import { Footer } from "../Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = cardsdata.find((item) => item.id === id);

  if (!blog) {
    return <div className="text-white p-8">Blog not found</div>;
  }

  return (
    <main className="p-8 md:h-screen md:overflow-y-auto bg-black text-white">
      <section>
        <h2 className="text-2xl font-semibold mb-8">Lorem ipsum dolor</h2>
        <p className="text-text_muted mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          malesuada nunc vel risus commodo viverra maecenas. Dis parturient
          montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis
          ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque
          pulvinar pellentesque habitant morbi tristique. Turpis massa sed
          elementum tempus egestas sed sed risus.
        </p>
      </section>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto mb-8 rounded-lg"
      />

      {/* <p className="text-sm text-text_primary mb-2">{blog.Date}</p> */}
      <h1 className="text-3xl font-semibold text-text_default mb-8">
        {blog.title}
      </h1>
      {/* <p className="text-base text-text_muted">{blog.description}</p> */}

      <section>
        <p className="text-text_muted mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          malesuada nunc vel risus commodo viverra maecenas. Dis parturient
          montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis
          ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque
          pulvinar pellentesque habitant morbi tristique. Turpis massa sed
          elementum tempus egestas sed sed risus.
        </p>

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
