import React from "react";
import "./style.css";

function Image(props) {
  return (
    <div className="text-center rounded" id="image-div">
      <img
        src={props.url}
        className="rounded"
        alt={props.name}
        className="click-item"
      />
    </div>
  );
}

export default Image;
