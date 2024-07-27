import React, { useEffect } from 'react'
import './Home.scss'
import Navbar from '../Navbar/Navbar.jsx'
import Logos from '../Logos/Logos.jsx'
import Featured from '../FeaturedProducts/Featured.jsx'
import SingleProduct from '../SingleProduct/SingleProduct.jsx'
import Footer from '../Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:'instant'})
  },[])
  const navigate=useNavigate()
  return (
    <>
    <section className='home_section'>
     <Navbar/>
     <div className='home_main d-flex justify-content-center'>
        <div className='home_content_div'>
            <p className='heading_1'>Raining Offers For</p>
            <p className='heading_2'>Hot Summer!</p>
            <p className='heading_3'>25% Off On All Products</p>
            <div className='home_buttons_div d-flex'>
                <div onClick={(()=>navigate('/everything'))} className='btn btn_left btn-light'>SHOP NOW</div>
                <div onClick={(()=>navigate('/about'))} className='btn btn_right btn-transparent'>FIND MORE</div>
            </div>
        </div>
     </div>
    </section>
    <Logos/>
    <Featured/>
    <Footer/>
    </>
  )
}

export default Home
