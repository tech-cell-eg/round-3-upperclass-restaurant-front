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
  return (
    <>
      <Link to={`/blog/${id}`}>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-4 gap-2">
            <h3 className="font-chillax font-normal text-sm text-text_primary">
              {Date}
            </h3>
            <h4 className="font-chillax font-medium text-2xl text-text_default leading-8">
              {title}
            </h4>

            <p className="font-chillax font-normal text-base text-text_muted line-clamp-6">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCart;
