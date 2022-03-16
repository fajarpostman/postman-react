import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Styles.scss";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      {/* <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <img
              src="../images/fajar_postman_logo.png"
              className="Image-Navigation"
            />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick} >
            {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link to='/' className="nav-links">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className="nav-links">
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/experience' className="nav-links">
                    Experience
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/portfolio' className="nav-links">
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/' className="nav-links">
                    Stay Connect!
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/' className="nav-links">
                    Travel
                </Link>
            </li>
        </ul>
      </div> */}
    </>
  );
}
