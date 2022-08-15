import React from 'react'
import Header from '../../components/header/header'
import AllProduct from '../../components/product/dataAllProduct/AllProduct'
import Pagination from '../../components/pagination/pagination'
import Footer from '../../components/footer/footer'
function ProductPages() {
  return (
    <>
    <Header/>
    <AllProduct/>
    <Pagination/>
    <Footer/>
    </>

  )
}

export default ProductPages