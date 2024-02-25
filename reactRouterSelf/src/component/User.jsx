import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const{userid}=useParams()
  return (
    <div className='bg-orange-400 text-black p-4 text-3xl text-center'>user:{userid}</div>
  )
}

export default User
