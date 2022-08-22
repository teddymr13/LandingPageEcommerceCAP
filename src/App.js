import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import ProductPages from './pages/productpages/ProductPages';
import ProductDetailPages from './pages/productpages/ProductDetailPages';
import CartPages from './pages/cart/cartpages'
import Login from './pages/users/login';
import Register from './pages/users/register'


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<ProductPages />} />
            <Route path="/product/:productId" element={<ProductDetailPages />} />
            <Route path="cart" element={<CartPages />} />
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
