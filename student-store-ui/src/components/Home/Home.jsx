import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Footer from "../Footer/Footer"
import Contact from "../Contact/Contact"
import SearchBar from "../SearchBar/SearchBar"

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <SearchBar />
      <ProductGrid products={props.products} handleAddItemToCart={props.handleAddItemToCart} 
      handleRemoveItemFromCart={props.handleRemoveItemFromCart} />


      <About />
      <Contact />
      <Footer />



    </div>
  )
}
