import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_LIST_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_LIST_API_URL);
    const json = await data.json();
    // console.log(json);
    setVideos(json?.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  // if (!videos) return null;

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
