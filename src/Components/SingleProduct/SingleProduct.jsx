import React, { useEffect, useState } from 'react'
import {useParams,NavLink,Link} from 'react-router-dom'
import API_DATA from "../../Api"
import Navbar2 from '../Navbar/Navbar2'
import './SingleProduct.scss'
import shoe from '../../assets/sports-shoe1-600x600.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { addElement } from '../../Store/Slices/Slices'
const SingleProduct = () => {

  const data=useSelector((state)=>{ //Very important steps//
    return state.cart
  })  

 //this one too//
  console.log(data) //this one too//

  const [product,setproduct]=useState([])
  const [Color,setColor]=useState('')
  const [quantity,setQuantity]=useState(1)
  const [Index,setIndex]=useState(0)
  const {id}=useParams()
  const dispatch=useDispatch()
  const Api=API_DATA
 const Single_product =()=>{
  let filter_data=Api.filter((element)=>{
    return element.id==id
  })
  setproduct(filter_data)
 }
 useEffect(()=>{
  Single_product()
 },[])
 const setIndexFun =(i)=>{
  setIndex(i)
 }
 const getQuantity=(e)=>{
 setQuantity(e.target.value)
 }
 const getColor=(e)=>{
  setColor(e)
 }
 const productDetails=(cartitem)=>{
   const obj={
    id:cartitem.id,
    title:cartitem.title,
    img:cartitem.image,
    quantity:quantity,
    price:cartitem.price,
    color:Color,
    total:cartitem.price*quantity,
    image:cartitem.image
   }
   dispatch(addElement(obj))
   console.log(cartitem.image)
 }
  return (
    <>
     <Navbar2/>
     <section className='singleProduct_section'>
      <div className='single_product_main'>
        <div className='single_product_wrapper'>


        {product.map((e)=>{
          return<>
            <div className='left_singleproduct_div'>
      
      <div className='singleProduct_image_div '>
        <img className='single_product_img' src={e.images[Index]} alt='product_img'></img>
      </div>
  
      <div className='small_single_product_img_div_main'>
      
      {e.images.map((element,index)=>(
        <div className='small_single_product_img_div'>
            <img className='small_single_product_img' onClick={(()=>setIndexFun(index))} key={index} src={element} alt='product_img'></img>
       </div>
      ))}
         
      </div>
    </div>
     <div className='right_singleproduct_div'>
      <div className='singleproduct_details_div'>
        <a>Home/</a><a>Men/</a><a>{e.title}</a>
        <p className='mt-4 text-uppercase'>{e.category}</p>
        <h1>{e.title}</h1>
        <h2 className='d-inline'>${e.price}</h2><span className='fs-5'> +Free Shipping</span>
        <p className='mt-3 product_description'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
        <div className='color_div_main'>
        {e.color.map((ele)=>(
          <button onClick={(()=>getColor(ele))} className='color_btn_main btn mt-3' style={{backgroundColor:ele}}></button>
        ))}
        </div>
        <hr className='mt-5'></hr>
        <div>
          <input className='quantity_input' type='number' onChange={((event)=>getQuantity(event))} defaultValue={1} min={1} max={25}></input>
          <button onClick={(()=>productDetails(e))} className='btn btn-primary btn_add_to_cart'>ADD TO CART</button>
          <hr></hr>
        </div>
        <span>SKU: N/A</span>
        <span className='ms-3'>Category: Men</span>
      </div>
     </div>

    </>    
        })}
        
          
        </div>
       
      </div>
      <div className='d-flex justify-content-center'>
      <hr className='hr_line'/>
      </div>
     </section>
    </>
  )
}

export default SingleProduct

