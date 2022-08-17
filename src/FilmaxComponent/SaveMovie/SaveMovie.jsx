import React ,{useState }from 'react'
import Nav from '../NavBar/Nav'
import CoverMovie from '../CoverMovie'

const SaveMovie = () => {
    const [state , setState]= useState({
        rigestered:localStorage.getItem("userinfo")
      })
    const movieData =JSON.parse( localStorage.getItem('movie'))
    
    

    console.log(movieData)

    return (
<div className="vh-100 bg-black w-100 overflow-hidden">

    <Nav registered={state.rigestered}/>

    <div className=' row mt-5 container-md mx-auto'>
        {movieData && movieData.map((movie)=>{
           return(
               <div className='col-4 col-md-3'>
                    <CoverMovie img={movie.img} name = {movie.name}
                    year = {movie.year} 
                    aboutMovie = {movie.aboutMovie} 
                    imdb = {movie.imdb}
                    country = {movie.country}
                    view = {movie.view}  
                    id = {movie.id}
                    key={movie.id}
                    text={movie.text}
                    />
                </div>
            )
        })}
    </div>
</div>
  )
}

export default SaveMovie