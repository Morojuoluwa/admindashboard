import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OverView from './components/OverView'
import SideBar from './components/common/SideBar'
import ProductsPage from './components/pages/ProductPage'
import UsersPage from './components/pages/UsersPage'
import SalesPage from './components/pages/SalesPage'
import OrdersPage from './components/pages/OrdersPage'

const App = () => {
  return (

    <div className=' flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from gray-900 via-gray-800 to gray-900 opacity-80'/>
        <div className=' absolute inset-0 backdrop-blur-md'/>
      </div>
      <SideBar/>
      <Routes>
        <Route path='/' element={<OverView/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/sales' element={<SalesPage/>}/>
        <Route path='/orders' element={<OrdersPage/>}/>
      </Routes>
    </div>
  )
}

export default App