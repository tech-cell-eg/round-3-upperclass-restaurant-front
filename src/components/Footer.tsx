import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="pt-12 mt-12  border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        <div className="mb-5 md:mb-0 text-center md:text-left">
          <h2 className="font-chillax font-medium text-2xl text-text_default mb-5">
            nique.
          </h2>
          <p className="font-chillax font-normal text-base text-text_muted">
            By <span className="text-[#face8d] ">Pavel Goia</span>
          </p>
          <p className="font-chillax font-normal text-base text-text_muted">
            Powered by <span className="text-[#face8d]">Webflow</span>
          </p>
        </div>

        <div className="w-full px-4 flex justify-center md:block col-span-1 md:col-span-2">
          <div className="grid grid-cols-2 gap-8 w-full max-w-md text-center md:text-left">
            <div>
              <h5 className="font-chillax font-normal text-base mb-5">Pages</h5>
              <ul className="space-y-5 font-chillax font-normal text-base text-text_muted ">
                <li className="hover:text-[#face8d]">
                  <Link to="/">Menu</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="#">Restaurant</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="#">Classes</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="#">Book a Table</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="#">Contact</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="#">Shop</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-chillax font-normal text-base mb-5">
                Utility Pages
              </h5>
              <ul className="space-y-5 font-chillax font-normal text-base text-text_muted">
                <li className="hover:text-[#face8d]">
                  <Link to="#">Styleguide</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="#">Licensing</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="#">Changelog</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="#">404 Page</Link>
                </li>
                <li className="hover:text-[#face8d]">
                  <Link to="#">Password Protected</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
