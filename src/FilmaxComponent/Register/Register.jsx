import React ,{useState}from 'react'
import Joi from 'joi'
import Nav from '../NavBar/Nav'
import Input from '../../Input'
import Registered from './Registered'

export const Register = () => {
  
const [state , setState] = useState({
  formRegister:{
    email:"",
    username:"",
    pass:"",
    repass:"",
  },
  errors : {
    passDifferent : false
  },
  loadingGif : false
  ,submitForm:localStorage.getItem("userinfo") 
})

  const schema = Joi.object({
    email : Joi.string().required(),
    username : Joi.string().required(),
    pass : Joi.string().required(),
    repass : Joi.string().required(),
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    const {error}= schema.validate(state.formRegister,{abortEarly :false})
    
    const errors = {passDifferent : false} 
    if(error){
      for (const err of error.details) {
        errors[err.path] = err.message     
      }
      setState({...state,errors})
      return 
    }else if (!error) {
      const pass1 = state.formRegister.pass
      const pass2 = state.formRegister.repass
      
      if(pass1!=pass2){ 
        errors.passDifferent=true 
        setState({...state,errors})
        return}
      
    }
    setState({...state,loadingGif:true})
    localStorage.setItem("userinfo",JSON.stringify(state.formRegister))
    const submitForm = localStorage.getItem("userinfo")
    setTimeout(() => {
      setState({...state,
        loadingGif:false,
        submitForm,
        errors:{passDifferent : false},
        formRegister:{
          email:"",
          username:"",
          pass:"",
          repass:"",
        }})
      
    }, 1000)

}

  

const handleValueInput = ({target:input})=>{
  const formRegister = state.formRegister
  
  formRegister[input.id] = input.value
  
  setState({...state,formRegister})
  
}


const exitAcc = ()=>{
  localStorage.removeItem("userinfo")
  const submitForm =false
  setState({...state,submitForm})
}



  return (
    <div className='overflow-hidden'>
      <Nav registered={state.submitForm}/>
      <div className='row width-100 '>
          <div className='bg-black vh-100 pt-4 col-12 col-lg-6  d-flex flex-column align-items-center justify-content-center'>
            <h1 className='fw-bold text-white fs-1 '>F i l l Max</h1>
            {
     
              state.submitForm ? <Registered exitAcc={exitAcc}/>
              :<form className='p-5 bg-warning rounded form-register-container' onSubmit={handleSubmit}>
                {(()=>{if (Object.keys(state.errors).length != 1) {
                      return<ErrorReqShow errors ={state.errors}/>
                  }else if(state.errors.passDifferent){
                  return <ShowErrorPass/>
                  }
                  }
                )()}
                <div className='my-4'>
                  <Input 
                  label="ایمیل"
                  value={state.formRegister.email}
                  id='email' 
                  onChange={handleValueInput} 
                  type="email"
                  classLabel='form-label'
                  classInput='form-control rounded-pill'/>
                </div>
                <div className='mb-4 '>
                  <Input 
                  label="نام کاربری" 
                  value={state.formRegister.username}
                  id='username' 
                  onChange={handleValueInput} 
                  type="text"
                  classLabel='form-label'
                  classInput='form-control rounded-pill'/>
                </div>
                <div className='mb-4'>                  
                  <Input 
                  label="رمز عبور" 
                  value={state.formRegister.pass}
                  id='pass' 
                  onChange={handleValueInput} 
                  type="password"
                  classLabel='form-label'
                  classInput='form-control rounded-pill'/>
                </div>
                <div className='mb-4'>
                  <Input
                  label="تکرار رمز عبور" 
                  value={state.formRegister.repass}
                  id='repass' 
                  onChange={handleValueInput} 
                  type="password"
                  classLabel='form-label'
                  classInput='form-control rounded-pill'/>
                </div>
                <div className='d-flex justify-content-center'>
                  {state.loadingGif ? <div className='loader '>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div> :<button className='btn btn-success px-4 ms-3 ' type='submit'>ثبت نام</button>}
                </div>
              </form>
              }                     
          </div>
          

          <div className='col-12 col-lg-6 vh-100 d-flex justify-center align-items-center about-us'>
                <div className='p-4'>
                  <h2 className='text-white'>درباره ما</h2>
                  <p className='p-3 text-white'>
                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاو.
                  </p>
                </div>
          </div>


      </div>
    </div>  
  )

}


  const ErrorReqShow = ({errors})=>{
      
    let nameErr = ""
    const error = Object.keys(errors)
    console.log(errors)
    error.map(err=>{
      if (err == "email") nameErr = nameErr + "ایمیل"
      console.log(err)
      if (err == "username") nameErr ?nameErr = nameErr +" و نام کاربری " :nameErr = nameErr + "نام کاربری"
      console.log(err)
      if (err == "pass")  nameErr ?nameErr =  nameErr+"و رمز عبور " :nameErr =  nameErr + "رمز عبور "
      console.log(nameErr)
      if (err=="repass")  nameErr ?nameErr =  nameErr+"و تکرار رمز عبور " :nameErr =  nameErr + "تکرار رمز عبور"
      console.log(nameErr)
    })

    return (
      <div className='alert alert-danger'>
        <span className=' mb-4 p-1 fs-5'>لطفا {nameErr} خود را پر کنید</span>
      </div>
    )
  }

  const ShowErrorPass = ()=>{
    return(
      <div className='alert alert-danger'>
        <span className='mb-4 p-1 fs-5'> رمز عبور مطابقت ندارد</span>  
      </div>
    )
  }