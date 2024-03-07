import React from 'react'
import './Contact.css'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <div>
     <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt architecto hic nulla consequuntur,
     </Header>
     <setion className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="www.google.com" target='_blank' ><MdEmail/></a>
           <a href="www.google.com" target='_blank' ><BsMessenger/></a>
            <a href="www.google.com" target='_blank' ><IoLogoWhatsapp/></a>
        </div>
      </div>
     </setion>
    
    </div>
  )
}

export default Contact
