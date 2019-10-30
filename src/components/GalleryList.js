import React from 'react'


const GalleryList = (props) => {
 // recieve props magically from the App.js
 // haha... habibis look at the App.js
 // I am receiving props from App.js the props is the result of find method
  return (
   <div className="mt-3">
    <img src={props.movie.images.md} alt={props.movie.name}/>
    <h3>{props.movie.name}</h3>

   </div>
  )
}

export default GalleryList