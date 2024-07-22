import React from "react"
import Home from "./Components/Home/Home"
import SingleProduct from "./Components/SingleProduct/SingleProduct"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Cart from "./Components/Cart/Cart"
import Everything from "./Components/Everything/Everything"
import Contact from "./Components/Contact/Contact"
import About from "./Components/About/About"
import Women from "./Components/Women/Women"
import Men from "./Components/Men/Men"
import Accessories from "./Components/Accessories/Accessories"
function App() {
  

  return (
    <>
     <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/singleproduct/:id/" element={<SingleProduct/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/everything" element={<Everything/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/women" element={<Women/>}></Route>
            <Route exact path="/men" element={<Men/>}></Route>
            <Route exact path="/accessories" element={<Accessories/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
