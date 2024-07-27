import React, {  useEffect, useState } from 'react'
import "./Featured.scss"
import { NavLink,Link, useNavigate } from 'react-router-dom'
import API_DATA from '../../Api'
import SingleProduct from '../SingleProduct/SingleProduct'
import Quality from '../Quality/Quality'


const Featured = () => {
  const navigate = useNavigate()
       const [Featured,setFeatured]=useState([])
  
     const API=API_DATA;
const featuredProducts=()=>{
    const featuredata=API.filter((ele)=>{
             return ele.special==true
    })
   
    setFeatured(featuredata)
       
   
}


 useEffect(()=>{
    featuredProducts()
 }, [])


  return (
    <>
    <div className='featured_main'>
    <div className='featured_head_div'>
        <h1 className='text-center featured_heading'>Featured Products</h1>
    </div>
    <div className='featured_products_main d-flex justify-content-center align-items-center'>
        <div className='featured_divs_main row'>
          

           {Featured.map((element,index)=>{
                return(<>
                    <div className='featured_div col-2' key={index}>
                <div className='featured_img_div'>
                    <img className='featured_img'src={element.image} alt='Product Image' ></img>
                </div>
                <div className='featured_details_div mt-3'>
                 <Link to={`/singleproduct/${element.id}`} className="link"><p className='featured_title mb-0'>{element.title}</p></Link> 
                    <p className='mb-0'>{element.category}</p>
                    <p className='featured_price'>${element.price}</p>
                </div>
                <div className='color_div'>

                    {element.color.map((e)=>(
                      
                        <button className='button' style={{backgroundColor:e}}></button>
                    )
                    )}

                </div>
            </div>
                </>)
            }
           )}
           

           
        </div>
    </div>
    <div className='limited_time_main d-flex justify-content-center'>
        <div className='limited_time_wrapper'>
           <div className='limited_time_heading text-light'>
           <div className='limited_time_heading_wrapper'>
            <h5>Limited Time Offer</h5>
            <h1 className='mt-3 special_edition_head'>Special Edition</h1>
            <p className='mb-1 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
            <p>ullamcorper mattis, pulvinar dapibus leo.</p>
            <h5 className='mt-3'>Buy This T-shirt At 20% Discount, Use Code OFF20</h5>
            <div>
                <button onClick={(()=>navigate('/women'))} className='btn-light shop_now_btn'>SHOP NOW</button>
            </div>
            </div>
           </div>
        </div>
    </div>

<Quality/>


</div> 
</>  )
  
}

export default Featured;