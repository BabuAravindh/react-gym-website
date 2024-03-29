import React from 'react'
import MainHeader from '../../Components/MainHeader'
import './Home.css'
import Programs from '../../Components/programs'
import Values from '../../Components/Values'
  import FAQs from '../../Components/FAQs'
import Testimonials from '../../Components/Testimonials'

  
const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs/>
      <Values />
      <FAQs/>
      <Testimonials/>
      
    </>
  )
}

export default Home
