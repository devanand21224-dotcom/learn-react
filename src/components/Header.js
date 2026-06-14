import { useEffect, useState } from "react";
import { LOGO_URL } from "../utilis/contants";

export const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  // if no dependency array ==> useEfffect called on every render
  //if dependency array is empty ==> [] ====> useEffect is called on intial render(just once)

  // if dependency array is something  ===> if something updated then useEffect called 

  useEffect(()=>{
    console.log("useEffect called ")
  })

  return (
    <header className="header">
      {/* <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <h2>Food Villa</h2>
      </div> */}

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
