import React, { useState } from 'react'
import './Everything.scss'
import Navbar2 from '../Navbar/Navbar2'
import {Slider} from '@mui/material'
import shoe from '../../assets/sports-shoe1-600x600.jpg'
const Everything = () => {
    const [val,setval]=useState([300,2000])
    const [minVal,setminVal]=useState(300)
    const [maxVal,setmaxVal]=useState(2000)
    
    const rangeValue=(element)=>{
        setminVal(element.target.value[0])
        setmaxVal(element.target.value[1])
    }
  return (
    <> <Navbar2/>
      <section className='everything_section'>
        <div className='everything_main d-flex justify-content-center'>
            <div className='everything_wrapper'>
                <div className='everything_left'>
                    <div className='search_input_div'>
                        <input className='search_input' type='text' placeholder='Search Products'></input>
                        <button className='search_btn'>
                        <i class="fa-solid fa-greater-than"></i>
                        </button>
                    </div>
                    <div className='filter_main'>
                        <p className='range_filter_heading'>Filter By Price</p>
                        <div className='filter_range_main'>
                           <Slider style={{color:'black'}} min={300} max={1000} defaultValue={val} onChange={((e)=>rangeValue(e))}  />
                        </div>
                        <div className='filter_btn_main d-flex justify-content-between'>
                            <button className='filter_btn'>Filter</button>
                            <p className='price_para'>Price<span><strong>$300-$2000</strong></span></p>
                        </div>
                    </div>
                    <div className='categories_main'>
                        <p className='categories_para2'>Categories</p>
                        <div className='categories_men d-flex justify-content-between'>
                            <p className='men'>Men</p>
                            <p className='men_items'>(15)</p>
                        </div>

                        <div className='categories_women d-flex justify-content-between'>
                            <p className='women'>Women</p>
                            <p className='women_items'>(20)</p>
                        </div>

                        <div className='categories_accessories d-flex justify-content-between'>
                            <p className='accessories'>Accessories</p>
                            <p className='accessories_items'>(7)</p>
                        </div>
                    </div>
                    <div className='best_sellers_main'>
                        <p className='best_seller_head'>Our Best Sellers</p>
            
                        <div className='best_seller_product_div d-flex'>
                            <div className='best_seller_product_img_div'>
                                <img className='best_seller_product_img' src={shoe}></img>
                            </div>
                            <div className='best_seller_product_details_div'>
                                <p className='best_seller_product_title mb-0'>Dnk-Blue Shoes</p>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <p className='best_seller_product_price'>$100</p>
                            </div>
                        </div>
                       
                    
                        
                    </div>
                </div>
                <div className='everything_right'></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Everything
