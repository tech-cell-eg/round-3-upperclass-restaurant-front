import "../../index.css";
import menuImage from "../../assets/images/MenuImage.png";
import Sidebar from "../Sidebar"
import Mcontent from "./Mcontent";


const Menu: React.FC = () => {
  return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-2">
      <Sidebar background={menuImage} title="menu" subtitle="check out"   />

      <Mcontent/>

    </div>
  );
};

export default Menu;
