import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Sidebar from "./components/Sidebar";
import image from "../src/assets/images/shopmain.png";
import Shop from "./pages/Shop";

import HomePage from "./pages/Home";

import Menu from "./components/Menu/Menu";
import Book from "./components/Book/Book";
import SliderClasses from "./components/SliderClasses";
import Layout from './Layout';


function App() {
  return (
    <BrowserRouter basename="/round-3-upperclass-restaurant-front/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="menu" element={<Menu />} />
          <Route path="book" element={<Book />} />
          <Route path="/classes" element={<SliderClasses />} />


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
