import React from "react";
function Header (props){

  
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Clicky Game</a>
                <h4> Score: {props.score}</h4>
                <h4> Top Score: {props.topScore}</h4>
                {/* <h3></h3> */}
            </nav>
        );

}

export default Header;