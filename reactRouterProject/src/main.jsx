import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github ,{getInfo} from './components/Github/Github.jsx'


let router=createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'Contact',
        element:<Contact />
      },
      {
        path:'User/:userid',
        element:<User/>
      },
      {
        
        path:'Github',
        element:<Github/>,
        loader:getInfo
      },
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)