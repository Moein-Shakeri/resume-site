import React , {useState}from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import MovieList from '../MovieList/MovieList'
import './Home.css'
import useCollapse from 'react-collapsed'
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import img1 from '../../img/Filmax/movie/ma-9.jpg'
import {trailer1,trailer2,trailer3} from '../Data/DataMovie'
import {FaInfoCircle} from  "react-icons/fa"
import {BsPlayCircle} from  "react-icons/bs"
import Nav from '../NavBar/Nav'



function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [state , setState]= useState({
    errFilter : false,
  })
  
  let navigate = useNavigate()
const HandleFilter = (e)=>{
  
  e.preventDefault()
  


if (e.target[0].value == "سال ساخت"|| e.target[1].value == "ژانر"|| e.target[2].value =="کشور سازنده" ) {
  setState({...state,errFilter : true})
  setTimeout(() => {
    setState({...state,errFilter : false})
    
  }, 3000);
}else{

  navigate('filter' , {state : {year : e.target[0].value ,genre : e.target[1].value ,country :e.target[2].value}})
}


}

const ShowErr = ()=>{if (state.errFilter == true) {
 return (<div className=' position-absolute start-0 w-25 bg-danger p-2 ms-5 badge '>لطفا تمام مقادیر را پر کنید</div>)
}else{
  return <></>
}
}


return (
  <div className="collapsible bg-black row ">
      <div className="header ">
          {isExpanded ? <button className='cta me-5 ' {...getToggleProps()}> 
          <span>فیلتر</span>
          <i className="bi bi-filter"></i>
          </button> 
          :<button className='cta me-5 ' {...getToggleProps()}> 
          <span>فیلتر</span>
          <i className="bi bi-filter"></i>
          </button>}
      </div>
      <div {...getCollapseProps()} className='position-relative '>
          <form className="content row align-items-center" onSubmit={HandleFilter}>

            {
              <ShowErr/>
          }
            

            

            <div className='col-2 '>
          
              <select className= "form-select fild-filter position-relative text-center " >
                <option selected className='m-5 '>سال ساخت</option>
                <option defaultValue="2020">2020</option>
                <option defaultValue="2021">2021</option>
                <option defaultValue="2022">2022</option>
              </select>
            </div>
            <div className='col-2 '>
              <select className="form-select fild-filter text-center" >
                <option selected>ژانر</option>
                <option defaultValue=".">ترسناک</option>
                <option defaultValue="..">کمدی</option>
                <option defaultValue="...">ماجراجویی</option>
              </select>
            </div>
            <div className='col-2 '>
              <select className="form-select fild-filter text-center" >
                <option selected>کشور سازنده</option>
                <option defaultValue=".">ایران</option>
                <option defaultValue="..">امریکا</option>
                <option defaultValue="...">دیگر کشور ها</option>
              </select>
            </div>
            <div className='col-2'>
                  <button  className='border-0 btn style-btn text-white' type='submit'>                
                    جستجو                             
                  </button>
            </div>
        
          </form>
      </div>
  </div>
  );
}







const Home = () => {
  const [state , setState]= useState({
    rigestered:localStorage.getItem("userinfo")
  })

 

  return (
    <>
      
      <Nav registered={state.rigestered}/>

      <div className='  w-100'>
        <Collapsible/>
      </div>

      
      <div className='row'>
        <div className='col-lg-5  p-0 bg-black'>
            <div className='m-4 text-white fs-5 fw-bold'>
                تریلر مورد انتظار ترین فیلم ها
            </div>
            <div className='d-flex h-100  justify-content-center align-items-center'>
              <Trailer/>
            </div>
         
        </div>
        <div className='col-lg-7 col-md-12 p-0 overflow-hidden'>
          <div className="card bg-black text-white d-flex w-100 h-100 position-relative img-cont">
            <div className=' position-absolute top-0 bottom-0 start-0 end-0'>
              <img src={img1} className="img-home h-100" alt="..."/>
            </div>
            <div className="position-absolute bottom-0 d-flex justify-content-center align-items-center">
              <div className='mx-3'>
                <h2 className="fw-bold">بتمن در برابر سوپر من</h2>
                <p className="text-muted fs-4">محبوب ترین فیلم این هفته , از نظر مخاطبین </p>
              </div>
              <div className='icon-play mb-3 p-0'>
                <BsPlayCircle/>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='container-fluid bg-black py-4 overflow-hidden pt-5 px-0'>
        <span className='text-white col-2 me-3'>سریال های به روز </span>
        <MovieList type="series"/>
      </div>

      <div className='container-fluid bg-black p-0 py-4 '>
        <span className='text-white col-2 me-3'>فیلم های اکشن </span>
        <MovieList type="movieAc"/>
      </div>

      <div className='row'>
        <div className='col-3'>
        </div>
        <div className='col-3'>
        </div>
        <div className='col-3'>
        </div>
      </div>
    </>  
  )
}




const Trailer = ()=>{
  const trailers = [trailer1,trailer2,trailer3]
  return(
    <div className='h-100 overflow-hidden  '>
    {trailers.map((trailer)=>{
      return(

      <div className='w-75 m-auto trailer-cont overflow-hidden row flex-row-reverse bg-black my-3 align-items-center '>
        <div className='col-3 h-100'>
          <img className='w-100 h-100' src={trailer.img}/>
        </div>
        <Link to="infoMovie" state={trailer} className='col-1 ms-1 fs-3 cursor-pointer text-white' >
          <FaInfoCircle/>
        </Link>
        <div className='col-7 text-light '>
          <Link to="infoMovie" state={trailer} className='text-decoration-none text-reset'>
            {trailer.name}
          </Link>
          <p className='text-truncate mt-3 about-trailer'>
            {trailer.aboutMovie}
          </p>
          <div>
            <span className='badge rounded-pill color-tag'>
              تریلر
            </span>
            <span className='badge rounded-pill color-tag mx-2 '>
              {trailer.genre}
            </span>
          </div>
        </div>
      </div>
      )
    })}
    </div>
  )
}
export default Home