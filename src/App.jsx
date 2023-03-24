import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
