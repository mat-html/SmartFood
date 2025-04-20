import { Link } from "react-router-dom";
import "../css/logo.css";

function Logo() {
  return (
    <Link to="/home" className="nav-item" id="logo">
      <span id="logoOrange">Smart</span>
      <span id="logoWhite">Food</span>
    </Link>
  );
}

export default Logo;
