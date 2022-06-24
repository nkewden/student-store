import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import axios from "axios"
import { useState, useEffect } from "react"
import { MdEmojiObjects } from "react-icons/md"


export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([{itemId: 0, quantity: 0}]);
  const [checkoutForm, submitCheckoutForm] = React.useState({});
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [event, setEvent] = useState({})


let categoryArr = []

function handleCategories(e) {
    let category = e.target.innerText.toLowerCase();
    
    categoryArr = products.filter(e => {
      return e.category.includes(category);
    })
    if (categoryArr.length == 0) {
        products.map((e) => {
            categoryArr.push(e)
        })
    }
    console.log(e)

}

if (Object.keys(event).length > 0) {
  handleCategories(event)
}

console.log(categoryArr)

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

  function handleRemoveItemToCart(productId) {
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
    axios.post("https://codepath-store-api.herokuapp.com/store", {
      user: { name: checkoutForm.name, email: checkoutForm.value }, shoppingCart
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // fetch products data from API via axios
  async function getProducts() {
    const apiUrl = "http://localhost:3001/store"

    await axios.get(apiUrl)
      .then((response) => {
        console.log(`SUCCESS:!`)
        console.log(response.data.products)
        setProducts(response.data.products)
        setIsFetching(true)
      })
      .catch((error) => {
        alert(`ERROR: ${error}`)
        setIsFetching(false)
      })
      .then(() => {
        console.log("Finished requesting Products!")
        setIsFetching(false)
      })
  }

  useEffect(() => {
    getProducts(); // call getProducts every time we render the App component
  }, []); // [] signals getProducts is called only once on render.
console.log(34,shoppingCart)

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {
            <Routes>
              <Route path="/" element={(<> <Navbar />
                  <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} handleCategories={handleCategories} categoryArr={categoryArr} setEvent={setEvent}/>
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOnToggle={handleOnToggle} />
                </>
              )}   
              />
              <Route path="/products/:productId" element={(
                <>
                  <Navbar />
                  <ProductDetail products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOnToggle={handleOnToggle} />
                </>
              )}   
              />
              <Route path="*" element={(
                <>
                  <Navbar />
                  <NotFound />
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOnToggle={handleOnToggle}/>
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