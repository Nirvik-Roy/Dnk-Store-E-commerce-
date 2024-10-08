import React from 'react'
import "./Logos.scss"
import logo1 from "../../assets/client-logo-1.png"
import logo2 from "../../assets/client-logo-2.png"
import logo3 from "../../assets/client-logo-3.png"
import logo4 from "../../assets/client-logo-4.png"
import logo5 from "../../assets/client-logo-5.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import {useNavigate} from 'react-router-dom'
const Logos = () => {
    const navigate =useNavigate()
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.50,
              slidesToScroll: 1
            }
          }
        ]
      };
    const Data=[
        {
            id:1,
            Image:logo1
        },
        {
            id:2,
            Image:logo2
        },
        {
            id:3,
            Image:logo3
        },
        {
            id:4,
            Image:logo4
        },
        {
            id:5,
            Image:logo5
        },
        
    ]
    
  return (
    <div className='main2'>
    
  
    <div className='slide_main d-flex justify-content-center'>
   
        <div className='slides'>
      
          <Slider {...settings}>
            {Data.map((element)=>{
                return(<>
                <div className='slide_div'>
                    <img className='logo_img' src={element.Image} alt='e' key={element.id}></img>
                </div>
            </>)
        })}
        </Slider>

               
         
        
        </div>
        
    </div>


       
       <div className='offer_main d-flex justify-content-center'>
          
            <div className='offer_main2 d-flex justify-content-center'>
                <div className='offer_left'>
                       <div className='offer_head_main d-flex justify-content-center'>
                        <div className='left_head_main'>
                            <div><h4 className='text-light offer_heading'>20% Off On Tank Tops</h4></div>
                            <div><p className='text-light mb-1 offer_para1'>Lorem ipsum dolor sit amet, consectetur</p></div>
                            <div><p className='text-light offer_para1'>adipiscing elit. Proin ac dictum.</p></div>
                            <div><button onClick={(()=>navigate('/women'))} className='btn btn-light btn_shop '>SHOP NOW</button></div>
                        </div>
                        </div>
                </div>
                <div className='offer_center'>
                <div className='offer_head_main d-flex justify-content-center'>
                        <div className='left_head_main'>
                            <div><h4 className='text-light offer_heading'>Latest Eyewear For You</h4></div>
                            <div><p className='text-light mb-1 offer_para1'>Lorem ipsum dolor sit amet, consectetur</p></div>
                            <div><p className='text-light offer_para1'>adipiscing elit. Proin ac dictum.</p></div>
                            <div><button onClick={(()=>navigate('/men'))} className='btn btn-light btn_shop '>SHOP NOW</button></div>
                        </div>
                        </div>
                </div>
                <div className='offer_right'>
                <div className='offer_head_main d-flex justify-content-center'>
                        <div className='left_head_main'>
                            <div><h4 className='text-light offer_heading'>Let's Lorem Suit Up!</h4></div>
                            <div><p className='text-light mb-1 offer_para1'>Lorem ipsum dolor sit amet, consectetur</p></div>
                            <div><p className='text-light offer_para1'>adipiscing elit. Proin ac dictum.</p></div>
                            <div><button onClick={(()=>navigate('/accessories'))} className='btn btn-light btn_shop '>CHECK OUT</button></div>
                        </div>
                        </div>
                </div>
                
            </div>
       </div>



    </div>
  )
}

export default Logos