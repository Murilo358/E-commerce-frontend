import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import React from "react";
import Product from "./pages/Product/Product";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={"Not found"} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </React.StrictMode>
    </>
  );
}

export default App;
