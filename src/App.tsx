import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Sidebar from "./components/Sidebar";
import image from "../src/assets/images/shopmain.png";
import { BrowserRouter } from "react-router-dom";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      {/* <Shop /> */}
{/* 
      <Routes>
        <Route path="/" element={<Blog />} />
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
      </Routes> */}





      
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
        </>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
