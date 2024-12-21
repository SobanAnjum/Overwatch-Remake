import React from 'react'
import './VideoTab.css'

const VideoTab = ({
    index,
    isActive,
    onClick
    
}) => {
  return (
    <>
    <div id="outer-box" className={`hover:scale-125 transition-all duration-300 ease-in-out ${isActive?"bg-red-700":"bg-white"}`} onClick={onClick} >
        <div id="inner-box">
<div className='container hover:scale-150 transition-all duration-500 ease-in-out'>
<video src={`/public/Videos/Hero-${index}.mp4`} loop muted className='size-36 bg-cyan-50 object-cover '></video>
</div>

        </div>
    </div>
    
    </>
  )
}

export default VideoTab