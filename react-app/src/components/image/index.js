import React from "react";
import "./style.css";

function Image(props) {
    return (
        <div class="col-md-4">
            <div class="text-center" onClick={() => props.imageClick(props.id)}>
                <img src={props.url} class="rounded" alt={props.name} class="click-item" />
            </div>
        </div>
    );
}

export default Image;