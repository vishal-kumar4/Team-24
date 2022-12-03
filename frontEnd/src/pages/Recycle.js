import React from 'react'
import recycle from './Recycle.mp4'
import imagee from './rchs.png'

export default function Recycle() {
  return (
    <div className='pages' style={{opacity:"100%"}}>
      <img src={imagee} alt="/" id='pops'/>
      <video autoPlay loop muted src={recycle} id='opls' style={{position:'absolute' , right:'0px'}}></video>
      </div>
  )
}
