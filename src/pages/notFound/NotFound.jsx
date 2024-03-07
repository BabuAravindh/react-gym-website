import React from 'react'
import {Link } from 'react-router-dom'
import './notFound.css'
const notFound = () => {
  return (
      <section>
        <div className="container notfound_container
        ">
          <h2>page not found</h2>
          <Link to="/" className='btn lg'>Go Back Home</Link>
        </div>
      </section>
  )
}

export default notFound