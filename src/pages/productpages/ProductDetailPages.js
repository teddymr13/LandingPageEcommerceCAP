import React from 'react'
import Header from '../../components/header/header'
import ProductDetail from '../../components/product/productDetail/productDetail'
import LatestProductCart from '../../components/product/latestProductCartPage/LatestProductCart'
import Footer from '../../components/footer/footer'
function ProductDetailPages() {
  return (
    <>
    <Header/>
    <ProductDetail/>
    <LatestProductCart/>
    <Footer/>
    </>
  )
}

export default ProductDetailPages