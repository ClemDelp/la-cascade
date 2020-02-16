import React from "react";
import image1  from '../images/galerie/image1.jpeg'
import image2  from '../images/galerie/image2.jpeg'
import image3  from '../images/galerie/image3.jpeg'
import image4  from '../images/galerie/image4.jpeg'
import image5  from '../images/galerie/image5.jpeg'
import image6  from '../images/galerie/image6.jpeg'
import image7  from '../images/galerie/image7.jpeg'
import image8  from '../images/galerie/image8.jpeg'
import image9  from '../images/galerie/image9.jpeg'

export default function Galerie() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
  ]
  return (
    <div className='center'>
      {
        images && images.map((image, i) => {
          return (
            <img
              key={i}
              className='p1'
              src={image}
            />
          )
        })
      }
    </div>
  );
}
