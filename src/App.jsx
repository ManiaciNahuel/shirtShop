/* import logo from './logo.svg';
 */
import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";/* 
import ItemListContainer from "./components/ItemListContainer.jsx"; */
import NavBar from "./components/NavBar.jsx";
import ProductsMain from "./components/ProductsMain.jsx";
import {CartProvider} from './context/cartContext.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsMain />} />
          <Route path="/category/:id"/*  element={<ItemListContainer />} */ />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
