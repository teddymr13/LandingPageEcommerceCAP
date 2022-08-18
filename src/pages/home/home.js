import React from 'react'
import Hero from '../../components/hero/Hero'
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
    <Hero/>
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