import React, { useEffect, useState } from 'react'

function Github() {
const [data,setData]=useState([])
useEffect(()=>{
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response)=>response?response.json():error)
    .then(data=>{
        console.log(data)
        setData(data)
    
    })
    .catch(error=>{
        console.log(error)
    })


},[])
    


  return (
    <div className='bg-orange-400 text black p-4 text-center text-3xl'>github name: {data.name}</div>
  )
}

export default Github