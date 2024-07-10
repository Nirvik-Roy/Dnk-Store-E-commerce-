import React, { useEffect, useState } from 'react'
import {useParams,NavLink,Link} from 'react-router-dom'
import API_DATA from "../../Api"
import Navbar2 from '../Navbar/Navbar2'
import './SingleProduct.scss'
import shoe from '../../assets/sports-shoe1-600x600.jpg'
const SingleProduct = () => {
  const [product,setproduct]=useState([])
  const [Index,setIndex]=useState(0)
  const {id}=useParams()
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
    </>    
        })}
        
          <div className='right_singleproduct_div'></div>
        </div>
      </div>
     </section>
    </>
  )
}

export default SingleProduct

