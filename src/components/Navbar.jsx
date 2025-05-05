import './navbar.css';
import { MdAddShoppingCart } from "react-icons/md";
import { FaUser ,FaHeart  } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Electronic Store</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li ><Link  to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to ="#"><FaHeart /></Link></li>
          <li><Link to="#"><MdAddShoppingCart /></Link></li>
          <li><Link to="/Login"><FaUser /></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
