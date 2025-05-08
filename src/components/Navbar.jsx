import './navbar.css';
import { MdAddShoppingCart } from "react-icons/md";
import { FaUser ,FaHeart} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link , NavLink} from 'react-router-dom';
import { CartContext } from '../contexts/cartProvider';
import { useContext ,useState } from 'react';

function Navbar() {
  const {cart} = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);
  {console.log(cart.length)}
  return (
    <nav className="navbar ">
      <div className="navbar-brand">
        <h1>Electronic Store</h1>
      </div>
      <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </div>
      <div className="navbar-links">
        <ul className={showMenu ? 'nav-links show' : 'nav-links'}>
          <li ><Link  to="/">Home</Link></li>
          <li><Link to="/About">Contact</Link></li>
          <li className="mr-5 cursor-pointer relative flex"><Link to ="/WishList.jsx">
          <FaHeart title='your wishlist' className='text-2xl' />
          <span className="absolute right-[-14px] top-[-9px] rounded-full bg-red-600 text-white px-[5px] mt-1 text-xs">0</span>
          </Link>
          </li>
          <li className="mr-5 cursor-pointer relative flex">
          <Link to="/cart" >
          <FaCartShopping title='your cart' className='text-2xl' />
             <span className="absolute right-[-14px] top-[-9px] rounded-full bg-red-600 text-white px-[5px] mt-1 text-xs">{cart.length}</span>
           </Link>
          </li>
          <li><Link to="/Login"><FaUser /></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
