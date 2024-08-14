import React from 'react'
import "./About.scss"
import Navbar from '../Navbar/Navbar'
import about_img from '../../assets/slide-image-free-img-1024x576.jpg'
import client1 from '../../assets/team2-free-img.png'
import client2 from '../../assets/team1-free-img.png'
import client3 from '../../assets/team3-free-img.png'
import client4 from '../../assets/team4free-img.png'
import client5 from '../../assets/team5-free-img.png'
import client6 from '../../assets/team6-free-img.png'
import Quality from '../Quality/Quality.jsx'
import Footer from '../Footer/Footer.jsx'
const About = () => {
  return (
    <>
      <section className='about_section'>
        <div className='about_main'>
            <Navbar/>
            <h1 className='text-center about_head'>About Us</h1>
        </div>
        <div className='d-flex justify-content-center about_div_main'>
            <div className='about_div_wrapper d-flex justify-content-center'>
                <div className='left_wrapper'>
                   <div className='text-div'>
                    <h1 className='who_we_are_head'>Who We Are</h1>
                    <p className='mb-2 mt-5 about_para about_para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,</p>
                    <p className='mb-2 about_para'>luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a</p>
                    <p className='mb-2 about_para'>odio tincidunt auctor a ornare odio. Sed non mauris vitae erat</p>
                    <p className='mb-2 about_para'>consequat auctor eu in elit.</p>
                 </div>
                </div>
                <div className='right_wrapper'>
                    <img src={about_img} className='about_img'></img>
                </div>
            </div>
</div>
<div className='our_team_main'>
<div className='our_team_heading_div'>
 <h5 className='text-center our_team_head mb-3'>A Few Words About</h5>
 <h1 className='text-center mb-3'>Our Team</h1>
 <p  className='text-center mb-2'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
 <p  className='text-center'>Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
</div>
<div className='our_team_names_main d-flex justify-content-center'>
    <div className='our_team_names_wrapper '>
        <div className='our_team_name_div'>
        <div className='d-flex justify-content-center mt-4'>
          <div className='our_team_img_div'>
            <img className='our_team_img' src={client1}></img>
          </div>
          </div>
          <h4 className='text-center mt-4'>Harvey Spector</h4>
          <p className='text-center'>Founder - CEO</p>
        </div>

        <div className='our_team_name_div'>
        <div className='d-flex justify-content-center mt-4'>
          <div className='our_team_img_div'>
            <img className='our_team_img' src={client2}></img>
          </div>
          </div>
          <h4 className='text-center mt-4'>Jessica Pearson</h4>
          <p className='text-center'>COO</p>
        </div>

        <div className='our_team_name_div '>
        <div className='d-flex justify-content-center mt-4'>
          <div className='our_team_img_div'>
            <img className='our_team_img' src={client3}></img>
          </div>
          </div>
          <h4 className='text-center mt-4'>Rachel Zain</h4>
          <p className='text-center'>Rachel Zain</p>
        </div>

        <div className='our_team_name_div class'>
        <div className='d-flex justify-content-center mt-4'>

          <div className='our_team_img_div'>
            <img className='our_team_img' src={client4}></img>
          </div>
          </div>
          <h4 className='text-center mt-4'>Luise Litt</h4>
          <p className='text-center'>Lead Developer</p>
        </div>

        <div className='our_team_name_div class'>
        <div className='d-flex justify-content-center mt-4'>
          <div className='our_team_img_div'>
            <img className='our_team_img' src={client5}></img>
          </div>
          </div>
          <h4 className='text-center mt-4'>Katrina Bennett</h4>
          <p className='text-center'>Intern Designer</p>
        </div>

        <div className='our_team_name_div class'>
        <div className='d-flex justify-content-center mt-4 '>
          <div className='our_team_img_div'>
            <img className='our_team_img' src={client6}></img>
          </div>
          </div>
          <h4 className='text-center mt-4'>Mike Ross</h4>
          <p className='text-center'>Mike Ross</p>
        </div>
        
    </div>
</div>
</div>
 <div className='follow_us_main'>
   <div className='follow_us_wrapper'>
    <p className='follow_us_head text-center'>Follow Us</p>
    <div className='d-flex justify-content-center mt-4'>
    <div className='follow_us_icons d-flex justify-content-around'>
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-twitter"></i>
    <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-google-plus-g"></i>

    </div>
    </div>
   </div>
   
 </div>
      </section>
<Quality/>
<Footer/>
    </>
  )
}

export default About
