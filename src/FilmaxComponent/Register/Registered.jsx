import React from 'react'

const Registered = ({exitAcc}) => {
  return (
    <div className='w-100 h-100 registred d-flex justify-content-center align-items-center rounded '>
      <div className="card text-white bg-black p-2 px-3 mx-3 mb-5">
        <h3 className="card-header border-bottom my-2">خوش آمدید!!!</h3>
        <div className="card-body">
          <h4 className="card-title badge bg-success fs-5 my-2">شما عضو سایت هستید</h4>
          <p className="card-text my-2">متن ساختگم با تولید لورم متن ساختگرم با تولید سادگی نامفهوم از صنعت طراحی اساسا مورد استفاده قرار گیرد. با تولید سادگی نامفهوم از صنعت طراحی اساسا مورد استفاده</p>
          <a href="#" className="btn btn-danger my-2" onClick={exitAcc}>خروج از سایت</a>
        </div>
      </div>
    </div>
  )
}

export default Registered