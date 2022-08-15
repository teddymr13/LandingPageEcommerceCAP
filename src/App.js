import './App.css';

import Hero from './components/hero/Hero';
import Category from './components/category/Category';
import Product from './components/product/Product';
import Promotion from './components/promo.js/Promotion';
import LatestProduct from './components/product/LatestProduct';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">
      <Hero/>
      <Category/>
      <Product/>
      <Promotion/>
      <LatestProduct/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
