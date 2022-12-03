import React from 'react'
import video from './drywst.mp4'
import img4 from './coruselImg/4.png'
export default function DryWaste() {
  return (
    <div className='pages' id='drys'>
      <div>
        <img src={img4} alt="" id='qw'/>
      </div>
      <video autoPlay loop muted src={video} id='nmsa'></video>

    </div>
  )
}
