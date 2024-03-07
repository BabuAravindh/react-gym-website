import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'

import './plans.css'
const Plans = () => {
  return (
    <div>
      <Header title="membership plans" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus modi saepe voluptatem nulla praesentium est. 
      </Header>
      <section className="plans">
        <div className="container plans_container">
          {
            plans.map(({id,name,desc,price,features})=> {
              return <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1><h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    features.map(({feature,available},index) => {
                        return <p key={index} className={!available ? 'disabled' : ''}>
                          {feature}
                        </p>  
                    })
                  }
                <button className='btn lg'>Chosse Plans</button> 
              </Card>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Plans
