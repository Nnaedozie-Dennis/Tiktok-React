import React from "react";
import { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar(props) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="sidebar">
      <div className="profile-pic">
        <img src={props.profilePic} alt="profile" />
      </div>

      <div className="sidebar-nav heart">
        <ion-icon
          name="heart"
          style={{ color: liked ? "#f74c4c" : "inherit" }}
          onClick={toggleLike}
        ></ion-icon>
        <p>{props.likes}</p>
      </div>

      <div className="sidebar-nav comment">
        <ion-icon name="chatbubble-ellipses"></ion-icon>
        <p>{props.comments}</p>
      </div>

      <div className="sidebar-nav share">
        <ion-icon name="arrow-redo"></ion-icon>
        <p>{props.shares}</p>
      </div>

      <div className="sidebar-nav link">
        <ion-icon name="link"></ion-icon>
      </div>

      <div className="sidebar-nav disk">
        <ion-icon name="disc-sharp"></ion-icon>
      </div>
    </div>
  );
}

export default Sidebar;
