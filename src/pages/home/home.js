import React from 'react'
import Header from '../../components/header/header'
import Slider from '../../components/slider/Slider'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'
import Promotion from '../../components/promo/Promotion'
import LatesProduct from '../../components/product/LatestProduct'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/footer'

function Home() {
  return (
    <>
    <Header/>
    <Slider/>
    <Category/>
    <Product/>
    <Promotion/>
    <LatesProduct/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home