import React from "react";
import "../styles/VideoFeed.css";
import VideoItem from "./VideoItem";
import videos from "../data/Videos";

function VideoFeed() {
  return (
    <div className="video-container">
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          video={video}
          index={index}
          isLast={index === videos.length - 1}
        />
      ))}
    </div>
  );
}

export default VideoFeed;
