import React, { useState } from 'react'
import './Navbar.scss'
import nav_logo from '../../assets/logo1-free-img-140x47.png'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeElement } from '../../Store/Slices/Slices'
import navlogo2 from '../../assets/logo@2x-free-img.png'
const Navbar = () => {
  const [modal,setmodal]=useState(false)
  const [menu,setmenu]=useState(false)
  const navigate=useNavigate()
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
    setmodal(true)
  }
  /////

  const removeModalfunction=()=>{
    setmodal(false)
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


  //navmenu function////////


  const nav_menu=()=>{
    return<>
      <div className='modal_main'></div>
      <div className='nav_menu_main'>
           <div onClick={(()=>setmenu(false))} className='nav_menu_cross_div d-flex justify-content-end mt-4 me-3'>
           <i class="fa-solid fa-circle-xmark fa-2xl"></i>
           </div>
           <i class="fa-solid fa-user fa-user3 "></i>
           <div className='nav_menu_all_links_div mt-4'>
            <div className='nav_menu_link_div'>
              <NavLink to='/everything' onClick={(()=>setmenu(false))} style={{textDecoration:'none', color:'black'}}>EVERYTHING</NavLink>
            </div>
            <hr></hr>
            <div className='nav_menu_link_div'>
              <NavLink to='/women' onClick={(()=>setmenu(false))} style={{textDecoration:'none', color:'black'}}>WOMEN</NavLink>
            </div>
            <hr></hr>
            <div className='nav_menu_link_div'>
              <NavLink to='/men' onClick={(()=>setmenu(false))} style={{textDecoration:'none', color:'black'}}>MEN</NavLink>
            </div>
            <hr></hr>
            <div className='nav_menu_link_div'>
              <NavLink to='/accessories' onClick={(()=>setmenu(false))} style={{textDecoration:'none', color:'black'}}>ACCESSORIES</NavLink>
            </div>
            <hr></hr>
           </div>

           <div className='nav_menu_all_links_div mt-5'>
            <div className='nav_menu_link_div'>
              <NavLink to='/about' onClick={(()=>setmenu(false))} style={{textDecoration:'none', color:'black'}}>ABOUT</NavLink>
            </div>
            <hr></hr>
            <div className='nav_menu_link_div'>
              <NavLink to='/contact' onClick={(()=>setmenu(false))} style={{textDecoration:'none', color:'black'}}>CONTACT US</NavLink>
            </div>
            <hr></hr>
            
           </div>
      </div>
    </>
  }



  return (
    <>
      <nav className='nav_main'>
        <div className='left_nav_div'>
          <NavLink to={'/'} className='nav_logo_div1'>
            <img src={nav_logo} alt='logo' />
          </NavLink>
          <NavLink to={'/'} className='nav_logo_div2'>
            <img className='nav_logo2_img' src={navlogo2} alt='logo' />
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
              <span className='total_price_nav'>${sum}.00</span>
              <div onClick={(()=>modalfunction())} className='nav_cart_div'><i class="fa-solid fa-cart-shopping"></i>
              <div className='cart_quantity_div'>{data.length}</div>
              </div>
              <div>
              <i class="fa-solid fa-user fa-user2"></i>
              </div>
              <div className='user' onClick={(()=>setmenu(true))}><i class="fa-solid fa-bars fa-lg"></i></div>
            </div>
        </div>
        {modal&& <Modal/>}
        {menu&& nav_menu()}
      </nav>
      
    </>
  )
}

export default Navbar
