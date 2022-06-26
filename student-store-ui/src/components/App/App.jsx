import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductDetail from "../ProductDetail/ProductDetail"
import Home from "../Home/Home"
import Contact from "../Contact/Contact"
import Searchbar from "../SearchBar/SearchBar"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios'
import ShoppingCart from "../ShoppingCart/ShoppingCart"



export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([{itemId: 0, quantity: 0}]);
  const [checkoutForm, submitCheckoutForm] = React.useState({});
  const [event, setEvent] = useState({})


  const handleOnToggle = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }


  function handleAddItemToCart (productId) {
    let found = false;
    let item = 0;
    shoppingCart.forEach((e) => {
      if (e.itemId === productId) {
        found = true;
        item = e;
      }
    })

    if (found == true) {
      let index = shoppingCart.indexOf(item);
      let arr = [...shoppingCart]
      arr[index].quantity += 1;
      setShoppingCart(arr)
    }else {
      setShoppingCart((oldCart) =>[...oldCart, {itemId:productId, quantity:1}])
    }

  }


  function handleRemoveItemFromCart(productId) {
    let found = false;
    let item = 0;
    shoppingCart.forEach((e) => {
      if (e.itemId === productId) {
        found = true;
        item = e;
      }
    })

    if (found == true) {
      let index = shoppingCart.indexOf(item);
      let arr = [...shoppingCart]
      if(arr[index].quantity === 0){
        arr[index].quantity = 0;
        setShoppingCart(arr);
      }
      else{
        arr[index].quantity -= 1;
        setShoppingCart(arr);
      }

    }
    else{
      setShoppingCart((oldCart) => [...oldCart, {itemId:productId, quantity:0}]);
    }

  }

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({ name, value });
  }

  const handleOnSubmitCheckoutForm = () => {
    axios.post("http://localhost:3001/store", {
      user: { name: checkoutForm.name, email: checkoutForm.value }, shoppingCart
    })
      .then(function (response) {
      })
      .catch(function (error) {
      })
  }


  async function getProducts() {
    await axios.get("http://localhost:3001/store")
      .then((response) => {
        setProducts(response.data.products)
        setIsFetching(true)
      })
      .catch((error) => {
        alert(`ERROR: ${error}`)
        setIsFetching(false)
      })
      .then(() => {
        setIsFetching(false)
      })
  }

  useEffect(() => {
    getProducts(); 
  }, []); 
  
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {
            <Routes>
              <Route path="/" element={(
                <>
                  <Navbar />
                  <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart}/>
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOnToggle={handleOnToggle} checkoutForm={checkoutForm} products={products} shoppingCart={shoppingCart}/>
                </>
              )}
              />
              <Route path="/products/:productsId" element={(
                <>
                  <Navbar />
                  <ProductDetail products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart}/>
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOnToggle={handleOnToggle} checkoutForm={checkoutForm} products={products} shoppingCart={shoppingCart}/>
                </>
              )}
              />
              <Route path="*" element={(
                <>
                  <Navbar />
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOnToggle={handleOnToggle} checkoutForm={checkoutForm} shoppingCart={shoppingCart}/>
                </>
              )}
              />
            </Routes>
          }
        </main>
      </BrowserRouter>
    </div>
  )
}