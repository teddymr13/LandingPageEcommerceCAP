import React from 'react';
// import Slider from '../slider/Slider';
import { Link } from 'react-router-dom'
import { auth, logout} from '../../firebase/configFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function Hero() {
  
  const [user] = useAuthState(auth);

  return (
    <header className="header" id="header">
    <div className="navigation">
      <div className="nav-center container d-flex">
      <a href="/" className="logo"><h1>TFurniture</h1></a>

        <ul className="nav-list d-flex" >
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link">Product</Link>
          </li>
          <li className="nav-item">
            <a href="{#}" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="{#}" className="nav-link">Contact</a>
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
          <Link to="/cart" className="icon">
            <i className="bx bx-cart"></i>
            <span className="d-flex">0</span>
          </Link>
        </li>
        </ul>

        <div className="icons d-flex">
          <div className="icon">
            <i className="bx bx-search"></i>
          </div>
          {user ? (
            <div className="icon" onClick={logout}>
                <i className="bx bx-user"></i>
                <h6 className="txt-user">Sign out</h6>
            </div>
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
  </header>
  )
}

export default Hero