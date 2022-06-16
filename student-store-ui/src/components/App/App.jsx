import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

let productObject = {
  itemId: 0,
  quantity: 0,
};

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);

  const handleOnToggle = () => {};
  const handleAddItemToCart = () => {};
  const handleRemoveItemFromCart = () => {};
  const handleOnCheckoutFormChange = () => {};
  const handleOnSubmitCheckoutForm = () => {};

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
