import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import { useState, useEffect } from "react";
import axios from "axios";

const productObject = {};

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setcheckoutForm] = React.useState(false);

  const handleOnToggle = () => {};
  const handleAddItemToCart = (item) => {};
  const handleRemoveItemFromCart = (item) => {};
  const handleGetItemQuantity = (item) => {}
  const handleOnCheckoutFormChange = () => {};
  const handleOnSubmitCheckoutForm = () => {};

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);
      try {
        const startingProduct = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsFetching(false)
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Sidebar />
                </>
              }
            />
            <Route
              path="/products/:productsId"
              element={
                <>
                  <Navbar />
                  <ProductDetail />
                  <Sidebar />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <NotFound />
                  <Sidebar />
                </>
              }
            />
          </Routes>
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}
