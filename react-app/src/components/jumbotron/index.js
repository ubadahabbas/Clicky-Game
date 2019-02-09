import React from "react";

class Jumbotron extends React.Component {
    render() {
        return (
            <div class="jumbotron">
                <h1 class="display-4">Clicky Game!</h1>
                <hr class="my-4"></hr>
                <p>Click on an image to earn points, but don't click on any more than once!.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Developer's Portfolio</a>
            </div>
        );
    }
}

export default Jumbotron;