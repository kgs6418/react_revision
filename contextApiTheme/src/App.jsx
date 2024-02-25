import React, { useEffect } from 'react';
import './App.css'
import ThemeContextProvider from './context.js/ThemeContextProvide'

import Theme from './components/Theme';


function App() {
  


  return (
    <ThemeContextProvider>
     <h1>Theme changer</h1>
     <Theme/>
    </ThemeContextProvider>
  )
}

export default App
