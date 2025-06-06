import React from "react";
import "../styles/Header.css";


function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="time">2:43 pm</div>
        <div className="phone-camera">
          <div className="camera">
            <div className="lens"></div>
          </div>
          <div className="lens-1"></div>
        </div>
        <div className="top-icons">
          <ion-icon name="cellular"></ion-icon>
          <ion-icon name="wifi"></ion-icon>
          <ion-icon name="battery-half"></ion-icon>
        </div>
      </div>

      
      <div className="tab-menu">
        <ion-icon name="tv-outline"></ion-icon>
        <div className="text">
          <p className="Following">
            <span></span>Following
          </p>
          <p className="Friends">
            <span>3</span>Friends
          </p>
          <p className="for-you">For You</p>
        </div>
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Header;
