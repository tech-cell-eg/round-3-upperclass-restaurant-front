import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Sidebar from "./components/Sidebar";
import image from "../src/assets/images/shopmain.png";
import Shop from "./pages/Shop";

import HomePage from "./pages/Home";
import SliderClasses from "./components/SliderClasses";

function App() {
  return (
    <>
      <BrowserRouter basename="/round-3-upperclass-restaurant-front/">
        <Routes>
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/Blog" element={<Blog />} />
            <Route
              path="/blog/:id"
              element={
                <>
                  <div className="grid grid-cols-1 h-screen md:grid-cols-2 ">
                    <Sidebar
                      title="shop"
                      subtitle="Give a gift"
                      background={image}
                    />

                    <BlogDetail />
                  </div>
                </>
              }
            />
            <Route path="/classes" element={<SliderClasses />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
