import React, { useState } from 'react'
import './Navbar2.scss'
import nav_logo from '../../assets/favicon-free-img-120x120.png'
import { useDispatch, useSelector } from 'react-redux'
import shoe from "../../assets/sports-shoe1-300x300.jpg"
import { removeElement } from '../../Store/Slices/Slices'
const Navbar2 = () => {
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
            <hr/>
          </>
         })}

         
          </div>
          
        </div>
     
      </div>
      
    </>
  }
  return (
    <>
      <nav className='nav_main nav_main2'>
        <div className='left_nav_div'>
          <div className='nav_logo_div nav_logo_div2'>
            <img className='nav_logo_img' src={nav_logo} alt='logo' />
          </div>
          <div className='nav_categories_main'>
            <div className='nav_categories_list nav_categories_list2 '>
              <a>EveryThing</a>
              <a>Women</a>
              <a>Accesecories</a>
            </div>
            
          </div>
         
        </div>
        <div className='right_nav_div'>
        <div className='nav_links_main nav_links_main2'>
              <a>About</a>
              <a>Contact</a>
              <a>${sum}.00</a>
              <div onClick={(()=>modalfunction())} className='nav_cart_div'><i class="fa-solid fa-cart-shopping"></i>
              <div className='cart_quantity_div cart_quantity_div2'>{data.length}</div>
              </div>
              <div><i class="fa-solid fa-user"></i></div>
            </div>
        </div>
        {modal&& <Modal/>}
       
      </nav>
      
    </>
  )
}

export default Navbar2
