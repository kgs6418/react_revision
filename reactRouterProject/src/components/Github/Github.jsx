import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github(){
    let data=useLoaderData()
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return(
        <>
            <div className='bg-gray-700 text-white  p-3'>Github Followers:{data.followers}
            <img  src={data.avatar_url} alt="" width={200} />
            </div>
        </>
    )
}
export default Github

export const getInfo=async()=>{
    let res=await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()


}
