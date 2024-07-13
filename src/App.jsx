import React from "react"
import Home from "./Components/Home/Home"
import SingleProduct from "./Components/SingleProduct/SingleProduct"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Cart from "./Components/Cart/Cart"
function App() {
  

  return (
    <>
     <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/singleproduct/:id/" element={<SingleProduct/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
