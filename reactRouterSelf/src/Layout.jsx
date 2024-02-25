import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    {/* <div>Layout</div> */}
    <Header/>
    <Outlet/>
    <Footer/>

    </>
    
  )
}

export default Layout