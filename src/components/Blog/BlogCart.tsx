import { Link } from "react-router-dom";

interface CardProps {
  id: string;
  Date: string;
  title: string;
  description: string;
  image: string;
}

const BlogCart: React.FC<CardProps> = ({
  id,
  Date,
  title,
  description,
  image,
}) => {
  // const slug = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <>
      <Link to={`/blog/${id}`}>
        <div className=" p-4 grid grid-cols-2 ">
          <div className="col-span-1  w-full h-full  rounded-image object-cover mb-2 overflow-hidden">
            <img src={image} alt="Gift Card" />
          </div>
          <div className="text-white flex flex-col justify-center px-4 ">
            <div className=" flex items-center space-x-2">
              <h3 className="font-chillax font-normal text-sm text-text_primary">
                {Date}
              </h3>
            </div>
            <h4 className="font-chillax font-medium text-2xl text-text_default mb-2">
              {title}
            </h4>
            <p className="font-chillax font-normal text-base text-text_muted">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCart;
