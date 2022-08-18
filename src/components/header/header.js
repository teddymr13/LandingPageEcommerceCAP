import React from 'react'
import { Link } from 'react-router-dom'
import { auth, logout} from '../../firebase/configFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
  const [user] = useAuthState(auth);
  return (
    <div className="navigation">
    <div className="nav-center container d-flex">
      <a href="/" className="logo"><h1>TFurniture</h1></a>

      <ul className="nav-list d-flex">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link">Product</Link>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contact</a>
        </li>
        <li className="icons d-flex">
          <Link to="/signin" className="icon">
            <i className="bx bx-user"></i>
          </Link>
          <div className="icon">
            <i className="bx bx-search"></i>
          </div>
          <div className="icon">
            <i className="bx bx-heart"></i>
            <span className="d-flex">0</span>
          </div>
          <a href="cart.html" className="icon">
            <i className="bx bx-cart"></i>
            <span className="d-flex">0</span>
          </a>
        </li>
      </ul>

      <div className="icons d-flex">
        <div className="icon">
          <i className="bx bx-search"></i>
        </div>
        {user ? (
            <Link to="/signin" className="icon" onClick={logout}>
                <i className="bx bx-user"></i>
                <h6 className="txt-user">Sign out</h6>
            </Link>
          ) : (
            <Link to="/signin" className="icon">
              <i className="bx bx-user"></i>
              <h6 className="txt-user">Sign in</h6>
            </Link>
        )}
        <Link to={user ? '/cart' : '/signin'} className="icon">
          <i className="bx bx-cart"></i>
        </Link>

      </div>

      <div className="hamburger">
        <i className="bx bx-menu-alt-left"></i>
      </div>
    </div>
  </div>
  )
}

export default Header