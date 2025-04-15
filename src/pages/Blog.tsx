import Sidebar from "../components/Sidebar";
import image from "../assets/images/shopmain.png";
import ContentBlog from "../components/Blog/ContentBlog";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-2 ">
      <Sidebar title="shop" subtitle="Give a gift" background={image} />

      <ContentBlog />
    </div>
  );
};

export default Blog;
