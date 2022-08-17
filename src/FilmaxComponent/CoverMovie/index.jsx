import React from 'react'
import { Link } from 'react-router-dom'



const CoverMovie = ({img , text , country , year,imdb ,name,view, aboutMovie ,id}) => {
  return (
    
        <Link to="/filmax/infoMovie" state={{img:img , text:text ,country:country,year:year ,imdb:imdb , name:name,view:view , aboutMovie:aboutMovie ,id:id}} className='d-flex flex-column text-decoration-none text-muted coverMovie-cont'>
            <div className='OverlayContainer'>
              <img src={img} className="w-100 img-coverMovie"/>
              <div className='overlay d-flex flex-column align-items-start justify-content-end'>
                  <span className='imdb rounded-pill bg-light text-dark opacity-75 p-1 mb-1'> {imdb} imdb </span>
                  <span className='mb-2'>{country} | {year} </span>
              </div> 
            </div>
            <span className='description'>{text}</span>
        </Link>
  )
}

export default CoverMovie