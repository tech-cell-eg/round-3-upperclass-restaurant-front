import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Sidebar from "./components/Sidebar";
import image from "../src/assets/images/shopmain.png";
import Shop from "./pages/Shop";
import HomePage from "./pages/Home";
import Menu from "./components/Menu/Menu";
import Layout from './Layout';
import Book from './components/Book/Book';
import Contact from "./pages/Contact";
import SliderClasses from "./components/SliderClasses";
import ShopDetails from "./pages/ShopDetails";
import ClassDetail from "./pages/ClassDetail";

import RestaurantSlider from "./components/RestaurantSlider";

function App() {
  return (
    <BrowserRouter basename="/round-3-upperclass-restaurant-front/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shopdetails" element={<ShopDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="menu" element={<Menu />} />
          <Route path="book" element={<Book />} />
          <Route path="contact" element={<Contact />} />
          <Route path="classes" element={<SliderClasses />} />
          <Route path="classesdetail/:id" element={<ClassDetail />} />

          <Route path="restaurant" element={<RestaurantSlider />} />
          <Route
            path="blog/:id"
            element={
              <div className="grid grid-cols-1 h-screen md:grid-cols-2">
                <Sidebar
                  title="shop"
                  subtitle="Give a gift"
                  background={image}
                />
                <BlogDetail />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

