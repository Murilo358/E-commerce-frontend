import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import React from "react";
import Product from "./pages/Product/Product";

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
      </React.StrictMode>
    </>
  );
}

export default App;
