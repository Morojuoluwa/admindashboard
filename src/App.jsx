import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OverView from './components/OverView'
import Products from './components/Products'
import SideBar from './components/SideBar'

const App = () => {
  return (

    <div className=' flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from gray-900 via-gray-800 to gray-900 opacity-80'/>
        <div className=' absolute inset-0 backdrop-blur-md'/>
        <SideBar/>
      </div>
      <Routes>
        <Route path='/' element={<OverView/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App