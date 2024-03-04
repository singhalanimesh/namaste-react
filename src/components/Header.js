import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const click = () => {
    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  // <li><Link to = "/cart">Cart</Link></li>

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="contact">Contact Us</Link></li>
          <li>Cart</li>
          <Link to= "/login"><button className="login" onClick={() => click()}>
            {btnName}
          </button></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
