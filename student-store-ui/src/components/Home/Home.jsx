import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import SearchBar from "../SearchBar/SearchBar"
import About from "../About/About"

export default function Home(props) {
  const {products} = props;
  const {handleAddItemToCart} = props;
  const {handleRemoveItemFromCart} = props;
  
  return (
    <div className="home">
      <Hero />
      <SearchBar products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
      <ProductGrid products={props.products} handleAddItemToCart={props.handleAddItemToCart} 
      handleRemoveItemFromCart={props.handleRemoveItemFromCart} />

      <About />
      <Contact />
      <Footer />

    </div>
  )
}