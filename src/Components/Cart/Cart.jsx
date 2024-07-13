import React from 'react'
import Navbar2 from '../Navbar/Navbar2'
import './Cart.scss'
import shoe from '../../assets/sports-shoe1-300x300.jpg'
import { useSelector } from 'react-redux'
const Cart = () => {
    const data =useSelector((state)=>{
        return state.cart
    })
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

          {data.map((element)=>{
        return<>
        <div className='cart_product_details d-flex justify-content-evenly'>
                    <div className='cart_remove_product_div'>
                    <i class="fa-regular fa-lg fa-circle-xmark"></i>
                    </div>
                    <div className='cart_product_img_main'>
                    <div className='cart_product_img_div'>
                        <img className='cart_product_img' src={element.image}></img>
                    </div>
                    </div>
                    <div className='cart_product_title_div d-flex justify-content-en'>
                        <p className='cart_product_title'>{element.title}</p>
                    </div>
                    <div className='cart_product_price_div'>
                        <p className='cart_product_price'>${element.price}.00</p>
                    </div>
                    <div className='cart_product_quantity_div'>
                        <input type='number' className='cart_product_quantity_input' defaultValue={element.quantity}></input>
                    </div>
                    <div className='cart_product_subtotal_div'>
                        <p className='cart_product_subtotal'>${element.total}.00</p>
                    </div>
                </div>
        </>
          })}

                
            </div>
        </div>
      </section>
    </>
  )
}

export default Cart
