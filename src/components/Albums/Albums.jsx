import React from 'react'
import './Albums.scss'
const Albums = ({album}) => {
console.log('estos son los albumes en componente album =>',album);

const image = album.map((item)=>item.images)

console.log(image);
  return (
    <div>{album.map((item,index)=>
   item.images.map((imagen)=>
   imagen.width === 640 ? (
       <div key={index}>
           <h4>{item.name}</h4>
           <h5>{item.release_date}</h5>
           <img src={imagen.url} alt=""  className='imagen_album'/>
       </div>
   ): null
   )
        )}</div>
  )
}

export default Albums