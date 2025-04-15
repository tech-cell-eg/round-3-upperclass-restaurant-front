import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div> 
  );
};

export default Layout;
