import { useEffect, useState , useContext} from "react";
import { LOGO_URL } from "../utilis/contants";
import { Link } from "react-router-dom";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const data = useContext(UserContext)
  

  console.log(data, "data")


  // subscribing to store  using selector

  const cart = useSelector((store)=> store.cart.items)

  // if no dependency array ==> useEfffect called on every render
  //if dependency array is empty ==> [] ====> useEffect is called on intial render(just once)

  // if dependency array is something  ===> if something updated then useEffect called 

  useEffect(() => {
    console.log("useEffect called ")
  })

  return (
    <header className="header">
      {/* <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <h2>Food Villa</h2>
      </div> */}

      <ul className="navItems">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/cart" className="font-bold" >
             Cart({cart.length})
          </Link>
        </li>
         <li>
          <Link to="/grocery" >
            Grocery
          </Link>
        </li>
        <li>
          {data.loggedInUser}
        </li>
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
