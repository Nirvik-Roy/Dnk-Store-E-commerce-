import React from "react"
import Home from "./Components/Home/Home"
import SingleProduct from "./Components/SingleProduct/SingleProduct"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Cart from "./Components/Cart/Cart"
import Everything from "./Components/Everything/Everything"
function App() {
  

  return (
    <>
     <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/singleproduct/:id/" element={<SingleProduct/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/everything" element={<Everything/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
