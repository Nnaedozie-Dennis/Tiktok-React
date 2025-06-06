import React from "react";
import { useEffect, useRef } from "react";
import "../styles/VideoItem.css";
import Sidebar from "./Sidebar";
import TextInbox from "./TextInbox";

function VideoItem({ video, index, isLast }) {
  const videoRef = useRef(null);

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className={`vid ${isLast ? "last" : ""}`}>
      <video
        ref={videoRef}
        src={video.src}
        className="video"
        playsInline
        webkit-playsinline
        loop
        autoPlay
        onClick={handleVideoClick}
      ></video>
      <Sidebar
        likes={video.likes}
        comments={video.comments}
        shares={video.shares}
        profilePic={video.profilePic}
      />
      <TextInbox
        username={video.username}
        verified={video.verified}
        description={video.description}
        song={video.song}
      />
    </div>
  );
}

export default VideoItem;
