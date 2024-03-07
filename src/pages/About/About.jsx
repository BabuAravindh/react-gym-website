import React from 'react'
import './About.css'
import Header from '../../Components/Header'
import HeaderImage  from '../../images/header_bg_1.jpg'
import  VisionImage from '../../images/about2.jpg'
import  storyImage from '../../images/about1.jpg'
import  MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <div>
        <Header  title="About us" image={HeaderImage}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatibus doloribus consequuntur explicabo fugit. Quidem dolor nostrum, 
        </Header>
        <section className="about_story">
          <div className="contianer about_story-container">
            <div className="about_section-image">
              <img src={storyImage} alt="story" />
            </div>
            <div className="about_section-content">
              <h1>Our Story</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis exercitationem praesentium dolorum temporibus? Doloribus consequatur quisquam aperiam  
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima excepturi totam perspiciatis nulla laudantium dolores est vitae sint, provident error, dolorum similique. Quam nobis 
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, distinctio nihil, fuga id reprehenderit at eos consequatur culpa amet porro, veritatis qui maiores officiis sed. 
              </p>
              </div>         
               </div>
        </section>
        <section className="about_vision">
          <div className="contianer about_vision-container">
            
            <div className="about_section-content">
              <h1>Our Vision</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis exercitationem praesentium dolorum temporibus? Doloribus consequatur quisquam aperiam quidem deleniti explicabo non vero impedit, ullam corrupti cupiditate sequi mollitia placeat.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima excepturi totam perspiciatis nulla laudantium dolores est vitae sint, provident error, dolorum similique. Quam nobis odit alias est, dolores quia quidem!
              </p>
              
              </div> 
              <div className="about_section-image">
              <img src={VisionImage} alt="our vision image" />
            </div>        
               </div>
        </section>
        <section className="about_mission">
          <div className="contianer about_mission-container">
            <div className="about_section-image">
              <img src={MissionImage} alt="story" />
            </div>
            <div className="about_section-content">
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis exercitationem praesentium dolorum temporibus? Doloribus consequatur quisquam aperiam quidem deleniti explicabo non vero impedit, ullam corrupti cupiditate sequi mollitia placeat.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima excepturi totam perspiciatis nulla laudantium dolores est vitae sint, provident error, dolorum similique. Quam nobis odit alias est, dolores quia quidem!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, distinctio nihil, fuga id reprehenderit at eos consequatur culpa amet porro, veritatis qui maiores officiis sed. Omnis numquam a tenetur placeat!
              </p>
              </div>         
               </div>
        </section>
        
    </div>
  )
}

export default About