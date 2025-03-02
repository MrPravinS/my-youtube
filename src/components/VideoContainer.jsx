import React, { useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'

const VideoContainer = () => {

  useEffect(()=>{
     getVideos()
  },[])

  const getVideos = async() => {
     const data = await fetch(YOUTUBE_VIDEOS_API)
     const jsonData = await data.json()
     console.log(jsonData);
     
  }
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer