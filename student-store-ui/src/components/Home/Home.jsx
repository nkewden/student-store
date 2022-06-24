import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
// import SearchBar from "../SearchBar/SearchBar"
import About from "../About/About"
import { useState, useEffect } from "react";

export default function Home(props) {
  const {products} = props;
  const {handleAddItemToCart} = props;
  const {handleRemoveItemToCart} = props;
  const [searchInput, setSearchInput] = useState("");

  function Click (e) {
    props.handleCategories(e) 
    props.setEvent(e)
}

function handleOnChange(e) {
  setSearchInput(e.target.value);
  getFilteredItems(searchInput, products);
  if (e.target.value==''){
      setSearchedActive(false);
  }else{
      setSearchedActive(true);
  }
  
}
  
  return (
    <div className="home">
      <Hero />
      <div className="categories">
      <div className="search-input">
            <input type="text" placeholder="Search products" onChange={e => handleOnChange(e)} value={searchInput} className="textbox" />
      </div>

      <div className="buttons"> 
      <li className="active-btn">
            <button className="btn" id="all" value="all categories" onClick={e => Click(e)}>All Categories</button>
            <button className="btn" id="clothing"value="clothing" onClick={e => Click (e)}>Clothing</button>
            <button className="btn" id="food"value ="food" onClick={e => Click (e)}>Food</button>
            <button className="btn" id="acc" value="accessories" onClick={e => Click (e)}>Accessories</button>
            <button className="btn" id="tech" value="tech" onClick={e => Click(e)}>Tech</button>
        </li>
      </div>
      </div>
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} handleCategories={props.handleCategories} categoryArr={props.categoryArr} setEvent={props.setEvent}/>

      <About />
      <Contact />
      <Footer />

    </div>
  )
}