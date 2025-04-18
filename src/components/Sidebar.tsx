// src/components/Sidebar.tsx
import React from "react";
import NavBar from "./NavBar";

interface sildebarProps {
  background: string;
  title: string;
  subtitle: string;
}

const Sidebar: React.FC<sildebarProps> = ({ title, subtitle, background }) => {
  console.log(background);
  return (
    <aside
      className="bg-black h-screen p-8 grid grid-rows-[auto_1fr_auto] overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="logo flex items-center justify-center text-white">
        <p className="font-chillax text-xl font-medium">nique.</p>
      </div>

      <div className="mainsec text-white flex items-center justify-center">
        <div>
          <p className="font-bitter text-6xl font-normal text-center text-text_primary">
            {title}
          </p>
          <h1 className="font-chillax text-7xl font-medium">{subtitle}</h1>
        </div>
      </div>

      <div className="nav flex space-x-4 text-center justify-center ">
        <NavBar/>

      </div>
    </aside>
  );
};

export default Sidebar;
