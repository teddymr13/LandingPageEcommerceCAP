import React from 'react';
import Slider from '../slider/Slider';

function Hero() {
  return (
    <header className="header" id="header">
    <div className="navigation">
      <div className="nav-center container d-flex">
      <a href="/" className="logo"><h1>TFurniture</h1></a>

        <ul className="nav-list d-flex">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="product.html" className="nav-link">Product</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
          <li className="icons d-flex">
          <a href="{#}" className="icon">
            <i className="bx bx-user"></i>
          </a>
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
          <a href="{#}" className="icon">
            <i className="bx bx-user"></i>
          </a>
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
        </div>

        <div className="hamburger">
          <i className="bx bx-menu-alt-left"></i>
        </div>
      </div>
    </div>
    <Slider/>
  </header>
  )
}

export default Hero