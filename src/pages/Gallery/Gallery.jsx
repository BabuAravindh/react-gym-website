import React from 'react'
import './Gallery.css'
import Header from '../../Components/Header'
import HeaerImage from '../../images/header_bg_3.jpg'


const Gallery = () => {

  const galleryLength = 15;
  const images =[]
  
  for(let i=0;i< galleryLength;i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }



  return (
    <div>
      <Header title="Our Gallery" image={HeaerImage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat veniam molestias quam. Deleniti labore recusandae inventore itaque,

      </Header>
      <section className="gallery">
        <div className="container gallery_container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery image ${index +1}`} />
            </article>
          })
        }

        </div>
      </section>
    
    </div>
  )
}

export default Gallery