import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider,} from "react-router-dom";
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Github from './component/Github.jsx'
import User from './component/User.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='github' element={<Github/>} />
        <Route path='user/' element={<User/>} >
        <Route path=':userid' element={<User/>}/>
        </Route>
          
        <Route/>
    </Route>
  )
)
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
