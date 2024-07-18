import React, { useState } from 'react'
import './Pagination.scss'
const Pagination = (props) => { 
    let pages=[];
    for(let i=1; i<= Math.ceil(props.totalProducts / props.productsPerPage);i++){
        pages.push(i);
    }
    const setCurrentPage =(e)=>{
        window.scrollTo({top:0,behavior:'instant'})
      props.setcurrentPage(e)
    }
  return (
    <>
      <div className='pagination_div_main d-flex'>
      {pages.map((e,i)=>{
        return<>
        <div key={i} onClick={(()=>setCurrentPage(e))} className='pagination_div'>
            <p className='mt-3'>{e}</p>
        </div>
        </>
      })}
        
      </div>
    </>
  )
}

export default Pagination
