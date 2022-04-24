import React from 'react'
import { useSelector } from 'react-redux'

const SeeText = () => {
    const firstname = useSelector((state)=>state.innerText)
    console.log(firstname.text);
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <span>{firstname.text}</span>
        <span>lastname</span>
    </div>
  )
}

export default SeeText