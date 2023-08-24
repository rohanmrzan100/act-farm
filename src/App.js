import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Homepage/index";
import Product from "./components/ProductPage/index";
import Footer from "./components/Homepage/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
