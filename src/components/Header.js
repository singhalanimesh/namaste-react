import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const click = () => {
    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  // <li><Link to = "/cart">Cart</Link></li>

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-[#f8933a] shadow-lg mb-2 h-32">
      <div className="logo-container ">
        <img className="w-24 m-4" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className = "px-4 text-lg">Online Status: {onlineStatus? "🟢":"🔴"}</li>
          <li className = "px-4 text-lg hover:text-white"><Link to="/">Home</Link></li>
          <li className = "px-4 text-lg hover:text-white"><Link to="/instamart">Instamart</Link></li>
          <li className = "px-4 text-lg hover:text-white"><Link to="/about">About</Link></li>
          <li className = "px-4 text-lg hover:text-white"><Link to="/contact">Contact Us</Link></li>
          <li className = "px-4 text-lg hover:text-white hover:cursor-pointer">Cart</li>
          <Link to= "/login"><button className="login px-4 rounded-lg text-lg hover:text-white" onClick={() => click()}>
            {btnName}
          </button></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
