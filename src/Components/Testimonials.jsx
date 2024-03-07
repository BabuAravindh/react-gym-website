import React from 'react'
import SectionHead from './SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonial } from '../data'
import { useState } from 'react'
const Testimonials = () => {

    const[index,setIndex] =useState(1)
     const {name,quote,job,avatar}=testimonial[index];


     const prevTestimonialHandler = () => {
            setIndex(prev => prev -1);
            if(index <= 0){
                setIndex(testimonial.length -1)
            }
     }
     const nextTestimonialHandler = () => {
        setIndex(prev => prev +1);

        if(index >= Testimonials.length -1){
            setIndex(0);
        }
     }

  return (
    <section className="testimonials">
        <div className="container testimonials_container">
            <SectionHead icon={<ImQuotesLeft/>} title="testimonials" className="testimonials_head"/>
            <Card className="testimonials">
                <div className="testimonial_avatar">
                 <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonials_quote">
                        {`"${quote}"`}
                    </p>
                   
                    <small className="testimonial_title">
                    <h5>{name}</h5>
                        {job}
                    </small>
            </Card>
            <div className="testimonials_btn-container">
                <button className="testimonials_btn" onClick={prevTestimonialHandler}>
                    <IoIosArrowDropleftCircle/>
                </button>
                <button className="testimonials_btn" onClick={nextTestimonialHandler}>
                    <IoIosArrowDroprightCircle/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials