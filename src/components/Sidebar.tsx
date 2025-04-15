// src/components/Sidebar.tsx
import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

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
        <Link
        to="/"
        className="relative z-10 w-full justify-center text-center"
      >
        <p className="font-Chillax mt-10 text-2xl sm:text-3xl font-medium text-text_default">
          nique.
        </p>
      </Link>

      <div className="mainsec text-white flex items-center justify-center">
        <div>
          <p className="font-bitter text-6xl font-normal text-center text-text_primary">
            {title}
          </p>
          <h1 className="font-chillax text-7xl font-medium">{subtitle}</h1>
        </div>
      </div>

      <div className="nav flex space-x-4 text-center justify-center ">
      <NavBar positionClass={false}/>
      </div>
    </aside>
  );
};

export default Sidebar;
