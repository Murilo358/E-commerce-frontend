import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import React from "react";
import Product from "./pages/product/Product";
import Footer from "./components/footer/Footer";
import Seller from "./pages/seller/Seller";

function App() {
  return (
    <>
      <Header />
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/seller/:id" element={<Seller />} />
            <Route path="*" element={"Not found"} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </React.StrictMode>
    </>
  );
}

export default App;
