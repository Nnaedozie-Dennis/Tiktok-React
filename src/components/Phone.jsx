import React from 'react'
import "../styles/Phone.css";
import Header from "./Header";
import VideoFeed from "./VideoFeed";
import BottomNav from "./BottomNav";


function Phone() {
  return (
    <div className="phone">
      <div className="volume-button"></div>
      <div className="power-button"></div>
      <div className="phone-innerlayer">
        <Header />
        <VideoFeed />
        <BottomNav />
      </div>
    </div>
  );
}

export default Phone;
