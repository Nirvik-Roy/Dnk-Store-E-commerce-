import React, { useState } from 'react'
import Navbar2 from '../Navbar/Navbar2'
import './Cart.scss'
import shoe from '../../assets/sports-shoe1-300x300.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { removeElement, updateElement } from '../../Store/Slices/Slices'
import {Link} from 'react-router-dom'
const Cart = () => {
  const [price,setprice]=useState()
  const [disable,setDisable]=useState(true)
  const [newQuantity,setnewQuantity]=useState()
  const [newID,setnewID]=useState()
  const dispatch =useDispatch()
    const data =useSelector((state)=>{
        return state.cart
    })
    let sum=0;
    data.map((element)=>{
      sum+=element.total
    })
    const removeProduct=(id)=>{
       dispatch(removeElement(id))
    }
    const newQuantityFun = (quan) =>{
        setnewQuantity(quan.target.value)
        setDisable(false)
    }
    const elementIdFun = (id,pri) =>{
      setnewID(id)
      setprice(pri)
    }
    const updateCart = () =>{
      dispatch(updateElement({quan:newQuantity,id:newID,Price:price}))
    }
  return (
    <>
      <Navbar2/>
      <section className='cart_section'>
        <div className='cart_heading_div text-center'>
            <p className='cart_head'>Cart</p>
        </div>
        <div className='cart_main d-flex justify-content-center'>
            <div className='cart_items_wrapper'>
                <div className='cart_items_head d-flex justify-content-evenly'>
                    <div className='product_head text-center'>Product</div>
                    <div className='price_head'>Price</div>
                    <div className='quantity_head'>Quantity</div>
                    <div className='subtotal_head'>Subtotal</div>
                </div>

          {data.map((element,index)=>{
        return<>
        <div className='cart_product_details d-flex justify-content-evenly'>
                    <div className='cart_remove_product_div' onClick={(()=>removeProduct(element.id))}>
                    <i class="fa-regular fa-lg fa-circle-xmark"></i>
                    </div>
                    <div className='cart_product_img_main'>
                    <div className='cart_product_img_div'>
                        <img className='cart_product_img' src={element.image} key={index}></img>
                    </div>
                    </div>
                    <div className='cart_product_title_div d-flex justify-content-en'>
                        <Link to={`/singleproduct/${element.id}/`} key={index} className='cart_product_title'>{element.title} </Link>
                    </div>
                    <div className='cart_product_price_div'>
                        <p className='cart_product_price'>${element.price}.00</p>
                    </div>
                    <div className='cart_product_quantity_div'>
                        <input type='number' onMouseEnter={(()=>{
                              elementIdFun(element.id,element.price)
                        })} 
                        onChange={((element1)=>{
                             newQuantityFun(element1)
                        })} 
                        className='cart_product_quantity_input' key={index} min={1} max={25} defaultValue={element.quantity}></input>
                    </div>
                    <div className='cart_product_subtotal_div'>
                        <p key={index} className='cart_product_subtotal'>${element.total}.00</p>
                    </div>
                </div>
        </>
          })}
                <div className='coupon_div_wrapper d-flex justify-content-between'>
                <div className='coupon_div_main d-flex justify-content-around'>
                  <input type='text' className='coupon_input' placeholder='Coupon Code'></input>
                  <button className='coupon_btn'>Apply Coupon</button>
                </div>
                <div className='update_cart_main'>
                  <button disabled={disable} onClick={(()=>{
                    updateCart()
                  })} className={`update_cart_btn ${disable? 'disable_btn':''}`}>Update Cart</button>
                </div>
            </div>
            </div>
        </div>
        <div className='cart_totals_main d-flex justify-content-end'>
              <div className='cart_totals_wrapper'>
                   <div className='cart_totals_head_div'>
                    <p className='cart_totals_head'>Cart Totals</p>
                   </div>
                <div className='subtotal_total_main d-flex justify-content-center'>
                  <div className='subtotal_total_wrapper'>
                  <div className='subtotal_amount_main'>
                     <div className='subtotal_amount_div d-flex justify-content-between'>
                      <p className='subtotal_para'>Subtotal:</p>
                      <p  className='subtotal_amount'>${sum}.00</p>
                     </div>
                     </div>

                     <div className='total_main'>
                     <div className='total_amount_div d-flex justify-content-between'>
                      <p className='total_para'>Total:</p>
                      <p  className='total_amount'>${sum}.00</p>
                     </div>
                     </div>
                  </div>
                </div>
                   <div className='checkout_button_div_main d-flex justify-content-center'>
                    <div className='checkout_button_div_wrapper'>
                      <button className='checkout_button'>CHECKOUT</button>
                    </div>
                   </div>
              </div>
            </div>
      </section>
    </>
  )
}

export default Cart
