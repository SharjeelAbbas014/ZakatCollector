import { Link } from "@reach/router";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <div id="homeNav">
        <Link to="/">
          <h2>Zakat Collector</h2>
        </Link>
      </div>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/createaccount">Create An Account</Link>
      </div>
    </div>
  );
};

export default NavBar;
