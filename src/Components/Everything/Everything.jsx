import React, { useEffect, useState } from 'react'
import './Everything.scss'
import Navbar2 from '../Navbar/Navbar2'
import { Slider} from '@mui/material'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import API_DATA from '../../Api'
const Everything = () => {
    const [inputVal,setinputVal]=useState()
    const [val,setval]=useState([300,2000])
    const [minVal,setminVal]=useState(300)
    const [maxVal,setmaxVal]=useState(1000)
    const [currentPage,setcurrentPage]=useState(1)
    const [productsPerPage,setProductsPerPage]=useState(12)
    const [allProductData,setallProductData]=useState([])
    const data=API_DATA;
    useEffect(()=>{
        setallProductData(data)
    },[])

   / /Logic For Pagination///

    const LastIndex = currentPage * productsPerPage;
    const firstIndex = LastIndex - productsPerPage;
    const currentProducts = allProductData.slice(firstIndex, LastIndex);

    /Ends Here................./

   // /filterBYPRice logic here....................//

    const rangeValue=(element)=>{
        setminVal(element.target.value[0])
        setmaxVal(element.target.value[1])
    }
   const priceFilter = ()=>{
     const filter_product=data.filter((e)=>{
        return e.price>minVal && e.price<=maxVal
     })
     setallProductData(filter_product)
   }
   /Ends here.................//


   /Search BY Name Logic.................../
   const inputValue=(e)=>{
       setinputVal(e.target.value)
   }
   const searchByName=()=>{
     const search_filter=data.filter((e)=>{
        return e.title.toLowerCase().includes(inputVal.toLowerCase())
     })
     setallProductData(search_filter)
   }
   /Ends here................./


  return (
    <> <Navbar2/>
      <section className='everything_section'>
        <div className='everything_main d-flex justify-content-center'>
            <div className='everything_wrapper'>
                <div className='everything_left'>
                    <div className='search_input_div'>
                        <input onChange={((e)=>inputValue(e))} className='search_input' type='text' placeholder='Search Products...'></input>
                        <button onClick={(()=>searchByName())} className='search_btn'>
                        <i class="fa-solid fa-greater-than"></i>
                        </button>
                    </div>
                    <div className='filter_main'>
                        <p className='range_filter_heading'>Filter By Price</p>
                        <div className='filter_range_main'>
                           <Slider style={{color:'black',width:'100%'}} step={100} min={300} max={1000} defaultValue={val} onChange={((e)=>rangeValue(e))} />
                        </div>
                        <div className='filter_btn_main d-flex justify-content-between'>
                            <button className='filter_btn' onClick={(()=>priceFilter())}>Filter</button>
                            <p className='price_para'>Price<span><small>${minVal}-${maxVal}</small></span></p>
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
            {allProductData.map((element,index)=>{
                
                if(index >3 && index <=8){
                    return <>
  
  <div className='best_seller_product_div d-flex'>
               <div className='best_seller_product_img_div'>
                   <img className='best_seller_product_img' src={element.image}></img>
               </div>
               <div className='best_seller_product_details_div'>
                   <p className='best_seller_product_title mb-0'>{element.title}</p>
                   <i className="fa-regular fa-star"></i>
                   <i className="fa-regular fa-star"></i>
                   <i className="fa-regular fa-star"></i>
                   <i className="fa-regular fa-star"></i>
                   <p className='best_seller_product_price'>${element.price}</p>
               </div>
           </div>
  </>
                }
                
          
            })}


                        
                       
                    
                        
                    </div>
                </div>
                <div className='everything_right'>
                    <div className='all_products_wrapper'>
                    <div>
                        <Link className='link'>Home</Link>
                        <span>/Store</span>
                  </div>
                  
                  <div className='dropdown_main d-flex justify-content-between'>
                    <div>
                        <p>Showing 1–12 of {data.length} results</p>
                    </div>
                    <div>
                        <select className='dropdown'>
                            <option value='Default Sorting'>Default Sorting</option>
                            <option value='Sort by price:Low to High'>Sort by price: Low to High</option>
                            <option value='Sort by price:High to Low'>Sort by price: High to Low</option>
                        </select>
                    </div>
                  </div>
                    <div className='products_main'>
                    {currentProducts.map((e)=>{
                       return <>
                       <div className='item_div'>
                            <div className='item_img_div'>
                                <img className='item_img' src={e.image}></img>
                            </div>
                            <div className='item_details'>
                                <Link to={`/singleproduct/${e.id}`} className='item_name'><strong className='item_name mt-5'>{e.title}</strong></Link>
                                <p className='item_category mt-2 mb-1 text-secondary mb-0'>{e.category}</p>
                                <p className='item_price'>${e.price}</p>
                                <div className='item_color_div'>
                                {e.color.map((ele)=>(
                                    <button className='item_btn_color' style={{backgroundColor:ele}}></button>
                                ))}
                                    
                                </div>
                                <div className='mt-1'>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                      
                       </>
                    })}
                     
                        
                    </div>
                    <Pagination productsPerPage={productsPerPage} totalProducts={data.length} setcurrentPage={setcurrentPage}/>
                    </div>
                
                </div>
                
            </div>
        </div>
      </section>
    </>
  )
}

export default Everything
