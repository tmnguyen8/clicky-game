import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} onClick={props.handleClick}/>
      </div>
    </div>
  );
}

export default ImageCard;