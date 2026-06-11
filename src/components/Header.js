import { useState } from "react";
import { LOGO_URL } from "../utilis/contants";

export const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  return (
    <header className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <h2>Food Villa</h2>
      </div>

      <ul className="navItems">
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Cart</li>
        <li>
          <button
            className="btnText"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
