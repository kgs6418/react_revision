import React, { useState } from 'react'
import  MyContext  from './context'

function MyContextProvider({children}){
    let[counter,setCounter]=useState(0)

    return(
        <MyContext.Provider value={{counter,setCounter}}>
            {children}
        </MyContext.Provider>
    )

}
export default  MyContextProvider
