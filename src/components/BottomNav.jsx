import React from "react";
import "../styles/BottomNav.css";

function BottomNav() {
  return (
    <div className="bottom">
      <div className="nav">
        <div>
          <ion-icon name="home"></ion-icon>
          <p>Home</p>
        </div>
        <div>
          <ion-icon name="grid"></ion-icon>
          <p>Explore</p>
        </div>
        <div className="create">
          <ion-icon name="add-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="chatbox-ellipses"></ion-icon>
          <p>Inbox</p>
        </div>
        <div>
          <ion-icon name="person"></ion-icon>
          <p>Me</p>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
