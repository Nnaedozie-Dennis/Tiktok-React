import React from "react";
import "../styles/TextInbox.css";

function TextInbox(props) {
  return (
    <div className="text-inbox">
      <div className="username">
        <p>
          {props.username}{" "}
          {props.verified && <ion-icon name="checkmark-sharp"></ion-icon>}
        </p>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="song">
        <ion-icon name="musical-notes"></ion-icon>
        <p>{props.song}</p>
      </div>
    </div>
  );
}

export default TextInbox;
