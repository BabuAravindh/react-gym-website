import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Trainer from '../../Components/Trainer'
import './trainers.css'
const Trainers = () => {
  return (
    <div>
        <Header title="Our trainers" image={HeaderImage}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi unde tempore odio culpa placeat.
        </Header>
        <section className="trainers">
          <div className="container trainers_container">
            {
              trainers.map(({id,image,name,job,socials}) => {
                return <Trainer key={id} image={image} name={name}  job={job} socials={
                  [
                    {icon:<BsInstagram/>,link :socials[0]},
                    {icon:<AiOutlineTwitter />,link :socials[1]},
                    {icon:< FaFacebook />,link :socials[2]},
                    {icon:<FaLinkedin/>,link :socials[3]},
                  ]
                }/>
               

              })
            }
          </div>
        </section>


    </div>
  )
}

export default Trainers