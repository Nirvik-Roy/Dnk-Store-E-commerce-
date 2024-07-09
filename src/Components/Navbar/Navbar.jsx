import React from 'react'
import './Navbar.scss'
import nav_logo from '../../assets/logo1-free-img-140x47.png'
const Navbar = () => {
  return (
    <>
      <nav className='nav_main'>
        <div className='left_nav_div'>
          <div className='nav_logo_div'>
            <img src={nav_logo} alt='logo' />
          </div>
          <div className='nav_categories_main'>
            <div className='nav_categories_list'>
              <a>EveryThing</a>
              <a>Women</a>
              <a>Accesecories</a>
            </div>
            
          </div>
         
        </div>
        <div className='right_nav_div'>
        <div className='nav_links_main'>
              <a>About</a>
              <a>Contact</a>
              <a>$0.00</a>
              <div className='nav_cart_div'><i class="fa-solid fa-cart-shopping"></i>
              <div className='cart_quantity_div'>0</div>
              </div>
              <div><i class="fa-solid fa-user"></i></div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
