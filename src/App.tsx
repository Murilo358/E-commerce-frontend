import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import React from "react";

function App() {
  return (
    <>
    <Header/>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="seila" element={<Home />} />
            <Route path="*" element={'Not found'} />
          </Routes> 
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
