import React from 'react'
import Header from '../../components/header/header'
import Cart from '../../components/cart/Cart'
import LatestProductCart from '../../components/product/latestProductCartPage/LatestProductCart'
import Footer from '../../components/footer/footer'
function cartpages() {
  return (
   <>
   <Header/>
   <Cart/>
   <LatestProductCart/>
   <Footer/>
   </>
  )
}

export default cartpages