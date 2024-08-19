import React from 'react'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import InfoContent from './Components/InfoContent'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='bg-black text-white h-full'>

      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:MealId' element={<InfoContent/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App