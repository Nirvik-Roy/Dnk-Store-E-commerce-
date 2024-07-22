import React, { useState } from 'react'
import './Navbar.scss'
import nav_logo from '../../assets/logo1-free-img-140x47.png'
import { NavLink,Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeElement } from '../../Store/Slices/Slices'
const Navbar = () => {
  const [modal,showmodal]=useState(false)
  let dispatch =useDispatch()

  //getting data from Store//
  const data =useSelector((state)=>{
    return state.cart
  })
  ///////

  //calculating Total Price//

  let sum=0;
  data.map((e)=>sum+=e.total)

  ///
  
  //Removing Product//

  const removeProduct=(id)=>{
    dispatch(removeElement(id))
  }

  //////

  //Modal Function//

  const modalfunction=()=>{
    showmodal(true)
  }
  /////

  const removeModalfunction=()=>{
    showmodal(false)
  }



  const Modal =()=>{
    return <>
    <div className='modal_main'></div>
      <div className='modal_head text-dark'>
      <div className='modal_wrapper d-flex justify-content-between'>
        <div className='modal_heading'>
          <h5 className='text-dark'>Shopping Cart</h5>
        </div>
        <div onClick={(()=>removeModalfunction())} className='modal_close text-dark'>
        <i className="fa-solid fa-xmark fa-xl"></i>
        </div>
        </div>
        <hr/>
        <div className='modal_product_div d-flex justify-content-center'>
          <div className='modal_products_wrapper '>
     
         {data.map((element)=>{
          return<>
          <div className='d-flex justify-content-between'>
            <div className='left_product_img_div'>
              <div className='img_div'>
                <img className='product_img' src={element.image} alt='product' />
              </div>
            </div>
            <div className='center_product_details_div'>
              <div className='product_details'>
                <p>{element.title}</p>
                <p>{element.quantity} X ${element.price}.00</p>
              </div>
            </div>
            <div className='right_product_remove_div d-flex justify-content-center flex-column align-items-end'>
              <div className='remove_icon_div' onClick={(()=>{
                removeProduct(element.id)
              })}>
              <i class="fa-regular fa-lg fa-circle-xmark"></i>
              </div>
            </div>
            </div>
            <hr className='hr_Line'/>
          </>
         })}

         
          </div>
          
        </div>
        <hr className='mb-3 mt-0' ></hr>
         <div className='subtotal_div'>
           <div className= ' subtotal_main d-flex justify-content-between'>
            <h5>SubTotal:</h5>
            <p>${sum}.00</p>
           </div>
         </div>
         <hr className='mt-0'/>
         <div className='button_wrapper d-flex justify-content-center'>
          <div className='button_divs'>
            <Link to={'/cart'} className='view_cart_btn d-flex justify-content-center align-items-center text-light'>VIEW CART</Link>
            <div className='checkout_btn d-flex justify-content-center align-items-center text-light'>CHECKOUT</div>
          </div>
         </div>
      </div>
      
    </>
  }
  return (
    <>
      <nav className='nav_main'>
        <div className='left_nav_div'>
          <NavLink to={'/'} className='nav_logo_div'>
            <img src={nav_logo} alt='logo' />
          </NavLink>
          <div className='nav_categories_main'>
            <div className='nav_categories_list'>
              <NavLink className='nav_link' to={'/everything'}>EveryThing</NavLink>
              <NavLink className='nav_link' to={'/women'}>WOMEN</NavLink>
              <NavLink to={'/men'} className='nav_link'>MEN</NavLink>
              <NavLink className='nav_link' to={'/accessories'}>ACCESSORIES</NavLink>
            </div>
            
          </div>
         
        </div>
        <div className='right_nav_div'>
        <div className='nav_links_main'>
              <NavLink to={'/about'} className='nav_link' >About</NavLink>
              <NavLink to={'/contact'} className='nav_link'>Contact</NavLink>
              <a>${sum}.00</a>
              <div onClick={(()=>modalfunction())} className='nav_cart_div'><i class="fa-solid fa-cart-shopping"></i>
              <div className='cart_quantity_div'>{data.length}</div>
              </div>
              <div><i class="fa-solid fa-user"></i></div>
            </div>
        </div>
        {modal&& <Modal/>}
      </nav>
    </>
  )
}

export default Navbar
