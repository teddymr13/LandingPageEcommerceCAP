import React from 'react'
import { Link } from 'react-router-dom'
import { auth, logout} from '../../firebase/configFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
  const navslide = () => {

     const navToggle = document.getElementsByClassName("toggle");
     for (let i = 0; i < navToggle.length; i++) {
       navToggle.item(i).classList.toggle("hidden");
     }
  }
  const [user] = useAuthState(auth);
  
  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-peach">      
    <Link to="/" className="logo text-4xl font-semibold md:ml-6 ml-2"><h1>TFurniture</h1></Link>
    <div className="flex md:hidden">
      <button id="hamburger" onClick={() => navslide()}>
         <i className="toggle block bx bx-menu-alt-left text-4xl"></i>
         <i className="toggle hidden bx bx-x text-4xl"></i>
      </button>
    </div>      
    <div className="toggle hidden w-full md:w-auto md:ml-52 md:flex text-left text-bold mt-5 md:mt-0">        
      <Link to="/" className="block md:inline-block text-black hover:text-red-900 px-3 py-3">Home</Link>
      <Link to="/product" className="block md:inline-block text-black hover:text-red-900 px-3 py-3">Product</Link>
      <Link to="{#}" className="block md:inline-block text-black hover:text-red-900 px-3 py-3">Contact</Link>
    </div>

    <div className="toggle hidden w-auto md:w-auto md:ml-52 md:flex text-left text-bold mt-5 md:mt-0">
        {user ? (
        <Link to="/cart" className="toggle hidden md:flex w-full md:w-auto px-3 py-2 text-left">
          <i className="bx bx-cart text-3xl md:absolute md:right-60 md:-mt-1 ml-0"> Cart</i>
        </Link>
        ):(
          ""
        )}

        {user ? (
        <div className="toggle hidden md:flex w-full md:w-auto px-3 py-2 text-left" onClick={logout}>
          <i className="bx bx-user text-3xl md:-mb-1 md:mr-10 cursor-pointer"> SignOut</i>
        </div>
        ):(
          <Link to="/signin" className="toggle hidden md:flex w-full md:w-auto px-3 py-2 text-left">
          <i className="bx bx-user text-3xl md:-mb-1 md:mr-10 cursor-pointer"> SignIn</i>
        </Link>
        )}
    </div>
  </nav> 
  )
}

export default Header