import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const click = () => {
    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="fixed w-full flex justify-between bg-[#f8933a] shadow-lg mb-2 h-32 z-20">
      <div className="logo-container ">
        <Link to="/">
          <img className="w-24 m-4" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="px-4 text-lg">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 text-lg hover:text-slate-200">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg hover:text-slate-200">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-4 text-lg hover:text-slate-200">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 text-lg hover:text-slate-200">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-lg hover:text-slate-200 hover:cursor-pointer">
            <Link to="/cart">Cart ({cartItems.length} Items)</Link>
          </li>
          <Link to="/login">
            <button
              className="login px-4 rounded-lg text-lg hover:text-slate-200"
              onClick={() => click()}
            >
              {btnName}
            </button>
          </Link>
          <li className="font-bold px-4 rounded-lg text-lg">
            User : {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
