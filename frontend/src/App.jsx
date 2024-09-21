import React from "react";
import "./App.css";
import Heaader from "./components/layouts/Heaader";
import Footer from "./components/layouts/Footer";
import Home from "./components/layouts/Home";
import Menu from "./components/layouts/Menu"
import Cart from "./components/cart/Cart"

export default function App() {
  return (
    <div className="App">
      <Heaader />
      <div className="container container-fluid">
        <Home /> 
        <Menu />
        <Cart />
      </div>
      <Footer />
    </div>
  );
}
