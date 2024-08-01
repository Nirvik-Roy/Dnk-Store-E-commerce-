import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo@2x-free-img.png'
const Footer = () => {
  return (
    <>
      <section className='footer_section'>
        <div className='footer_wrapper'>
            <div className='footer_heading'>
                <h3 className='footer_head'>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h3>
            </div>
        </div>


         <div className='footer_divs d-flex justify-content-center'>
           <div className='footer_divs_wrapper'>

           
             <div className='footer_left'>
             <div className='footer_div_img_wrapper'>
                <div className='footer_img_div'>
                    <img src={logo} className='footer_img'></img>
                </div>
</div>
                <h4 className='mt-5'>The best look anytime, anywhere.</h4>
             </div>



             <div className='footer_middle'>
                <h5 className='mb-3'>For Her</h5>
                    <p className='mb-1 lists'>Women Jeans</p>
                    <p className='mb-1 lists'>Tops and Shirts</p >
                    <p className='mb-1 lists'>Women Jackets</p>
                    <p className='mb-1 lists'>Heels and Flats</p>
                    <p className='mb-1 lists'>Women Accessories</p>
             </div>



             <div className='footer_middle2'>
                <h5 className='mb-3'>For Him</h5>
                    <p className='mb-1 lists'>Men Jeans</p>
                    <p className='mb-1 lists'>Men Shirts</p >
                    <p className='mb-1 lists'>Men Jackets</p>
                    <p className='mb-1 lists'>Men Shoes</p>
                    <p className='mb-1 lists'>Men Accessories</p>
             </div>


             <div className='footer_right'>
                <h5>Subscribe</h5>
                <div className='subscribe_input_div'>
                    <input className='subscribe_input' type='email' placeholder='Your email address...'></input>
                </div>
                <div className='subscribe_btn_div'>
                   <button className='subscribe_btn'>SUBSCRIBE</button>
                </div>
             </div>


           </div>
         </div>
         <div className='footer_bottom'>
            <div className='footer_bottom_div text-center mt-4'>
                <p className='footer_bottom_text'>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
            </div>
         </div>
      </section>
    </> 
  )
}

export default Footer
