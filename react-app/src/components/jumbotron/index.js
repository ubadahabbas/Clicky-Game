import React from "react";
import "./style.css";

class Jumbotron extends React.Component {
    render() {
        return (
            <div class="jumbotron text-center">
                <h1 class="display-4 ">Clicky Game!</h1>
                <hr class="my-4"></hr>
                <h5>Click on an image to earn points, but don't click on any more than once!.</h5>
                <hr></hr>
                <a class="btn btn-primary btn-lg" href="https://ubadahatta.github.io/" role="button">Developer's Portfolio</a>
            </div>
        );
    }
}

export default Jumbotron;