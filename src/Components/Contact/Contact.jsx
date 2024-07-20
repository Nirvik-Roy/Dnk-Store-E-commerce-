import React from 'react'
import './Contact.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <>
      <section className='contact_section'>
        <div className='contact_main'>
            <Navbar/>
            <div className='contact_heading_div text-light text-center'>
                <h1 className='contact_head'>Contact Us</h1>
            </div>
        </div>
        <div className='cards_main'>
            <h5 className='text-center cards_head1'>Have any queries?</h5>
            <h1 className='text-center cards_head'>We're here to help.​</h1>
            <div className='card_wrapper_main d-flex justify-content-center'>
                <div className='card_wrapper d-flex justify-content-between mt-5'>
                    <div className='card_div'>
                        <h3 className='text-center mt-4'>Sales</h3>
                        <p className='text-center mb-1'>Vestibulum ante ipsum primis in</p>
                        <p className='text-center'>faucibus orci luctus.</p>
                        <h5 className='text-primary text-center'>1800 123 4567</h5>
                    </div>

                    <div className='card_div'>
                        <h3 className='text-center mt-4'>Complaints</h3>
                        <p className='text-center mb-1'>Vestibulum ante ipsum primis in</p>
                        <p className='text-center'>faucibus orci luctus.</p>
                        <h5 className='text-primary text-center'>1900 223 8899</h5>
                    </div>

                    <div className='card_div'>
                        <h3 className='text-center mt-4'>Returns</h3>
                        <p className='text-center mb-1'>Vestibulum ante ipsum primis in</p>
                        <p className='text-center'>faucibus orci luctus.</p>
                        <h5 className='text-primary text-center'>returns@mail.com</h5>
                    </div>

                    <div className='card_div'>
                        <h3 className='text-center mt-4'>Marketing</h3>
                        <p className='text-center mb-1'>Vestibulum ante ipsum primis in</p>
                        <p className='text-center'>faucibus orci luctus.</p>
                        <h5 className='text-primary text-center'>1700 444 5578</h5>
                    </div>
                    
                </div>
                
              
                
            </div>
            <div className='contact_form_main d-flex justify-content-center'>
            <div className='contact_form_wrapper d-flex'>
                    <div className='contact_left'>
                    <div className='contact_left_about'>
                        <p className='mb-0'>Don't be a stranger!</p>
                        <h1>You tell us. We listen.</h1>
                        <p className='mb-1 mt-4'>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu</p>
                        <p className='mb-1'>condimentum sem. Proin dignissim libero lacus, ut eleifend magna</p>
                        <p className='mb-1'>vehicula et. Nam mattis est sed tellus.</p>
                </div>
                    </div>
                    <div className='contact_right'>
                    <div className='contact_right_form_main'>
                        <div className='form_div'>
                            <form>
                                <input type="text" className="form-control form_name" placeholder="NAME" required />
                                <input type="email" className="form-control form_email" placeholder="EMAIL" required />
                                <input type="text" className="form-control form_subject" placeholder="SUBJECT" required />
                                <textarea className="form-control form-text" rows="5"  placeholder="MESSAGE" required></textarea>
                                <button type="submit" className="btn btn-primary btn_message">SEND MESSAGE</button>
                            </form>
                        </div>
             </div>

                    </div>
                    </div>
                    </div>
        </div>
        <Footer/>
      </section>
      
    </>
  )
}

export default Contact
