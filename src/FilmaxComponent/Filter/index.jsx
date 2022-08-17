import React from 'react'
import { useLocation } from 'react-router-dom'
import CoverMovie from '../CoverMovie'
import {s1,s2,s3,s4,s5,s6,s7,s8,ma1,ma2,ma3,ma4,ma5,ma6,ma7,ma8} from '../Data/DataMovie'
import Nav from '../NavBar/Nav'


const Filter = () => {

  const movies =[s1,s2,s3,s4,s5,s6,s7,s8,ma1,ma2,ma3,ma4,ma5,ma6,ma7,ma8]

  let location = useLocation()

  const year = location.state.year
  const country = location.state.country
  const genre = location.state.genre
  


  let ids = []
  const FilterMovie = ()=>{
    if (country == "دیگر کشور ها") {
      
     return( movies.map((n)=>{
        if (year == n.year & genre == n.genre ) {
          return( 
            <div className='col-4 col-md-2 mt-3 p-4'>
             <CoverMovie {...n}/>
           </div>
         )  
        }
      }))
    }else{
      return( movies.map((n)=>{
          if (year == n.year & genre == n.genre & country == n.country) {
            ids.push(n.id)
            if (ids.length === 0) {
              
            }
            return( 
              <div className='col-4 col-md-2 mt-3 p-4'>
                <CoverMovie {...n}/>
              </div>
            )  
          }
          
        }))
      }   
      
    }


    
    

  return (
    <>
      <Nav/>
      <div className='row vh-100 bg-black '>

          <FilterMovie/>
      </div>
    </>
    
  )
}

export default Filter