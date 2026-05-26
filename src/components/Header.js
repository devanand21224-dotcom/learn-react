import { LOGO_URL } from "../utilis/contants";

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
        <h2>Food Villa</h2>
      </div>

      <ul className="navItems">
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </header>
  );
};

export default Header;