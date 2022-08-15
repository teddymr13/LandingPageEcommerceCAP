import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import ProductPages from './pages/productpages/ProductPages';
import Login from './pages/users/login';
import Register from './components/activity/Register';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<ProductPages />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
