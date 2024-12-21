import {useState} from 'react'
import './Hero.css'
import VideoTab from '../VideoTab/VideoTab'

function Hero() {
  const [videoIndex, setVideoIndex] = useState(1)

  const getVideoSource=(index)=>{
    if(index==5){
      index=1
    }
    
    return `/public/Videos/hero-${index}.mp4`

  }
  const handleMiniPlayerClick=()=>{
    if(videoIndex==4){
      setVideoIndex(0)
    }
  setVideoIndex((prev)=>prev+1)

  }
  const handleTabClick=(index)=>{
    setVideoIndex(index)
  }
  return (
    <>
      <div id='hero-window' className='relative w-screen h-dvh bg-white overflow-hidden'>
        <div id="background" className='relative w-screen h-dvh z-10 mask-clip-path overflow-x-hidden'>
          
          {/* <div id='mini-player' onClick={handleMiniPlayerClick} className=' hover:cursor-pointer relative size-64 rounded-lg origin-center bg-blue-400 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] content-center z-50 contain-content scale-50 opacity-0 hover:scale-100 hover:opacity-100 transition-all ease-in-out duration-300 '>
            <video id='mini-video' className=' scale-[2.4]' src={getVideoSource(videoIndex+1)} loop mute></video>

          </div> */}
          <video className=' object-cover w-screen h-screen absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] content-center z-20 overflow-x-hidden' src={getVideoSource(videoIndex)} muted autoPlay loop></video>
          <h1 id='bottom-text' className='absolute bottom-32 right-3 z-50 text-white w-[30%] font-bold text-[3rem] font-banksans'>BECOME A HERO</h1>
          <div id='overwatch-logo' >
            <img src="/public/Images/overwatch-logo.png" className=' absolute w-[30rem] z-40 top-24 left-10' alt="" />
        <div id='video-navigator' className='absolute z-40 bottom-10 left-44'>
          <div id='vid-tabs '>
          <VideoTab index={1} isActive={videoIndex==1} onClick={()=>handleTabClick(1)}/>
          <VideoTab index={2} isActive={videoIndex==2} onClick={()=>handleTabClick(2)}/>
          <VideoTab index={3} isActive={videoIndex==3} onClick={()=>handleTabClick(3)}/>
          <VideoTab index={4} isActive={videoIndex==4} onClick={()=>handleTabClick(4)}/>

          </div>

        </div>
          </div>
          <div className='absolute w-screen h-dvh top-0 bg-black opacity-50 z-30 '></div>
        </div>


      </div>
    </>
  )
}

export default Hero