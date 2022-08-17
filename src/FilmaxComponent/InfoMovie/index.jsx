import React ,{ useState }from 'react'
import { useLocation } from 'react-router'
import Nav from '../NavBar/Nav'
import {FiPlayCircle} from 'react-icons/fi'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import {TiDeleteOutline} from 'react-icons/ti'
import {MdOutlineDeleteForever,MdOutlineAddComment} from 'react-icons/md'
import img1 from '../../img/New folder/mn-1.jpg'
import img2 from '../../img/New folder/mn-2.jpg'
import img3 from '../../img/New folder/mn-3.jpg'
import img4 from '../../img/New folder/mn-4.jpg'
import Input from '../../Input'


const InfoMovie = () => {

  const [state , setState] = useState({
    localStorageMovie : [],
    changeBtnAddLocal : 1,
    commentValue:"",
    comments :[],
    rigestered:JSON.parse(localStorage.getItem("userinfo"))
  })


    const location = useLocation()
    
    

    const getLocalS = ()=>{
      let movieLocal;
      if (localStorage.getItem('movie')) {
        movieLocal = JSON.parse(localStorage.getItem('movie'))
      }else{
        movieLocal = []
      }


      return movieLocal
    }


    const removeLocal = ()=>{
      const getLocal = getLocalS()
      getLocal.map((movie,index) =>{
        if (movie.id === location.state.id) {
          setState({...state , changeBtnAddLocal : state.changeBtnAddLocal + 1})
          getLocal.splice(index,1) 
        }
      })
      localStorage.setItem("movie",JSON.stringify(getLocal))

    }
    
    const setLocalS = () => {
      
      const movieSave={
        text:location.state.text,
        img:location.state.img,
        name:location.state.name,
        view:location.state.view,
        year:location.state.year,
        country:location.state.country,
        aboutMovie:location.state.aboutMovie,
        imdb:location.state.imdb,
        id : location.state.id,
      }
      const getMovieLocal = getLocalS()
      
      getMovieLocal.push(movieSave)
            
      localStorage.setItem("movie",JSON.stringify(getMovieLocal))
      setState({...state , changeBtnAddLocal : state.changeBtnAddLocal + 1})
    
    }

   const checkLocal = () =>{
    const getMovie = getLocalS()
     
    
    const btnType = (getMovie.map((movie)=>{
       if (movie.id === location.state.id ) {
        return false
      }else{
        return true
      }
 
     }))
     
     return btnType
    }
    

    const HandelSaveBtn = ()=>{
      
      

      const getCheckLocal = checkLocal()
      
      const btnType =getCheckLocal.find (item=> item === false )
  
      if (btnType ===false ) {
       return(<button  className='btn btn-danger text-white rounded-pill m-1 btn-sm ' onClick={removeLocal}>
               حذف از موردعلاقه<MdOutlineDeleteForever/>
              </button>)
      }else{
       return(           
        <button  className='btn btn-success text-white rounded-pill m-1 btn-sm 'onClick={setLocalS}>
          مورد علاقه<BsBookmarkHeartFill/>
        </button>
        )
      }

      
    }  
    HandelSaveBtn()




    // add comment 
    const handleInputValue = ({target : input}) =>{
      
      setState({...state,
      commentValue : input.value
      })
    }
    
    const submitComment = ()=> {

      
      if (state.commentValue !=="") {
        const comments = state.comments
        const comment ={
          note:state.commentValue,
          id: Math.floor( Math.random() * 100)
        }  
        comments.push(comment)
        setState({...state,commentValue: "",comments})
        
      }
    }
    
    const removeItem =(id)=>{
      const comments = state.comments.filter((comment)=>comment.id !== id)
      setState({...state,comments})

    }


    

    return (
      
  <>
    <Nav registered={state.rigestered}/>
   
    <div className='bg-black overflow-hidden'>
      <div className='row justify-content-center'>
        <div className="card bg-dark mb-3 col-lg-4 col-10 m-4 p-4 justify-content-center">
          <div className="row g-0 h-auto justify-content-center align-items-center">
            <div className="col-5 d-flex align-items-center img-cont-infoMovie">
              <img src={location.state.img} className="img-fluid  rounded-start" />
            </div>
            <div className=" col-7">
              <div className="card-body">
                <h4 className="card-title text-white fw-bold">{location.state.name}</h4>
                <div className='my-4 '>  
                    <span className='badge rounded-pill bg-warning'>{location.state.imdb} IMDB</span>
                    <br/>
                    <span className='badge rounded-pill bg-info'>{location.state.view} نفر تماشا کردند</span>
                    <br/>
                    
                </div>  
                <div className='mb-3 d-flex flex-column'>  
                    <span className='text-muted'>
                     ژانر :  {location.state.genre}
                    </span>
                    <span className='text-muted'>کارگردان :کریستوفر نولان </span>
                    <span className='text-muted mt-1'> محصول {location.state.country} - {location.state.year}</span>
                  </div>  
                <p className="card-text"><small className="text-muted"> </small></p>
                
              </div>
            </div>
            <div className='col-12 d-flex'>
              <a  className='btn style-btn text-white m-1'>
                  تماشا<FiPlayCircle/>
              </a>

              <HandelSaveBtn/>
             
            </div>
          </div>
          <div className='mt-5 py-3'>
            <p className="text-muted">{location.state.aboutMovie}</p>
          </div>
        </div>


        <div className='col-10 col-lg-6 row m-4  mt-5'>
            <div className='col-6 my-2'>
              <img className='w-100' src={img1}/>
            </div>
            <div className='col-6 my-2'>
              <img className='w-100' src={img2}/>
            </div>
            <div className='col-6 my-2'>
              <img className='w-100' src={img3}/>
            </div>
            <div className='col-6 my-2 '>
              <img className='w-100' src={img4}/>
            </div>
        </div>
      </div>  


          
          
          

  
        <div className='row justify-content w-100'>
          <h4 className='w-100 text-white p-3'>ستارگان:</h4>
          <div className='col-md-3 col-6  bv mt-4'>
            <span className='badge bg-secondary p-2 fs-6 rounded-pill me-4'> بازیگر اول</span>
          </div>
          <div className='col-md-3 col-6 mt-4'>
            <span className='badge bg-secondary p-2 fs-6 rounded-pill me-4'> بازیگر دوم</span>
          </div>
          <div className='col-md-3 col-6 mt-4'>
            <span className='badge bg-secondary p-2 fs-6 rounded-pill me-4'> بازیگر سوم</span>
          </div>
          <div className='col-md-3 col-6 mt-4'>
            <span className='badge bg-secondary p-2 fs-6 rounded-pill me-4'> بازیگر چهارم</span>
          </div>
        </div>

        <div className='w-100 m-auto d-flex align-items-center flex-column mt-5 p-4'>
          <h3 className='text-light'>نظرات کاربران</h3>
          <div className=' m-auto mt-2 position-relative input-infoMovie'>
            <Input
            classInput='form-control bg-dark text-warning w-100'
            disabled={state.rigestered ? false : true}  
            value={state.commentValue} 
            onChange={handleInputValue}
            placeholder={state.rigestered ? "لطفا نظر خود را درباره ی فیلم بنویسید.":"لطفا ابتدا در سایت ثبت نام کنید"}/>
            <button className='position-absolute top-0 start-0 h-100 px-2  bg-success text-white fs-5 border-white ' type='submit' onClick={submitComment}><MdOutlineAddComment/></button>
          </div>
          <ul className='w-75 m-auto mt-5 list-group '>
            {state.comments.map(comment => {
              return (
                <Comment note = {comment.note} id = { comment.id} name={state.rigestered.username} onClick={()=>removeItem(comment.id)}/>
              )
            }) }
          </ul>
        </div>



    </div>
  </>
  )
}


const Comment =({note , id,onClick ,name})=>{


  return (
      <li key={id} className="list-group-item bg-dark text-white p-2 d-flex justify-content-between" > 
        <div>
          <h5 className='text-muted fw-bold'>{name}</h5>
          <p className='text-light mt-4 mb-0'>{note}</p>
        </div>
        <div className='text-danger d-flex align-items-center fs-2'>
          <a onClick={onClick}>
            <TiDeleteOutline/>  
          </a>
        </div>
      

      </li>
  )
}

export default InfoMovie