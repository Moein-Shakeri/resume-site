import React, { Component } from 'react'
import Home from './pages'
import "./app.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Filmax from './pages/Filmax'
import InfoMovie from './FilmaxComponent/InfoMovie'
import SaveMovie from './FilmaxComponent/SaveMovie/SaveMovie'
import Filter from './FilmaxComponent/Filter'
import { Register } from './FilmaxComponent/Register/Register'
import Works from './Component/Works'
import About from './Component/AboutMe'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='/Works' element={<Works/>}/>
            <Route path='/' element={<About/>}/>
            
          </Route>

          <Route path='filmax' element={<Filmax/>}/>
          <Route path='filmax/filter' element={<Filter/>}/>
          <Route path='filmax/infoMovie' element={<InfoMovie/>}/>
          <Route path='filmax/saves' element={<SaveMovie/>}/>
          <Route path='filmax/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

