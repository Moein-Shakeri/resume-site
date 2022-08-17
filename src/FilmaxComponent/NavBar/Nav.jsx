import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'

const Nav = ({registered}) => {
    const [state , setState] = useState({
        registered:localStorage.getItem("userinfo") 
    })
   
  return (<>    
  

   <nav className='navbar bg-black sticky-top nav-cont'>
       <div className='container-fluid px-5 d-flex justify-content-between align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
            <ul className='nav justify-content-center align-items-center' >
                <Link to="/filmax" className='navbar-brand logo text-white style-logo  fs-4'>
                            F i l l M a X
                </Link>
                <li className="nav-item nav-li">
                    <Link to="/filmax" className="nav-link ">خانه</Link>
                </li>
                <li className="nav-item nav-li">
                    <Link to="/filmax/saves" className="nav-link"  >موردعلاقه</Link>
                </li>
                
                <li className='nav-item  me-md-1 mb-1'>
                    {registered ? <></> :<Link className="btn-nav btn mx-2 style-btn text-light mt-1 " to="/filmax/register">ثبت نام</Link>} 
                </li>
            </ul>
            <div className='d-flex align-items-center justify-content-end'>
                
                
                <Link to="/filmax/register" className={registered ? " cursor-pointer  text-success icon-acc":" cursor-pointer  text-red icon-acc"}>
                    <FaUserAlt/>
                </Link>
                


            </div>
        </div>
   </nav>
  
   </>
)
}

export default Nav