import React from 'react'
import CoverMovie from '../CoverMovie'
import {s1,s2,s3,s4,s5,s6,s7,s8,ma1,ma2,ma3,ma4,ma5,ma6,ma7,ma8} from '../Data/DataMovie'



const MovieList = ({type}) => {
    const series =[s1,s2,s3,s4,s5,s6,s7,s8]
    const movieAc =[ma1,ma2,ma3,ma4,ma5,ma6,ma7,ma8]

    let result =[]
    switch (type) {
        case "series":
            result = series
            break;
        case "movieAc":
            result = movieAc
            break;
    }
   
  return (

    
    <div className='container-md row mx-auto p-0'>
        <div className='p-0 row mt-3 py-2 justify-content-center'>
                { result.map(n=>{
                    
                return(
                    <div className='col-lg col-sm-3 col-5 mb-5'>
                        <CoverMovie {...n} />                 
                    </div>)
                })}
        </div>
    </div>
  )
}

export default MovieList