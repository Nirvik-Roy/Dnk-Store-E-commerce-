import React, { useEffect, useRef, useState } from 'react'
import {useParams,NavLink,Link} from 'react-router-dom'
import API_DATA from "../../Api"
import Navbar2 from '../Navbar/Navbar2'
import './SingleProduct.scss'
import shoe from '../../assets/sports-shoe1-600x600.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { addElement } from '../../Store/Slices/Slices'
import Footer from '../Footer/Footer.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleProduct = () => {
  const [product,setproduct]=useState([])
  const [Color,setColor]=useState('')
  const [quantity,setQuantity]=useState(1)
  const [Index,setIndex]=useState(0)

  const [position,setposition]=useState({
    x: 0,
    y: 0,
    scale:1
  })
  
const data2 = API_DATA
  const data=useSelector((state)=>{ //Very important steps//
    return state.cart
  })  

 //this one too//
  console.log(data)
  setTimeout(()=>window.scroll(x,y),100)
  
  
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
  window.scrollTo({top:0,behavior:'instant'})
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
   
   toast.info('Item Added To Cart', {
    position: "top-left",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    });
 }


 //MouseHover Zoom Effect logic starts here/////


 const mouseEnterZoom=(e)=>{
  let x=e.clientX - e.target.offsetLeft
  let y=e.clientY - e.target.offsetTop
  setposition({
    x:x,
    y:y,
    scale:2,
  })
 }

 const mouseLeaveZoom=()=>{
  setposition({
    x:0,
    y:0,
    scale:1,
  })
 }

 //Mouse enter zoom logic Ends Here//
  return (
    <>
    <ToastContainer
position="top-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
     <Navbar2/>
     <section className='singleProduct_section'>
      <div className='single_product_main'>
        <div className='single_product_wrapper'>


        {product.map((e)=>{
          return<>
            <div className='left_singleproduct_div'>
      
      <div className='singleProduct_image_div' onMouseMove={((e)=>mouseEnterZoom(e))} onMouseLeave={(()=>mouseLeaveZoom())}>
        <img style={{width:'100%',height:'100%',objectFit:'cover',transformOrigin:`${position.x}px ${position.y}px`,transform:`scale(${position.scale})`,overflow:'hidden'}} className='single_product_img' loading='lazy' src={e.images[Index]} alt='product_img'></img>
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
        <a className='singleproduct_titles'>Home/</a><a className='singleproduct_titles'>Men/</a><a className='singleproduct_titles'>{e.title}</a>
        <p className='mt-4 singleproduct_category text-capitalize'>{e.category}</p>
        <h2 className='mb-3 singleproduct_heading'>{e.title}</h2>
        <h4 className='d-inline singleproduct_price'>${e.price}</h4><span > +Free Shipping</span>
        <p className='mt-3 product_description'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
        <div className='color_div_main'>
        {e.color.map((ele)=>(
          <button onClick={(()=>getColor(ele))} className='color_btn_main btn mt-3' style={{backgroundColor:ele}}></button>
        ))}
        </div>
        <hr className='mt-5 hr_line5'></hr>
        <div>
          <input className='quantity_input' type='number' onChange={((event)=>getQuantity(event))} defaultValue={1} min={1} max={25}></input>
          <button onClick={(()=>productDetails(e))} className='btn btn-primary btn_add_to_cart'>ADD TO CART</button>
          <hr className=' hr_line6'></hr>
        </div>
        <span className='category_men'>SKU: N/A</span>
        <span className='ms-3 category_men'>Category: {e.category}</span>
      </div>
     </div>

    </>    
        })}
        
          
        </div>
       
      </div>
      
      <div className='d-flex justify-content-center'>
      <hr className='hr_line hr_line7'/>
      
      </div>
      <div className='d-flex justify-content-center'>
      <div className='description_review_div'>
      <div className=' description_review_main d-flex justify-content-between'>
        <p><strong>Description</strong></p>
        <p><strong>Reviews(0)</strong></p>
      </div>
      </div>
</div>
    <div className='d-flex justify-content-center'>
      <div className='mt-4 product_description_wrapper'>
        <h3 className='mt-4'>Product Description</h3>
        <p className='mt-4 product_description1'>Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className='mt-5 product_description1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <h3 className='mt-5'>More about the product</h3>
        <p className='mt-4 product_description1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
        <p className='mt-5 product_description1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      </div>
     
    </div>
    <div className='d-flex justify-content-center mt-5'>
    <div className='review_div_wrapper mt-1 d-flex justify-content-center'>
      <div className='review_form_div'>
        <h5 className='mt-5 review_heading'>Your email address will not be published. Required fields are marked *</h5>
        <p className='d-inline rating fs-5'>Your Rating* </p><i className="fa-regular fa-star star2 mt-4"></i>
                   <i className="fa-regular fa-star star2"></i>
                   <i className="fa-regular fa-star star2"></i>
                   <i className="fa-regular fa-star star2"></i>
                   <i className="fa-regular fa-star star2"></i>
               <form>
                <label className='fs-5 mt-4 review'>Your Review*</label>
                <input type='text' className='review_input mt-3'></input>
                <label className='d-block fs-5 mt-4 name'>Your Name*</label>
                <input type='text' className='review_name_input mt-3'></input>
                <label className='d-block fs-5 mt-4 email'>Your Email*</label>
                <input type='email' className='review_email_input mt-3'></input>
                <button type='submit' className='submit_review_btn'>SUBMIT</button>
               </form>    
      </div>
    </div>
    </div>

    <div className='realted_products_main d-flex justify-content-center'>
      <div className='realted_products_wrapper'>
       <h1>Related Products</h1>
       <div className='realted_products_divs'>

       {data2.map((e,index)=>{
        if(index>16&&index<=19){
          return<>
        
        <div className='realted_product'>

<div className='realted_product_img_div'>
  <img className='realted_product_img' src={e.image}></img>
</div>
<h5 className='mt-3 realted_product_title'>{e.title}</h5>
<small className='realted_product_category' >{e.category}</small>
<p className='realted_product_price'>${e.price}</p>
<i className="fa-regular fa-star star5"></i>
               <i className="fa-regular fa-star star5"></i>
               <i className="fa-regular fa-star star5"></i>
               <i className="fa-regular fa-star star5"></i>
               <i className="fa-regular fa-star star5"></i>
</div>
        </>
        }
        
       })}


   

       </div>
      </div>
    </div>
     </section>
     <Footer/>
    </>
  )
}

export default SingleProduct

