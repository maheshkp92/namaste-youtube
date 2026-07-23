import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { statistics } = info;
  const { channelTitle, title, thumbnails } = info?.snippet;
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img
        className="rounded-lg"
        alt="video-image"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
