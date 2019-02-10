import React from "react";
import "./style.css";


function Header (props){
        return (
         
            <nav class="navbar navbar-light bg-light sticky-top">
                {/* <a class="navbar-brand" href="#">Clicky Game</a> */}
                <h4>{ }</h4>
                <h4> Score: {props.score}</h4>
                <h4>|</h4>
                <h4> Top Score: {props.topScore}</h4>
                <h4>{ }</h4>
                {/* <h3></h3> */}
            </nav>
     
        );
}

export default Header;