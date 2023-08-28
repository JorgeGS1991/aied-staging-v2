import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-bar">
      <Link to="/home">Home</Link>
    </div>
  );
}

export default Navbar;
