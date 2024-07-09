import React from "react"
import Home from "./Components/Home/Home"
import SingleProduct from "./Components/SingleProduct/SingleProduct"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
function App() {
  

  return (
    <>
     <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/singleproduct/:id/" element={<SingleProduct/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
