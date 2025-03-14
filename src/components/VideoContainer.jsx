import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
import VideosCart from "./VideosCart";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    console.log(jsonData.items);
    if (jsonData.items) {
      setVideos(jsonData.items);
    }
  }; 

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`} className="m-2">
            <VideosCart info={video} />
          </Link>
        ))
      ) : (
        <div><Shimmer/></div>
      )}
    </div>
  );
};

export default VideoContainer;
